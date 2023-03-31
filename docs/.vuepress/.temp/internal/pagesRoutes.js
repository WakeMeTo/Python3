import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"首页"},["/index.html","/README.md"]],
  ["v-60a0e5f3","/intro/mysql.html",{"title":"数据库相关概念"},["/intro/mysql","/intro/mysql.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
  ["v-f9e30908","/intro/",{"title":"Hello World"},["/intro/index.html","/intro/README.md"]],
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
