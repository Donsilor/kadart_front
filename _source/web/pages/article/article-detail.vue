<template>
  <div class="container">
    <div class="article-wrap clf">
      <div class="article-left fl">
        <div>
          <div class="article-left-tit">{{articleItem.title}}</div>
          <div class="article-left-box">
            <div class="article-left-list" :class="active_chi == index ? 'active' : 'sd'" v-for="(item, index) in articleItem[active_idx].item" :key="index" @click="active_chi = index">
              <i class="article-left-icon fl"></i>
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">Express Method</div>
        <div class="article-right-box">
          <div class="article-right-list">
            <div class="article-right-list-title">{{articleContent[active_chi].tit}}</div>
            <div class="article-right-list-text">{{articleContent[active_chi].text}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  data() {
    return{
      active_idx: 0,
      active_chi: 0,
      articleItem:[
        {
          title: 'aaa',
          item:[
            {title: 'a1a1',text: 'aaaaaa1111111111111111111111111'},
            {title: 'a2a2',text: 'aaaaaa2222222222222222222222222'},
            {title: 'a3a3',text: 'aaaaaa3333333333333333333333333'},
            {title: 'a4a4',text: 'aaaaaa4444444444444444444444444'},
          ],
        },
        {
          title: 'bbb',
          item:[
            {title: 'b1b1',text: 'bbbbbb1111111111111111111111111'},
            {title: 'b2b2',text: 'bbbbbb2222222222222222222222222'},
            {title: 'b3b3',text: 'bbbbbb3333333333333333333333333'},
            {title: 'b4b4',text: 'bbbbbb4444444444444444444444444'},
          ],
        },
        {
          title: 'ccc',
          item:[
            {title: 'c1c1',text: 'cccccc1111111111111111111111111'},
            {title: 'c2c2',text: 'cccccc2222222222222222222222222'},
            {title: 'c3c3',text: 'cccccc3333333333333333333333333'},
            {title: 'c4c4',text: 'cccccc4444444444444444444444444'},
          ],
        }
      ],
      articleContent:[
        {tit: 'sadagfagfds', text: 'ji1111111111111111111111111snfg jklndslg nielsrgnsl njklsdng'},
        {tit: 'sadagfagfds', text: 'ji2222222222222222222222222snfg jklndslg nielsrgnsl njklsdng'},
        {tit: 'sadagfagfds', text: 'ji3333333333333333333333333snfg jklndslg nielsrgnsl njklsdng'},
        {tit: 'sadagfagfds', text: 'ji4444444444444444444444444snfg jklndslg nielsrgnsl njklsdng'}
      ]
    }
  },
  mounted(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;

    // 顶部轮播图
    this.$axios.get('/article/article-cate/index', {
      params: {
        // 'acdv_id': 11,
      }
    }).then(res => {
      // this.banners = res.data.data;
      console.log(res.data)
    }).catch(function(error) {
      console.log(error);
    });
  }
}
</script>

<style>
  img {
  	width: 100%;
  	height: 100%;
  }
</style>
