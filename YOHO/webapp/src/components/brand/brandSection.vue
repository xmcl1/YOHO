<template>
<section class="secBrand">
        <div class="searchOuter">
            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜索品牌">
            </div>
        </div>
        <brand-section-lunbotu></brand-section-lunbotu>
        <div class="recommend">
            <h3>推荐品牌</h3>
            <div class="slide1">
                <a href="">
                    <img src="/static/img/img1/1.jpg" alt="">
                    <span>MADNESS</span>
                </a>
                <a href="">
                    <img src="/static/img/img1/2.jpg" alt="">
                    <span>Dickies</span>
                </a>
                <a href="">
                    <img src="/static/img/img1/3.jpg" alt="">
                    <span>Timber</span>
                </a>
                <a href="">
                    <img src="/static/img/img1/4.jpg" alt="">
                    <span>Timberland S</span>
                </a>
                <a href="">
                    <img src="/static/img/img1/1.jpg" alt="">
                    <span>MADNESS</span>
                </a>
                <a href="">
                    <img src="/static/img/img1/2.jpg" alt="">
                    <span>Dickies</span>
                </a>
                <a href="">
                    <img src="/static/img/img1/3.jpg" alt="">
                    <span>Timber</span>
                </a>
                <a href="">
                    <img src="/static/img/img1/4.jpg" alt="">
                    <span>Timberland S</span>
                </a>
            </div>
        </div>
        <div class="conSelect">
            <a href="">全部品牌</a>
            <a href="">新入驻品牌</a>
            <a href="">热门品牌</a>
        </div>
        <brand-section-sel-all></brand-section-sel-all>
        <brand-section-aside></brand-section-aside>
    </section>
</template>

<script>
import brandSectionAside from './brandSectionComponents/aside'
import brandSectionLunbotu from './brandSectionComponents/lunbotu'
import brandSectionSelAll from './brandSectionComponents/selAll'
export default {
  name: "",
  components:{
      brandSectionAside,
      brandSectionLunbotu,
      brandSectionSelAll
  }
};
</script>
<style>
/* section */
.brandBody{
    height:100%;
    display: flex;
    flex-direction: column;
}
.secBrand>.searchOuter{
	width:100%;
	height:.44rem;
	padding:.08rem;
	box-sizing: border-box;
}
.secBrand .search{
	width:100%;
	height:.27rem;
	background:#f2f2f3;
	border-radius:.08rem;
	display: flex;
}
.secBrand .search>i{
	font-size:.2rem;
	line-height: .27rem;
	padding:0 .08rem;
}
.secBrand .search>input{
	outline:none;
	border:none;
	width:3rem;
	height:100%;
	background:#f2f2f3;
}
section{
	flex-direction: column;
	display: unset;
	overflow-y:scroll; 
}
.recommend{
	width:100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.recommend>h3{
	line-height: .47rem;
	font-size: .15rem;
}
.recommend>.slide1{
	width:100%;
	display: flex;
	overflow-x:scroll;
	padding-bottom: .34rem;
	border-bottom: .15rem solid #f0f0f0;
}
.recommend>.slide1::-webkit-scrollbar{
	display: none;
}
.recommend>.slide1>a{
	display: flex;
	flex-direction: column;
	align-items: center;
	margin:0 .22rem;
}
.recommend>.slide1 img{
	width:.51rem;
	/* height:.3rem; */
}
.recommend>.slide1 span{
	color:#bfbfbf;
	font-size: .12rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.conSelect{
	width:100%;
	border-top:1px solid #e5e5e5;
	border-bottom:1px solid #e5e5e5;
	display: flex;
	justify-content: space-evenly;
}
.conSelect>a{
	font-size:.13rem;
	color:#bbbbbb;
    width: 100%;
    text-align: center;
    line-height: .43rem;
}
.conSelect>a:nth-of-type(1){
	color:#525252;
	position: relative;
}
.conSelect>a:nth-of-type(2){
	position: relative;
}
.conSelect>a:nth-of-type(1)::before{
	content:"";
	position: absolute;
	width:1px;
	height:.22rem;
	background:#bbbbbb;
	right:0;
	top:.1rem;
}
.conSelect>a:nth-of-type(2)::before{
	content:"";
	position: absolute;
	width:1px;
	height:.22rem;
	background:#bbbbbb;
	right:0;
	top:.1rem;
}
</style>