const n=JSON.parse('{"key":"v-82ad93ea","path":"/front_end/vue/basic/watchers/","title":"Watchers","lang":"zh-CN","frontmatter":{"date":"2021-05-13T00:00:00.000Z","category":"Vue","tag":"watch","description":"Watchers Basic Example &lt;script setup&gt; import { ref, watch } from \'vue\' const count = ref(0) watch(count, (newVal, oldVal) =&gt; { console.log(`new: ${newVal} - old: ${oldVal}`) }) function increment() { count.value++ } &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/front_end/vue/basic/watchers/"}],["meta",{"property":"og:title","content":"Watchers"}],["meta",{"property":"og:description","content":"Watchers Basic Example &lt;script setup&gt; import { ref, watch } from \'vue\' const count = ref(0) watch(count, (newVal, oldVal) =&gt; { console.log(`new: ${newVal} - old: ${oldVal}`) }) function increment() { count.value++ } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"watch"}],["meta",{"property":"article:published_time","content":"2021-05-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Watchers\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic Example","slug":"basic-example","link":"#basic-example","children":[]},{"level":2,"title":"Watch Source Types","slug":"watch-source-types","link":"#watch-source-types","children":[]},{"level":2,"title":"Deep Watchers","slug":"deep-watchers","link":"#deep-watchers","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]}],"git":{},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"front_end/vue/basic/watchers/index.md","localizedDate":"2021年5月13日","excerpt":"<h1> Watchers</h1>\\n<h2> Basic Example</h2>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> ref<span class=\\"token punctuation\\">,</span> watch <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\'vue\'</span>\\n\\n<span class=\\"token keyword\\">const</span> count <span class=\\"token operator\\">=</span> <span class=\\"token function\\">ref</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token function\\">watch</span><span class=\\"token punctuation\\">(</span>count<span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">newVal<span class=\\"token punctuation\\">,</span> oldVal</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">`</span><span class=\\"token string\\">new: </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>newVal<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token string\\"> - old: </span><span class=\\"token interpolation\\"><span class=\\"token interpolation-punctuation punctuation\\">${</span>oldVal<span class=\\"token interpolation-punctuation punctuation\\">}</span></span><span class=\\"token template-punctuation string\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">increment</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  count<span class=\\"token punctuation\\">.</span>value<span class=\\"token operator\\">++</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};