<template>
    <div class="sectionSix">
        <yo-ho-index-only-img :onlyImg="onlyImg"></yo-ho-index-only-img>
        <div>
            <a href="javascript:;" v-for="(sixImg,n) in onlyImg.smallImg" :key="n">
                <img :src="sixImg.smSrc" alt="">
                <p>{{sixImg.title}}</p>
            </a>
            <!-- <a href="javascript:;">
                <img src="../..\assets\img02\index-secSix-s02.jpg" alt="">
                <p>YOHOOD</p>
            </a>
            <a href="javascript:;">
                <img src="../..\assets\img02\index-secSix-s03.jpg" alt="">
                <p>PUMA</p>
            </a>
            <a href="javascript:;">
                <img src="../..\assets\img02\index-secSix-s04.jpg" alt="">
                <p>古由卡/Guuka</p>
            </a>
            <a href="javascript:;">
                <img src="../..\assets\img02\index-secSix-s05.jpg" alt="">
                <p>Dickies</p>
            </a>
            <a href="javascript:;">
                <img src="../..\assets\img02\index-secSix-s06.jpg" alt="">
                <p>中国李宁</p>
            </a>
            <a href="javascript:;">
                <img src="../../assets/img02/index-secSix-s07.jpg" alt="">
                <p>NOTHOMME</p>
            </a> -->
        </div>
    </div>
</template>

<script>
import YoHoIndexOnlyImg from "./YoHoIndexOnlyImg"
export default {
    mounted(){
        // console.log(this.onlyImg.smallImg);
    },
    props:["onlyImg"],
    components:{
        YoHoIndexOnlyImg
    }
}
</script>
<style scoped>
    .sectionSix{
        background: #fff;
        margin-top: 0.1rem;
    }
    /* .sectionSix div:first-of-type{
        box-sizing: border-box;
        padding: 0.13rem 0.15rem;
        width: 100%;
    }
    .sectionSix div:first-of-type img{
        width: 100%;
    } */
    .sectionSix div:last-of-type{
        box-sizing: border-box;
        padding: 0.06rem 0 0.06rem 0.15rem;
        display: -webkit-flex;
        flex-flow: nowrap;
        overflow-x: scroll;
    }
    .sectionSix div:last-of-type a{
        display: block;
        width: 0.94rem;
        height: 1.74rem;
        padding-right: 0.15rem;
    }
    .sectionSix div:last-of-type a img{
        width: 0.94rem;
    }
    .sectionSix div:last-of-type a p{
        line-height: 0.42rem;
        font-size: 0.09rem;
        text-align: center;
        color: #444444;
    }
</style>