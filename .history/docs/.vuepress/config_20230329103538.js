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
                    children: ["/intro/README.md","/intro/Webpack.md"]
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
        ['@vuepress/back-to-top']
    ],
};
