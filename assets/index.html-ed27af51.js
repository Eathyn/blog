const e=JSON.parse('{"key":"v-8ce66fcc","path":"/solution/waterfall/","title":"瀑布流","lang":"zh-CN","frontmatter":{"date":"2021-10-29T00:00:00.000Z","category":"solution","tag":"瀑布流","description":"瀑布流 源码 瀑布流 思路 将新元素放到高度最小的列的下方。 首页元素采用并行渲染，让首屏渲染时间达到最小。非首屏元素采用串行渲染，确保元素的位置正确。 代码解析 [1] 使用 watch 监听父元素传递过来的瀑布流数据 data。[2] 如果数据发生改变，则调用 waterfall 函数。","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/solution/waterfall/"}],["meta",{"property":"og:title","content":"瀑布流"}],["meta",{"property":"og:description","content":"瀑布流 源码 瀑布流 思路 将新元素放到高度最小的列的下方。 首页元素采用并行渲染，让首屏渲染时间达到最小。非首屏元素采用串行渲染，确保元素的位置正确。 代码解析 [1] 使用 watch 监听父元素传递过来的瀑布流数据 data。[2] 如果数据发生改变，则调用 waterfall 函数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"瀑布流"}],["meta",{"property":"article:published_time","content":"2021-10-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"瀑布流\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"源码","slug":"源码","link":"#源码","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"代码解析","slug":"代码解析","link":"#代码解析","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]}],"git":{},"readingTime":{"minutes":2.01,"words":604},"filePathRelative":"solution/waterfall/index.md","localizedDate":"2021年10月29日","excerpt":"<h1> 瀑布流</h1>\\n<h2> 源码</h2>\\n<p><a href=\\"https://github.com/Eathyn/waterfall-vue-solution\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">瀑布流</a></p>\\n<h2> 思路</h2>\\n<ul>\\n<li>将新元素放到高度最小的列的下方。</li>\\n<li>首页元素采用并行渲染，让首屏渲染时间达到最小。非首屏元素采用串行渲染，确保元素的位置正确。</li>\\n</ul>\\n<h2> 代码解析</h2>\\n<p>[1] 使用 watch 监听父元素传递过来的瀑布流数据 <code>data</code>。[2] 如果数据发生改变，则调用 <code>waterfall</code> 函数。</p>","autoDesc":true}');export{e as data};