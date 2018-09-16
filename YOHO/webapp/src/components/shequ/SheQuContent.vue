<template>
  <!-- 滑动部分go -->
  <div class="boxOne">
    <div class="topImg">
      <img src="../../../static/img/img4/shequimg.png">
    </div>
    <!-- 轮播板块 -->
    <!--<div class="bannerBox">-->
    <!--</div>-->
    <!-- 热门推荐 -->
    <she-qu-content-hot></she-qu-content-hot>
    <!-- 用户发表内容 -->
    <she-qu-content-user-one></she-qu-content-user-one>
    <!-- 用户发表内容 -->
    <she-qu-content-user-two></she-qu-content-user-two>
  </div>
  <!-- 滑动部分end -->
</template>

<script>
    import SheQuContentHot from "./SheQuContentHot";
    import SheQuContentUserOne from "./SheQuContentUserOne";
    import SheQuContentUserTwo from "./SheQuContentUserTwo";
    export default {
        name: "SheQuContent",
      components: {SheQuContentUserTwo, SheQuContentUserOne, SheQuContentHot}
    }
</script>

<style scoped>
  .topImg{
    width: 100%;
    height: 1.8rem;
  }
  .topImg img{
    width: 100%;
    height: 100%;
  }
  /* 滑动部分 */
  .boxOne {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
