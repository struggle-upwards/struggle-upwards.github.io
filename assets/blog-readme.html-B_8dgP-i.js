import{_ as s,c as n,o as a,a as e}from"./app-DwZAwhNE.js";const l={},i=e(`<h1 id="blog启动服务" tabindex="-1"><a class="header-anchor" href="#blog启动服务"><span>blog启动服务</span></a></h1><h3 id="使用docker分开管理服务" tabindex="-1"><a class="header-anchor" href="#使用docker分开管理服务"><span>使用docker分开管理服务</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token builtin class-name">cd</span> web</span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> vue-image <span class="token builtin class-name">.</span> </span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">3000</span>:80 <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> blog-vue vue-image</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/server</span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> build <span class="token parameter variable">-t</span> gin-image <span class="token builtin class-name">.</span></span>
<span class="line"></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> blog-gin <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">-d</span> gin-image</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用docker-compose一起管理服务" tabindex="-1"><a class="header-anchor" href="#使用docker-compose一起管理服务"><span>使用docker-compose一起管理服务</span></a></h3><p><strong>docker-compose.yml</strong></p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="line">version: &#39;3.8&#39;</span>
<span class="line"></span>
<span class="line">services:</span>
<span class="line">  web:</span>
<span class="line">    build:</span>
<span class="line">      context: ./web</span>
<span class="line">      dockerfile: Dockerfile</span>
<span class="line">    ports:</span>
<span class="line">      - &quot;3000:80&quot;</span>
<span class="line">    container_name: blog-vue</span>
<span class="line"></span>
<span class="line">  server:</span>
<span class="line">    build:</span>
<span class="line">      context: ./server</span>
<span class="line">      dockerfile: Dockerfile</span>
<span class="line">    ports:</span>
<span class="line">      - &quot;8080:8080&quot;</span>
<span class="line">    container_name: blog-gin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="line">docker-compose down</span>
<span class="line">docker rmi blog_web blog_server</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 构建容器</span></span>
<span class="line">docker-compose build</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动容器</span></span>
<span class="line">docker-compose up -d</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新容器并重启</span></span>
<span class="line">docker-compose up --build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),c=[i];function d(p,r){return a(),n("div",null,c)}const t=s(l,[["render",d],["__file","blog-readme.html.vue"]]),v=JSON.parse('{"path":"/note/Docker/blog-readme.html","title":"blog启动服务","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"使用docker分开管理服务","slug":"使用docker分开管理服务","link":"#使用docker分开管理服务","children":[]},{"level":3,"title":"使用docker-compose一起管理服务","slug":"使用docker-compose一起管理服务","link":"#使用docker-compose一起管理服务","children":[]}],"git":{"updatedTime":1716996408000,"contributors":[{"name":"struggle-upwards","email":"20222131019@m.scnu.edu.cn","commits":1}]},"filePathRelative":"note/Docker/blog-readme.md"}');export{t as comp,v as data};
