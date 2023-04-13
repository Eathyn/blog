const e=JSON.parse(`{"key":"v-e3a3b7e6","path":"/cs/network/http/cache/","title":"Cache","lang":"zh-CN","frontmatter":{"date":"2021-02-18T00:00:00.000Z","category":"network","tag":"cache","description":"Cache 原因 没有修改过的资源不需要重复向服务器获取，直接从缓存中获取可以更快地展示页面 强制缓存 概念 服务器设置 Cache-Control，后续针对该请求，浏览器直接从缓存中获取数据，不需要通过服务器 force cache concept 代码 前端 function fetchData() { fetch('http://localhost:3000', { credentials: 'include', }) }","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/cs/network/http/cache/"}],["meta",{"property":"og:title","content":"Cache"}],["meta",{"property":"og:description","content":"Cache 原因 没有修改过的资源不需要重复向服务器获取，直接从缓存中获取可以更快地展示页面 强制缓存 概念 服务器设置 Cache-Control，后续针对该请求，浏览器直接从缓存中获取数据，不需要通过服务器 force cache concept 代码 前端 function fetchData() { fetch('http://localhost:3000', { credentials: 'include', }) }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eathyn.github.io/blog/blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-13T00:21:43.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Cache"}],["meta",{"property":"article:tag","content":"cache"}],["meta",{"property":"article:published_time","content":"2021-02-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-13T00:21:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cache\\",\\"image\\":[\\"https://eathyn.github.io/blog/blog/\\"],\\"datePublished\\":\\"2021-02-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-13T00:21:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"强制缓存","slug":"强制缓存","link":"#强制缓存","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"代码","slug":"代码","link":"#代码","children":[]},{"level":3,"title":"结果","slug":"结果","link":"#结果","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]},{"level":2,"title":"协商/对比缓存","slug":"协商-对比缓存","link":"#协商-对比缓存","children":[{"level":3,"title":"概念","slug":"概念-1","link":"#概念-1","children":[]},{"level":3,"title":"过程","slug":"过程","link":"#过程","children":[{"level":4,"title":"Last-Modified / If-Modified-Since","slug":"last-modified-if-modified-since","link":"#last-modified-if-modified-since","children":[]},{"level":4,"title":"Etag / If-None-Match","slug":"etag-if-none-match","link":"#etag-if-none-match","children":[]}]},{"level":3,"title":"注意","slug":"注意-1","link":"#注意-1","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]},{"level":2,"title":"Translation","slug":"translation","link":"#translation","children":[]}],"git":{"createdTime":1681306939000,"updatedTime":1681345303000,"contributors":[{"name":"Eathyn","email":"eathynzakas@gmail.com","commits":2}]},"readingTime":{"minutes":1.94,"words":583},"filePathRelative":"cs/network/http/cache/index.md","localizedDate":"2021年2月18日","excerpt":"<h1> Cache</h1>\\n<h2> 原因</h2>\\n<ul>\\n<li>没有修改过的资源不需要重复向服务器获取，直接从缓存中获取可以更快地展示页面</li>\\n</ul>\\n<h2> 强制缓存</h2>\\n<h3> 概念</h3>\\n<ul>\\n<li>服务器设置 <code>Cache-Control</code>，后续针对该请求，浏览器直接从缓存中获取数据，不需要通过服务器</li>\\n</ul>\\n<figure><figcaption>force cache concept</figcaption></figure>\\n<h3> 代码</h3>\\n<ul>\\n<li>前端</li>\\n</ul>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fetchData</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token function\\">fetch</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'http://localhost:3000'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">credentials</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'include'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
