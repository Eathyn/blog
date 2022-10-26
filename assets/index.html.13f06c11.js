import{_ as n,o as s,c as a,a as p}from"./app.0a43b3c6.js";const t={},o=p(`<h1 id="\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488" aria-hidden="true">#</a> \u6307\u9488</h1><h2 id="\u6307\u9488\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u53D8\u91CF" aria-hidden="true">#</a> \u6307\u9488\u53D8\u91CF</h2><ul><li>\u8BA1\u7B97\u673A\u5C06\u5185\u5B58\u5206\u5272\u4E3A\u5B57\u8282</li><li>\u6BCF\u4E2A\u5B57\u8282\u53EF\u4EE5\u5B58\u50A8 8 \u4F4D\u4FE1\u606F</li><li>\u6BCF\u4E2A\u5B57\u8282\u90FD\u6709\u552F\u4E00\u7684\u5730\u5740</li><li>\u53D8\u91CF\u5360\u6709\u7684\u7B2C\u4E00\u4E2A\u5B57\u8282\u7684\u5730\u5740\u4E3A\u8BE5\u53D8\u91CF\u7684\u5730\u5740</li><li>\u6307\u9488\u5C31\u662F\u5185\u5B58\u5730\u5740\uFF0C\u6307\u9488\u53D8\u91CF\u5C31\u662F\u5B58\u50A8\u5185\u5B58\u5730\u5740\u7684\u53D8\u91CF</li></ul><h3 id="\u6307\u9488\u53D8\u91CF\u7684\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u53D8\u91CF\u7684\u58F0\u660E" aria-hidden="true">#</a> \u6307\u9488\u53D8\u91CF\u7684\u58F0\u660E</h3><ul><li>\u6307\u9488\u53D8\u91CF\u524D\u9700\u8981\u52A0 <code>*</code> \u7B26\u53F7</li><li><code>int *p</code> : \u6307\u9488\u53D8\u91CF\u6307\u5411\u7684\u5BF9\u8C61\u7684\u7C7B\u578B\u662F <code>int</code> (\u7528\u672F\u8BED\u5BF9\u8C61\u6765\u4EE3\u66FF\u53D8\u91CF\uFF0C\u662F\u56E0 \u4E3A p \u53EF\u4EE5\u6307\u5411\u4E0D\u5C5E\u4E8E\u53D8\u91CF\u7684\u5185\u5B58\u533A\u57DF)</li><li>\u6307\u9488\u53D8\u91CF\u53EF\u4EE5\u6307\u5411\u53E6\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\uFF0C\u79F0\u4E3A\u6307\u9488\u7684\u6307\u9488</li></ul><h2 id="\u53D6\u5730\u5740\u8FD0\u7B97\u7B26\u548C\u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u53D6\u5730\u5740\u8FD0\u7B97\u7B26\u548C\u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u53D6\u5730\u5740\u8FD0\u7B97\u7B26\u548C\u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26</h2><ul><li><code>&amp;x</code> : \u53D8\u91CF <code>x</code> \u7684\u5185\u5B58\u5730\u5740</li><li><code>*p</code> : \u5730\u5740 <code>p</code> \u6307\u5411\u7684\u5BF9\u8C61\u7684\u5185\u5BB9</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>
  <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u53D6\u5730\u5740\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u53D6\u5730\u5740\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u53D6\u5730\u5740\u8FD0\u7B97\u7B26</h3><h3 id="\u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26</h3><ul><li>\u5982\u679C <code>p</code> \u6307\u5411 <code>i</code>\uFF0C\u5219 <code>*p</code> \u662F <code>i</code> \u7684\u522B\u540D\uFF1B\u6539\u53D8 <code>*p</code> \u7684\u503C\u4F1A\u5F71\u54CD\u5230 <code>i</code></li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>

  <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5728\u6CA1\u6709\u8D4B\u503C\u7684\u6307\u9488\u53D8\u91CF\u4E0A\u4F7F\u7528\u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26\u4F1A\u5BFC\u81F4\u8B66\u544A</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%p\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// wrong</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u58F0\u660E\u6307\u9488\u53D8\u91CF\u548C\u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26\u90FD\u4F7F\u7528\u4E86 <code>*</code> \u7B26\u53F7\uFF0C\u6CE8\u610F\u522B\u6DF7\u6DC6</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span> <span class="token comment">// \u6307\u9488\u53D8\u91CF\u7684\u58F0\u660E</span>
  <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token operator">*</span>p<span class="token punctuation">;</span> <span class="token comment">// \u95F4\u63A5\u5BFB\u5740\u8FD0\u7B97\u7B26</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> q <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>pointer_p <span class="token operator">=</span> <span class="token operator">&amp;</span>p<span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>pointer_q <span class="token operator">=</span> <span class="token operator">&amp;</span>q<span class="token punctuation">;</span>

  <span class="token comment">// *pointer_p : \u53D8\u91CF p \u7684\u522B\u540D</span>
  <span class="token comment">// *pointer_q \u4E2D\u7684 * : \u95F4\u63A5\u53D6\u503C\u8FD0\u7B97\u7B26</span>
  <span class="token operator">*</span>pointer_p <span class="token operator">=</span> <span class="token operator">*</span>pointer_q<span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;p = %d\\n&quot;</span><span class="token punctuation">,</span> p<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;q = %d\\n&quot;</span><span class="token punctuation">,</span> q<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6307\u9488\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u8D4B\u503C" aria-hidden="true">#</a> \u6307\u9488\u8D4B\u503C</h2><ul><li>\u5982\u679C\u6307\u9488\u53D8\u91CF\u7684\u7C7B\u578B\u76F8\u540C\uFF0C\u5219\u53EF\u4EE5\u4E92\u76F8\u8D4B\u503C</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>pointer_x <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>
  <span class="token comment">// \u4E24\u4E2A\u6307\u9488\u53D8\u91CF\u4FDD\u5B58\u7740\u76F8\u540C\u7684\u5185\u5B58\u5730\u5740\uFF0C\u56E0\u6B64\u6307\u5411\u76F8\u540C\u7684\u5BF9\u8C61</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>pointer_y <span class="token operator">=</span> pointer_x<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6307\u9488\u4F5C\u4E3A\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u4F5C\u4E3A\u53C2\u6570" aria-hidden="true">#</a> \u6307\u9488\u4F5C\u4E3A\u53C2\u6570</h2><ul><li>\u4F7F\u7528\u6307\u9488\u89E3\u51B3\u51FD\u6570\u65E0\u6CD5\u4FEE\u6539\u5B9E\u53C2\u53D8\u91CF\u7684\u95EE\u9898</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">exchange_value</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>n1<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> n1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> n2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

  <span class="token function">exchange_value</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>n1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;n1 = %d\\n&quot;</span><span class="token punctuation">,</span> n1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;n2 = %d\\n&quot;</span><span class="token punctuation">,</span> n2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
  
  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">exchange_value</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>n1<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token operator">*</span>n1<span class="token punctuation">;</span>
  <span class="token operator">*</span>n1 <span class="token operator">=</span> <span class="token operator">*</span>n2<span class="token punctuation">;</span>
  <span class="token operator">*</span>n2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u7528-const-\u4FDD\u62A4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u7528-const-\u4FDD\u62A4\u53C2\u6570" aria-hidden="true">#</a> \u7528 const \u4FDD\u62A4\u53C2\u6570</h3><ul><li>\u4F7F\u7528 <code>const</code> \u8868\u793A\u6307\u9488\u53D8\u91CF\u6307\u5411\u7684\u5BF9\u8C61\u7684\u5185\u5BB9\u4E0D\u4F1A\u88AB\u6539\u53D8</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">const_arg</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">int</span> <span class="token operator">*</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// error: Read-only variable is not assignable</span>
  <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6307\u9488\u4F5C\u4E3A\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488\u4F5C\u4E3A\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u6307\u9488\u4F5C\u4E3A\u8FD4\u56DE\u503C</h2><ul><li>function can return a pointer</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>n1<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>n2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  
  <span class="token keyword">int</span> <span class="token operator">*</span>max_pointer <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>a<span class="token punctuation">,</span> <span class="token operator">&amp;</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;max = %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>max_pointer<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>n1<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>n2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">*</span>n1 <span class="token operator">&gt;</span> <span class="token operator">*</span>n2 <span class="token operator">?</span> n1 <span class="token operator">:</span> n2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>Function can return static value.</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">return_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token function">return_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;a = %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span>p<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token operator">*</span><span class="token function">return_pointer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>&amp;arr[i]</code> : \u6570\u7EC4 arr \u7684 i \u4E2A\u5143\u7D20\u7684\u5730\u5740</li></ul><div class="language-c ext-c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;address: %p\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;value: %d\\n&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">&amp;</span>arr<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,33),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","index.html.vue"]]);export{r as default};
