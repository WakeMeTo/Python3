# vuepress快速入门

```text
 project
    ├─── docs
    │   ├── README.md
    │   └── .vuepress
    │       └── config.js
    └── package.json
    
    project：是工程的根目录名称，例如（D:\vuepress-test01，project就是vuepress-test01）
    docs和.vuepress都是文件夹
    其它都是文件
```



- **步骤 1**: 创建并进入一个新目录

```
mkdir vuepress-starter
cd vuepress-starter
```



- **步骤 2**: 初始化项目

```
git init
npm init -y
```



- **步骤 3**: 将 VuePress 安装为本地依赖

```
vuepress：框架主结构。npm install -D vuepress@next

vuepress-plugin-copy-code2：复制代码块功能插件。npm install -D vuepress-plugin-copy-code2

@vuepress/plugin-external-link-icon：该插件会为你 Markdown 内容中的外部链接添加一个图标

@vuepress/plugin-search: 基于Headers 的搜索插件


npm install -D vuepress@next

npm i -D @vuepress/plugin-search@next

npm i -D @vuepress/plugin-external-link-icon@next

npm i -D vuepress-plugin-copy-code2
```



- **步骤 4**: 在 `package.json` 中添加一些 scripts

```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```



- **步骤 5**: 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

```
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```



- **步骤 6**: 创建你的第一篇文档

```
mkdir docs
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
```



- **步骤 7**: 在本地启动服务器来开发你的文档网站

```
npm run docs:dev
```

启动服务器之后在docs文件夹下会自动生成.vuepress文件夹，在里面写配置文件

VuePress 会在 http://localhost:8080启动一个热重载的开发服务器。当你修改你的 Markdown 文件时，浏览器中的内容也会自动更新。

现在，你应该已经有了一个简单可用的 VuePress 文档网站。接下来，了解一下 VuePress [配置](https://v2.vuepress.vuejs.org/zh/guide/configuration.html) 相关的内容。







# 配置文件

两种:

config.ts/config.js



也可以指定名字

```
vuepress dev docs --config my-config.js


//在package.json中的,注意要写绝对路径不然会报错
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "docs:dev": "vuepress dev docs --config docs/.vuepress/my-config.js",
    "docs:build": "vuepress build docs"
  }
```



配置文件里面写

```
const { copyCode } = require("vuepress-plugin-copy-code2");

module.exports = {
    // 站点配置
    //base: 站点的基础路径，  base: "/webpack5-docs/"
    base: "",
    //语言
    lang: "zh-CN",
    //设置网站图标，放在public文件夹下
    /*
    <head>
        <link rel="icon" href="/images/logo.png" />
    </head>
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
```







# 客户端配置

```
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
})
```





# 首页配置

默认在 docs/下的md文件

```
---
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
```



> **home**：
>
> - 类型： `boolean`
>
> - 详情：
>
>   设定该页面是首页还是普通页面。
>
>   如果你不设置该 Frontmatter 或将其设为 `false` ，则该页面会是一个 普通页面，反之设置为true该页面为首页



> **title** 页面的标题。注意：docs下的第一个md和docs/.vuepress/config.js 都可以设置



> heroText: Hero 标题
> tagline: Hero 副标题



> actionText与actionLink是一对，就是首页的一个链接按钮，具体链接到那里自己定义。
> 其它属性跑起来之后就能直观感受了，没什么可说的。不需要的配置可以删除。



> actions:	配置首页按钮
>
> ```
> actions:
>   - text: 快速上手
>     link: /zh/guide/getting-started.html
>     type: primary
>   - text: 项目简介
>     link: /guide/
>     type: secondary
> ```
>
> text:	文本
>
> link：链接
>
> type：类型。分为：primary:	最初的，secondary：次要的





**heroImage**:	首页图片的 URL ，图片的根路径是docs/.vuepress/public

> Public 文件
>
> 你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。
>
> 默认的 Public 目录是 `.vuepress/public` ，可以通过 public 配置项来修改。
>
> ```
> └─ docs
>    ├─ .vuepress
>    |  └─ public
>    |     └─ images
>    |        └─ hero.png  # <- Logo 文件
>    └─ assets.md    # <- 我们在这里
> ```

​      

> **features**
>
> title:	名称
>
> details：详细说明



> footer:	首页的页脚



# 插件

vuepress：框架主结构。npm install -D vuepress@next

vuepress-plugin-copy-code2：复制代码块功能插件。npm install -D vuepress-plugin-copy-code2

@vuepress/plugin-external-link-icon：该插件会为你 Markdown 内容中的外部链接添加一个图标

@vuepress/plugin-search: 基于Headers 的搜索插件

@vuepress/plugin-back-to-top：返回顶部

```
 "devDependencies": {

  "devDependencies": {
    "@vuepress/plugin-external-link-icon": "^2.0.0-beta.38",
    "@vuepress/plugin-search": "^2.0.0-beta.38",
    "vuepress": "^2.0.0-beta.39",
    "vuepress-plugin-copy-code2": "^2.0.0-beta.38"
  }

 }
```



# md文件存放地点

文件夹docs下
