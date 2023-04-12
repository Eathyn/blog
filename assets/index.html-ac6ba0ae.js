import{_ as a,W as e,X as t,Y as n,Z as p,$ as o,a0 as c,C as i}from"./framework-c8ebc670.js";const l={},u=c(`<h1 id="_75-为已有的-js-文件提供类型声明-实现" tabindex="-1"><a class="header-anchor" href="#_75-为已有的-js-文件提供类型声明-实现" aria-hidden="true">#</a> 75 为已有的 JS 文件提供类型声明 - 实现</h1><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2><ul><li>在 TS 文件中导入 JS 文件时，TS 会自动加载与 JS 文件同名的 <code>.d.ts</code> 文件。例如：导入 <code>utils.js</code> 同时会加载 <code>utils.d.ts</code></li><li><code>declare</code> 关键字用于类型声明，为其他地方（例如 JS 文件）已存在的变量声明类型，而不是创建一个新的类型</li><li><code>interface</code> / <code>type</code> 声明的类型可以省略 <code>declare</code>；<code>let</code> / <code>function</code> 等声明的类型必须用 <code>declare</code></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><p><em>utils.d.ts</em></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> n2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>utils.js</em></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>n1<span class="token punctuation">,</span> n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>index.ts</em></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> changeDirection<span class="token punctuation">,</span> Person<span class="token punctuation">,</span> Point<span class="token punctuation">,</span> logPoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./utils&#39;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,11),r={href:"https://www.bilibili.com/video/BV14Z4y1u7pi?p=75&vd_source=9b4e3dff7609ad29f13d886e715862ba",target:"_blank",rel:"noopener noreferrer"};function d(k,v){const s=i("ExternalLinkIcon");return e(),t("div",null,[u,n("ol",null,[n("li",null,[n("a",r,[p("为已有的 JS 文件提供类型声明 - 实现"),o(s)])])])])}const b=a(l,[["render",d],["__file","index.html.vue"]]);export{b as default};
