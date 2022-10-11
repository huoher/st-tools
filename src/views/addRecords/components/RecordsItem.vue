<template>
  <div>
    <n-space class="time-box">
      <n-time-picker input-readonly format="HH:mm"/>
      <p>-</p>
      <n-time-picker input-readonly format="HH:mm"/>
    </n-space>
  </div>
</template>

<script setup>
import { NSpace, NTimePicker } from 'naive-ui'
import { ref } from 'vue'

const startTime = ref(null)
const endTime = ref(null)
</script>

<style scoped lang="stylus">
.time-box
  display flex
  justify-content center
  align-items center
</style>
