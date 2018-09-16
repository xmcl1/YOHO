<template>
    <div class="sectionFour">
        <img v-bind:src="onlyImg.src" alt="">
    </div>
</template>

<script>
    export default {
    
    props:["onlyImg"]
    
    }
</script>
<style scoped>
    .sectionFour{
        box-sizing: border-box;
        padding: 0.09rem 0.15rem;
        background: #fff;
        margin-top: 0.1rem;
    }
    .sectionFour img{
        height:1.62rem;
        width: 100%;
    }
</style>