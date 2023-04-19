import{_ as t,W as d,X as l,Y as e,Z as n,$ as a,a0 as s,C as r}from"./framework-c8ebc670.js";const c={},o=e("h1",{id:"diff",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diff","aria-hidden":"true"},"#"),n(" Diff")],-1),u=e("h2",{id:"stage-参数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stage-参数","aria-hidden":"true"},"#"),n(" --stage 参数")],-1),v={href:"https://www.learnenough.com/git-tutorial/getting_started/viewing_the_diff",target:"_blank",rel:"noopener noreferrer"},g=s(`<p>对比 last commit 和 <strong>unstaged</strong> changes。命令如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对比 last commit 和 <strong>staged</strong> changes。命令如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git diff --staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果" aria-hidden="true">#</a> 输出结果</h2>`,5),b={href:"https://www.atlassian.com/git/tutorials/saving-changes/git-diff",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>输出结果如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token command">$ git diff<span class="token parameter"> --staged</span></span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[1] a/bar.txt: 最近 commit 的 bar.txt; b/bar.txt: 暂存区中的 bar.txt。</li><li>[2] 元数据，一般不需要使用到。</li><li>[3] 使用 <code>---</code> 标记 a/bar.txt；使用 <code>+++</code> 标记 b/bar.txt。</li><li>[4] <code>-1</code>：a/bar.txt 从第一行开始修改，修改了一行；<code>+1</code>：b/bar.txt 从第一行开始修改，修改了一行。</li><li>[5] 显示具体修改了哪些数据。</li></ul><h2 id="delta" tabindex="-1"><a class="header-anchor" href="#delta" aria-hidden="true">#</a> Delta</h2>`,4),h={href:"https://github.com/dandavison/delta",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,[e("p",null,[n("在 "),e("code",null,".gitconfig"),n(" 文件配置：")])],-1),p=s(`<div class="language-.gitconfig line-numbers-mode" data-ext=".gitconfig"><pre class="language-.gitconfig"><code>[core]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,2),_={href:"https://www.atlassian.com/git/tutorials/saving-changes/git-diff",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.freecodecamp.org/news/git-diff-command/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/dandavison/delta",target:"_blank",rel:"noopener noreferrer"};function k(G,N){const i=r("ExternalLinkIcon");return d(),l("div",null,[o,u,e("blockquote",null,[e("p",null,[e("a",v,[n("git diff --stage"),a(i)])])]),g,e("blockquote",null,[e("p",null,[e("a",b,[n("output of diff command"),a(i)])])]),m,e("ul",null,[e("li",null,[e("p",null,[n("使用 "),e("a",h,[n("delta"),a(i)]),n(" 工具可以让 diff 命令的输出更加直观。")])]),f]),p,e("ul",null,[e("li",null,[e("a",_,[n("beginner"),a(i)])]),e("li",null,[e("a",x,[n("beginner"),a(i)])]),e("li",null,[e("a",w,[n("Delta"),a(i)])])])])}const y=t(c,[["render",k],["__file","index.html.vue"]]);export{y as default};
