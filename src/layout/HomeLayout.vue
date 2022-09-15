<template>
  <div class="st-layout">
    <HeadMenu></HeadMenu>
    <div class="st-body">
      <SideMenu></SideMenu>
      <div class="st-main">
        main
      </div>
    </div>
  </div>
</template>

<script setup>
import SideMenu from "./components/SideMenu.vue";
import HeadMenu from "./components/HeadMenu.vue";
</script>

<style scoped lang="stylus">
.st-layout
  display flex
  flex-direction column

  .st-body
    display flex
    .st-main
      display flex
</style>