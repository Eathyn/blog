import{_ as n,W as o,X as t,Y as e,Z as a,$ as r,a0 as i,C as l}from"./framework-0d71bc9d.js";const c={},s=e("h1",{id:"tree-directory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tree-directory","aria-hidden":"true"},"#"),a(" Tree Directory")],-1),u=e("p",null,"Reference",-1),h={href:"https://github.com/santisq/PSTree",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.powershellgallery.com/packages/PSTree",target:"_blank",rel:"noopener noreferrer"},_=i(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><ul><li>Windows terminal 可以通过 <code>tree</code> 命令打印目录结构，但是无法忽略某些目录，例如 <code>node_modules</code>、<code>dist</code> 等。</li><li>为 Windows terminal 安装 PSTree 模块代替 <code>tree</code> 命令，它可以提供很多 <code>tree</code> 命令没有的功能。</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>Install-Module -Name PSTree
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><ul><li>打印当前文件夹下的所有文件，排除 <code>node_modules</code>、<code>.idea</code> 和 <code>dist</code> 目录。</li></ul><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>Get-PSTree -Exclude *node_modules, *.idea, *dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function p(f,g){const d=l("ExternalLinkIcon");return o(),t("div",null,[s,e("blockquote",null,[u,e("ul",null,[e("li",null,[e("a",h,[a("GitHub: PSTree"),r(d)])]),e("li",null,[e("a",m,[a("PowerShell Gallery: PSTree"),r(d)])])])]),_])}const v=n(c,[["render",p],["__file","index.html.vue"]]);export{v as default};
