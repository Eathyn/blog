import{_ as e,W as i,X as a,a0 as r}from"./framework-c8ebc670.js";const t="/blog/assets/tire-node-ds-848a072e.png",l="/blog/assets/store-1-f60f7b78.png",o="/blog/assets/store-2-7df63827.png",n={},d=r('<h1 id="tire" tabindex="-1"><a class="header-anchor" href="#tire" aria-hidden="true">#</a> Tire</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><ul><li>tire 可用于文本的自动完成和自动修正。</li><li>tire 属于树的一种。</li><li>tire 来源于单词 retrieval。</li><li>tire 的发音理论上是 tree，但这与 tree 混淆了，所以很多人把 tire 发音为 try。</li><li>tire 的其他名字为 prefix tree（前缀树）或 digital tree（字典树）。</li></ul><h2 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构" aria-hidden="true">#</a> 数据结构</h2><ul><li>前缀树节点可以拥有多个子节点。</li><li>前缀树节点是一个哈希表，键是字母，值是另一个前缀树节点。</li></ul><figure><img src="'+t+'" alt="前缀树节点的数据结构" tabindex="0" loading="lazy"><figcaption>前缀树节点的数据结构</figcaption></figure><h2 id="存储方式" tabindex="-1"><a class="header-anchor" href="#存储方式" aria-hidden="true">#</a> 存储方式</h2><p>单词的最后一个字母的值是一个哈希表，这个哈希表的键是星号（*），值是空值（null）。</p><figure><img src="'+l+'" alt="单词结尾的存储方式" tabindex="0" loading="lazy"><figcaption>单词结尾的存储方式</figcaption></figure><p>单词可能是另一个单词的一部分。</p><figure><img src="'+o+'" alt="单词衍生" tabindex="0" loading="lazy"><figcaption>单词衍生</figcaption></figure><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h2><h3 id="方式" tabindex="-1"><a class="header-anchor" href="#方式" aria-hidden="true">#</a> 方式</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p311</p></blockquote><ul><li>搜索单词是否在字典树中</li><li>搜索单词是否为某个单词的前缀（以下算法和代码根据这种搜索）</li></ul><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p311</p></blockquote><ol><li>声明 currentNode 变量，该变量指向字典树的根节点。</li><li>遍历单词的字母 <ul><li>如果当前节点的哈希表中无法找到该字母，则说明单词不在字典树中。</li><li>如果找到该字母，则 currentNode 向下移动一位，开始遍历单词的下一个字母。</li></ul></li></ol><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3>',19),h=[d];function s(c,u){return i(),a("div",null,h)}const p=e(n,[["render",s],["__file","index.html.vue"]]);export{p as default};
