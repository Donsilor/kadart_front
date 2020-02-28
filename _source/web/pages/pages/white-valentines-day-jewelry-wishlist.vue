<template>
  <div class="white-valentine-day">
    <div class="tit">Dreams of diamond, dreams of love.</div>

    <div class="img-1">
      <img src="../../static/white/white-2.jpg" alt="">
    </div>

    <div class="text">
      <div class="text-paragraph">I bet pink and sparkling are the childhood dream for every girl, they wish to own a jewelry box full of <a href="">diamond rings</a> and necklaces with pink crystal stones.</div>
    </div>

    <div class="img-box">
      <img class="img-small" src="../../static/white/white-3.jpg" alt="">
    </div>

    <div class="explain">Oval shaped diamond earring with pink stone</div>

    <div class="text">
      <div class="text-paragraph">We watched our mom get ready, put on some jewelry and after she left, we stand in front of the mirror and cannot wait to try those big rings and <a href="">bracelets</a> on.</div>
    </div>

    <div class="img-box">
      <img class="img-small" src="../../static/white/white-5.jpg" alt="">
    </div>

    <div class="explain">Heart beat necklace &amp; Heart with wing necklace</div>

    <div class="text">
      <div class="text-paragraph">Our jewelry wishlist is getting longer and longer, why not fulfilling it on White Valentine's Day.</div>
      <div class="text-paragraph">We need no lovers, because the No.1 biggest admirer should be ourselves.</div>
      <div class="text-paragraph">Self-love is needed and just start with a piece of dedicate and valueable <a href="">jewelry.</a></div>
    </div>


    <div class="img-box">
      <img class="img-small" src="../../static/white/white-4.jpg" alt="">
    </div>

    <div class="explain">Waterdrop earrings with pearl &amp; Cystal diamond earrings</div>

    <div class="img-box">
      <img class="img-small" src="../../static/white/white-6.jpg" alt="">
    </div>

    <div class="explain">Cushion diamond rings in Rose gold &amp; Silver</div>

    <div class="gifPlayer">
      <img src="https://pic2.zhimg.com/v2-0df063bd3cfbabcbdc43c5bb545cbdc1_b.jpg" alt="">
    </div>

  </div>
</template>

<script>
  export default{
    head() {
      return {
        title: 'Dreams of diamond dreams of love on White Valentine\'s Day',
        meta: [{
            hid: 'description',
            name: 'description',
            content: 'Fill your jewelry wishlist on White Valentine\'s Day, try selected Kad Art Fine Jewelry Collection.'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: 'jewelry wishlist, white valentine\'s day gift ideas, selected jewelry collection'
          }
        ]
      }
    }
  }
</script>

<style>

  img{
    width: 100%;
  }
  .white-valentine-day{
    width: 800px;
    margin: 20px auto;
  }

  .tit{
    font-weight: 600;
    font-size: 24px;
    line-height: 1.22;
    margin: 24px 0 60px;
    word-wrap: break-word;
    text-align: center;
  }

  .img-1{
    margin-bottom: 24px;
  }

  .text{
    margin-top: 20px;
    font-size: 16px;
  }
  .text-paragraph{
    margin: 1.4em 0;
  }

  .text-paragraph a{
    text-decoration: underline;
  }

  .explain{
    margin-top: .66667em;
    padding: 0 1em;
    font-size: .9em;
    line-height: 1.5;
    text-align: center;
    color: #999;
    margin: 1.4rem 0 2rem;
  }

  hr {
      margin: 4em auto;
      width: 240px;
      max-width: 100%;
      border: none;
      border-top: 1px solid #d3d3d3;
  }

  .gifPlayer{
    display: block;
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    cursor: pointer;
    text-align: center;
  }
</style>
