<template><h1 id="为什么需要打包工具" tabindex="-1"><a class="header-anchor" href="#为什么需要打包工具" aria-hidden="true">#</a> 为什么需要打包工具？</h1>
<p>开发时，我们会使用框架（React、Vue），ES6 模块化语法，Less/Sass 等 css 预处理器，等语法进行开发。</p>
<p>这样的代码要想<strong>在浏览器运行必须经过编译成浏览器能识别的 JS、Css 等语法</strong>，才能运行。</p>
<p><strong>打包工具</strong>：<code>编译浏览器不能识别的代码转换为浏览器能够识别的代码,并且使其可以在浏览器运行。</code></p>
<p>除此之外，打包工具还能<strong>压缩代码</strong>、<strong>做兼容性处理</strong>、<strong>提升代码性能</strong>等。</p>
<h1 id="有哪些打包工具" tabindex="-1"><a class="header-anchor" href="#有哪些打包工具" aria-hidden="true">#</a> 有哪些打包工具？</h1>
<ul>
<li>Grunt</li>
<li>Gulp</li>
<li>Parcel</li>
<li>Webpack</li>
<li>Rollup</li>
<li>Vite</li>
<li>...</li>
</ul>
<p>目前市面上最流行的是 Webpack，所以我们主要以 Webpack 来介绍使用打包工具</p>
<h1 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用" aria-hidden="true">#</a> 基本使用</h1>
<p><strong><code>Webpack</code> 是一个静态资源打包工具。</strong></p>
<p>它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。</p>
<p>输出的文件就是编译好的文件，就可以在浏览器段运行了。</p>
<p>我们将 <code>Webpack</code> 输出的文件叫做 <code>bundle</code>。</p>
<h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h2>
<p>Webpack 本身功能是有限的:</p>
<ul>
<li>开发模式：仅能编译 JS 中的 <code>ES Module</code> 语法</li>
<li>生产模式：能编译 JS 中的 <code>ES Module</code> 语法，还能压缩 JS 代码</li>
</ul>
<h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2>
<h3 id="_1-资源目录" tabindex="-1"><a class="header-anchor" href="#_1-资源目录" aria-hidden="true">#</a> 1. 资源目录</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>webpack_code # 项目根目录（所有指令必须在这个目录运行）
    └── src # 项目源码目录
        ├── js # js文件目录
        │   ├── count<span class="token punctuation">.</span>js
        │   └── sum<span class="token punctuation">.</span>js
        └── main<span class="token punctuation">.</span>js # 项目主文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_2-创建文件" tabindex="-1"><a class="header-anchor" href="#_2-创建文件" aria-hidden="true">#</a> 2.创建文件</h3>
<ul>
<li>count.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">-</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>sum.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> args<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=></span> p <span class="token operator">+</span> c<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>main.js</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> count <span class="token keyword">from</span> <span class="token string">"./js/count"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> sum <span class="token keyword">from</span> <span class="token string">"./js/sum"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3-下载依赖" tabindex="-1"><a class="header-anchor" href="#_3-下载依赖" aria-hidden="true">#</a> 3.下载依赖</h3>
<p>打开终端，来到项目根目录。运行以下指令：</p>
<ul>
<li>初始化<code>package.json</code></li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时会生成一个基础的 <code>package.json</code> 文件。</p>
<p><strong>需要注意的是 <code>package.json</code> 中 <code>name</code> 字段不能叫做 <code>webpack</code>, 否则下一步会报错</strong></p>
<ul>
<li>下载依赖</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm i webpack webpack-cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_4-启用-webpack" tabindex="-1"><a class="header-anchor" href="#_4-启用-webpack" aria-hidden="true">#</a> 4. 启用 Webpack</h3>
<ul>
<li>开发模式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx webpack ./src/main.js --mode=development
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>生产模式</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx webpack ./src/main.js --mode=production
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>npx webpack</code>: 是用来运行本地安装 <code>Webpack</code> 包的。</p>
<p><code>./src/main.js</code>: 指定 <code>Webpack</code> 从 <code>main.js</code> 文件开始打包，不但会打包 <code>main.js</code>，还会将其依赖也一起打包进来。</p>
<p><code>--mode=xxx</code>：指定模式（环境）。</p>
<h3 id="_5-观察输出文件" tabindex="-1"><a class="header-anchor" href="#_5-观察输出文件" aria-hidden="true">#</a> 5. 观察输出文件</h3>
<p>默认 <code>Webpack</code> 会将文件打包输出到 <code>dist</code> 目录下，我们查看 <code>dist</code> 目录下文件情况就好了</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p><code>Webpack</code> 本身功能比较少，只能处理 <code>js</code> 资源，一旦遇到 <code>css</code> 等其他资源就会报错。</p>
<p>所以我们学习 <code>Webpack</code>，就是主要学习如何处理其他资源。</p>
<h1 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h1>
<h2 id="_5-大核心概念" tabindex="-1"><a class="header-anchor" href="#_5-大核心概念" aria-hidden="true">#</a> 5 大核心概念</h2>
<blockquote>
<p>1.entry（入口）</p>
<p>指示 Webpack 从哪个文件开始打包</p>
<p>2.output（输出）</p>
<p>指示 Webpack 打包完的文件输出到哪里去，如何命名等</p>
<p>3.loader（加载器）</p>
<p>webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析</p>
<p>4.plugins（插件）</p>
<p>扩展 Webpack 的功能</p>
<p>5.mode（模式）</p>
<p>主要由两种模式：</p>
<ul>
<li>开发模式：development</li>
<li>生产模式：production</li>
</ul>
</blockquote>
<h2 id="准备webpack配置文件" tabindex="-1"><a class="header-anchor" href="#准备webpack配置文件" aria-hidden="true">#</a> 准备Webpack配置文件</h2>
<p>在项目根目录下新建文件：<code>webpack.config.js</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
  <span class="token comment">// 输出</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 加载器</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 插件</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// 模式</span>
  <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>Webpack 是基于 Node.js 运行的，所以采用 Common.js 模块化规范</p>
<h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a> 修改配置文件</h2>
<p>1.配置文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// Node.js的核心模块，专门用来处理文件路径
const path = require("path");

module.exports = {
  // 入口
  // 相对路径和绝对路径都行
  entry: "./src/main.js",
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, "dist"),
    // filename: 输出文件名
    filename: "main.js",
  },
  // 加载器
  module: {
    rules: [],
  },
  // 插件
  plugins: [],
  // 模式
  mode: "development", // 开发模式
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>2.运行指令</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx webpack
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>此时功能和之前一样，也不能处理样式资源</p>
<h2 id="小结-1" tabindex="-1"><a class="header-anchor" href="#小结-1" aria-hidden="true">#</a> 小结</h2>
<p>Webpack 将来都通过 <code>webpack.config.js</code> 文件进行配置，来增强 Webpack 的功能</p>
<p>我们后面会以两个模式来分别搭建 Webpack 的配置，先进行开发模式，再完成生产模式</p>
</template>
