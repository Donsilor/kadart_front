import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _049777df = () => interopDefault(import('..\\pages\\about-kadart.vue' /* webpackChunkName: "pages_about-kadart" */))
const _875f6e28 = () => interopDefault(import('..\\pages\\contact-kadart.vue' /* webpackChunkName: "pages_contact-kadart" */))
const _111814f2 = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "pages_goods-detail" */))
const _a6ae6602 = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "pages_goods-list" */))
const _4e65b059 = () => interopDefault(import('..\\pages\\kadart-jewelry-factory.vue' /* webpackChunkName: "pages_kadart-jewelry-factory" */))
const _950d76d0 = () => interopDefault(import('..\\pages\\kadart-jewelry-privacy-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-privacy-policy" */))
const _45657bfe = () => interopDefault(import('..\\pages\\kadart-jewelry-return-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-return-policy" */))
const _f4120200 = () => interopDefault(import('..\\pages\\kadart-jewelry-shipping-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-shipping-policy" */))
const _c4f62bb8 = () => interopDefault(import('..\\pages\\article\\article-detail.vue' /* webpackChunkName: "pages_article_article-detail" */))
const _df65729e = () => interopDefault(import('..\\pages\\article\\article-list.vue' /* webpackChunkName: "pages_article_article-list" */))
const _bf3f959a = () => interopDefault(import('..\\pages\\pages\\celebrate-womensday-with-kadart-jewelry.vue' /* webpackChunkName: "pages_pages_celebrate-womensday-with-kadart-jewelry" */))
const _7fff0d17 = () => interopDefault(import('..\\pages\\pages\\kad-art-jewelry-timeline.vue' /* webpackChunkName: "pages_pages_kad-art-jewelry-timeline" */))
const _2742340f = () => interopDefault(import('..\\pages\\pages\\kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders.vue' /* webpackChunkName: "pages_pages_kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders" */))
const _3be36aeb = () => interopDefault(import('..\\pages\\pages\\white-valentines-day-jewelry-wishlist.vue' /* webpackChunkName: "pages_pages_white-valentines-day-jewelry-wishlist" */))
const _717daef8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5de19fa1 = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "" */))
const _7e63376e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "" */))
const _268dfef2 = () => interopDefault(import('..\\pages\\article\\article-list.vue' /* webpackChunkName: "" */))
const _e42cf30c = () => interopDefault(import('..\\pages\\article\\article-detail.vue' /* webpackChunkName: "" */))

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
    component: _049777df,
    name: "about-kadart"
  }, {
    path: "/contact-kadart",
    component: _875f6e28,
    name: "contact-kadart"
  }, {
    path: "/goods-detail",
    component: _111814f2,
    name: "goods-detail"
  }, {
    path: "/goods-list",
    component: _a6ae6602,
    name: "goods-list"
  }, {
    path: "/kadart-jewelry-factory",
    component: _4e65b059,
    name: "kadart-jewelry-factory"
  }, {
    path: "/kadart-jewelry-privacy-policy",
    component: _950d76d0,
    name: "kadart-jewelry-privacy-policy"
  }, {
    path: "/kadart-jewelry-return-policy",
    component: _45657bfe,
    name: "kadart-jewelry-return-policy"
  }, {
    path: "/kadart-jewelry-shipping-policy",
    component: _f4120200,
    name: "kadart-jewelry-shipping-policy"
  }, {
    path: "/article/article-detail",
    component: _c4f62bb8,
    name: "article-article-detail"
  }, {
    path: "/article/article-list",
    component: _df65729e,
    name: "article-article-list"
  }, {
    path: "/pages/celebrate-womensday-with-kadart-jewelry",
    component: _bf3f959a,
    name: "pages-celebrate-womensday-with-kadart-jewelry"
  }, {
    path: "/pages/kad-art-jewelry-timeline",
    component: _7fff0d17,
    name: "pages-kad-art-jewelry-timeline"
  }, {
    path: "/pages/kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders",
    component: _2742340f,
    name: "pages-kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders"
  }, {
    path: "/pages/white-valentines-day-jewelry-wishlist",
    component: _3be36aeb,
    name: "pages-white-valentines-day-jewelry-wishlist"
  }, {
    path: "/",
    component: _717daef8,
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
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
