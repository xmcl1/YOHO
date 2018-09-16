<template>
  <div class="bigBox">
    <guang-header></guang-header>
    <guang-content v-for="(k,n) in index1" :key="n" :tn="k"></guang-content>
  </div>

</template>

<script>
    import GuangHeader from "../components/guang/GuangHeader";
    import GuangContent from "../components/guang/GuangContent";
    import {indexServicee} from "../apis/shopInfoServer";

    export default {
        name: "guang",
      components: {GuangContent,
                   GuangHeader,
        },
      data(){
        return{
          index1:[
          ]
        }

      },
      methods:{
        foucs(){
          indexServicee.indexInfoByUserII((data)=>{
            this.index1 = data;
            // console.log(this.index1)
          })
        }
      },
      created(){
        this.foucs();
      }
    }

</script>

<style>
  @import '../assets/font/font4/iconfont.css';
  .bigBox{
    width: 3.75rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
