const n=JSON.parse(`{"key":"v-0f17ccc2","path":"/front_end/vue/basic/mvvm/","title":"MVVM","lang":"zh-CN","frontmatter":{"date":"2021-03-20T00:00:00.000Z","category":"Vue","tag":["basic","MVVM"],"description":"MVVM Definition mvvm M : Model 模型 (对应 vue 中的 data) V : View 视图 (对应 vue 中的 template / render function) VM : ViewModel 视图模型 (对应 vue 中的 vue 实例) &lt;!-- View --&gt; &lt;div id=\\"app\\"&gt; &lt;div&gt;message: {{ message }}&lt;/div&gt; &lt;/div&gt; &lt;script&gt; // ViewModel const app = new Vue({ el: '#app', // Model data: { message: 'hello', }, }) &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/front_end/vue/basic/mvvm/"}],["meta",{"property":"og:title","content":"MVVM"}],["meta",{"property":"og:description","content":"MVVM Definition mvvm M : Model 模型 (对应 vue 中的 data) V : View 视图 (对应 vue 中的 template / render function) VM : ViewModel 视图模型 (对应 vue 中的 vue 实例) &lt;!-- View --&gt; &lt;div id=\\"app\\"&gt; &lt;div&gt;message: {{ message }}&lt;/div&gt; &lt;/div&gt; &lt;script&gt; // ViewModel const app = new Vue({ el: '#app', // Model data: { message: 'hello', }, }) &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://eathyn.github.io/blog/blog/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-13T01:52:11.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"MVVM"}],["meta",{"property":"article:tag","content":"basic"}],["meta",{"property":"article:tag","content":"MVVM"}],["meta",{"property":"article:published_time","content":"2021-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-13T01:52:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MVVM\\",\\"image\\":[\\"https://eathyn.github.io/blog/blog/\\"],\\"datePublished\\":\\"2021-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-13T01:52:11.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Definition","slug":"definition","link":"#definition","children":[]},{"level":2,"title":"The Rule of ViewModel","slug":"the-rule-of-viewmodel","link":"#the-rule-of-viewmodel","children":[]}],"git":{"createdTime":1681306939000,"updatedTime":1681350731000,"contributors":[{"name":"Eathyn","email":"eathynzakas@gmail.com","commits":2}]},"readingTime":{"minutes":0.34,"words":101},"filePathRelative":"front_end/vue/basic/mvvm/index.md","localizedDate":"2021年3月20日","excerpt":"<h1> MVVM</h1>\\n<h2> Definition</h2>\\n<figure><figcaption>mvvm</figcaption></figure>\\n<ul>\\n<li>M : Model 模型 (对应 vue 中的 data)</li>\\n<li>V : View 视图 (对应 vue 中的 template / render function)</li>\\n<li>VM : ViewModel 视图模型 (对应 vue 中的 vue 实例)</li>\\n</ul>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token comment\\">&lt;!-- View --&gt;</span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>app<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>message: {{ message }}<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n  <span class=\\"token comment\\">// ViewModel</span>\\n  <span class=\\"token keyword\\">const</span> app <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'#app'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token comment\\">// Model</span>\\n    <span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token literal-property property\\">message</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'hello'</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
