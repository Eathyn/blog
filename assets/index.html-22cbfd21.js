const e=JSON.parse('{"key":"v-fddaad88","path":"/front_end/typescript/course-ts_basic/74/","title":"74 为已有的 JS 文件提供类型声明 - 配置","lang":"zh-CN","frontmatter":{"date":"2023-01-06T00:00:00.000Z","category":"TypeScript","tag":["Course - TypeScript Basic"],"description":"74 为已有的 JS 文件提供类型声明 - 配置 配置环境 使用 ts-loader 处理 .ts 文件 根目录必须有 tsconfig.json package.json { \\"scripts\\": { \\"dev\\": \\"webpack serve --mode development\\" }, \\"devDependencies\\": { \\"html-webpack-plugin\\": \\"^5.5.0\\", \\"ts-loader\\": \\"^9.4.1\\", \\"typescript\\": \\"^4.8.3\\", \\"webpack\\": \\"^5.74.0\\", \\"webpack-cli\\": \\"^4.10.0\\", \\"webpack-dev-server\\": \\"^4.11.1\\" } }","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/front_end/typescript/course-ts_basic/74/"}],["meta",{"property":"og:title","content":"74 为已有的 JS 文件提供类型声明 - 配置"}],["meta",{"property":"og:description","content":"74 为已有的 JS 文件提供类型声明 - 配置 配置环境 使用 ts-loader 处理 .ts 文件 根目录必须有 tsconfig.json package.json { \\"scripts\\": { \\"dev\\": \\"webpack serve --mode development\\" }, \\"devDependencies\\": { \\"html-webpack-plugin\\": \\"^5.5.0\\", \\"ts-loader\\": \\"^9.4.1\\", \\"typescript\\": \\"^4.8.3\\", \\"webpack\\": \\"^5.74.0\\", \\"webpack-cli\\": \\"^4.10.0\\", \\"webpack-dev-server\\": \\"^4.11.1\\" } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Course - TypeScript Basic"}],["meta",{"property":"article:published_time","content":"2023-01-06T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"74 为已有的 JS 文件提供类型声明 - 配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-06T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"配置环境","slug":"配置环境","link":"#配置环境","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]}],"git":{},"readingTime":{"minutes":0.59,"words":176},"filePathRelative":"front_end/typescript/course-ts_basic/74/index.md","localizedDate":"2023年1月6日","excerpt":"<h1> 74 为已有的 JS 文件提供类型声明 - 配置</h1>\\n<h2> 配置环境</h2>\\n<ul>\\n<li>使用 <code>ts-loader</code> 处理 <code>.ts</code> 文件</li>\\n<li>根目录必须有 <code>tsconfig.json</code></li>\\n</ul>\\n<p><em>package.json</em></p>\\n<div class=\\"language-json line-numbers-mode\\" data-ext=\\"json\\"><pre class=\\"language-json\\"><code><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">\\"scripts\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"dev\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"webpack serve --mode development\\"</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token property\\">\\"devDependencies\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">\\"html-webpack-plugin\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^5.5.0\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"ts-loader\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^9.4.1\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"typescript\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^4.8.3\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"webpack\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^5.74.0\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"webpack-cli\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^4.10.0\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token property\\">\\"webpack-dev-server\\"</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"^4.11.1\\"</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};