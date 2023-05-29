const e=JSON.parse(`{"key":"v-f13cedc0","path":"/front_end/vue/basic/typescript/ts_with_composition_api/","title":"TypeScript with Composition API","lang":"zh-CN","frontmatter":{"date":"2021-05-13T00:00:00.000Z","category":["Vue","TypeScript"],"tag":"TypeScript in Vue","description":"TypeScript with Composition API Typing Component Props Using &lt;script setup&gt; When using &lt;script setup&gt;, the defineProps() macro supports inferring the props types based on its argument. &lt;script setup lang=\\"ts\\"&gt; const props = defineProps({ name: { type: String, required: true, }, age: Number, }) // type of 'name': string const name = props.name // type of 'age': number | undefined const age = props.age &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/front_end/vue/basic/typescript/ts_with_composition_api/"}],["meta",{"property":"og:title","content":"TypeScript with Composition API"}],["meta",{"property":"og:description","content":"TypeScript with Composition API Typing Component Props Using &lt;script setup&gt; When using &lt;script setup&gt;, the defineProps() macro supports inferring the props types based on its argument. &lt;script setup lang=\\"ts\\"&gt; const props = defineProps({ name: { type: String, required: true, }, age: Number, }) // type of 'name': string const name = props.name // type of 'age': number | undefined const age = props.age &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-12T13:42:19.000Z"}],["meta",{"property":"article:tag","content":"TypeScript in Vue"}],["meta",{"property":"article:published_time","content":"2021-05-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-12T13:42:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TypeScript with Composition API\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-05-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-12T13:42:19.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Typing Component Props","slug":"typing-component-props","link":"#typing-component-props","children":[{"level":3,"title":"Using <script setup>","slug":"using-script-setup","link":"#using-script-setup","children":[{"level":4,"title":"Syntax Limitations","slug":"syntax-limitations","link":"#syntax-limitations","children":[]},{"level":4,"title":"Props Default Values","slug":"props-default-values","link":"#props-default-values","children":[]}]},{"level":3,"title":"Without <script setup>","slug":"without-script-setup","link":"#without-script-setup","children":[]}]},{"level":2,"title":"Typing Component Emits","slug":"typing-component-emits","link":"#typing-component-emits","children":[]},{"level":2,"title":"Typing ref()","slug":"typing-ref","link":"#typing-ref","children":[]},{"level":2,"title":"Typing reactive()","slug":"typing-reactive","link":"#typing-reactive","children":[]},{"level":2,"title":"Typing computed()","slug":"typing-computed","link":"#typing-computed","children":[]},{"level":2,"title":"Typing Event Handlers","slug":"typing-event-handlers","link":"#typing-event-handlers","children":[]},{"level":2,"title":"Typing Provide / Inject","slug":"typing-provide-inject","link":"#typing-provide-inject","children":[]},{"level":2,"title":"Typing Template Refs","slug":"typing-template-refs","link":"#typing-template-refs","children":[]},{"level":2,"title":"Typing Component Template Refs","slug":"typing-component-template-refs","link":"#typing-component-template-refs","children":[]},{"level":2,"title":"Refs","slug":"refs","link":"#refs","children":[]}],"git":{"createdTime":1681306939000,"updatedTime":1681306939000,"contributors":[{"name":"Eathyn","email":"eathynzakas@gmail.com","commits":1}]},"readingTime":{"minutes":4.01,"words":1202},"filePathRelative":"front_end/vue/basic/typescript/ts_with_composition_api/index.md","localizedDate":"2021年5月13日","excerpt":"<h1> TypeScript with Composition API</h1>\\n<h2> Typing Component Props</h2>\\n<h3> Using <code>&lt;script setup&gt;</code></h3>\\n<ul>\\n<li>When using <code>&lt;script setup&gt;</code>, the <code>defineProps()</code> macro supports inferring the props types based on its argument.</li>\\n</ul>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">setup</span> <span class=\\"token attr-name\\">lang</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>ts<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n<span class=\\"token keyword\\">const</span> props <span class=\\"token operator\\">=</span> <span class=\\"token function\\">defineProps</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">type</span><span class=\\"token operator\\">:</span> String<span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token literal-property property\\">required</span><span class=\\"token operator\\">:</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span> Number<span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">// type of 'name': string</span>\\n<span class=\\"token keyword\\">const</span> name <span class=\\"token operator\\">=</span> props<span class=\\"token punctuation\\">.</span>name\\n\\n<span class=\\"token comment\\">// type of 'age': number | undefined</span>\\n<span class=\\"token keyword\\">const</span> age <span class=\\"token operator\\">=</span> props<span class=\\"token punctuation\\">.</span>age\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};