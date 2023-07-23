const n=JSON.parse('{"key":"v-63bd3a3c","path":"/cs/dsa/sorting_algorithm/bubble_sort/","title":"Bubble Sort","lang":"zh-CN","frontmatter":{"date":"2023-04-29T00:00:00.000Z","category":"DSA","tag":["sorting","bubble sort"],"description":"Bubble Sort 原理 遍历数组，如果前一位大于后一位，则交换位置，否则不交换位置。 实现 function bubbleSort(arr) { for (let i = 0; i &lt; arr.length; i++) { for (let j = 0; j &lt; arr.length; j++) { if (arr[j] &gt; arr[j + 1]) { [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] } } } }","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/cs/dsa/sorting_algorithm/bubble_sort/"}],["meta",{"property":"og:title","content":"Bubble Sort"}],["meta",{"property":"og:description","content":"Bubble Sort 原理 遍历数组，如果前一位大于后一位，则交换位置，否则不交换位置。 实现 function bubbleSort(arr) { for (let i = 0; i &lt; arr.length; i++) { for (let j = 0; j &lt; arr.length; j++) { if (arr[j] &gt; arr[j + 1]) { [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] } } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eathyn.github.io/blog/blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Bubble Sort"}],["meta",{"property":"article:tag","content":"sorting"}],["meta",{"property":"article:tag","content":"bubble sort"}],["meta",{"property":"article:published_time","content":"2023-04-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Bubble Sort\\",\\"image\\":[\\"https://eathyn.github.io/blog/blog/\\"],\\"datePublished\\":\\"2023-04-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"优化-1","slug":"优化-1","link":"#优化-1","children":[]},{"level":2,"title":"优化-2","slug":"优化-2","link":"#优化-2","children":[]},{"level":2,"title":"优化-3","slug":"优化-3","link":"#优化-3","children":[]},{"level":2,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[{"level":3,"title":"最坏的情况","slug":"最坏的情况","link":"#最坏的情况","children":[]},{"level":3,"title":"最好的情况","slug":"最好的情况","link":"#最好的情况","children":[]}]}],"git":{},"readingTime":{"minutes":2.39,"words":716},"filePathRelative":"cs/dsa/sorting_algorithm/bubble_sort/index.md","localizedDate":"2023年4月29日","excerpt":"<h1> Bubble Sort</h1>\\n<h2> 原理</h2>\\n<p>遍历数组，如果前一位大于后一位，则交换位置，否则不交换位置。</p>\\n<h2> 实现</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">bubbleSort</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">arr</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> arr<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">let</span> j <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> j <span class=\\"token operator\\">&lt;</span> arr<span class=\\"token punctuation\\">.</span>length<span class=\\"token punctuation\\">;</span> j<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">&gt;</span> arr<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token punctuation\\">[</span>arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> arr<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span>arr<span class=\\"token punctuation\\">[</span>j <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> arr<span class=\\"token punctuation\\">[</span>j<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
