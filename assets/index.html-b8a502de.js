import{_ as s,W as e,X as o,Y as n,Z as i,$ as t,a0 as c,C as l}from"./framework-c8ebc670.js";const p="/blog/assets/variables_are_properties_of_lexical_record-146aef32.png",r="/blog/assets/access_outer_variables_of_lexical_environment-80e911a1.png",u="/blog/assets/function_declaration-8930bb7f.png",d="/blog/assets/variable_declaration-d9ba13b1.png",k="/blog/assets/nested_functions-e3194de1.png",v="/blog/assets/browser_optimize_garbage_collection-f7cd81d3.png",m={},b=c('<h1 id="lexical-environment" tabindex="-1"><a class="header-anchor" href="#lexical-environment" aria-hidden="true">#</a> Lexical Environment</h1><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><ul><li>块级作用域、作用域和全局作用域都有一个叫做词法环境 (lexical environment) 的隐藏对象</li><li>词法环境由环境记录 (environment record) 和指向外部词法环境的引用组成</li><li>作用域中的本地变量 (local variables) 和 <code>this</code> 都是环境记录的属性</li></ul><figure><img src="'+p+'" alt="variables_are_properties_of_lexical_record" tabindex="0" loading="lazy"><figcaption>variables_are_properties_of_lexical_record</figcaption></figure><ul><li>词法环境只存在于规范中，引入这个概念是为了描述作用域是如何工作的</li></ul><h2 id="访问外部词法环境的变量" tabindex="-1"><a class="header-anchor" href="#访问外部词法环境的变量" aria-hidden="true">#</a> 访问外部词法环境的变量</h2><ul><li>函数 <code>say</code> 产生了一个词法环境，最外层的脚本也产生了一个全局词法环境</li><li>例子：<code>say</code> 在执行时可以在它的词法环境中获取 <code>name</code>，但无法获取 <code>phrase</code>。因此通过指向外部词法环境的引用寻找 <code>phrase</code>，最终在全局词法环境中找到</li></ul><figure><img src="'+r+'" alt="access_outer_variables_of_lexical_environment" tabindex="0" loading="lazy"><figcaption>access_outer_variables_of_lexical_environment</figcaption></figure><h2 id="函数声明-vs-变量声明" tabindex="-1"><a class="header-anchor" href="#函数声明-vs-变量声明" aria-hidden="true">#</a> 函数声明 vs 变量声明</h2><ul><li>当词法环境创建后，通过函数声明的函数立刻出现在环境记录中，因此函数调用可以出现在函数的声明之前</li></ul><figure><img src="'+u+'" alt="function declaration" tabindex="0" loading="lazy"><figcaption>function declaration</figcaption></figure><ul><li>当词法环境创建后，变量的状态为 <code>uninitialized</code>，此时访问该变量会报错。当使用 <code>let</code> 或 <code>const</code> 声明变量后，变量的初始值变为 <code>undefined</code></li></ul><figure><img src="'+d+`" alt="variable declaration" tabindex="0" loading="lazy"><figcaption>variable declaration</figcaption></figure><h2 id="嵌套函数" tabindex="-1"><a class="header-anchor" href="#嵌套函数" aria-hidden="true">#</a> 嵌套函数</h2><ul><li>当函数被调用时会产生一个新的词法环境，每个词法环境包含的本地变量是独立的，不会相互影响。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    count<span class="token operator">++</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> counter1 <span class="token operator">=</span> <span class="token function">makeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 产生词法环境-a</span>
<span class="token keyword">const</span> counter2 <span class="token operator">=</span> <span class="token function">makeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 产生词法环境-b</span>

<span class="token function">counter1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token function">counter1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 2</span>

<span class="token function">counter2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>函数调用时会通过 <code>[[Environment]]</code> 属性定位到定义该函数的词法环境</li><li>例子：当 <code>counter</code> 被调用时，会通过 <code>[[Environment]]</code> 属性定位到它的词法环境，然后执行里面的代码</li></ul><figure><img src="`+k+`" alt="nested functions" tabindex="0" loading="lazy"><figcaption>nested functions</figcaption></figure><h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2><ul><li>定义：函数 + 该函数外层的词法环境</li><li>作用：封装变量，不对外暴露</li><li>例子：<code>inner</code> 可以访问 <code>outer</code> 的 <code>a</code> 变量</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> innerFn <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">innerFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在 JavaScript 中，所有函数都是闭包。</li></ul><h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收" aria-hidden="true">#</a> 垃圾回收</h2><h3 id="闭包阻止垃圾回收" tabindex="-1"><a class="header-anchor" href="#闭包阻止垃圾回收" aria-hidden="true">#</a> 闭包阻止垃圾回收</h3><ul><li>由于 <code>inner</code> 指向外部词法环境的引用是 <code>outer</code> 函数词法环境，<code>outer</code> 的变量可能会被 <code>inner</code> 使用到，所以不会被垃圾回收。这样容易造成内存泄露</li><li>当设置 <code>inner = null</code> 时， <code>inner</code> 和 <code>outer</code> 都会被清理</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> innerFn <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">innerFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

innerFn <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器优化闭包阻止垃圾回收" tabindex="-1"><a class="header-anchor" href="#浏览器优化闭包阻止垃圾回收" aria-hidden="true">#</a> 浏览器优化闭包阻止垃圾回收</h3><ul><li>针对上述闭包导致内存泄露的问题，浏览器进行了优化，让所有词法环境占用的内存尽可能缩小。具体操作是如果外部词法环境的变量会被内部的词法环境所使用，那么该变量不会被垃圾回收；反之则会被垃圾回收</li><li>例子 : <code>inner</code> 只需要使用到 <code>outer</code> 的变量 <code>a</code>，因此变量 <code>a</code> 不会被垃圾回收，变量 <code>b</code> 会被垃圾回收。可以通过 debugger 验证</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">2</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">inner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token keyword">debugger</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> innerFn <span class="token operator">=</span> <span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">innerFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+v+'" alt="browser will optimize garbage collection" tabindex="0" loading="lazy"><figcaption>browser will optimize garbage collection</figcaption></figure><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>',31),f={href:"https://javascript.info/closure",target:"_blank",rel:"noopener noreferrer"};function g(h,_){const a=l("ExternalLinkIcon");return e(),o("div",null,[b,n("ul",null,[n("li",null,[n("a",f,[i("Variable Scope and Closure"),t(a)])])])])}const y=s(m,[["render",g],["__file","index.html.vue"]]);export{y as default};