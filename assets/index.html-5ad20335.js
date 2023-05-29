import{_ as t,W as p,X as o,Y as n,Z as s,$ as e,a0 as i,C as c}from"./framework-c8ebc670.js";const l={},r=i(`<h1 id="behaviors" tabindex="-1"><a class="header-anchor" href="#behaviors" aria-hidden="true">#</a> behaviors</h1><h2 id="使用原因" tabindex="-1"><a class="header-anchor" href="#使用原因" aria-hidden="true">#</a> 使用原因</h2><ul><li>在组件中复用代码</li></ul><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><ul><li><code>behaviors</code> 包含数据、数据、生命周期函数和方法</li><li>组件引用 <code>behaviors</code> 时，<code>behaviors</code> 中的数据、数据、生命周期函数和方法会合并到组件中</li><li>组件可以引用多个 <code>behaviors</code></li></ul><h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h2><p><em>my-component.js</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> behaviorA <span class="token keyword">from</span> <span class="token string">&#39;../../behaviors/behaviorA&#39;</span>

<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>behaviorA<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lifetimes</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>dataA<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>behaviorA.js</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> behaviorA <span class="token operator">=</span> <span class="token function">Behavior</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">propA</span><span class="token operator">:</span> <span class="token string">&#39;prop: A&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dataA</span><span class="token operator">:</span> <span class="token string">&#39;data: A&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;method: A&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;created hook: A&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> behaviorA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="同名字段的覆盖和组合规则" tabindex="-1"><a class="header-anchor" href="#同名字段的覆盖和组合规则" aria-hidden="true">#</a> 同名字段的覆盖和组合规则</h2>`,11),u={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html#%E5%90%8C%E5%90%8D%E5%AD%97%E6%AE%B5%E7%9A%84%E8%A6%86%E7%9B%96%E5%92%8C%E7%BB%84%E5%90%88%E8%A7%84%E5%88%99",target:"_blank",rel:"noopener noreferrer"},d=n("h2",{id:"refs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#refs","aria-hidden":"true"},"#"),s(" Refs")],-1),k={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html",target:"_blank",rel:"noopener noreferrer"};function v(h,m){const a=c("ExternalLinkIcon");return p(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("详细查看"),e(a)])])]),d,n("ul",null,[n("li",null,[n("a",k,[s("behaviors"),e(a)])])])])}const f=t(l,[["render",v],["__file","index.html.vue"]]);export{f as default};