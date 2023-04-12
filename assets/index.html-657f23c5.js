const n=JSON.parse(`{"key":"v-b430fe26","path":"/solution/cross_origin/","title":"跨域","lang":"zh-CN","frontmatter":{"date":"2021-11-30T00:00:00.000Z","category":"solution","tag":"跨域","description":"跨域 CORS 让后端开发者配置跨域的 HTTP 头部 适合开发环境和线上环境 Proxy 适合开发环境 :::: code-group ::: code-group-item webpack module.exports = { // ... devServer: { proxy: { '/base_url/': { target: '&lt;url&gt;', ws: true, changeOrigin: true, }, } }, //... }","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/solution/cross_origin/"}],["meta",{"property":"og:title","content":"跨域"}],["meta",{"property":"og:description","content":"跨域 CORS 让后端开发者配置跨域的 HTTP 头部 适合开发环境和线上环境 Proxy 适合开发环境 :::: code-group ::: code-group-item webpack module.exports = { // ... devServer: { proxy: { '/base_url/': { target: '&lt;url&gt;', ws: true, changeOrigin: true, }, } }, //... }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-12T13:42:19.000Z"}],["meta",{"property":"article:tag","content":"跨域"}],["meta",{"property":"article:published_time","content":"2021-11-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-12T13:42:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨域\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-12T13:42:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CORS","slug":"cors","link":"#cors","children":[]},{"level":2,"title":"Proxy","slug":"proxy","link":"#proxy","children":[]},{"level":2,"title":"Nginx","slug":"nginx","link":"#nginx","children":[]}],"git":{"createdTime":1681306939000,"updatedTime":1681306939000,"contributors":[{"name":"Eathyn","email":"eathynzakas@gmail.com","commits":1}]},"readingTime":{"minutes":0.34,"words":101},"filePathRelative":"solution/cross_origin/index.md","localizedDate":"2021年11月30日","excerpt":"<h1> 跨域</h1>\\n<h2> CORS</h2>\\n<ul>\\n<li>让后端开发者配置跨域的 HTTP 头部</li>\\n<li>适合开发环境和线上环境</li>\\n</ul>\\n<h2> Proxy</h2>\\n<ul>\\n<li>适合开发环境</li>\\n</ul>\\n<p>:::: code-group</p>\\n<p>::: code-group-item webpack</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code>module<span class=\\"token punctuation\\">.</span>exports <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// ...</span>\\n  <span class=\\"token literal-property property\\">devServer</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">proxy</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token string-property property\\">'/base_url/'</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token literal-property property\\">target</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'&lt;url&gt;'</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">ws</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n        <span class=\\"token literal-property property\\">changeOrigin</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n      <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token comment\\">//...</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
