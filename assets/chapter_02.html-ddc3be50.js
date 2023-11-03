import{_ as e,W as a,X as n,a0 as t}from"./framework-0d71bc9d.js";const s={},i=t(`<h1 id="the-type-system" tabindex="-1"><a class="header-anchor" href="#the-type-system" aria-hidden="true">#</a> The Type System</h1><h2 id="what-s-in-a-type" tabindex="-1"><a class="header-anchor" href="#what-s-in-a-type" aria-hidden="true">#</a> What&#39;s in A Type?</h2><h3 id="type-systems" tabindex="-1"><a class="header-anchor" href="#type-systems" aria-hidden="true">#</a> Type Systems</h3><ul><li>A type system is the set of rules for how a programming language understands what types the constructs in a program may have.</li></ul><h2 id="type-annotations" tabindex="-1"><a class="header-anchor" href="#type-annotations" aria-hidden="true">#</a> Type Annotations</h2><ul><li>The variable will be inferred to <code>any</code> type when that variable doesn&#39;t have initial value.</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> a <span class="token comment">// let a:any</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>Much of TypeScript’s type checking can’t be applied to <code>any</code> typed values because they don’t have known types to be checked.</p></li><li><p>Type annotation: TypeScript provides a syntax for declaring the type of a variable without having to assign it an initial value.</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// &#39;string&#39; is a type annotation</span>
<span class="token keyword">let</span> text<span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="unnecessary-type-annotations" tabindex="-1"><a class="header-anchor" href="#unnecessary-type-annotations" aria-hidden="true">#</a> Unnecessary Type Annotations</h3><ul><li>The following type annotation is redundant because TypeScript could already infer the type</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> text<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),r=[i];function l(o,d){return a(),n("div",null,r)}const c=e(s,[["render",l],["__file","chapter_02.html.vue"]]);export{c as default};