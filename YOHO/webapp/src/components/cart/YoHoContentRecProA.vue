<template>
      <a href="">
        <!--<img src="../../assets/img/img3/shoe5.jpg">-->
        <img :src="five.pic">
        <p>{{five.title}}</p>
        <p>
          <span>￥<b>{{five.priceCur}}</b></span>
          <span>￥<b>{{five.priceOld}}</b></span>
          <span class="cart"><img src="../../assets/img/img3/cart.png"></span>
        </p>
      </a>
</template>

<script>
    export default {
        name: "YoHoContentRecProA",
        props:["five"],
        created(){
          // console.log(this.five)
        }

    }
</script>

<style scoped>

</style>
