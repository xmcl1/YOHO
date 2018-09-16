<template>
      <div class="product">
              <a href="">
                <img src="../../assets/img/img3/shoe5.jpg">
                <p>converse Chuck Taylor All Star 70 高帮休闲鞋</p>
                <p>
                  <span>￥<b>399</b></span>
                  <span>￥<b>699</b></span>
                  <span class="cart"><img src="../../assets/img/img3/three_point.png"></span>
                </p>
              </a>
              <a href="">
                <img src="../../assets/img/img3/shoe6.jpg">
                <p>converse Chuck Taylor All Star 70 高帮休闲鞋</p>
                <p>
                  <span>￥<b>399</b></span>
                  <span>￥<b>699</b></span>
                  <span class="cart"><img src="../../assets/img/img3/three_point.png"></span>
                </p>
              </a>
              <a href="">
                <img src="../../assets/img/img3/shoe7.jpg">
                <p>converse Chuck Taylor All Star 70 高帮休闲鞋</p>
                <p>
                  <span>￥<b>399</b></span>
                  <span>￥<b>699</b></span>
                  <span class="cart"><img src="../../assets/img/img3/three_point.png"></span>
                </p>
              </a>
              <a href="">
                <img src="../../assets/img/img3/shoe8.jpg">
                <p>converse Chuck Taylor All Star 70 高帮休闲鞋</p>
                <p>
                  <span>￥<b>399</b></span>
                  <span>￥<b>699</b></span>
                  <span class="cart"><img src="../../assets/img/img3/three_point.png"></span>
                </p>
              </a>
      </div>
</template>

<script>
    export default {
        name: "YoHoContentProduct"
    }
</script>

<style scoped>
.product{
	width: 100%;
	display: -webkit-flex;
	flex-wrap: wrap;
}
.product a{
    width: 50%;
    padding: 0.18rem 0.1rem;
	background: #ffffff;
	box-sizing: border-box;
}
.product a img{
	width: 1.67rem;
	height: 2.16rem;
}
.product .cart{
    width: 0.18rem;
    height: 0.06rem;
    position: absolute;
    right: 0.02rem;
    top: 0.15rem;
}
.product .cart img{
   width: 100%;
   height: 100%;
}
.product a p:first-of-type{
	font-size: 0.14rem;
	color: #404440;
	line-height: 0.16rem;
	padding-top: 0.14rem;
}
.product a p:last-child{
	width: 1.65rem;
	line-height: 0.35rem;
	font-size: 0.11rem;
    color: #ff0303;
    position: relative;
}
.product a p:last-child span:nth-child(2){
	color: #c8c9c8;
	text-decoration: line-through;
	margin-left: 0.1rem;
}

</style>
