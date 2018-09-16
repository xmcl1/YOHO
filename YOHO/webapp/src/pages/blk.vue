<template>
    <div class="blk">
        <yo-ho-blk-header></yo-ho-blk-header>
        <yo-ho-blk-sec></yo-ho-blk-sec>
    </div>
</template>

<script>
import YoHoBlkHeader from '@/components/blk/YoHoblkHeader';
import YoHoBlkSec from '@/components/blk/YoHoblkSec';

export default {
    // name:"blk",
    components:{
        YoHoBlkHeader,
        YoHoBlkSec
    },
}
</script>

<style scoped>
    .blk{
        display: flex;
        height: 100%;
        background: #fff;
        flex-direction: column;
      overflow-y: scroll;
    }
</style>

