import{_ as p,r as o,o as c,c as r,b as n,d as s,a as e,e as t}from"./app.0a43b3c6.js";const i="/blog/assets/config.b98f030d.png",l="/blog/assets/webstorm_config.752329bb.png",u="/blog/assets/webstorm_config_prettier.d864aabf.png",d={},k=e(`<h1 id="\u914D\u7F6E-vue-js-\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-vue-js-\u9879\u76EE" aria-hidden="true">#</a> \u914D\u7F6E Vue.js \u9879\u76EE</h1><h2 id="vite" tabindex="-1"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> Vite</h2><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> create vite@latest
</code></pre></div><h3 id="\u914D\u7F6E\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8DEF\u5F84" aria-hidden="true">#</a> \u914D\u7F6E\u8DEF\u5F84</h3><p><em>vite.config.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// server: {</span>
  <span class="token comment">//   proxy: {</span>
  <span class="token comment">//     &#39;/xxx&#39;: {</span>
  <span class="token comment">//       // ...</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><em>jsconfig.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">compilerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@/*&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;src/*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue Router</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router@4
</code></pre></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p><em>src/router/index.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

<span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  routes<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre></div><h2 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h2><h3 id="\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next <span class="token parameter variable">--save</span>
</code></pre></div><h3 id="\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-1" aria-hidden="true">#</a> \u4F7F\u7528</h3><p><em>src/store/index.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>
<span class="token keyword">import</span> count <span class="token keyword">from</span> <span class="token string">&#39;@/store/modules/count.js&#39;</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">countModule</span><span class="token operator">:</span> count<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre></div><p><em>src/store/modules/count.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">doubleCount</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">*</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">INCREMENT</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;INCREMENT&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> count
</code></pre></div><h2 id="element-ui" tabindex="-1"><a class="header-anchor" href="#element-ui" aria-hidden="true">#</a> Element UI</h2><h3 id="\u5B89\u88C5-2" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-2" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> element-plus <span class="token parameter variable">--save</span>
</code></pre></div><h3 id="\u6309\u9700\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u6309\u9700\u5F15\u5165" aria-hidden="true">#</a> \u6309\u9700\u5F15\u5165</h3><h4 id="\u5B89\u88C5-3" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-3" aria-hidden="true">#</a> \u5B89\u88C5</h4><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> unplugin-vue-components unplugin-auto-import
</code></pre></div><h4 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h4><p><em>vite.config.js</em></p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElementPlusResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">resolvers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">ElementPlusResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h2><h3 id="\u5B89\u88C5-eslint" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-eslint" aria-hidden="true">#</a> \u5B89\u88C5 ESLint</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i eslint --save-dev
</code></pre></div><h3 id="\u914D\u7F6E-eslint" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-eslint" aria-hidden="true">#</a> \u914D\u7F6E ESLint</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> init @eslint/config
</code></pre></div><p><img src="`+i+`" alt="config eslint"></p><h3 id="\u589E\u52A0-eslintignore" tabindex="-1"><a class="header-anchor" href="#\u589E\u52A0-eslintignore" aria-hidden="true">#</a> \u589E\u52A0 .eslintignore</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>.vscode
node_modules
</code></pre></div><h3 id="webstorm-\u8BBE\u7F6E-eslint" tabindex="-1"><a class="header-anchor" href="#webstorm-\u8BBE\u7F6E-eslint" aria-hidden="true">#</a> Webstorm \u8BBE\u7F6E ESLint</h3><p><img src="`+l+`" alt="webstorm sets eslint"></p><h2 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h2><h3 id="\u5B89\u88C5-prettier" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-prettier" aria-hidden="true">#</a> \u5B89\u88C5 prettier</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> i --save-dev prettier
</code></pre></div><h3 id="\u914D\u7F6E-prettierrc-cjs" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-prettierrc-cjs" aria-hidden="true">#</a> \u914D\u7F6E <code>.prettierrc.cjs</code></h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">semi</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">singleQuote</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">trailingComma</span><span class="token operator">:</span> <span class="token string">&#39;all&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">singleAttributePerLine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u914D\u7F6E-prettierignore" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-prettierignore" aria-hidden="true">#</a> \u914D\u7F6E <code>.prettierignore</code></h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>.vscode
node_modules
</code></pre></div><h3 id="webstorm-\u914D\u7F6E-prettier" tabindex="-1"><a class="header-anchor" href="#webstorm-\u914D\u7F6E-prettier" aria-hidden="true">#</a> Webstorm \u914D\u7F6E prettier</h3><p><img src="`+u+'" alt="webstorm config prettier"></p><h3 id="\u5904\u7406-eslint-\u4E0E-prettier-\u7684\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406-eslint-\u4E0E-prettier-\u7684\u51B2\u7A81" aria-hidden="true">#</a> \u5904\u7406 ESLint \u4E0E Prettier \u7684\u51B2\u7A81</h3>',52),h=t("\u5B89\u88C5 "),g={href:"https://github.com/prettier/eslint-config-prettier",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"eslint-config-prettier",-1),v=e(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-config-prettier
</code></pre></div><ul><li>\u914D\u7F6E eslintrc.cjs</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;standard&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;prettier&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br></div></div><h2 id="commitizen" tabindex="-1"><a class="header-anchor" href="#commitizen" aria-hidden="true">#</a> commitizen</h2><h3 id="\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0" aria-hidden="true">#</a> \u539F\u56E0</h3><ul><li>\u89C4\u8303\u5316 commit message</li></ul><h3 id="\u5B89\u88C5-4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-4" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> commitizen
</code></pre></div><ul><li>making repo commitizen friendly</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>npx commitizen init cz-conventional-changelog --save-dev --save-exact
</code></pre></div><ul><li>(automatically) config package.json</li></ul><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./node_modules/cz-conventional-changelog&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4F7F\u7528-2" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-2" aria-hidden="true">#</a> \u4F7F\u7528</h3><ul><li>run commitizen after <code>git add</code></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>npx cz
</code></pre></div><ul><li>configure script <code>cz</code> in package.json</li></ul><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;cz&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cz&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> commitlint</h2><h3 id="\u539F\u56E0-1" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0-1" aria-hidden="true">#</a> \u539F\u56E0</h3><ul><li>\u68C0\u67E5 commit message \u662F\u5426\u6EE1\u8DB3 commitizen \u7684\u683C\u5F0F</li></ul><h3 id="\u5B89\u88C5-5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @commitlint/config-conventional @commitlint/cli
</code></pre></div><h3 id="\u914D\u7F6E-1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-1" aria-hidden="true">#</a> \u914D\u7F6E</h3><ul><li>configure commitlint to use conventional config</li><li>change file format to <strong>UTF-8</strong></li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}&quot;</span> <span class="token operator">&gt;</span> commitlint.config.cjs
</code></pre></div><h2 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h2><h3 id="\u539F\u56E0-2" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0-2" aria-hidden="true">#</a> \u539F\u56E0</h3><ul><li>\u53EA\u5BF9\u6682\u5B58\u533A\u4E2D\u7684\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C</li></ul><h3 id="\u5B89\u88C5-6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-6" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev lint-staged
</code></pre></div><h3 id="\u914D\u7F6E-2" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-2" aria-hidden="true">#</a> \u914D\u7F6E</h3><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;src/**/*.{js,vue}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;eslint --fix&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;prettier --write&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h2><h3 id="\u539F\u56E0-3" tabindex="-1"><a class="header-anchor" href="#\u539F\u56E0-3" aria-hidden="true">#</a> \u539F\u56E0</h3><ul><li>\u4F7F\u7528 commit-msg \u94A9\u5B50\u6267\u884C commitlint</li><li>\u4F7F\u7528 pre-commit \u94A9\u5B50\u6267\u884C lint-staged</li></ul><h3 id="\u5B89\u88C5-7" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-7" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> husky --save-dev

npx husky <span class="token function">install</span>
</code></pre></div><h3 id="\u914D\u7F6E-3" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-3" aria-hidden="true">#</a> \u914D\u7F6E</h3><h4 id="pre-commit" tabindex="-1"><a class="header-anchor" href="#pre-commit" aria-hidden="true">#</a> pre-commit</h4><ul><li>create <code>pre-commit</code> hook</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&#39;npx lint-staged&#39;</span>
</code></pre></div><h4 id="commit-msg" tabindex="-1"><a class="header-anchor" href="#commit-msg" aria-hidden="true">#</a> commit-msg</h4><ul><li>create <code>commit-msg</code> hook</li></ul><div class="language-bash ext-sh"><pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npx --no-install commitlint --edit &quot;$1&quot;&#39;</span>
</code></pre></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,45),f={href:"https://github.com/commitizen/cz-cli",target:"_blank",rel:"noopener noreferrer"},b=t("commitizen");function x(y,j){const a=o("ExternalLinkIcon");return c(),r("div",null,[k,n("ul",null,[n("li",null,[h,n("a",g,[m,s(a)])])]),v,n("ul",null,[n("li",null,[n("a",f,[b,s(a)])])])])}const _=p(d,[["render",x],["__file","index.html.vue"]]);export{_ as default};
