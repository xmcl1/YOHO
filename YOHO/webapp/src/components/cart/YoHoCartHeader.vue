<template>
      <!-- 头部 -->
      <div class="header">
        <div class="hLeftc">
          <router-link to="/sale"><img src="../../assets/img/img3/back.png"></router-link>
        </div>
        <div class="hCenterc">购物车</div>
        <div class="hRightc">
          <a href="">编辑</a>
        </div>
      </div>
</template>

<script>
    export default {
        name: "YoHoCartHeader"
    }
</script>

<style scoped>
/* 头部 */
.header{
    width: 100%;
    height: 0.45rem;
    background: #3f3f3f;
    box-sizing: border-box;
    padding: 0 0.16rem;
    display: -webkit-flex;
    align-items: center;
    justify-content:space-between;
}
.hLeftc{
	width: 6%;
}
.hLeftc img{
  width: 100%;
}
.hCenterc{
	flex:1;
	text-align: center;
	text-indent: 0.2rem;
	font-size: 0.15rem;
  color: #ffffff;
  line-height: 0.45rem;
}
.hRightc{
	width: 10%;
}
.hRightc a{
	color: #ffffff;
	font-size: 0.12rem;
	display: block;
  width: 100%;
  text-align: right;
}
</style>
