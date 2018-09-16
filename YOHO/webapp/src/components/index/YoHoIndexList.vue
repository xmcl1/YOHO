<template>
    <div>
        <a href="javascript:;" v-for="(shopList,n) in msgList" :key="n">
        <img :src="shopList.src" alt="">
        <p>{{shopList.title}}</p>
        <p><span>￥{{shopList.price}}</span><i class="iconfont icon-gengduomore10"></i></p>
    </a>
    </div>
</template>

<script>  
    export default {
    props:["msgList"],    
    }
</script>
<style scoped>
.mayBeLike div a{
    display: block;
    margin-top: 0.26rem;
    width: 1.61rem;
    height: 2.78rem;
}
.mayBeLike div a img{
    width: 100%;
}
.mayBeLike div a p:first-of-type{
    width: 100%;
    line-height: 0.15rem;
    font-size: 0.1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
    color: #444444;
    margin-top: 0.12rem;
}
.mayBeLike div a p:last-of-type{
    line-height: 0.25rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.mayBeLike div a p:last-of-type span{
    font-size: 0.14rem;
    color: #444;
}
.mayBeLike div a p:last-of-type i{
    color: #b0b0b0;
    font-size: 0.15rem;
    padding-right: 0.05rem;
}
</style>