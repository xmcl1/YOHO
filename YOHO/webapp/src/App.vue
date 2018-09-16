<template>
  <div id="app" v-cloak>
    <!-- <router-view/>
    <Footer></Footer>  -->
    <left-list></left-list>
    <inner-box></inner-box>
  </div>
</template>

<script>
import leftList from "./pages/leftList"
import innerBox from "./pages/innerBox"
export default {
 components:{
  //  Footer
   leftList,
   innerBox
 }
}
</script>

<style>
[v-clovk]{
  display: none;
}
body,div,p,ol,ul,li,dl,dt,dd,form,table,tr,td,hr,h1,h2,h3,h4,h5,h6,fieldset,img,input,figure{
	margin:0;
	padding:0;
}
html{
	font-size: 26.67vw;
}
html,body{
	height: 100%;
  width: 100%;
  overflow-y: hidden;
}
body{
	font-family: "Microsoft Yahei",Arial;
	/* display: -webkit-flex; */
	/* flex-direction:column; */
}
a{
	text-decoration: none;
}
ul,ol{
	list-style: none;
}
img{
	border:none;
	display: block;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  transform: translateX(0);
}
#app .active {
  transform :translateX(-2.5rem);
  transition:all 0.2s;
}
</style>
