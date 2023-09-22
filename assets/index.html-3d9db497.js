import{_ as t,W as i,X as o,Y as e,Z as n,$ as a,a0 as l,C as r}from"./framework-0d71bc9d.js";const c={},d=e("h1",{id:"csv-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#csv-file","aria-hidden":"true"},"#"),n(" CSV File")],-1),p=e("h2",{id:"import-csv-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#import-csv-file","aria-hidden":"true"},"#"),n(" Import CSV File")],-1),u={href:"https://www.postgresqltutorial.com/postgresql-tutorial/import-csv-file-into-posgresql-table/",target:"_blank",rel:"noopener noreferrer"},v=l(`<div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>COPY table_name<span class="token punctuation">(</span>column_list<span class="token punctuation">)</span>

<span class="token comment">-- 指定文件路径</span>
<span class="token keyword">FROM</span> <span class="token string">&#39;path/to/csv/file&#39;</span>

DELIMITER <span class="token string">&#39;,&#39;</span>

<span class="token comment">-- csv 文件有头部，不要将头部导入到数据库中</span>
CSV HEADER<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>还可以使用 <code>pgAdmin</code> 导入，参考上面的链接。</li></ul><h2 id="export-to-csv-file" tabindex="-1"><a class="header-anchor" href="#export-to-csv-file" aria-hidden="true">#</a> Export to CSV File</h2>`,3),m={href:"https://www.postgresqltutorial.com/postgresql-tutorial/export-postgresql-table-to-csv-file/",target:"_blank",rel:"noopener noreferrer"},h=l(`<div class="language-plsql line-numbers-mode" data-ext="plsql"><pre class="language-plsql"><code>COPY table_name <span class="token punctuation">(</span>column_list<span class="token punctuation">)</span>
<span class="token keyword">TO</span> <span class="token string">&#39;path/to/csv/file&#39;</span>
DELIMITER <span class="token string">&#39;,&#39;</span>
CSV HEADER<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>CSV HEADER;</code>：导出头部。</li></ul>`,2);function _(b,f){const s=r("ExternalLinkIcon");return i(),o("div",null,[d,p,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",u,[n("Import CSV File"),a(s)])])]),v,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",m,[n("Export to CSV File"),a(s)])])]),h])}const g=t(c,[["render",_],["__file","index.html.vue"]]);export{g as default};
