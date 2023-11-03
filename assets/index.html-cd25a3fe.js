const e=JSON.parse('{"key":"v-fa5c0d24","path":"/cs/database/postgresql/manage_table/","title":"Manage Table","lang":"zh-CN","frontmatter":{"date":"2023-09-06T00:00:00.000Z","category":"PostgreSQL","description":"Manage Table Create Table Reference: Create Table CREATE TABLE [IF NOT EXISTS] table_name ( column_name datatype(length) column_constraint, column_name datatype(length) column_constraint, table_constraints );","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/cs/database/postgresql/manage_table/"}],["meta",{"property":"og:title","content":"Manage Table"}],["meta",{"property":"og:description","content":"Manage Table Create Table Reference: Create Table CREATE TABLE [IF NOT EXISTS] table_name ( column_name datatype(length) column_constraint, column_name datatype(length) column_constraint, table_constraints );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2023-09-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Manage Table\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create Table","slug":"create-table","link":"#create-table","children":[]},{"level":2,"title":"Select Into","slug":"select-into","link":"#select-into","children":[]},{"level":2,"title":"Create Table As","slug":"create-table-as","link":"#create-table-as","children":[]},{"level":2,"title":"Serial","slug":"serial","link":"#serial","children":[]},{"level":2,"title":"Sequence","slug":"sequence","link":"#sequence","children":[]},{"level":2,"title":"Identity Column","slug":"identity-column","link":"#identity-column","children":[]},{"level":2,"title":"Alter Table","slug":"alter-table","link":"#alter-table","children":[]},{"level":2,"title":"Rename Table","slug":"rename-table","link":"#rename-table","children":[]},{"level":2,"title":"Add Column","slug":"add-column","link":"#add-column","children":[]},{"level":2,"title":"Drop Column","slug":"drop-column","link":"#drop-column","children":[]},{"level":2,"title":"Change Column Data Type","slug":"change-column-data-type","link":"#change-column-data-type","children":[]},{"level":2,"title":"Rename Column","slug":"rename-column","link":"#rename-column","children":[]},{"level":2,"title":"Drop Table","slug":"drop-table","link":"#drop-table","children":[]},{"level":2,"title":"Truncate Table","slug":"truncate-table","link":"#truncate-table","children":[]}],"git":{},"readingTime":{"minutes":3.61,"words":1084},"filePathRelative":"cs/database/postgresql/manage_table/index.md","localizedDate":"2023年9月6日","excerpt":"<h1> Manage Table</h1>\\n<h2> Create Table</h2>\\n<blockquote>\\n<p>Reference: <a href=\\"https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-create-table/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Create Table</a></p>\\n</blockquote>\\n<div class=\\"language-plsql line-numbers-mode\\" data-ext=\\"plsql\\"><pre class=\\"language-plsql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token punctuation\\">[</span><span class=\\"token keyword\\">IF</span> <span class=\\"token keyword\\">NOT</span> <span class=\\"token keyword\\">EXISTS</span><span class=\\"token punctuation\\">]</span> table_name <span class=\\"token punctuation\\">(</span>\\n  column_name datatype<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">length</span><span class=\\"token punctuation\\">)</span> column_constraint<span class=\\"token punctuation\\">,</span>\\n  column_name datatype<span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">length</span><span class=\\"token punctuation\\">)</span> column_constraint<span class=\\"token punctuation\\">,</span>\\n  table_constraints  \\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};