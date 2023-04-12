import{_ as o,W as l,X as i,Y as n,Z as a,$ as e,a0 as t,C as r}from"./framework-c8ebc670.js";const c={},p=t('<h1 id="page-loading-and-rendering" tabindex="-1"><a class="header-anchor" href="#page-loading-and-rendering" aria-hidden="true">#</a> Page Loading and Rendering</h1><h2 id="loading-process" tabindex="-1"><a class="header-anchor" href="#loading-process" aria-hidden="true">#</a> Loading Process</h2><ol><li>DNS 解析 : 域名变为 IP 地址</li><li>浏览器根据 IP 地址向服务器发送请求</li><li>服务器处理请求，向浏览器发送响应</li></ol><h2 id="rendering-process" tabindex="-1"><a class="header-anchor" href="#rendering-process" aria-hidden="true">#</a> Rendering Process</h2><ol><li>根据 HTML 生成 DOM 树</li><li>根据 CSS 生成 CSSOM</li><li>将 DOM 树和 CSSOM 整合成 Render 树</li><li>根据 Render 树渲染页面</li><li>遇到 <code>&lt;script&gt;</code> 则暂停渲染，执行完 JS 后再继续渲染</li></ol>',5),d={href:"https://blog.logrocket.com/how-browser-rendering-works-behind-scenes/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969",target:"_blank",rel:"noopener noreferrer"},h=t(`<h2 id="loading-api" tabindex="-1"><a class="header-anchor" href="#loading-api" aria-hidden="true">#</a> Loading API</h2><ul><li><code>DOMContentLoaded</code> : HTML 已加载，其他资源未加载</li><li><code>load</code> : HTML 和其他资源都已加载</li><li><code>beforeunload</code> : 用户正要离开页面，可用于检查用户是否保存表单数据并提醒用户是否要离开页面</li><li><code>unload</code> : 用户几乎要离开页面，可用于初始化操作或发送分析数据</li></ul><h2 id="attentions" tabindex="-1"><a class="header-anchor" href="#attentions" aria-hidden="true">#</a> Attentions</h2><h3 id="为什么把-css-放在-head-中" tabindex="-1"><a class="header-anchor" href="#为什么把-css-放在-head-中" aria-hidden="true">#</a> 为什么把 css 放在 head 中</h3><p>避免重新渲染 Render 树</p><h3 id="为什么把-js-放在-body-最后" tabindex="-1"><a class="header-anchor" href="#为什么把-js-放在-body-最后" aria-hidden="true">#</a> 为什么把 js 放在 body 最后</h3><p>确保 js 可以操作 DOM</p><p><em>index.html</em></p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>index.js</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.test&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,12),g={href:"https://stackoverflow.com/a/1642259/9863318",target:"_blank",rel:"noopener noreferrer"},k={href:"https://qr.ae/pvPlyJ",target:"_blank",rel:"noopener noreferrer"},m={href:"https://javascript.info/onload-ondomcontentloaded",target:"_blank",rel:"noopener noreferrer"};function b(f,v){const s=r("ExternalLinkIcon");return l(),i("div",null,[p,n("ul",null,[n("li",null,[a("Reading: "),n("ul",null,[n("li",null,[n("a",d,[a("How browser rendering works — behind the scenes"),e(s)])]),n("li",null,[n("a",u,[a("How the browser renders a web page? — DOM, CSSOM, and Rendering"),e(s)])])])])]),h,n("ul",null,[n("li",null,[n("a",g,[a("为什么把 css 放在 head 中"),e(s)])]),n("li",null,[n("a",k,[a("为什么把 js 放在 body 最后"),e(s)])]),n("li",null,[n("a",m,[a("Page Loading APIs"),e(s)])])])])}const x=o(c,[["render",b],["__file","index.html.vue"]]);export{x as default};
