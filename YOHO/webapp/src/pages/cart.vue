<template>
    <div class="cart">
        <!-- 头部 -->
        <yo-ho-cart-header></yo-ho-cart-header>

        <!-- 中间主体 -->
        <yo-ho-cart-content :con="cartsInfo" :down="productA" :tm="allMoney" @pAll="selectSingleCheck"></yo-ho-cart-content>

        <!-- 底部结算 -->
        <yo-ho-cart-payment :three="footer" :tm="allMoney" :tn="allNum"  @sAll="selectAll"></yo-ho-cart-payment>
    </div>

</template>

<script>
import YoHoCartHeader from "../components/cart/YoHoCartHeader";
import YoHoCartPayment from "../components/cart/YoHoCartPayment";
import YoHoCartContent from "../components/cart/YoHoCartContent";
import {indexServices} from "../apis/shopCartSever"
export default {
  components: {YoHoCartContent, YoHoCartPayment, YoHoCartHeader},
  data(){
    return{
      allInfo:[],
      footer:"",
      cartsInfo:[],
      productA:[],
      allNum:0,
      allMoney:0
    }

  },
  methods:{
    foucs(){
      indexServices.indexInfoByUserId((data)=>{
        // this.cartsInfo = data;
        for(var i=0;i<data.length;i++){
          this.footer=data[0];
          this.cartsInfo=data[1];
          this.productA=data[2];
        }
        // console.log(this.footer)
        // console.log(this.cartsInfo)
        // console.log(this.productA)

        this.__counter(this.cartsInfo.productLis)
      })
    },

    // 计算总金额
    __counter(productData){
        var _this = this;
        this.allMoney =0;
        this.allNum =0;
        productData.forEach(function (product,idx) {

            if(product.checked){
              _this.allMoney += product.qal * parseInt((product.price)).toFixed(2);
              _this.allNum += product.qal;
            }
        })
    },

    //整个购物车全选/反选
    selectAll(){
      let isChecked = this.footer.checked;
      this.cartsInfo.productLis.forEach((product,idx)=>{
          product.checked=isChecked
        })
      this.__counter(this.cartsInfo.productLis)
    },
    // 单个商品选择
    selectSingleCheck(pid){
      // console.log((this.cartsInfo.productLis)[1].checked)
      // let ck = this.cartsInfo.productLis[pid].checked;
      let ck = this.cartsInfo.productLis[1].checked;
      this.footer.checked = ck
      this.__counter(this.cartsInfo.productLis)
    },

  },

  created(){
    this.foucs();
  }
}
</script>

<style>
     @import '../assets/css/cart.css';
</style>
