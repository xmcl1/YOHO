<template>
      <!-- 底部结算 -->
      <div class="paymentBar">
        <div class="allCheckbox">
          <input type="checkbox" class="check goodsCheck" v-model="three.checked"  @change="selAll()">
          <p>全选</p>
        </div>
        <div class="shopTotal">
          <span>总计：￥<i id="AllTotal" class="total">{{tm}}</i> ( <i>{{tn}}</i>件 ) </span>
          <span>不含运费</span>
        </div>
        <a href="#" class="settlement">结 算</a>
      </div>
</template>

<script>
    export default {
        name: "YoHoCartPayment",
        props:["three","tm","tn"],
        methods:{
          selAll(){
            this.$emit("sAll")
          }
        },
      created(){

      }
    }
</script>

<style scoped>

</style>
