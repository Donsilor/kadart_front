<template>
  <div class="footer">
    <div class="line"></div>

    <div class="footer-box clf">
      <div class="join-our fl">
        <div class="text">Online Message</div>
        <div class="line-2"></div>
        <div class="text-2">We will reply you on email</div>
        <div class="btn">Send</div>
      </div>
      <div class="footer-box-right fl clf">
        <div class="list fl">
          <div class="child">Customer Service</div>
          <div class="child">
            <a href="/article">Contact Us</a>
          </div>
          <div class="child">
            <a href="">Quality Certification</a>
          </div>
          <div class="child">
            <a href="">Return and Exchange Policy</a>
          </div>
          <div class="child">
            <a href="">Repairs and Services</a>
          </div>
        </div>
        <div class="list fl">
          <div class="child">	About Us</div>
          <div class="child">
            <a href="">Our Brands</a>
          </div>
          <div class="child">
            <a href="">Brand Culture</a>
          </div>
          <div class="child">
            <a href="">Brand Service</a>
          </div>
        </div>
        <div class="list fl">
          <div class="child">Help</div>
          <div class="child">
            <a href="">Message Board</a>
          </div>
          <div class="child">
            <a href="">Login</a>
          </div>
          <div class="child">
            <a href="">Site Map</a>
          </div>
          <div class="child">
            <a href="">Online Shopping</a>
          </div>
          <div class="icon-box">
            <div class="icon">
              <img src="../static/index/icon01.png" alt="">
            </div>
            <div class="icon">
              <img src="../static/index/icon02.png" alt="">
            </div>
            <div class="icon">
              <img src="../static/index/icon03.png" alt="">
            </div>
            <div class="icon">
              <img src="../static/index/icon04.png" alt="">
            </div>
            <div class="icon">
              <img src="../static/index/icon05.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="registered-trademark fl">&copy;ZALES.COM</div>
      <div class="fr">
        <div class="footer-bottom-list fl">
          <a href="">Privacy Policy</a>
        </div>
        <div class="footer-bottom-list fl">
          <a href="">Terms and Conditions</a>
        </div>
        <div class="footer-bottom-list fl">
          <a href="">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style>
  .line {
    height: 4px;
    background-color: #480f33;

  }

  .footer-box {
    margin: 24px 0;
  }

  .join-our {
    width: 210px;
    height: 234px;
    background-color: #f0e2ed;
    padding: 30px 0;
    margin: 0 150px 0 30px;
  }

  .join-our .text {
    width: 170px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    color: #000;
    font-family: Didot;
  }

  .join-our .line-2{
    width: 60px;
    height: 0;
    border-bottom: 1px solid #000;
    margin: 10px auto;
  }

  .join-our .text-2 {
    width: 120px;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .join-our .btn {
    width: 130px;
    height: 24px;
    background-color: #480f33;
    border-radius: 4px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    margin: 30px auto 0;
  }

  .footer-box-right .list {
    width: 200px;
    overflow: hidden;
  }
  .footer-box-right .list:not(:first-child) {
    margin-left: 150px;

  }

  .footer-box-right .list .child {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 10px;
  }

  .footer-box-right .list .child:first-child {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    padding-left: 0;
    font-size: 16px;
    color: #333;
  }

  .icon-box {
    margin: 20px auto 0;
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .icon-box .icon {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .brand {
    width: 100%;
    background-color: #ccc;
    height: 30px;
    margin-top: 30px;
    font-size: 10px;
  }

  .brand .big {
    font-size: 20px;
    margin-left: 10px;
  }

  .footer-bottom {
    height: 46px;
    line-height: 46px;
    padding: 0 100px;
    font-size: 12px;
    color: #fff;
    background-color: #480f33;
  }
  .footer-bottom-list{
    margin-top: 14px;
    height: 18px;
    padding: 0 20px;
    line-height: 18px;
  }
  .footer-bottom .footer-bottom-list:not(:first-child){
    border-left: 1px solid #fff;
  }
</style>
