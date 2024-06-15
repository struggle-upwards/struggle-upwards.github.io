import{_ as s,c as n,o as a,a as p}from"./app-DwZAwhNE.js";const e={},l=p(`<h1 id="go的printf占位符" tabindex="-1"><a class="header-anchor" href="#go的printf占位符"><span>go的printf占位符</span></a></h1><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="line"><span class="token operator">%</span>v    值的默认格式。</span>
<span class="line"></span>
<span class="line">默认的格式是：</span>
<span class="line"><span class="token builtin">bool</span><span class="token punctuation">:</span>                    <span class="token operator">%</span>t </span>
<span class="line"><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">int8</span> <span class="token punctuation">:</span>              <span class="token operator">%</span>d </span>
<span class="line"><span class="token builtin">uint</span><span class="token punctuation">,</span> <span class="token builtin">uint8</span> <span class="token punctuation">:</span>            <span class="token operator">%</span>d<span class="token punctuation">,</span> <span class="token operator">%</span>x <span class="token punctuation">(</span><span class="token keyword">if</span> printed with <span class="token operator">%</span>#v<span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">float32</span><span class="token punctuation">,</span> <span class="token builtin">complex64</span> <span class="token punctuation">:</span>     <span class="token operator">%</span>g</span>
<span class="line"><span class="token builtin">string</span><span class="token punctuation">:</span>                  <span class="token operator">%</span>s</span>
<span class="line"><span class="token keyword">chan</span><span class="token punctuation">:</span>                    <span class="token operator">%</span>p </span>
<span class="line">pointer<span class="token punctuation">:</span>                 <span class="token operator">%</span>p</span>
<span class="line"></span>
<span class="line"><span class="token operator">%</span><span class="token operator">+</span>v   添加字段名<span class="token punctuation">(</span>如结构体<span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">%</span>#v　 相应值的Go语法表示 </span>
<span class="line"><span class="token operator">%</span>T    相应值的类型的Go语法表示 </span>
<span class="line"><span class="token operator">%</span><span class="token operator">%</span>    字面上的百分号，并非值的占位符　</span>
<span class="line"><span class="token operator">%</span>t   <span class="token boolean">true</span> 或 <span class="token boolean">false</span></span>
<span class="line"><span class="token operator">%</span>b     二进制表示 </span>
<span class="line"><span class="token operator">%</span>c     相应Unicode码点所表示的字符 </span>
<span class="line"><span class="token operator">%</span>d     十进制表示 </span>
<span class="line"><span class="token operator">%</span>o     八进制表示 </span>
<span class="line"><span class="token operator">%</span>q     单引号围绕的字符字面值，由Go语法安全地转义 </span>
<span class="line"><span class="token operator">%</span>x     十六进制表示，字母形式为小写 a<span class="token operator">-</span>f </span>
<span class="line"><span class="token operator">%</span>X     十六进制表示，字母形式为大写 A<span class="token operator">-</span>F </span>
<span class="line"><span class="token operator">%</span>U     Unicode格式：U<span class="token operator">+</span><span class="token number">1234</span>，等同于 <span class="token string">&quot;U+%04X&quot;</span></span>
<span class="line"><span class="token operator">%</span>b     无小数部分的，指数为二的幂的科学计数法</span>
<span class="line"><span class="token operator">%</span>e     科学计数法，例如 <span class="token operator">-</span><span class="token number">1234.456e+78</span> </span>
<span class="line"><span class="token operator">%</span>E     科学计数法，例如 <span class="token operator">-</span><span class="token number">1234.456E+78</span> </span>
<span class="line"><span class="token operator">%</span>f     有小数点而无指数，例如 <span class="token number">123.456</span> </span>
<span class="line"><span class="token operator">%</span>g     根据情况选择 <span class="token operator">%</span>e 或 <span class="token operator">%</span>f 以产生更紧凑的（无末尾的<span class="token number">0</span>）输出 </span>
<span class="line"><span class="token operator">%</span>G     根据情况选择 <span class="token operator">%</span>E 或 <span class="token operator">%</span>f 以产生更紧凑的（无末尾的<span class="token number">0</span>）输出</span>
<span class="line"><span class="token operator">%</span>s     字符串或切片的无解译字节 </span>
<span class="line"><span class="token operator">%</span>q     双引号围绕的字符串，由Go语法安全地转义 </span>
<span class="line"><span class="token operator">%</span>x     十六进制，小写字母，每字节两个字符 </span>
<span class="line"><span class="token operator">%</span>X     十六进制，大写字母，每字节两个字符</span>
<span class="line"><span class="token operator">%</span>p     十六进制表示，前缀 0x <span class="token punctuation">(</span>用于指针<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">对于复合对象<span class="token punctuation">,</span>使用如下规则进行打印：</span>
<span class="line"><span class="token keyword">struct</span><span class="token punctuation">:</span>            <span class="token punctuation">{</span>field0 field1 <span class="token operator">...</span><span class="token punctuation">}</span> </span>
<span class="line">array<span class="token punctuation">,</span> slice<span class="token punctuation">:</span>      <span class="token punctuation">[</span>elem0 elem1 <span class="token operator">...</span><span class="token punctuation">]</span> </span>
<span class="line">maps<span class="token punctuation">:</span>              <span class="token keyword">map</span><span class="token punctuation">[</span>key1<span class="token punctuation">:</span>value1 key2<span class="token punctuation">:</span>value2<span class="token punctuation">]</span> </span>
<span class="line">pointer to above<span class="token punctuation">:</span>  <span class="token operator">&amp;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">宽度和精度：</span>
<span class="line">宽度是在％之后的值，如果没有指定，则使用该值的默认值，</span>
<span class="line">精度是跟在宽度之后的值，如果没有指定，也是使用要打印的值的默认精度．</span>
<span class="line"></span>
<span class="line"><span class="token operator">%</span>f<span class="token punctuation">:</span>      <span class="token keyword">default</span> width<span class="token punctuation">,</span> <span class="token keyword">default</span> precision </span>
<span class="line"><span class="token operator">%</span>9f      width <span class="token number">9</span><span class="token punctuation">,</span> <span class="token keyword">default</span> precision </span>
<span class="line"><span class="token operator">%</span><span class="token punctuation">.</span>2f     <span class="token keyword">default</span> width<span class="token punctuation">,</span> precision <span class="token number">2</span> </span>
<span class="line"><span class="token operator">%</span><span class="token number">9</span><span class="token punctuation">.</span>2f    width <span class="token number">9</span><span class="token punctuation">,</span> precision <span class="token number">2</span> </span>
<span class="line"><span class="token operator">%</span><span class="token number">9</span><span class="token punctuation">.</span>f     width <span class="token number">9</span><span class="token punctuation">,</span> precision <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">注意：</span>
<span class="line"><span class="token number">1</span>、对数值而言，宽度为该数值占用区域的最小宽度；精度为小数点之后的位数。</span>
<span class="line"><span class="token number">2</span>、但对于 <span class="token operator">%</span>g<span class="token operator">/</span><span class="token operator">%</span>G 而言，精度为所有数字的总数。</span>
<span class="line">例如，对于<span class="token number">123.45</span>，格式 <span class="token operator">%</span><span class="token number">6</span><span class="token punctuation">.</span>2f会打印<span class="token number">123.45</span>，而 <span class="token operator">%</span><span class="token punctuation">.</span>4g 会打印<span class="token number">123.5</span>。<span class="token operator">%</span>e和<span class="token operator">%</span>f的默认精度为<span class="token number">6</span>；</span>
<span class="line">但对于 <span class="token operator">%</span>g 而言，它的默认精度为确定该值所必须的最小位数。</span>
<span class="line"></span>
<span class="line">对大多数值而言：宽度为输出的最小字符数，如果必要的话会为已格式化的形式填充空格。</span>
<span class="line">对字符串而言：精度为输出的最大字符数，如果必要的话会直接截断。</span>
<span class="line"></span>
<span class="line">宽度是指<span class="token string">&quot;必要的最小宽度&quot;</span><span class="token punctuation">.</span> 若结果字符串的宽度超过指定宽度时<span class="token punctuation">,</span> 指定宽度就会失效。</span>
<span class="line"></span>
<span class="line">若将宽度指定为\`<span class="token operator">*</span>&#39;时<span class="token punctuation">,</span> 将从参数中取得宽度值，其实这个在其它语言也有类似用法</span>
<span class="line"></span>
<span class="line">其它：</span>
<span class="line"><span class="token operator">+</span>     总打印数值的正负号；对于<span class="token operator">%</span>q（<span class="token operator">%</span><span class="token operator">+</span>q）保证只输出ASCII编码的字符。 </span>
<span class="line"><span class="token operator">-</span>     左对齐 </span>
<span class="line">#     备用格式：为八进制添加前导 <span class="token number">0</span>（<span class="token operator">%</span>#o），为十六进制添加前导 0x（<span class="token operator">%</span>#x）或0X（<span class="token operator">%</span>#X），为</span>
<span class="line">      <span class="token operator">%</span>p（<span class="token operator">%</span>#p）去掉前导 0x；对于 <span class="token operator">%</span>q，若 strconv<span class="token punctuation">.</span>CanBackquote 返回 <span class="token boolean">true</span>，就会打印原始</span>
<span class="line">      （即反引号围绕的）字符串；如果是可打印字符，<span class="token operator">%</span>U（<span class="token operator">%</span>#U）会写出该字符的Unicode编码形式</span>
<span class="line">      （如字符 x 会被打印成 U<span class="token operator">+</span><span class="token number">0078</span> <span class="token char">&#39;x&#39;</span>）。 </span>
<span class="line">      </span>
<span class="line"><span class="token char">&#39; &#39;</span>   （空格）为数值中省略的正负号留出空白（<span class="token operator">%</span> d）；以十六进制（<span class="token operator">%</span> x<span class="token punctuation">,</span> <span class="token operator">%</span> X）打印字符串或</span>
<span class="line">      切片时，在字节之间用空格隔开 </span>
<span class="line"><span class="token number">0</span>     填充前导的<span class="token number">0</span>而非空格；对于数字，这会将填充移到正负号之后</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Print 函数不接受任何格式化，它等价于对每一个操作数都应用 <span class="token operator">%</span>v。</span>
<span class="line">Println 会在操作数之间插入空白，并在末尾追加一个换行符</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[l];function t(i,c){return a(),n("div",null,o)}const u=s(e,[["render",t],["__file","go的printf占位符.html.vue"]]),d=JSON.parse('{"path":"/note/Go/go%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/go%E7%9A%84printf%E5%8D%A0%E4%BD%8D%E7%AC%A6.html","title":"go的printf占位符","lang":"zh-CN","frontmatter":{},"headers":[],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Go/go基础知识/go的printf占位符.md"}');export{u as comp,d as data};
