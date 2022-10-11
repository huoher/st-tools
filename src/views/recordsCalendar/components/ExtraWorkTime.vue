<template>
  <div
      @dblclick="handleDbClick"
      class="extra-work"
      :class="{
    'current-month': props.data.type === 'current-month',
     }">
    <span class="date">{{ theDay }}</span>
    <span class="hour-num">3.2h</span>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const AdvancedFormat = require('dayjs/plugin/advancedFormat')
dayjs.extend(AdvancedFormat)

const props = defineProps({
  data: {
    type: Object,
    default: '',
  },
})

const theDay = computed(() => {
  // current-month
  return dayjs(props.data.day, 'YYYY-MM-DD').date()
})

const router = useRouter()

function handleDbClick() {
  console.log(props.data.day)
  console.log(dayjs(props.data.day, 'YYYY-MM-DD'))
  router.push(`/addRecords/${props.data.day}`)
// TODO 根据日期跳转到该日的编辑上面
}
</script>

<style scoped lang="stylus">
.extra-work
  width 100%
  display inline-flex
  flex-direction column
  line-height 1
  margin 0
  padding 0
  justify-content space-around
  align-items center

  .date
    font-size 1.4em

  .hour-num
    font-size .8em

.current-month
  .date
    color #22282f

  .hour-num
    color #668ab8

.has-work-record
  background-color rgb(237, 241, 251)
</style>
