import{_ as n,c as s,o as a,a as e}from"./app-DwZAwhNE.js";const i={},l=e(`<h1 id="docker部署gin-vue博客" tabindex="-1"><a class="header-anchor" href="#docker部署gin-vue博客"><span>docker部署gin,vue博客</span></a></h1><h3 id="安装nginx" tabindex="-1"><a class="header-anchor" href="#安装nginx"><span>安装nginx</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">docker</span> pull nginx</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="部署vue3" tabindex="-1"><a class="header-anchor" href="#部署vue3"><span>部署Vue3</span></a></h3><p><strong>打包vue3项目</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">npm</span> run build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>nginx配置(default)</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">server <span class="token punctuation">{</span></span>
<span class="line">    listen       <span class="token number">80</span><span class="token punctuation">;</span></span>
<span class="line">    server_name  <span class="token number">8.138</span>.1.95<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    location / <span class="token punctuation">{</span></span>
<span class="line">        root   /usr/share/nginx/html<span class="token punctuation">;</span></span>
<span class="line">        index  index.html index.htm<span class="token punctuation">;</span></span>
<span class="line">        try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ @router<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    location @router<span class="token punctuation">{</span></span>
<span class="line">        rewrite ^<span class="token punctuation">(</span>.+<span class="token punctuation">)</span>$ /index.html last<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    location /api/<span class="token punctuation">{</span></span>
<span class="line">        rewrite ^/api/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span></span>
<span class="line">        proxy_pass  http://8.138.1.95:8080/<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># redirect server error pages to the static page /50x.html</span></span>
<span class="line">    <span class="token comment">#</span></span>
<span class="line">    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span></span>
<span class="line">    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span></span>
<span class="line">        root   html<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在web目录下写dockerfile</strong>(和dist同级)</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="line"><span class="token comment"># 设置基础镜像</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> nginx</span></span>
<span class="line"><span class="token comment"># 定义作者</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">MAINTAINER</span> zhijianpan</span></span>
<span class="line"><span class="token comment"># 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> dist/  /usr/share/nginx/html/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改default.conf</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> rm /etc/nginx/conf.d/default.conf</span></span>
<span class="line"> </span>
<span class="line"><span class="token instruction"><span class="token keyword">ADD</span> default.conf /etc/nginx/conf.d/</span></span>
<span class="line"></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署gin" tabindex="-1"><a class="header-anchor" href="#部署gin"><span>部署gin</span></a></h3><p><strong>编写dockerfile</strong></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="line"><span class="token comment">#源镜像</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> golang:latest</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#FROM golang:1.22 as build</span></span>
<span class="line"><span class="token comment">#作者</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">MAINTAINER</span> zhijianpan</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置模块代理</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> GO111MODULE=on</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENV</span> GOPROXY=https://goproxy.cn,direct</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 在docker的根目录下创建相应的使用目录</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /www/webapp</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 设置工作目录</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /www/webapp</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">## 将服务器的go工程代码加入到docker容器中</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . /www/webapp</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#go构建可执行文件</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> go build main.go</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#暴露端口</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span></span>
<span class="line"></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> chmod +x main</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;./main&quot;</span>]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[l];function c(t,o){return a(),s("div",null,p)}const r=n(i,[["render",c],["__file","docker部署gin_vue博客.html.vue"]]),u=JSON.parse('{"path":"/note/Docker/docker%E9%83%A8%E7%BD%B2gin_vue%E5%8D%9A%E5%AE%A2.html","title":"docker部署gin,vue博客","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"安装nginx","slug":"安装nginx","link":"#安装nginx","children":[]},{"level":3,"title":"部署Vue3","slug":"部署vue3","link":"#部署vue3","children":[]},{"level":3,"title":"部署gin","slug":"部署gin","link":"#部署gin","children":[]}],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Docker/docker部署gin,vue博客.md"}');export{r as comp,u as data};
