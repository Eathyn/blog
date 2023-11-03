import{_ as p,W as o,X as l,Y as n,Z as s,$ as e,a0 as t,C as r}from"./framework-0d71bc9d.js";const i={},c=n("h1",{id:"utility-types",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#utility-types","aria-hidden":"true"},"#"),s(" Utility Types")],-1),d=n("h2",{id:"partial-type",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#partial-type","aria-hidden":"true"},"#"),s(" Partial Type")],-1),u={href:"https://dev.to/smpnjn/how-the-typescript-partial-type-works-2klj",target:"_blank",rel:"noopener noreferrer"},k=t(`<ul><li>将一个类型的所有属性都转变为可选（optional）属性，并生成一个新类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PartialUser</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span> <span class="token comment">// {name?: string, age?: number}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="required-type" tabindex="-1"><a class="header-anchor" href="#required-type" aria-hidden="true">#</a> Required Type</h2>`,3),m={href:"https://dev.to/smpnjn/how-the-typescript-required-type-works-2nlc",target:"_blank",rel:"noopener noreferrer"},v=t(`<ul><li>将一个类型的所有可选属性都转变为必需（required）属性，并生成一个新类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">RequiredUser</span> <span class="token operator">=</span> Required<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span> <span class="token comment">// {name: string, age: number}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="record-type" tabindex="-1"><a class="header-anchor" href="#record-type" aria-hidden="true">#</a> Record Type</h2>`,3),h={href:"https://dev.to/smpnjn/how-the-typescript-record-type-works-1f5m",target:"_blank",rel:"noopener noreferrer"},y=t(`<ul><li>Record 可以确保一致性，接收一个键和一个值。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">Country</span> <span class="token operator">=</span> <span class="token string">&#39;uk&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;france&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;india&#39;</span>

<span class="token keyword">let</span> data<span class="token operator">:</span> Record<span class="token operator">&lt;</span>Country<span class="token punctuation">,</span> User<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  uk<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Jeff&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">18</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  france<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;Eaven&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">19</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  india<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">20</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonly-type" tabindex="-1"><a class="header-anchor" href="#readonly-type" aria-hidden="true">#</a> Readonly Type</h2>`,3),b={href:"https://dev.to/smpnjn/how-the-typescript-readonly-type-works-2on2",target:"_blank",rel:"noopener noreferrer"},g=t(`<ul><li>将对象的所有属性都转变为只读（readonly）。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UserReadonly</span> <span class="token operator">=</span> Readonly<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span> <span class="token comment">// {readonly name: string}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Readonly</code> 类型对变量不起作用，使用 <code>const</code> 可以形成只读变量。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> age<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token number">18</span>
age <span class="token operator">=</span> <span class="token number">19</span> <span class="token comment">// work</span>

<span class="token keyword">const</span> grade <span class="token operator">=</span> <span class="token number">4</span>
grade <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">// TS2588: Cannot assign to &#39;grade&#39; because it is a constant.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exclude-type" tabindex="-1"><a class="header-anchor" href="#exclude-type" aria-hidden="true">#</a> Exclude Type</h2>`,5),f={href:"https://dev.to/smpnjn/how-the-typescript-exclude-type-works-4j1",target:"_blank",rel:"noopener noreferrer"},w=t(`<ul><li>Exclude 类型可以排除联合（union）类型中的某些类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Country</span> <span class="token operator">=</span> <span class="token string">&#39;China&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Japan&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Korea&#39;</span> <span class="token comment">// &quot;China&quot; | &quot;Japan&quot; | &quot;Korea&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">ExcludeKorea</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>Country<span class="token punctuation">,</span> <span class="token string">&#39;Korea&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// &quot;China&quot; | &quot;Japan&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以使用 <code>|</code> 排除联合类型中的多个类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Country</span> <span class="token operator">=</span> <span class="token string">&#39;China&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Japan&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Korea&#39;</span> <span class="token comment">// &quot;China&quot; | &quot;Japan&quot; | &quot;Korea&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">OnlyChina</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>Country<span class="token punctuation">,</span> <span class="token string">&#39;Korea&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Japan&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// &quot;China</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extract-type" tabindex="-1"><a class="header-anchor" href="#extract-type" aria-hidden="true">#</a> Extract Type</h2>`,5),_={href:"https://dev.to/smpnjn/how-the-typescript-extract-type-works-26b0",target:"_blank",rel:"noopener noreferrer"},q=t(`<ul><li>Extract 类型可以将联合类型中的某些类型提取出来，形成一个新类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Country</span> <span class="token operator">=</span> <span class="token string">&#39;China&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Japan&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Korea&#39;</span> <span class="token comment">// &quot;China&quot; | &quot;Japan&quot; | &quot;Korea&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">onlyChina</span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span>Country<span class="token punctuation">,</span> <span class="token string">&#39;China&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// &quot;China&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>可以使用 <code>|</code> 提取联合类型中的多个类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Country</span> <span class="token operator">=</span> <span class="token string">&#39;China&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Japan&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Korea&#39;</span> <span class="token comment">// &quot;China&quot; | &quot;Japan&quot; | &quot;Korea&quot;</span>
<span class="token keyword">type</span> <span class="token class-name">ChinaAndKorea</span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span>Country<span class="token punctuation">,</span> <span class="token string">&#39;China&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;Korea&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// &quot;China&quot; | &quot;Korea&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="omit-type" tabindex="-1"><a class="header-anchor" href="#omit-type" aria-hidden="true">#</a> Omit Type</h2>`,5),x={href:"https://dev.to/smpnjn/how-the-typescript-omit-type-works-56jl",target:"_blank",rel:"noopener noreferrer"},T=t(`<ul><li>Omit 类型可以忽略对象类型中的某些属性，并生成新的类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UserNameOnly</span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span>User<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// {name: string}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pick-type" tabindex="-1"><a class="header-anchor" href="#pick-type" aria-hidden="true">#</a> Pick Type</h2>`,3),C={href:"https://dev.to/smpnjn/how-the-typescript-pick-type-works-aph",target:"_blank",rel:"noopener noreferrer"},R=t(`<ul><li>Pick 类型可以挑选出对象类型中的某些属性，并生成新的类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">User</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">UserOnlyName</span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>User<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// {name: string}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="parameters-type" tabindex="-1"><a class="header-anchor" href="#parameters-type" aria-hidden="true">#</a> Parameters Type</h2>`,3),P={href:"https://dev.to/smpnjn/how-the-typescript-parameters-type-works-49p5",target:"_blank",rel:"noopener noreferrer"},U=t(`<ul><li>Parameters 类型会以元组的形式返回函数的形参类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">logPersonInfo</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">name: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - age: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">ParameterType</span> <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token keyword">typeof</span> logPersonInfo<span class="token operator">&gt;</span> <span class="token comment">// [string, number]</span>
<span class="token keyword">let</span> parameter<span class="token operator">:</span> ParameterType <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Jeff&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">]</span>
<span class="token function">logPersonInfo</span><span class="token punctuation">(</span><span class="token operator">...</span>parameter<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nonnullable-type" tabindex="-1"><a class="header-anchor" href="#nonnullable-type" aria-hidden="true">#</a> NonNullable Type</h2>`,3),N={href:"https://dev.to/smpnjn/how-the-typescript-parameters-type-works-12h4",target:"_blank",rel:"noopener noreferrer"},E=t(`<ul><li>NonNullable 类型将<strong>联合类型</strong>中的 <code>null</code> 和 <code>undefined</code> 去除，并返回一个新类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WithNullable</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
<span class="token keyword">type</span> <span class="token class-name">WithoutNullable</span> <span class="token operator">=</span> NonNullable<span class="token operator">&lt;</span>WithNullable<span class="token operator">&gt;</span> <span class="token comment">// string | number</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="return-type" tabindex="-1"><a class="header-anchor" href="#return-type" aria-hidden="true">#</a> Return Type</h2>`,3),W={href:"https://dev.to/smpnjn/how-the-typescript-returntype-type-works-hao",target:"_blank",rel:"noopener noreferrer"},j=t(`<ul><li>ReturnType 可以获取函数返回值的类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">sendPersonInfo</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PersonInfo</span> <span class="token operator">=</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> sendPersonInfo<span class="token operator">&gt;</span> <span class="token comment">// {name: string, age: number}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="instance-type" tabindex="-1"><a class="header-anchor" href="#instance-type" aria-hidden="true">#</a> Instance Type</h2><blockquote><p>Reference: <a href=""></a></p></blockquote><ul><li>Instance Type 返回构造函数的实例类型。</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">private</span> <span class="token keyword">readonly</span> age<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">PersonInstance</span> <span class="token operator">=</span> InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Person<span class="token operator">&gt;</span> <span class="token comment">// Person</span>
<span class="token keyword">let</span> person<span class="token operator">:</span> PersonInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Jeff&#39;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function J(K,I){const a=r("ExternalLinkIcon");return o(),l("div",null,[c,d,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",u,[s("How the TypeScript Partial Type Works"),e(a)])])]),k,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",m,[s("How the TypeScript Required Type Works"),e(a)])])]),v,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",h,[s("How the TypeScript Record Type Works"),e(a)])])]),y,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",b,[s("How the TypeScript Readonly Type Works"),e(a)])])]),g,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",f,[s("How the TypeScript Exclude Type Works"),e(a)])])]),w,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",_,[s("How the TypeScript Extract Type Works"),e(a)])])]),q,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",x,[s("How the TypeScript Omit Type Works"),e(a)])])]),T,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",C,[s("How the TypeScript Pick Type Works"),e(a)])])]),R,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",P,[s("How the TypeScript Parameters Type Works"),e(a)])])]),U,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",N,[s("How the TypeScript NonNullable Type Works"),e(a)])])]),E,n("blockquote",null,[n("p",null,[s("Reference: "),n("a",W,[s("How the TypeScript ReturnType Type Works"),e(a)])])]),j])}const H=p(i,[["render",J],["__file","utility-types.html.vue"]]);export{H as default};