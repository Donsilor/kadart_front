<template>
  <div class="container">
    <azzd></azzd>
    <div>
      <goodsListPage :info="this.info" :goods_id="goods_id"></goodsListPage>
    </div>
  </div>
</template>

<script>
  import azzd from '~/components/azzd/index.vue'
  import goodsListPage from '~/pageComponents/goodsListPage/index'

  export default {
    components: {
      azzd,
      goodsListPage,
    },
    async asyncData({
      $axios,
      route,
      store,
      app
    }) {
      var path = route.path.slice(route.path.lastIndexOf('/') + 1);
      var keyword = '',
        typeId = '',
        attrId = '',
        priceRange = '';

      if (path.indexOf('=') == -1) {
        keyword = unescape(path);
      } else {
        if (path.indexOf('&') == -1) {
          var arr = path.split('=');
          if (arr[0] == 'type_id') {
            typeId = path.split('=')[1];
          } else if (arr[0] == 'attr_id') {
            attrId = path.split('=')[1];
          }
        } else {
          var arr = path.split(/[=&]/);

          for (var i = 0; i < arr.length; i++) {
            if (arr[i] == 'type_id') {
              typeId = arr[i + 1];
            }
            if (arr[i] == 'attr_id') {
              attrId = arr[i + 1];
            }
            if (arr[i] == 'price_range') {
              priceRange = arr[i + 1];
            }
          }
        }
      }

      return await $axios.post('/goods/style/search', {
        type_id: typeId,
        keyword: keyword,
        sort: '1_0',
        attr_id: attrId,
        attr_value: '',
        price_range: priceRange,
        page: 1,
        page_size: 16
      }).then(res => {
        var t = '',
          d = '',
          k = '';
        switch (typeId) {
          case '2':
            t = 'Best rings in gold, 925 silver,brass and for engagement, marriage, fashion wear and more!';
            d = 'KADArt manufactures huge collections of fine engagement ring, bands ring, fashion ring, vintage ring with diamond, ruby,sapphire precious, semi-precious stone and zircon,rhinestone in 18K,14K gold, 925 sterling silver, brass and alloy at reasonable price. ';
            k = 'gold ring, sterling silver ring, 925 silver ring, engagement ring, fashion ring';
            break;
          case '4':
            t = 'Premium gold, silver and fashion crystal necklace wholesale';
            d = 'KADArt manufacture and wholesale tons of fine fashionable necklace with diamond, ruby, sapphire and amber teeth, opal pendant from 24K, 18K, 14K gold, 925 silver and brass.';
            k = 'diamond necklace, gold necklace, silver necklace, pearl necklace, crystal necklace,chain necklace';
            break;
          case '6':
            t = 'Fashion high-end earring of gold, silver, brass wholesale';
            d = 'KADArt design, manufacturer and wholesale top quality 24K,18K,14Kgold earring, 925 silver earring, brass earring with diamond, pearl, ruby, sapphire and other semiprecious stone.';
            k = 'fashion earring, earring for girl,pearl earring, golden earring, silver earring, diamond earring';
            break;
          case '8':
            t = 'High-quality stylish gold, silver, brass bracelet with diamond, zircon,rhinestone wholesale';
            d = 'KADArt supply fashionable bracelts are made from 18K, 14K gold, 925 silver, brass and alloy with stones with top-notch quality at competitive price for cooperation.';
            k = 'bracelet wholesale, bracelet factory, gold bracelet, silver bracelet,alloy bracelet,brass bracelet,fashion bracelet,';
            break;
          default:
            t = 'Quality gold,silver jewelry  wholesale at factory price';
            d = 'KADArt design, manufacture and wholesale gold,silver,brass and alloy jewelry with diamond,ruby,sapphire,zircon,crystal and rhinestone at very good price.';
            k = 'jewelry factory, jewelry supplier, jewelry manufacturer,China jewelry wholesale,gold jewelry, silver jewelry, brass jewelry,best jewelry, fashion jewelry';
            break;
        }

        if (attrId == 313) {
          t = 'Premium natural jadeite necklace,ring and bangle supplier';
          d = 'KADArt provides top-grade natural jadeite  necklace,ring,pendant and bracelet at reasonable price';
          k = 'jadeite pendant,jadeite necklace,jadeite ring,jadeite bangle, jadeite bracelet,jadeite manufacturer,jadeite wholesale';
        }

        var csDomain = 'https://www-kadart.bddco.cn';
        var Domain = 'https://kadart.com';
        var shareUrl = Domain + route.path;

        // var imgUrl = res.data.data.data[1].style_image;
        // if(imgUrl.indexOf('?')){
        //   imgUrl = imgUrl.split('?')[0];
        // }

        var head_r = {
          title: t,
          meta: [{
              hid: 'description',
              name: 'description',
              content: d
            },
            {
              hid: 'keywords',
              name: 'keywords',
              content: k
            },
            { property: 'og:url', content: shareUrl},
            { property: 'og:image', content: Domain + '/share/index_3.png'},
            // { property: 'og:image:width', content: '600'},
            // { property: 'og:image:height', content: '314'},
            { property: 'og:type', content: 'website'},
            { property: 'og:site_name', content: 'site name'},
            { property: 'og:title', content: t},
            { property: 'og:description', content: d}
          ]
        }
        app.head.title = head_r.title;
        app.head.meta = head_r.meta;


        return {
          info: res.data.data,
          goods_id: typeId
        }
      }).catch(err => {
        // console.log(err)
      })

    }
  }
</script>

<style>
  img {
    width: 100%;
    height: 100%;
  }
</style>
