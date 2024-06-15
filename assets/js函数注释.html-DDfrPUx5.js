import{_ as n,c as s,o as a,a as e}from"./app-DwZAwhNE.js";const p={},l=e(`<h1 id="js函数注释" tabindex="-1"><a class="header-anchor" href="#js函数注释"><span>js函数注释</span></a></h1><table><thead><tr><th>常用符号</th><th>说明</th><th>用法</th></tr></thead><tbody><tr><td>@param</td><td>参数</td><td>@param {type} name</td></tr><tr><td>@return</td><td>返回值</td><td>@return</td></tr></tbody></table><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 测试</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Enqueue a callback that will be executed after all the pending updates</span>
<span class="line"> * have processed.</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ReactClass<span class="token punctuation">}</span></span> <span class="token parameter">publicInstance</span> The instance to use as \`this\` context.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">?</span><span class="token keyword">function</span><span class="token punctuation">}</span></span> <span class="token parameter">callback</span> Called after state is updated.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">callerName</span> Name of the calling function in the public API.</span>
<span class="line"> * <span class="token keyword">@internal</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token function-variable function">enqueueCallback</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">publicInstance<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> callerName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  ReactUpdateQueue<span class="token punctuation">.</span><span class="token function">validateCallback</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> callerName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">var</span> internalInstance <span class="token operator">=</span> <span class="token function">getInternalInstanceReadyForUpdate</span><span class="token punctuation">(</span>publicInstance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Checks whether or not this composite component is mounted.</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ReactClass<span class="token punctuation">}</span></span> <span class="token parameter">publicInstance</span> The instance we want to test.</span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> True if mounted, false otherwise.</span>
<span class="line"> * <span class="token keyword">@protected</span></span>
<span class="line"> * <span class="token keyword">@final</span></span>
<span class="line"> */</span></span>
<span class="line"><span class="token function-variable function">isMounted</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">publicInstance</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * Generates root tag markup then recurses. This method has side effects and</span>
<span class="line"> * is not idempotent.</span>
<span class="line"> *</span>
<span class="line"> * <span class="token keyword">@internal</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ReactReconcileTransaction<span class="token operator">|</span>ReactServerRenderingTransaction<span class="token punctuation">}</span></span> <span class="token parameter">transaction</span></span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">?</span>ReactDOMComponent<span class="token punctuation">}</span></span> <span class="token parameter">the</span> containing DOM component instance</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">?</span>object<span class="token punctuation">}</span></span> <span class="token parameter">info</span> about the native container</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">context</span></span>
<span class="line"> * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> The computed markup.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token function-variable function">mountComponent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token parameter">transaction<span class="token punctuation">,</span></span>
<span class="line">  nativeParent<span class="token punctuation">,</span></span>
<span class="line">  nativeContainerInfo<span class="token punctuation">,</span></span>
<span class="line">  context</span></span>
<span class="line"><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_rootNodeID <span class="token operator">=</span> globalIdCounter<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_domID <span class="token operator">=</span> nativeContainerInfo<span class="token punctuation">.</span>_idCounter<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_nativeParent <span class="token operator">=</span> nativeParent<span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_nativeContainerInfo <span class="token operator">=</span> nativeContainerInfo<span class="token punctuation">;</span></span>
<span class="line">  <span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line">其他</span>
<span class="line">@api<span class="token operator">:</span> 提供给第三方使用的接口</span>
<span class="line">@author<span class="token operator">:</span> 标明作者</span>
<span class="line">@param<span class="token operator">:</span> 参数</span>
<span class="line">@<span class="token keyword">return</span><span class="token operator">:</span> 返回值</span>
<span class="line">@todo<span class="token operator">:</span> 待办</span>
<span class="line">@version<span class="token operator">:</span> 版本号</span>
<span class="line">@inheritdoc<span class="token operator">:</span> 文档继承</span>
<span class="line">@property<span class="token operator">:</span> 类属性</span>
<span class="line">@property<span class="token operator">-</span>read<span class="token operator">:</span> 只读属性</span>
<span class="line">@property<span class="token operator">-</span>write<span class="token operator">:</span> 只写属性</span>
<span class="line">@<span class="token keyword">const</span><span class="token operator">:</span> 常量</span>
<span class="line">@deprecated<span class="token operator">:</span> 过期方法</span>
<span class="line">@example<span class="token operator">:</span> 示例</span>
<span class="line">@final<span class="token operator">:</span> 标识类是终态<span class="token punctuation">,</span> 禁止派生</span>
<span class="line">@global<span class="token operator">:</span> 指明引用的全局变量</span>
<span class="line">@<span class="token keyword">static</span><span class="token operator">:</span> 标识类、方法、属性是静态的</span>
<span class="line">@ignore<span class="token operator">:</span> 忽略</span>
<span class="line">@internal<span class="token operator">:</span> 限内部使用</span>
<span class="line">@license<span class="token operator">:</span> 协议</span>
<span class="line">@link<span class="token operator">:</span> 链接<span class="token punctuation">,</span>引用文档等</span>
<span class="line">@see<span class="token operator">:</span> 与 link 类似<span class="token punctuation">,</span> 可以访问内部方法或类</span>
<span class="line">@method<span class="token operator">:</span> 方法</span>
<span class="line">@<span class="token keyword">package</span><span class="token operator">:</span> 命名空间</span>
<span class="line">@since<span class="token operator">:</span> 从指定版本开始的变动</span>
<span class="line">@throws<span class="token operator">:</span> 抛出异常</span>
<span class="line">@uses<span class="token operator">:</span> 使用</span>
<span class="line">@<span class="token keyword">var</span><span class="token operator">:</span> 变量</span>
<span class="line">@copyright<span class="token operator">:</span> 版权声明</span>
<span class="line"><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),t=[l];function c(i,o){return a(),s("div",null,t)}const u=n(p,[["render",c],["__file","js函数注释.html.vue"]]),d=JSON.parse('{"path":"/note/Vue/js/js%E5%87%BD%E6%95%B0%E6%B3%A8%E9%87%8A.html","title":"js函数注释","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Vue/js/js函数注释.md"}');export{u as comp,d as data};
