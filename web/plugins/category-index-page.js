export default {
  data() {
    return {
      bannerHeight: 0,
    }
  },
  // computed: {
  //   banner() {
  //     const ad = JSON.parse(
  //       JSON.stringify(this.ad  ? this.ad : [])
  //     )
  //     return ad;
  //   }
  // },
  mounted() {
    const _this = this
    _this.$nextTick(() => {
      _this.screenResize()
      window.onresize = _this.screenResize
    })
  },
  methods: {
    // 页面尺寸改变时触发重新计算
    screenResize() {
      this.resetBannerSize()
    },
    // 重新计算banner高度
    resetBannerSize() {
      const _this = this

      // if (_this.banners[0] && _this.banners[0].adv_image) {
      //   const image = new Image()
      //   image.src = _this.banner[0].adv_image
      //   image.onload = result => {
      //     // console.log(image.width, image.height)
      //     console.log(111111111)
      //     _this.bannerHeight =
      //       (document.body.clientWidth * image.height) / image.width
      //       console.log(_this.bannerHeight)
      //   }
      // }
      // console.log(_this.bannerHeight)
    }
  }
}
