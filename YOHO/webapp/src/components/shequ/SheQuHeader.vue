<template>
  <!-- 头部 -->
  <div class="header">
    <div class="headerBox">
      <i class="iconfont icon-caidan"></i>
      <router-link to="/" href="">逛</router-link>
      <router-link to="/shequ" href="">社区</router-link>
      <router-link to="/show" href="" style="font-size: 0.2rem;font-weight: 600;">ShOw</router-link>
      <i class="iconfont icon-bianji"></i>
      <div class="xb2" ></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SheQuHeader"
    }
</script>

<style>
  /* 头部 */
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
  .xb2 {
    width: 0.45rem;
    height: 0.03rem;
    background: #fff;
    position: absolute;
    left: 1.47rem;
    bottom: 0;
  }

</style>
