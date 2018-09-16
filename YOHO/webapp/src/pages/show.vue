<template>
  <div class="bigBox">
  <show-header></show-header>
  <show-content  v-for="(k,n) in index1" :key="n" :tn="k"></show-content>
  </div>
</template>

<script>
    import ShowContent from "../components/show/ShowContent";
    import ShowHeader from "../components/show/ShowHeader";
    import {indexServices} from "../apis/shopInfoServer";

    export default {
        name: "show",
      components: {ShowHeader, ShowContent},
      data(){
        return{
          index1:[

          ]
        }

      },
      methods:{
        foucs(){
          indexServices.indexInfoByUserId((data)=>{
            this.index1 = data;
            // console.log(this.index1)
          })
        }
      },
      created(){
        this.foucs();
      },
    }
</script>

<style>
  /*@import '../assets/css/css4/show.css';*/
  .bigBox{
    width: 3.75rem;
    height: 100%;
    /*overflow-x: hidden;*/
    display: flex;
    flex-direction: column;
  }
</style>
