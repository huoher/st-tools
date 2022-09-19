<template>
  <div>
    <el-time-picker
        v-model="startTime"
        is-range
        range-separator="-"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
    />
  </div>
</template>

<script setup>
import {ref} from "vue";

const startTime = ref(null)
const endTime = ref(null)
</script>

<style scoped>

</style>