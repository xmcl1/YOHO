<template>
    <!-- 中间主体 -->
    <div class="content">
        <!-- 轮播图 -->
        <div class="banner1">
            <img src="../../assets/img/img3/upTo.jpg">
        </div>

        <!-- 折扣断码区 -->
        <div class="showBox1">
            <a class="discountBox">
              <!--<img src="../../assets/img/img3/discount.jpg">-->
              <img :src="cons.showBox[0].pic">
            </a>
            <a class="saleBox">
              <!--<img src="../../assets/img/img3/lack_sale.jpg">-->
              <img :src="cons.showBox[1].pic">
            </a>
        </div>

        <!-- 折扣专区 -->
        <div class="discountArea">
              <p class="title">折扣专区<a><img src="../../assets/img/img3/three_point.png"></a></p>
              <yo-ho-content-discount v-for="(n,k) in cons.discountLis" :key="k" :discounts="n"></yo-ho-content-discount>
      </div>

        <!-- 断码区 -->
        <div class="lackBox">
              <p class="title">断码区<a><img src="../../assets/img/img3/three_point.png"></a></p>
              <div class="lack">
                    <div class="top"><img src="../../assets/img/img3/special_sale.jpg"></div>
                    <div class="bottom">
                          <div class="up">
                            <a href=""><img src="../../assets/img/img3/clothes.jpg"></a>
                          </div>
                          <div class="down">
                            <a href=""><img src="../../assets/img/img3/pants.jpg"></a>
                            <a href=""><img src="../../assets/img/img3/shoes.jpg"></a>
                          </div>
                    </div>
              </div>
        </div>

        <div class="cutPrice">
            <div class="cutTitle">新晋降价</div>

            <!-- 切换 -->
            <div class="skipBox">
                  <div class="tab">
                <a href="">默认</a>
                <a href="">新品</a>
                <a href="">
                  价格
                  <span></span>
                  <span></span>
                </a>
                <a href="">
                  折扣
                  <span></span>
                  <span></span>
                </a>
                <a href=""> 筛选 </a>
              </div>

                   <div class="productBox">
                      <div class="product">
                            <yo-ho-content-product-a v-for="(n,k) in cons.aLis" :key="k" :as="n"></yo-ho-content-product-a>

                      </div>
                  </div>
            </div>

        </div>
    </div>
</template>

<script>
    import YoHoContentDiscount from "./YoHoContentDiscount";
    import YoHoContentProductA from "./YoHoContentProductA";
    export default {
        name: "YoHoSaleContent",
      components: {YoHoContentProductA, YoHoContentDiscount},
      props:["cons"]
    }
</script>

<style scoped>

</style>
