import{_ as o,W as p,X as u,$ as a,a1 as l,Y as n,Z as s,a0 as i,C as c}from"./framework-0d71bc9d.js";const r={},k=i('<h1 id="layout-multi-column" tabindex="-1"><a class="header-anchor" href="#layout-multi-column" aria-hidden="true">#</a> Layout: Multi-Column</h1><h2 id="two-columns-layout" tabindex="-1"><a class="header-anchor" href="#two-columns-layout" aria-hidden="true">#</a> Two Columns Layout</h2><h3 id="flexbox" tabindex="-1"><a class="header-anchor" href="#flexbox" aria-hidden="true">#</a> FlexBox</h3><ul><li><code>flex: 1</code> : 右列自适应</li><li><code>align-items: flex-start</code> : 避免左右列高度一致</li></ul>',4),d=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("left"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container, .left, .right"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #000"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" flex-start"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* 避免左右列高度一致 */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".left"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* 左列等宽 */"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".right"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"flex"),n("span",{class:"token punctuation"},":"),s(" 1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* 右列自适应 */"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"three-columns-layout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#three-columns-layout","aria-hidden":"true"},"#"),s(" Three Columns Layout")],-1),v=n("h3",{id:"flexbox-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flexbox-1","aria-hidden":"true"},"#"),s(" FlexBox")],-1),b=n("ul",null,[n("li",null,"左右两列固定 中间自适应")],-1),g=n("div",{class:"language-html line-numbers-mode","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("left"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("middle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-css line-numbers-mode","data-ext":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container, .left, .right, .middle"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #000"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-between"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"gap"),n("span",{class:"token punctuation"},":"),s(" 0 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".left"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 200px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* 左列等宽 */"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 300px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".middle"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".right"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 250px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"/* 右列等宽 */"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("h2",{id:"refs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#refs","aria-hidden":"true"},"#"),s(" Refs")],-1),y={href:"https://vue3js.cn/interview/css/column_layout.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://csslayout.io/",target:"_blank",rel:"noopener noreferrer"};function q(w,L){const t=c("CodeDemo"),e=c("ExternalLinkIcon");return p(),u("div",null,[k,a(t,{id:"code-demo-21",type:"normal",code:"eJxlj81Kw0AUhV/lMu5K20TdpdUnmc2YTJOBySTMDFophSpI60LcCPUJulB0o6AUxJdxsHkL54do1dWFc+75zr0TVOiSowQNM3YMKSdKHWCUVkITJqjE6BALgF8mpyNt9WFkxf+uZHmxbbcTdVGqlC3qf8O70HcsO3wIJlhgfVTJjMoEdusxqIqzDHbiOB44qyQyZ8JacT22wtRq4ocW4hlTNSenCYw4dUtYE85y0WOaliqoPaWJ1AOIOtCcvZuLK/OyMtdPZrFs7m/NevXxOtvMn6ETtRXuyEA/YZkuEtiL3QUO4KKL5efDpXl88wmsC+qeSWDfL7WMrQ/dDfaJkPe9m/ldMzs365s/iNDjEWj6BUfIo8s="},{default:l(()=>[d,m]),_:1}),h,v,b,a(t,{id:"code-demo-38",type:"normal",code:"eJx1kLFOwzAQhl/lZMRStY0LYjGFJ/HixpfEyHWs2NBWVXeYGHkDNlgYmHiciNfAjklohDqdfP9//3fnPan8WhNGllI9QK6Fczec5LXxQhlsOLnlBmAkaix86C+z0PyvrpWUGk/rjSqr4/G+kinJnQuLzAf4FOaRFUo3FGoKhz033K/qRmLDYGG34GqtJJxRSq+5OQTV/KUkt1TOarFjUGjcBhP3d/fOq2I3i0Y0noGzIsfZCv0G0XQWK6RUpgwMatNQKSwD2r8TKe6YIBslfcXggkYZsgm0n6/t48v321P7/gWTLHoqjLcwuOxMfcbxYb8pC0rPB737gDHkaoA8f4whYYQcfgCNwKov"},{default:l(()=>[g,x]),_:1}),f,n("ul",null,[n("li",null,[n("a",y,[s("Two or Three Columns Layouts"),a(e)])]),n("li",null,[n("a",_,[s("Popular Layouts and Patterns"),a(e)])])])])}const T=o(r,[["render",q],["__file","index.html.vue"]]);export{T as default};
