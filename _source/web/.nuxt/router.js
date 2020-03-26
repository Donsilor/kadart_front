import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e78a8d64 = () => interopDefault(import('..\\pages\\about-kadart.vue' /* webpackChunkName: "pages_about-kadart" */))
const _2fae2aca = () => interopDefault(import('..\\pages\\contact-kadart.vue' /* webpackChunkName: "pages_contact-kadart" */))
const _8ae9f344 = () => interopDefault(import('..\\pages\\designer\\index.vue' /* webpackChunkName: "pages_designer_index" */))
const _ce89533e = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "pages_goods-detail" */))
const _2dbb9e2e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "pages_goods-list" */))
const _f25599f0 = () => interopDefault(import('..\\pages\\kadart-jewelry-factory.vue' /* webpackChunkName: "pages_kadart-jewelry-factory" */))
const _4de12f09 = () => interopDefault(import('..\\pages\\kadart-jewelry-privacy-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-privacy-policy" */))
const _420dff6d = () => interopDefault(import('..\\pages\\kadart-jewelry-return-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-return-policy" */))
const _0ae73aa2 = () => interopDefault(import('..\\pages\\kadart-jewelry-shipping-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-shipping-policy" */))
const _7305bd55 = () => interopDefault(import('..\\pages\\article\\article-detail.vue' /* webpackChunkName: "pages_article_article-detail" */))
const _fcc99bbc = () => interopDefault(import('..\\pages\\article\\article-list.vue' /* webpackChunkName: "pages_article_article-list" */))
const _1fee5ae2 = () => interopDefault(import('..\\pages\\pages\\celebrate-womensday-with-kadart-jewelry.vue' /* webpackChunkName: "pages_pages_celebrate-womensday-with-kadart-jewelry" */))
const _c3d3c170 = () => interopDefault(import('..\\pages\\pages\\kad-art-jewelry-timeline.vue' /* webpackChunkName: "pages_pages_kad-art-jewelry-timeline" */))
const _0bdbac3e = () => interopDefault(import('..\\pages\\pages\\kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders.vue' /* webpackChunkName: "pages_pages_kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders" */))
const _62659f4c = () => interopDefault(import('..\\pages\\pages\\white-valentines-day-jewelry-wishlist.vue' /* webpackChunkName: "pages_pages_white-valentines-day-jewelry-wishlist" */))
const _c56ac72e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5de19fa1 = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "" */))
const _7e63376e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "" */))
const _268dfef2 = () => interopDefault(import('..\\pages\\article\\article-list.vue' /* webpackChunkName: "" */))
const _e42cf30c = () => interopDefault(import('..\\pages\\article\\article-detail.vue' /* webpackChunkName: "" */))
const _57c12267 = () => interopDefault(import('..\\pages\\designer\\index.vue' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-kadart",
    component: _e78a8d64,
    name: "about-kadart"
  }, {
    path: "/contact-kadart",
    component: _2fae2aca,
    name: "contact-kadart"
  }, {
    path: "/designer",
    component: _8ae9f344,
    name: "designer"
  }, {
    path: "/goods-detail",
    component: _ce89533e,
    name: "goods-detail"
  }, {
    path: "/goods-list",
    component: _2dbb9e2e,
    name: "goods-list"
  }, {
    path: "/kadart-jewelry-factory",
    component: _f25599f0,
    name: "kadart-jewelry-factory"
  }, {
    path: "/kadart-jewelry-privacy-policy",
    component: _4de12f09,
    name: "kadart-jewelry-privacy-policy"
  }, {
    path: "/kadart-jewelry-return-policy",
    component: _420dff6d,
    name: "kadart-jewelry-return-policy"
  }, {
    path: "/kadart-jewelry-shipping-policy",
    component: _0ae73aa2,
    name: "kadart-jewelry-shipping-policy"
  }, {
    path: "/article/article-detail",
    component: _7305bd55,
    name: "article-article-detail"
  }, {
    path: "/article/article-list",
    component: _fcc99bbc,
    name: "article-article-list"
  }, {
    path: "/pages/celebrate-womensday-with-kadart-jewelry",
    component: _1fee5ae2,
    name: "pages-celebrate-womensday-with-kadart-jewelry"
  }, {
    path: "/pages/kad-art-jewelry-timeline",
    component: _c3d3c170,
    name: "pages-kad-art-jewelry-timeline"
  }, {
    path: "/pages/kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders",
    component: _0bdbac3e,
    name: "pages-kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders"
  }, {
    path: "/pages/white-valentines-day-jewelry-wishlist",
    component: _62659f4c,
    name: "pages-white-valentines-day-jewelry-wishlist"
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
  }, {
    path: "/article/article-list",
    component: _268dfef2,
    alias: "/news-:s/:p",
    name: "article-list"
  }, {
    path: "/article/article-detail",
    component: _e42cf30c,
    alias: "/news-:s/:t/:p",
    name: "article-detail"
  }, {
    path: "/designer/index",
    component: _57c12267,
    alias: "/designer/:p",
    name: "designer"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
