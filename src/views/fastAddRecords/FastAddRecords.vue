<template>
  <div class="fast-quit-work">
    <n-message-provider>
      <WeekdayRecords></WeekdayRecords>
    </n-message-provider>
  </div>
</template>

<script setup>
import { NMessageProvider } from 'naive-ui'
import WeekdayRecords from '@/views/weekdayRecords/WeekdayRecords.vue'
</script>

<style scoped lang="stylus">
.fast-quit-work
  width 100%
</style>
