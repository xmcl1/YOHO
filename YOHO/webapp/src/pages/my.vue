<template>
    <div class="my">
        <!-- 头部 -->
        <yo-ho-my-header></yo-ho-my-header>

        <!-- 中间主体 -->
        <yo-ho-my-content></yo-ho-my-content>
    </div>
</template>

<script>

import YoHoMyHeader from "../components/my/YoHoMyHeader";
import YoHoMyContent from "../components/my/YoHoMyContent";
export default {
  components: {YoHoMyContent, YoHoMyHeader}
}
</script>

<style>
     /* @import '../assets/css/my.css'; */
    .my{
        display: flex;
        flex-direction: column;
     }
</style>
