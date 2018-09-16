<template>
  <!-- 内容 -->
  <div class="contentBox">
    <div class="contentBoxUser">
      <img :src="con.userimg">
      <p>{{con.name}}</p>
      <div class="contentBoxUserVIP">白金</div>
    </div>
    <div class="contentBoxImg">
      <img :src="con.pic">
    </div>
    <div class="contentBoxName">
      <img :src="con.minpic">
      <p>{{con.page}}</p>
      <span>{{con.money}}</span>
      <i class="iconfont icon-you1"></i>
    </div>

    <div class="contentBoxMore">
      <i class="iconfont icon-ai-like"></i>
      <i class="iconfont icon-gengduo"></i>
    </div>
    <!-- 空盒子 -->
    <div class="nullBox"></div>
  </div>
</template>

<script>
    import ShowContentUserTop from "./ShowContentUserTop";
    import ShowContentUserMid from "./ShowContentUserMid";
    import ShowContentUserBot from "./ShowContentUserBot";
    export default {
        name: "ShowContentUser",
        props:["con"],
      components: {ShowContentUserBot, ShowContentUserMid, ShowContentUserTop},
      created(){
        // console.log(this.con)
      },

    }
</script>

<style scoped>
  /* 内容 */
  .contentBox{
    width: 100%;
  }
  .contentBoxUser{
    width: 3.5rem;
    height: 0.4rem;
    margin: 0 auto;
    /* background: red; */
    display: flex;
    align-items: center;
  }
  .contentBoxUser img{
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
  }
  .contentBoxUser p{
    color: #000;
    font-size: 0.18rem;
    margin-left: 0.1rem;
  }
  .contentBoxUserVIP{
    width:0.38rem;
    height: 0.15rem;
    background: #cce1e3;
    border-radius: 8px;
    font-size: 0.1rem;
    text-align: center;
    line-height: 0.1rem;
    color: #3c6588;
    margin-left: 0.1rem;
  }
  .contentBoxImg{
    width: 100%;
    height: 3.7rem;
  }
  .contentBoxImg img{
    width: 100%;
    height: 100%;
  }
  .contentBoxName{
    width: 3.5rem;
    margin: 0 auto;
    margin-top: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    border-bottom: 1px solid #dcdcdc;
  }
  .contentBoxName img{
    width: 0.5rem;
    height: 0.7rem;
  }
  .contentBoxName p{
    color: #000;
    font-size: 0.14rem;
    /* display: block; */
    height: 0.2rem;
  }
  .contentBoxName span{
    color: #c7453d  ;
    font-size: 0.1rem;
    /* display: block; */
    position: absolute;
    margin-top: 0.3rem;
    margin-left: 0.5rem;
  }
  .contentBoxName i{
    position: absolute;
    right: 0;
    top: 0.25rem;
  }
  .contentBoxMore{
    width: 3.5rem;
    height: 0.3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .contentBoxMore i{
    color: #b0b0b0;
  }
</style>
