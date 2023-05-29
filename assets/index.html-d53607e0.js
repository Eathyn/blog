import{_ as a,W as o,X as r,Y as e,Z as n,$ as l,a0 as i,C as s}from"./framework-c8ebc670.js";const c="/blog/assets/adb-env-variable-07cea19b.png",d="/blog/assets/adb-connect-603fca20.png",u="/blog/assets/run-project-38e84a40.png",h={},p=e("h1",{id:"note",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#note","aria-hidden":"true"},"#"),n(" Note")],-1),_=e("h2",{id:"创建项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建项目","aria-hidden":"true"},"#"),n(" 创建项目")],-1),f={href:"https://uniapp.dcloud.net.cn/quickstart-hx.html#%E5%88%9B%E5%BB%BAuni-app",target:"_blank",rel:"noopener noreferrer"},b={href:"https://uniapp.dcloud.net.cn/quickstart-cli.html#install-vue-cli",target:"_blank",rel:"noopener noreferrer"},g={href:"https://uniapp.dcloud.net.cn/quickstart-cli.html#clidiff",target:"_blank",rel:"noopener noreferrer"},m=i('<h2 id="hbuilderx-运行项目" tabindex="-1"><a class="header-anchor" href="#hbuilderx-运行项目" aria-hidden="true">#</a> HBuilderX 运行项目</h2><h3 id="运行到-h5" tabindex="-1"><a class="header-anchor" href="#运行到-h5" aria-hidden="true">#</a> 运行到 H5</h3><h3 id="运行到小程序" tabindex="-1"><a class="header-anchor" href="#运行到小程序" aria-hidden="true">#</a> 运行到小程序</h3><h3 id="运行到安卓" tabindex="-1"><a class="header-anchor" href="#运行到安卓" aria-hidden="true">#</a> 运行到安卓</h3><ul><li>将 HBuilderX 自带的 adb 配置到全局环境 <code>Path</code> 变量中。abd 的路径为 <code>G:/HBuilderX/plugins/launcher/tools/adbs</code>。</li></ul><figure><img src="'+c+'" alt="adb environment variable" tabindex="0" loading="lazy"><figcaption>adb environment variable</figcaption></figure><ul><li>下载安卓模拟器，adb 连接模拟器的端口（不同安卓模拟器的端口各不相同）。命令是 <code>adb connect &lt;host&gt;:&lt;port&gt;</code></li></ul><figure><img src="'+d+'" alt="adb connect" tabindex="0" loading="lazy"><figcaption>adb connect</figcaption></figure><ul><li>安卓模拟器运行 uni-app 项目</li></ul><figure><img src="'+u+'" alt="run project" tabindex="0" loading="lazy"><figcaption>run project</figcaption></figure><h2 id="app-vue" tabindex="-1"><a class="header-anchor" href="#app-vue" aria-hidden="true">#</a> App.vue</h2>',11),x={href:"https://uniapp.dcloud.net.cn/collocation/App.html",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("code",null,"App.vue"),n(" 的作用：")],-1),v=e("ul",null,[e("li",null,"调用应用的生命周期函数"),e("li",null,"全局数据"),e("li",null,"全局样式")],-1),j=e("h2",{id:"uni-scss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uni-scss","aria-hidden":"true"},"#"),n(" uni.scss")],-1),B={href:"https://uniapp.dcloud.net.cn/collocation/uni-scss.html",target:"_blank",rel:"noopener noreferrer"},q=e("ul",null,[e("li",null,"作用：定义一些全局的样式变量，方便在页面中使用，整体控制应用的风格。")],-1),R=e("h2",{id:"pages-json",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pages-json","aria-hidden":"true"},"#"),n(" pages.json")],-1),V={href:"https://uniapp.dcloud.net.cn/collocation/pages.html",target:"_blank",rel:"noopener noreferrer"},A=e("ul",null,[e("li",null,"作用：配置所有页面。")],-1),E=e("h2",{id:"manifest-json",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#manifest-json","aria-hidden":"true"},"#"),n(" manifest.json")],-1),H={href:"https://uniapp.dcloud.net.cn/collocation/manifest.html",target:"_blank",rel:"noopener noreferrer"},N=e("ul",null,[e("li",null,"作用：配置应用。")],-1),X=e("h2",{id:"跨平台",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#跨平台","aria-hidden":"true"},"#"),n(" 跨平台")],-1),y=e("p",null,"Reference:",-1),z={href:"https://uniapp.dcloud.net.cn/tutorial/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://uniapp.dcloud.net.cn/tutorial/compiler.html",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,"uni-app 通过编译器和运行时实现跨平台。",-1),L=e("ul",null,[e("li",null,"编译器：将源代码编译为各个平台支持的特有代码。"),e("li",null,"运行时：？")],-1),G=e("h2",{id:"条件编译",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#条件编译","aria-hidden":"true"},"#"),n(" 条件编译")],-1),P={href:"https://uniapp.dcloud.net.cn/tutorial/compiler.html",target:"_blank",rel:"noopener noreferrer"},S=e("ul",null,[e("li",null,"条件编译：根据注释，将不同代码编译到不同平台。")],-1);function T(W,Y){const t=s("ExternalLinkIcon");return o(),r("div",null,[p,_,e("ul",null,[e("li",null,[e("a",f,[n("HBuilderX"),l(t)])]),e("li",null,[e("a",b,[n("Vue CLI / Vite"),l(t)])]),e("li",null,[e("a",g,[n("区别"),l(t)])])]),m,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",x,[n("App.vue"),l(t)])])]),k,v,j,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",B,[n("uni.scss"),l(t)])])]),q,R,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",V,[n("pages.json"),l(t)])])]),A,E,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",H,[n("manifest.json"),l(t)])])]),N,X,e("blockquote",null,[y,e("ul",null,[e("li",null,[e("a",z,[n("uni-app 组成和跨端原理"),l(t)])]),e("li",null,[e("a",C,[n("什么是编译器"),l(t)])])])]),I,L,G,e("blockquote",null,[e("p",null,[n("Reference: "),e("a",P,[n("条件编译处理多端差异"),l(t)])])]),S])}const $=a(h,[["render",T],["__file","index.html.vue"]]);export{$ as default};