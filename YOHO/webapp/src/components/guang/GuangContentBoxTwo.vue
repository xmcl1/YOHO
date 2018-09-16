<template>
  <!-- 内容 -->
  <div class="contentBox">
    <div class="contentBoxTop">
      <div class="contentBoxTopImg">
        <img src="../../../static/img/img4/01ccc0e1fd638af07b4dc200a18b03bb45.jpg">
      </div>
      <div class="contentBoxTopName">
        <span>PONBe</span>
      </div>
      <div class="contentBoxTopDp">
        <span>#搭配</span>
      </div>
    </div>

    <div class="contentBoxMid">
      <img class="contentBoxMidImg" src="../../../static/img/img4/02366767381f92298e61149f59c52bbf48.png">
    </div>
    <div class="contentBoxBot">
      <h3>时尚是个圈，谁也逃不出的复古运动潮！</h3>
      <p>注重配饰的运用</p>
      <div class="contentBoxBotTime">
        <div class="contentBoxBotTimeOne">
          <i class="iconfont icon-shijian00"></i>
          <span>09月03日 17:00</span>
        </div>
        <div class="contentBoxBotTimeTwo">
          <i class="iconfont icon-yanjing"></i>
          <span>1037</span>
        </div>
        <div class="contentBoxBotTimeThree">
          <i class="iconfont icon-aixin"></i>
          <i class="iconfont icon-share"></i>
        </div>
      </div>
    </div>
    <div class="lr">
      <div class="lrBox">
        <div class="lrBoxImg">
          <img src="../../../static/img/img4/0139b47cf7965ae12e1f41f007186307d4.jpg">
        </div>
        <div class="lrBoxName">
          <p>DC Accessor</p>
          <span>￥75.00</span>
        </div>
      </div>
      <div class="lrBox">
        <div class="lrBoxImg">
          <img src="../../../static/img/img4/0139b47cf7965ae12e1f41f007186307d4.jpg">
        </div>
        <div class="lrBoxName">
          <p>DC Accessories Young Mens 长袜</p>
          <span>￥75.00</span>
        </div>
      </div>
      <div class="lrBox">
        <div class="lrBoxImg">
          <img src="../../../static/img/img4/0139b47cf7965ae12e1f41f007186307d4.jpg">
        </div>
        <div class="lrBoxName">
          <p>DC Accessories Young Mens 长袜</p>
          <span>￥75.00</span>
        </div>
      </div>
      <div class="lrBox">
        <div class="lrBoxImg">
          <img src="../../../static/img/img4/0139b47cf7965ae12e1f41f007186307d4.jpg">
        </div>
        <div class="lrBoxName">
          <p>DC Accessories Young Mens 长袜</p>
          <span>￥75.00</span>
        </div>
      </div>
      <div class="lrBox">
        <div class="lrBoxImg">
          <img src="../../../static/img/img4/0139b47cf7965ae12e1f41f007186307d4.jpg">
        </div>
        <div class="lrBoxName">
          <p>DC Accessories Young Mens 长袜</p>
          <span>￥75.00</span>
        </div>
      </div>
    </div>
    <!-- 空盒子 -->
    <div class="nullbox"></div>
  </div>
</template>

<script>
    import GuangContentBoxTop from "./GuangContentBoxTopTwo";
    import GuangContentBoxMid from "./GuangContentBoxMidTwo";
    import GuangContentBoxBot from "./GuangContentBoxBotTwo";
    import GuangContentBoxLr from "./GuangContentBoxLrTwo";

    export default {
        name: "GuangContentBox",
      components: {GuangContentBoxLr, GuangContentBoxBot, GuangContentBoxMid,GuangContentBoxTop}
    }
</script>

<style scoped>

</style>
