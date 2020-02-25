
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
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
  }
}
