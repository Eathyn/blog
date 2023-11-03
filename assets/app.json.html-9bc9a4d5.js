import{_ as a,W as o,X as t,Y as e,Z as n,$ as l,a0 as r,C as c}from"./framework-0d71bc9d.js";const i={},p=e("h1",{id:"app-json",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#app-json","aria-hidden":"true"},"#"),n(" app.json")],-1),d=e("ul",null,[e("li",null,[n("通过 "),e("code",null,"app.json"),n(" 进行全局配置。")])],-1),u=e("h2",{id:"resolvealias",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resolvealias","aria-hidden":"true"},"#"),n(" resolveAlias")],-1),_={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html",target:"_blank",rel:"noopener noreferrer"},v=r(`<ul><li>微信小程序的 <code>require</code> 只支持相对路径，如果嵌套得比较深，路径就会出现很多 <code>..</code>，强迫症实在受不了。可以在 <code>app.json</code> 中配置路径别名解决这个问题。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;resolveAlias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;/*&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/*&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function h(m,k){const s=c("ExternalLinkIcon");return o(),t("div",null,[p,d,u,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",_,[n("resolveAlias"),l(s)])])]),v])}const b=a(i,[["render",h],["__file","app.json.html.vue"]]);export{b as default};