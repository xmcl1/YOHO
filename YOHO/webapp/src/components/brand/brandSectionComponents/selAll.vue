<template>
<ul class="selAll">
    <li class="selA">
        <ul>
            <li class="top">
                A
            </li>
            <li class="con">
                ADDTOCATR
            </li>
            <li>
                AKOJP.<span>HOT</span>
            </li>
        </ul>
        <ul>
            <li class="top">
                B
            </li>
            <li class="con">
                BABAMA <span>HOT</span>
            </li>
            <li>
                babyONE <span>HOT</span>
            </li>
            <li class="con">
                B+by Beautyberry
            </li>
            <li>
                B.Duck
            </li>
            <li class="con">
                Boboli
            </li>
            <li>
                boxboxbox
            </li>
            <li>
                Buling Bubble
            </li>
        </ul>
        <ul>
            <li class="top">
                C
            </li>
            <li class="con">
                :CHOCOOLATE <span>HOT</span>
            </li>
            <li>
                CHUCHUNA
            </li>
            <li class="con">
                CHUMS <span>HOT</span>
            </li>
            <li>
                CHUMS kids
            </li>
            <li class="con">
                COOIII <span>HOT</span>
            </li>
            <li>
                COQ EN PATE
            </li>
            <li>
                Creamsoda
            </li>
        </ul>
    </li>
</ul>
</template>

<script>
// import filename from '需要引入的文件路径'
export default {
name:''
}

</script>
<style>
/*selA*/
.selAll{
	width:100%;
}
.selAll>li>ul{
	display: flex;
	flex-direction: column;
}
.selAll>li>ul>li{
	border-bottom:1px solid #f0f0f0;
	font-size:.12rem;
	padding:.08rem 0;
	padding-left:.08rem;
}
.selAll>li>ul>li>span{
	background:#c53b32;
	border-radius:.17rem;
	padding:.04rem .06rem;
	color:white;
}
.selAll>li>ul>li:first-of-type{
	background:#f0f0f0;
	font-weight: bold;
}
</style>