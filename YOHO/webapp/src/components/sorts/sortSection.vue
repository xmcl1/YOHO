<template>
    <section>
        <sort-section-left>
            <route-link herf="api">dadad</route-link>
        </sort-section-left>
        <sort-section-right></sort-section-right>
    </section>
</template>
<script>
import sortSectionLeft from "./sortSectionComponents/sortSectionLeft"
import sortSectionRight from "./sortSectionComponents/sortSectionRight"
export default {
    name:"",
    components:{
        sortSectionLeft,
        sortSectionRight
    }
}

</script>
<style scoped>
section{
    display: flex;
    flex-direction: row!important;
}
section>.secLeft{
    width:1.02rem;
    font-size:.12rem;
    display:flex;
    flex-direction: column;
    overflow-y:scroll;
}
section>.secLeft>a{
    background:#f0f0f0;
    color:#444444;
    letter-spacing:.02rem;
    height:.59rem;
    text-align: center;
    line-height: .59rem;
    margin-bottom:1px;
    position: relative;
}
section>.secLeft>a:nth-of-type(1){
    background:#fff;
}
section>.secLeft>a:nth-of-type(1)::before{
    content:"";
    position: absolute;
    width:.04rem;
    height:100%;
    background:#444444;
    left:0;
}
/*secRight*/
.secRight{
    flex:1;
    overflow-y:scroll;
    font-size:.10rem;
}
.secRight a{
    color: #444444;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.secRightTop1{
    width:100%;
}
.secRightTop1>.top{
    width:100%;
    font-size:.11rem;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 0.7rem;
    box-sizing: border-box;
    margin: .15rem 0;
}
.secRightTop1>.top>span:nth-of-type(1){
    width:.15rem;
    height:1px;
    background:red;
    background:#444444;
}
.secRightTop1>.top>span:nth-of-type(3){
    width:.15rem;
    height:1px;
    background:red;
    background:#444444;
}
.secRightTop1>.bottom{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.secRightTop1>.bottom>a{
    background:#F4F8F7;
    margin-bottom:.09rem;
}
.secRightTop1>.bottom img{
    width:.78rem;
    height:.96rem;
}
</style>