import{_ as s,c as n,o as a,a as e}from"./app-DwZAwhNE.js";const p={},l=e(`<h1 id="gorm多态关联" tabindex="-1"><a class="header-anchor" href="#gorm多态关联"><span>gorm多态关联</span></a></h1><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">package</span> main</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&quot;gorm.io/gorm&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> OUser <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    gorm<span class="token punctuation">.</span>Model</span>
<span class="line">    Name    <span class="token builtin">string</span></span>
<span class="line">    Address Address <span class="token string">\`gorm:&quot;polymorphic:Address&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Order <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    gorm<span class="token punctuation">.</span>Model</span>
<span class="line">    Name    <span class="token builtin">string</span></span>
<span class="line">    Address Address <span class="token string">\`gorm:&quot;polymorphic:Address&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    ID          <span class="token builtin">int</span> <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span></span>
<span class="line">    Location    <span class="token builtin">string</span></span>
<span class="line">    AddressID   <span class="token builtin">int</span></span>
<span class="line">    AddressType <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">Polymorphic</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    DB<span class="token punctuation">.</span><span class="token function">AutoMigrate</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>OUser<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Order<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>Address<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 创建实例</span></span>
<span class="line">    <span class="token comment">//ouser := OUser{Name: &quot;pzj&quot;, Address: Address{Location: &quot;location1&quot;}}</span></span>
<span class="line">    <span class="token comment">//order := Order{Name: &quot;订单一号&quot;, Address: Address{Location: &quot;location2&quot;}}</span></span>
<span class="line">    <span class="token comment">//DB.Create(&amp;ouser)</span></span>
<span class="line">    <span class="token comment">//DB.Create(&amp;order)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 查找实例</span></span>
<span class="line">    <span class="token keyword">var</span> order Order</span>
<span class="line">    DB<span class="token punctuation">.</span><span class="token function">Preload</span><span class="token punctuation">(</span><span class="token string">&quot;Address&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Find</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>order<span class="token punctuation">,</span> <span class="token string">&quot;id = 2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">formatPrint</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function i(o,c){return a(),n("div",null,t)}const u=s(p,[["render",i],["__file","gorm多态关联.html.vue"]]),d=JSON.parse('{"path":"/note/Go/gorm/gorm%E5%A4%9A%E6%80%81%E5%85%B3%E8%81%94.html","title":"gorm多态关联","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Go/gorm/gorm多态关联.md"}');export{u as comp,d as data};
