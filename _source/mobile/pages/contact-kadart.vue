<template>
  <div>
    <slideShow></slideShow>

    <div class="about-box">
      <div class="title">
        <i class="icon" @click="goBack"></i>
        <span>Contact Us</span>
      </div>

      <div>
        <div class="list">
          <div class="list-tit">KAD ART Limited (Shenzhen)</div>
          <div class="list-text">
            <div class="list-child">Email: James@kadart.com</div>
            <div class="list-child">https://www.kadart.com</div>
            <div class="list-child">Mobile/Tel: +86 18665619485 / +86 0755 25160872</div>
            <div class="list-child">1306-1307 Block A, IBC Business Jewelry Building,Shenzhen, Guangdong Province, China</div>
          </div>
        </div>

        <div class="list">
          <div class="list-tit">KAD ART Limited (HK)</div>
          <div class="list-text">
            <div class="list-child">Tel: +852 2165 3939</div>
            <div class="list-child">Unit 4, 23/F, Universal Trade Centre, 3 Arbuthnot Rd, Central, HK</div>
          </div>
        </div>

        <div class="list">
          <div class="list-tit">HENGDELI (FS)</div>
          <div class="list-text">
            <div class="list-child">Tel: +86 18665619485</div>
            <div class="list-child">Shop p2-16/17/19,2/f,Building D,Huicui Jewelry Plaza,Xinhui Plaza,7 Baili Emerald Avenue,Guicheng,Nanhai District,Foshan</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    head() {
      return {
        title: 'KADArt introduction | High quality jewelry manufacture and wholesale',
        meta: [{
            hid: 'description',
            name: 'description',
            content: 'KADArt design, manufacture top-grade gold,silver jewellery like necklaces,rings,earrings,bracelets with diamond,ruby,sapphire,topaz,pearl,zircon,rhinstone, wholesale at reasonable price.'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'Kadart jewelry,BDD jewelry,Hengdeli jewelry,high-quality jewelry, top-grade jewelry'
          }
        ]
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  @import url("../assets/css/article.css");
</style>
