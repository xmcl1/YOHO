<template>
  <!-- 内容 -->
  <div class="contentBox">
    <div class="contentBoxTop">
      <div class="contentBoxTopImg">
        <img :src="con.userimgone">
      </div>
      <div class="contentBoxTopName">
        <span>{{con.nameone}}</span>
      </div>
      <div class="contentBoxTopDp">
        <span>{{con.rightone}}</span>
      </div>
    </div>

    <div class="contentBoxMid">
      <img class="contentBoxMidImg" :src="con.imgone">
    </div>

    <div class="contentBoxBot">
      <h3>{{con.h3one}}</h3>
      <p>{{con.pone}}</p>
      <div class="contentBoxBotTime">
        <div class="contentBoxBotTimeOne">
          <i class="iconfont icon-shijian00"></i>
          <span>{{con.timeone}}</span>
        </div>
        <div class="contentBoxBotTimeTwo">
          <i class="iconfont icon-yanjing"></i>
          <span>{{con.lookone}}</span>
        </div>
        <div class="contentBoxBotTimeThree">
          <i class="iconfont icon-aixin"></i>
          <i class="iconfont icon-share"></i>
        </div>
      </div>
    </div>
    <!-- 空盒子 -->
    <div class="nullbox"></div>
  </div>
</template>

<script>
    export default {
        name: "GuangContentBoxOne",
      props:["con"],
      components: {},
      created(){
        // console.log(this.con)
      },
    }
</script>

<style scoped>
  /* 内容 */
  .contentBox{
    width: 100%;
    background: #fff;
  }
  .contentBoxTop{
    width: 3.63rem;
    height: 0.45rem;
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    margin-left: 0.12rem;
  }
  .contentBoxTopImg{
    width: 0.45rem;
    height: 0.45rem;
    display: flex;
    align-items:center;
  }
  .contentBoxTop img{
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    line-height: 0.5rem;
  }
  .contentBoxTopName{
    width: 1rem;
    height: 0.45rem;
    /* background: red; */
    display: flex;
    align-items: center;
  }
  .contentBoxTopName span{
    color: #000;
    font-size: 0.14rem;
  }
  .contentBoxTopDp{
    width: 0.8rem;
    height: 0.2rem;
    background:#4f4f4f;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 1.26rem;
  }
  .contentBoxTopDp span{
    color: #fff;
    font-size: 0.1rem;
  }
  .contentBoxMid{
    width: 100%;
    /* height: 2.5rem; */
  }
  .contentBoxMidImg{
    width:3.5rem;
    height: 2.2rem;
    margin: 0 auto;
  }
  .contentBoxBot{
    width: 100%;
    /* height: 1rem; */
  }
  .contentBoxBot h3{
    display: block;
    width: 3.5rem;
    margin: 0 auto;
    color:#000;
    font-size: 0.18rem;
    margin-top: 0.08rem;
  }
  .contentBoxBot p {
    display: block;
    width: 3.5rem;
    margin: 0 auto;
    color: #000;
    font-size: 0.15rem;
    margin-top: 0.08rem;
  }
  .contentBoxBotTime{
    width: 3.5rem;
    height: 0.3rem;
    /* background: red; */
    margin: 0 auto;
    display: flex;
    line-height: 0.18rem;
    margin-top: 0.08rem;
    /* padding-bottom: 0.1rem; */
  }
  .contentBoxBotTimeOne{
    width: 1.3rem;
    display: flex;
  }
  .contentBoxBotTimeOne i{
    color: #a9a9a9;
    font-size: 0.18rem;
    margin-right: 0.05rem;
  }
  .contentBoxBotTimeOne span{
    color: #a9a9a9;
    font-size: 0.12rem;
  }
  .contentBoxBotTimeTwo{
    width: 1rem;
    display: flex;
  }
  .contentBoxBotTimeTwo i {
    color: #a9a9a9;
    font-size: 0.18rem;
    margin-right: 0.05rem;
  }
  .contentBoxBotTimeTwo span {
    color: #a9a9a9;
    font-size: 0.12rem;
  }
  .contentBoxBotTimeThree{
    width: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-left: 0.6rem;
  }
  .contentBoxBotTimeThree i {
    color: #a9a9a9;
    font-size: 0.18rem;
    margin-right: 0.05rem;
  }
  /* 空盒子 */
  .nullbox{
    width: 100%;
    height: 0.15rem;
    background: #f0f0f0;
  }
</style>

