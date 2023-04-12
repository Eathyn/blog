import{_ as n,W as a,X as s,a0 as e}from"./framework-c8ebc670.js";const p={},t=e(`<h1 id="hash-table" tabindex="-1"><a class="header-anchor" href="#hash-table" aria-hidden="true">#</a> Hash Table</h1><h2 id="superiority" tabindex="-1"><a class="header-anchor" href="#superiority" aria-hidden="true">#</a> Superiority</h2><p>哈希表访问数据的时间复杂度是 O(1)。</p><h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><p>哈希化（hashing）：将所有字符串转化为数字的过程。 哈希函数（hash function）：进行哈希化的函数。 根据计算机科学家计算出的规律，保存 7 个数据就需要 10 个存储空间。即负荷系数（load factor）为 0.7。</p><h2 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h2><h3 id="is-subarray" tabindex="-1"><a class="header-anchor" href="#is-subarray" aria-hidden="true">#</a> is subarray</h3><blockquote><p>Reference</p><p>Book: A Common-Sense Guide to Data Structures and Algorithms 2nd</p><p>Page: 127</p></blockquote><p>判断数组 A 是否为数组 B 的子数组，即数组 B 是否包含了数组 A 的每一个项。</p><p>常见的方法是嵌套 for 循环，这样会导致该算法的时间复杂度为 O(M * N)。M 是数组 A 的长度，N 是数组 B 的长度。代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isSubArray</span><span class="token punctuation">(</span><span class="token parameter">array1<span class="token punctuation">,</span> array2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> largerArray
  <span class="token keyword">let</span> smallerArray

  <span class="token keyword">if</span> <span class="token punctuation">(</span>array1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> array2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    largerArray <span class="token operator">=</span> array1
    smallerArray <span class="token operator">=</span> array2
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    largerArray <span class="token operator">=</span> array2
    smallerArray <span class="token operator">=</span> array1
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> smallerArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> isSubArray <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> largerArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>smallerArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> largerArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isSubArray <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果短数组的某一项没有出现在长数组中，就说明短数组不是长数组的子数组</span>
    <span class="token comment">// 此时直接返回 false，放弃短数组未进行判断的项，减少计算量</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isSubArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用哈希表，可以将该算法的时间复杂度降为 O(N)。代码如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">isSubArray</span><span class="token punctuation">(</span><span class="token parameter">array1<span class="token punctuation">,</span> array2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> largerArray
  <span class="token keyword">let</span> smallerArray
  <span class="token keyword">const</span> hashTable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>array1<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> array2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    largerArray <span class="token operator">=</span> array1
    smallerArray <span class="token operator">=</span> array2
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    largerArray <span class="token operator">=</span> array2
    smallerArray <span class="token operator">=</span> array1
  <span class="token punctuation">}</span>

  <span class="token comment">// 建立哈希表</span>
  <span class="token comment">// { a: true, b: true, c: true, d: true, e: true, f: true }</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> largerArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    hashTable<span class="token punctuation">[</span>largerArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果短数组中有一项不存在于哈希表中，则说明短数组有一项不存在于长数组中</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> smallerArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hashTable<span class="token punctuation">[</span>smallerArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),o=[t];function l(c,r){return a(),s("div",null,o)}const u=n(p,[["render",l],["__file","index.html.vue"]]);export{u as default};
