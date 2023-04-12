import{_ as n,W as s,X as a,a0 as e}from"./framework-c8ebc670.js";const t={},p=e(`<h1 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h1><h2 id="class-methods" tabindex="-1"><a class="header-anchor" href="#class-methods" aria-hidden="true">#</a> Class Methods</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  
  <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span>
p<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;smith&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="class-properties" tabindex="-1"><a class="header-anchor" href="#class-properties" aria-hidden="true">#</a> Class Properties</h2><ul><li>If you want to access a property on a class in TypeScript, that property must be declared in the class.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token comment">// Property &#39;grade&#39; does not exist on type &#39;Person&#39;.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> <span class="token number">4</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function-properties" tabindex="-1"><a class="header-anchor" href="#function-properties" aria-hidden="true">#</a> Function Properties</h3><ul><li>The function is a property of the constructor&#39;s prototype.</li><li>The arrow function is a property of instance.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">myMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token function-variable function">myProperty</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myMethod <span class="token operator">===</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myMethod<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myProperty <span class="token operator">===</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myProperty<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Transpile to JavaScript</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Person <span class="token operator">=</span> <span class="token doc-comment comment">/** <span class="token keyword">@class</span> */</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">myProperty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Person<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myMethod <span class="token operator">===</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myMethod<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myProperty <span class="token operator">===</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>myProperty<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initialization-checking" tabindex="-1"><a class="header-anchor" href="#initialization-checking" aria-hidden="true">#</a> Initialization Checking</h3><ul><li>Properties in class should be initialized unless properties are assigned in the constructor or the type of properties may be <code>undefined</code>.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token punctuation">{</span>
  <span class="token comment">// ok</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
  
  <span class="token comment">// ok</span>
  b<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token comment">// error: Property &#39;c&#39; has no initializer and is not definitely assigned in the constructor.</span>
  c<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token comment">// ok</span>
  d<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a
    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> b
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="definitely-assigned-properties" tabindex="-1"><a class="header-anchor" href="#definitely-assigned-properties" aria-hidden="true">#</a> Definitely assigned properties</h4><ul><li>Using <code>!</code> after property to inform TypeScript compiler don&#39;t apply strict initialization checking to that property.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token punctuation">{</span>
  <span class="token comment">// ok</span>
  a<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="optional-properties" tabindex="-1"><a class="header-anchor" href="#optional-properties" aria-hidden="true">#</a> Optional Properties</h3><ul><li>Using <code>?</code> after a property to indicate that property is optional.</li><li><code>?</code> means the type of the property is a union of <code>undefined</code>.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token punctuation">{</span>
  <span class="token comment">// ok</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// -&gt; type is: string | undefined</span>
<span class="token punctuation">}</span>

<span class="token comment">// TS2532: Object is possibly &#39;undefined&#39;.</span>
<span class="token keyword">new</span> <span class="token class-name">Custom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>a<span class="token punctuation">.</span>length

<span class="token comment">// ok</span>
<span class="token keyword">new</span> <span class="token class-name">Custom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>a<span class="token operator">?.</span>length
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="read-only-properties" tabindex="-1"><a class="header-anchor" href="#read-only-properties" aria-hidden="true">#</a> Read-Only Properties</h3><ul><li><code>readonly</code> property cannot be modified except in the class constructor.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  
  <span class="token function">changeName</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TS2540: Cannot assign to &#39;name&#39; because it is a read-only property.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>A readonly property without explicit type annotation will be inferred to their value&#39;s narrowed literal type if possible, rather than the wider primitive.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;AAA&#39;</span> <span class="token comment">// type: string</span>
  <span class="token keyword">readonly</span> b <span class="token operator">=</span> <span class="token string">&#39;BBB&#39;</span> <span class="token comment">// type: &#39;BBB&#39;</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;aaa&#39;</span>
    <span class="token comment">// TS2322: Type &#39;&quot;bbb&quot;&#39; is not assignable to type &#39;&quot;BBB&quot;&#39;.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token string">&#39;bbb&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="classes-as-types" tabindex="-1"><a class="header-anchor" href="#classes-as-types" aria-hidden="true">#</a> Classes as Types</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// TS2741: Property &#39;name&#39; is missing in type &#39;{}&#39; but required in type &#39;Person&#39;.</span>
p1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">let</span> p2<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;eaven&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// TS2741: Property &#39;name&#39; is missing in type &#39;{}&#39; but required in type &#39;Person&#39;.</span>
p2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="classes-and-interfaces" tabindex="-1"><a class="header-anchor" href="#classes-and-interfaces" aria-hidden="true">#</a> Classes and Interfaces</h2><ul><li>An instance of a class which implements one or more interfaces should be assignable to each of those interfaces.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ok</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
  
  <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ok </span>
<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">implements</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  
  <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="implementing-multiple-interfaces" tabindex="-1"><a class="header-anchor" href="#implementing-multiple-interfaces" aria-hidden="true">#</a> Implementing Multiple Interfaces</h3><ul><li>A class can implement multiple interfaces.</li><li>All properties and methods must be implemented in the class.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">One</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Two</span> <span class="token punctuation">{</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token keyword">implements</span> <span class="token class-name">One</span><span class="token punctuation">,</span> Two <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TypeScript will throw error if a class implements multiple interfaces that has conflicting properties or methods.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">One</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Two</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Custom</span> <span class="token keyword">implements</span> <span class="token class-name">One</span><span class="token punctuation">,</span> Two <span class="token punctuation">{</span>
  <span class="token comment">// TS2416: Property &#39;a&#39; in type &#39;Custom&#39; is not assignable to the same property in base type &#39;Two&#39;.</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  
  <span class="token comment">// TS2416: Property &#39;a&#39; in type &#39;Custom&#39; is not assignable to the same property in base type &#39;One&#39;.</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extending-a-class" tabindex="-1"><a class="header-anchor" href="#extending-a-class" aria-hidden="true">#</a> Extending a Class</h2><ul><li>Derived class has all properties and methods of base class.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;eathyn&#39;</span>
  <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  grade<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">4</span>
  <span class="token function">getGrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>grade
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// property of base class</span>
<span class="token class-name"><span class="token builtin">console</span></span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>grade<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// method of base class</span>
<span class="token class-name"><span class="token builtin">console</span></span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">getGrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extension-assignability" tabindex="-1"><a class="header-anchor" href="#extension-assignability" aria-hidden="true">#</a> Extension Assignability</h3><ul><li>An instance of a derived class can be assigned to a variable with base class type annotation.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  grade<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> grade<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> student<span class="token operator">:</span> Person

<span class="token comment">// ok</span>
student <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

<span class="token comment">// TS2339: Property &#39;grade&#39; does not exist on type &#39;Person&#39;.</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>student<span class="token punctuation">.</span>grade<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>If all properties and methods of a base class already exist on its derived class with same type, instances of that base class can be assigned to a variable with derived class type annotation.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DerivedClassOne</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">2</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DerivedClassTwo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">3</span>
  b<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">4</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DerivedClassThree</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  c<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">5</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> instance1<span class="token operator">:</span> DerivedClassOne
instance1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaseClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ok</span>

<span class="token keyword">let</span> instance2<span class="token operator">:</span> DerivedClassTwo
instance2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaseClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// ok</span>

<span class="token keyword">let</span> instance3<span class="token operator">:</span> DerivedClassThree
<span class="token comment">// TS2741: Property &#39;c&#39; is missing in type &#39;BaseClass&#39; but required in type &#39;DerivedClassThree&#39;.</span>
instance3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BaseClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="overridden-methods" tabindex="-1"><a class="header-anchor" href="#overridden-methods" aria-hidden="true">#</a> Overridden Methods</h3><ul><li>Overridden methods in subclassed must be assignable to methods of base class.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClassOne</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// ok</span>
  <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClassTwo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// TS2416: Property &#39;fn&#39; in type &#39;SubClassTwo&#39; is not assignable to the same property in base type &#39;BaseClass&#39;.</span>
  <span class="token comment">// Type &#39;(a: number, b: number) =&gt; number&#39; is not assignable to type &#39;(a: number) =&gt; number&#39;.</span>
  <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClassThree</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// TS2416: Property &#39;fn&#39; in type &#39;SubClassThree&#39; is not assignable to the same property in base type &#39;BaseClass&#39;.</span>
  <span class="token comment">// Type &#39;(a: number) =&gt; string&#39; is not assignable to type &#39;(a: number) =&gt; number&#39;.</span>
  <span class="token comment">// Type &#39;string&#39; is not assignable to type &#39;number&#39;.</span>
  <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="overridden-properties" tabindex="-1"><a class="header-anchor" href="#overridden-properties" aria-hidden="true">#</a> Overridden Properties</h3><ul><li>Overridden Property types in subclass must be assignable to property types in base class.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClassOne</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClassTwo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// TS2416: Property &#39;a&#39; in type &#39;SubClassTwo&#39; is not assignable to the same property in base type &#39;BaseClass&#39;.</span>
  <span class="token comment">// Type &#39;string&#39; is not assignable to type &#39;number&#39;.</span>
  a<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Overridden properties are usually used to be narrowed to some more specific type in subclass.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token comment">// type: number | undefined</span>
  a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClass</span> <span class="token punctuation">{</span>
  a<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="abstract-classes" tabindex="-1"><a class="header-anchor" href="#abstract-classes" aria-hidden="true">#</a> Abstract Classes</h2><ul><li>A class that doesn&#39;t implement some methods.</li><li>Adding <code>abstract</code> keyword before a class or a method to indicates that is an abstract class.</li><li>TypeScript will throw error if abstract methods aren&#39;t implemented in subclass.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
  
  <span class="token keyword">abstract</span> <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  grade<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> grade<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>grade <span class="token operator">=</span> grade
  <span class="token punctuation">}</span>
  
  <span class="token comment">// must implement the method</span>
  <span class="token function">getInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>grade<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Cannot create an instance of an abstract class.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractClass</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// TS2511: Cannot create an instance of an abstract class.</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbstractClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="member-visibility" tabindex="-1"><a class="header-anchor" href="#member-visibility" aria-hidden="true">#</a> Member Visibility</h2><ul><li><code>public</code>: allowed to be accessed by anybody, anywhere</li><li><code>protected</code>: allowed to be accessed by the class itself and its subclass</li><li><code>private</code>: allowed to be accessed by the class itself</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> a<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token keyword">protected</span> b<span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token keyword">private</span> c<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a
    <span class="token keyword">this</span><span class="token punctuation">.</span>b <span class="token operator">=</span> b
    <span class="token comment">// private member is accessible in the class itself</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>c <span class="token operator">=</span> c
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubClass</span> <span class="token keyword">extends</span> <span class="token class-name">BaseClass</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> c<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">getB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// protected member is accessible in the class itself and subclasses</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>b
  <span class="token punctuation">}</span>
  <span class="token function">getC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TS2341: Property &#39;c&#39; is private and only accessible within class &#39;BaseClass&#39;.</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>c
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>A visibility keyword is positioned before the <code>readonly</code> keyword.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="static-field-modifiers" tabindex="-1"><a class="header-anchor" href="#static-field-modifiers" aria-hidden="true">#</a> Static Field Modifiers</h3><ul><li>static members are belong to a class rather than an instance.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">static</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;hello&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Base<span class="token punctuation">.</span>a<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Base<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>A visibility keyword comes first, then <code>static</code>, then <code>readonly</code>.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> a<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">static</span> <span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Base<span class="token punctuation">.</span><span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,66),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","chapter_08.html.vue"]]);export{r as default};
