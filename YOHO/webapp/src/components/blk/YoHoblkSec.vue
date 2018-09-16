<template>
    <div class="dlkSec">
        <div class="dlkSecOne">
            <img src="../../assets/img02/blk01.png" alt="">
        </div>
        <div class="dlkSecOne">
            <img src="../../assets/img02/blk02.png" alt="">
        </div>
        <div class="dlkSecOne">
            <img src="../../assets/img02/blk03.png" alt="">
        </div>
        <div class="dlkSecOne">
            <img src="../../assets/img02/blk04.png" alt="">
        </div>
        <div class="dlkSecOne">
            <img src="../../assets/img02/blk05.png" alt="">
        </div>
        <!-- <div class="dlkSecTwo">
            <div class="top">
                <h4><sup>#</sup> BLK TEE SHOP</h4>
                <img src="../../assets/img02/blksec01.png" alt="">
            </div>
            <div class="bottom">
                <a href="javascript:;">
                    <img src="../../assets/img02/blksec-s01.png" alt="">
                    <p>IH NOM UH NITIVE</p>
                </a>
                <a href="javascript:;">
                    <img src="../../assets/img02/blksec-s02.png" alt="">
                    <p>IH NOM UH NITIVE</p>
                </a>
                <a href="javascript:;">
                    <img src="../../assets/img02/blksec-s03.png" alt="">
                    <p>IH NOM UH NITIVE</p>
                </a>
                <a href="javascript:;">
                    <img src="../../assets/img02/blksec-s04.png" alt="">
                    <p>IH NOM UH NITIVE</p>
                </a>
                <a href="javascript:;">
                    <img src="../../assets/img02/blksec-s05.png" alt="">
                    <p>IH NOM UH NITIVE</p>
                </a>
                <a href="javascript:;">
                    <img src="../../assets/img02/blksec-s06.png" alt="">
                    <p>IH NOM UH NITIVE</p>
                </a>
            </div>
        </div> -->
        <dlk-sec-two></dlk-sec-two> 
        <dlk-sec-two></dlk-sec-two>
        <dlk-sec-two></dlk-sec-two>
        <dlk-sec-two></dlk-sec-two>
    </div>
</template>

<script>
import dlkSecTwo from "./BlkSecTwo"
export default {
    components:{
        dlkSecTwo,
    },
}

</script>
<style scoped>
  .dlkSec{
    height: 100%;
    overflow-y: scroll;
  }
    .dlkSecOne{
        width: 100%;
        box-sizing: border-box;
        padding: 0.1rem;
    }
    .dlkSecOne img{
        width: 100%;
    }
    .dlkSecTwo:last-of-type{
        margin-bottom: 0;
    }
</style>
