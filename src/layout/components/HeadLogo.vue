<template>
  <div class="head-title">
    <img
        class="logo-img"
        src="@/assets/logo.png"
    />
  </div>
</template>

<script setup>
import logoUrl from '@/assets/logo.png'
import { ref } from 'vue'

const logo = ref(logoUrl)
</script>

<style scoped lang="stylus">
.head-title
  background-color #f0f0f0
  height 80px
  display flex
  align-items center
  justify-content center

  .logo-img
    width 110px

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
