import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-60a0e5f3","/intro/mysql.html",{"title":"数据库相关概念"},["/intro/mysql","/intro/mysql.md"]],
  ["v-210dceec","/intro/plugin.html",{"title":"Plugin 原理"},["/intro/plugin","/intro/plugin.md"]],
  ["v-f9e30908","/intro/",{"title":"vuepress快速入门"},["/intro/index.html","/intro/README.md"]],
  ["v-21f76f28","/intro/Webpack.html",{"title":"为什么需要打包工具？"},["/intro/Webpack","/intro/Webpack.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
