<template>
  <!-- 滑动部分go -->
  <div class="boxOne">

          <!-- 轮播图 -->
          <div class="banner">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,b) in tn.solid" :key="b"><img :src="v" alt=""></div>
                <!--<div class="swiper-slide"><img src="../../assets/img/img4/01aec81ebe185d729135f86a34be7cfe6d.jpg" alt=""></div>-->
                <!--<div class="swiper-slide"><img src="../../assets/img/img4/0110f0d7ae9ecbc3008b349110dc8372c9.jpg" alt=""></div>-->
                <!--<div class="swiper-slide"><img src="../../assets/img/img4/01a746c34771b94f5cf8b809484254468d.jpg" alt=""></div>-->
                <!--<div class="swiper-slide"><img src="../../assets/img/img4/01818b5b233c8641b113805f5b98248810.jpg" alt=""></div>-->
                <!--<div class="swiper-slide"><img src="../../assets/img/img4/014b518fd4f91e9bd12ba5c844d4b00dd6.jpg" alt=""></div>-->
              </div>
              <div class="swiper-pagination">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <guang-content-box-one v-for="(c,m) in tn.contentone" :key="m" :con="c"></guang-content-box-one>
          <!--<guang-content-box></guang-content-box>-->

  </div>


</template>

<script>
  import Swiper from "swiper"
  import GuangContentBox from "./GuangContentBoxTwo";
  import Guang from "../../pages/guang";
  import GuangContentBoxOne from "./GuangContentBoxOne";
    export default {
        name: "GuangContent",
      components: {GuangContentBoxOne, Guang, GuangContentBox},
      props:["tn"],
      data(){
          return{
            // list:[
            //   "../../../static/img/img4/01a644bbf0a4ce17b88d95b7f87159322c.jpg",
            //   "../../../static/img/img4/01a746c34771b94f5cf8b809484254468d.jpg",
            //   "../../../static/img/img4/01aec81ebe185d729135f86a34be7cfe6d.jpg",
            //   "../../../static/img/img4/014b518fd4f91e9bd12ba5c844d4b00dd6.jpg",
            //   "../../../static/img/img4/0110f0d7ae9ecbc3008b349110dc8372c9.jpg",
            //   "../../../static/img/img4/01818b5b233c8641b113805f5b98248810.jpg",
            // ]
          }
      },
      mounted(){
        var swiper = new Swiper('.swiper-container', {
          // direction: 'horizontal',
          loop: true,
          effect: 'slide',
          speed: 600,
          autoplay: {
            delay: 2000,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });

      }
    }



</script>

<style scoped>
  /* 轮播图 */
  .banner{
    width: 100%;
    height: 1.8rem;
    /* background: pink; */
  }

  .swiper-container{
    width: 100%;
    height: 1.8rem;
    position: relative;
  }
  .swiper-wrapper{
    width: 100%;
    height: 1.8rem;
  }
  .swiper-wrapper img{
    width: 100%;
    height: 100%;
    float: left;
  }

  .swiper-container .swiper-pagination{
    width:30%;
    height: 0.18rem;
    position: absolute;
    left: 40%;
    /* bottom:1; */
  }

  .swiper-pagination .swiper-pagination-bullet{
    width: 0.08rem;
    height: 0.08rem;
    float: left;
    border-radius: 50%;
    cursor: pointer;
    background:#fff;
    z-index: 99;
  }
  .boxOne {
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
  }
</style>
