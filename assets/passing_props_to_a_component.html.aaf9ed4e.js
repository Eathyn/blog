import{_ as s,r as p,o as t,c as o,b as n,d as e,a as c,e as r}from"./app.0a43b3c6.js";const l={},u=c(`<h1 id="passing-props-to-a-component" tabindex="-1"><a class="header-anchor" href="#passing-props-to-a-component" aria-hidden="true">#</a> Passing Props to a Component</h1><h2 id="passing-props-to-a-component-1" tabindex="-1"><a class="header-anchor" href="#passing-props-to-a-component-1" aria-hidden="true">#</a> Passing props to a component</h2><ul><li>Reading props in function parameter inside <code>{}</code>.</li></ul><p><em>App.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Person <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Person&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Person name<span class="token operator">=</span><span class="token punctuation">{</span>person<span class="token punctuation">.</span>name<span class="token punctuation">}</span> age<span class="token operator">=</span><span class="token punctuation">{</span>person<span class="token punctuation">.</span>age<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Person.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>name<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>age<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>React component functions accept a single argument, a <code>props</code> object.</li></ul><p><em>App.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Person <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Person&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Person name<span class="token operator">=</span><span class="token punctuation">{</span>person<span class="token punctuation">.</span>name<span class="token punctuation">}</span> age<span class="token operator">=</span><span class="token punctuation">{</span>person<span class="token punctuation">.</span>age<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Person.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>name<span class="token operator">:</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>age<span class="token operator">:</span> <span class="token punctuation">{</span>props<span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="specifying-a-default-value-for-a-prop" tabindex="-1"><a class="header-anchor" href="#specifying-a-default-value-for-a-prop" aria-hidden="true">#</a> Specifying a default value for a prop</h2><ul><li>If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter.</li></ul><p><em>App.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Count <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Count&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Count <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Count count<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Count.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Count</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> count <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>count<span class="token operator">:</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="forwarding-props-with-the-jsx-spread-syntax" tabindex="-1"><a class="header-anchor" href="#forwarding-props-with-the-jsx-spread-syntax" aria-hidden="true">#</a> Forwarding props with the JSX spread syntax</h2><ul><li>You can forward all props with <code>{...props}</code> JSX spread syntax</li></ul><p><em>App.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Wrap <span class="token keyword">from</span> <span class="token string">&#39;./Wrap&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;eathyn&#39;</span>
  <span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">25</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Wrap name<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span> age<span class="token operator">=</span><span class="token punctuation">{</span>age<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Wrap.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> Person <span class="token keyword">from</span> <span class="token string">&#39;./Person&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Wrap</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Person <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Person.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>name<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>age<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>When you nest content inside a JSX tag, the parent component will receive that content in a prop called <code>children</code>.</li></ul><p><em>App.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Card <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Card&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Avatar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Avatar&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> imageUrl <span class="token operator">=</span> <span class="token string">&#39;https://i.imgur.com/YfeOqp2s.jpg&#39;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Card<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Avatar url<span class="token operator">=</span><span class="token punctuation">{</span>imageUrl<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Card<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Card.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Card</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;card&quot;</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>Avatar.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">Avatar</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>url<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token string">&quot;avatar&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="how-props-change-over-time" tabindex="-1"><a class="header-anchor" href="#how-props-change-over-time" aria-hidden="true">#</a> How props change over time</h2><ul><li>Don&#39;t change props in current component because props are immutable.</li><li>Asking the parent component to change the props.</li></ul><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,36),k={href:"https://beta.reactjs.org/learn/passing-props-to-a-component",target:"_blank",rel:"noopener noreferrer"},i=r("Passing Props to a Component");function d(g,m){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",k,[i,e(a)])])])])}const h=s(l,[["render",d],["__file","passing_props_to_a_component.html.vue"]]);export{h as default};
