import{_ as o,W as l,X as t,Y as a,Z as e,$ as s,a0 as i,C as r}from"./framework-c8ebc670.js";const c={},p=i(`<h1 id="lock-package-manager" tabindex="-1"><a class="header-anchor" href="#lock-package-manager" aria-hidden="true">#</a> Lock Package Manager</h1><h2 id="why-need-to-lock-package-manager" tabindex="-1"><a class="header-anchor" href="#why-need-to-lock-package-manager" aria-hidden="true">#</a> Why Need to Lock Package Manager</h2><ul><li>Avoid developers using different package managers.</li></ul><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="install-only-allow-package" tabindex="-1"><a class="header-anchor" href="#install-only-allow-package" aria-hidden="true">#</a> Install <code>only-allow</code> Package</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> only-allow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="configure-preinstall-in-package-json" tabindex="-1"><a class="header-anchor" href="#configure-preinstall-in-package-json" aria-hidden="true">#</a> Configure <code>preinstall</code> in <code>package.json</code></h3><ul><li>Only using <code>npm</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;preinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx only-allow npm&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Only using <code>yarn</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;preinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx only-allow yarn&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Only using <code>pnpm</code></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;preinstall&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx only-allow pnpm&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,14),d={href:"https://segmentfault.com/a/1190000041918155",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.npmjs.com/package/only-allow",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/Eathyn/lock-package-manager",target:"_blank",rel:"noopener noreferrer"};function k(g,v){const n=r("ExternalLinkIcon");return l(),t("div",null,[p,a("ul",null,[a("li",null,[a("a",d,[e("Lock Package Manager"),s(n)])]),a("li",null,[a("a",u,[e("only-allow package"),s(n)])]),a("li",null,[a("a",h,[e("Repo"),s(n)])])])])}const b=o(c,[["render",k],["__file","index.html.vue"]]);export{b as default};