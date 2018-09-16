<template>
      <!-- 中间主体 -->
      <div class="content">

        <!-- 加购商品 -->
        <div class="shopping">
              <div class="activity">再买￥299.00即可免运费<a href="">去凑单</a></div>
              <ul>
                <li v-for="(four,pid) in con.productLis" :key="pid">
                  <div class="shopInfo">
                    <input type="checkbox"  class="check goodsCheck" v-model="four.checked" @change="proAll(pid)">
                    <div class="shopInfoImg">
                      <a href="#">
                        <!--<img src="../../assets/img/img3/pro1.png">-->
                        <img :src="four.pic">
                      </a>
                    </div>
                    <div class="shopInfoTxt">
                      <h4>{{four.title}}</h4>
                      <div class="proBrief">
                        <span>颜色:{{four.color}}</span>
                        <span>尺码:{{four.ver}}</span>
                      </div>
                      <div class="proPrice">
                        ￥<b>{{four.price}}</b>
                      </div>
                    </div>
                    <div class="numBox">x <span>{{four.qal}}</span></div>
                  </div>
                </li>

                <!--<yo-ho-cart-content-lis v-for="(list,pid) in con.productLis" :key="pid" :pids="pid" :four="list" @sa="lis()"></yo-ho-cart-content-lis>-->
              </ul>
              <div class="shopPrice">
                    总计￥<span class="ShopTotal">{{tm}}</span>=商品金额￥<span class="ShopTotal">{{tm}}</span>
              </div>
        </div>

        <!-- 推荐内容 -->
        <div class="recommend1">
              <div class="look">
                <img src="../../assets/img/img3/recommend2.png">
                看了此商品的人还买了
              </div>
              <div class="product">
                    <yo-ho-content-rec-pro-a v-for="(as,n) in down.productAs" :key="n" :five="as"></yo-ho-content-rec-pro-a>
              </div>
        </div>

      </div>
</template>

<script>
    import YoHoContentRecProA from "./YoHoContentRecProA";
    // import YoHoCartContentLis from "./YoHoCartContentLis";
    export default {
        name: "YoHoCartContent",
        // components: {YoHoCartContentLis, YoHoContentRecProA},
      components: {YoHoContentRecProA},
      props:["con","down","tm"],
      methods:{
          proAll(pid){
            this.$emit("pAll")
          }
      },
      created(){

      }
      // props:{
      //       con:{
      //         type:Array
      //       },
      //       down:{
      //         type:Array
      //       },
      //       singleChk:{
      //          type:Function,
      //          required:true
      //       }
      //   }
    }
</script>

<style scoped>

</style>
