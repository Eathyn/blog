import{_ as l,W as s,X as i,Y as e,Z as n,$ as o,a1 as d,a0 as c,C as a}from"./framework-0d71bc9d.js";const u={},p=e("h1",{id:"启动性能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#启动性能","aria-hidden":"true"},"#"),n(" 启动性能")],-1),_=e("ul",null,[e("li",null,"启动性能：让用户可以更快地打开并看到小程序。"),e("li",null,[n("小程序启动指的是用户打开小程序到首页渲染完成，首页渲染完成的标志是首个页面的 "),e("code",null,"onReady"),n(" 事件被触发。")])],-1),h=e("h2",{id:"代码包体积优化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码包体积优化","aria-hidden":"true"},"#"),n(" 代码包体积优化")],-1),m=e("p",null,"Reference:",-1),f={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start_optimizeA.html",target:"_blank",rel:"noopener noreferrer"},k=e("ul",null,[e("li",null,"拆分主包、分包预下载、分包异步化。"),e("li",null,"如果自定义组件和插件只是在少数页面中使用，则应该在页面的 json 文件中配置，而不是在 app.json 中配置。在 app.json 中配置的自定义组件和插件会随着主包一起下载和注入 JS 代码。"),e("li",null,"项目中的多媒体文件会占用包体积，最后通过 URL 的方式引入。"),e("li",null,"利用打包工具的 tree-shaking 特性去除无依赖代码。")],-1),v=e("h2",{id:"代码注入优化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#代码注入优化","aria-hidden":"true"},"#"),n(" 代码注入优化")],-1),g=e("h3",{id:"按需注入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#按需注入","aria-hidden":"true"},"#"),n(" 按需注入")],-1),q=e("p",null,"Reference:",-1),b={href:"https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/start_optimizeB.html#_1-%E4%BD%BF%E7%94%A8%E6%8C%89%E9%9C%80%E6%B3%A8%E5%85%A5",target:"_blank",rel:"noopener noreferrer"},x={href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#lazyCodeLoading",target:"_blank",rel:"noopener noreferrer"},C=c(`<ul><li><p>默认情况下，未被访问的页面和未使用的组件会随着启动页面的开始而注入。使用按需注入可以避免不必要的代码注入。</p></li><li><p>在 <code>app.json</code> 中配置 <code>&quot;lazyCodeLoading&quot;: &quot;requiredComponents&quot;</code>。</p></li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;lazyCodeLoading&quot;</span><span class="token operator">:</span> <span class="token string">&quot;requiredComponents&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function E(L,j){const t=a("ExternalLinkIcon"),r=a("RouterLink");return s(),i("div",null,[p,_,h,e("blockquote",null,[m,e("ul",null,[e("li",null,[e("a",f,[n("代码包体积优化"),o(t)])]),e("li",null,[o(r,{to:"/front_end/mini_program/subpackage/"},{default:d(()=>[n("分包")]),_:1})])])]),k,v,g,e("blockquote",null,[q,e("ul",null,[e("li",null,[e("a",b,[n("按需注入"),o(t)])]),e("li",null,[e("a",x,[n("配置"),o(t)])])])]),C])}const w=l(u,[["render",E],["__file","start.html.vue"]]);export{w as default};
