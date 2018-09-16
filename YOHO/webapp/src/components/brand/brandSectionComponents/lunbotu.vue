<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="/static/img02/index-banner3.jpg"></div>
        <div class="swiper-slide"><img src="/static/img02/index-banner4.jpg"></div>
        <div class="swiper-slide"><img src="/static/img02/index-banner5.jpg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/dist/js/swiper"
export default {
  name: 'lunbotu',
 mounted(){
        new Swiper('.banner .swiper-container', {
          direction: 'horizontal',
          loop: true,
          effect: 'slide',
          speed: 600,
          autoplay: {
            delay: 2000,
            // disableOnInteraction: false
          },
        });
      }
}
</script>
<style>
 @import "swiper/dist/css/swiper.css";
  .banner {
    width: 100%;
    height: 1.8rem;
    background: #aaa;
    border-bottom: 0.15rem solid #f0f0f0;
  }

  .banner .swiper-container{
    width: 3.75rem;
    height: 1.8rem;
  }

  .banner .swiper-slide img {
    width: 100%;
    height: 100%;
  }
</style>