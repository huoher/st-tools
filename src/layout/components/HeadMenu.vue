<template>
  <div class="head-menu">
    <img src="@/assets/logo.svg" class="logo">
    <p class="title">ST工具箱</p>
    <div></div>
    <div class="zoom-button-group">
      <img src="@/assets/icon/最小化.svg">
      <img src="@/assets/icon/最大化.svg">
      <img src="@/assets/icon/关闭.svg">
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="stylus">
.head-menu
  background-color #E8E8EA
  height 80px
  display grid
  grid-template-columns 60px 110px auto 100px
  grid-template-rows 80px
  align-items center

  .logo
    width 64px
    height 64px

  .title
    font-size 1.6em
    font-family "Microsoft JhengHei UI"

  .zoom-button-group
    display flex
    width 100px
    justify-content space-around
    img
      cursor pointer
      width 30px
      height 30px
</style>