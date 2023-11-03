import{_ as i,W as t,X as o,Y as e,Z as n,$ as a,a0 as l,C as r}from"./framework-0d71bc9d.js";const d={},c=e("h1",{id:"sub-query",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sub-query","aria-hidden":"true"},"#"),n(" Sub Query")],-1),p=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),u={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-subquery/",target:"_blank",rel:"noopener noreferrer"},v=l(`<ul><li><p>子查询（Sub Query）/ 内查询（Inner Query）：位于括号中的查询。</p></li><li><p>外查询（Outer Query）：包含子查询的查询。</p></li><li><p>例子：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">SELECT</span>
	film_id<span class="token punctuation">,</span>
	rental_rate
<span class="token keyword">FROM</span>
	film
<span class="token keyword">WHERE</span>
	rental_rate <span class="token operator">&gt;</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span> <span class="token function">AVG</span><span class="token punctuation">(</span>rental_rate<span class="token punctuation">)</span>
		<span class="token keyword">FROM</span> film
	<span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span> rental_rate <span class="token keyword">ASC</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>IN</code> 结合子查询：</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">SELECT</span>
	film_id<span class="token punctuation">,</span>
	title
<span class="token keyword">FROM</span>
	film
<span class="token keyword">WHERE</span>
	film_id <span class="token keyword">IN</span> <span class="token punctuation">(</span>
		<span class="token keyword">SELECT</span>
			inventory<span class="token punctuation">.</span>film_id
		<span class="token keyword">FROM</span>
			rental
		INNER JOIN inventory <span class="token keyword">ON</span> inventory<span class="token punctuation">.</span>inventory_id <span class="token operator">=</span> rental<span class="token punctuation">.</span>inventory_id
		<span class="token keyword">WHERE</span>
			return_date <span class="token keyword">BETWEEN</span> <span class="token string">&#39;2005-05-29&#39;</span> <span class="token keyword">AND</span> <span class="token string">&#39;2005-05-30&#39;</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="any-operator" tabindex="-1"><a class="header-anchor" href="#any-operator" aria-hidden="true">#</a> ANY Operator</h2>`,5),h={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-any/",target:"_blank",rel:"noopener noreferrer"},k=l(`<ul><li><p>含义：</p><ul><li><code>x &gt; ANY(subquery)</code>：<code>x</code> 比子查询中的<strong>任意</strong>一项大时返回 <code>true</code>。</li><li><code>x &lt; ANY(subquery)</code>：<code>x</code> 比子查询中的<strong>任意</strong>一项小时返回 <code>true</code>。</li><li><code>x = ANY(subquery)</code>：<code>x</code> 与子查询中的任意一项相等时返回 <code>true</code>，相当于 <code>IN</code>。</li><li><code>x &lt;&gt; ANY(subquery)</code>：<code>x</code> 与子查询中的任意一项不相等时返回 <code>true</code>。</li></ul></li><li><p>格式：<code>expresion operator ANY(subquery)</code>。</p></li><li><p>规定：</p><ul><li>子查询只能返回一列。</li><li><code>ANY</code> 需要与比较操作符一起使用。</li></ul></li><li><p>例子：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">SELECT</span> title
<span class="token keyword">FROM</span> film
<span class="token keyword">WHERE</span> <span class="token keyword">length</span> <span class="token operator">&gt;=</span> <span class="token keyword">ANY</span><span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span><span class="token keyword">length</span><span class="token punctuation">)</span>
    <span class="token keyword">FROM</span> film
    INNER JOIN film_category <span class="token keyword">USING</span><span class="token punctuation">(</span>film_id<span class="token punctuation">)</span>
    <span class="token keyword">GROUP</span> <span class="token keyword">BY</span>  category_id
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="all-operator" tabindex="-1"><a class="header-anchor" href="#all-operator" aria-hidden="true">#</a> ALL Operator</h2>`,3),b={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-all/",target:"_blank",rel:"noopener noreferrer"},g=l('<ul><li>含义： <ul><li><code>A &gt; ALL(subquery)</code>：<code>A</code> 比子查询中的<strong>每一项</strong>都大时返回 <code>true</code>。</li><li><code>A &lt; ALL(subquery)</code>：<code>A</code> 比子查询中的<strong>每一项</strong>都小时返回 <code>true</code>。</li><li><code>A = ALL(subquery)</code>：<code>A</code> 与子查询中的任意一项相等时返回 <code>true</code>，相当于 <code>IN</code>。</li></ul></li></ul><h2 id="exists-operator" tabindex="-1"><a class="header-anchor" href="#exists-operator" aria-hidden="true">#</a> EXISTS Operator</h2>',2),m=e("p",null,"Reference:",-1),y={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-exists/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://stackoverflow.com/a/7171072",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"SELECT 1",-1),f=l("<ul><li><p>含义：如果子查询返回了至少一行，那么 <code>EXISTS (subquery)</code> 返回 <code>true</code>。</p></li><li><p>格式：<code>EXISTS (subquery)</code>。</p></li><li><p><code>EXISTS</code> 操作符只关心是否有返回行，不关心返回的内容，所以子查询中可以返回一列或多列。<code>ANY</code> 和 <code>ALL</code> 则只能返回一列。</p></li><li><p>如果子查询没有返回行，那么 <code>NOT EXISTS (subquery)</code> 返回 <code>true</code>。</p></li><li><p>如果子查询返回 <code>NULL</code>，那么 <code>EXISTS (subquery)</code> 返回 <code>true</code>。</p></li></ul>",1);function q(E,N){const s=r("ExternalLinkIcon");return t(),o("div",null,[c,p,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",u,[n("SubQuery Introduction"),a(s)])])]),v,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",h,[n("ANY Operator"),a(s)])])]),k,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",b,[n("ALL Operator"),a(s)])])]),g,e("blockquote",null,[m,e("ul",null,[e("li",null,[e("a",y,[n("EXISTS"),a(s)])]),e("li",null,[e("a",_,[n("The Meaning of "),w,a(s)])])])]),f])}const S=i(d,[["render",q],["__file","index.html.vue"]]);export{S as default};