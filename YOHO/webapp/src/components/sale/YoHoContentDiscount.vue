<template>
      <div class="discount">
            <div class="imgBox">
                  <!--<img src="../../assets/img/img3/discount_one.jpg">-->
                  <img :src="discounts.pic">
            </div>
            <div class="info1">
                  <span>{{discounts.title1}}</span>
                  <span>{{discounts.title2}}</span>
            </div>
  </div>


</template>

<script>
    export default {
        name: "YoHoContentDiscount",
        props:["discounts"]
    }
</script>

<style scoped>

</style>
