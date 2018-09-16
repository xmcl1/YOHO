<template>
  <div class="userContent" style="background: #fff;">
    <div class="userContentName">
      <div class="userContentNameTop">
        <div class="userContentNameImg">
          <img src="../../../static/img/img4/01ccc0e1fd638af07b4dc200a18b03bb45.jpg">
        </div>
        <span class="userContentNameId">Huangjianwen</span>
        <span class="userContentNameTime">08.28.2018</span>
      </div>
      <div class="userContentNameMid">
        <h3 class="userContentNameMidH3">鞋盒欣赏</h3>
        <p class="userContentNameMidP">耐克限量版继续推动时尚的界限，以及它们所包含的一些特殊包装</p>
      </div>
      <div class="userContentNameMidImg2">
        <img src="../../../static/img/img4/20180905192914.jpg">
        <img src="../../../static/img/img4/20180905192922.jpg">
        <img src="../../../static/img/img4/20180905192929.jpg">
        <img src="../../../static/img/img4/20180905192935.jpg">
        <img src="../../../static/img/img4/20180905192941.jpg">
        <img src="../../../static/img/img4/20180905192947.jpg">
        <img src="../../../static/img/img4/20180905192954.jpg">
        <img src="../../../static/img/img4/20180905192959.jpg">
        <img src="../../../static/img/img4/20180905193005.jpg">
      </div>
      <div class="hotBotB">
        <span class="hotBotBspan">聚焦潮鞋</span>
        <i class="iconfont icon-pinglun"></i>
        <span class="hotBotBspan2">212</span>
        <i class="iconfont icon-dianzan"></i>
        <span class="hotBotBspan3">256</span>
      </div>
    </div>
  </div>
</template>

<script>
    import SheQuContentUserTwoTop from "./SheQuContentUserTwoTop";
    import SheQuContentUserTwoMid from "./SheQuContentUserTwoMid";
    import SheQuContentUserTwoMidImg from "./SheQuContentUserTwoMidImg";
    import SheQuContentUserTwoBot from "./SheQuContentUserTwoBot";
    export default {
        name: "SheQuContentUserTwo",
      components: {SheQuContentUserTwoBot, SheQuContentUserTwoMidImg, SheQuContentUserTwoMid, SheQuContentUserTwoTop}
    }
</script>

<style scoped>
  /* 热门推荐 */

  .hotTop i{
    color: #000;
    font-size: 0.18rem;
  }
  .hotTop span{
    color: #000;
    font-size: 0.14rem;
  }

  .hotMidName img {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
  }

  .hotBotB{
    width: 100%;
    height: 0.4rem;
    /* background: red; */
    position: relative;
  }
  .hotBotBspan{
    padding: 0.01rem 0.05rem;
    background: #e9e9e9;
    font-size: 0.12rem;
    position: absolute;
    top: 0.1rem;
  }
  .icon-pinglun{
    position: absolute;
    right: 0.9rem;
    top: 0.07rem;
    font-size: 0.2rem;
    color: #8b8b8b;
  }
  .icon-dianzan{
    position: absolute;
    right: 0.28rem;
    top: 0.09rem;
    /* font-size: 0.2rem; */
    color: #8b8b8b;
  }
  .hotBotBspan2{
    font-size: 0.12rem;
    color: #8b8b8b;
    position: absolute;
    top: 0.1rem;
    right: 0.65rem;
  }
  .hotBotBspan3{
    font-size: 0.12rem;
    color: #8b8b8b;
    position: absolute;
    top: 0.1rem;
    right: 0rem;
  }
  /* 用户发表内容 */
  .userContent{
    width: 100%;
    /* height: 3rem; */
    background: #f7f7f7;
    border-bottom: 1px solid #e0e0e0;
  }
  .userContentName{
    width: 3.5rem;
    margin: 0 auto;
  }
  .userContentNameTop {
    height: 0.6rem;
    width: 3.5rem;
    position: relative;
  }
  .userContentNameImg{
    width: 0.5rem;
    height: 0.6rem;
    display: flex;
    align-items: center;
  }
  .userContentNameImg img{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
  }
  .userContentNameId{
    color: #000;
    font-size: 0.16rem;
    display: block;
    width: 1rem;
    position: absolute;
    left: 0.5rem;
    top: 0.1rem;
  }
  .userContentNameTime{
    color: #8b8b8b;
    font-size: 0.12rem;
    display: block;
    width: 1rem;
    position: absolute;
    left: 0.5rem;
    top: 0.33rem;
  }
  .userContentNameMid{
    width: 100%;
  }
  .userContentNameMidH3{
    color: #000;
    font-size: 0.16rem;
    line-height: 0.25rem;
  }
  .userContentNameMidP{
    color: #888888;
    font-size: 0.15rem;
    line-height: 0.2rem;
  }

  .userContentNameMidImg img{
    width: 1.72rem;
    height: 1.6rem;
    margin-top: 0.06rem;
  }
  .userContentNameMidImg2{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .userContentNameMidImg2 img {
    width: 1.15rem;
    height: 1rem;
    margin-top: 0.06rem;
  }
</style>
