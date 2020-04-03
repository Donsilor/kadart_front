module.exports = {
  mode: 'universal',
  server: {
    port: 3002, // default: 3000
    host: '0.0.0.0' // default: localhost 0.0.0.0
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'vue-web2',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/index/logo.png'
    }],
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
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },

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

  proxy: {
    // '/api/': { target: '47.75.100.16', pathRewrite: {'^/api/': ''} }
  },
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
    {
      src: '~/plugins/pcToWap.js',
      ssr: true
    },
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './static/common.css',
    'static/font/iconfont.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
    vendor: ['element-ui']
  },
  router: {
    // middleware: ['pcToWap'],
    extendRoutes(routes) {
      //商品详情
      routes.push({
        name: 'goods',
        path: '/goods-detail',
        component: 'pages/goods-detail.vue',
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
      //文章列表
      routes.push({
        name: 'article-list',
        path: '/article/article-list',
        component: 'pages/article/article-list.vue',
        alias: '/news-:s/:p'
      })
      //文章详情
      routes.push({
        name: 'article-detail',
        path: '/article/article-detail',
        component: 'pages/article/article-detail.vue',
        alias: '/news-:s/:t/:p'
      })
      //设计师
      routes.push({
        name: 'designer-list',
        path: '/designer/index',
        component: 'pages/designer/index.vue',
        alias: '/designer/:p'
      })
    }
  }
}
