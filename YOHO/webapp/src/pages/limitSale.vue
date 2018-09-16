<template>
    <div class="limitSale">
        <header>
            <div class="headerTop">
                <router-link to="/" style="color: #fff;"><i class="iconfont icon-jiantou-copy"></i></router-link>
                <h3>限时发售</h3>
            </div>
            <div class="headerBottom">
                <a href="" v-for="(val,index) in lis.header" :key="val" :value="index">
                    <i :class="val.icon"></i>
                    <span>{{val.sale}}</span>
                </a>
                <!-- <a href="">
                    <i class="iconfont icon-shandian1"></i>
                    <span>即将发售</span>
                </a>
                <a href="">
                    <i class="iconfont icon-shengqian"></i>
                    <span>已经发售</span>
                </a> -->
            </div>
        </header>
        <limit-sale-section></limit-sale-section>
    </div>
</template>

<script>
import limitSaleSection from "../components/limitSale/limitSaleSection";
export default {
  name: "",
  components: {
    limitSaleSection
  },
  data() {
    return {
      lis: []
    };
  },
  methods: {
    limitSale() {
      fetch("http://localhost:3000/api/json")
        .then(response => {
          return response.text();
        })
        .then(result => {
          let result2 = JSON.parse(result);
          this.lis = result2;
        });
    }
  },
  created() {
    this.limitSale();
  }
};
</script>

<style>
 /*@import url(/static/font/font1/iconfont.css); */
@import url(../../static/font/font1/iconfont.css);
.limitSale {
  display: flex;
  flex-direction: column;
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
}
html {
  font-size: 26.67vw;
  height: 100%;
}
body {
  height: 100%;
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
}
/*header*/
header {
  width: 100%;
  font-size: 0.13rem;
  color: white;
  position: relative;
  line-height: 0.44rem;
}
.headerTop {
  background: #3f3f3f;
}
.headerTop i {
  font-size: 0.22rem !important;
  margin-left: 0.2rem;
}
.headerTop h3 {
  font-size: 0.22rem !important;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%);
}
.headerBottom {
  width: 100%;
  height: 0.44rem;
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.13rem;
  display: flex;
  justify-content: space-evenly;
  background: white;
}
.headerBottom i {
  font-size: 0.2rem;
}
.headerBottom > a {
  color: #b0b0b0;
  display: flex;
  position: relative;
}
.headerBottom > i:nth-of-type(1) {
  color: #444444;
}
.headerBottom > a:nth-of-type(1) {
  color: #444444;
}
.headerBottom > a:nth-of-type(1)::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 0.15rem;
  background: #e5e5e5;
  right: -0.25rem;
  top: 0.15rem;
}
.headerBottom > a:nth-of-type(2)::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 0.15rem;
  background: #e5e5e5;
  right: -0.25rem;
  top: 0.15rem;
}
/*section*/
section {
  width: 100%;
  background: #f0f0f0;
  overflow-y: scroll;
}
.secOne {
  width: 3.43rem;
  background: white;
  position: relative;
  font-size: 0.13rem;
  margin: 0.2rem auto 0;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.secOne > h3 {
  margin-top: 0.05rem;
  font-size: 0.16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.secOne .time1 {
  width: 0.03rem;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(to bottom, #494949 0%, #fdfdfd 100%);
}
.secOne .time1 > span {
  display: flex;
  align-items: center;
  width: 0.94rem;
  height: 0.2rem;
  background: #494949;
  border-radius: 0.1rem;
  position: absolute;
  left: -0.08rem;
  top: -0.1rem;
}
.secOne .time1 > span > i {
  font-size: 0.18rem;
  padding: 0 0.02rem 0 0.01rem;
  color: white;
}
.secOne .time1 > span > span {
  font-size: 0.12rem;
  color: white;
}
.secOne .img1 {
  background: #fae863;
  text-align: center;
}
.secOne img {
  width: 2.74rem;
  height: 1.93rem;
}
.secOne h3 {
  color: #666666;
}
.secOne .details {
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
}
.secOne .details > span:nth-of-type(1) {
  color: #444444;
  font-size: 0.14rem;
}
.secOne .details > div > i {
  color: #b0b0b0;
  font-size: 0.2rem;
  vertical-align: middle;
}
.secOne .details > div > span {
  color: #b0b0b0;
}
</style>
