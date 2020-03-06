
export default {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost 0.0.0.0
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/index/icon/logo-1.png' }
    ],
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-156158677-1',
        type: 'text/javascript',
        charset: 'utf-8',
        async: true
      },
    	{
    	  src: '/google-ga.js',
    	  type: 'text/javascript',
    	  charset: 'utf-8'
    	},
      {
        src: '/live-chat.js',
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */

  css: [
    '~assets/css/base.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
      src: '~plugins/ElementUI',
      ssr: true
    },
    {
      src: "~/plugins/vue-swiper.js",
      ssr: false
    },
    {
      src: '~/plugins/axios',
      ssr: true
    },
    {
      src: '~/plugins/vue-components.js',
      ssr: true
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
   '@nuxtjs/axios'
  ],
  axios: {
   //prefix: 'https://api.kadart.com/index.php/v1',
   // proxy: true // Can be also an object with default options
   // 线上api
  // baseURL: 'https://api.kadart.com/index.php/v1',
   // 测试api
  baseURL: 'https://kadart.bddia.com/api/index.php/v1'

  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    middleware: ['wapToPc'],
    extendRoutes(routes) {
      //商品详情
      routes.push({
        name: 'goods',
        path: '/goods-detail',
        component: 'pages/goods-details.vue',
        alias: '/goods-:s/:p'
      })
      //商品列表
      routes.push({
        name: 'category',
        path: '/goods-list',
        component: 'pages/goods-list.vue',
        alias: '/category/:s/:p'
      })
      //搜索
      routes.push({
        name: 'search',
        path: '/goods-list',
        component: 'pages/goods-list.vue',
        alias: '/search/:p'
      })

    }
  }
}
