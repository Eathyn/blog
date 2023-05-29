import{_ as t,W as r,X as d,Y as e,Z as a,$ as n,a0 as o,C as l}from"./framework-c8ebc670.js";const s="/blog/assets/fast-forward-merge-6dafd0da.png",c="/blog/assets/not-fast-forward-merge-dbdb5446.png",g="/blog/assets/three-way-merge-before-f96adf8e.png",h="/blog/assets/three-way-merge-after-ccc5ec64.png",m="/blog/assets/merge-conflict-tip-49187070.png",u="/blog/assets/locate-conflicts-0440ccfb.png",f="/blog/assets/working-directory-is-not-empty-30187db5.png",p="/blog/assets/merged-759e7860.png",b="/blog/assets/undo-merge-reset-fast-forward-merge-ff015e08.png",v="/blog/assets/undo-merge-reset-three-way-merge-6ba783bd.png",_={},x=e("h1",{id:"merge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#merge","aria-hidden":"true"},"#"),a(" Merge")],-1),w=e("h2",{id:"fast-forward-merge",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fast-forward-merge","aria-hidden":"true"},"#"),a(" Fast-Forward Merge")],-1),y={href:"https://www.atlassian.com/git/tutorials/using-branches/git-merge#:~:text=Fast%20Forward%20Merge,to%20the%20target%20branch%20tip.",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"Pro Git: p69 - p72",-1),C=o('<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>快进合并（fast-forward merge）指的是当前分支的顶端可以通过一条线性的路径直接到达目标分支。</p><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><p>master 合并 iss53 时可以快速合并，因为 master 的顶端（C2）可以通过一条线性的路径直接到达目标分支（iss53）。</p><figure><img src="'+s+'" alt="可以快速合并" tabindex="0" loading="lazy"><figcaption>可以快速合并</figcaption></figure><p>master 合并 iss53 时无法快速合并，因为 master 的顶端（C2）无法通过一条线性的路径直接到达目标分支（iss53）。</p><figure><img src="'+c+'" alt="无法快速合并" tabindex="0" loading="lazy"><figcaption>无法快速合并</figcaption></figure><h2 id="three-way-merge" tabindex="-1"><a class="header-anchor" href="#three-way-merge" aria-hidden="true">#</a> Three-Way Merge</h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><ul><li><p>三方合并（three-way merge）指的是生成一个新的 commit，这个 commit 连接两个分支。</p></li><li><p>三方指的是：两个分支最新的 commit 和它们共同的祖先 commit。</p></li></ul><h3 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1" aria-hidden="true">#</a> 例子</h3><ul><li>master 合并 iss53 时无法快速合并，因为 master 的顶端（C2）无法通过一条线性的路径直接到达目标分支（iss53）。只能使用三方合并。</li></ul><figure><img src="'+g+'" alt="执行三方合并前" tabindex="0" loading="lazy"><figcaption>执行三方合并前</figcaption></figure><ul><li>利用 C2、C4 和 C5 生成 C6。</li></ul><figure><img src="'+h+'" alt="执行三方合并后" tabindex="0" loading="lazy"><figcaption>执行三方合并后</figcaption></figure><h2 id="merge-conflict" tabindex="-1"><a class="header-anchor" href="#merge-conflict" aria-hidden="true">#</a> Merge Conflict</h2><ul><li>执行三方合并时，如果两个分支有相同文件且内容冲突，那么分支合并时就会冲突。</li></ul><figure><img src="'+m+'" alt="提示产生冲突" tabindex="0" loading="lazy"><figcaption>提示产生冲突</figcaption></figure><ul><li>执行 <code>git status</code> 可以定位到产生冲突的文件。</li></ul><figure><img src="'+u+`" alt="定位冲突" tabindex="0" loading="lazy"><figcaption>定位冲突</figcaption></figure><ul><li><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code> 至 <code>=======</code> 表示当前分支（HEAD）与被合并分支（dev-2）冲突的内容。<code>=======</code> 至 <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code> 表示被合并分支与当前分支冲突的内容。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
hello world
=======
hi world
&gt;&gt;&gt;&gt;&gt;&gt;&gt; dev-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>编辑文件解决冲突之后需要提交 commit。</p></li><li><p>合并其他分支时，如果当前分支的 working directory 有内容，Git 会自动放弃合并，并提示你先 commit 或 stash。</p></li></ul><figure><img src="`+f+'" alt="working directory 有内容，Git 自动放弃合并" tabindex="0" loading="lazy"><figcaption>working directory 有内容，Git 自动放弃合并</figcaption></figure><h2 id="check-merged-and-no-merged" tabindex="-1"><a class="header-anchor" href="#check-merged-and-no-merged" aria-hidden="true">#</a> Check Merged and No-Merged</h2><h3 id="merged" tabindex="-1"><a class="header-anchor" href="#merged" aria-hidden="true">#</a> Merged</h3><p><code>git branch --merged &lt;branch-name&gt;</code> 可以查看有哪些分支已经合并到某个分支。例子如下：</p><p><code>dev-1</code> 来源于 <code>main</code>，所以 <code>main</code> 相当于已经合并到 <code>dev-1</code> 分支。<code>dev-2</code> 已经手动合并到 <code>dev-1</code>，所以也显示了出来。</p><figure><img src="'+p+`" alt="查看已合并的分支" tabindex="0" loading="lazy"><figcaption>查看已合并的分支</figcaption></figure><h3 id="no-merged" tabindex="-1"><a class="header-anchor" href="#no-merged" aria-hidden="true">#</a> No-Merged</h3><p><code>git branch --no-merged &lt;branch-name&gt;</code> 可以查看有哪些分支未合并到某个分支。</p><h2 id="取消合并" tabindex="-1"><a class="header-anchor" href="#取消合并" aria-hidden="true">#</a> 取消合并</h2><p>执行 <code>git merge --abort</code>，分支会恢复为原来的内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 放弃合并前
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
hello world
=======
hi world
&gt;&gt;&gt;&gt;&gt;&gt;&gt; dev-2

# 放弃合并后
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="undo-merge" tabindex="-1"><a class="header-anchor" href="#undo-merge" aria-hidden="true">#</a> undo merge</h2><ul><li>如果合并分支之后发现合并了错误的分支，想要让分支恢复为合并之前的内容。这时分为两种情况，如果合并后的分支还没有推送到远程仓库，则使用 <code>reset</code>；如果已经推送到远程仓库，则使用 <code>revert</code>。</li></ul><h3 id="未推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#未推送到远程仓库" aria-hidden="true">#</a> 未推送到远程仓库</h3><blockquote><p>Pro Git: p283 - p285</p></blockquote><ul><li>如果合并后的分支没有推动到远程仓库且是 <code>fast-forward</code> 合并，则使用 <code>reset</code> 回退到特定的 commit。</li></ul><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>如果合并后的分支没有推动到远程仓库且是三方合并，则使用 <code>reset</code> 回退一个 commit（三方合并会产生额外的 commit）。</li></ul><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="已推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#已推送到远程仓库" aria-hidden="true">#</a> 已推送到远程仓库</h3>',43);function z(M,E){const i=l("ExternalLinkIcon");return r(),d("div",null,[x,w,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",y,[a("blog: fast-forward merge"),n(i)])]),k])]),C])}const G=t(_,[["render",z],["__file","index.html.vue"]]);export{G as default};