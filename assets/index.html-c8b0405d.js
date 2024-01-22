import{_ as d,W as p,X as h,Y as n,$ as s,a1 as a,Z as e,C as o}from"./framework-0d71bc9d.js";const k="/blog/assets/runtime_chunk_effect-2a297751.png",m={},_=n("h1",{id:"runtime-chunk",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#runtime-chunk","aria-hidden":"true"},"#"),e(" Runtime Chunk")],-1),b=n("p",null,"Reference",-1),v={href:"https://webpack.js.org/configuration/optimization/#optimizationruntimechunk",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"role",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#role","aria-hidden":"true"},"#"),e(" Role")],-1),f=n("ul",null,[n("li",null,[n("code",null,"runtimeChunk"),e(" 会添加一个包含每个文件的运行时（runtime）的 chunk。使用 runtime chunk 之后有利于游览器的缓存，因为一些代码改动只会影响 runtime chunk，不会影响 main chunk。")])],-1),x=n("h2",{id:"example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#example","aria-hidden":"true"},"#"),e(" Example")],-1),j=n("code",null,"runtimeChunk",-1),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[e("module"),n("span",{class:"token punctuation"},"."),e("exports "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token literal-property property"},"optimization"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token literal-property property"},"runtimeChunk"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),e(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./module_a.js'"),n("span",{class:"token punctuation"},")"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./module_b.js'"),n("span",{class:"token punctuation"},")"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// before"),e(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hello'"),n("span",{class:"token punctuation"},")"),e(`

`),n("span",{class:"token comment"},"// after"),e(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'hi'"),n("span",{class:"token punctuation"},")"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("figure",null,[n("img",{src:k,alt:"runtime chunk 的影响",tabindex:"0",loading:"lazy"}),n("figcaption",null,"runtime chunk 的影响")],-1);function A(E,L){const c=o("RouterLink"),u=o("ExternalLinkIcon"),r=o("CodeTabs");return p(),h("div",null,[_,n("blockquote",null,[b,n("ul",null,[n("li",null,[s(c,{to:"/front_end/bundler/webpack/hash/#non-initial-chunk-affects-initial-chunk"},{default:a(()=>[e("my blog: non-initial chunk affects initial chunk")]),_:1})]),n("li",null,[n("a",v,[e("docs: runtime chunk"),s(u)])])])]),g,f,x,n("ul",null,[n("li",null,[e("根据"),s(c,{to:"/front_end/bundler/webpack/hash/#non-initial-chunk-affects-initial-chunk"},{default:a(()=>[e("博客")]),_:1}),e("可知，non-initial chunk 的改变会影响 initial chunk。设置 "),j,e(" 之后，non-initial chunk 的改变会影响 runtime chunk，而不会影响 initial chunk。")])]),s(r,{id:"40",data:[{title:"webpack.config.js"},{title:"entry_a.js"},{title:"module_a.js"},{title:"module_b.js"}]},{tab0:a(({title:t,value:i,isActive:l})=>[y]),tab1:a(({title:t,value:i,isActive:l})=>[C]),tab2:a(({title:t,value:i,isActive:l})=>[w]),tab3:a(({title:t,value:i,isActive:l})=>[R]),_:1},8,["data"]),z])}const N=d(m,[["render",A],["__file","index.html.vue"]]);export{N as default};
