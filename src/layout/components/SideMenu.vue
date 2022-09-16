<template>
  <div class="side-menu">
    <n-menu :options="options" style="width: 180px" default-value="1"></n-menu>
  </div>
</template>

<script setup>
import {NMenu, NIcon, NEllipsis} from 'naive-ui'
import {RouterLink} from "vue-router"
import {defineComponent, h} from "vue"

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const options = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "fastAddRecords",
            params: {
              lang: "zh-CN"
            }
          }
        },
        { default: () => "一键下班" }
    ),
    key: "go-back-home",
  }
]
</script>

<style scoped lang="stylus">
.side-menu
  height 100%
  background-color #F4F5F7
</style>