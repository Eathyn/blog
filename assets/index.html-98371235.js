import{_ as c,W as t,X as l,Y as e,Z as n,$ as a,a0 as o,C as d}from"./framework-0d71bc9d.js";const i={},r=e("h1",{id:"group-data",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#group-data","aria-hidden":"true"},"#"),n(" Group Data")],-1),p=e("h2",{id:"group-by",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#group-by","aria-hidden":"true"},"#"),n(" Group By")],-1),u={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-group-by/",target:"_blank",rel:"noopener noreferrer"},v=o(`<ul><li><code>GROUP BY</code>：将某一列中相同值的行归为一组，可以对组执行聚合函数（Aggregate Functions）。</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">SELECT</span> 
   column_1<span class="token punctuation">,</span> 
   column_2<span class="token punctuation">,</span>
   <span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">,</span>
   aggregate_function<span class="token punctuation">(</span>column_3<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> 
   table_name
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> 
   column_1<span class="token punctuation">,</span>
   column_2<span class="token punctuation">,</span>
   <span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>PostgreSQL 语句执行顺序：<code>FROM</code> -&gt; <code>WHERE</code> -&gt; <code>GROUP BY</code> -&gt; <code>HAVING</code> -&gt; <code>SELECT</code> -&gt; <code>DISTINCT</code> -&gt; <code>ORDER BY</code> -&gt; <code>LIMIT</code></li></ul><h2 id="having" tabindex="-1"><a class="header-anchor" href="#having" aria-hidden="true">#</a> Having</h2>`,4),g={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-having/",target:"_blank",rel:"noopener noreferrer"},m=o(`<ul><li><code>HAVING</code>：设置过滤组的条件。</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">SELECT</span>
	column1<span class="token punctuation">,</span>
	aggregate_function <span class="token punctuation">(</span>column2<span class="token punctuation">)</span>
<span class="token keyword">FROM</span>
	table_name
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
	column1
<span class="token keyword">HAVING</span>
	condition<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>PostgreSQL 语句执行顺序：<code>FROM</code> -&gt; <code>WHERE</code> -&gt; <code>GROUP BY</code> -&gt; <code>HAVING</code> -&gt; <code>SELECT</code> -&gt; <code>DISTINCT</code> -&gt; <code>ORDER BY</code> -&gt; <code>LIMIT</code></p></li><li><p>因为 <code>HAVING</code> 在 <code>SELECT</code> 之前，所以在 <code>HAVING</code> 中无法使用 <code>SELECT</code> 中定义的别名。</p></li><li><p><code>HAVING</code> 用于设置过滤组的条件；<code>WHERE</code> 用于设置过滤行的条件。</p></li></ul>`,3);function k(_,b){const s=d("ExternalLinkIcon");return t(),l("div",null,[r,p,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",u,[n("Group By"),a(s)])])]),v,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",g,[n("Having"),a(s)])])]),m])}const E=c(i,[["render",k],["__file","index.html.vue"]]);export{E as default};
