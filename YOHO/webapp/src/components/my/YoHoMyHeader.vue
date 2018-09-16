<template>
      <!-- 头部 -->
      <div class="header">
            <div class="hLeft"></div>
            <div class="hRight">
                    <a href=""><img src="../../assets/img/img3/set.png"></a>
                    <a href=""><img src="../../assets/img/img3/qr.png"></a>
                    <a href=""><img src="../../assets/img/img3/mes.png"></a>
            </div>
      </div>
</template>

<script>
    export default {
        name: "YoHoMyHeader"
    }
</script>

<style scoped>
.header{
	width: 100%;
	height: 0.47rem;
	box-sizing: border-box;
	padding: 0 0.14rem;
	display: -webkit-flex;
	justify-content:space-between;
	align-items:center;
	background:rgba(52,52,52,1);
    position: fixed;
    z-index: 999;
	left: 0;
	top: 0;
}
.hLeft{
	width: 50%;
}
.hRight{
	width: 30%;
	display: -webkit-flex;
	justify-content:space-between;
}
.hRight a{
	width: 0.22rem;
	height: 0.2rem;
}
.hRight a:last-child{
	margin-right: 0;
}
.hRight a img{
	width: 100%;
}
</style>
