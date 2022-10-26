import{_ as s,r as t,o as p,c as e,b as n,d as o,a as c,e as l}from"./app.0a43b3c6.js";const r={},i=c(`<h1 id="\u83B7\u53D6\u5168\u5C40\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u5168\u5C40\u6570\u636E" aria-hidden="true">#</a> \u83B7\u53D6\u5168\u5C40\u6570\u636E</h1><ul><li>\u5728 app.js \u7684 <code>App</code> \u4E2D\u5B9A\u4E49\u7684\u6570\u636E\u53EF\u5168\u5C40\u8BBF\u95EE</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token string">&#39;hi&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// page/index/index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">result</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">getApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>globalData<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,5),u={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html",target:"_blank",rel:"noopener noreferrer"},k=l("get global data");function d(h,_){const a=t("ExternalLinkIcon");return p(),e("div",null,[i,n("ul",null,[n("li",null,[n("a",u,[k,o(a)])])])])}const f=s(r,[["render",d],["__file","index.html.vue"]]);export{f as default};
