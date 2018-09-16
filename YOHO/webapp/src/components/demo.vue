<template>
    <div @click="changeColor()">
        大石街道好
    </div>
</template>

<script>
export default {
  // data:"",
  methods:{
    changeColor:function(){
        this.style.backgroundColor="orange";
    }
  }
}
</script>

<style scoped>
div{
  color:red;
  background:green;
}
</style>
