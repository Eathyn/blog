import{_ as a,r as t,o as p,c as o,b as n,d as e,a as c,e as l}from"./app.0a43b3c6.js";const u="/blog/assets/cancel_request.65a250b0.png",r="/blog/assets/url_encoding.463f331e.png",i={},k=c(`<h1 id="axios" tabindex="-1"><a class="header-anchor" href="#axios" aria-hidden="true">#</a> Axios</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><ul><li>\u57FA\u4E8E Promise \u7684 HTTP \u5BA2\u6237\u7AEF</li></ul><h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><ul><li>\u6D4F\u89C8\u5668\u73AF\u5883\u4F7F\u7528 <code>XMLHttpRequest</code></li><li>Node.js \u73AF\u5883\u4F7F\u7528 <code>http</code></li><li>\u652F\u6301 <code>Promise</code></li><li>\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94</li><li>\u6539\u53D8\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u6570\u636E</li><li>\u53D6\u6D88\u8BF7\u6C42</li><li>\u81EA\u52A8\u5C06\u6570\u636E\u8F6C\u5316\u4E3A <code>JSON</code></li><li>\u9632\u6B62 <code>XSRF</code> \u653B\u51FB</li></ul><h2 id="interceptor-\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#interceptor-\u62E6\u622A\u5668" aria-hidden="true">#</a> interceptor \u62E6\u622A\u5668</h2><ul><li>\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> axiosInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:4000&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

axiosInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u62E6\u622A\u8BF7\u6C42</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> config
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

axiosInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u62E6\u622A\u54CD\u5E94</span>
  <span class="token comment">// ...</span>
  <span class="token keyword">return</span> response
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="cancellation-\u53D6\u6D88\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#cancellation-\u53D6\u6D88\u8BF7\u6C42" aria-hidden="true">#</a> cancellation \u53D6\u6D88\u8BF7\u6C42</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> axiosInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:4000&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axiosInstance<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><em>\u7ED3\u679C</em></p><p><img src="`+u+'" alt="cancel request"></p><h2 id="url-encoding" tabindex="-1"><a class="header-anchor" href="#url-encoding" aria-hidden="true">#</a> URL-Encoding</h2><ul><li>axios \u9ED8\u8BA4\u60C5\u51B5\u4E0B\u5C06\u5BF9\u8C61\u5E8F\u5217\u5316\u4E3A JSON \u683C\u5F0F\uFF0C\u60F3\u8981\u5C06\u6570\u636E\u8F6C\u53D8\u4E3A <code>application/x-www-form-urlencoded</code> \u683C\u5F0F\uFF0C\u9700\u8981\u4F7F\u7528 <code>URLSearchParams</code> \u6216 <code>qs</code> \u5E93</li></ul><p><img src="'+r+`" alt="url_encoding"></p><h3 id="urlsearchparams" tabindex="-1"><a class="header-anchor" href="#urlsearchparams" aria-hidden="true">#</a> URLSearchParams</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  params<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;100&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> axiosInstance<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/test-post&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="qs-library" tabindex="-1"><a class="header-anchor" href="#qs-library" aria-hidden="true">#</a> qs Library</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> qs <span class="token keyword">from</span> <span class="token string">&#39;qs&#39;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
  <span class="token keyword">await</span> axiosInstance<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;/test-post&#39;</span><span class="token punctuation">,</span> qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="encapsulating-get-and-post-request" tabindex="-1"><a class="header-anchor" href="#encapsulating-get-and-post-request" aria-hidden="true">#</a> Encapsulating GET and POST request</h2><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> oneSecond <span class="token operator">=</span> <span class="token number">1000</span>
<span class="token keyword">const</span> baseURL <span class="token operator">=</span> <span class="token string">&#39;base-url&#39;</span>

<span class="token keyword">function</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> timeout <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> oneSecond</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span>
    baseURL<span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    params<span class="token punctuation">,</span>
    timeout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">post</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> timeout <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> oneSecond</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>
    baseURL<span class="token punctuation">,</span>
    url<span class="token punctuation">,</span>
    data<span class="token punctuation">,</span>
    timeout<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,22),d={href:"https://axios-http.com/",target:"_blank",rel:"noopener noreferrer"},h=l("axios docs");function m(g,f){const s=t("ExternalLinkIcon");return p(),o("div",null,[k,n("ul",null,[n("li",null,[n("a",d,[h,e(s)])])])])}const x=a(i,[["render",m],["__file","index.html.vue"]]);export{x as default};
