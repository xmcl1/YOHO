<template>
<div class="sortsCon">
    <header>
        <div class="headerTop">
            <a href=""><i class="iconfont icon-caidan1"></i></a>
            <div class="HeaderTopCon">
                <a class="p1" @click="change(1)">品类</a>
                <a class="p2" @click="change(2)">品牌</a>
            </div>
        </div>
        <div class="headerBottom">
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">Kids</a>
        </div>
    </header>
    <sort-section v-show="flag==1"></sort-section>
    <brand-section v-show="flag==2"></brand-section>
</div>
</template>
<script>
import sortSection from "../components/sorts/sortSection";
import brandSection from "../components/brand/brandSection";

export default {
  name: "sort",
  data() {
    return {
      flag: 1
    };
  },
  components: {
    sortSection,
    brandSection
  },
  methods: {
    change(v) {
      let p1=document.querySelector(".p1");
      let p2=document.querySelector(".p2");
      this.flag = v;
      if(v==1){
          p1.style.borderBottom="3px solid white";
          p2.style.borderBottom="none";
      }else if(v==2){
          p2.style.borderBottom="3px solid white";
          p1.style.borderBottom="none";
      }
    }
  }
};
</script>
<style>
@import url(../assets/css/css1/os.css);
.sortsCon {
  display: flex;
  flex-direction: column;
  height: 100%;
}
sort-section {
  display: flex;
}
</style>