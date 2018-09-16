<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(lbt,n) in lbt01" :key="n"><img :src="lbt"></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>


<script>
    import Swiper from 'swiper';
    export default {
    props:["lbt01"],
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            speed: 1000,
            autoplay:true,
            // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            },
        })
    }
    }
</script>
<style scoped>
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-container img{
    width: 100%;
    height: 100%;
}
</style>