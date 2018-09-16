<template>
	<section>
		   <div class="secOne" v-for="val in lis.section" :key="val">
			<div class="time1">
				<span>
					<i :class="val.icon">
					</i>
					<span>{{val.saletime}}</span>
				</span>
			</div>
			<div class="img1">
				<img :src="val.pic" alt="">
			</div>
			<h3>
				{{val.discription}}
			</h3>
			<div class="details">
				<span>{{val.price}}</span>
				<div>
					<span>查看详情</span>
					<i class="iconfont icon-arrow-right-copy"></i>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name:'',
	data(){
		return{
			lis:""
		}
	},
	methods:{
		limitAndPic(){
			fetch("http://localhost:3000/api/json").then(response=>{
				return response.text();
			}).then(result=>{
				let result2=JSON.parse(result)
				this.lis=result2;
				// console.log(this.lis)
			});
		}
	},
	mounted(){
		this.limitAndPic();
	}
}

</script>
<style>
</style>