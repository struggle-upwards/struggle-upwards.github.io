import{_ as n,c as s,o as a,a as e}from"./app-DwZAwhNE.js";const c={},t=e(`<h2 id="docker常用命令" tabindex="-1"><a class="header-anchor" href="#docker常用命令"><span>docker常用命令</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment">#info|version</span></span>
<span class="line"><span class="token function">docker</span> info       <span class="token comment">#显示docker的系统信息，包括镜像和容器的数量</span></span>
<span class="line"><span class="token function">docker</span> version    <span class="token comment">#显示docker的版本信息。</span></span>
<span class="line"><span class="token comment">#帮助命令</span></span>
<span class="line"><span class="token function">docker</span> 命令 <span class="token parameter variable">--help</span> <span class="token comment">#帮助命令</span></span>
<span class="line"><span class="token comment">#镜像命令</span></span>
<span class="line"><span class="token function">docker</span> images <span class="token comment">#查看所有本地主机上的镜像 可以使用docker image ls代替</span></span>
<span class="line"><span class="token function">docker</span> search <span class="token comment">#搜索镜像</span></span>
<span class="line"><span class="token function">docker</span> pull <span class="token comment">#下载镜像 docker image pull</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token comment">#删除镜像 docker image rm</span></span>
<span class="line"><span class="token comment">#容器命令</span></span>
<span class="line"><span class="token function">docker</span> run 镜像id <span class="token comment">#新建容器并启动</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> 列出所有运行的容器 <span class="token function">docker</span> container list</span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> 容器id <span class="token comment">#删除指定容器</span></span>
<span class="line"><span class="token comment">#删除所有容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>  	 <span class="token comment">#删除所有的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> -q<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>  <span class="token comment">#删除所有的容器</span></span>
<span class="line"><span class="token comment">#启动和停止容器</span></span>
<span class="line"><span class="token function">docker</span> start 容器id	<span class="token comment">#启动容器</span></span>
<span class="line"><span class="token function">docker</span> restart 容器id	<span class="token comment">#重启容器</span></span>
<span class="line"><span class="token function">docker</span> stop 容器id	<span class="token comment">#停止当前正在运行的容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">kill</span> 容器id	<span class="token comment">#强制停止当前容器</span></span>
<span class="line"><span class="token comment">#退出容器</span></span>
<span class="line"><span class="token builtin class-name">exit</span> 		<span class="token comment">#容器直接退出</span></span>
<span class="line">ctrl +P +Q  <span class="token comment">#容器不停止退出 	---注意：这个很有用的操作</span></span>
<span class="line"><span class="token comment">#其他常用命令</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> 镜像名  <span class="token comment">#后台启动命令</span></span>
<span class="line"><span class="token function">docker</span> logs 		<span class="token comment">#查看日志</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">top</span> 容器id 	<span class="token comment">#查看容器中进程信息ps</span></span>
<span class="line"><span class="token function">docker</span> inspect 容器id  <span class="token comment">#查看镜像的元数据</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 899c718ac4fe<span class="token punctuation">(</span>容器id<span class="token punctuation">)</span> /bin/bash  <span class="token comment">#进入当前容器后开启一个新的终端，可以在里面操作。（常用）</span></span>
<span class="line"><span class="token function">docker</span> attach 		<span class="token comment"># 进入容器正在执行的终端</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">cp</span> 容器id:容器内路径  主机目的路径	<span class="token comment">#从容器内拷贝到主机上</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker命令大全" tabindex="-1"><a class="header-anchor" href="#docker命令大全"><span>docker命令大全</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> attach	<span class="token comment">#连接到正在运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> build	<span class="token comment">#使用 Dockerfile 创建镜像</span></span>
<span class="line"><span class="token function">docker</span> builder	<span class="token comment">#管理builds</span></span>
<span class="line"><span class="token function">docker</span> builder prune	<span class="token comment">#清除build缓存</span></span>
<span class="line"><span class="token function">docker</span> checkpoint	<span class="token comment">#管理checkpoints</span></span>
<span class="line"><span class="token function">docker</span> checkpoint create	<span class="token comment">#从正在运行的容器创建检查点</span></span>
<span class="line"><span class="token function">docker</span> checkpoint <span class="token function">ls</span>	<span class="token comment">#列出容器的检查点</span></span>
<span class="line"><span class="token function">docker</span> checkpoint <span class="token function">rm</span>	<span class="token comment">#删除指定的检查点</span></span>
<span class="line"><span class="token function">docker</span> commit	<span class="token comment">#从容器创建一个新的镜像</span></span>
<span class="line"><span class="token function">docker</span> config	<span class="token comment">#管理Docker配置</span></span>
<span class="line"><span class="token function">docker</span> config create	<span class="token comment">#创建配置文件</span></span>
<span class="line"><span class="token function">docker</span> config inspect	<span class="token comment">#查看配置文件信息</span></span>
<span class="line"><span class="token function">docker</span> config <span class="token function">ls</span>		<span class="token comment">#显示docker里已经保存得配置文件</span></span>
<span class="line"><span class="token function">docker</span> config <span class="token function">rm</span>		<span class="token comment">#删除配置文件</span></span>
<span class="line"><span class="token function">docker</span> container	<span class="token comment">#管理容器</span></span>
<span class="line"><span class="token function">docker</span> container prune	<span class="token comment">#删除所有已停止的容器</span></span>
<span class="line"><span class="token function">docker</span> context	<span class="token comment">#管理contexts</span></span>
<span class="line"><span class="token function">docker</span> context create	<span class="token comment">#创建一个上下文</span></span>
<span class="line"><span class="token function">docker</span> context <span class="token builtin class-name">export</span>	<span class="token comment">#将上下文导出到tar或kubecconfig文件中</span></span>
<span class="line"><span class="token function">docker</span> context <span class="token function">import</span>	<span class="token comment">#从tar或zip文件导入上下文</span></span>
<span class="line"><span class="token function">docker</span> context inspect	<span class="token comment">#在一个或多个上下文上显示详细信息</span></span>
<span class="line"><span class="token function">docker</span> context <span class="token function">ls</span>		<span class="token comment">#列出上下文</span></span>
<span class="line"><span class="token function">docker</span> context <span class="token function">rm</span>		<span class="token comment">#删除一个或多个上下文</span></span>
<span class="line"><span class="token function">docker</span> context update	<span class="token comment">#更新</span></span>
<span class="line"><span class="token function">docker</span> context use		<span class="token comment">#设置当前docker的上下文</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">cp</span>		<span class="token comment">#用于容器与主机之间的数据拷贝</span></span>
<span class="line"><span class="token function">docker</span> create	<span class="token comment">#创建一个新的容器但不启动它</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">diff</span>		<span class="token comment">#检查容器里文件结构的更改</span></span>
<span class="line"><span class="token function">docker</span> events	<span class="token comment">#从服务器获取实时事件</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span>		<span class="token comment">#在运行的容器中执行命令</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">export</span>	<span class="token comment">#将文件系统作为一个tar归档文件导出到STDOUT</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">history</span>	<span class="token comment">#查看指定镜像的创建历史</span></span>
<span class="line"><span class="token function">docker</span> image	<span class="token comment">#管理镜像</span></span>
<span class="line"><span class="token function">docker</span> image inspect	<span class="token comment">#显示一个或多个镜像的元数据</span></span>
<span class="line"><span class="token function">docker</span> image <span class="token function">ls</span>			<span class="token comment">#列出本地镜像</span></span>
<span class="line"><span class="token function">docker</span> image prune		<span class="token comment">#删除没有使用的镜像</span></span>
<span class="line"><span class="token function">docker</span> image <span class="token function">rm</span>			<span class="token comment">#删除一个或多个镜像</span></span>
<span class="line"><span class="token function">docker</span> images	<span class="token comment">#列出本地镜像</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">import</span>	<span class="token comment">#从归档文件中创建镜像</span></span>
<span class="line"><span class="token function">docker</span> info		<span class="token comment">#显示 Docker 系统信息，包括镜像和容器数</span></span>
<span class="line"><span class="token function">docker</span> inspect	<span class="token comment">#获取容器/镜像的元数据</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">kill</span>		<span class="token comment">#杀掉一个运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> load		<span class="token comment">#导入使用 docker save 命令导出的镜像</span></span>
<span class="line"><span class="token function">docker</span> login	<span class="token comment">#登陆到一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">logout</span>	<span class="token comment">#登出一个Docker镜像仓库，如果未指定镜像仓库地址，默认为官方仓库 Docker Hub</span></span>
<span class="line"><span class="token function">docker</span> logs		<span class="token comment">#获取容器的日志</span></span>
<span class="line"><span class="token function">docker</span> manifest	<span class="token comment">#管理manifest(实验，不应用于生产环境)</span></span>
<span class="line"><span class="token function">docker</span> manifest annotate	<span class="token comment">#向本地镜像清单添加附加信息</span></span>
<span class="line"><span class="token function">docker</span> manifest create		<span class="token comment">#创建用于注释和推入注册表的本地清单列表</span></span>
<span class="line"><span class="token function">docker</span> manifest inspect		<span class="token comment">#显示镜像清单或清单列表</span></span>
<span class="line"><span class="token function">docker</span> manifest push		<span class="token comment">#将清单列表推入仓库</span></span>
<span class="line"><span class="token function">docker</span> manifest <span class="token function">rm</span>			<span class="token comment">#从本地存储中删除一个或多个清单列表</span></span>
<span class="line"><span class="token function">docker</span> network	<span class="token comment">#管理网络</span></span>
<span class="line"><span class="token function">docker</span> network connect		<span class="token comment">#将容器连接到网络</span></span>
<span class="line"><span class="token function">docker</span> network create		<span class="token comment">#创建一个网络</span></span>
<span class="line"><span class="token function">docker</span> network disconnect	<span class="token comment">#断开容器的网络</span></span>
<span class="line"><span class="token function">docker</span> network inspect		<span class="token comment">#显示一个或多个网络的元数据</span></span>
<span class="line"><span class="token function">docker</span> network <span class="token function">ls</span>			<span class="token comment">#列出网络</span></span>
<span class="line"><span class="token function">docker</span> network prune		<span class="token comment">#删除所有没有使用的网络</span></span>
<span class="line"><span class="token function">docker</span> network <span class="token function">rm</span>			<span class="token comment">#删除一个或多个网络</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span>		<span class="token comment">#管理集群(swarm)节点</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span> demote			<span class="token comment">#从群集(swarm)管理器中降级一个或多个节点</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span> inspect			<span class="token comment">#显示一个或多个节点的元数据</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span> <span class="token function">ls</span>				<span class="token comment">#列出群集(swarm)中的节点</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span> promote			<span class="token comment">#将一个或多个节点推入到群集管理器中</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span> <span class="token function">ps</span>				<span class="token comment">#列出在一个或多个节点上运行的任务，默认为当前节点</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span> <span class="token function">rm</span>				<span class="token comment">#从群集(swarm)删除一个或多个节点</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">node</span> update			<span class="token comment">#更新一个节点</span></span>
<span class="line"><span class="token function">docker</span> pause	<span class="token comment">#暂停容器中所有的进程</span></span>
<span class="line"><span class="token function">docker</span> plugin	<span class="token comment">#管理插件</span></span>
<span class="line"><span class="token function">docker</span> plugin create		<span class="token comment">#从rootfs和配置创建一个插件。插件数据目录必须包含config.json和rootfs目录。</span></span>
<span class="line"><span class="token function">docker</span> plugin disable		<span class="token comment">#禁用插件</span></span>
<span class="line"><span class="token function">docker</span> plugin <span class="token builtin class-name">enable</span>		<span class="token comment">#启用插件</span></span>
<span class="line"><span class="token function">docker</span> plugin inspect		<span class="token comment">#显示一个或多个插件的元数据</span></span>
<span class="line"><span class="token function">docker</span> plugin <span class="token function">install</span>		<span class="token comment">#安装一个插件</span></span>
<span class="line"><span class="token function">docker</span> plugin <span class="token function">ls</span>			<span class="token comment">#列出所有插件</span></span>
<span class="line"><span class="token function">docker</span> plugin push			<span class="token comment">#将插件推送到注册表</span></span>
<span class="line"><span class="token function">docker</span> plugin <span class="token function">rm</span>			<span class="token comment">#删除一个或多个插件</span></span>
<span class="line"><span class="token function">docker</span> plugin <span class="token builtin class-name">set</span>			<span class="token comment">#更改插件的设置</span></span>
<span class="line"><span class="token function">docker</span> plugin upgrade		<span class="token comment">#升级现有插件</span></span>
<span class="line"><span class="token function">docker</span> port		<span class="token comment">#列出指定的容器的端口映射，或者查找将PRIVATE_PORT NAT到面向公众的端口</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">ps</span>		<span class="token comment">#列出容器</span></span>
<span class="line"><span class="token function">docker</span> pull		<span class="token comment">#从镜像仓库中拉取或者更新指定镜像</span></span>
<span class="line"><span class="token function">docker</span> push		<span class="token comment">#将本地的镜像上传到镜像仓库,要先登陆到镜像仓库</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rename</span>	<span class="token comment">#重命名容器</span></span>
<span class="line"><span class="token function">docker</span> restart	<span class="token comment">#重启容器</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">rm</span>		<span class="token comment">#删除一个或多个容器</span></span>
<span class="line"><span class="token function">docker</span> rmi		<span class="token comment">#删除一个或多个镜像</span></span>
<span class="line"><span class="token function">docker</span> run		<span class="token comment">#创建一个新的容器并运行一个命令</span></span>
<span class="line"><span class="token function">docker</span> save		<span class="token comment">#将指定镜像保存成 tar 归档文件</span></span>
<span class="line"><span class="token function">docker</span> search	<span class="token comment">#从Docker Hub查找镜像</span></span>
<span class="line"><span class="token function">docker</span> secret	<span class="token comment">#管理Docker secrets</span></span>
<span class="line"><span class="token function">docker</span> secret create	<span class="token comment">#从文件或STDIN创建一个秘密作为内容</span></span>
<span class="line"><span class="token function">docker</span> secret inspect	<span class="token comment">#显示有关一个或多个秘密的详细信息</span></span>
<span class="line"><span class="token function">docker</span> secret <span class="token function">ls</span>		<span class="token comment">#列出秘密</span></span>
<span class="line"><span class="token function">docker</span> secret <span class="token function">rm</span>		<span class="token comment">#删除一个或多个秘密</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span>	<span class="token comment">#管理服务</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> create	<span class="token comment">#创建一个服务</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> inspect	<span class="token comment">#查看服务的元数据</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> logs		<span class="token comment">#获取服务的日志</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ls</span>		<span class="token comment">#列出服务</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ps</span>		<span class="token comment">#列出一个或多个服务的任务</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> <span class="token function">rm</span>		<span class="token comment">#删除一个或多个服务</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> rollback	<span class="token comment">#将更改恢复到服务的配置</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> scale	<span class="token comment">#缩放一个或多个复制服务</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">service</span> update	<span class="token comment">#更新服务</span></span>
<span class="line"><span class="token function">docker</span> stack	<span class="token comment">#管理堆栈</span></span>
<span class="line"><span class="token function">docker</span> stack deploy		<span class="token comment">#部署新的堆栈或更新现有堆栈</span></span>
<span class="line"><span class="token function">docker</span> stack <span class="token function">ls</span>			<span class="token comment">#列出现有堆栈</span></span>
<span class="line"><span class="token function">docker</span> stack <span class="token function">ps</span>			<span class="token comment">#列出堆栈中的任务</span></span>
<span class="line"><span class="token function">docker</span> stack <span class="token function">rm</span>			<span class="token comment">#删除堆栈	</span></span>
<span class="line"><span class="token function">docker</span> stack services	<span class="token comment">#列出堆栈中的服务</span></span>
<span class="line"><span class="token function">docker</span> start	<span class="token comment">#启动一个或多个已经被停止的容器</span></span>
<span class="line"><span class="token function">docker</span> stats	<span class="token comment">#显示容器的实时流资源使用统计信息</span></span>
<span class="line"><span class="token function">docker</span> stop		<span class="token comment">#停止一个运行中的容器</span></span>
<span class="line"><span class="token function">docker</span> swarm	<span class="token comment">#管理集群(Swarm)</span></span>
<span class="line"><span class="token function">docker</span> swarm ca			<span class="token comment">#查看或旋转当前群集CA证书。此命令必须针对管理器节点</span></span>
<span class="line"><span class="token function">docker</span> swarm init		<span class="token comment">#初始化一个群集(Swarm)</span></span>
<span class="line"><span class="token function">docker</span> swarm <span class="token function">join</span>		<span class="token comment">#加入群集作为节点和/或管理器</span></span>
<span class="line"><span class="token function">docker</span> swarm join-token	<span class="token comment">#管理加入令牌</span></span>
<span class="line"><span class="token function">docker</span> swarm leave		<span class="token comment">#离开群集(Swarm)</span></span>
<span class="line"><span class="token function">docker</span> swarm unlock		<span class="token comment">#解锁群集(Swarm)</span></span>
<span class="line"><span class="token function">docker</span> swarm unlock-key	<span class="token comment">#管理解锁钥匙</span></span>
<span class="line"><span class="token function">docker</span> swarm update		<span class="token comment">#更新群集(Swarm)</span></span>
<span class="line"><span class="token function">docker</span> system	<span class="token comment">#管理Docker</span></span>
<span class="line"><span class="token function">docker</span> system <span class="token function">df</span>		<span class="token comment">#显示docker磁盘使用情况</span></span>
<span class="line"><span class="token function">docker</span> system events	<span class="token comment">#从服务器获取实时事件</span></span>
<span class="line"><span class="token function">docker</span> system info		<span class="token comment">#显示系统范围的信息</span></span>
<span class="line"><span class="token function">docker</span> system prune		<span class="token comment">#删除未使用的数据</span></span>
<span class="line"><span class="token function">docker</span> tag		<span class="token comment">#标记本地镜像，将其归入某一仓库</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">top</span>		<span class="token comment">#查看容器中运行的进程信息，支持 ps 命令参数</span></span>
<span class="line"><span class="token function">docker</span> trust	<span class="token comment">#管理Docker镜像的信任</span></span>
<span class="line"><span class="token function">docker</span> trust inspect	<span class="token comment">#返回有关key和签名的低级信息</span></span>
<span class="line"><span class="token function">docker</span> trust key		<span class="token comment">#管理登入Docker镜像的keys</span></span>
<span class="line"><span class="token function">docker</span> trust key generate	<span class="token comment">#生成并加载签名密钥对</span></span>
<span class="line"><span class="token function">docker</span> trust key load		<span class="token comment">#加载私钥文件以进行签名</span></span>
<span class="line"><span class="token function">docker</span> trust revoke		<span class="token comment">#删除对镜像的认证</span></span>
<span class="line"><span class="token function">docker</span> trust sign		<span class="token comment">#镜像签名</span></span>
<span class="line"><span class="token function">docker</span> trust signer		<span class="token comment">#管理可以登录Docker镜像的实体</span></span>
<span class="line"><span class="token function">docker</span> trust signer <span class="token function">add</span>		<span class="token comment">#新增一个签名者</span></span>
<span class="line"><span class="token function">docker</span> trust signer remove	<span class="token comment">#删除一个签名者</span></span>
<span class="line"><span class="token function">docker</span> unpause	<span class="token comment">#恢复容器中所有的进程</span></span>
<span class="line"><span class="token function">docker</span> update	<span class="token comment">#更新一个或多个容器的配置</span></span>
<span class="line"><span class="token function">docker</span> version	<span class="token comment">#显示 Docker 版本信息</span></span>
<span class="line"><span class="token function">docker</span> volume	<span class="token comment">#管理volumes</span></span>
<span class="line"><span class="token function">docker</span> volume create	<span class="token comment">#创建一个卷</span></span>
<span class="line"><span class="token function">docker</span> volume inspect	<span class="token comment">#显示一个或多个卷的元数据</span></span>
<span class="line"><span class="token function">docker</span> volume <span class="token function">ls</span>		<span class="token comment">#列出卷</span></span>
<span class="line"><span class="token function">docker</span> volume prune		<span class="token comment">#删除所有未使用的卷</span></span>
<span class="line"><span class="token function">docker</span> volume <span class="token function">rm</span>		<span class="token comment">#删除一个或多个卷</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">wait</span>		<span class="token comment">#阻塞运行直到容器停止，然后打印出它的退出代码</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[t];function l(o,i){return a(),s("div",null,p)}const m=n(c,[["render",l],["__file","docker命令.html.vue"]]),d=JSON.parse('{"path":"/note/Docker/docker%E5%91%BD%E4%BB%A4.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"docker常用命令","slug":"docker常用命令","link":"#docker常用命令","children":[]},{"level":2,"title":"docker命令大全","slug":"docker命令大全","link":"#docker命令大全","children":[]}],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Docker/docker命令.md"}');export{m as comp,d as data};
