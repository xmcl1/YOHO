<template>
    <div class="sectionSeven">
        <!-- <div><img src="../assets/img02/index-sectionSeven01.png" alt=""></div> -->
        <yo-ho-index-only-img :onlyImg="onlyImg"></yo-ho-index-only-img>
        <div>
            <a href="javascript:;" v-for="(sevenImg,n) in onlyImg.smMsg.smSrc" :key="n">
                <img :src="sevenImg.img" alt="">
                <p>{{sevenImg.title}}</p>
                <p>{{sevenImg.time}}</p>
            </a>
        </div>
    </div>  
</template>

<script>
import YoHoIndexOnlyImg from "./YoHoIndexOnlyImg"

export default {
    // mounted(){
    //     console.log(this.onlyImg.smMsg.smSrc);
    // },
    props:["onlyImg"],
    components:{
        YoHoIndexOnlyImg
    }
}
</script>
<style scoped>
.sectionSeven{
    background: #fff;
    margin-top: 0.1rem;
}
.sectionSeven div:last-of-type{
    box-sizing: border-box;
    padding: 0.06rem 0 0.06rem 0.15rem;
    display: -webkit-flex;
    flex-flow: nowrap;
    overflow-x: scroll;
}
.sectionSeven div:last-of-type a{
    display: block;
    width: 1.3rem;
    height: 1.4rem;
    padding-right: 0.15rem;
}
.sectionSeven div:last-of-type a img{
    width: 1.3rem;
}
.sectionSeven div:last-of-type a p{
    line-height: 0.2rem;
    font-size: 0.11rem;
    text-align: center;
    color: #444444;
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
}
.sectionSeven div:last-of-type a p:first-of-type{
    margin-top: 0.15rem;
}   
</style>