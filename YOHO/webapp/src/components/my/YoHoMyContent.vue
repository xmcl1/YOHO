<template>
       <!-- 中间主体 -->
        <div class="content">

                <!-- 个人账户信息 -->
                <div class="personalInfo">
                      <div class="one">
                            <div class="tx">
                              <a href=""><img src="../../assets/img/img3/tx.png"></a>
                            </div>
                            <div class="info">
                              <p>
                                YOHO-lxydem6
                                <a href=""><img src="../../assets/img/img3/common.png"></a>
                              </p>
                              <p>
                                118757420g
                                <a href=""><img src="../../assets/img/img3/write.png"></a>
                                <a href=""><img src="../../assets/img/img3/kouling.png"></a>
                              </p>
                            </div>
                      </div>
                      <div class="two">
                            <a href=""><img src="../../assets/img/img3/common.png"></a>
                            <p><img src="../../assets/img/img3/line.png"></p>
                            <a href=""><img src="../../assets/img/img3/sliver.png"></a>
                            <p class="twP"><img src="../../assets/img/img3/line.png"></p>
                            <a href=""><img src="../../assets/img/img3/gold.png"></a>
                            <p class="thP"><img src="../../assets/img/img3/line.png"></p>
                            <a href=""><img src="../../assets/img/img3/white.png"></a>
                            <p class="fP"><img src="../../assets/img/img3/line.png"></p>
                            <a href=""><img src="../../assets/img/img3/black.png"></a>
                      </div>
                      <div class="three">
                            <a href="">
                              <span>成长值<b>0</b></span>
                              <span>查看特权 <img src="../../assets/img/img3/detail.png"></span>
                            </a>
                      </div>
                </div>

                <div class="order">
                      <div class="myOrder">
                            <span>我的订单</span>
                            <a href="">全部订单</a>
                      </div>

                      <div class="logistics">
                        <a href="">
                                <img src="../../assets/img/img3/pay.png">
                                <span>待付款</span>
                            </a>
                        <a href="">
                              <img src="../../assets/img/img3/fahuo.png">
                              <span>待发货</span>
                            </a>
                        <a href="">
                              <img src="../../assets/img/img3/car.png">
                              <span>待收货</span>
                            </a>
                        <a href="">
                              <img src="../../assets/img/img3/camera.png">
                              <span>待评价</span>
                            </a>
                        <a href="">
                              <img src="../../assets/img/img3/tel.png">
                              <span>退/换货</span>
                            </a>
                  </div>
                </div>

                <div class="imgBox">
                      <a href=""><img src="../../assets/img/img3/yohoBuy.png"></a>
                </div>

                <div class="showBox">
                      <a href="">
                        <span>3</span>
                        <span>优惠券</span>
                      </a>
                      <a href="">
                        <span>0</span>
                        <span>有货币</span>
                      </a>
                      <a href="">
                        <span>0</span>
                        <span>限购码</span>
                      </a>
                      <a href="">
                        <span>0</span>
                        <span>礼品卡</span>
                      </a>

                      <a href="">
                        <span>0</span>
                        <span>商品收藏</span>
                      </a>
                      <a href="">
                        <span>0</span>
                        <span>店铺收藏</span>
                      </a>
                      <a href="">
                        <span>0</span>
                        <span>资讯收藏</span>
                      </a>
                      <a href="">
                        <span>11</span>
                        <span>浏览记录</span>
                      </a>

                      <a href="">
                        <img src="../../assets/img/img3/addr.png">
                        <span>地址管理</span>
                      </a>
                      <a href="">
                        <img src="../../assets/img/img3/tuan.png">
                        <span>我的拼团</span>
                      </a>
                      <a href="">
                        <img src="../../assets/img/img3/service.png">
                        <span>客户服务</span>
                      </a>
                      <a href="">
                        <img src="../../assets/img/img3/fenqi.png">
                        <span>有货分期</span>
                      </a>
                </div>

                <div class="recommend">
                      <div class="look">为您优选</div>

                      <yo-ho-content-product></yo-ho-content-product>
                      <yo-ho-content-product></yo-ho-content-product>
                </div>
        </div>
</template>

<script>
    import YoHoContentProduct from "./YoHoContentProduct";
    export default {
        name: "YoHoMyContent",
      components: {YoHoContentProduct}
    }
</script>

<style scoped>
.content{
	width: 100%;
	flex:1;
	overflow-y: scroll;
	overflow-x:hidden;
}

