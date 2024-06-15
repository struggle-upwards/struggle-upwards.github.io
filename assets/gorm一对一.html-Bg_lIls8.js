import{_ as n,c as s,o as a,a as p}from"./app-DwZAwhNE.js";const t={},l=p(`<h1 id="gorm一对一" tabindex="-1"><a class="header-anchor" href="#gorm一对一"><span>gorm一对一</span></a></h1><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">	<span class="token string">&quot;fmt&quot;</span></span>
<span class="line">	<span class="token string">&quot;gorm.io/gorm&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Cuser <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name      <span class="token builtin">string</span></span>
<span class="line">	CompanyID <span class="token builtin">int</span></span>
<span class="line">	Company   Company</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Company <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">BelongTo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token comment">//_ = DB.AutoMigrate(&amp;Cuser{}, &amp;Company{})</span></span>
<span class="line">	<span class="token comment">// 创建实例</span></span>
<span class="line">	user <span class="token operator">:=</span> Cuser<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		Company<span class="token punctuation">:</span> Company<span class="token punctuation">{</span></span>
<span class="line">			Name<span class="token punctuation">:</span> <span class="token string">&quot;Company&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 查找实例</span></span>
<span class="line">	<span class="token keyword">var</span> user1 <span class="token operator">=</span> Cuser<span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">&quot;Company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user1<span class="token punctuation">)</span></span>
<span class="line">	<span class="token function">formatPrint</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 清空一对一的关联关系</span></span>
<span class="line">	err <span class="token operator">:=</span> DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Cuser<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> user1<span class="token punctuation">.</span>ID<span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;清空关联成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 添加一对一的关联关系(需要&amp;)</span></span>
<span class="line">	err <span class="token operator">=</span> DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Cuser<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> user1<span class="token punctuation">.</span>ID<span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Company<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;绑定关联成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 替换一对一的关联关系(需要&amp;)</span></span>
<span class="line">	err <span class="token operator">=</span> DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Cuser<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> user1<span class="token punctuation">.</span>ID<span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Company<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Company<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> <span class="token number">666</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;替换关联成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 删除一对一的关联关系(不需要&amp;)</span></span>
<span class="line">	err <span class="token operator">=</span> DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Cuser<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> user1<span class="token punctuation">.</span>ID<span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Company&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span>Company<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> <span class="token number">666</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;删除关联成功&quot;</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> GirlGod <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name  <span class="token builtin">string</span></span>
<span class="line">	DogID <span class="token builtin">int</span></span>
<span class="line">	Dog   Dog</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Dog <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">	gorm<span class="token punctuation">.</span>Model</span>
<span class="line">	Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">HasOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token boolean">_</span> <span class="token operator">=</span> DB<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Dog<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>GirlGod<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">// 新建数据</span></span>
<span class="line">	d <span class="token operator">:=</span> Dog<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">&quot;舔狗1号&quot;</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	g <span class="token operator">:=</span> GirlGod<span class="token punctuation">{</span></span>
<span class="line">		Name<span class="token punctuation">:</span> <span class="token string">&quot;girl&quot;</span><span class="token punctuation">,</span></span>
<span class="line">		Dog<span class="token punctuation">:</span>  d<span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	DB<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 清空一对一关联</span></span>
<span class="line">	d1 <span class="token operator">:=</span> Dog<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">	g1 <span class="token operator">:=</span> GirlGod<span class="token punctuation">{</span></span>
<span class="line">		Model<span class="token punctuation">:</span> gorm<span class="token punctuation">.</span>Model<span class="token punctuation">{</span></span>
<span class="line">			ID<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">		<span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">	<span class="token boolean">_</span> <span class="token operator">=</span> DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Dog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">	<span class="token comment">// 新增关联</span></span>
<span class="line">	<span class="token boolean">_</span> <span class="token operator">=</span> DB<span class="token punctuation">.</span><span class="token function">Model</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Association</span><span class="token punctuation">(</span><span class="token string">&quot;Dog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Append</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>d1<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),e=[l];function c(i,o){return a(),s("div",null,e)}const k=n(t,[["render",c],["__file","gorm一对一.html.vue"]]),r=JSON.parse('{"path":"/note/Go/gorm/gorm%E4%B8%80%E5%AF%B9%E4%B8%80.html","title":"gorm一对一","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Go/gorm/gorm一对一.md"}');export{k as comp,r as data};
