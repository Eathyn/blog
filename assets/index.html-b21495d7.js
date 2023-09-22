import{_ as p,W as d,X as u,Y as n,Z as s,$ as e,a1 as i,a0 as v,C as t}from"./framework-0d71bc9d.js";const m={},k=n("h1",{id:"stylelint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stylelint","aria-hidden":"true"},"#"),s(" Stylelint")],-1),b=n("p",null,"Reference:",-1),g={href:"https://stylelint.io/user-guide/get-started",target:"_blank",rel:"noopener noreferrer"},h={href:"https://stylelint.io/migration-guide/to-15",target:"_blank",rel:"noopener noreferrer"},y=v(`<h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> Init</h2><ul><li>安装 <code>stylelint</code> 和 <code>stylelint-config-standard</code>。</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev stylelint stylelint-config-standard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建并配置 <code>.stylelintrc.json</code>。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-config-standard&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建并配置 <code>.stylelintignore</code> 文件。</li></ul><div class="language-.stylelintignore line-numbers-mode" data-ext=".stylelintignore"><pre class="language-.stylelintignore"><code># Editor
.idea

# Node
node_modules
.env.development
.env.production
package.json
package-lock.json

# Bundler
dist

# Git
.gitignore

# Browser
.browserslistrc

# CSS
postcss.config.js

# Webpack
webpack.config.js

# other
public
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编写 npm 脚本。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;stylelint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylelint src/**/*.{css,scss,less}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> SCSS</h2><ul><li>安装 <code>postcss-scss</code> 处理 <code>scss</code> 文件。</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev postcss-scss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置 <code>.stylelintrc.json</code>。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.scss&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;customSyntax&quot;</span><span class="token operator">:</span> <span class="token string">&quot;postcss-scss&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> Less</h2><ul><li>安装 <code>postcss-less</code> 处理 <code>less</code> 文件。</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev postcss-less
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置 <code>.stylelintrc.json</code>。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;overrides&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/**/*.less&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;customSyntax&quot;</span><span class="token operator">:</span> <span class="token string">&quot;postcss-less&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> Order</h2><ul><li>安装 <code>stylelint-order</code> 使 CSS 属性排序。</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev stylelint-order
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置 <code>.stylelintrc.json</code>。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;stylelint-order&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;order/properties-order&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;height&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration-summary" tabindex="-1"><a class="header-anchor" href="#configuration-summary" aria-hidden="true">#</a> Configuration Summary</h2>`,25),q=n("div",{class:"language-json line-numbers-mode","data-ext":"json"},[n("pre",{class:"language-json"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},'"extends"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"stylelint-config-standard"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"overrides"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"files"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"src/**/*.scss"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"customSyntax"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"postcss-scss"'),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token property"},'"files"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"src/**/*.less"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token property"},'"customSyntax"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"postcss-less"'),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"plugins"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"stylelint-order"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token property"},'"rules"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},'"order/properties-order"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string"},'"width"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string"},'"height"'),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-ignore line-numbers-mode","data-ext":"ignore"},[n("pre",{class:"language-ignore"},[n("code",null,[n("span",{class:"token comment"},"# Editor"),s(`
`),n("span",{class:"token entry string"},".idea"),s(`

`),n("span",{class:"token comment"},"# Node"),s(`
`),n("span",{class:"token entry string"},"node_modules"),s(`
`),n("span",{class:"token entry string"},".env.development"),s(`
`),n("span",{class:"token entry string"},".env.production"),s(`
`),n("span",{class:"token entry string"},"package.json"),s(`
`),n("span",{class:"token entry string"},"package-lock.json"),s(`

`),n("span",{class:"token comment"},"# Bundler"),s(`
`),n("span",{class:"token entry string"},"dist"),s(`

`),n("span",{class:"token comment"},"# Git"),s(`
`),n("span",{class:"token entry string"},".gitignore"),s(`

`),n("span",{class:"token comment"},"# Browser"),s(`
`),n("span",{class:"token entry string"},".browserslistrc"),s(`

`),n("span",{class:"token comment"},"# CSS"),s(`
`),n("span",{class:"token entry string"},"postcss.config.js"),s(`

`),n("span",{class:"token comment"},"# Webpack"),s(`
`),n("span",{class:"token entry string"},"webpack.config.js"),s(`

`),n("span",{class:"token comment"},"# other"),s(`
`),n("span",{class:"token entry string"},"public"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(x,j){const a=t("ExternalLinkIcon"),l=t("CodeTabs");return d(),u("div",null,[k,n("blockquote",null,[b,n("ul",null,[n("li",null,[n("a",g,[s("Docs"),e(a)])]),n("li",null,[n("a",h,[s("Migrating to 15.0.0"),e(a)])])])]),y,e(l,{id:"115",data:[{title:".stylelintrc.json"},{title:".stylelintignore"}]},{tab0:i(({title:o,value:c,isActive:r})=>[q]),tab1:i(({title:o,value:c,isActive:r})=>[_]),_:1},8,["data"])])}const C=p(m,[["render",f],["__file","index.html.vue"]]);export{C as default};
