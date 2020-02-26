<template>
  <div>
    <div class="contact-send">
      <div class="contact-tit">CONTACT US</div>
      <div class="list list-address">
        <i class="icon-left"></i>
        <i class="icon-right"></i>
        <input type="text" class="ipt" placeholder="Email address...">
      </div>

      <div class="list list-subject">
        <i class="icon-left"></i>
        <i class="icon-right"></i>
        <input type="text" class="ipt" placeholder="Message subject...">
      </div>

      <div class="list list-message">
        <i class="icon-left"></i>
        <i class="icon-right"></i>
        <input type="text" class="ipt" placeholder="Message...">
      </div>

      <div class="send">SEND EMAIL</div>
    </div>

    <div class="contact-log-box">
      <div class="contact-log-tit">HISTORICAL MESSAGE</div>
      <div class="contact-log">
        <div class="log-time">12:23</div>
        <div class="message-list message-left">
          <i class="message-icon"></i>
          <i class="message-text">00 0000 00000  000000 00000 00000 000000 00 000 000000 0000 0000 000 0000 0000000 00000000000</i>
        </div>
        <div class="message-list message-right">
          <i class="message-icon"></i>
          <i class="message-text">00 0000 00000  000000 00000 00000 000000 00 000 000000 0000 0000 000 0000 0000000 00000000000</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .contact-send{
    width: 85%;
    margin: 4rem auto;
  }

  .contact-tit{
    font-family: DFPYaSong;
    font-size: 1.85rem;
    color: #480f32;
    letter-spacing: -1px;
    text-align: center;
  }

  .contact-send .list{
    width: 100%;
    height: 4.3rem;
    background-color: rgb(192, 189, 197, 0.21);
    position: relative;
  }
  .contact-send .list:not(:first-child){
    margin-top: 2.7rem;
  }
  .contact-send .icon-left{
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
  }
  .contact-send .icon-right{
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    background: url(../../static/send-message/message-icon-4.png) no-repeat center;
    background-size: 100% 100%;
  }
  .list-address .icon-left{
    background: url(../../static/send-message/message-icon-1.png) no-repeat center;
    background-size: 100% 100%;
  }
  .list-subject .icon-left{
    background: url(../../static/send-message/message-icon-2.png) no-repeat center;
    background-size: 100% 100%;
  }
  .list-message .icon-left{
    background: url(../../static/send-message/message-icon-3.png) no-repeat center;
    background-size: 100% 100%;
  }

  .contact-send .ipt{
    width: 60%;
    height: 3.3rem;
    margin: 0.5rem 14%;
    background-color: transparent;
  }

  .contact-send .send{
    width: 100%;
    height: 3.25rem;
    background-color: #480f32;
    margin-top: 4rem;
    font-family: DFPYaSong;
    font-size: 1.45rem;
    color: #fff;
    text-align: center;
    line-height: 3.25rem;
  }

  .contact-log-box{
    width: 90%;
    margin: 1rem auto;
  }
  .contact-log-tit{
    font-family: DFPYaSong;
    font-size: 1.55rem;
    color: #480f32;
    text-align: center;
  }
  .contact-log{
    width: 100%;
    /* height: 15rem; */
    background-color: rgba(237, 237, 237, 0.87);
    margin: 1.5rem 0 3rem;
    padding: 1.6rem 6%;
  }

  .log-time{
    font-family: STKAITI;
    font-size: 1.1rem;
    color: #c3c2c2;
    text-align: center;
  }

  .message-list{
    width: 100%;
    min-height: 2.1rem;
    display: flex;
    margin-top: 1.3rem;
  }

  .message-right{
    flex-direction: row-reverse;
  }

  .message-icon{
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.35rem;
  }
  .message-left .message-icon{
    background: url(../../static/send-message/message-icon-5.png) no-repeat center;
    background-size: 100% 100%;
    margin-right: 1rem;
  }
  .message-right .message-icon{
    background: url(../../static/send-message/message-icon-6.png) no-repeat center;
    background-size: 100% 100%;
    margin-left: 1rem;
  }

  .message-text{
    font-family: STKAITI;
    font-size: 1.1rem;
    color: #fff;
    font-weight: bold;
    line-height: 2.1rem;
    min-height: 2.1rem;
    padding: 0 1rem;
    background-color: rgba(182, 181, 181, 0.87);
    max-width: calc(88% - 4.8rem);
  }
</style>
