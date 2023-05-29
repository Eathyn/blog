import{_ as n,W as s,X as e,a0 as a}from"./framework-c8ebc670.js";const i="/blog/assets/exclude-c1b06e0f.png",t={},o=a(`<h1 id="configuration-options" tabindex="-1"><a class="header-anchor" href="#configuration-options" aria-hidden="true">#</a> Configuration Options</h1><ul><li>Configuring TypeScript options via either command-line flags passed to <code>tsc</code> or seperated <code>tsconfig.json</code> file.</li></ul><h2 id="tsc-options" tabindex="-1"><a class="header-anchor" href="#tsc-options" aria-hidden="true">#</a> tsc Options</h2><ul><li>The <code>tsc</code> command can take in most of TypeScript&#39;s configuration options as <code>--</code> flags.</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># skip emitting an js file</span>
tsc <span class="token operator">&lt;</span>ts file<span class="token operator">&gt;</span> <span class="token parameter variable">--noEmit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pretty-mode" tabindex="-1"><a class="header-anchor" href="#pretty-mode" aria-hidden="true">#</a> Pretty Mode</h3><ul><li>pretty mode: stylized with colors and spacing to make them easier to read</li><li>pretty mode flag: <code>--pretty</code></li></ul><h3 id="watch-mode" tabindex="-1"><a class="header-anchor" href="#watch-mode" aria-hidden="true">#</a> Watch Mode</h3><ul><li>watch mode: recompile TypeScript after changing the code</li><li>watch mode flag: <code>--watch</code> / <code>-w</code></li></ul><h2 id="tsconfig-files" tabindex="-1"><a class="header-anchor" href="#tsconfig-files" aria-hidden="true">#</a> TSConfig Files</h2><ul><li><code>--project</code> / <code>-p</code> flag: specify the path of <code>tsconfig.json</code> file</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">--project</span> path/to/tsconfig.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="tsc-init" tabindex="-1"><a class="header-anchor" href="#tsc-init" aria-hidden="true">#</a> tsc --init</h3><ul><li><code>--init</code> flag: creating a new <code>tsconfig.json</code>:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>It&#39;s recommended using <code>tsc --init</code> to create the configuration file for new TypeScript project.</li></ul><h3 id="cli-versus-configuration" tabindex="-1"><a class="header-anchor" href="#cli-versus-configuration" aria-hidden="true">#</a> CLI Versus Configuration</h3><ul><li>Most options available in both the CLI and in TSConfig files fall into one of two categories: <ul><li>compiler: how each included file is compiled and/or type checked by TypeScript</li><li>file: which files will or will not have TypeScript run on them</li></ul></li></ul><h2 id="file-inclusions" tabindex="-1"><a class="header-anchor" href="#file-inclusions" aria-hidden="true">#</a> File Inclusions</h2><ul><li>hidden <code>.ts</code> files: ts files whose names start with a <code>.</code></li><li>By default, <code>tsc</code> will run on all non-hidden <code>.ts</code> files, ignoring hidden directories and directories named <code>node_modules</code>.</li></ul><h3 id="include" tabindex="-1"><a class="header-anchor" href="#include" aria-hidden="true">#</a> include</h3><ul><li>The <code>include</code> option is an array of strings that describes what directories and/or files to include in TypeScript compilation.</li></ul><p><em>TypeScript compiler will include and compile <strong>src</strong> directory</em></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Glob wildcards are allowed in <code>include</code>.</li></ul><h3 id="exclude" tabindex="-1"><a class="header-anchor" href="#exclude" aria-hidden="true">#</a> exclude</h3><ul><li>TSConfig file can omit paths from <code>include</code> by specifying them in a top-level <code>exclude</code>.</li></ul><p><em>example: TS compiler won&#39;t compile <code>.ts</code> files in <code>src/ignore</code> folder</em></p><figure><img src="`+i+`" alt="Exclude Keyword" tabindex="0" loading="lazy"><figcaption>Exclude Keyword</figcaption></figure><ul><li><p>By default, <code>exclude</code> contains <code>[&quot;node_modules&quot;, &quot;bower_components&quot;, &quot;jspm_packages&quot;]</code> to avoid running the TypeScript compiler on compiled third-party library files.</p></li><li><p>Q : <code>exclude</code> only acts to remove files from the starting list in <code>include</code>. TypeScript will run on any file imported by any included file, even if the imported file is explicitly listed in <code>exclude</code>.</p></li></ul><h2 id="alternative-extensions" tabindex="-1"><a class="header-anchor" href="#alternative-extensions" aria-hidden="true">#</a> Alternative Extensions</h2><h3 id="jsx-syntax" tabindex="-1"><a class="header-anchor" href="#jsx-syntax" aria-hidden="true">#</a> JSX Syntax</h3><p>TODO: read after learning React JSX</p><h3 id="resolvejsonmodule" tabindex="-1"><a class="header-anchor" href="#resolvejsonmodule" aria-hidden="true">#</a> resolveJsonModule</h3><ul><li>If <code>resolveJsonModule</code> is <code>true</code>, JSON files can be imported from as if they were <code>.ts</code> files exporting <code>const</code> objects.</li></ul><p><em>tsconfig.json</em></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>data.json</em></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eathyn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>index.ts</em></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./data.json&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Default imports may be used if <code>resolveJsonModule</code> and <code>esModuleInterop</code> both are <code>true</code></li></ul><p><em>tsconfig.json</em></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>data.json</em></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eathyn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>index.ts</em></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> data <span class="token keyword">from</span> <span class="token string">&#39;./data.json&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>If the JSON file contains literal types except <code>Object</code>, we will have to use the <code>* as import</code> syntax.</li></ul><p><em>data.json</em></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em>index.ts</em></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> numbers <span class="token keyword">from</span> <span class="token string">&#39;./data.json&#39;</span>

<span class="token comment">// { &#39;0&#39;: [Getter], &#39;1&#39;: [Getter], &#39;2&#39;: [Getter], default: [ 1, 2, 3 ] }</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="emit" tabindex="-1"><a class="header-anchor" href="#emit" aria-hidden="true">#</a> Emit</h2><h3 id="outdir" tabindex="-1"><a class="header-anchor" href="#outdir" aria-hidden="true">#</a> outDir</h3><ul><li>By default, TypeScript places output files alongside their corresponding source files.</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Before Compilation:
<span class="token list punctuation">-</span> src
  <span class="token list punctuation">-</span> test
    <span class="token list punctuation">-</span> index.ts

After Compilation:
<span class="token list punctuation">-</span> src
  <span class="token list punctuation">-</span> test
    <span class="token list punctuation">-</span> index.ts
    <span class="token list punctuation">-</span> index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Outputting to other directory by setting <code>outDir</code>.</li></ul><p><em>tsconfig.json</em></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dist&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>Before Compilation:
<span class="token list punctuation">-</span> src
  <span class="token list punctuation">-</span> test-1
    <span class="token list punctuation">-</span> index.ts
  <span class="token list punctuation">-</span> test-2
    <span class="token list punctuation">-</span> index.ts

After Compilation:
<span class="token list punctuation">-</span> dist
  <span class="token list punctuation">-</span> test-1
    <span class="token list punctuation">-</span> index.ts
  <span class="token list punctuation">-</span> test-2
    <span class="token list punctuation">-</span> index.ts
<span class="token list punctuation">-</span> src
  <span class="token list punctuation">-</span> test-1
    <span class="token list punctuation">-</span> index.ts
  <span class="token list punctuation">-</span> test-2
    <span class="token list punctuation">-</span> index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),l=[o];function c(d,p){return s(),e("div",null,l)}const u=n(t,[["render",c],["__file","chapter_13.html.vue"]]);export{u as default};