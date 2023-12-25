import{_ as e,W as o,X as p,Y as s,Z as n,$ as t,a0 as c,C as l}from"./framework-0d71bc9d.js";const i="/blog/assets/throw_error-82f1e188.png",r="/blog/assets/error_lack_process-69a00cfc.png",d={},u=s("h1",{id:"node-core-modules",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#node-core-modules","aria-hidden":"true"},"#"),n(" Node Core Modules")],-1),k=s("p",null,"Reference:",-1),v={href:"https://webpack.js.org/configuration/resolve/#resolvefallback",target:"_blank",rel:"noopener noreferrer"},m=c('<p>webpack 5 之前自动添加了可以在浏览器上运行的 Node.js 核心模块，如 <code>path</code>，所以在代码中可以直接引入这些核心模块。webpack 5 取消了自动添加这些模块，需要手动下载这些模块并且进行配置 <code>resolve.fallback</code> 才能使用。如果没有下载和配置，就会出现以下报错：</p><figure><img src="'+i+`" alt="没有下载和配置的情况下使用了可以在浏览器上运行的 Node.js 的核心模块" tabindex="0" loading="lazy"><figcaption>没有下载和配置的情况下使用了可以在浏览器上运行的 Node.js 的核心模块</figcaption></figure><p>下载 <code>path</code> 模块：</p><div class="language-dash line-numbers-mode" data-ext="dash"><pre class="language-dash"><code>npm i path-browserify
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 <code>resolve.fallback</code>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;path-browserify&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为 <code>path</code> 模块 的 <code>resolve</code> 方法依赖于 <code>process</code> 模块，所以需要下载 <code>process</code> 模块，否则报错：</p><figure><img src="`+r+`" alt="缺少 process 模块导致报错" tabindex="0" loading="lazy"><figcaption>缺少 process 模块导致报错</figcaption></figure><p>下载 <code>process</code> 模块：</p><div class="language-dash line-numbers-mode" data-ext="dash"><pre class="language-dash"><code>npm i process
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 <code>webpack</code> 使用 <code>process</code> 模块：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> ProvidePlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">process</span><span class="token operator">:</span> <span class="token string">&#39;process/browser&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function b(g,h){const a=l("ExternalLinkIcon");return o(),p("div",null,[u,s("blockquote",null,[k,s("ul",null,[s("li",null,[s("a",v,[n("Node.js core modules in webpack"),t(a)])])])]),m])}const _=e(d,[["render",b],["__file","index.html.vue"]]);export{_ as default};
