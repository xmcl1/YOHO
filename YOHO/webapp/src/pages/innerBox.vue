<template>
    <div class="innerBox">
        <router-view/>
        <Footer></Footer> 
    </div>
</template>

<script>
import Footer from "./footer"
export default {
 components:{
   Footer
 }
}
</script>
<style scoped>
.innerBox{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}
</style>