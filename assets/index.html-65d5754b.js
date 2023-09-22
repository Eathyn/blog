import{_ as t,W as o,X as i,Y as n,Z as s,$ as p,a0 as e,C as l}from"./framework-0d71bc9d.js";const c={},r=n("h1",{id:"image",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#image","aria-hidden":"true"},"#"),s(" Image")],-1),u=n("h2",{id:"handle-images",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#handle-images","aria-hidden":"true"},"#"),s(" Handle Images")],-1),d=n("p",null,"Reference",-1),k={href:"https://yk2012.github.io/sgg_webpack5/base/image.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://stackoverflow.com/a/65139595/9863318",target:"_blank",rel:"noopener noreferrer"},m=e(`<ul><li><code>type</code> 设置为 <code>asset</code> 即可处理图片资源。</li><li><code>parser.dataUrlCondition.maxSize</code>：小于 10kB 的图片被 Base64 处理，打包到输出文件中，这样可以减少 HTTP 的请求数量。</li><li><code>generator.filename</code>：大于 10kB 的图片会被打包到单独的 image 文件夹中。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|jpeg|gif|webp)$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;asset&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">dataUrlCondition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 小于 10kB 的图片会被 Base64 处理</span>
            <span class="token literal-property property">maxSize</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">generator</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// 将图片打包到 image 文件夹</span>
          <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;image/[hash][ext][query]&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compress-images" tabindex="-1"><a class="header-anchor" href="#compress-images" aria-hidden="true">#</a> Compress Images</h2>`,3),b=n("p",null,"Reference",-1),g={href:"https://webpack.js.org/plugins/image-minimizer-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"imagemin-lossless",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#imagemin-lossless","aria-hidden":"true"},"#"),s(" imagemin - lossless")],-1),h={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),_={href:"https://github.com/imagemin/imagemin/issues/385",target:"_blank",rel:"noopener noreferrer"},x=e(`<ul><li>install packages:</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev image-minimizer-webpack-plugin imagemin imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>configuration:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> ImageMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;image-minimizer-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">ImageMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">implementation</span><span class="token operator">:</span> ImageMinimizerPlugin<span class="token punctuation">.</span>imageminMinify<span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">&quot;gifsicle&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token string">&quot;svgo&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;preset-default&quot;</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                          <span class="token literal-property property">removeViewBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                          <span class="token literal-property property">addAttributesToSVGElement</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                              <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token punctuation">{</span> <span class="token literal-property property">xmlns</span><span class="token operator">:</span> <span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                              <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&quot;jpegtran&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">progressive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&quot;optipng&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imagemin-lossy" tabindex="-1"><a class="header-anchor" href="#imagemin-lossy" aria-hidden="true">#</a> imagemin - lossy</h3><ul><li>install packages:</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev image-minimizer-webpack-plugin imagemin imagemin-gifsicle imagemin-mozjpeg imagemin-pngquant imagemin-svgo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>configuration:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> ImageMinimizerPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;image-minimizer-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">ImageMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">implementation</span><span class="token operator">:</span> ImageMinimizerPlugin<span class="token punctuation">.</span>imageminMinify<span class="token punctuation">,</span>
          <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">[</span><span class="token string">&quot;gifsicle&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span>
                <span class="token string">&quot;svgo&quot;</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;preset-default&quot;</span><span class="token punctuation">,</span>
                      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">overrides</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                          <span class="token literal-property property">removeViewBox</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                          <span class="token literal-property property">addAttributesToSVGElement</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                            <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                              <span class="token literal-property property">attributes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                                <span class="token punctuation">{</span> <span class="token literal-property property">xmlns</span><span class="token operator">:</span> <span class="token string">&quot;http://www.w3.org/2000/svg&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                              <span class="token punctuation">]</span><span class="token punctuation">,</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                      <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;mozjpeg&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">[</span><span class="token string">&#39;pngquant&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sharp-lossless" tabindex="-1"><a class="header-anchor" href="#sharp-lossless" aria-hidden="true">#</a> sharp - lossless</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>sharp</code> 目前还有维护，并且压缩速度是最快的，优先将 <code>sharp</code> 作为图片压缩方案。</p></div><ul><li>install packages:</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev sharp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>configuration:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// extend default minimizer, i.e. \`terser-webpack-plugin\` for JS</span>
      <span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// 压缩图片</span>
      <span class="token keyword">new</span> <span class="token class-name">ImageMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">implementation</span><span class="token operator">:</span> ImageMinimizerPlugin<span class="token punctuation">.</span>sharpMinify<span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">encodeOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">jpeg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">webp</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">lossless</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">avif</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token literal-property property">lossless</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">png</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token literal-property property">gif</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">implementation</span><span class="token operator">:</span> ImageMinimizerPlugin<span class="token punctuation">.</span>svgoMinify<span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">encodeOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">multipass</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;preset-default&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sharp-lossy" tabindex="-1"><a class="header-anchor" href="#sharp-lossy" aria-hidden="true">#</a> sharp - lossy</h3><ul><li>install packages:</li></ul><div class="language-npm line-numbers-mode" data-ext="npm"><pre class="language-npm"><code>npm i --save-dev sharp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>configuration:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token keyword">new</span> <span class="token class-name">ImageMinimizerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">minimizer</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">implementation</span><span class="token operator">:</span> ImageMinimizerPlugin<span class="token punctuation">.</span>sharpMinify<span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">encodeOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">implementation</span><span class="token operator">:</span> ImageMinimizerPlugin<span class="token punctuation">.</span>svgoMinify<span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">encodeOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">multipass</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;preset-default&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function z(w,q){const a=l("ExternalLinkIcon");return o(),i("div",null,[r,u,n("blockquote",null,[d,n("ul",null,[n("li",null,[n("a",k,[s("处理图片资源"),p(a)])]),n("li",null,[n("a",v,[s("将图片打包到单独的文件夹"),p(a)])])])]),m,n("blockquote",null,[b,n("ul",null,[n("li",null,[n("a",g,[s("ImageMinimizerWebpackPlugin"),p(a)])])])]),y,n("div",h,[f,n("p",null,[s("imagemin 和相关的插件"),n("a",_,[s("作者已经停止维护"),p(a)]),s("。")])]),x])}const M=t(c,[["render",z],["__file","index.html.vue"]]);export{M as default};
