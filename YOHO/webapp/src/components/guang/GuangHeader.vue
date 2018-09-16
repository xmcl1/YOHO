<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <div class="headerBox">
        <i class="iconfont icon-caidan"></i>
        <router-link to="/" href="">逛</router-link>
        <router-link to="/shequ" href="">社区</router-link>
        <router-link to="/show" href="" style="font-size: 0.2rem;font-weight: 600;">ShOw</router-link>
        <i class="iconfont icon-aixin1"></i>
        <div class="xb"></div>
      </div>
    </div>
    <!-- Tab -->
    <div class="nav">
      <div class="navBox">
        <a href="#">最新</a>
        <a href="#">搭配</a>
        <a href="#">头条</a>
        <a href="#">上新</a>
        <a href="#">视频</a>
      </div>
    </div>
  </div>

</template>

<script>

    export default {
        name: "GuangHeader",
    }
</script>

<style scoped>
/*头部 */
  .header{
    width: 100%;
    height: 0.44rem;
    background: #3f3f3f;
  }
  .headerBox{
    width: 3.4rem;
    height: 0.44rem;
    margin: 0 auto;
    background: #3f3f3f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .header i{
    font-size: 0.25rem;
    color: #fff;
  }
  .header a{
    display: block;
    color: #fff;
    font-size: 0.18rem;
    width: 0.6rem;
    text-align: center;
  }
  /* 下横杠 */
  .xb{
    width: 0.4rem;
    height: 0.03rem;
    background: #fff;
    position: absolute;
    left: 0.63rem;
    bottom: 0;
  }

  /* Tab */
  .nav{
    width: 100%;
    height: 0.44rem;
    background:#fff;
  }
  .navBox{
    width: 3.3rem;
    height: 0.44rem;
    background: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navBox a{
    color: #898989;
    font-size: 0.16rem;
  }
</style>
