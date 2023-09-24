import{_ as c,W as l,X as i,Y as n,$ as s,Z as o,a0 as e,C as p}from"./framework-0d71bc9d.js";const u="/blog/assets/array_as_heap-5dcfd360.png",d={},r=e('<h1 id="priority-queue" tabindex="-1"><a class="header-anchor" href="#priority-queue" aria-hidden="true">#</a> Priority Queue</h1><h2 id="优先队列的特点" tabindex="-1"><a class="header-anchor" href="#优先队列的特点" aria-hidden="true">#</a> 优先队列的特点</h2><blockquote><p>Book: A Common-Sense Guide to DSA: p279</p></blockquote><ul><li>优先队列的删除和访问操作和队列相同。</li><li>优先队列的插入操作和有序数组相同。</li></ul><h2 id="使用数组实现优先队列的缺点" tabindex="-1"><a class="header-anchor" href="#使用数组实现优先队列的缺点" aria-hidden="true">#</a> 使用数组实现优先队列的缺点</h2><blockquote><p>Book: A Common-Sense Guide to DSA: p281</p></blockquote><ul><li>插入操作的时间复杂度为 <code>O(N)</code>，因为需要移动元素。</li><li>删除操作的时间复杂度为 <code>O(logN)</code>，参考队列的章节。</li></ul><h2 id="使用堆实现优先队列的优点" tabindex="-1"><a class="header-anchor" href="#使用堆实现优先队列的优点" aria-hidden="true">#</a> 使用堆实现优先队列的优点</h2><blockquote><p>Book: A Common-Sense Guide to DSA: p302</p></blockquote><ul><li>插入操作的时间复杂度为 <code>O(logN)</code>， 参考算法原理和实现。</li><li>删除操作的时间复杂度为 <code>O(logN)</code>， 参考算法原理和实现。</li></ul><h2 id="关于二叉堆" tabindex="-1"><a class="header-anchor" href="#关于二叉堆" aria-hidden="true">#</a> 关于二叉堆</h2><blockquote><p>Book: A Common-Sense Guide to DSA: p281</p></blockquote>',12),k=n("li",null,[n("p",null,"二叉堆（binary heap）是一种特殊的二叉树。")],-1),h=n("p",null,"二叉堆分为两种：",-1),m=n("ul",null,[n("li",null,"大根堆（max-heap）：每个节点的值都比它的子孙节点的值大。")],-1),v=n("ul",null,[n("li",null,"小根堆（min-heap）：每个节点的值都比它的子孙节点的值小。")],-1),b=n("li",null,[n("p",null,"二叉堆的特点："),n("ul",null,[n("li",null,"每个节点的值都比它的子孙节点的值大，这个规则称为堆条件（heap condition）。"),n("li",null,"树必须是完整的。")])],-1),x=n("li",null,[n("p",null,"完整树的定义："),n("ul",null,[n("li",null,"除了最后一层，其他层没有空节点。"),n("li",null,"最后一层的节点尽可能往左靠。")])],-1),y=n("blockquote",null,[n("p",null,"Book: A Common-Sense Guide to DSA: p284")],-1),w=n("p",null,"堆的最后一个节点：堆的最低层的最右边的节点。",-1),f=e('<h2 id="二叉堆的插入操作" tabindex="-1"><a class="header-anchor" href="#二叉堆的插入操作" aria-hidden="true">#</a> 二叉堆的插入操作</h2><h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p285</p></blockquote><ol><li>生成新节点，让这个节点成为二叉堆的最后一个节点。</li><li>比较新节点和它的父节点，如果新节点的值比它的父节点的值大，则交换新节点和它的父节点。</li><li>重复第二步。</li></ol><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h3><blockquote><p>A Common-Sense Guide to DSA: p287</p></blockquote><p>二叉树插入算法的时间复杂度为 <code>O(logN)</code>。主要执行的是插入算法第二步，因为对于 <code>N</code> 个节点来说，堆的高度为 <code>log(N)</code>。</p><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p298 - p299</p></blockquote>',9),g={href:"https://github.com/Eathyn/BOOK-a-common_sense-guide-to-DSA/blob/main/16_heap/heap.js#L28",target:"_blank",rel:"noopener noreferrer"},_=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>

  <span class="token comment">// 堆中只有一个根节点，不需要进行交换操作</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">let</span> newNodeIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
  <span class="token keyword">let</span> parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">parentIndex</span><span class="token punctuation">(</span>newNodeIndex<span class="token punctuation">)</span>

  <span class="token comment">// 如果新节点比它的父节点大，则交换值</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>newNodeIndex<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 交换新节点和它的父节点的值</span>
    <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>newNodeIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>parentIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>newNodeIndex<span class="token punctuation">]</span><span class="token punctuation">]</span>

    <span class="token comment">// 更新新节点和父节点索引，用于下一次比较</span>
    newNodeIndex <span class="token operator">=</span> parentIndex
    parentIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">parentIndex</span><span class="token punctuation">(</span>newNodeIndex<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二叉堆的删除操作" tabindex="-1"><a class="header-anchor" href="#二叉堆的删除操作" aria-hidden="true">#</a> 二叉堆的删除操作</h2><h3 id="算法-1" tabindex="-1"><a class="header-anchor" href="#算法-1" aria-hidden="true">#</a> 算法</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p288 - p290</p></blockquote><ol><li>堆的最后一个节点代替根节点作为新的根节点。</li><li>比较新的根节点的左右子节点，获取较大的子节点。新的根节点与值较大的子节点替换。</li><li>重复步骤二直到新的根节点的值比左右子节点都大。</li></ol><h3 id="时间复杂度-1" tabindex="-1"><a class="header-anchor" href="#时间复杂度-1" aria-hidden="true">#</a> 时间复杂度</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p292</p></blockquote><p>二叉树删除算法的时间复杂度为 <code>O(logN)</code>。主要执行的是删除算法第二步，因为对于 <code>N</code> 个节点来说，堆的高度为 <code>log(N)</code>。</p><h3 id="实现-1" tabindex="-1"><a class="header-anchor" href="#实现-1" aria-hidden="true">#</a> 实现</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p299 - p300</p></blockquote>`,10),C={href:"https://github.com/Eathyn/BOOK-a-common_sense-guide-to-DSA/blob/main/16_heap/heap.js#L50",target:"_blank",rel:"noopener noreferrer"},I=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deleteOperation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 堆没有节点时不进行后续操作</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 堆的最后一个节点代替根节点作为新的根节点</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">let</span> currentNodeIndex <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token comment">// 新的根节点与值较大的子节点替换</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hasGreaterChild</span><span class="token punctuation">(</span>currentNodeIndex<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> childIndex <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">calculateLargerChildIndex</span><span class="token punctuation">(</span>currentNodeIndex<span class="token punctuation">)</span>
    <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>currentNodeIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>childIndex<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>childIndex<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>currentNodeIndex<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token comment">// 交换后需要更新 currentNodeIndex</span>
    currentNodeIndex <span class="token operator">=</span> childIndex
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 判断节点的左或右子节点是否大于它</span>
<span class="token keyword">function</span> <span class="token function">hasGreaterChild</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> currentNode <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
  <span class="token keyword">const</span> leftChild <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">leftChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">const</span> rightChild <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rightChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
  <span class="token keyword">return</span> currentNode <span class="token operator">&lt;</span> leftChild <span class="token operator">||</span> currentNode <span class="token operator">&lt;</span> rightChild
