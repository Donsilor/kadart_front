<template>
  <div>
    <slideShow></slideShow>

    <div class="about-box">
      <div class="title">
        <i class="icon" @click="goBack"></i>
        <span>Express Method</span>
      </div>

      <div>
        <div class="list">
          <div class="list-tit">EMS DHL UPS FEDEX TNT 3-10DAYS</div>
          <div class="list-text">
            <div class="list-child">You might be required to sign for your delivery. If we are unable to deliver, our carrier may return your parcel to its depot and leave a note explaining where your parcel is and how you can rearrange delivery or collect your parcel. If delivery is not rearranged or your parcel collected it will be returned to our warehouse. Please contact us at ben@kadart.com to arrange redelivery in these circumstances. You may be responsible for additional delivery charges on any redelivery.</div>
            <div class="list-child">Delivery times are estimates only. We will try hard to meet our delivery times but are not responsible for any delayed or unsuccessful deliveries. Sometimes orders may take longer to fulfil and certain services may be removed during our seasonal sales, periods of promotional activity or due to circumstances beyond our control, such as adverse weather. If your delivery does not arrive when expected, please contact us on ben@kadart.com.</div>
            <div class="list-child">Please note: Kadart is not aware of and will not be held responsible for any additional taxes and customs charges incurred by your country when delivery. Please check your local customs procedures. In all cases the package is sent with a description of the contents for customs and taxes.</div>
          </div>
        </div>

        <div class="list">
          <div class="list-tit">Contact Us</div>
          <div class="list-text">
            <div class="list-child">If you have any questions about delivery, please contact us via ben@kadart.com</div>
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
