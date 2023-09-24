const e=JSON.parse('{"key":"v-0a1f30c5","path":"/front_end/typescript/syntax/type-assertion.html","title":"Type Assertion","lang":"zh-CN","frontmatter":{"date":"2023-05-30T00:00:00.000Z","category":"TypeScript","description":"Type Assertion 定义 Reference: TypeScript Roadmap 开发者可能比 TypeScript 编译器更清楚某个值的类型（例如编译器推断出的值类型是 any，但开发者清楚值类型应该是 string），那么可以使用类型断言（type assertion）告诉编译器正确的值类型。 例子如下，编译器推断出 JSON.parse 返回的值类型是 any，但是开发者知道 rawData 经过 JSON.parse 转换后的值类型应该是 string[]，那么就可以使用断言告诉 TypeScript 编译器正确的值类型。","head":[["meta",{"property":"og:url","content":"https://eathyn.github.io/blog/blog/front_end/typescript/syntax/type-assertion.html"}],["meta",{"property":"og:title","content":"Type Assertion"}],["meta",{"property":"og:description","content":"Type Assertion 定义 Reference: TypeScript Roadmap 开发者可能比 TypeScript 编译器更清楚某个值的类型（例如编译器推断出的值类型是 any，但开发者清楚值类型应该是 string），那么可以使用类型断言（type assertion）告诉编译器正确的值类型。 例子如下，编译器推断出 JSON.parse 返回的值类型是 any，但是开发者知道 rawData 经过 JSON.parse 转换后的值类型应该是 string[]，那么就可以使用断言告诉 TypeScript 编译器正确的值类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2023-05-30T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Type Assertion\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-30T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":2,"title":"as const","slug":"as-const","link":"#as-const","children":[]},{"level":2,"title":"as [type]","slug":"as-type","link":"#as-type","children":[]},{"level":2,"title":"as any","slug":"as-any","link":"#as-any","children":[]},{"level":2,"title":"non-null assertion","slug":"non-null-assertion","link":"#non-null-assertion","children":[]}],"git":{},"readingTime":{"minutes":1.44,"words":431},"filePathRelative":"front_end/typescript/syntax/type-assertion.md","localizedDate":"2023年5月30日","excerpt":"<h1> Type Assertion</h1>\\n<h2> 定义</h2>\\n<blockquote>\\n<p>Reference: <a href=\\"https://roadmap.sh/typescript\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">TypeScript Roadmap</a></p>\\n</blockquote>\\n<ul>\\n<li>\\n<p>开发者可能比 TypeScript 编译器更清楚某个值的类型（例如编译器推断出的值类型是 <code>any</code>，但开发者清楚值类型应该是 <code>string</code>），那么可以使用类型断言（type assertion）告诉编译器正确的值类型。</p>\\n</li>\\n<li>\\n<p>例子如下，编译器推断出 <code>JSON.parse</code> 返回的值类型是 <code>any</code>，但是开发者知道 <code>rawData</code> 经过 <code>JSON.parse</code> 转换后的值类型应该是 <code>string[]</code>，那么就可以使用断言告诉 TypeScript 编译器正确的值类型。</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};