<span class="token punctuation">}</span>

<span class="token comment">// 获取较大的子节点</span>
<span class="token keyword">function</span> <span class="token function">calculateLargerChildIndex</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> leftChild <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">leftChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> rightChild <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rightChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token keyword">return</span> leftChild <span class="token operator">&gt;=</span> rightChild <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">leftChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">rightChildIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用数组实现堆" tabindex="-1"><a class="header-anchor" href="#使用数组实现堆" aria-hidden="true">#</a> 使用数组实现堆</h2><blockquote><p>Book: A Common-Sense Guide to DSA: p295</p></blockquote><p>堆可以使用数组来实现，这种实现方式可以很快地找到堆的最后一个节点：</p><figure><img src="`+u+'" alt="数组实现堆" tabindex="0" loading="lazy"><figcaption>数组实现堆</figcaption></figure><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h3><blockquote><p>Book: A Common-Sense Guide to DSA: p297, p298</p></blockquote><p>使用数组实现的堆不像树的数据结构一样通过内存地址找到左右子节点，但是可以通过以下的规则确定左右子节点和父节点：</p><ul><li>左子节点：<code>index * 2 + 1</code></li><li>右子节点：<code>index * 2 + 2</code></li><li>父节点：<code>(index - 1) / 2</code>（去除小数位）</li></ul>',9);function S(A,q){const a=p("Mermaid"),t=p("ExternalLinkIcon");return l(),i("div",null,[r,n("ul",null,[k,n("li",null,[h,m,s(a,{id:"mermaid-88",code:"eJzT1dXlKsksyUm1Uni6ZPmzBTufLmjjAgmm5eSXJ2ckFpUohDhxmSvo6topmEJpMy5TMG0IpY24zMC0MZQ24QIAqWwWcg=="}),v,s(a,{id:"mermaid-96",code:"eJzT1dXlKsksyUm1Uni6of/Zgp1PF7RxgQTTcvLLkzMSi0oUQpy4FBQMFXR17RSM4CxjIMsIzDKBs0yBLGMwywzOMucCAKx3F9Q="})]),b,x]),s(a,{id:"mermaid-133",code:"eJzT1dXlKsksyUm1Uni6rufZ1C3PFkzkAgmm5eSXJ2ckFpUohDhxKSgYKujq2ikYwVnGQJYRmGUCZ5kCWcZglhmcZc4FAKlXF8s="}),s(a,{id:"mermaid-134",code:"eJzT1dXlKsksyUm1Uni6rufZ1C3PFkzkAgmm5eSXJ2ckFpUohDhxKSgYKujq2ikYwVnGQJYRmGUCZzlq5JXm5GgC+cZgvhMa3xnKBwC6hh4T"}),s(a,{id:"mermaid-135",code:"eJzT1dXlKsksyUm1Uniyo/fZjPVP1/U8m7rl2YKJXCCptJz88uSMxKIShRAnLgUFQwVdXTsFIzjLGMgyArMcNfJKc3I04XwTIMsYzHKCy0D4zlA+AK+9Imk="}),y,w,s(a,{id:"mermaid-144",code:"eJzT1dXlKsksyUm1UjBVeDZj/dMFbc9ntTyb0/B0Qt+THQ1Pdqx60dX0vGknF0hhWk5+eXJGYlGJQogTl4KCoYKurp2CEZxlDGQZgVkmcJYpkGUMZjlp5JXm5GjC+c5QPgCUOSil"}),f,n("blockquote",null,[n("p",null,[n("a",g,[o("complete code"),s(t)])])]),_,n("blockquote",null,[n("p",null,[n("a",C,[o("complete code"),s(t)])])]),I])}const G=c(d,[["render",S],["__file","index.html.vue"]]);export{G as default};