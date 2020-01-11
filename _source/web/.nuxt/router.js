import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d689ea66 = () => interopDefault(import('..\\pages\\article.vue' /* webpackChunkName: "pages_article" */))
const _3dde8ac2 = () => interopDefault(import('..\\pages\\error.vue' /* webpackChunkName: "pages_error" */))
const _ce89533e = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "pages_goods-detail" */))
const _2dbb9e2e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "pages_goods-list" */))
const _c56ac72e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
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
    component: _d689ea66,
    name: "article"
  }, {
    path: "/error",
    component: _3dde8ac2,
    name: "error"
  }, {
    path: "/goods-detail",
    component: _ce89533e,
    name: "goods-detail"
  }, {
    path: "/goods-list",
    component: _2dbb9e2e,
    name: "goods-list"
  }, {
    path: "/",
    component: _c56ac72e,
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
