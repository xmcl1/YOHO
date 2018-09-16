<template>
    <div class="sectionNine">
        <!-- <div><img src="../assets/img02/index-sectionNine01.png" alt=""></div> -->
        <yo-ho-index-only-img :onlyImg="onlyImg"></yo-ho-index-only-img>
        <div>
            <img v-for="(eightImg,n) in onlyImg.smallPic.smSrc" :key="n" :src="eightImg">
            <!-- <img src="../../assets/img02/index-secNine-s02.png" alt="">
            <img src="../../assets/img02/index-secNine-s03.png" alt="">
            <img src="../../assets/img02/index-secNine-s04.png" alt="">
            <img src="../../assets/img02/index-secNine-s05.png" alt=""> -->
        </div>
    </div>  
</template>

<script>
import YoHoIndexOnlyImg from "./YoHoIndexOnlyImg"
export default {
    props:["onlyImg"],
    components:{
        YoHoIndexOnlyImg
    }
}
</script>
<style scoped>
    .sectionNine{
        background: #fff;
        margin-top: 0.1rem;
    }
    .sectionNine div:last-of-type{
        box-sizing: border-box;
        padding: 0.06rem 0.15rem 0.15rem;
        display: flex;
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
    .sectionNine div:last-of-type img{
        width: 1.3rem;
        height: 0.88rem;
        padding-right: 0.15rem;
        flex-shrink:0;
    }
</style>