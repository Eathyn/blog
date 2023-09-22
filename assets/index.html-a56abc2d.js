import{_ as i,W as l,X as t,Y as s,Z as n,$ as a,a0 as o,C as r}from"./framework-0d71bc9d.js";const d={},c=s("h1",{id:"common-table-expressions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#common-table-expressions","aria-hidden":"true"},"#"),n(" Common Table Expressions")],-1),p=s("h2",{id:"introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),v={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-cte/",target:"_blank",rel:"noopener noreferrer"},h=o(`<ul><li><p>公用表表达式（Common Table Expressions）作用是简化查询语句。</p></li><li><p>例子：</p></li></ul><div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code><span class="token keyword">WITH</span> cte_film <span class="token keyword">AS</span> <span class="token punctuation">(</span>
    <span class="token keyword">SELECT</span>
        film_id<span class="token punctuation">,</span>
        title<span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token keyword">CASE</span>
            <span class="token keyword">WHEN</span> <span class="token keyword">length</span> <span class="token operator">&lt;</span> <span class="token number">30</span>
                <span class="token keyword">THEN</span> <span class="token string">&#39;Short&#39;</span>
            <span class="token keyword">WHEN</span> <span class="token keyword">length</span> <span class="token operator">&gt;=</span> <span class="token number">30</span> <span class="token keyword">AND</span> <span class="token keyword">length</span> <span class="token operator">&lt;</span> <span class="token number">90</span>
                <span class="token keyword">THEN</span> <span class="token string">&#39;Medium&#39;</span>
            <span class="token keyword">ELSE</span> <span class="token string">&#39;Long&#39;</span>
        <span class="token keyword">END</span><span class="token punctuation">)</span> <span class="token keyword">length</span>
    <span class="token keyword">FROM</span>
        film
<span class="token punctuation">)</span>

<span class="token keyword">SELECT</span>
    film_id<span class="token punctuation">,</span>
    title<span class="token punctuation">,</span>
    <span class="token keyword">length</span>
<span class="token keyword">FROM</span>
    cte_film
<span class="token keyword">WHERE</span>
    <span class="token keyword">length</span> <span class="token operator">=</span> <span class="token string">&#39;Long&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    title<span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="recursive-query" tabindex="-1"><a class="header-anchor" href="#recursive-query" aria-hidden="true">#</a> Recursive Query</h2>`,3),u={href:"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-recursive-query/",target:"_blank",rel:"noopener noreferrer"};function k(g,m){const e=r("ExternalLinkIcon");return l(),t("div",null,[c,p,s("blockquote",null,[s("p",null,[n("Reference: "),s("a",v,[n("CTE Introduction"),a(e)])])]),h,s("blockquote",null,[s("p",null,[n("Reference: "),s("a",u,[n("Recursive Query"),a(e)])])])])}const _=i(d,[["render",k],["__file","index.html.vue"]]);export{_ as default};
