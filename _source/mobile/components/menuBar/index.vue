<template>
  <div class="menu-box" v-if="ifShow" ref="menuBox">
    <div class="menu">
      <div class="menu-top">
        <div class="icon-back" @click="ifShow = false"></div>
        <div class="icon-my"></div>
      </div>

      <div class="menu-body">
        <div class="menu-list" :class="ifShowMenuList == true ? 'active' : ''">
          <div class="menu-list-content" @click.stop="ifShowMenuList = !ifShowMenuList">
            <div class="menu-list-text">RINGS</div>
            <div class="menu-list-icon"></div>
          </div>

          <div class="menu-list-two">
            <div class="menu-list-two-content">
              <div class="menu-list-text">SHOP BY MATERIAL</div>
              <div class="menu-list-icon"></div>
            </div>

            <div class="menu-child-box">
              <div class="menu-child-box-a">
                <div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div><div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div><div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div>
              </div>

              <div class="lookAll">
                <div class="lookAll-text">Look At All</div>
                <div class="lookAll-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-list">
          <div class="menu-list-content">
            <div class="menu-list-text">RINGS</div>
            <div class="menu-list-icon"></div>
          </div>

          <div class="menu-list-two">
            <div class="menu-list-two-content">
              <div class="menu-list-text">SHOP BY MATERIAL</div>
              <div class="menu-list-icon"></div>
            </div>

            <div class="menu-child-box">
              <div class="menu-child-box-a">
                <div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div><div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div><div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div>
              </div>

              <div class="lookAll">
                <div class="lookAll-text">Look At All</div>
                <div class="lookAll-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-list">
          <div class="menu-list-content">
            <div class="menu-list-text">RINGS</div>
            <div class="menu-list-icon"></div>
          </div>

          <div class="menu-list-two">
            <div class="menu-list-two-content">
              <div class="menu-list-text">SHOP BY MATERIAL</div>
              <div class="menu-list-icon"></div>
            </div>

            <div class="menu-child-box">
              <div class="menu-child-box-a">
                <div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div><div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div><div class="menu-child">Gematone</div>
                <div class="menu-child">Platinum</div>
                <div class="menu-child">Rose Gold</div>
              </div>

              <div class="lookAll">
                <div class="lookAll-text">Look At All</div>
                <div class="lookAll-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-list">
          <div class="menu-list-content">
            <div class="menu-list-text">RINGS</div>
            <div class="menu-list-icon"></div>
          </div>
        </div>
      </div>

      <div class="menu-bottom">
        <div class="list search-box">
          <div class="search-box-left">
            <i class="search-icon"></i>
            <input type="text" class="search-ipt" placeholder="Search...">
          </div>
          <div class="search-box-right"></div>
          <div class="search-line"></div>
        </div>

        <div class="list contact-us">
          <i class="contact-icon"></i>
          <span class="contact-text">Contadct us</span>
          <span>1-800-311-5393</span>
        </div>
        <div class="list sign-box">
          <div class="sign-child">
            <i class="sign-child-icon"></i>
            <span>Sign In</span>
          </div>

          <div class="sign-child">
            <i class="sign-child-icon"></i>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../../assets/js/bus.js'

  export default{
    data(){
      return{
        ifShow: false,
        ifShowMenuList: false
      }
    },
    mounted(){
      var that = this;
      bus.$on('showMenu', function(){
        that.ifShow = true;
        var timer = setTimeout(function(){
          that.$refs.menuBox.classList.add('on');
          timer = null;
        },20)
      })
    },
    methods:{

    }
  }
</script>

