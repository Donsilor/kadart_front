<template>
  <div>
    <div class="goods-info">
      <div class="goods-tit">Round drop name earrings in sterling silver (8 Characters)</div>
      <div class="goods-num">Style no:3333333333</div>
      <div class="goods-img-box"></div>
      <div class="small-img-box">
        <div class="img-scroll">
          <div class="small-img"></div>
          <div class="small-img"></div>
          <div class="small-img"></div>
          <div class="small-img"></div>
          <div class="small-img"></div>
          <div class="small-img"></div>
        </div>
      </div>
      <div class="share-box clf">
        <div class="fr clf">
          <div class="share-icon share-share-1 fl"></div>
          <div class="share-icon share-share-2 fl"></div>
          <div class="share-icon share-share-3 fl"></div>
          <div class="share-icon share-share-4 fl"></div>
          <div class="share-icon share-share-5 fl"></div>
        </div>
      </div>
      <div class="contact-box">
        <div class="contact-box-left">
          <div class="contact-price">Reference price</div>
          <div class="contact-num">$31.85</div>
        </div>
        <div class="contact-box-btn">CONTACT US</div>
      </div>
      <div class="contact-us">*Please contact us for more ring size information.</div>
    </div>

    <div class="goods-parameter">
      <div class="tit-box">
        <div class="title">PRODUCT PARAMETERS</div>
      </div>

      <div class="parameter-box">
        <div class="parameter-list clf">
          <div class="parameter-name fl">Use</div>
          <div class="parameter-val fl">Gift</div>
        </div>
        <div class="parameter-list clf">
          <div class="parameter-name fl">Gender</div>
          <div class="parameter-val fl">Ladies'</div>
        </div>
        <div class="parameter-list clf">
          <div class="parameter-name fl">Metal material</div>
          <div class="parameter-val fl">Silver</div>
        </div>
        <div class="parameter-list clf">
          <div class="parameter-name fl">Popular styles</div>
          <div class="parameter-val fl">Drop</div>
        </div>
        <div class="parameter-list clf">
          <div class="parameter-name fl">Popular gift types</div>
          <div class="parameter-val fl">Accessories</div>
        </div>
        <div class="parameter-list clf">
          <div class="parameter-name fl">Product customization</div>
          <div class="parameter-val fl">Support for custom</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .goods-info{
    width: 80%;
    margin: 3rem auto 0;
  }

  .goods-tit{
    font-family: DFPYaSong;
    font-size: 1.45rem;
    line-height: 2.2rem;
    font-weight: bold;
    color: #1d003a;
    text-align: center;
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }

  .goods-num{
    font-family: STKAITI;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: underline;
    color: #adb1b4;
    text-align: center;
    line-height: 2.2rem;
  }

  .goods-img-box{
    width: 100%;
    height: 24rem;
    border: 1px solid #c3c3c3;
    margin-top: 1.5rem;
  }

  .small-img-box{
    width: 100%;
    margin-top: 2rem;
    overflow: scroll;
  }
  .img-scroll{
    display: inline-block;
    white-space: nowrap;
  }
  .small-img{
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 1px solid #c3c3c3;
  }

  .share-box{
    height: 2.1rem;
    margin-top: 3rem;
  }
  .share-icon{
    height: 2.1rem;
    width: 2.1rem;
    margin-left: 0.6rem;
  }

  .share-share-1{
    background: url(../../static/index/icon/web-Facebook.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-2{
    background: url(../../static/index/icon/youtube.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-3{
    background: url(../../static/index/icon/tuite.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-4{
    background: url(../../static/index/icon/in.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-5{
    background: url(../../static/index/icon/pinterest.png) no-repeat center;
    background-size: 100% 100%;
  }

  .contact-box{
    width: 100%;
    height: 10.5rem;
    border-top: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .contact-box-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact-price{
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #000;
  }

  .contact-num{
    font-family: FZFYSJW;
    font-size: 1.9rem;
    color: #000;
    margin-top: 0.5rem;
  }

  .contact-box-btn{
    width: 11rem;
    height: 3.3rem;
    background-color: #000;
    text-align: center;
    line-height: 3.3rem;
    font-family: STKAITI;
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
  }

  .contact-us{
    width: 100%;
    height: 5.5rem;
    line-height: 5.5rem;
    text-align: center;
    font-family: STKAITI;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: underline;
    color: #db0f0f;
  }

  .goods-parameter{
    width: 100%;
    background-color: rgba(234, 234, 234, 0.37);
    padding: 3rem 0 3rem 5%;
  }

  .tit-box{
    width: 100%;
    height: 1.9rem;
    border-bottom: 1px solid #000;
  }
  .tit-box .title{
    display: inline-block;
    font-size: 1.3rem;
    line-height: 1.9rem;
    font-weight: bold;
    letter-spacing: -1px;
    border-bottom: 2px solid #000;
  }

  .parameter-box{
    margin-top: 2.5rem;
  }

  .parameter-list{
    height: 2rem;
    line-height: 2.4rem;
    border-bottom: 1px solid #ccc;
  }

  .parameter-name{
    width: 50%;
    height: 100%;
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #1d003a;
    font-weight: bold;
  }
  .parameter-val{
    width: 50%;
    height: 100%;
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #1d003a;
    opacity: 0.71;
    border-left: 1px solid #ccc;
    padding-left: 3%;
  }
</style>
