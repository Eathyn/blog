import{_ as p,W as e,X as o,Y as n,Z as s,$ as t,a0 as c,C as l}from"./framework-0d71bc9d.js";const i={},u=n("h1",{id:"瀑布流",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#瀑布流","aria-hidden":"true"},"#"),s(" 瀑布流")],-1),r=n("h2",{id:"源码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#源码","aria-hidden":"true"},"#"),s(" 源码")],-1),k={href:"https://github.com/Eathyn/waterfall-vue-solution",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><ul><li>将新元素放到高度最小的列的下方。</li><li>首页元素采用并行渲染，让首屏渲染时间达到最小。非首屏元素采用串行渲染，确保元素的位置正确。</li></ul><h2 id="代码解析" tabindex="-1"><a class="header-anchor" href="#代码解析" aria-hidden="true">#</a> 代码解析</h2><p>[1] 使用 watch 监听父元素传递过来的瀑布流数据 <code>data</code>。[2] 如果数据发生改变，则调用 <code>waterfall</code> 函数。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> innerData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 瀑布流数据</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Array<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// [1]</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">handler</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        innerData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>innerData<span class="token punctuation">,</span> <span class="token operator">...</span>v<span class="token punctuation">]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">waterfall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// [2]</span>
    <span class="token function">waterfall</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首屏的图片采用并行渲染，即同时发送多个 HTTP 请求加载图片。如果采用串行渲染，那么用户需要等待图片一张接着一张渲染，这样首屏所有图片完成渲染的时间就比较慢。另外，因为首屏采用并行渲染，所以无法保证图片的加载顺序，即后发送的 HTTP 请求可能因为图片体积比较小比其他图片更早加载。</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">let</span> observerObj
<span class="token comment">// 最小列索引</span>
<span class="token keyword">let</span> minCol <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">// 瀑布流数据队列</span>
<span class="token keyword">let</span> innerData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 已经渲染的数量</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 首屏开启并行渲染，减少白屏时间</span>
    <span class="token literal-property property">firstPageCount</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">colData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">waterfall</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateMinCol</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">appendColData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// 首屏采用并行渲染，非首屏采用串行渲染</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>count <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstPageCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">waterfall</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 更新瀑布流高度最小列</span>
    <span class="token function">updateMinCol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 并行渲染时，无法获取最小列，只能按列依次渲染</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstPageCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        minCol <span class="token operator">=</span> count <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>col<span class="token punctuation">)</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> heightList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">&#39;cols&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span>
      <span class="token keyword">const</span> minHeight <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token operator">...</span>heightList<span class="token punctuation">)</span>
      minCol <span class="token operator">=</span> heightList<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>minHeight<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 取出数据源中最靠前的一个并添加到瀑布流高度最小的那一列</span>
    <span class="token function">appendColData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> colItem <span class="token operator">=</span> innerData<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>colData<span class="token punctuation">[</span>minCol<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>colItem<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首屏图片渲染完成之后，使用 <code>IntersectionObserver</code> 对首屏的最后一个图片元素进行监听。这个元素渲染完成后调用 done 方法，done 方法会调用 waterfall 方法。waterfall 方法先调用 updateMinCol 方法，该方法通过对比每列的 offsetHeight 获取最小高度的列；然后 waterfall 调用 appendColData 方法，该方法会把数据存放到高度最小列中；最后 waterfall 通过 nextTick 调用 startObserver，该方法监听每个新增加的瀑布流元素。</p><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,9),v={href:"https://juejin.cn/post/7086330043038695432",target:"_blank",rel:"noopener noreferrer"};function m(b,h){const a=l("ExternalLinkIcon");return e(),o("div",null,[u,r,n("p",null,[n("a",k,[s("瀑布流"),t(a)])]),d,n("p",null,[n("a",v,[s("交错式瀑布流的实现"),t(a)])])])}const y=p(i,[["render",m],["__file","index.html.vue"]]);export{y as default};
