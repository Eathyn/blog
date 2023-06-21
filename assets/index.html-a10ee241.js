const n=JSON.parse(`{"key":"v-8aa4f390","path":"/front_end/vue/debounce_throttle_in_vue/","title":"Using debounce and throttle in Vue.js","lang":"zh-CN","frontmatter":{"date":"2022-05-30T00:00:00.000Z","category":"Vue","tag":["basic","debounce and throttle in vue"],"description":"Using debounce and throttle in Vue.js 错误-1：事件处理函数错误 将 debounceInputEvent 作为 input 的事件处理函数，而不是将 debounce 返回的函数作为 input 的事件处理函数。因此 inputEventHandler 无法运行 &lt;template&gt; &lt;div&gt; &lt;input type=\\"text\\" @input=\\"debounceInputEvent\\"&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; import { debounce } from 'lodash' export default { name: 'InputItem', methods: { debounceInputEvent() { debounce(this.inputEventHandler, 500) }, // 无法运行 inputEventHandler() { console.log('run') }, } } &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/front_end/vue/debounce_throttle_in_vue/"}],["meta",{"property":"og:title","content":"Using debounce and throttle in Vue.js"}],["meta",{"property":"og:description","content":"Using debounce and throttle in Vue.js 错误-1：事件处理函数错误 将 debounceInputEvent 作为 input 的事件处理函数，而不是将 debounce 返回的函数作为 input 的事件处理函数。因此 inputEventHandler 无法运行 &lt;template&gt; &lt;div&gt; &lt;input type=\\"text\\" @input=\\"debounceInputEvent\\"&gt; &lt;/div&gt; &lt;/template&gt; &lt;script&gt; import { debounce } from 'lodash' export default { name: 'InputItem', methods: { debounceInputEvent() { debounce(this.inputEventHandler, 500) }, // 无法运行 inputEventHandler() { console.log('run') }, } } &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eathyn.github.io/blog/blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Using debounce and throttle in Vue.js"}],["meta",{"property":"article:tag","content":"basic"}],["meta",{"property":"article:tag","content":"debounce and throttle in vue"}],["meta",{"property":"article:published_time","content":"2022-05-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Using debounce and throttle in Vue.js\\",\\"image\\":[\\"https://eathyn.github.io/blog/blog/\\"],\\"datePublished\\":\\"2022-05-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"错误-1：事件处理函数错误","slug":"错误-1-事件处理函数错误","link":"#错误-1-事件处理函数错误","children":[]},{"level":2,"title":"错误-2：所有实例共享 debounce 返回的函数","slug":"错误-2-所有实例共享-debounce-返回的函数","link":"#错误-2-所有实例共享-debounce-返回的函数","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]}],"git":{},"readingTime":{"minutes":1.27,"words":381},"filePathRelative":"front_end/vue/debounce_throttle_in_vue/index.md","localizedDate":"2022年5月30日","excerpt":"<h1> Using debounce and throttle in Vue.js</h1>\\n<h2> 错误-1：事件处理函数错误</h2>\\n<p>将 <code>debounceInputEvent</code> 作为 <code>input</code> 的事件处理函数，而不是将 <code>debounce</code> 返回的函数作为 <code>input</code> 的事件处理函数。因此 <code>inputEventHandler</code> 无法运行</p>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">@input</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>debounceInputEvent<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>template</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> debounce <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'lodash'</span>\\n\\n<span class=\\"token keyword\\">export</span> <span class=\\"token keyword\\">default</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'InputItem'</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">methods</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">debounceInputEvent</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token function\\">debounce</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>inputEventHandler<span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">500</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token comment\\">// 无法运行</span>\\n    <span class=\\"token function\\">inputEventHandler</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'run'</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
