export const data = {
  "key": "v-f9e30908",
  "path": "/intro/",
  "title": "vuepress快速入门",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1680065019000,
    "contributors": [
      {
        "name": "Wake",
        "email": "11685193+wakemoto@user.noreply.gitee.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "intro/README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
