import{_ as s,W as l,X as t,Y as e,Z as n,$ as a,a0 as d,C as r}from"./framework-c8ebc670.js";const c={},o=d(`<h1 id="diff" tabindex="-1"><a class="header-anchor" href="#diff" aria-hidden="true">#</a> Diff</h1><h2 id="staged-参数" tabindex="-1"><a class="header-anchor" href="#staged-参数" aria-hidden="true">#</a> --staged 参数</h2><p>对比 HEAD（本地仓库）和工作目录（Working Diretory）。命令如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对比 HEAD（本地仓库）和 Index（暂存区）。命令如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git diff --staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果" aria-hidden="true">#</a> 输出结果</h2>`,7),v={href:"https://www.atlassian.com/git/tutorials/saving-changes/git-diff",target:"_blank",rel:"noopener noreferrer"},u=d(`<p>输出结果如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token command">$ git diff<span class="token parameter"> --staged</span></span>

[1]
diff --git a/bar.txt b/bar.txt

[2]
index 3b18e51..2c0b785 100644

[3]
<span class="token deleted">--- a/bar.txt</span>
<span class="token inserted">+++ b/bar.txt</span>

[4]
<span class="token coord">@@ -1 +1 @@</span>

[5]
<span class="token deleted">-hello world</span>
<span class="token inserted">+hi world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[1] a/bar.txt: 最近 commit 的 bar.txt; b/bar.txt: 暂存区中的 bar.txt。</li><li>[2] 元数据，一般不需要使用到。</li><li>[3] 使用 <code>---</code> 标记 a/bar.txt；使用 <code>+++</code> 标记 b/bar.txt。</li><li>[4] <code>-1</code>：a/bar.txt 从第一行开始修改，修改了一行；<code>+1</code>：b/bar.txt 从第一行开始修改，修改了一行。</li><li>[5] 显示具体修改了哪些数据。</li></ul><h2 id="delta" tabindex="-1"><a class="header-anchor" href="#delta" aria-hidden="true">#</a> Delta</h2>`,4),b={href:"https://github.com/dandavison/delta",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,[n("在 "),e("code",null,".gitconfig"),n(" 文件配置：")])],-1),g=d(`<div class="language-.gitconfig line-numbers-mode" data-ext=".gitconfig"><pre class="language-.gitconfig"><code>[core]
  pager = G:/delta-0.15.0-x86_64-pc-windows-msvc/delta.exe
[interactive]
  diffFilter = G:/delta-0.15.0-x86_64-pc-windows-msvc/delta.exe --color-only
[include]
	path = G:/delta/themes.gitconfig
[delta]
	features = mantis-shrimp
	side-by-side = true
[safe]
	directory = G:/blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,2),h={href:"https://www.atlassian.com/git/tutorials/saving-changes/git-diff",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.freecodecamp.org/news/git-diff-command/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/dandavison/delta",target:"_blank",rel:"noopener noreferrer"};function _(x,k){const i=r("ExternalLinkIcon");return l(),t("div",null,[o,e("blockquote",null,[e("p",null,[e("a",v,[n("output of diff command"),a(i)])])]),u,e("ul",null,[e("li",null,[e("p",null,[n("使用 "),e("a",b,[n("delta"),a(i)]),n(" 工具可以让 diff 命令的输出更加直观。")])]),m]),g,e("ul",null,[e("li",null,[e("a",h,[n("beginner"),a(i)])]),e("li",null,[e("a",f,[n("beginner"),a(i)])]),e("li",null,[e("a",p,[n("Delta"),a(i)])])])])}const D=s(c,[["render",_],["__file","index.html.vue"]]);export{D as default};
