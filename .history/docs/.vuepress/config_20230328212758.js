const { copyCode } = require("vuepress-plugin-copy-code2");

module.exports = {
    // 站点配置
    //base: 站点的基础路径
    base: "/webpack5-docs/",
    //语言
    lang: "en-US",
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
    theme: "@vuepress/theme-default",
    themeConfig: {
        logo: "/imgs/favicon.ico",
        lastUpdated: false,
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
                    children: ["/intro/README.md", "/intro/pre.md", "/intro/group.md", "/intro/learn.md", "/intro/asset.md"],
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
    plugins: [
        // https://vuepress-theme-hope.github.io/v2/copy-code/zh/
        copyCode({
            // 插件选项
            pure: true,
        }),
        [
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
