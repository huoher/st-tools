<template>
  <div>
    <n-space>
      <n-time-picker input-readonly default-formatted-value="00:12" format="HH:mm"/>
      <p>至</p>
      <n-time-picker input-readonly :default-value="1183135260000" format="HH:mm"/>
    </n-space>
  </div>
</template>

<script setup>
import { NSpace, NTimePicker } from 'naive-ui'
import { ref } from 'vue'

const startTime = ref(null)
const endTime = ref(null)
</script>

<style scoped>

</style>
