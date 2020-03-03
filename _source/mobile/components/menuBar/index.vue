<template>
  <div class="menu-box" v-if="ifShow" ref="menuBox">
    <div class="menu">
      <div class="menu-top">
        <div class="icon-back" @click="ifShow = false"></div>
        <div class="menu-top-r">
          <div class="icon-my" :class="userAccount != '' ? 'active' : ''" @click="onLogin"></div>
          <div class="user-account" v-if="userAccount != ''">{{userAccount}}</div>
        </div>
      </div>

      <div class="menu-body">
        <div class="menu-list" :class="navList[index].isShow == true ? 'active' : ''" v-for="(nav, index) in navList" :key="index">
          <div class="menu-list-content" @click.stop="showMenuOne(index)">
            <div class="menu-list-text">{{nav.title}}</div>
            <div class="menu-list-icon"></div>
          </div>

          <div class="menu-list-two" :class="navTwo.isShowTwo == true ? 'on' : ''" v-for="(navTwo, idx) in nav.items" :key="idx">
            <div class="menu-list-two-content" @click.stop="showMenuTwo(index, idx)">
              <div class="menu-list-text">{{navTwo.title}}</div>
              <div class="menu-list-icon"></div>
            </div>

            <div class="menu-child-box">
              <div class="menu-child-box-a">
                <div class="menu-child" v-if="idc < 8" v-for="(navChild, idc) in navTwo.items" :key="idc">
                  <a :href="navChild.url">{{navChild.title}}</a>
                </div>
               <div class="menu-child" v-if="idd >= 8 && navTwo.isShowM == true" v-for="(navChild, idd) in navTwo.items" :key="idd+'a'">
                  <a :href="navChild.url">{{navChild.title}}</a>
                </div>
              </div>

              <div class="lookAll" v-if="navTwo.isShowMoreBtn == true">
                <div class="lookAll-text" @click="showMore(index, idx)">Look At All</div>
                <div class="lookAll-icon"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="menu-bottom">
          <div class="list search-box">
            <div class="search-box-left">
              <i class="search-icon" @click="startSearch"></i>
              <input type="text" class="search-ipt" v-model="ipt" :placeholder="placeholder" @focus="placeholder = ''" @blur="placeholder = 'Search...'">
            </div>
            <div class="search-box-right" @click="clearLog"></div>
            <div class="search-line"></div>
          </div>

          <div class="list contact-us">
            <i class="contact-icon"></i>
            <span class="contact-text">Contadct us</span>
            <span>1-800-311-5393</span>
          </div>
          <div class="list sign-box">
            <div class="sign-child" :class="userAccount != '' ? 'active' : ''" @click="loginOrQuit">
              <i class="sign-child-icon"></i>
              <span>{{userAccount == '' ? 'Sign In' : 'Log out'}}</span>
            </div>

            <a class="sign-child" href="/leave-message">
                <i class="sign-child-icon"></i>
                <span>About Us</span>
            </a>
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
        ifShowMenuChild: false,
        // 限制导航数量
        isShowMore: false,
        navList: [],
        userAccount: '',
        placeholder: 'Search...',
        ipt: ''
      }
    },
    mounted(){
      var that = this;
      bus.$on('showMenu', function(){
        that.ifShow = true;
        if(that.ifShow == true){
          var timer = setTimeout(function(){
            that.$refs.menuBox.classList.add('on');
            timer = null;
          },20)
        }
      })

      bus.$on('addOn',function(){
        var username = localStorage.getItem('bdd_user');
        if(!username){
        }else{
        	that.userAccount = username.slice(0,3) + '...' + username.slice(-3);
        }
      })

      var list = JSON.parse(sessionStorage.getItem('navList'));
      if(!list){
        this.$axios.get('/common/menu/index', {
          params: {}
        }).then(res => {
          that.navList = res.data.data;

          that.judge();
          sessionStorage.setItem('navList',JSON.stringify(this.navList))
        }).catch(function(error) {
          console.log(error);
        });
      }else{
        that.navList = list;
      }

      var username = localStorage.getItem('bdd_user');
      if(!username){
      }else{
      	this.userAccount = username.slice(0,3) + '...' + username.slice(-3);
      }
    },
    methods:{
      judge(){
        // this.$nextTick(function () {
           var that = this;
           for(var i=0; i<that.navList.length; i++){
              that.navList[i].isShow = false;
              var listTwo = that.navList[i].items;

              if(listTwo.length != 0){
                for(var j=0; j<listTwo.length; j++){
                  listTwo[j].isShowTwo = false;
                  if(listTwo[j].items.length < 9){
                    listTwo[j].isShowMoreBtn = false;
                  }else{
                    listTwo[j].isShowMoreBtn = true;
                  }
                  listTwo[j].isShowM = false;
                }
              }
            }
            that.navList = JSON.parse(JSON.stringify(that.navList))
         // })
      },
      showMenuOne(k){
        this.navList[k].isShow = !this.navList[k].isShow;
      },
      showMenuTwo(i,j){
        this.navList[i].items[j].isShowTwo = !this.navList[i].items[j].isShowTwo;
      },
      showMore(j, k){
        this.navList[j].items[k].isShowMoreBtn = false;
        this.navList[j].items[k].isShowM = true;
      },
      onLogin(){
        this.ifShow = false;
        this.$emit('onLogin', true)
      },
      startSearch() {
        this.$router.push({
          path: '/search/'+this.ipt
        })

        this.ifShow = false;
      },
      clearLog(){
        this.ipt = '';
      },
      loginOrQuit(){
        var that = this;
        if(this.userAccount == ''){
          this.onLogin()
        }else{
          this.username = '';
          localStorage.removeItem('bdd_user');
          localStorage.removeItem('email_name');
          this.hintText = 'Account logout successful';
          this.ifShowSuccess = true,
          this.ifShow = false;
          this.userAccount = '';

          that.$emit('onQuit', false)
          bus.$emit('closeUserInfo', true)
        }
      }
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
    height: 5rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4.6% 0 4%;
  }

  .icon-back{
    width: 2rem;
    height: 2rem;
    background: url(../../static/menu/back.png) no-repeat center;
    background-size: 100% 100%;
  }
  .menu-top-r{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 100%;
    padding: 0.5rem 0;
  }
  .icon-my{
    width: 2rem;
    height: 2rem;
    background: url(../../static/menu/logn.png) no-repeat center;
    background-size: 100% 100%;
  }
  .icon-my.active{
    background-image: url(../../static/menu/logn-active.png);
  }

  .user-account{
    font-size: 1.2rem;
    color: #999;
  }

  .menu-body{
    position: absolute;
    width: 100%;
    height: calc(100% - 5rem);
    background-color: #fff;
    top: 5rem;
    left: 0;
    z-index: 50;
    overflow: scroll;
  }

  .menu-list{
    /* background-color: #fff; */
  }
  .menu-list:not(:last-child){
    border-bottom: 1px solid #fff;
  }
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
  .menu-list.active .menu-list-content .menu-list-icon{
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
  .menu-child-box{
    display: none;
  }
  .menu-list-two.on .menu-child-box{
    display: block;
  }
  .menu-list-two.on .menu-list-two-content .menu-list-icon{
    transform: rotate(180deg);
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
    color: rgba(72, 15, 50, 0.5);
    line-height: 4.5rem;
  }
  .menu-child:hover{
    color: rgba(72, 15, 50, 1);
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
  .lookAll-icon{
    width: 1.2rem;
    height: 1.2rem;
    background: url(../../static/menu/look.png) no-repeat center;
    background-size: 100% 100%;
    margin-left: 2%;
  }


  .menu-bottom{
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
    width: 50%;
    height: 70%;
    display: flex;
    align-items: center;
    padding: 0 5%;
    box-sizing: border-box;
  }
  .sign-child-icon{
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 5%;
  }
  .sign-child:last-child{
    border-left: 1px solid #878486;
  }
  .sign-child:first-child .sign-child-icon{
    background: url(../../static/menu/logn.png) no-repeat center;
    background-size: 100% 100%;
  }
  .sign-child:first-child.active .sign-child-icon{
    background-image: url(../../static/menu/logn-active.png);
  }

  .sign-child:last-child .sign-child-icon{
    background: url(../../static/menu/about-us.png) no-repeat center;
    background-size: 100% 100%;
  }
</style>
