<template>
    <div class="index" >
        <!-- 头部 -->
        <yo-ho-index-header></yo-ho-index-header>
        <!-- section -->
        <div class="section">
            <!-- /* 轮播图 */ -->
            <div class="banner">
                <yo-ho-index-swiper :lbt01="index1.bannerImg.banner1"></yo-ho-index-swiper>
            </div>
            <!-- 新人专项 -->
            <div class="newPerson">
                <img src="../assets/img02/index-newPerson.jpg" alt="">
            </div>
            <div class="sectionTwo">
                 <img src="../assets/img02/index-sectionTwo.png" alt="">
            </div>
            <!-- 热门品牌hotbrand -->
            <div class="hotbrand">
                <div class="sectionThree">
                    <h4><span>热门品类</span></h4>
                    <div>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree01.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree02.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree03.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree04.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree05.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree06.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree07.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree08.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree09.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree10.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree11.jpg" alt=""></a>
                        <a href="javascript:;"><img src="../assets/img02/index-sectionThree12.jpg" alt=""></a>
                    </div>
                </div>
                <yo-ho-index-only-img :onlyImg="index1.content.showPic"></yo-ho-index-only-img>
                <yo-ho-index-only-img :onlyImg="index1.content.showPic1"></yo-ho-index-only-img>
                <!-- <yo-ho-index-only-img :onlyImg="index1.content.showPic2"></yo-ho-index-only-img> -->
                <yo-ho-sec-five  :onlyImg="index1.content.showPic2"></yo-ho-sec-five>
                <yo-ho-sec-six  :onlyImg="index1.content.showPic3"></yo-ho-sec-six>
                <yo-ho-sec-six  :onlyImg="index1.content.showPic4"></yo-ho-sec-six>
                <yo-ho-index-only-img :onlyImg="index1.content.showPic5"></yo-ho-index-only-img>
                <yo-ho-sec-six  :onlyImg="index1.content.showPic6"></yo-ho-sec-six>
                <yo-ho-sec-seven  :onlyImg="index1.content.showPic7"></yo-ho-sec-seven>
                <yo-ho-index-only-img :onlyImg="index1.content.showPic8"></yo-ho-index-only-img>
                <yo-ho-index-only-img :onlyImg="index1.content.showPic9"></yo-ho-index-only-img>
                <yo-ho-sec-eight  :onlyImg="index1.content.showPic10"></yo-ho-sec-eight>
                <yo-ho-sec-nine  :onlyImg="index1.content.showPic11"></yo-ho-sec-nine>
                <yo-ho-sec-nine  :onlyImg="index1.content.showPic12"></yo-ho-sec-nine>
            </div>
            <div class="recommend">
                <div class="downBanner">
                    <h4><span>编辑推荐</span></h4>
                    <div class="upbanner">
                        <yo-ho-index-swiper :lbt01="index1.bannerImg.banner2"></yo-ho-index-swiper>
                    </div>
                    <div>
                        <img src="../assets/img02/index-secNine-s01.png" alt="">
                        <img src="../assets/img02/index-secNine-s02.png" alt="">
                        <img src="../assets/img02/index-secNine-s03.png" alt="">
                        <img src="../assets/img02/index-secNine-s04.png" alt="">
                        <img src="../assets/img02/index-secNine-s05.png" alt="">
                    </div>
                </div>
                <yo-ho-index-only-img  :onlyImg="index1.content.showPic13"></yo-ho-index-only-img>
                <yo-ho-sec-five  :onlyImg="index1.content.showPic15"></yo-ho-sec-five>
                <yo-ho-sec-five  :onlyImg="index1.content.showPic16"></yo-ho-sec-five>
                <yo-ho-sec-five  :onlyImg="index1.content.showPic17"></yo-ho-sec-five>
                <yo-ho-index-only-img  :onlyImg="index1.content.showPic18"></yo-ho-index-only-img>
            </div>
            <div class="mayBeLike">
                <h4><span>编辑推荐</span></h4>
                <div>
                    <yo-ho-index-list :msgList="index1.maybeLike"></yo-ho-index-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import jquery from 'jquery';
