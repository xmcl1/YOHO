<template>
  <!-- 热门推荐 -->
  <div class="hot">
    <div class="hotTop">
    <i class="iconfont icon-remenicon"></i>
    <span>热门推荐</span>
  </div>

    <div class="hotMid">
      <a href="#" class="hotMidName">
        <div class="hotMidNameImg">
          <img src="../../../static/img/img4/01ccc0e1fd638af07b4dc200a18b03bb45.jpg">
        </div>
        <span class="hotMidNameUsername">yo君</span>
        <span class="hotMidNameUserTime">08.28.2018</span>
      </a>
      <div class="dingzhi">置顶</div>
    </div>

    <div class="hotBot">
      <h3 class="hotBotH3">鞋头至尊OG-YEEZY700</h3>
      <p class="hotBotP">活动规则：
        1.下载YOHO!NOW APP...
      </p>
      <img class="hotBotImg" src="../../../static/img/img4/20180905161038.jpg">
      <div class="hotBotB">
        <span class="hotBotBspan">潮流风向</span>
        <i class="iconfont icon-pinglun"></i>
        <span class="hotBotBspan2">941</span>
        <i class="iconfont icon-dianzan"></i>
        <span class="hotBotBspan3">216</span>
      </div>
    </div>
  </div>
</template>

<script>
    import SheQuContentHotMid from "./SheQuContentHotMid";
    import SheQuContentHotBot from "./SheQuContentHotBot";
    export default {
        name: "SheQuContentHot",
      components: {SheQuContentHotBot, SheQuContentHotMid}
    }
</script>

<style scoped>
  /* 热门推荐 */
  .hot{
    width: 100%;
    background: #fff;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
  }
  .hotTop{
    width: 3.63rem;
    height: 0.35rem;
    /* background: red; */
    display: flex;
    margin-left: 0.12rem;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
  }
  .hotTop i{
    color: #000;
    font-size: 0.18rem;
  }
  .hotTop span{
    color: #000;
    font-size: 0.14rem;
  }
  .hotMid{
    width:3.5rem;
    height: 0.5rem;
    /* background: red; */
    margin:0 auto;
    /* position: relative; */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dingzhi{
    width: 0.45rem;
    height: 0.25rem;
    background: #191919;
    color: #fff;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.25rem;
    /* position: absolute; */
    /* right: 0; */
  }
  .hotMidName{
    display: block;
    width: 2rem;
    height: 0.5rem;
    display: flex;
    /* align-items: center; */
    position: relative;
  }
  .hotMidNameImg{
    width: 0.4rem;
    height: 0.5rem;
    display: flex;
    align-items: center;
  }
  .hotMidName img {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
  }
  .hotMidNameUsername {
    color: #000;
    font-size: 0.16rem;
    display: block;
    width: 1rem;
    position: absolute;
    left: 0.5rem;
    top:0.05rem;
  }
  .hotMidNameUserTime {
    color: #8b8b8b;
    font-size: 0.12rem;
    display: block;
    width: 1rem;
    position: absolute;
    left: 0.5rem;
    top: 0.28rem;
  }
  .hotBot{
    width: 3.5rem;
    margin: 0 auto;
    /* height: 1rem; */
    /* background: red; */
  }
  .hotBotH3{
    color: #000;
    font-size: 0.16rem;
    line-height: 0.25rem;
  }
  .hotBotP{
    color: #888888;
    font-size: 0.15rem;
    line-height: 0.25rem;
  }
  .hotBotImg{
    width:1rem;
    height: 2rem;
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
</style>
