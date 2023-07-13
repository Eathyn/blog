import{_ as p,W as o,X as c,Y as n,Z as a,$ as t,a0 as e,C as l}from"./framework-0d71bc9d.js";const i={},u=n("h1",{id:"bucket-sort",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bucket-sort","aria-hidden":"true"},"#"),a(" Bucket Sort")],-1),r=n("h2",{id:"原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原理","aria-hidden":"true"},"#"),a(" 原理")],-1),k=n("p",null,"Reference",-1),d={href:"https://www.programiz.com/dsa/bucket-sort",target:"_blank",rel:"noopener noreferrer"},h=e(`<ol><li>将数据放到对应的桶里</li><li>对每个桶采取合适的排序算法</li><li>将每个桶里的数据整合起来</li></ol><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bucketSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 创建所有桶，并将值初始化为空数组</span>
  <span class="token keyword">const</span> arrLen <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> buckets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arrLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    buckets<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \`arr\` 的每一项乘 \`arrLen\`，取整数部分并放到对应的桶里</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> bucketIdx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>value <span class="token operator">*</span> arrLen<span class="token punctuation">)</span>
    buckets<span class="token punctuation">[</span>bucketIdx<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 每个桶采用合适这个桶的排序算法</span>
  buckets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">bucket</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bucket<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token comment">// 把每个桶的数据整合回 \`arr\`</span>
  <span class="token keyword">let</span> arrIdx <span class="token operator">=</span> <span class="token number">0</span>
  buckets<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">bucket</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> bucket<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>arrIdx<span class="token punctuation">]</span> <span class="token operator">=</span> value
    arrIdx<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度" aria-hidden="true">#</a> 时间复杂度</h2>`,4),v=n("p",null,"Reference",-1),b={href:"https://www.programiz.com/dsa/bucket-sort",target:"_blank",rel:"noopener noreferrer"},m=e('<h3 id="最好的情况" tabindex="-1"><a class="header-anchor" href="#最好的情况" aria-hidden="true">#</a> 最好的情况</h3><ul><li><p>最好的情况：每个桶分配了数量几乎相等的数据项。</p></li><li><p>O(n+k)</p><ul><li>O(n): 创建桶并为各个桶分配数据项</li><li>O(k): 对桶里的数据项进行排序，该排序算法的时间复杂度是线性的</li></ul></li></ul><h3 id="最坏的情况" tabindex="-1"><a class="header-anchor" href="#最坏的情况" aria-hidden="true">#</a> 最坏的情况</h3><ul><li><p>最坏的情况：其中一个桶分配了几乎所有数据项。</p></li><li><p>O(n^2)</p></li></ul><h2 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h2><ul><li>O(n+k) <ul><li>n: 数组的数据项的数量</li><li>k: 桶的数量</li></ul></li></ul>',6);function f(_,x){const s=l("ExternalLinkIcon");return o(),c("div",null,[u,r,n("blockquote",null,[k,n("ul",null,[n("li",null,[n("a",d,[a("Bucket Sort Algorithm"),t(s)])])])]),h,n("blockquote",null,[v,n("ul",null,[n("li",null,[n("a",b,[a("Bucket Sort Algorithm"),t(s)])])])]),m])}const w=p(i,[["render",f],["__file","index.html.vue"]]);export{w as default};
