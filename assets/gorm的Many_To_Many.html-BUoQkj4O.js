import{_ as n,c as s,o as a,a as e}from"./app-DwZAwhNE.js";const l={},i=e(`<h1 id="gorm的many-to-many" tabindex="-1"><a class="header-anchor" href="#gorm的many-to-many"><span>gorm的Many To Many</span></a></h1><h2 id="many-to-many" tabindex="-1"><a class="header-anchor" href="#many-to-many"><span>Many To Many</span></a></h2><p>Many to Many 会在两个 model 中添加一张连接表。</p><p>例如，您的应用包含了 user 和 language，且一个 user 可以说多种 language，多个 user 也可以说一种 language。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token comment">// User 拥有并属于多种 language，\`user_languages\` 是连接表</span></span>
<span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">  Languages <span class="token punctuation">[</span><span class="token punctuation">]</span>Language <span class="token string">\`gorm:&quot;many2many:user_languages;&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Language <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">  Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当使用 GORM 的 <code>AutoMigrate</code> 为 <code>User</code> 创建表时，GORM 会自动创建连接表</p><h2 id="反向引用" tabindex="-1"><a class="header-anchor" href="#反向引用"><span>反向引用</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token comment">// User 拥有并属于多种 language，\`user_languages\` 是连接表</span></span>
<span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">  Languages <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>Language <span class="token string">\`gorm:&quot;many2many:user_languages;&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Language <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">  Name <span class="token builtin">string</span></span>
<span class="line">  Users <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>User <span class="token string">\`gorm:&quot;many2many:user_languages;&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="重写外键" tabindex="-1"><a class="header-anchor" href="#重写外键"><span>重写外键</span></a></h2><p>对于 <code>many2many</code> 关系，连接表会同时拥有两个模型的外键，例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">  Languages <span class="token punctuation">[</span><span class="token punctuation">]</span>Language <span class="token string">\`gorm:&quot;many2many:user_languages;&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Language <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">  Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Join Table: user_languages</span></span>
<span class="line"><span class="token comment">//   foreign key: user_id, reference: users.id</span></span>
<span class="line"><span class="token comment">//   foreign key: language_id, reference: languages.id</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若要重写它们，可以使用标签 <code>foreignKey</code>、<code>references</code>、<code>joinforeignKey</code>、<code>joinReferences</code>。当然，您不需要使用全部的标签，你可以仅使用其中的一个重写部分的外键、引用。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    gorm<span class="token punctuation">.</span>Model</span>
<span class="line">    Profiles <span class="token punctuation">[</span><span class="token punctuation">]</span>Profile <span class="token string">\`gorm:&quot;many2many:user_profiles;foreignKey:Refer;joinForeignKey:UserReferID;References:UserRefer;joinReferences:ProfileRefer&quot;\`</span></span>
<span class="line">    Refer    <span class="token builtin">uint</span>      <span class="token string">\`gorm:&quot;index:,unique&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Profile <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">    gorm<span class="token punctuation">.</span>Model</span>
<span class="line">    Name      <span class="token builtin">string</span></span>
<span class="line">    UserRefer <span class="token builtin">uint</span> <span class="token string">\`gorm:&quot;index:,unique&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 这会创建连接表：user_profiles</span></span>
<span class="line"><span class="token comment">//   外键: user_refer_id, 引用: users.refer</span></span>
<span class="line"><span class="token comment">//   外键: profile_refer, 引用: profiles.user_refer</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：</strong> 某些数据库只允许在唯一索引字段上创建外键，如果您在迁移时会创建外键，则需要指定 <code>unique index</code> 标签。</p></blockquote><h2 id="自引用-many2many" tabindex="-1"><a class="header-anchor" href="#自引用-many2many"><span>自引用 Many2Many</span></a></h2><p>自引用 many2many 关系</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">    Friends <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>User <span class="token string">\`gorm:&quot;many2many:user_friends&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 会创建连接表：user_friends</span></span>
<span class="line"><span class="token comment">//   foreign key: user_id, reference: users.id</span></span>
<span class="line"><span class="token comment">//   foreign key: friend_id, reference: users.id</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="预加载" tabindex="-1"><a class="header-anchor" href="#预加载"><span>预加载</span></a></h2><p>GORM 可以通过 <code>Preload</code> 预加载 has many 关联的记录，查看 <a href="https://gorm.io/zh_CN/docs/preload.html" target="_blank" rel="noopener noreferrer">预加载</a> 获取详情</p><h2 id="many2many-的-curd" tabindex="-1"><a class="header-anchor" href="#many2many-的-curd"><span>Many2Many 的 CURD</span></a></h2><p>查看 <a href="https://gorm.io/zh_CN/docs/associations.html#Association-Mode" target="_blank" rel="noopener noreferrer">关联模式</a> 获取 many2many 相关的用法</p><h2 id="自定义连接表" tabindex="-1"><a class="header-anchor" href="#自定义连接表"><span>自定义连接表</span></a></h2><p><code>连接表</code> 可以是一个全功能的模型，支持 <code>Soft Delete</code>、<code>钩子</code>、定义更多的字段，就跟其它模型一样。您可以通过 <code>SetupJoinTable</code> 指定它，例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">type</span> Person <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  ID        <span class="token builtin">int</span></span>
<span class="line">  Name      <span class="token builtin">string</span></span>
<span class="line">  Addresses <span class="token punctuation">[</span><span class="token punctuation">]</span>Address <span class="token string">\`gorm:&quot;many2many:person_addresses;&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Address <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  ID   <span class="token builtin">uint</span></span>
<span class="line">  Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> PersonAddress <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  PersonID  <span class="token builtin">int</span></span>
<span class="line">  AddressID <span class="token builtin">int</span></span>
<span class="line">  CreatedAt time<span class="token punctuation">.</span>Time</span>
<span class="line">  DeletedAt gorm<span class="token punctuation">.</span>DeletedAt</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>PersonAddress<span class="token punctuation">)</span> <span class="token function">BeforeCreate</span><span class="token punctuation">(</span>db <span class="token operator">*</span>gorm<span class="token punctuation">.</span>DB<span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 修改 Person 的 Addresses 字段的连接表为 PersonAddress</span></span>
<span class="line"><span class="token comment">// PersonAddress 必须定义好所需的外键，否则会报错</span></span>
<span class="line">err <span class="token operator">:=</span> db<span class="token punctuation">.</span><span class="token function">SetupJoinTable</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>Person<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;Addresses&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>PersonAddress<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束"><span>外键约束</span></a></h2><p>你可以通过为标签 <code>constraint</code> 配置 <code>OnUpdate</code>、<code>OnDelete</code> 实现外键约束，在使用 GORM 进行迁移时它会被创建，例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  gorm<span class="token punctuation">.</span>Model</span>
<span class="line">  Languages <span class="token punctuation">[</span><span class="token punctuation">]</span>Language <span class="token string">\`gorm:&quot;many2many:user_speaks;&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Language <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  Code <span class="token builtin">string</span> <span class="token string">\`gorm:&quot;primarykey&quot;\`</span></span>
<span class="line">  Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// CREATE TABLE \`user_speaks\` (\`user_id\` integer,\`language_code\` text,PRIMARY KEY (\`user_id\`,\`language_code\`),CONSTRAINT \`fk_user_speaks_user\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE SET NULL ON UPDATE CASCADE,CONSTRAINT \`fk_user_speaks_language\` FOREIGN KEY (\`language_code\`) REFERENCES \`languages\`(\`code\`) ON DELETE SET NULL ON UPDATE CASCADE);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以在删除记录时通过 <code>Select</code> 来删除 many2many 关系的记录，查看 <a href="https://gorm.io/zh_CN/docs/associations.html#delete_with_select" target="_blank" rel="noopener noreferrer">Delete with Select</a> 获取详情</p><h2 id="复合外键" tabindex="-1"><a class="header-anchor" href="#复合外键"><span>复合外键</span></a></h2><p>如果您的模型使用了 <a href="https://gorm.io/zh_CN/docs/composite_primary_key.html" target="_blank" rel="noopener noreferrer">复合主键</a>，GORM 会默认启用复合外键。</p><p>您也可以覆盖默认的外键、指定多个外键，只需用逗号分隔那些键名，例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token keyword">type</span> Tag <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  ID     <span class="token builtin">uint</span>   <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span></span>
<span class="line">  Locale <span class="token builtin">string</span> <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span></span>
<span class="line">  Value  <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> Blog <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  ID         <span class="token builtin">uint</span>   <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span></span>
<span class="line">  Locale     <span class="token builtin">string</span> <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span></span>
<span class="line">  Subject    <span class="token builtin">string</span></span>
<span class="line">  Body       <span class="token builtin">string</span></span>
<span class="line">  Tags       <span class="token punctuation">[</span><span class="token punctuation">]</span>Tag <span class="token string">\`gorm:&quot;many2many:blog_tags;&quot;\`</span></span>
<span class="line">  LocaleTags <span class="token punctuation">[</span><span class="token punctuation">]</span>Tag <span class="token string">\`gorm:&quot;many2many:locale_blog_tags;ForeignKey:id,locale;References:id&quot;\`</span></span>
<span class="line">  SharedTags <span class="token punctuation">[</span><span class="token punctuation">]</span>Tag <span class="token string">\`gorm:&quot;many2many:shared_blog_tags;ForeignKey:id;References:id&quot;\`</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 连接表：blog_tags</span></span>
<span class="line"><span class="token comment">//   foreign key: blog_id, reference: blogs.id</span></span>
<span class="line"><span class="token comment">//   foreign key: blog_locale, reference: blogs.locale</span></span>
<span class="line"><span class="token comment">//   foreign key: tag_id, reference: tags.id</span></span>
<span class="line"><span class="token comment">//   foreign key: tag_locale, reference: tags.locale</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 连接表：locale_blog_tags</span></span>
<span class="line"><span class="token comment">//   foreign key: blog_id, reference: blogs.id</span></span>
<span class="line"><span class="token comment">//   foreign key: blog_locale, reference: blogs.locale</span></span>
<span class="line"><span class="token comment">//   foreign key: tag_id, reference: tags.id</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 连接表：shared_blog_tags</span></span>
<span class="line"><span class="token comment">//   foreign key: blog_id, reference: blogs.id</span></span>
<span class="line"><span class="token comment">//   foreign key: tag_id, reference: tags.id</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),p=[i];function c(t,o){return a(),s("div",null,p)}const d=n(l,[["render",c],["__file","gorm的Many_To_Many.html.vue"]]),u=JSON.parse('{"path":"/note/Go/gorm/gorm%E7%9A%84Many_To_Many.html","title":"gorm的Many To Many","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Many To Many","slug":"many-to-many","link":"#many-to-many","children":[]},{"level":2,"title":"反向引用","slug":"反向引用","link":"#反向引用","children":[]},{"level":2,"title":"重写外键","slug":"重写外键","link":"#重写外键","children":[]},{"level":2,"title":"自引用 Many2Many","slug":"自引用-many2many","link":"#自引用-many2many","children":[]},{"level":2,"title":"预加载","slug":"预加载","link":"#预加载","children":[]},{"level":2,"title":"Many2Many 的 CURD","slug":"many2many-的-curd","link":"#many2many-的-curd","children":[]},{"level":2,"title":"自定义连接表","slug":"自定义连接表","link":"#自定义连接表","children":[]},{"level":2,"title":"外键约束","slug":"外键约束","link":"#外键约束","children":[]},{"level":2,"title":"复合外键","slug":"复合外键","link":"#复合外键","children":[]}],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Go/gorm/gorm的Many_To_Many.md"}');export{d as comp,u as data};
