<template>
  <div class="st-layout">
    <SideMenu></SideMenu>
    <div class="st-body">
      <div class="st-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideMenu from "./components/SideMenu.vue";
</script>

<style scoped lang="stylus">
.st-layout
  display flex
  height 100%
  flex-direction revert

  .st-body
    width 100%
    height 100%
    display flex
    .st-main
      background-color #ffffff
      width 100%
      display flex
</style>
