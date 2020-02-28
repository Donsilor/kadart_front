import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e78a8d64 = () => interopDefault(import('..\\pages\\about-kadart.vue' /* webpackChunkName: "pages_about-kadart" */))
const _2fae2aca = () => interopDefault(import('..\\pages\\contact-kadart.vue' /* webpackChunkName: "pages_contact-kadart" */))
const _ce89533e = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "pages_goods-detail" */))
const _2dbb9e2e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "pages_goods-list" */))
const _f25599f0 = () => interopDefault(import('..\\pages\\kadart-jewelry-factory.vue' /* webpackChunkName: "pages_kadart-jewelry-factory" */))
const _420dff6d = () => interopDefault(import('..\\pages\\kadart-jewelry-return-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-return-policy" */))
const _0ae73aa2 = () => interopDefault(import('..\\pages\\kadart-jewelry-shipping-policy.vue' /* webpackChunkName: "pages_kadart-jewelry-shipping-policy" */))
const _1fee5ae2 = () => interopDefault(import('..\\pages\\pages\\celebrate-womensday-with-kadart-jewelry.vue' /* webpackChunkName: "pages_pages_celebrate-womensday-with-kadart-jewelry" */))
const _0bdbac3e = () => interopDefault(import('..\\pages\\pages\\kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders.vue' /* webpackChunkName: "pages_pages_kad-art-silver-factory-is-open-to-accept-all-odm-oem-orders" */))
const _62659f4c = () => interopDefault(import('..\\pages\\pages\\white-valentines-day-jewelry-wishlist.vue' /* webpackChunkName: "pages_pages_white-valentines-day-jewelry-wishlist" */))
const _c56ac72e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _5de19fa1 = () => interopDefault(import('..\\pages\\goods-detail.vue' /* webpackChunkName: "" */))
const _7e63376e = () => interopDefault(import('..\\pages\\goods-list.vue' /* webpackChunkName: "" */))

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
    path: "/kadart-jewelry-return-policy",
    component: _420dff6d,
    name: "kadart-jewelry-return-policy"
  }, {
    path: "/kadart-jewelry-shipping-policy",
    component: _0ae73aa2,
    name: "kadart-jewelry-shipping-policy"
  }, {
    path: "/pages/celebrate-womensday-with-kadart-jewelry",
    component: _1fee5ae2,
    name: "pages-celebrate-womensday-with-kadart-jewelry"
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
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
