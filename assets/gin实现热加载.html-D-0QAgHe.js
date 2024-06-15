import{_ as s,c as a,o as n,a as e}from"./app-DwZAwhNE.js";const l={},i=e(`<h1 id="gin实现热加载" tabindex="-1"><a class="header-anchor" href="#gin实现热加载"><span>gin实现热加载</span></a></h1><h3 id="一、热加载是什么" tabindex="-1"><a class="header-anchor" href="#一、热加载是什么"><span>一、热加载是什么</span></a></h3><p>热加载：当我们对代码进行修改时，程序能够自动重新加载并执行，这在我们开发中是非常便利的，可以快速进行代码测试，省去了每次手动重新编译。</p><h3 id="二、使用air进行热加载" tabindex="-1"><a class="header-anchor" href="#二、使用air进行热加载"><span>二、使用Air进行热加载</span></a></h3><p><em><code>地址：https://github.com/cosmtrek/air</code></em></p><p>具有以下特性：</p><ul><li>彩色日志输出</li><li>自定义构建或二进制命令</li><li>支持忽略子目录</li><li>启动后支持监听新目录</li><li>更好的构建过程</li></ul><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">go get <span class="token parameter variable">-u</span> github.com/cosmtrek/air</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 初始化</span></span>
<span class="line"><span class="token builtin class-name">cd</span> project  <span class="token operator">&amp;&amp;</span>  air <span class="token parameter variable">-c</span> .air.conf</span>
<span class="line"><span class="token comment"># 启动热加载</span></span>
<span class="line">air</span>
<span class="line"><span class="token comment"># 启动热加载 带打印log</span></span>
<span class="line">air <span class="token parameter variable">-d</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="air-conf-的配置文件" tabindex="-1"><a class="header-anchor" href="#air-conf-的配置文件"><span>air.conf 的配置文件</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">root <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span></span>
<span class="line">tmp_dir <span class="token operator">=</span> <span class="token string">&quot;tmp&quot;</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">[</span>build<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Just plain old shell command. You could use \`make\` as well.</span></span>
<span class="line">cmd <span class="token operator">=</span> <span class="token string">&quot;go build -o ./tmp/main .&quot;</span></span>
<span class="line"><span class="token comment"># Binary file yields from \`cmd\`.</span></span>
<span class="line">bin <span class="token operator">=</span> <span class="token string">&quot;tmp/main&quot;</span></span>
<span class="line"><span class="token comment"># Customize binary.</span></span>
<span class="line">full_bin <span class="token operator">=</span> <span class="token string">&quot;APP_ENV=dev APP_USER=air ./tmp/main&quot;</span></span>
<span class="line"><span class="token comment"># Watch these filename extensions.</span></span>
<span class="line">include_ext <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;go&quot;</span>, <span class="token string">&quot;tpl&quot;</span>, <span class="token string">&quot;tmpl&quot;</span>, <span class="token string">&quot;html&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Ignore these filename extensions or directories.</span></span>
<span class="line">exclude_dir <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;assets&quot;</span>, <span class="token string">&quot;tmp&quot;</span>, <span class="token string">&quot;vendor&quot;</span>, <span class="token string">&quot;frontend/node_modules&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Watch these directories if you specified.</span></span>
<span class="line">include_dir <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Exclude files.</span></span>
<span class="line">exclude_file <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># This log file places in your tmp_dir.</span></span>
<span class="line">log <span class="token operator">=</span> <span class="token string">&quot;air.log&quot;</span></span>
<span class="line"><span class="token comment"># It&#39;s not necessary to trigger build each time file changes if it&#39;s too frequent.</span></span>
<span class="line">delay <span class="token operator">=</span> <span class="token number">1000</span> <span class="token comment"># ms</span></span>
<span class="line"><span class="token comment"># Stop running old binary when build errors occur.</span></span>
<span class="line">stop_on_error <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token comment"># Send Interrupt signal before killing process (windows does not support this feature)</span></span>
<span class="line">send_interrupt <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token comment"># Delay after sending Interrupt signal</span></span>
<span class="line">kill_delay <span class="token operator">=</span> <span class="token number">500</span> <span class="token comment"># ms</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">[</span>log<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Show log time</span></span>
<span class="line"><span class="token function">time</span> <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">[</span>color<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Customize each part&#39;s color. If no color found, use the raw app log.</span></span>
<span class="line">main <span class="token operator">=</span> <span class="token string">&quot;magenta&quot;</span></span>
<span class="line">watcher <span class="token operator">=</span> <span class="token string">&quot;cyan&quot;</span></span>
<span class="line">build <span class="token operator">=</span> <span class="token string">&quot;yellow&quot;</span></span>
<span class="line">runner <span class="token operator">=</span> <span class="token string">&quot;green&quot;</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">[</span>misc<span class="token punctuation">]</span></span>
<span class="line"><span class="token comment"># Delete tmp directory on exit</span></span>
<span class="line">clean_on_exit <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、使用fresh进行热加载" tabindex="-1"><a class="header-anchor" href="#三、使用fresh进行热加载"><span>三、使用Fresh进行热加载</span></a></h3><p><em><code>地址：https://github.com/gravityblast/fresh</code></em></p><p>Fresh 是一个命令行工具，每次保存 Go 或模版文件时，该工具都会生成或重新启动 Web 应用程序。Fresh 将监视文件事件，并且每次创建 / 修改 / 删除文件时，Fresh 都会生成并重新启动应用程序。如果 go build 返回错误，它会将记录在 tmp 文件夹中。</p><p>安装</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">go get github.com/pilu/fresh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">cd project &amp;&amp; fresh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="四、使用bee进行热加载" tabindex="-1"><a class="header-anchor" href="#四、使用bee进行热加载"><span>四、使用bee进行热加载</span></a></h3><p><em><code>地址：https://github.com/beego/bee</code></em></p><p>bee 是 beego 框架的热编译工具，同样可以对 GIN 框架进行热编译，使用起来很方便，功能也有很多</p><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">$ go get <span class="token parameter variable">-u</span> github.com/beego/bee</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">cd</span> project <span class="token operator">&amp;&amp;</span> bee run</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="五、使用gowatch进行热加载" tabindex="-1"><a class="header-anchor" href="#五、使用gowatch进行热加载"><span>五、使用gowatch进行热加载</span></a></h3><p><em>地址：https://github.com/silenceper/gowatch</em></p><p>Go 程序热编译工具，通过监听当前目录下的相关文件变动，进行实时编译。</p><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">go get <span class="token parameter variable">-u</span> github.com/silenceper/gowatch</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p><p>安装完成后可以直接使用 gowatch 命令，命令行参数如下：</p><ul><li>-o : 非必须，指定 build 的目标文件路径</li><li>-p : 非必须，指定需要 build 的 package（也可以是单个文件）</li><li>-args: 非必须，指定程序运行时参数，例如：-args=’-host=:8080,-name=demo’</li><li>-v: 非必须，显示 gowatch 版本信息</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">$ gowatch <span class="token parameter variable">-o</span> ./bin/demo <span class="token parameter variable">-p</span> ./cmd/demo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>gowatch 可以修改配置文件<code>gowatch.yml</code></p><p>大部分情况下，不需要更改配置，直接执行<code>gowatch</code>命令就能满足的大部分的需要，但是也提供了一些配置用于自定义，在执行目录下创建<code>gowatch.yml</code>文件:，gowatch.yml 配置示例</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 当前目录执行下生成的可执行文件的名字，默认是当前目录名</span></span>
<span class="line">appname: <span class="token string">&quot;test&quot;</span></span>
<span class="line"><span class="token comment"># 指定编译后的目标文件目录</span></span>
<span class="line">output: /bin/demo</span>
<span class="line"><span class="token comment"># 需要追加监听的文件名后缀，默认只有&#39;.go&#39;文件</span></span>
<span class="line">watch_exts:</span>
<span class="line">    - .yml</span>
<span class="line"><span class="token comment"># 需要监听的目录，默认只有当前目录</span></span>
<span class="line">watch_paths:</span>
<span class="line">    - <span class="token punctuation">..</span>/pk</span>
<span class="line"><span class="token comment"># 在执行命令时，需要增加的其他参数</span></span>
<span class="line">cmd_args:</span>
<span class="line">    - <span class="token assign-left variable">arg1</span><span class="token operator">=</span>val1</span>
<span class="line"><span class="token comment"># 在构建命令时，需要增加的其他参数</span></span>
<span class="line">build_args:</span>
<span class="line">    - <span class="token parameter variable">-race</span></span>
<span class="line"><span class="token comment"># 需要增加环境变量，默认已加载当前环境变量</span></span>
<span class="line">envs:</span>
<span class="line">    - <span class="token assign-left variable">a</span><span class="token operator">=</span>b</span>
<span class="line"><span class="token comment"># 是否监听 ‘vendor’ 文件夹下的文件改变</span></span>
<span class="line">vendor_watch: <span class="token boolean">false</span></span>
<span class="line"><span class="token comment"># 不需要监听的目录名字</span></span>
<span class="line">excluded_paths:</span>
<span class="line">    - path</span>
<span class="line"><span class="token comment"># main 包路径，也可以是单个文件，多个文件使用逗号分隔</span></span>
<span class="line">build_pkg: <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token comment"># build tags</span></span>
<span class="line">build_tags: <span class="token string">&quot;&quot;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment"># 是否禁止自动运行</span></span>
<span class="line">disable_run: <span class="token boolean">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、使用-gin-进行热加载" tabindex="-1"><a class="header-anchor" href="#六、使用-gin-进行热加载"><span>六、使用 gin 进行热加载</span></a></h3><p><em><code>地址: https://github.com/codegangsta/gin</code></em></p><p><code>gin</code>是用于实时重新加载 Go Web 应用程序的简单命令行实用程序。只需<code>gin</code>在您的应用程序目录中运行，您的网络应用程序将 <code>gin</code>作为代理提供。<code>gin</code>检测到更改后，将自动重新编译您的代码。您的应用在下次收到 HTTP 请求时将重新启动。</p><p><code>gin</code> 坚持 “沉默就是黄金” 的原则，因此，只有在出现编译器错误或在错误发生后成功进行编译时，它才会抱怨。</p><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">go <span class="token function">install</span> github.com/codegangsta/gin@latest</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">gin run main.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Options:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">--laddr value, -l value       listening address for the proxy server</span>
<span class="line">--port value, -p value        port for the proxy server (default: 3000)</span>
<span class="line">--appPort value, -a value     port for the Go web server (default: 3001)</span>
<span class="line">--bin value, -b value         name of generated binary file (default: &quot;gin-bin&quot;)</span>
<span class="line">--path value, -t value        Path to watch files from (default: &quot;.&quot;)</span>
<span class="line">--build value, -d value       Path to build files from (defaults to same value as --path)</span>
<span class="line">--excludeDir value, -x value  Relative directories to exclude</span>
<span class="line">--immediate, -i               run the server immediately after it&#39;s built</span>
<span class="line">--all                         reloads whenever any file changes, as opposed to reloading only on .go file change</span>
<span class="line">--godep, -g                   use godep when building</span>
<span class="line">--buildArgs value             Additional go build arguments</span>
<span class="line">--certFile value              TLS Certificate</span>
<span class="line">--keyFile value               TLS Certificate Key</span>
<span class="line">--logPrefix value             Setup custom log prefix</span>
<span class="line">--notifications               enable desktop notifications</span>
<span class="line">--help, -h                    show help</span>
<span class="line">--version, -v                 print the version </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="七、使用-realize进行热加载" tabindex="-1"><a class="header-anchor" href="#七、使用-realize进行热加载"><span>七、使用 realize进行热加载</span></a></h3><p><em><code>地址：https://github.com/oxequa/realize</code></em></p><p>realize 是 Golang 的实时重载和任务运行器。它主要功能如下：</p><ul><li>高性能实时刷新。</li><li>同时管理多个项目。</li><li>通过自定义扩展名和路径观看。</li><li>支持所有 Go 命令。</li><li>在不同的 Go 版本之间切换。</li><li>项目的自定义环境变量。</li><li>在文件更改前后或全局执行自定义命令。</li><li>将日志和错误导出到外部文件。</li><li>分步项目初始化。</li><li>重新设计的面板，显示构建错误，控制台输出和警告。</li></ul><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">go get github.com/oxequa/realize</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 首先进行初始化</span></span>
<span class="line">realize init</span>
<span class="line"><span class="token comment"># 执行项目</span></span>
<span class="line">realize start</span>
<span class="line"><span class="token comment"># 添加命令</span></span>
<span class="line">realize <span class="token function">add</span></span>
<span class="line"><span class="token comment"># 删除命令</span></span>
<span class="line">realize init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Options:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;name&quot;</span>               -<span class="token operator">&gt;</span> Run by name on existing configuration</span>
<span class="line"><span class="token parameter variable">--path</span><span class="token operator">=</span><span class="token string">&quot;realize/server&quot;</span>     -<span class="token operator">&gt;</span> Custom Path <span class="token punctuation">(</span>if not specified takes the working directory name<span class="token punctuation">)</span></span>
<span class="line"><span class="token parameter variable">--generate</span>                  -<span class="token operator">&gt;</span> Enable go generate</span>
<span class="line"><span class="token parameter variable">--fmt</span>                       -<span class="token operator">&gt;</span> Enable go <span class="token function">fmt</span></span>
<span class="line"><span class="token parameter variable">--test</span>                      -<span class="token operator">&gt;</span> Enable go <span class="token builtin class-name">test</span></span>
<span class="line"><span class="token parameter variable">--vet</span>                       -<span class="token operator">&gt;</span> Enable go vet</span>
<span class="line"><span class="token parameter variable">--install</span>                   -<span class="token operator">&gt;</span> Enable go <span class="token function">install</span></span>
<span class="line"><span class="token parameter variable">--build</span>                     -<span class="token operator">&gt;</span> Enable go build</span>
<span class="line"><span class="token parameter variable">--run</span>                       -<span class="token operator">&gt;</span> Enable go run</span>
<span class="line"><span class="token parameter variable">--server</span>                    -<span class="token operator">&gt;</span> Enable the web server</span>
<span class="line"><span class="token parameter variable">--open</span>                      -<span class="token operator">&gt;</span> Open web ui <span class="token keyword">in</span> default browser</span>
<span class="line">--no-config                 -<span class="token operator">&gt;</span> Ignore an existing config / skip the creation of a new one</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Examples:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">realize start</span>
<span class="line">realize start <span class="token parameter variable">--path</span><span class="token operator">=</span><span class="token string">&quot;mypath&quot;</span></span>
<span class="line">realize start <span class="token parameter variable">--name</span><span class="token operator">=</span><span class="token string">&quot;realize&quot;</span> <span class="token parameter variable">--build</span></span>
<span class="line">realize start <span class="token parameter variable">--path</span><span class="token operator">=</span><span class="token string">&quot;realize&quot;</span> <span class="token parameter variable">--run</span> --no-config</span>
<span class="line">realize start <span class="token parameter variable">--install</span> <span class="token parameter variable">--test</span> <span class="token parameter variable">--fmt</span> --no-config</span>
<span class="line">realize start <span class="token parameter variable">--path</span><span class="token operator">=</span><span class="token string">&quot;/Users/username/go/src/github.com/oxequa/realize-examples/coin/&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),p=[i];function t(c,o){return n(),a("div",null,p)}const d=s(l,[["render",t],["__file","gin实现热加载.html.vue"]]),u=JSON.parse('{"path":"/note/Go/Gin/gin%E5%AE%9E%E7%8E%B0%E7%83%AD%E5%8A%A0%E8%BD%BD.html","title":"gin实现热加载","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"一、热加载是什么","slug":"一、热加载是什么","link":"#一、热加载是什么","children":[]},{"level":3,"title":"二、使用Air进行热加载","slug":"二、使用air进行热加载","link":"#二、使用air进行热加载","children":[]},{"level":3,"title":"三、使用Fresh进行热加载","slug":"三、使用fresh进行热加载","link":"#三、使用fresh进行热加载","children":[]},{"level":3,"title":"四、使用bee进行热加载","slug":"四、使用bee进行热加载","link":"#四、使用bee进行热加载","children":[]},{"level":3,"title":"五、使用gowatch进行热加载","slug":"五、使用gowatch进行热加载","link":"#五、使用gowatch进行热加载","children":[]},{"level":3,"title":"六、使用 gin 进行热加载","slug":"六、使用-gin-进行热加载","link":"#六、使用-gin-进行热加载","children":[]},{"level":3,"title":"七、使用 realize进行热加载","slug":"七、使用-realize进行热加载","link":"#七、使用-realize进行热加载","children":[]}],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Go/Gin/gin实现热加载.md"}');export{d as comp,u as data};
