<template><h1 id="vuepress快速入门" tabindex="-1"><a class="header-anchor" href="#vuepress快速入门" aria-hidden="true">#</a> vuepress快速入门</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> project
    ├─── docs
    │   ├── README.md
    │   └── .vuepress
    │       └── config.js
    └── package.json
    
    project：是工程的根目录名称，例如（D:\vuepress-test01，project就是vuepress-test01）
    docs和.vuepress都是文件夹
    其它都是文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li><strong>步骤 1</strong>: 创建并进入一个新目录</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir vuepress-starter
cd vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>步骤 2</strong>: 初始化项目</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git init
npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>步骤 3</strong>: 将 VuePress 安装为本地依赖</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vuepress：框架主结构。npm install -D vuepress@next

vuepress-plugin-copy-code2：复制代码块功能插件。npm install -D vuepress-plugin-copy-code2

@vuepress/plugin-external-link-icon：该插件会为你 Markdown 内容中的外部链接添加一个图标

@vuepress/plugin-search: 基于Headers 的搜索插件


npm install -D vuepress@next

npm i -D @vuepress/plugin-search@next

npm i -D @vuepress/plugin-external-link-icon@next

npm i -D vuepress-plugin-copy-code2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><ul>
<li><strong>步骤 4</strong>: 在 <code>package.json</code> 中添加一些 scripts</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li><strong>步骤 5</strong>: 将默认的临时目录和缓存目录添加到 <code>.gitignore</code> 文件中</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li><strong>步骤 6</strong>: 创建你的第一篇文档</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>mkdir docs
echo '# Hello VuePress' > docs/README.md

注意：echo '# Hello VuePress' > docs/README.md 生成的md文件会产生乱码所以要通过记事本改为utf-8

把# Hello VuePress修改为
---
home: true
title: 首页
heroImage: /images/logo.svg
actions:
  - text: 课程介绍
    link: /intro/
    type: secondary
  - text: 基础 →
    link: /base/
    type: primary
features:
  - title: 💡 最新最热的技术
    details: 使用最新 Webpack5 技术
  - title: 🛠️ 最细致讲解
    details: 从基础配置，到高级优化，到项目配置，最后到原理分析
  - title: 📦 最全面的案例
    details: 不同角度实现loader、plugin
footer: MIT Licensed | Copyright © 2022-present 尚硅谷
---
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ul>
<li><strong>步骤 7</strong>: 在本地启动服务器来开发你的文档网站</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动服务器之后在docs文件夹下会自动生成.vuepress文件夹，在里面写配置文件</p>
<p>VuePress 会在 http://localhost:8080启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。</p>
<p>现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress <a href="https://v2.vuepress.vuejs.org/zh/guide/configuration.html" target="_blank" rel="noopener noreferrer">配置<ExternalLinkIcon/></a> 相关的内容。</p>
<h1 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h1>
<p>两种:</p>
<p>config.ts/config.js</p>
<p>也可以指定名字</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vuepress dev docs --config my-config.js


//在package.json中的,注意要写绝对路径不然会报错
 "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
    "docs:dev": "vuepress dev docs --config docs/.vuepress/my-config.js",
    "docs:build": "vuepress build docs"
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>配置文件里面写</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>const { copyCode } = require("vuepress-plugin-copy-code2");

