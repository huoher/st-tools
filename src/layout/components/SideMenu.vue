<template>
  <div class="side-menu">
    <HeadMenu></HeadMenu>
    <n-menu :options="options" default-value="1"></n-menu>
  </div>
</template>

<script setup>
import { NMenu, NIcon, NEllipsis } from 'naive-ui'
import HeadMenu from '@/layout/components/HeadLogo.vue'
import { RouterLink } from 'vue-router'
import { defineComponent, h } from 'vue'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const options = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'fastAddRecords',
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => '记加班' },
    ),
    key: 'go-back-home',
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: 'recordsCalendar',
            params: {
              lang: 'zh-CN',
            },
          },
        },
        { default: () => '历史记录' },
    ),
    key: 'recordsCalendar',
  }
]
</script>

<style scoped lang="stylus">
.side-menu
  padding 0 10px
  height 100%
  background-color #f0f0f0
  width 220px

  &:deep(.n-menu-item-content--selected)
    background-color #33cc99
    border-radius 4px
    &:hover
      background-color #33cc99 !important
    .n-menu-item-content-header
      a
        color #ffffff !important

  &:deep(.n-menu-item-content)
    &:hover
      border-radius 4px
      background-color #d8d8d8

  &:deep(.n-menu .n-menu-item-content::before)
    background-color transparent

</style>
