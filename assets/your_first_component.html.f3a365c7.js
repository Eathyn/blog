import{_ as a,r as t,o,c as e,b as n,d as p,a as r,e as c}from"./app.0a43b3c6.js";const l={},i=r(`<h1 id="your-first-component" tabindex="-1"><a class="header-anchor" href="#your-first-component" aria-hidden="true">#</a> Your First Component</h1><h2 id="components-ui-building-blocks" tabindex="-1"><a class="header-anchor" href="#components-ui-building-blocks" aria-hidden="true">#</a> Components: UI building blocks</h2><ul><li>React lets you combine your markup, CSS, and JavaScript into custom \u201Ccomponents\u201D, reusable UI elements for your app.</li></ul><h2 id="defining-a-component" tabindex="-1"><a class="header-anchor" href="#defining-a-component" aria-hidden="true">#</a> Defining a component</h2><ul><li>React components are regular JavaScript functions, but their names must start with a capital letter or they won\u2019t work.</li><li>Without parentheses, any code on the lines after <code>return</code> will be ignored.</li></ul><h2 id="using-a-component" tabindex="-1"><a class="header-anchor" href="#using-a-component" aria-hidden="true">#</a> Using a component</h2><ul><li>Components are regular JavaScript functions, so you can keep multiple components in the same file. This is convenient when components are relatively small or tightly related to each other.</li><li>Components can render other components, but you must never nest their definitions.</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>img
        src<span class="token operator">=</span><span class="token string">&quot;https://i.imgur.com/MK3eW3As.jpg&quot;</span>
        alt<span class="token operator">=</span><span class="token string">&quot;Katherine Johnson&quot;</span>
      <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Amazing scientists<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>The snippet above is very slow and causes bugs. Instead, define every component at the top level.</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">Profile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>img
      src<span class="token operator">=</span><span class="token string">&quot;https://i.imgur.com/MK3eW3As.jpg&quot;</span>
      alt<span class="token operator">=</span><span class="token string">&quot;Katherine Johnson&quot;</span>
    <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span>Amazing scientists<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Profile <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,11),u={href:"https://beta.reactjs.org/learn/your-first-component",target:"_blank",rel:"noopener noreferrer"},k=c("Your First Component");function d(h,m){const s=t("ExternalLinkIcon");return o(),e("div",null,[i,n("ul",null,[n("li",null,[n("a",u,[k,p(s)])])])])}const f=a(l,[["render",d],["__file","your_first_component.html.vue"]]);export{f as default};
