import{_ as e,W as p,X as o,Y as n,Z as s,$ as t,a0 as c,C as l}from"./framework-0d71bc9d.js";const r={},i=n("h1",{id:"merge-sort",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#merge-sort","aria-hidden":"true"},"#"),s(" Merge Sort")],-1),u=n("h2",{id:"原理",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#原理","aria-hidden":"true"},"#"),s(" 原理")],-1),d=n("p",null,"Reference",-1),k={href:"https://youtu.be/3j0SWDX4AtU",target:"_blank",rel:"noopener noreferrer"},v={href:"https://youtu.be/e5ik2UGjHBk",target:"_blank",rel:"noopener noreferrer"},m={href:"https://youtube.com/shorts/dZhFmu19N9U?feature=share",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> sortedArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> startIdx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> endIdx <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>startIdx <span class="token operator">===</span> endIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> middleIdx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>startIdx <span class="token operator">+</span> endIdx<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> sortedArr<span class="token punctuation">,</span> startIdx<span class="token punctuation">,</span> middleIdx<span class="token punctuation">)</span>
  <span class="token function">mergeSort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> sortedArr<span class="token punctuation">,</span> middleIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> endIdx<span class="token punctuation">)</span>
  <span class="token function">merge</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> sortedArr<span class="token punctuation">,</span> startIdx<span class="token punctuation">,</span> endIdx<span class="token punctuation">,</span> middleIdx<span class="token punctuation">)</span>
  <span class="token keyword">return</span> sortedArr
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> sortedArr<span class="token punctuation">,</span> startIdx<span class="token punctuation">,</span> endIdx<span class="token punctuation">,</span> middleIdx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> arrIdx <span class="token operator">=</span> startIdx
  <span class="token keyword">let</span> leftIdx <span class="token operator">=</span> startIdx
  <span class="token keyword">let</span> rightIdx <span class="token operator">=</span> middleIdx <span class="token operator">+</span> <span class="token number">1</span>

  <span class="token comment">// 比较 leftIdx 和 rightIdx 指向的值，把小的值放到 sortedArr 的正确位置</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIdx <span class="token operator">&lt;=</span> middleIdx <span class="token operator">&amp;&amp;</span> rightIdx <span class="token operator">&lt;=</span> endIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>leftIdx<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>rightIdx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sortedArr<span class="token punctuation">[</span>arrIdx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>leftIdx<span class="token punctuation">]</span>
      leftIdx<span class="token operator">++</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      sortedArr<span class="token punctuation">[</span>arrIdx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>rightIdx<span class="token punctuation">]</span>
      rightIdx<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    arrIdx<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 右边的项都放到正确的位置，左边的项都没有或者一部分没有放到正确位置。</span>
  <span class="token comment">// 因为左边的项已经排序了，所以按顺序放到数组里就行</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>leftIdx <span class="token operator">&lt;=</span> middleIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sortedArr<span class="token punctuation">[</span>arrIdx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>leftIdx<span class="token punctuation">]</span>
    arrIdx<span class="token operator">++</span>
    leftIdx<span class="token operator">++</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 左边的项都放到正确的位置，右边的项都没有或者一部分没有放到正确位置。</span>
  <span class="token comment">// 因为右边的项已经排序了，所以按顺序放到数组里就行</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>rightIdx <span class="token operator">&lt;=</span> endIdx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sortedArr<span class="token punctuation">[</span>arrIdx<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>rightIdx<span class="token punctuation">]</span>
    arrIdx<span class="token operator">++</span>
    rightIdx<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 改变原来的数组</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> index <span class="token keyword">in</span> sortedArr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> sortedArr<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function x(I,h){const a=l("ExternalLinkIcon");return p(),o("div",null,[i,u,n("blockquote",null,[d,n("ul",null,[n("li",null,[n("a",k,[s("Learn Merge Sort in 13 minutes"),t(a)])]),n("li",null,[n("a",v,[s("Merge Sort: step-by-step guide"),t(a)])]),n("li",null,[n("a",m,[s("Merge Sort Animation"),t(a)])])])]),b])}const _=e(r,[["render",x],["__file","index.html.vue"]]);export{_ as default};
