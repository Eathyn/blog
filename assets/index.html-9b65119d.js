import{_ as i,W as t,X as l,Y as e,Z as n,$ as o,a0 as a,C as r}from"./framework-0d71bc9d.js";const d={},c=e("h1",{id:"eslint",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#eslint","aria-hidden":"true"},"#"),n(" ESLint")],-1),u=e("h2",{id:"set-up",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#set-up","aria-hidden":"true"},"#"),n(" Set Up")],-1),p=e("p",null,"Reference:",-1),h={href:"https://eslint.org/docs/latest/use/getting-started#quick-start",target:"_blank",rel:"noopener noreferrer"},v={href:"https://eslint.org/docs/latest/use/getting-started#manual-set-up",target:"_blank",rel:"noopener noreferrer"},g=a(`<ul><li>通过脚手架引入 <code>ESLint</code>：</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm init @eslint/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>手动引入 <code>ESLint</code>：</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm install --save-dev eslint

# create and config .eslintrc.js file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2>`,5),m=e("p",null,"Reference:",-1),b={href:"https://eslint.org/docs/latest/use/getting-started#configuration",target:"_blank",rel:"noopener noreferrer"},f=a(`<h3 id="错误级别" tabindex="-1"><a class="header-anchor" href="#错误级别" aria-hidden="true">#</a> 错误级别</h3><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;rule&quot;: {
    &quot;rule-name&quot;: [&quot;error-level&quot;]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>rule-name</code>：规则名，例如 <code>semi</code>, <code>quotes</code>。</p></li><li><p><code>error-level</code>：错误级别。</p><ul><li><code>off</code> / 0：不使用该规则。</li><li><code>warn</code> / 1：使用该规则，违反该规则时进行警告。</li><li><code>error</code> / 2：使用该规则，违反该规则时进行报错。</li></ul></li></ul><h3 id="扩展规则" tabindex="-1"><a class="header-anchor" href="#扩展规则" aria-hidden="true">#</a> 扩展规则</h3>`,4),_={href:"https://eslint.org/docs/latest/use/configure/configuration-files#extending-configuration-files",target:"_blank",rel:"noopener noreferrer"},k=a(`<ul><li><p><code>extends</code>：继承其他配置文件中的规则、插件和语言选项。</p></li><li><p>可以忽略 <code>eslint-config-</code> 前缀。例如：<code>airbnb</code> 相当于 <code>eslint-config-airbnb</code>。</p></li></ul><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
  &quot;extends&quot;: &quot;eslint:recommended&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),q=e("code",null,'"extends": "eslint:recommended"',-1),S={href:"https://eslint.org/docs/latest/rules",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"recommended",-1),E=e("h2",{id:"concepts",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#concepts","aria-hidden":"true"},"#"),n(" Concepts")],-1),L={href:"https://eslint.org/docs/latest/use/core-concepts",target:"_blank",rel:"noopener noreferrer"},C=a('<ul><li><p>ESLint：帮助开发者找出和修复错误的代码。</p></li><li><p>规则（Rule）：代码需要满足的一系列条件。</p></li><li><p>配置文件（Configuration File）：项目中配置 ESLint 的文件。例如：<code>.eslintrc.json</code>。</p></li><li><p>可共享的配置（Sharable Configuration）：通过 npm 共享的配置。例如：<code>eslint-config-airbnb-base</code>。</p></li><li><p>插件（Plugin）：包含一系列自定义的规则、配置、处理器和环境。例如：<code>eslint-plugin-vue</code>。</p></li><li><p>解析器（Parser）：ESLint 使用 Espree 解析器将代码转化为 ESLint 可以识别的抽象语法树，Espree 兼容标准的 JavaScript 运行时和版本。对于插件中的自定义的规则，会使用特定的解析器解析语法。例如：在 <code>eslint-plugin-vue</code> 插件中使用 <code>vue-eslint-parser</code> 解析语法。</p></li><li><p>自定义处理器（Custom Processor）：在非 JavaScript 文件中提取出 JavaScript 代码供 ESLint 检验。例如：<code>eslint-plugin-markdown</code> 将 markdown 文件中的 JavaScript 代码提取出来供 ESLint 检验。</p></li><li><p>格式化器（Formatters）：控制校验结果的格式。</p></li></ul><h2 id="configure-language-options" tabindex="-1"><a class="header-anchor" href="#configure-language-options" aria-hidden="true">#</a> Configure Language Options</h2>',2),J={href:"https://eslint.org/docs/latest/use/configure/language-options",target:"_blank",rel:"noopener noreferrer"},N=a(`<ul><li>JavaScript 生态有多种运行时、版本、扩展和框架。它们有着不同的语法和全局变量。<code>.eslintrc.json</code> 中的 <code>env</code> 选项用于配置项目的环境。如下所示：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commonjs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;es2021&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果将 <code>env.browser</code> 设置为 <code>false</code>，并在 JS 文件中使用了全局变量 <code>Window</code>，那么 ESLint 就会报错：<code>ESLint: &#39;Window&#39; is not defined.(no-undef)</code>。</li></ul>`,3);function O(j,w){const s=r("ExternalLinkIcon");return t(),l("div",null,[c,u,e("blockquote",null,[p,e("ul",null,[e("li",null,[e("a",h,[n("通过脚手架引入"),o(s)])]),e("li",null,[e("a",v,[n("手动引入"),o(s)])])])]),g,e("blockquote",null,[m,e("ul",null,[e("li",null,[e("a",b,[n("Configuration Basis"),o(s)])])])]),f,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",_,[n("Extending Configuration Files"),o(s)])])]),k,e("ul",null,[e("li",null,[q,n("：使用"),e("a",S,[n("列表"),o(s)]),n("中所有标记为 "),x,n(" 的规则。")])]),E,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",L,[n("Concepts"),o(s)])])]),C,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",J,[n("Configure Language Options"),o(s)])])]),N])}const y=i(d,[["render",O],["__file","index.html.vue"]]);export{y as default};
