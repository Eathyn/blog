import{_ as t,W as d,X as l,Y as e,Z as n,$ as i,a0 as s,C as r}from"./framework-c8ebc670.js";const c={},o=e("h1",{id:"diff",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#diff","aria-hidden":"true"},"#"),n(" Diff")],-1),u=e("h2",{id:"stage-参数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stage-参数","aria-hidden":"true"},"#"),n(" --stage 参数")],-1),v={href:"https://www.learnenough.com/git-tutorial/getting_started/viewing_the_diff",target:"_blank",rel:"noopener noreferrer"},b=s(`<p>对比 last commit 和 <strong>unstaged</strong> changes。命令如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git diff
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对比 last commit 和 <strong>staged</strong> changes。命令如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git diff --staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输出结果" tabindex="-1"><a class="header-anchor" href="#输出结果" aria-hidden="true">#</a> 输出结果</h2>`,5),g={href:"https://www.atlassian.com/git/tutorials/saving-changes/git-diff",target:"_blank",rel:"noopener noreferrer"},m=s(`<p>输出结果如下：</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token command">$ git diff<span class="token parameter"> --staged</span></span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>[1] a/bar.txt: 最近 commit 的 bar.txt; b/bar.txt: 暂存区中的 bar.txt。</li><li>[2] 元数据，一般不需要使用到。</li><li>[3] 使用 <code>---</code> 标记 a/bar.txt；使用 <code>+++</code> 标记 b/bar.txt。</li><li>[4] <code>-1</code>：a/bar.txt 从第一行开始修改，修改了一行；<code>+1</code>：b/bar.txt 从第一行开始修改，修改了一行。</li><li>[5] 显示具体修改了哪些数据。</li></ul>`,3);function p(h,f){const a=r("ExternalLinkIcon");return d(),l("div",null,[o,u,e("blockquote",null,[e("p",null,[e("a",v,[n("git diff --stage"),i(a)])])]),b,e("blockquote",null,[e("p",null,[e("a",g,[n("output of diff command"),i(a)])])]),m])}const x=t(c,[["render",p],["__file","index.html.vue"]]);export{x as default};
