import{_ as e,W as t,X as p,Y as n,Z as s,$ as o,a0 as i,C as l}from"./framework-0d71bc9d.js";const c={},r=n("h1",{id:"type-compatibility",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#type-compatibility","aria-hidden":"true"},"#"),s(" Type Compatibility")],-1),d=n("h2",{id:"定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定义","aria-hidden":"true"},"#"),s(" 定义")],-1),u={href:"https://roadmap.sh/typescript",target:"_blank",rel:"noopener noreferrer"},k=i(`<ul><li><p>当两种类型名称不同但结构相同，则可以说这两种类型是兼容的。</p></li><li><p>如下代码所示，<code>Person</code> 和 <code>People</code> 名称不同但结构相同，因此它们是兼容的。</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;Jeff&#39;</span><span class="token punctuation">,</span>
  age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> person2<span class="token operator">:</span> People <span class="token operator">=</span> person1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function m(v,b){const a=l("ExternalLinkIcon");return t(),p("div",null,[r,d,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",u,[s("TypeScript Roadmap"),o(a)])])]),k])}const h=e(c,[["render",m],["__file","type-compatibility.html.vue"]]);export{h as default};
