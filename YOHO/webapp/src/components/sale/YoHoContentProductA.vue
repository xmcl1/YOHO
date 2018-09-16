<template>
        <a href="">
          <!--<img src="../../assets/img/img3/shoe1.jpg">-->
          <img :src="as.pic">
          <p>{{as.title}}</p>
          <p>
            <span>￥<b>{{as.price1}}</b></span>
            <span>￥<b>{{as.price2}}</b></span>
          </p>
        </a>

</template>

<script>
    export default {
        name: "YoHoContentProductA",
        props:["as"]
    }
</script>

<style scoped>

</style>
