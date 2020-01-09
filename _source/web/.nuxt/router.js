import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c13468d = () => interopDefault(import('..\\pages\\article.vue' /* webpackChunkName: "pages_article" */))
const _56763342 = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages_error" */))
const _e41b1abe = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "pages_goods-detail" */))
const _128cca6e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "pages_goods-list" */))
const _de026fae = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5de19fa1 = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "" */))
const _7e63376e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article",
    component: _6c13468d,
    name: "article"
  }, {
    path: "/error",
    component: _56763342,
    name: "error"
  }, {
    path: "/goods-detail",
    component: _e41b1abe,
    name: "goods-detail"
  }, {
    path: "/goods-list",
    component: _128cca6e,
    name: "goods-list"
  }, {
    path: "/",
    component: _de026fae,
    name: "index"
  }, {
    path: "/goods-detail",
    component: _5de19fa1,
    alias: "/goods-:s/:p",
    name: "goods"
  }, {
    path: "/goods-list",
    component: _7e63376e,
    alias: "/category/:s/:p",
    name: "category"
  }, {
    path: "/goods-list",
    component: _7e63376e,
    alias: "/search/:p",
    name: "search"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
