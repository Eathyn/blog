import{_ as t,W as o,X as p,Y as n,Z as s,$ as a,a0 as l,C as i}from"./framework-0d71bc9d.js";const c={},d=n("h1",{id:"modify-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#modify-data","aria-hidden":"true"},"#"),s(" Modify Data")],-1),r=n("h2",{id:"insert-statement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#insert-statement","aria-hidden":"true"},"#"),s(" Insert Statement")],-1),u=n("p",null,"Reference:",-1),k={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-insert-multiple-rows/",target:"_blank",rel:"noopener noreferrer"},m=l(`<ul><li>插入一行的格式：</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name<span class="token punctuation">(</span>column_list<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> <span class="token operator">..</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>INSERT</code> 语句返回的信息：</p><ul><li>内容：<code>INSERT OID count</code>。</li><li><code>OID（Object Identifier）</code>：PostgreSQL 使用 <code>OID</code> 作为系统表的主键。<code>OID</code> 一般是 0。</li><li><code>count</code>：成功插入的语句。</li></ul></li><li><p><code>RETURNING</code> 子句与 <code>INSERT</code> 结合使用，返回插入的数据：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name<span class="token punctuation">(</span>column_list<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span>value1<span class="token punctuation">,</span> value2<span class="token punctuation">,</span> …<span class="token punctuation">)</span>
<span class="token keyword">RETURNING</span> <span class="token operator">*</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入多行的格式：</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name <span class="token punctuation">(</span>column_list<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span>value_list_1<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>value_list_2<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">..</span><span class="token punctuation">.</span>
    <span class="token punctuation">(</span>value_list_n<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="update-statement" tabindex="-1"><a class="header-anchor" href="#update-statement" aria-hidden="true">#</a> Update Statement</h2>`,7),b={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update/",target:"_blank",rel:"noopener noreferrer"},h=l(`<ul><li>格式：</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">UPDATE</span> table_name
<span class="token keyword">SET</span> column1 <span class="token operator">=</span> value1<span class="token punctuation">,</span>
    column2 <span class="token operator">=</span> value2<span class="token punctuation">,</span>
    <span class="token operator">..</span><span class="token punctuation">.</span>
<span class="token keyword">WHERE</span> condition
<span class="token keyword">RETURNING</span> <span class="token operator">*</span> | output_expression <span class="token keyword">AS</span> output_name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以结合 <code>RETURNING</code> 使用。</li></ul><h2 id="update-join" tabindex="-1"><a class="header-anchor" href="#update-join" aria-hidden="true">#</a> Update Join</h2>`,4),E={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-update-join/",target:"_blank",rel:"noopener noreferrer"},g=l(`<ul><li><p>含义：根据 表2 更新 表1 的行数据。</p></li><li><p>格式：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">UPDATE</span> t1
<span class="token keyword">SET</span> t1<span class="token punctuation">.</span>c1 <span class="token operator">=</span> new_value
<span class="token keyword">FROM</span> t2
<span class="token keyword">WHERE</span> t1<span class="token punctuation">.</span>c2 <span class="token operator">=</span> t2<span class="token punctuation">.</span>c2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>FROM</code> 必须紧跟在 <code>SET</code> 之后。</li></ul><h2 id="delete-statement" tabindex="-1"><a class="header-anchor" href="#delete-statement" aria-hidden="true">#</a> Delete Statement</h2>`,4),_={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete/",target:"_blank",rel:"noopener noreferrer"},w=l(`<ul><li><p>含义：删除一行或多行数据。</p></li><li><p>格式：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> table_name
<span class="token keyword">WHERE</span> condition
<span class="token keyword">RETURNING</span> <span class="token punctuation">(</span>select_list | <span class="token operator">*</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>DELETE</code> 语句只会删除行，不会改变表的结构。<code>ALTER TABLE</code> 可以改变表的结构。</p></li><li><p>删除一行：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> links
<span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除多行：</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> links
<span class="token keyword">WHERE</span> id <span class="token keyword">IN</span> <span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除所有行：</li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> links<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-join" tabindex="-1"><a class="header-anchor" href="#delete-join" aria-hidden="true">#</a> Delete Join</h2>`,9),q={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-delete-join/",target:"_blank",rel:"noopener noreferrer"},y=l(`<ul><li><p>含义：根据 表2 删除 表1 的行数据。</p></li><li><p>格式：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> t1
<span class="token keyword">USING</span> t2
<span class="token keyword">WHERE</span> t1<span class="token punctuation">.</span>id <span class="token operator">=</span> t2<span class="token punctuation">.</span>id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>PostgreSQL 不支持 <code>DELETE JOIN</code> 语句，但是结合 <code>DELETE</code> 和 <code>USING</code> 可以模拟 <code>DELETE JOIN</code>。</p></li><li><p>因为 <code>USING</code> 子句不是 <code>SQL</code> 的规范，所以可能在其他数据库中不存在。如果需要兼容其他数据库，则使用子查询模拟 <code>DELETE JOIN</code>：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> contacts
<span class="token keyword">WHERE</span> phone <span class="token keyword">IN</span> <span class="token punctuation">(</span>
	<span class="token keyword">SELECT</span> phone
	<span class="token keyword">FROM</span> blacklist
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="upsert" tabindex="-1"><a class="header-anchor" href="#upsert" aria-hidden="true">#</a> Upsert</h2>`,5),T={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-upsert/",target:"_blank",rel:"noopener noreferrer"},R=l(`<ul><li><p>含义：插入一行数据时，如果数据库中这一行已存在，则执行 <code>UPDATE</code> 语句；如果不存在，则执行 <code>INSERT</code> 语句。这种操作在关系型数据库中叫做 <code>upsert</code>。</p></li><li><p>格式：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> table_name<span class="token punctuation">(</span>column_list<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span><span class="token punctuation">(</span>value_list<span class="token punctuation">)</span>
<span class="token keyword">ON</span> CONFLICT target action<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>target 可以是：</p><ul><li>列名</li><li><code>ON CONSTRAINT constraint_name</code></li><li><code>WHERE</code> 子句</li></ul></li><li><p>action 可以是：</p><ul><li><code>DO NOTHING</code></li><li><code>DO UPDATE SET column_1 = value_1, .. WHERE condition</code></li></ul></li></ul>`,3);function N(f,I){const e=i("ExternalLinkIcon");return o(),p("div",null,[d,r,n("blockquote",null,[u,n("ul",null,[n("li",null,[n("a",k,[s("INSERT"),a(e)])]),n("li",null,[n("a",v,[s("Insert Multiple Rows"),a(e)])])])]),m,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",b,[s("UPDATE"),a(e)])])]),h,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",E,[s("UPDATE join"),a(e)])])]),g,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",_,[s("Delete"),a(e)])])]),w,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",q,[s("Delete Join"),a(e)])])]),y,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",T,[s("Upsert"),a(e)])])]),R])}const x=t(c,[["render",N],["__file","index.html.vue"]]);export{x as default};