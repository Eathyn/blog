import{_ as a,r as t,o as p,c as o,b as n,d as e,a as c,e as l}from"./app.0a43b3c6.js";const i={},u=c(`<h1 id="_75-\u4E3A\u5DF2\u6709\u7684-js-\u6587\u4EF6\u63D0\u4F9B\u7C7B\u578B\u58F0\u660E-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_75-\u4E3A\u5DF2\u6709\u7684-js-\u6587\u4EF6\u63D0\u4F9B\u7C7B\u578B\u58F0\u660E-\u5B9E\u73B0" aria-hidden="true">#</a> 75 \u4E3A\u5DF2\u6709\u7684 JS \u6587\u4EF6\u63D0\u4F9B\u7C7B\u578B\u58F0\u660E - \u5B9E\u73B0</h1><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><ul><li>\u5728 TS \u6587\u4EF6\u4E2D\u5BFC\u5165 JS \u6587\u4EF6\u65F6\uFF0CTS \u4F1A\u81EA\u52A8\u52A0\u8F7D\u4E0E JS \u6587\u4EF6\u540C\u540D\u7684 <code>.d.ts</code> \u6587\u4EF6\u3002\u4F8B\u5982\uFF1A\u5BFC\u5165 <code>utils.js</code> \u540C\u65F6\u4F1A\u52A0\u8F7D <code>utils.d.ts</code></li><li><code>declare</code> \u5173\u952E\u5B57\u7528\u4E8E\u7C7B\u578B\u58F0\u660E\uFF0C\u4E3A\u5176\u4ED6\u5730\u65B9\uFF08\u4F8B\u5982 JS \u6587\u4EF6\uFF09\u5DF2\u5B58\u5728\u7684\u53D8\u91CF\u58F0\u660E\u7C7B\u578B\uFF0C\u800C\u4E0D\u662F\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7C7B\u578B</li><li><code>interface</code> / <code>type</code> \u58F0\u660E\u7684\u7C7B\u578B\u53EF\u4EE5\u7701\u7565 <code>declare</code>\uFF1B<code>let</code> / <code>function</code> \u7B49\u58F0\u660E\u7684\u7C7B\u578B\u5FC5\u987B\u7528 <code>declare</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><p><em>utils.d.ts</em></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Direction</span> <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>

<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span>direction<span class="token operator">:</span> Direction<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>

<span class="token keyword">interface</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token builtin">number</span>
  y<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">LogPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span>point<span class="token operator">:</span> Point<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> logPoint<span class="token operator">:</span> LogPoint

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  Person<span class="token punctuation">,</span>
  Point<span class="token punctuation">,</span>
  add<span class="token punctuation">,</span>
  changeDirection<span class="token punctuation">,</span>
  logPoint<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>utils.js</em></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n1 <span class="token operator">+</span> n2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">changeDirection</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>direction<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">logPoint</span> <span class="token operator">=</span> <span class="token punctuation">(</span>point<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>x<span class="token punctuation">)</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>point<span class="token punctuation">.</span>y<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  add<span class="token punctuation">,</span>
  changeDirection<span class="token punctuation">,</span>
  logPoint<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p><em>index.ts</em></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> changeDirection<span class="token punctuation">,</span> Person<span class="token punctuation">,</span> Point<span class="token punctuation">,</span> logPoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;eathyn&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>

<span class="token function">changeDirection</span><span class="token punctuation">(</span><span class="token string">&#39;top&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> point<span class="token operator">:</span> Point <span class="token operator">=</span> <span class="token punctuation">{</span>
  x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  y<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token function">logPoint</span><span class="token punctuation">(</span>point<span class="token punctuation">)</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,11),r={href:"https://www.bilibili.com/video/BV14Z4y1u7pi?p=75&vd_source=9b4e3dff7609ad29f13d886e715862ba",target:"_blank",rel:"noopener noreferrer"},k=l("\u4E3A\u5DF2\u6709\u7684 JS \u6587\u4EF6\u63D0\u4F9B\u7C7B\u578B\u58F0\u660E - \u5B9E\u73B0");function d(g,f){const s=t("ExternalLinkIcon");return p(),o("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[k,e(s)])])])])}const y=a(i,[["render",d],["__file","index.html.vue"]]);export{y as default};
