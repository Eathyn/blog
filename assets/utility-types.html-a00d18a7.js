import{_ as n,W as t,X as r,Y as e,Z as a,$ as i,a0 as l,C as o}from"./framework-c8ebc670.js";const p={},c=e("h1",{id:"utility-types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#utility-types","aria-hidden":"true"},"#"),a(" Utility Types")],-1),d=e("h2",{id:"partial-type",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#partial-type","aria-hidden":"true"},"#"),a(" Partial Type")],-1),u={href:"https://dev.to/smpnjn/how-the-typescript-partial-type-works-2klj",target:"_blank",rel:"noopener noreferrer"},m=l(`<ul><li>将一个类型的所有属性都转变为可选（optional）属性并生成一个新类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PartialUser</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span> <span class="token comment">// {name?: string, age?: number}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(h,_){const s=o("ExternalLinkIcon");return t(),r("div",null,[c,d,e("blockquote",null,[e("p",null,[a("Reference: "),e("a",u,[a("How the TypeScript Partial Type Works"),i(s)])])]),m])}const v=n(p,[["render",k],["__file","utility-types.html.vue"]]);export{v as default};