.personalInfo{
	width: 100%;
	height: 1.48rem;
	padding-top: 0.47rem;
	padding-bottom: 0.19rem;
	/*background: url(../img/img3/per_bg.png);*/
	background: #343434;
}
.one{
	width: 100%;
	box-sizing: border-box;
	padding:0.1rem 0.15rem;
	display: -webkit-flex;
}
.one img{
	width:100%; 
}
.one .tx{
	width: 0.48rem;
	height: 0.47rem;
	margin-right: 0.1rem;
}
.one .txt a{
	width: 100%;
}
.one .info{
	flex:1;
	padding-top: 0.03rem;
}
.info p{
	color: #ffffff;
	letter-spacing: 1px;
	line-height: 0.25rem;
	position: relative;
}
.info p:first-child{
	font-size: 0.18rem;
}
.info p:first-child a:first-child{
	width: 0.3rem;
	height: 0.16rem;
	position: absolute;
	left: 1.65rem;
	top: 0.05rem;
}
.info p:last-child{
	font-size: 0.14rem;
	line-height: 0.2rem;
}
.info p:last-child a:first-child{
	width: 0.16rem;
	height: 0.16rem;
	position: absolute;
	left: 0.95rem;
	top: 0.05rem;
}
.info p:last-child a:last-child{
	width: 0.49rem;
	height: 0.14rem;
	position: absolute;
	left:1.16rem;
	top: 0.05rem;
}

.two{
	width: 100%;
	height: 0.54rem;
	padding: 0 0.06rem;
	box-sizing: border-box;
	display: -webkit-flex;
	align-items:center;
	justify-content:space-around;
	position: relative;
}
.two a{
	width: 0.3rem;
	height: 0.16rem;
}
.two p{
	width: 0.41rem;
	position: absolute;
	top: 0.26rem;
	left: 0.57rem;
}
.two .twP{
	left: 1.30rem;
}
.two .thP{
	left: 2.03rem;
}
.two .fP{
	left: 2.76rem;
}
.two p img{
	width: 100%;
}
.two a img{
	width: 100%;
}

.three{
	width: 1.40rem;
	border:1px solid #545454;
	border-radius: 0.25rem;
	margin: 0 auto;
}
.three a{
	width: 100%;
	height: 0.25rem;
	box-sizing: border-box;
	padding: 0 0.1rem;
	line-height: 0.25rem;
	font-size: 0.13rem;
	color: #ffffff;
	display: -webkit-flex;
	position: relative;
}
.three a span:last-child{
	color: #969696;
	margin-left: 0.1rem;
}
.three a span:last-child img{
	width: 0.06rem;
	height: 0.1rem;
	position: absolute;
	right: 0.1rem;
	top: 0.08rem;
}

.order{
	width: 100%;
	margin-top: 0.11rem;
	background: #ffffff;
}
.myOrder{
	width: 100%;
	box-sizing: border-box;
	padding: 0 0.18rem;
	height: 0.46rem;
	display: -webkit-flex;
	align-items:center;
	justify-content:space-between;
	font-size: 0.15rem;
	color: #3c3c3c;
	border-top: 1px solid #e9e5e9;
	font-weight: bold;
}
.myOrder a{
	width: 23%;
	color: #323632;
	background: url(../../assets/img/img3/allOrder.png) no-repeat center right;
	background-size: 0.1rem 0.18rem;
	font-weight: normal;
}
.logistics{
	width: 100%;
	display: -webkit-flex;
	align-items:center;
	justify-content:space-between;
	font-size: 0.12rem;
	color: #343734;
	border-top: 1px solid #f2f0f2;
	border-bottom: 1px solid #f2f0f2;
	padding: 0.17rem 0 0.1rem 0;
}
.logistics a{
	width: 20%;
	text-align: center;
	color: #373737;
}
.logistics a img{
	width: 0.25rem;
	height: 0.25rem;
	margin: 0 auto;
}
.logistics a span{
	display: block;
	line-height: 0.25rem;
}

.imgBox{
	width: 100%;
	height: 1.17rem;
	margin-top: 0.12rem;
}
.imgBox img{
	width: 100%;
}

.showBox{
	width: 100%;
	display: -webkit-flex;
	align-items:center;
	justify-content:space-between;
	flex-wrap:wrap;
	font-size: 0.12rem;
	color: #343734;
	margin-top: 0.12rem;
	background: #ffffff;
}
.showBox a{
	width: 25%;
	text-align: center;
	color: #373737;
	border-bottom: 1px solid #eeebee;
	padding-top: 0.08rem;
}
.showBox a img{
	width: 0.35rem;
	height: 0.34rem;
	margin: 0 auto;
}
.showBox a span{
	display: block;
}
.showBox a span:first-child{
	font-size: 0.14rem;
	line-height: 0.34rem;
	font-weight: bold;
}
.showBox a span:last-child{
	line-height: 0.32rem;
}

.recommend{
    width: 100%;
    line-height: 0.62rem;
	background: #ffffff;
	margin-top: 0.12rem;
}
.recommend img{
    width: 0.46rem;
    height: 0.62rem;
    margin-right: 0.16rem;
}
.look{
	width: 100%;
	height:0.37rem;
	line-height: 0.37rem;
    font-size: 0.16rem;
    color: #2f332f;
	border-bottom: 1px solid #eeebee;
	padding-left: 0.24rem;
	background: url(../../assets/img/img3/shu.png) no-repeat 0.11rem 0.11rem;
	background-size: 0.04rem 0.16rem;
}
</style>
