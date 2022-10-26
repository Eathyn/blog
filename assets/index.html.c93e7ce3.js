import{_ as i,r as o,o as u,c as r,b as n,d as t,w as p,a,e as s}from"./app.0a43b3c6.js";const k="/blog/assets/static.7864279d.png",d="/blog/assets/relative.fe5d8ffd.png",h="/blog/assets/absolute.7ba2bb94.png",g="/blog/assets/fixed.6eaea6ea.png",_="/blog/assets/sticky.46487545.gif",m={},f=a(`<h1 id="positioning" tabindex="-1"><a class="header-anchor" href="#positioning" aria-hidden="true">#</a> Positioning</h1><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2><ul><li>The element is positioned according to the normal flow of the document.</li><li>The <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> and <code>z-index</code> properties have no effect.</li><li>This is the default value.</li></ul><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> static<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> <span class="token comment">/* not working */</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+k+'" alt="static"></p><h2 id="relative" tabindex="-1"><a class="header-anchor" href="#relative" aria-hidden="true">#</a> relative</h2>',6),x=a("<li>The element is positioned according to the normal flow of the document.</li><li>The element is offset relative to itself on the values of <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</li><li>The offset does not affect the position of other elements.</li><li>The element space still be occupied.</li>",4),b={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position#values",target:"_blank",rel:"noopener noreferrer"},v=s("Skip"),y=s(" : This value creates a new stacking context when the value of z-index is not "),w=n("code",null,"auto",-1),S=s("."),T=a(`<div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+d+'" alt="relative"></p><h2 id="absolute" tabindex="-1"><a class="header-anchor" href="#absolute" aria-hidden="true">#</a> absolute</h2>',3),C=n("li",null,"The element is removed from the normal document flow.",-1),z=n("li",null,"The element's original space is removed.",-1),N=n("li",null,[s("The element is positioned to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial containing block ("),n("strong",null,"tips"),s(": the initial containing block is the "),n("code",null,"html"),s(" element).")],-1),q={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block",target:"_blank",rel:"noopener noreferrer"},B=s("Skip"),G=s(": Containing Block."),I=a(`<div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+h+'" alt="absolute"></p><h2 id="fixed" tabindex="-1"><a class="header-anchor" href="#fixed" aria-hidden="true">#</a> fixed</h2>',3),U=n("li",null,"The element is removed from the normal document flow.",-1),V=n("li",null,"The element's original space is removed.",-1),W=s("The element is positioned relative to the initial containing block established by the viewport. "),E={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position#values",target:"_blank",rel:"noopener noreferrer"},L=s("Skip"),P=s(": except when one of its ancestors has a transform, perspective, or filter property set to something other than none (see the CSS Transforms Spec), or the will-change property is set to transform, in which case that ancestor behaves as the containing block."),D=a(`<div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">.item</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.top</span> <span class="token punctuation">{</span>
	<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
	<span class="token property">top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><img src="`+g+'" alt="fixed"></p><h2 id="sticky" tabindex="-1"><a class="header-anchor" href="#sticky" aria-hidden="true">#</a> sticky</h2><ul><li>The element is acting like static element before reaching the position.</li><li>The element is acting like fixed element after reaching the position.</li><li>Commonly using this feature to stick navigation bar.</li></ul>',4),M=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("container"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("top"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("bottom"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),R=n("div",{class:"language-css ext-css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".container"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 600px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #000"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" scroll"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".top"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 800px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" darkred"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".bottom"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 800px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" royalblue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token selector"},".item"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" lightpink"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" sticky"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 50px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),j=n("p",null,[n("img",{src:_,alt:"sticky"})],-1),A=n("h2",{id:"refs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#refs","aria-hidden":"true"},"#"),s(" Refs")],-1),F={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/position",target:"_blank",rel:"noopener noreferrer"},H=s("MDN Positioning");function J(K,O){const e=o("ExternalLinkIcon"),c=o("CodeGroupItem"),l=o("CodeGroup");return u(),r("div",null,[f,n("ul",null,[x,n("li",null,[n("a",b,[v,t(e)]),y,w,S])]),T,n("ul",null,[C,z,N,n("li",null,[n("a",q,[B,t(e)]),G])]),I,n("ul",null,[U,V,n("li",null,[W,n("a",E,[L,t(e)]),P])]),D,t(l,null,{default:p(()=>[t(c,{title:"index.html"},{default:p(()=>[M]),_:1}),t(c,{title:"index.css"},{default:p(()=>[R]),_:1})]),_:1}),j,A,n("ul",null,[n("li",null,[n("a",F,[H,t(e)])])])])}const X=i(m,[["render",J],["__file","index.html.vue"]]);export{X as default};