import YoHoIndexHeader from "../components/index/YoHoIndexHeader"
import YoHoIndexOnlyImg from "../components/index/YoHoIndexOnlyImg";
import YoHoSecFive from "../components/index/YoHoSecFive";
import YoHoSecSix from "../components/index/YoHoSecSix";
import YoHoSecSeven from "../components/index/YoHoSecSeven";
import YoHoSecEight from "../components/index/YoHoSecEight";
import YoHoSecNine from "../components/index/YoHoSecNine";
import YoHoIndexList from "../components/index/YoHoIndexList";
import YoHoIndexSwiper from "../components/index/YoHoIndexSwiper";
import {indexServices} from "../apis/yohoapi";
export default {
    components:{
        YoHoIndexOnlyImg,
        YoHoSecFive,
        YoHoSecSix,
        YoHoSecSeven,
        YoHoSecEight,
        YoHoSecNine,
        YoHoIndexList,
        YoHoIndexSwiper,
        YoHoIndexHeader,
    },
    data(){
        return{
            index1:[]
        }
    },
    methods:{
        foucs(){
            indexServices.indexInfoByUserId((data)=>{
            this.index1 = data;
            })
        },
    },
    created(){
    this.foucs();
    },
}


</script>



<style>
    /* @import '../assets/css/index.css'; */
@import '../assets/font/font02/iconfont.css';
.index{
    display: flex;
    height: 100%;
    background: #f0f0f0;
    width: 100%;
}
/* <!-- section --> */
.section{
    flex: 1;
    overflow-y: scroll;
}
/* 轮播图 */
.banner{
    height: 2.555rem;
    width: 100%;
}
.swiper-container {
    width: 100%;
    height: 100%;
}
.swiper-container img{
    width: 100%;
    height: 100%;
}
.newPerson{
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
    padding: 0.09rem 0.15rem 0.24rem;
    background: #fff;
}
.newPerson img{
    width: 100%;
    height: 100%;
}
.sectionTwo{
    box-sizing: border-box;
    padding: 0.09rem 0.15rem;
    background: #fff;
    margin-top: 0.1rem;
}
.sectionTwo img{
    height: 4.1rem;
}
.sectionThree{
    display: flex;
    flex-direction: column;
    background: #fff;
    margin-top: 0.1rem;
}
.sectionThree h4{
    padding: 0 0.15rem;
    margin-top: 0.215rem;
    margin-bottom: 0.12rem;
    font-size: 0.15rem;
    line-height: 0.15rem;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
}
.sectionThree h4 span{
    border-left: 4px solid #000;
    text-indent: 0.15rem;
    display: block;
}
.sectionThree div{
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-flow: wrap;
}
.sectionThree a{
    display: block;
    width: 25%;
    height: 1.025rem;
    box-sizing: border-box;
    border-top: 1px solid #e5e5e5;
    border-right: 1px solid #e5e5e5;
}
.sectionThree a:nth-of-type(4n){
    border-right: 0;
}
.sectionThree a img{
    width: 100%;
    height: 100%;
}
.sectionNine{
    background: #fff;
    margin-top: 0.1rem;
}
.sectionNine div:first-of-type{
    box-sizing: border-box;
    padding: 0.13rem 0.15rem;
    width: 100%;
}
.sectionNine div:first-of-type img{
    width: 100%;
}
.sectionNine div:last-of-type{
    box-sizing: border-box;
    padding: 0.06rem 0.15rem 0.15rem;
    display: flex;
    overflow-x: scroll;
}
.sectionNine div:last-of-type img{
    width: 1.3rem;
    height: 0.88rem;
    padding-right: 0.15rem;
}
.recommend{
    margin-top: 0.1rem;
    overflow: hidden;
}
.downBanner{
    background: #fff;
    overflow: hidden;
}
.downBanner h4{
    padding: 0 0.15rem;
    margin-top: 0.215rem;
    margin-bottom: 0.12rem;
    font-size: 0.15rem;
    line-height: 0.15rem;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
}
.downBanner h4 span{
    border-left: 4px solid #000;
    text-indent: 0.15rem;
    display: block;
}
.upbanner{
    border-top: 1px solid #e5e5e5;
    width: 100%;
    padding: 0.15rem;
    box-sizing: border-box;
    height: 2.46rem;
}
.downBanner>div:last-of-type{
    /* background: #ac0; */
    padding-left: 0.15rem;
    padding-bottom: 0.09rem;
    display: -webkit-flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
}
.downBanner>div:last-of-type img{
    width: 1.3rem;
    height: 0.88rem;
    padding-right: 0.15rem;
    flex-shrink: 0;
}
.mayBeLike{
    margin-top: 0.1rem;
    background: #fff;
    overflow: hidden;
}
.mayBeLike h4{
    padding: 0 0.15rem;
    margin-top: 0.215rem;
    margin-bottom: 0.12rem;
    font-size: 0.15rem;
    line-height: 0.15rem;
    width: 100%;
    text-align: left;
    box-sizing: border-box;
}
.mayBeLike h4 span{
    border-left: 4px solid #000;
    text-indent: 0.15rem;
    display: block;
}
.mayBeLike div{
    display: -webkit-flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>
