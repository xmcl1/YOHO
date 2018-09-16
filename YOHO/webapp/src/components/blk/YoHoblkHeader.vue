<template>
    <div>
        <div class="blkHeader">
            <router-link to="/"><i class="iconfont icon-zuojiantou"></i></router-link>
            <p>#BLK</p>
            <div><i class="iconfont icon-sousuo"></i><i class="iconfont icon-mulu"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    
}

</script>
<style scoped>
    @import '../../assets/font/font02/iconfont.css';
    .blkHeader{
        height: 0.45rem;
        width: 100%;
        background: #3f3f3f;
        display: flex;
    }
    .blkHeader i{
        display: block;
        height: 0.45rem;
        width: 0.45rem;
        color: #fff;
        font-size: 0.2rem;
        line-height: 0.45rem;
    }
    .blkHeader i:first-of-type{
        padding-left: 0.09rem;
    }
    .blkHeader div{
        height: 0.45rem;
        /* width: 1rem; */
    }
    .blkHeader div i{
        font-weight: 900;
        float: left;
        width: 0.3rem;

    }
    .blkHeader p{
        flex: 1;
        font-size: 0.16rem;
        text-align: center;
        color: #fff;
        line-height: 0.45rem;
    }
</style>
