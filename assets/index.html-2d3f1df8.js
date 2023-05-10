import{_ as o,W as n,X as c,Y as e,Z as t,$ as r,a0 as d,C as s}from"./framework-c8ebc670.js";const i="/blog/assets/before-reset-6b66203c.png",h="/blog/assets/soft-option-bffef483.png",l="/blog/assets/mixed-option-c9bbd463.png",g="/blog/assets/hard-option-54dd7b7b.png",u="/blog/assets/reset-with-path-9c1887e2.png",f="/blog/assets/reset-with-commit-and-path-e178940b.png",m="/blog/assets/reset-branch-soft-before-1c46c5fb.png",p="/blog/assets/reset-branch-soft-after-173ea86a.png",x={},b=d('<h1 id="reset" tabindex="-1"><a class="header-anchor" href="#reset" aria-hidden="true">#</a> Reset</h1><h2 id="three-trees" tabindex="-1"><a class="header-anchor" href="#three-trees" aria-hidden="true">#</a> Three Trees</h2><h3 id="the-head" tabindex="-1"><a class="header-anchor" href="#the-head" aria-hidden="true">#</a> The HEAD</h3><blockquote><p>Pro Git: p252</p></blockquote><p>HEAD 指向当前分支的最后一个 commit。</p>',5),v={href:"https://initialcommit.com/blog/what-is-git-head#what-is-git-head",target:"_blank",rel:"noopener noreferrer"},D=d(`<p>使用 <code>cat .git/HEAD</code> 可以查看到 HEAD 指向哪一个分支。</p><h3 id="the-index" tabindex="-1"><a class="header-anchor" href="#the-index" aria-hidden="true">#</a> The Index</h3><p>Index 就是暂存区（staged area）。对在工作目录（working directory）的文件使用 <code>git add</code> 之后，这些文件就会添加到暂存区。</p><h3 id="the-working-directory" tabindex="-1"><a class="header-anchor" href="#the-working-directory" aria-hidden="true">#</a> The Working Directory</h3><p>工作目录（working directory）是编辑文件的地方。</p><h2 id="切换分支时的内部运行" tabindex="-1"><a class="header-anchor" href="#切换分支时的内部运行" aria-hidden="true">#</a> 切换分支时的内部运行</h2><blockquote><p>Pro Git: p259</p></blockquote><ol><li>HEAD 指向切换的分支。</li><li>在 Index 中填充这个分支的所有 commit。</li><li>把 Index 中的内容复制到工作目录。</li></ol><h2 id="命令解释" tabindex="-1"><a class="header-anchor" href="#命令解释" aria-hidden="true">#</a> 命令解释</h2><blockquote><p>Pro Git: p259</p></blockquote><p>HEAD 指向分支，分支指向 commit。reset 就是让 HEAD 指向的分支进行移动。</p><h2 id="soft-选项" tabindex="-1"><a class="header-anchor" href="#soft-选项" aria-hidden="true">#</a> Soft 选项</h2><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git reset --soft &lt;commit&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>HEAD~</code> 表示向前回退一位</p><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git reset --soft HEAD~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ul><li>本地仓库（HEAD）重置。</li><li>暂存区（Index）和工作目录（working directory）不重置。</li><li>使用 <code>git commit</code> 命令可以让本地仓库、暂存区和工作目录保持一致。</li></ul><h3 id="图示" tabindex="-1"><a class="header-anchor" href="#图示" aria-hidden="true">#</a> 图示</h3><ul><li>使用 reset 之前三个地方都是相同的（v3）：</li></ul><figure><img src="`+i+'" alt="图示-使用 reset 之前" tabindex="0" loading="lazy"><figcaption>图示-使用 reset 之前</figcaption></figure><ul><li>使用 reset --soft 之后本地仓库（HEAD）重置（v2），暂存区（Index）和工作目录（Working Directory）保持原样（v3）：</li></ul><figure><img src="'+h+`" alt="图示-使用 reset 之后" tabindex="0" loading="lazy"><figcaption>图示-使用 reset 之后</figcaption></figure><h2 id="mixed-选项" tabindex="-1"><a class="header-anchor" href="#mixed-选项" aria-hidden="true">#</a> Mixed 选项</h2><h3 id="使用-1" tabindex="-1"><a class="header-anchor" href="#使用-1" aria-hidden="true">#</a> 使用</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git reset --mixed &lt;commit&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p><code>--mixed</code> 是 <code>reset</code> 命令的默认选项。</p></div><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h3><ul><li>本地仓库（HEAD）和暂存区（Index）重置。</li><li>工作目录（working directory）不重置。</li><li>使用 <code>git add</code> 和 <code>git commit</code> 命令可以让本地仓库、暂存区和工作目录保持一致。</li></ul><h3 id="图示-1" tabindex="-1"><a class="header-anchor" href="#图示-1" aria-hidden="true">#</a> 图示</h3><ul><li>使用 reset 之前三个地方都是相同的（v3）：</li></ul><figure><img src="`+i+'" alt="图示-使用 reset 之前" tabindex="0" loading="lazy"><figcaption>图示-使用 reset 之前</figcaption></figure><ul><li>使用 reset --mixed 之后本地仓库（HEAD）和暂存区（Index）重置（v2），工作目录（Working Directory）保持原样（v3）：</li></ul><figure><img src="'+l+`" alt="图示-使用 reset 之后" tabindex="0" loading="lazy"><figcaption>图示-使用 reset 之后</figcaption></figure><h2 id="hard-选项" tabindex="-1"><a class="header-anchor" href="#hard-选项" aria-hidden="true">#</a> Hard 选项</h2><h3 id="使用-2" tabindex="-1"><a class="header-anchor" href="#使用-2" aria-hidden="true">#</a> 使用</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git reset --hard &lt;commit&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2" aria-hidden="true">#</a> 特点</h3><ul><li>本地仓库（HEAD）、暂存区（Index）和工作目录（Working Directory）重置。</li></ul><div class="hint-container danger"><p class="hint-container-title">警告</p><p>使用 <code>git reset --hard</code> 后无法通过 <code>git log</code> 查找到丢失的 commit，但是可以使用 <code>git reflog</code> 查看 HEAD 的变更情况，从而回滚到之前的 commit。</p></div><h3 id="图示-2" tabindex="-1"><a class="header-anchor" href="#图示-2" aria-hidden="true">#</a> 图示</h3><ul><li>使用 reset 之前三个地方都是相同的（v3）：</li></ul><figure><img src="`+i+'" alt="图示-使用 reset 之前" tabindex="0" loading="lazy"><figcaption>图示-使用 reset 之前</figcaption></figure><ul><li>使用 reset --hard 之后本地仓库（HEAD）、暂存区（Index）和工作目录（Working Directory）重置（v2）：</li></ul><figure><img src="'+g+'" alt="图示-使用 reset 之后" tabindex="0" loading="lazy"><figcaption>图示-使用 reset 之后</figcaption></figure><h2 id="path-argument" tabindex="-1"><a class="header-anchor" href="#path-argument" aria-hidden="true">#</a> Path Argument</h2><h3 id="reset-path" tabindex="-1"><a class="header-anchor" href="#reset-path" aria-hidden="true">#</a> Reset + Path</h3><ul><li><code>git reset &lt;file path&gt;</code> 相当于 <code>git reset --mixed HEAD &lt;file path&gt;</code>。即把 HEAD 的内容复制到 Index。</li></ul><figure><img src="'+u+'" alt="把 HEAD 的内容复制到 Index" tabindex="0" loading="lazy"><figcaption>把 HEAD 的内容复制到 Index</figcaption></figure><h3 id="reset-commit-path" tabindex="-1"><a class="header-anchor" href="#reset-commit-path" aria-hidden="true">#</a> Reset + Commit + Path</h3><ul><li><code>git reset &lt;commit&gt; -- &lt;file path&gt;</code> 相当于：</li></ul><ol><li>Index 和 Working Directory 回滚到指定的 commit</li><li>Working Directory 回滚到之前的 commit</li></ol><figure><img src="'+f+'" alt="只回滚 Index" tabindex="0" loading="lazy"><figcaption>只回滚 Index</figcaption></figure><ul><li><code>reset</code> 支持 <code>--patch</code> 参数，即可回滚一个 commit 中的部分内容。</li></ul><h2 id="reset-branch" tabindex="-1"><a class="header-anchor" href="#reset-branch" aria-hidden="true">#</a> Reset + Branch</h2><h3 id="soft" tabindex="-1"><a class="header-anchor" href="#soft" aria-hidden="true">#</a> Soft</h3><ul><li>执行 <code>git reset --soft main</code> 之前，dev 分支的 HEAD、Index 和 Working Directory 都是 <code>v3</code>。</li></ul><figure><img src="'+m+'" alt="执行 git reset --soft main 之前" tabindex="0" loading="lazy"><figcaption>执行 git reset --soft main 之前</figcaption></figure><ul><li>执行 <code>git reset --soft main</code> 之后，dev 分支的 HEAD 与 main 分支的 HEAD 相同，是 <code>v1</code>。Index 和 Working Directory 保持不变，是 <code>v3</code>。</li></ul><figure><img src="'+p+'" alt="执行 git reset --soft main 之后" tabindex="0" loading="lazy"><figcaption>执行 git reset --soft main 之后</figcaption></figure><h3 id="mixed" tabindex="-1"><a class="header-anchor" href="#mixed" aria-hidden="true">#</a> Mixed</h3><ul><li>执行 <code>git reset --mixed main</code> 之前，dev 分支的 HEAD、Index 和 Working Directory 都是 <code>v3</code>。</li><li>执行 <code>git reset --mixed main</code> 之后，dev 分支的 HEAD、Index 与 main 分支的 HEAD、Index 相同，是 <code>v1</code>；Index 和 Working Directory 保持不变，是 <code>v3</code>。</li></ul><h3 id="hard" tabindex="-1"><a class="header-anchor" href="#hard" aria-hidden="true">#</a> Hard</h3><ul><li>执行 <code>git reset --hard main</code> 之前，dev 分支的 HEAD、Index 和 Working Directory 都是 <code>v3</code>。</li><li>执行 <code>git reset --hard main</code> 之后，dev 分支的 HEAD、Index、Working Directory 与 main 分支的 HEAD、Index、Working Director 相同，是 <code>v1</code>。</li></ul><h2 id="checkout-vs-reset" tabindex="-1"><a class="header-anchor" href="#checkout-vs-reset" aria-hidden="true">#</a> Checkout vs Reset</h2><ul><li><code>checkout</code> 也和 <code>reset</code> 一样控制 <code>HEAD</code>，<code>Index</code> 和 <code>Working Directory</code>。</li></ul><h3 id="without-paths" tabindex="-1"><a class="header-anchor" href="#without-paths" aria-hidden="true">#</a> Without Paths</h3><h3 id="with-paths" tabindex="-1"><a class="header-anchor" href="#with-paths" aria-hidden="true">#</a> With Paths</h3><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>',68),_={href:"https://a.co/d/hzFin1j",target:"_blank",rel:"noopener noreferrer"};function k(E,H){const a=s("ExternalLinkIcon");return n(),c("div",null,[b,e("blockquote",null,[e("p",null,[e("a",v,[t("Blog"),r(a)])])]),D,e("ul",null,[e("li",null,[e("a",_,[t("Pro Git"),r(a)])])])])}const y=o(x,[["render",k],["__file","index.html.vue"]]);export{y as default};
