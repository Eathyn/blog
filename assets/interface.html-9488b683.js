const n=JSON.parse(`{"key":"v-456c98b6","path":"/front_end/typescript/syntax/interface.html","title":"Interface","lang":"zh-CN","frontmatter":{"date":"2023-06-01T00:00:00.000Z","category":"interface","description":"Interface Reason 通过接口（interface）定义对象类型，以便在多个地方使用。 interface Person { name: string age: number } let person: Person = { name: 'Jeff', age: 18, } function log(person: Person) { console.log(person.name) console.log(person.age) } &nbsp;&nbsp;&nbsp;","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/front_end/typescript/syntax/interface.html"}],["meta",{"property":"og:title","content":"Interface"}],["meta",{"property":"og:description","content":"Interface Reason 通过接口（interface）定义对象类型，以便在多个地方使用。 interface Person { name: string age: number } let person: Person = { name: 'Jeff', age: 18, } function log(person: Person) { console.log(person.name) console.log(person.age) } &nbsp;&nbsp;&nbsp;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-02T00:15:33.000Z"}],["meta",{"property":"article:published_time","content":"2023-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-02T00:15:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Interface\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-02T00:15:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Reason","slug":"reason","link":"#reason","children":[]},{"level":2,"title":"Optional Property","slug":"optional-property","link":"#optional-property","children":[]},{"level":2,"title":"Read-Only Property","slug":"read-only-property","link":"#read-only-property","children":[]},{"level":2,"title":"Function Property","slug":"function-property","link":"#function-property","children":[]},{"level":2,"title":"Extend","slug":"extend","link":"#extend","children":[]},{"level":2,"title":"Nest","slug":"nest","link":"#nest","children":[]},{"level":2,"title":"Merge","slug":"merge","link":"#merge","children":[]}],"git":{"createdTime":1685664933000,"updatedTime":1685664933000,"contributors":[{"name":"Eathyn","email":"eathynzakas@gmail.com","commits":1}]},"readingTime":{"minutes":1.17,"words":350},"filePathRelative":"front_end/typescript/syntax/interface.md","localizedDate":"2023年6月1日","excerpt":"<h1> Interface</h1>\\n<h2> Reason</h2>\\n<ul>\\n<li>通过接口（interface）定义对象类型，以便在多个地方使用。</li>\\n</ul>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre class=\\"language-typescript\\"><code><span class=\\"token keyword\\">interface</span> <span class=\\"token class-name\\">Person</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">string</span>\\n  age<span class=\\"token operator\\">:</span> <span class=\\"token builtin\\">number</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">let</span> person<span class=\\"token operator\\">:</span> Person <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span>\\n  name<span class=\\"token operator\\">:</span> <span class=\\"token string\\">'Jeff'</span><span class=\\"token punctuation\\">,</span>\\n  age<span class=\\"token operator\\">:</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token operator\\">:</span> Person<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token builtin\\">console</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>person<span class=\\"token punctuation\\">.</span>age<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"highlight-lines\\"><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br></div><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
