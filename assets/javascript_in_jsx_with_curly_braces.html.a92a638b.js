import{_ as a,r as t,o as e,c as p,b as s,d as o,a as c,e as r}from"./app.0a43b3c6.js";const l={},i=c(`<h1 id="javascript-in-jsx-with-curly-braces" tabindex="-1"><a class="header-anchor" href="#javascript-in-jsx-with-curly-braces" aria-hidden="true">#</a> JavaScript in JSX with Curly Braces</h1><h2 id="passing-strings-with-quotes" tabindex="-1"><a class="header-anchor" href="#passing-strings-with-quotes" aria-hidden="true">#</a> Passing strings with quotes</h2><ul><li>Passing string with double or single quotes</li></ul><p><em>App.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;./App.css&#39;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;box&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>App.css</em></p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> darkred<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="using-curly-braces-a-window-into-the-javascript-world" tabindex="-1"><a class="header-anchor" href="#using-curly-braces-a-window-into-the-javascript-world" aria-hidden="true">#</a> Using curly braces: A window into the JavaScript world</h2><ul><li>Using the curly brace to contain the variable.</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> content <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span>content<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Places to use curly braces: <ul><li>As text directly inside a JSX tag</li><li>As attributes immediately following the = sign</li></ul></li></ul><h2 id="using-double-curlies-css-and-other-objects-in-jsx" tabindex="-1"><a class="header-anchor" href="#using-double-curlies-css-and-other-objects-in-jsx" aria-hidden="true">#</a> Using \u201Cdouble curlies\u201D: CSS and other objects in JSX</h2><ul><li>To pass a JS object in JSX, you must wrap the object in another pair of curly braces.</li><li>Inline <code>style</code> properties are written in camelCase.</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,15),u={href:"https://beta.reactjs.org/learn/javascript-in-jsx-with-curly-braces",target:"_blank",rel:"noopener noreferrer"},k=r("JavaScript in JSX with Curly Braces");function d(h,g){const n=t("ExternalLinkIcon");return e(),p("div",null,[i,s("ul",null,[s("li",null,[s("a",u,[k,o(n)])])])])}const b=a(l,[["render",d],["__file","javascript_in_jsx_with_curly_braces.html.vue"]]);export{b as default};
