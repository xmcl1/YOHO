<template>
    <div class="sale">
        <yo-ho-sale-header></yo-ho-sale-header>

        <yo-ho-sale-content v-for="(i,k) in saleInfo" :key="k" :cons="i"></yo-ho-sale-content>
    </div>
</template>

<script>
    import YoHoSaleHeader from "../components/sale/YoHoSaleHeader";
    import YoHoSaleContent from "../components/sale/YoHoSaleContent";
    import {indexServices1} from "../apis/shopCartSever"
    export default {
      components: {YoHoSaleContent, YoHoSaleHeader},
      data(){
        return{
          saleInfo:[]
        }

      },
      methods:{
        foucs(){
          indexServices1.indexInfoByUserId1((data)=>{
            this.saleInfo = data;
            // console.log(this.saleInfo);
          })
        }
      },
      created(){
        this.foucs();
      }

    }
</script>

<style>
    @import '../assets/css/sale.css';
</style>
