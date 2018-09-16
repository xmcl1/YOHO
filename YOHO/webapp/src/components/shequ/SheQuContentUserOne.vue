<template>
  <div class="userContent">
    <div class="userContentName">
      <div class="userContentNameTop">
        <div class="userContentNameImg">
          <img src="../../../static/img/img4/01ccc0e1fd638af07b4dc200a18b03bb45.jpg">
        </div>
        <span class="userContentNameId">Leo_枫</span>
        <span class="userContentNameTime">08.28.2018</span>
      </div>
      <div class="userContentNameMid">
        <h3 class="userContentNameMidH3">M_DSK音乐节</h3>
        <p class="userContentNameMidP">又炸又热、skr...腿软了，#今日日常##就要玩点新的#hahahah </p>
      </div>
      <div class="userContentNameMidImg">
        <img src="../../../static/img/img4/20180905175010.jpg">
        <img src="../../../static/img/img4/20180905175031.jpg">
        <img src="../../../static/img/img4/20180905175037.jpg">
        <img src="../../../static/img/img4/20180905175043.jpg">
      </div>
      <div class="hotBotB">
        <span class="hotBotBspan">潮人自曝</span>
        <i class="iconfont icon-pinglun"></i>
        <span class="hotBotBspan2">212</span>
        <i class="iconfont icon-dianzan"></i>
        <span class="hotBotBspan3">256</span>
      </div>
    </div>
  </div>
</template>

<script>
    import SheQuContentUserOneTop from "./SheQuContentUserOneTop";
    import SheQuContentUserOneMid from "./SheQuContentUserOneMid";
    import SheQuContentUserOneMidImg from "./SheQuContentUserOneMidImg";
    import SheQuContentHotBot from "./SheQuContentHotBot";
    import SheQuContentUserOneBot from "./SheQuContentUserOneBot";
    export default {
        name: "SheQuContentUserOne",
      components: {
        SheQuContentUserOneBot,
        SheQuContentHotBot, SheQuContentUserOneMidImg, SheQuContentUserOneMid, SheQuContentUserOneTop}
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
  .userContentNameMidImg{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .userContentNameMidImg img{
    width: 1.72rem;
    height: 1.6rem;
    margin-top: 0.06rem;
  }

  .userContentNameMidImg2 img {
    width: 1.15rem;
    height: 1rem;
    margin-top: 0.06rem;
  }


</style>
