<template>
	<div id="leftList">
		<div class="leftTop">
			<span class="checked">MEN</span>
			<span>WOMEN</span>
		</div>
		<ul class="listUls" @click="noshow">
      <li><router-link to="/limitSale">限时发售 LIMITED</router-link></li>
			<li><router-link to="/blk">潮流优选 BLK</router-link></li>
			<li><router-link to="sale">激价 SALE</router-link></li>
			<li>潮童 KIDS</li>
			<li>创建 KIDS</li>
			<li>YOHO!STORE</li>
			<li><router-link to="/artsToys">Arts&Toys</router-link></li>
		</ul>
	</div>
</template>

<script>
    export default {
    
    methods:{
      noshow:function(){
          var app = document.getElementById("app");
          // if (app.className == "active") {
            app.style.cssText = "transform :translateX(0);transition:all 0.2s;"
            app.classList.remove ("active")
        },
      }
    
    }
</script>
<style>
    #leftList{
            width: 2.5rem;
            /* overflow: hidden; */
			height: 100%;
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 0;
			left: -2.5rem;
			z-index: 9999;
		}
		.leftTop{
			width: 100%;
			height: 0.44rem;
			background: #3f3f3f;
			box-sizing: border-box;
			padding: 0.15rem 0.3rem 0.02rem;
			display: flex;
			justify-content: space-between;
		}
		.leftTop span{
			display: block;
			width: 0.9rem;
			height: 0.24rem;
			line-height: 0.24rem;
			text-align: center;
			font-size: 0.11rem;
			font-weight: 900;
			color: #fff;
		}
		.leftTop .checked{
			border-bottom: 6px solid #fff;
		}
		#leftList ul{
			height: 100%;
			background: #fff;
		}
		#leftList ul li{
			width: 100%;
			display: block;
			height: 0.54rem;
			box-sizing: border-box;
			padding: 0.15rem;
			font-size: 0.14rem;
			color: #444444;
			line-height: 0.24rem;
			border-bottom: 1px solid #f0f0f0;
		}
    #leftList ul li a{
      color: #444444;
    }
    #leftList ul li .router-link-exact-active{
      color: #444444;
    }
</style>
