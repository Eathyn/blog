const e=JSON.parse('{"key":"v-ee2993f0","path":"/solution/file_upload/","title":"文件上传","lang":"zh-CN","frontmatter":{"date":"2021-10-18T00:00:00.000Z","category":"solution","tag":"大文件上传","description":"文件上传 源码 文件上传 检测文件类型 input 元素的 accept 属性可以限制用户上传文件的类型。 &lt;input type=\\"file\\" accept=\\"image/*, video/*\\"&gt;","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/solution/file_upload/"}],["meta",{"property":"og:title","content":"文件上传"}],["meta",{"property":"og:description","content":"文件上传 源码 文件上传 检测文件类型 input 元素的 accept 属性可以限制用户上传文件的类型。 &lt;input type=\\"file\\" accept=\\"image/*, video/*\\"&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-12T13:42:19.000Z"}],["meta",{"property":"article:tag","content":"大文件上传"}],["meta",{"property":"article:published_time","content":"2021-10-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-12T13:42:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件上传\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-12T13:42:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"源码","slug":"源码","link":"#源码","children":[]},{"level":2,"title":"检测文件类型","slug":"检测文件类型","link":"#检测文件类型","children":[]},{"level":2,"title":"文件切片","slug":"文件切片","link":"#文件切片","children":[]},{"level":2,"title":"文件上传","slug":"文件上传-1","link":"#文件上传-1","children":[{"level":3,"title":"并发控制","slug":"并发控制","link":"#并发控制","children":[]},{"level":3,"title":"断点续传","slug":"断点续传","link":"#断点续传","children":[]},{"level":3,"title":"上传进度","slug":"上传进度","link":"#上传进度","children":[]}]},{"level":2,"title":"扩展：其他文件上传的方式","slug":"扩展-其他文件上传的方式","link":"#扩展-其他文件上传的方式","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]}],"git":{"createdTime":1681306939000,"updatedTime":1681306939000,"contributors":[{"name":"Eathyn","email":"eathynzakas@gmail.com","commits":1}]},"readingTime":{"minutes":3.96,"words":1189},"filePathRelative":"solution/file_upload/index.md","localizedDate":"2021年10月18日","excerpt":"<h1> 文件上传</h1>\\n<h2> 源码</h2>\\n<p><a href=\\"https://github.com/Eathyn/file-upload-solution\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">文件上传</a></p>\\n<h2> 检测文件类型</h2>\\n<p>input 元素的 accept 属性可以限制用户上传文件的类型。</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>file<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">accept</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>image/*, video/*<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
