<template>
  <div>
    <el-calendar v-model="value">
      <template #header="{ date }">
        <span>{{ date }}</span>
      </template>
      <template #date-cell="{ data }">
        <ExtraWorkTime :data="data"></ExtraWorkTime>
      </template>
    </el-calendar>
  </div>
</template>

<script setup>
import {ref} from "vue"
import ExtraWorkTime from '@/views/recordsCalendar/components/ExtraWorkTime.vue'

const value = ref(null)

function handleUpdateValue() {

}
</script>

<style scoped lang="stylus">
.el-calendar
  &:deep(.el-calendar-day)
    margin 4px
    font-size 1.4em
    display flex
    justify-content center

  &:deep(.el-calendar__header)
    font-size 1.4em
    font-weight 600

.el-calendar:deep(.current)
  background-color white

.el-calendar:deep(.prev .el-calendar-day)
  //background-color #b61919
  color #ABABB2

.el-calendar:deep(.next .el-calendar-day)
  //background-color #b61919
  color #ABABB2
</style>