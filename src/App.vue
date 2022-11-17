<script setup>
import { NConfigProvider, zhCN, dateZhCN } from 'naive-ui'
// This starter template is using Vue 3 <script setup> SFCs
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <router-view></router-view>
  </n-config-provider>
</template>

<style lang="stylus">
#app
  height: 100%
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center

  .n-config-provider
    height 100%

  .head-title, .st-head
    -webkit-app-region drag
    -webkit-user-select none
</style>
