<template>
  <div>
    <slideShow></slideShow>

    <div class="about-box">
      <div class="title">
        <i class="icon"></i>
        <span>About Us</span>
      </div>

      <div>
        <div class="list">
          <div class="list-tit">1.Who is KAD ART ?</div>
          <div class="list-text">
            <div class="list-child">KAD ART, we are a global jewelry manufacture enterprise. It is aiming at hiring domestic and overseas experienced jewelry craftsman to produce high quality jewelry for the world.</div>
           </div>
        </div>

        <div class="list">
          <div class="list-tit">2.How to find us?</div>
          <div class="list-text">
            <div class="list-child">Shenzhen office: 1306-1307 block a,IBC business jewelry building,shenzhen,guangdong province, china, Tel: +86 0755 25160872</div>
            <div class="list-child">Hong kong headquarters: room 04, 23 / F,environmental  trade center,3 abino road,central,Hong kong, Tel: +852 2165 3939</div>
            <div class="list-child">Luxury jewelry branch - hengdeli : shop p2-16/17/19,2 / f,building D,huicui jewelry plaza,xinhui plaza,7 baili emeraldavenue,guicheng, nanhai district,foshan</div>
          </div>
        </div>

        <div class="list">
          <div class="list-tit">3.Why you choose KAD ART?</div>
          <div class="list-text">
            <div class="list-child">We owned 3 branch offices and 9 factories which have 1200 technicians.</div>
            <div class="list-child">More than 50,000 square meters of self-built production workshop,set design,production,sales as one of the large jewelry manufacture enterprise in China,which monthly output up to 5 million pieces.</div>
            <div class="list-child">Moreover, we have achieved long term cooperation with experienced foreign designers across Europe and America and our designers’teams already have 20 people.All the precious-stones,semi-gems andfashion jewelry material are sourcing around the world. <br>
The high quality  jewelry we showed is made by our practiced craftsman.</div>
            <div class="list-child">This is our belief,we only produce high quality jewelry.</div>
          </div>
        </div>

        <div class="list">
          <div class="list-tit">4.Branches from Kad Art</div>
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
  }
</script>

<style scoped>
  .about-box{
    padding: 2.5rem 5%;
  }

  .about-box .title{
    display: flex;
    align-items: center;
    font-family: DFPYaSong;
    font-size: 1.55rem;
    color: #480f32;
  }
  .about-box .title .icon{
    width: 1.6rem;
    height: 1.6rem;
    background: url(../static/article/back2.png) no-repeat center;
    background-size: 100% 100%;
    margin-right: 1rem;
  }

  .list{
    padding: 3rem 0;
    font-family: STKAITI;
    color: #480f32;
  }
  .list:not(:last-child){
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .list .list-tit{
    font-size: 1.45rem;
    letter-spacing: -1px;
  }

  .list .list-child{
    margin-top: 1rem;
    font-size: 1.3rem;
    line-height: 1.95rem;
    padding-left: 3%;
  }

  .list .list-child-tit{
    padding-left: 3%;
    margin-top: 2.6rem;
  }

</style>
