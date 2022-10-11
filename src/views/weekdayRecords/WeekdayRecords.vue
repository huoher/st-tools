<template>
  <div class="weekday-records">
    <div class="time-range">
      <span>18:00:00</span>
      <span>-</span>
      <n-time :time="today" format="hh:mm:ss"/>
    </div>
    <RecordsImage></RecordsImage>
    <div class="quit-work">
      <span>一键下班</span>
    </div>
  </div>
</template>

<script setup>
import { NButton, NTime } from 'naive-ui'
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import RecordsImage from '@/views/weekdayRecords/RecordsImage.vue'

dayjs.extend(customParseFormat)

const today = ref(new Date())

onMounted(() => {
  currentDateTime()
  console.log(dayjs().year())
  console.log(dayjs().month())
  console.log(dayjs().date())
})

function currentDateTime() {
  setInterval(() => {
    today.value = new Date()
  }, 1000)
}
</script>

<style scoped lang="stylus">
.weekday-records
  width 100%
  display flex
  flex-direction column
  align-content center
  justify-content center

.time-range
  display flex
  font-family "Microsoft YaHei UI Light"
  justify-content center
  align-items center

  span
    margin 0 4px
  font-family "Franklin Gothic Medium Cond"
  font-size 3em

.quit-work
  margin 20px auto
  text-align center
  width 350px
  height 60px
  border-radius 120px
  background-color #42b983
  color #eeeeee
  font-size 2em
  display flex
  align-items center
  justify-content center
  &:hover
    cursor pointer
    background-color #42b922
</style>
