const n=JSON.parse('{"key":"v-99a63f6a","path":"/solution/virtual_scrolling/","title":"虚拟滚动","lang":"zh-CN","frontmatter":{"date":"2021-09-26T00:00:00.000Z","category":"solution","tag":"虚拟滚动","description":"虚拟滚动 原因 一次性渲染大量 DOM 操作时，浏览器花费太多时间渲染 DOM，导致白屏甚至无响应。 实现原理 不要一次性渲染所有 DOM，只渲染当前屏幕里显示的元素的 DOM。那么关键就是确定要显示的元素的开始索引和结束索引。 通过 scroll 事件获取 scrollTop。通过 scrollTop 计算可视区的开始索引（start）和结束索引（end）。 // 滚动事件处理函数 function scrollEventHandler() { // 当前滚动位置 let scrollTop = this.$refs.list.scrollTop // 此时的开始索引 this.start = this.getStartIndex(scrollTop) // 此时的结束索引 this.end = this.start + this.visibleCount }","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/solution/virtual_scrolling/"}],["meta",{"property":"og:title","content":"虚拟滚动"}],["meta",{"property":"og:description","content":"虚拟滚动 原因 一次性渲染大量 DOM 操作时，浏览器花费太多时间渲染 DOM，导致白屏甚至无响应。 实现原理 不要一次性渲染所有 DOM，只渲染当前屏幕里显示的元素的 DOM。那么关键就是确定要显示的元素的开始索引和结束索引。 通过 scroll 事件获取 scrollTop。通过 scrollTop 计算可视区的开始索引（start）和结束索引（end）。 // 滚动事件处理函数 function scrollEventHandler() { // 当前滚动位置 let scrollTop = this.$refs.list.scrollTop // 此时的开始索引 this.start = this.getStartIndex(scrollTop) // 此时的结束索引 this.end = this.start + this.visibleCount }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eathyn.github.io/blog/blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"虚拟滚动"}],["meta",{"property":"article:tag","content":"虚拟滚动"}],["meta",{"property":"article:published_time","content":"2021-09-26T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟滚动\\",\\"image\\":[\\"https://eathyn.github.io/blog/blog/\\"],\\"datePublished\\":\\"2021-09-26T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"原因","slug":"原因","link":"#原因","children":[]},{"level":2,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":2,"title":"优化-1","slug":"优化-1","link":"#优化-1","children":[]},{"level":2,"title":"优化-2","slug":"优化-2","link":"#优化-2","children":[]},{"level":2,"title":"完整代码地址","slug":"完整代码地址","link":"#完整代码地址","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]}],"git":{},"readingTime":{"minutes":3.52,"words":1056},"filePathRelative":"solution/virtual_scrolling/index.md","localizedDate":"2021年9月26日","excerpt":"<h1> 虚拟滚动</h1>\\n<h2> 原因</h2>\\n<p>一次性渲染大量 DOM 操作时，浏览器花费太多时间渲染 DOM，导致白屏甚至无响应。</p>\\n<h2> 实现原理</h2>\\n<p>不要一次性渲染所有 DOM，只渲染当前屏幕里显示的元素的 DOM。那么关键就是确定要显示的元素的开始索引和结束索引。</p>\\n<p>通过 <code>scroll</code> 事件获取 <code>scrollTop</code>。通过 <code>scrollTop</code> 计算可视区的开始索引（<code>start</code>）和结束索引（<code>end</code>）。</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// 滚动事件处理函数</span>\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">scrollEventHandler</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token comment\\">// 当前滚动位置</span>\\n  <span class=\\"token keyword\\">let</span> scrollTop <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>$refs<span class=\\"token punctuation\\">.</span>list<span class=\\"token punctuation\\">.</span>scrollTop\\n  <span class=\\"token comment\\">// 此时的开始索引</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>start <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getStartIndex</span><span class=\\"token punctuation\\">(</span>scrollTop<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token comment\\">// 此时的结束索引</span>\\n  <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>end <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>start <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>visibleCount\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};