module.exports = {
    // 站点配置
    //base: 站点的基础路径，  base: "/webpack5-docs/"
    base: "",
    //语言
    lang: "zh-CN",
    //设置网站图标，放在public文件夹下
    /*
    &lt;head>
        &lt;link rel="icon" href="/images/logo.png" />
    &lt;/head>
    */
    head: [["link", { rel: "icon", href: "/imgs/favicon.ico" }]],
    //设置网站标题
    title: "尚硅谷 Web 前端之 Webpack5 教程",
    //设置网站描述
    description: "Webpack5从小白到大神",
    // 主题和它的配置
    //theme:设置站点要使用的主题。如果不设置该选项，将会使用默认主题(@vuepress/theme-default)。
    theme: "@vuepress/theme-default",
    themeConfig: {
        logo: "/imgs/favicon.ico",
        //是否启用 最近更新时间戳 。默认值：true
        lastUpdated: true,
        //最近更新时间戳 标签的文字。
        lastUpdatedText: "上次更新",
        //导航栏配置。默认值：[], 导航栏项目对象应该有一个 text 字段和一个 link 字段，还有一个可选的 activeMatch 字段。
        navbar: [
            {
                text: "课程介绍",
                link: "/intro/",
            },
            {
                text: "基础",
                link: "/base/",
            },
            {
                text: "高级",
                link: "/senior/",
            },
            {
                text: "项目",
                link: "/project/",
            },
            {
                text: "原理",
                link: "/origin/",
            },
        ],
        sidebar: {
            "/intro/": [
                {
                    text: "课程介绍",
                    //children: ["/intro/README.md", "/intro/pre.md", "/intro/group.md", "/intro/learn.md", "/intro/asset.md"]
                    children: ["/intro/learn.md","/intro/README.md","/intro/Webpack.md"]
                },
            ],
            "/base/": [
                {
                    text: "基础配置",
                    children: [
                        "/base/README.md",
                        "/base/base.md",
                        "/base/config.md",
                        "/base/development.md",
                        "/base/css.md",
                        "/base/image.md",
                        "/base/output.md",
                        "/base/clean.md",
                        "/base/font.md",
                        "/base/other.md",
                        "/base/javascript.md",
                        "/base/html.md",
                        "/base/server.md",
                        "/base/production.md",
                        "/base/optimizeCss.md",
                        "/base/minifyHtml.md",
                        "/base/summary.md",
                    ],
                },
            ],
            "/senior/": [
                {
                    text: "高级优化",
                    children: ["/senior/README.md", "/senior/enhanceExperience.md", "/senior/liftingSpeed.md", "/senior/reduceVolume.md", "/senior/optimizePerformance.md", "/senior/summary.md"],
                },
            ],
            "/project/": [
                {
                    text: "项目配置",
                    children: ["/project/README.md", "/project/react-cli.md", "/project/vue-cli.md", "/project/summary.md"],
                },
            ],
            "/origin/": [
                {
                    text: "原理分析",
                    children: ["/origin/README.md", "/origin/loader.md", "/origin/plugin.md", "/origin/summary.md"],
                },
            ],
        },
    },
    //要使用的插件,该配置项接收一个数组，其中的每一个数组项是一个或一组插件。默认值：[]
    plugins: [
        // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
        copyCode({
            // 插件选项
            pure: true,
        }),
        [
            //该插件会为你 Markdown 内容中的外部链接添加一个图标
            //https://v2.vuepress.vuejs.org/zh/reference/plugin/external-link-icon.html
            "@vuepress/plugin-external-link-icon",
            {
                locales: {
                    "/": {
                        openInNewWindow: "open in new window",
                    },
                    "/zh/": {
                        openInNewWindow: "在新窗口打开",
                    },
                },
            },
        ],
        [
            //https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
            //该插件会为你的站点添加一个搜索框，以便用户可以在你的站点中搜索内容。
            "@vuepress/plugin-search",
            {
                locales: {
                    "/": {
                        placeholder: "Search",
                    },
                    "/zh/": {
                        placeholder: "搜索",
                    },
                },
            },
        ],
    ],
};
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br></div></div><h1 id="客户端配置" tabindex="-1"><a class="header-anchor" href="#客户端配置" aria-hidden="true">#</a> 客户端配置</h1>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="首页配置" tabindex="-1"><a class="header-anchor" href="#首页配置" aria-hidden="true">#</a> 首页配置</h1>
<p>默认在 docs/下的md文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---
home: true
title: 首页
heroImage: /imgs/logo.svg
heroText: Hero 标题
tagline: Hero 副标题
actions:
  - text: 课程介绍
    link: /intro/
    type: secondary
  - text: 基础 →
    link: /base/
    type: primary
features:
  - title: 💡 最新最热的技术
    details: 使用最新 Webpack5 技术
  - title: 🛠️ 最细致讲解
    details: 从基础配置，到高级优化，到项目配置，最后到原理分析
  - title: 📦 最全面的案例
    details: 不同角度实现loader、plugin
footer: MIT Licensed | Copyright © 2022-present 尚硅谷
---
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><blockquote>
<p><strong>home</strong>：</p>
<ul>
<li>
<p>类型： <code>boolean</code></p>
</li>
<li>
<p>详情：</p>
<p>设定该页面是首页还是普通页面。</p>
<p>如果你不设置该 Frontmatter 或将其设为 <code>false</code> ，则该页面会是一个 普通页面，反之设置为true该页面为首页</p>
</li>
</ul>
</blockquote>
<blockquote>
<p><strong>title</strong> 页面的标题。注意：docs下的第一个md和docs/.vuepress/config.js 都可以设置</p>
</blockquote>
<blockquote>
<p>heroText: Hero 标题
tagline: Hero 副标题</p>
</blockquote>
<blockquote>
<p>actionText与actionLink是一对，就是首页的一个链接按钮，具体链接到那里自己定义。
其它属性跑起来之后就能直观感受了，没什么可说的。不需要的配置可以删除。</p>
</blockquote>
<blockquote>
<p>actions:	配置首页按钮</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /guide/
    type: secondary
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>text:	文本</p>
<p>link：链接</p>
<p>type：类型。分为：primary:	最初的，secondary：次要的</p>
</blockquote>
<p><strong>heroImage</strong>:	首页图片的 URL ，图片的根路径是docs/.vuepress/public</p>
<blockquote>
<p>Public 文件</p>
<p>你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。</p>
<p>默认的 Public 目录是 <code>.vuepress/public</code> ，可以通过 public 配置项来修改。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # &lt;- Logo 文件
   └─ assets.md    # &lt;- 我们在这里
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></blockquote>
<p>​</p>
<blockquote>
<p><strong>features</strong></p>
<p>title:	名称</p>
<p>details：详细说明</p>
</blockquote>
<blockquote>
<p>footer:	首页的页脚</p>
</blockquote>
<h1 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h1>
<p>vuepress：框架主结构。npm install -D vuepress@next</p>
<p>vuepress-plugin-copy-code2：复制代码块功能插件。npm install -D vuepress-plugin-copy-code2</p>
<p>@vuepress/plugin-external-link-icon：该插件会为你 Markdown 内容中的外部链接添加一个图标</p>
<p>@vuepress/plugin-search: 基于Headers 的搜索插件</p>
<p>@vuepress/plugin-back-to-top：返回顶部</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> "devDependencies": {

  "devDependencies": {
    "@vuepress/plugin-external-link-icon": "^2.0.0-beta.38",
    "@vuepress/plugin-search": "^2.0.0-beta.38",
    "vuepress": "^2.0.0-beta.39",
    "vuepress-plugin-copy-code2": "^2.0.0-beta.38"
  }

 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h1 id="md文件存放地点" tabindex="-1"><a class="header-anchor" href="#md文件存放地点" aria-hidden="true">#</a> md文件存放地点</h1>
<p>文件夹docs下</p>
</template>
