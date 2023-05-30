import{_ as o,W as p,X as i,Y as n,Z as e,$ as a,a0 as t,C as c}from"./framework-c8ebc670.js";const l={},r=n("h1",{id:"combining-types",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#combining-types","aria-hidden":"true"},"#"),e(" Combining Types")],-1),d=n("ul",null,[n("li",null,"组合已有的类型形成新的类型。")],-1),u=n("h2",{id:"union-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#union-type","aria-hidden":"true"},"#"),e(" Union Type")],-1),m=n("p",null,"Reference:",-1),k={href:"https://roadmap.sh/typescript",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types",target:"_blank",rel:"noopener noreferrer"},v=t(`<ul><li><p>联合类型（union type）是指使用联合操作符 <code>|</code> 组合已有类型形成新类型，新类型为任意一个已有类型。</p></li><li><p>如下代码所示，<code>stringOrNumber</code> 由 <code>string</code> 和 <code>number</code> 联合组成，所以值类型为 <code>string</code> 或 <code>number</code> 的值可以赋值给类型为 <code>stringOrNumber</code> 的变量。</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">stringOrNumber</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span>
<span class="token keyword">let</span> firstname<span class="token operator">:</span> stringOrNumber <span class="token operator">=</span> <span class="token string">&#39;Jeff&#39;</span>
<span class="token keyword">let</span> age<span class="token operator">:</span> stringOrNumber <span class="token operator">=</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intersection-type" tabindex="-1"><a class="header-anchor" href="#intersection-type" aria-hidden="true">#</a> Intersection Type</h2>`,3),y=n("p",null,"Reference:",-1),h={href:"https://roadmap.sh/typescript",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.typescripttutorial.net/typescript-tutorial/typescript-intersection-types/",target:"_blank",rel:"noopener noreferrer"},g=t(`<ul><li><p>交集类型（intersection type）是指使用交集操作符 <code>&amp;</code> 组合已有类型形成新类型，新类型包含所有已有类型的所有属性。</p></li><li><p>如下代码所示，<code>Employee</code> 由 <code>Identity</code> 和 <code>Contact</code> 交集组成，所以 <code>Employee</code> 拥有 <code>Identity</code> 和 <code>Contact</code> 的所有属性。</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Identity</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Contact</span> <span class="token punctuation">{</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  phone<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> Identity <span class="token operator">&amp;</span> Contact

<span class="token keyword">let</span> employee<span class="token operator">:</span> Employee <span class="token operator">=</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Jeff&#39;</span><span class="token punctuation">,</span>
  email<span class="token operator">:</span> <span class="token string">&#39;jeff@gmail.com&#39;</span><span class="token punctuation">,</span>
  phone<span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function f(w,x){const s=c("ExternalLinkIcon");return p(),i("div",null,[r,d,u,n("blockquote",null,[m,n("ul",null,[n("li",null,[n("a",k,[e("TypeScript Roadmap"),a(s)])]),n("li",null,[n("a",b,[e("TypeScript Docs"),a(s)])])])]),v,n("blockquote",null,[y,n("ul",null,[n("li",null,[n("a",h,[e("TypeScript Roadmap"),a(s)])]),n("li",null,[n("a",_,[e("TypeScript Tutorial"),a(s)])])])]),g])}const N=o(l,[["render",f],["__file","combining-types.html.vue"]]);export{N as default};
