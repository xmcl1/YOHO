<template>
  <div class="bigBox">
  <she-qu-header></she-qu-header>
  <she-qu-content></she-qu-content>
  </div>
</template>

<script>
    import SheQuHeader from "../components/shequ/SheQuHeader";
    import SheQuContent from "../components/shequ/SheQuContent";
    export default {
        name: "shequ",
      components: {SheQuContent, SheQuHeader}
    }
</script>

<style>
  /*@import '../assets/css/css4/shequ.css';*/
  .bigBox{
    width: 3.75rem;
    height: 100%;
    /*overflow-x: hidden;*/
    display: flex;
    flex-direction: column;
  }
</style>
