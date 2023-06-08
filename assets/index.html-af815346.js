import{_ as i,W as c,X as l,Y as n,Z as s,$ as a,a1 as r,a0 as t,C as p}from"./framework-c8ebc670.js";const u={},d=t('<h1 id="权限管理" tabindex="-1"><a class="header-anchor" href="#权限管理" aria-hidden="true">#</a> 权限管理</h1><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><h3 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h3>',3),k=n("code",null,"roles",-1),v=n("h3",{id:"过滤路由",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#过滤路由","aria-hidden":"true"},"#"),s(" 过滤路由")],-1),m=n("p",null,[s("跳转到主页时会触发全局路由守卫 "),n("code",null,"beforeEach"),s(" 钩子函数，在钩子函数中调用 "),n("code",null,"generateRoutes"),s(" 函数。代码如下：")],-1),b={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/permission.js",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// generate accessible routes map based on roles</span>
<span class="token keyword">const</span> accessRoutes <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;permission/generateRoutes&#39;</span><span class="token punctuation">,</span> roles<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>generateRoutes</code> 函数根据后端发过来的用户权限过滤出该用户可以访问的路由。<code>asyncRoutes</code> 包含所有需要权限的路由，根据用户角色进行过滤。代码如下：</p>`,2),g={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/store/modules/permission.js",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateRoutes</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> commit <span class="token punctuation">}</span><span class="token punctuation">,</span> roles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> accessedRoutes
    <span class="token keyword">if</span> <span class="token punctuation">(</span>roles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// asyncRoutes: the routes that need to be dynamically loaded based on user roles</span>
      accessedRoutes <span class="token operator">=</span> asyncRoutes <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      accessedRoutes <span class="token operator">=</span> <span class="token function">filterAsyncRoutes</span><span class="token punctuation">(</span>asyncRoutes<span class="token punctuation">,</span> roles<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;SET_ROUTES&#39;</span><span class="token punctuation">,</span> accessedRoutes<span class="token punctuation">)</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>accessedRoutes<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// 虚拟数据</span>
<span class="token keyword">const</span> asyncRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;editor&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a-1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;a-2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;editor&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">role</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>filterAsyncRoutes</code> 函数递归地过滤所有符合该用户权限的路由，采用深度优先遍历，递归的结束条件是路由没有 <code>children</code> 属性。</p>`,2),y={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/store/modules/permission.js",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">filterAsyncRoutes</span><span class="token punctuation">(</span><span class="token parameter">routes<span class="token punctuation">,</span> roles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tmp <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>route <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">hasPermission</span><span class="token punctuation">(</span>roles<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tmp<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">filterAsyncRoutes</span><span class="token punctuation">(</span>tmp<span class="token punctuation">.</span>children<span class="token punctuation">,</span> roles<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hasPermission</code> 根据路由中的 meta 属性和后端返回的用户角色判断该用户是否可以拥有该路由。代码如下：</p>`,2),w={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/store/modules/permission.js",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hasPermission</span><span class="token punctuation">(</span><span class="token parameter">roles<span class="token punctuation">,</span> route</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>route<span class="token punctuation">.</span>meta <span class="token operator">&amp;&amp;</span> route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>roles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> roles<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">role</span> <span class="token operator">=&gt;</span> route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>roles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="挂载路由" tabindex="-1"><a class="header-anchor" href="#挂载路由" aria-hidden="true">#</a> 挂载路由</h3><p>获取符合用户角色的路由后，通过 <code>route.addRoutes()</code> 挂载路由。代码如下：</p>`,3),x={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/permission.js",target:"_blank",rel:"noopener noreferrer"},R=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// generate accessible routes map based on roles</span>
<span class="token keyword">const</span> accessRoutes <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;permission/generateRoutes&#39;</span><span class="token punctuation">,</span> roles<span class="token punctuation">)</span>
<span class="token comment">// dynamically add accessible routes</span>
router<span class="token punctuation">.</span><span class="token function">addRoutes</span><span class="token punctuation">(</span>accessRoutes<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html-标签" tabindex="-1"><a class="header-anchor" href="#html-标签" aria-hidden="true">#</a> HTML 标签</h2><h3 id="编写指令" tabindex="-1"><a class="header-anchor" href="#编写指令" aria-hidden="true">#</a> 编写指令</h3><ul><li>从 Vuex 中获取用户的角色，与指令的值对比，判断该用户是否拥有这个元素的权限。如果没有权限，则通过该标签的父元素删除这个标签。</li><li>指令需要使用到 <code>inserted</code> 和 <code>update</code>（在 Vue-3 中是 <code>mounted</code> 和 <code>updated</code>）。</li></ul>`,4),P={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/directive/permission/permission.js",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token keyword">function</span> <span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> binding
  <span class="token comment">// 从 vuex 中获取用户角色（后端返回的）</span>
  <span class="token keyword">const</span> roles <span class="token operator">=</span> store<span class="token punctuation">.</span>getters <span class="token operator">&amp;&amp;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles

  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> permissionRoles <span class="token operator">=</span> value

      <span class="token comment">// 判断是否拥有权限</span>
      <span class="token keyword">const</span> hasPermission <span class="token operator">=</span> roles<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">role</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> permissionRoles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// 如果没有权限则删除该元素</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasPermission<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        el<span class="token punctuation">.</span>parentNode <span class="token operator">&amp;&amp;</span> el<span class="token punctuation">.</span>parentNode<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">need roles! Like v-permission=&quot;[&#39;admin&#39;,&#39;editor&#39;]&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// called when the bound element has been inserted into its parent node</span>
  <span class="token function">inserted</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkPermission</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// called after the containing component’s VNode has updated, but possibly before its children have updated.</span>
  <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkPermission</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> binding<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用指令" tabindex="-1"><a class="header-anchor" href="#使用指令" aria-hidden="true">#</a> 使用指令</h3><p><code>install</code> 方法是一个插件，在该方法中定义了全局指令 <code>v-permission</code>。调用 <code>Vue.use(install)</code> 会使用这个插件。</p>`,3),C={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/directive/permission/index.js",target:"_blank",rel:"noopener noreferrer"},V=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> permission <span class="token keyword">from</span> <span class="token string">&#39;./permission&#39;</span>

<span class="token comment">// plugin</span>
<span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;permission&#39;</span><span class="token punctuation">,</span> permission<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">[</span><span class="token string">&#39;permission&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> permission
  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>install<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// eslint-disable-line</span>
<span class="token punctuation">}</span>

permission<span class="token punctuation">.</span>install <span class="token operator">=</span> install
<span class="token keyword">export</span> <span class="token keyword">default</span> permission
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h3><p>以 <code>v-permission</code> 的形式就可以使用自定义指令。</p>`,3),J={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/views/permission/directive.vue",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>span v<span class="token operator">-</span>permission<span class="token operator">=</span><span class="token string">&quot;[&#39;admin&#39;]&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;permission-alert&quot;</span><span class="token operator">&gt;</span>Only<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3>`,2),A={href:"https://vuejs.org/guide/reusability/custom-directives.html#introduction",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"v-if",-1),N=n("code",null,"v-permission",-1),B={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/views/permission/directive.vue",target:"_blank",rel:"noopener noreferrer"},T=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;checkPermission([&#39;admin&#39;,&#39;editor&#39;])&quot;</span> label<span class="token operator">=</span><span class="token string">&quot;Admin-OR-Editor&quot;</span><span class="token operator">&gt;</span>
  Both admin or editor can see <span class="token keyword">this</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>el<span class="token operator">-</span>tab<span class="token operator">-</span>pane<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O={href:"https://github.com/PanJiaChen/vue-element-admin/blob/0caa975ee224074c77540107b1fe076081cdf306/src/utils/permission.js",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span></span>
 * <span class="token keyword">@example</span> see @/views/permission/directive.vue
 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">checkPermission</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&amp;&amp;</span> value <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">&amp;&amp;</span> value<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> roles <span class="token operator">=</span> store<span class="token punctuation">.</span>getters <span class="token operator">&amp;&amp;</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>roles
    <span class="token keyword">const</span> permissionRoles <span class="token operator">=</span> value

    <span class="token keyword">const</span> hasPermission <span class="token operator">=</span> roles<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">role</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> permissionRoles<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> hasPermission
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">need roles! Like v-permission=&quot;[&#39;admin&#39;,&#39;editor&#39;]&quot;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> Refs</h2>`,2),I={href:"https://juejin.cn/post/6844903478880370701#heading-3",target:"_blank",rel:"noopener noreferrer"},z={href:"https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/essentials/permission.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank",rel:"noopener noreferrer"};function G(H,M){const o=p("RouterLink"),e=p("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[s("登录获取用户角色 "),k,s("，具体参考"),a(o,{to:"/solution/login/"},{default:r(()=>[s("登录")]),_:1}),s("文章")]),v,m,n("blockquote",null,[n("p",null,[n("a",b,[s("src/permission.js"),a(e)])])]),h,n("blockquote",null,[n("p",null,[n("a",g,[s("src/store/modules/permission.js"),a(e)])])]),f,n("blockquote",null,[n("p",null,[n("a",y,[s("src/store/modules/permission.js"),a(e)])])]),_,n("blockquote",null,[n("p",null,[n("a",w,[s("src/store/modules/permission.js"),a(e)])])]),j,n("blockquote",null,[n("p",null,[n("a",x,[s("src/permission.js"),a(e)])])]),R,n("blockquote",null,[n("p",null,[n("a",P,[s("src/directive/permission/permission.js"),a(e)])])]),q,n("blockquote",null,[n("p",null,[n("a",C,[s("src/directive/permission/index.js"),a(e)])])]),V,n("blockquote",null,[n("p",null,[n("a",J,[s("src/views/permission/directive.vue"),a(e)])])]),E,n("p",null,[s("不推荐在组件上使用自定义指令"),n("a",A,[s("link"),a(e)]),s("。组件可以使用 "),L,s(" 进行权限管理。逻辑和 "),N,s(" 差不多。")]),n("blockquote",null,[n("p",null,[n("a",B,[s("src/views/permission/directive.vue"),a(e)])])]),T,n("blockquote",null,[n("p",null,[n("a",O,[s("src/utils/permission.js"),a(e)])])]),S,n("ul",null,[n("li",null,[n("a",I,[s("Dynamic Generate Routes"),a(e)])]),n("li",null,[n("a",z,[s("权限验证"),a(e)])]),n("li",null,[n("a",D,[s("Vue Element Admin Code"),a(e)])])])])}const W=i(u,[["render",G],["__file","index.html.vue"]]);export{W as default};