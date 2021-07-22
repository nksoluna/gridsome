const c1 = () => import(/* webpackChunkName: "page--src-templates-documentation-vue" */ "D:\\New folder (2)\\my-project\\gridsome\\src\\templates\\Documentation.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-docs-vue" */ "D:\\New folder (2)\\my-project\\gridsome\\src\\pages\\Docs.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-404-vue" */ "D:\\New folder (2)\\my-project\\gridsome\\src\\pages\\404.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\New folder (2)\\my-project\\gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/docs/vue-components-in-markdown/",
    component: c1,
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs-vue-components-in-markdown-md" */ "D:\\New folder (2)\\my-project\\gridsome\\docs\\vue-components-in-markdown.md")
    }
  },
  {
    path: "/docs/",
    component: c2
  },
  {
    name: "404",
    path: "/404/",
    component: c3
  },
  {
    name: "home",
    path: "/",
    component: c4
  },
  {
    name: "*",
    path: "*",
    component: c3
  }
]
