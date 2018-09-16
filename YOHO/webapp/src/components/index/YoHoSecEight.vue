<template>
    <div class="sectionEight">
        <yo-ho-index-only-img :onlyImg="onlyImg"></yo-ho-index-only-img>
        <div>
            <img v-for="(eightImg,n) in onlyImg.smallPic.smSrc" :key="n" :src="eightImg"/>
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
.sectionEight{
    background: #fff;
    margin-top: 0.1rem;
}
/* .sectionEight div:first-of-type{
    box-sizing: border-box;
    padding: 0.13rem 0.15rem;
    width: 100%;
}
.sectionEight div:first-of-type img{
    width: 100%;
} */
.sectionEight div:last-of-type{
    box-sizing: border-box;
    padding: 0.05rem 0.15rem 0.09rem;
    display: flex;
    justify-content: space-between;
}
.sectionEight div:last-of-type img{
    width: 1.64rem;
    height: 1.64rem;
}
</style>