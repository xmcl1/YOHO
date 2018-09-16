<template>
    <div>
        <footer>
            <a href="#/index"><img src="../assets/img02/footer-01-checked.png" alt=""><span class="checked">首页</span></a>
            <a href="#/sorts"><img src="../assets/img02/footer-02.png" alt=""><span>列表</span></a>
            <a href="#/guang"><img src="../assets/img02/footer-03.png" alt=""><span>逛</span></a>
            <a href="#/cart"><img src="../assets/img02/footer-04.png" alt=""><span>购物车</span></a>
            <a href="#/my"><img src="../assets/img02/footer-05.png" alt=""><span>我的</span></a>
        </footer>
    </div>
</template>

<script>

export default {
    
   methods:{
     footerRouter(){
       var as =document.getElementsByTagName("footer")[0].children
        // var footer=document.getElementsByTagName("footer")[0];
        // for(let i in as){
        //   i.onclick=function(){
        //     console.log(i)
        //   }

       for(let i=0;i<as.length;i++){
         as[i].onclick=function(){
           // console.log(as[i])
           for(let j=0; j<as.length;j++){
             as[j].children[0].src="../../static/img02/footer-0"+(j+1)+".png";
             as[j].children[1].style.color="#b0b0b0"
           }
           this.children[0].src="../../static/img02/footer-0"+(i+1)+"-checked.png";
           this.children[1].style.color="#000"
         }
        }

     }
   },
  mounted(){
    this.footerRouter();
  }

    

}

</script>


<style>
    /* @import "../assets/css/footer.css"; */
footer{
    height: 0.5rem;
    width: 100%;
    box-sizing: border-box;
    display: -webkit-flex;
    border-top: 2px solid #e3e3e3;
    text-align: center;
}
footer a{
    display: block;
    width: 20%;
}
footer a span{
    color: #b0b0b0;
    display: block;
    width: 100%;
    font-size: 0.09rem;
    float: left;
    line-height: 0.15rem;
}
footer a img{
    margin: 0.04rem auto 0;
    height: 0.28rem;
}
footer .checked{
    color: #444444;
}
</style>