<style scoped>
  .menu-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    z-index: 88;
  }

  .menu{
    position: absolute;
    top: 0;
    left: -80%;
    width: 80%;
    height: 100%;
  }

  .menu-box.on{
    background-color: rgba(0, 0, 0, 0.7);
    transition: background 300ms ease-in-out;
  }
  .menu-box.on .menu{
    left: 0;
    transition: left 300ms ease-in-out;
  }

  .menu-top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.8rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11% 0 4%;
  }
  .icon-back{
    width: 2rem;
    height: 2rem;
    background: url(../../static/menu/back.png) no-repeat center;
    background-size: 100% 100%;
  }
  .icon-my{
    width: 1.6rem;
    height: 1.6rem;
    background: url(../../static/menu/logn.png) no-repeat center;
    background-size: 100% 100%;
  }

  .menu-body{
    position: absolute;
    width: 100%;
    height: calc(100% - 20.8rem - 4px);
    top: 5.8rem;
    left: 0;
    z-index: 50;
    background-color: #fff;
    overflow: scroll;
  }

  .menu-list{}
  .menu-list-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    background-color: #5e2648;
    padding: 0 10% 0 5%;
    font-family: DFPYaSong;
    font-size: 1.55rem;
    color: #fff;
  }
  .menu-list-icon{
    width: 1.3rem;
    height: 0.8rem;
    background: url(../../static/menu/down2.png) no-repeat center;
    background-size: 100% 100%;
  }

  .menu-list-two{
    display: none;
  }
  .menu-list.active .menu-list-two{
    display: block;
  }
  .menu-list.active .menu-list-icon{
    transform: rotate(180deg);
  }
  .menu-list-two-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    background-color: #864f71;
    padding: 0 10% 0 5%;
    font-family: DFPYaSong;
    font-size: 1.45rem;
    color: #fff;
  }
  .menu-child-box-a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4%;
    width: 100%;
    flex-flow: wrap;
  }
  .menu-child{
    width: 50%;
    height: 4.5rem;
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #480f32;
    line-height: 4.5rem;
  }
  .lookAll{
    width: 100%;
    height: 5rem;
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: DFPYaSong;
    font-size: 1.3rem;
    color: #878486;
  }


  .menu-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
  }
  .menu-bottom .list{
    height: 5rem;
    background-color: #e5e5e5;
    font-family: DFPYaSong;
    font-size: 1.3rem;
    color: #8a8a8a;
  }
  .menu-bottom .list:not(:last-child){
    margin-bottom: 2px;
  }

  .search-box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 0 5.8%;
  }
  .search-box-left{
    display: flex;
    align-items: center;
    height: 100%;
    width: 80%;
  }
  .search-icon{
    width: 1rem;
    height: 1rem;
    background: url(../../static/index/icon/icon-2.png) no-repeat center;
    background-size: 100% 100%;
  }
  .search-ipt{
    width: 100%;
    height: 60%;
    background-color: transparent;
    margin-left: 5%;
  }
  .search-box-right{
    width: 1rem;
    height: 1rem;
    background: url(../../static/menu/error.png) no-repeat center;
    background-size: 100% 100%;
  }
  .search-line{
    position: absolute;
    top: 80%;
    left: 3%;
    width: 94%;
    height: 1px;
    background-color: #626262;
  }

  .contact-us{
    display: flex;
    align-items: center;
    padding: 0 4.4%;
  }
  .contact-icon{
    width: 1.8rem;
    height: 1.8rem;
    background: url(../../static/menu/phone.png) no-repeat center;
    background-size: 100% 100%;
  }
  .contact-text{
    margin: 0 3%;
  }

  .sign-box{
    display: flex;
    align-items: center;
  }
  .sign-child{
    width: 40%;
    height: 70%;
    display: flex;
    align-items: center;
    padding: 0 5%;
  }
  .sign-child-icon{
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 5%;
  }
  .sign-child:last-child{
    width: 60%;
    padding-left: 8%;
    border-left: 1px solid #878486;
  }
  .sign-child:first-child .sign-child-icon{
    background: url(../../static/menu/logn.png) no-repeat center;
    background-size: 100% 100%;
  }
  .sign-child:last-child .sign-child-icon{
    background: url(../../static/menu/about-us.png) no-repeat center;
    background-size: 100% 100%;
  }
</style>
