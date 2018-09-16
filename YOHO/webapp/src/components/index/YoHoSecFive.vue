<template>
    <div>
        <div class="sectionFive">
            <!-- <div><img src="../assets/img02/indexsectionfive01.png" alt=""></div> -->
            <yo-ho-index-only-img :onlyImg="onlyImg"></yo-ho-index-only-img>
            <div>
                <a v-for="(fiveImg,n) in onlyImg.smallPic.smSrc" :key="n"><img :src="fiveImg" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script scoped>
import YoHoIndexOnlyImg from "./YoHoIndexOnlyImg"
export default {
    props:["onlyImg"],
    components:{
        YoHoIndexOnlyImg
    }
}
</script>

<style scoped>
    .sectionFive{
        background: #fff;
        margin-top: 0.1rem;
        width: 100%;
        overflow-y: hidden;
    }
    .sectionFive div:first-of-type{
        /* box-sizing: border-box;
        padding: 0.09rem 0.15rem; */
        width: 100%;
    }
    .sectionFive div:first-of-type img{
        width: 100%;
    }
    .sectionFive div:last-of-type{
        box-sizing: border-box;
        padding: 0.06rem 0 0.15rem 0.15rem;
        display: -webkit-flex;
        flex-flow: nowrap;
        overflow-x: scroll;
    }
    .sectionFive div:last-of-type img{
        height:1.3rem;
        width: 0.99rem;
        padding-right: 0.15rem;
    }
</style>