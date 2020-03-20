<template>
  <div>
    <slideShow></slideShow>

    <div class="about-box">
      <div class="title">
        <i class="icon" @click="goBack"></i>
        <span>Production Capacity</span>
      </div>

      <div>
        <div class="list">
          <div class="list-text">
            <div class="list-child">1. Factory Address :No.30，Fuping Road,Xiaoping Industrial Zone,Shatou Street,Panyu District,Guangzhou City,Guangdong Province,China</div>
            <div class="list-child">Floor Space: 6000 square meters</div>
            <div class="list-child">Number Of Technicians: 500</div>
            <div class="list-child">Mobile/Tel: +86 18665619485</div>
            <div class="list-child">Email: James@kadart.com</div>
          </div>

          <div class="img-box">
            <img src="../static/article/article_01.jpg" alt="">
            <img src="../static/article/article_02.jpg" alt="">
            <img src="../static/article/article_03.jpg" alt="">
            <img src="../static/article/article_04.jpg" alt="">
          </div>
        </div>

        <div class="list">
          <div class="list-text">
            <div class="list-child">2.Factory Address : 2nd Floor, Factory Building, No. 10, Lijun Road, Xili Industrial Zone, Shatou Street, Panyu District, Guangzhou</div>
            <div class="list-child">Floor Space: 4000 square meters</div>
            <div class="list-child">Number Of Technicians: 380</div>
            <div class="list-child">Mobile/Tel: +86 18665619485</div>
            <div class="list-child">Email: James@kadart.com</div>
          </div>

          <div class="img-box">
            <img src="../static/article/article_21.jpg" alt="">
            <img src="../static/article/article_22.jpg" alt="">
            <img src="../static/article/article_23.jpg" alt="">
            <img src="../static/article/article_24.jpg" alt="">
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

  .img-box{
    width: 96%;
    /* height: 20rem; */
    margin: 3rem auto 0;
  }
  .img-box img{
    width: 49%;
    margin-bottom: 0.4rem;
  }
  .img-box img:nth-child(even){
    margin-left: 1%;
  }
  @media screen and (max-width: 350px) {
    .img-box img:nth-child(even){
      margin-left: 0.5%;
    }
  }
</style>
