<template>
  <div>
    <slideShow></slideShow>

    <div class="about-box">
      <div class="title">
        <i class="icon" @click="goBack"></i>
        <span>About Us</span>
      </div>

      <div>
        <div class="list">
          <div class="list-tit">Who is KAD ART ?</div>
          <div class="list-text">
            <div class="list-child">KAD ART, we are a global jewelry manufacture enterprise. It is aiming at hiring domestic and overseas experienced jewelry craftsman to produce high quality jewelry for the world.</div>
           </div>
        </div>

        <div class="list">
          <div class="list-tit">How to find us?</div>
          <div class="list-text">
            <div class="list-child">Shenzhen office: 1306-1307 block a,IBC business jewelry building,shenzhen,guangdong province, china, Tel: +86 0755 25160872</div>
            <div class="list-child">Hong kong headquarters: room 04, 23 / F,environmental  trade center,3 abino road,central,Hong kong, Tel: +852 2165 3939</div>
            <div class="list-child">Luxury jewelry branch - hengdeli : shop p2-16/17/19,2 / f,building D,huicui jewelry plaza,xinhui plaza,7 baili emeraldavenue,guicheng, nanhai district,foshan</div>
          </div>
        </div>

        <div class="list">
          <div class="list-tit">Why you choose KAD ART?</div>
          <div class="list-text">
            <div class="list-child">We owned 3 branch offices and 9 factories which have 1200 technicians.</div>
            <div class="list-child">More than 50,000 square meters of self-built production workshop,set design,production,sales as one of the large jewelry manufacture enterprise in China,which monthly output up to 5 million pieces.</div>
            <div class="list-child">Moreover, we have achieved long term cooperation with experienced foreign designers across Europe and America and our designers’teams already have 20 people.All the precious-stones,semi-gems andfashion jewelry material are sourcing around the world. <br>
The high quality  jewelry we showed is made by our practiced craftsman.</div>
            <div class="list-child">This is our belief,we only produce high quality jewelry.</div>
          </div>
        </div>

        <div class="list">
          <div class="list-tit">Branches from Kad Art</div>
          <div class="list-text">
            <div class="list-child-tit">HENGDELI</div>
            <div class="list-child">HENGDELI is a luxury jewelry supplier, who focusing on jadeite, nephrite and precious stones. It is concentrating on producing the top class jewelry of Chinese traditional culture.</div>
          </div>
          <div class="list-text">
            <div class="list-child-tit">BBD Co.</div>
            <div class="list-child">BBD Co. is an international online retailer of jewelry. It is concentratingon selling the diamond jewelry & fashionjewelry made by ourselves. <br>All of our items comply with high quality standards and are greatly appreciated in a variety of different markets throughout the world.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    async asyncData({ app }) {
      var head_r = {
          title: 'One-stop Fine Jewellery Supplier-Kad Art Limited',
          meta: [
            { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
            { hid: 'description', name: 'description', content: 'Find exquisite diamond, gold, and silver jewelry in Kad Art. 3 branch offices, 20 designers to ODM OEM your private label jewelry in short lead time. We guarantee high-quality and excellent customer service!'},
            { hid: 'keywords', name: 'keywords', content: 'Fine jewelry manufacturer, quality jewelry supplier, bulk jewelry factory'}
          ]
      }
      app.head.title = head_r.title;
      app.head.meta = head_r.meta;
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
