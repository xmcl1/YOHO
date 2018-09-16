<template>
        <div class="header">
            <div id="listshow" @click="checkme"><i class="iconfont icon-fenlei"></i></div>
            <div>
                <span><i class="iconfont icon-sousuo"></i></span>
                <span><input type="text" placeholder="两件8折 三件7.5折"></span>
                <span><i class="iconfont icon-saoma"></i></span>
            </div>
            <div><i class="iconfont icon-xiaoxi"></i></div>
        </div>
</template>

<script>
    export default {
    
    methods:{
        checkme:function(){
            var app = document.getElementById("app");
            if (app.className == "active") {
                app.style.cssText = "transform :translateX(0);transition:all 0.2s;"
                app.classList.remove ("active")

            }else{
                app.classList.add ("active");
                app.style.cssText = "transform :translateX(2.5rem);transition:all 0.2s;"
            }
            // console.log("AAA");
        },
    }
    
    }
</script>
<style scoped>
.header{
    height: 0.435rem;
    width: 100%;
    background: rgba(0, 0, 0, .8);
    display: -webkit-flex;
    justify-content: space-between;
    position: absolute;
    z-index: 999;
    color: #fff;
  padding: 0;
}
.header div{
    overflow: hidden;
}
.header div:first-of-type i,.header div:last-of-type i{
    display: block;
    margin-top: 0.015rem;
    height: 0.42rem;
    width: 0.435rem;
    line-height: 0.435rem;
    font-size: 0.22rem;
    text-align: center;
}
.header div:first-of-type{
    padding: 0 0.085rem;
}
.header div:nth-of-type(2){
    width: 2.49rem;
    height: 100%;
    display: flex;
    margin-top: 0.015rem;
}
.header div:last-of-type{
    padding: 0 0.05rem;
    font-weight: 900;
}
.header div:nth-of-type(2) span{
    display: block;
    height: 0.285rem;
    background: #f0f0f0;
    margin-top: 0.075rem;
    font-size: 0.14rem;
    color: #838383;
}
.header div:nth-of-type(2) span:nth-of-type(1){
    width: 0.32rem;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
.header div:nth-of-type(2) span:nth-of-type(2){
    flex: 1;
}
.header div:nth-of-type(2) span:nth-of-type(3){
    width: 0.3rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
} 
.header div:nth-of-type(2) span i{
    display: block;
    font-size: 0.14rem;
    color: #838383;
    height: 0.285rem;
    line-height: 0.3rem;
    font-weight: 900;
    text-align: center;
}
.header div:nth-of-type(2) input{
    background: #f0f0f0;
    width: 100%;
    height: 100%;
    border: 0;
    outline: none;
    font-size: 0.14rem;
    color: #838383;
    line-height: 0.3rem;
    text-indent: 5px;
}
</style>
