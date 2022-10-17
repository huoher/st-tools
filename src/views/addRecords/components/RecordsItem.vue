<template>
  <div>
    <n-space class="time-box">
      <n-time-picker v-model:formatted-value="recordItem.start" input-readonly
                     :formatted-value="recordItem.start"
                     @update:value="changeRecord"
                     format="HH:mm"/>
      <p>-</p>
      <n-time-picker v-model:formatted-value="recordItem.end" input-readonly
                     @update:value="changeRecord"
                     format="HH:mm"/>
      <n-input clearable v-model:value="recordItem.mark"
               @update:value="changeRecord"
               size="large" round placeholder="在此输入加班备注">
      </n-input>
    </n-space>
  </div>
</template>

<script setup>
import { NSpace, NTimePicker, NInput } from 'naive-ui'
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'
import ArraySupport  from 'dayjs/plugin/ArraySupport '

dayjs.extend(ArraySupport)

const props = defineProps({
  record: {
    type: Object,
    default: () => [],
  },
})
const emit = defineEmits(['update:record'])

const recordItem = reactive({
  start: null,
  end: null,
  mark: '',
})

function hmsToYmdhms(hm) {
  return dayjs()
   // return dayjs({
   //   year: dayjs().year(),
   //   month: dayjs().month(),
   //   day: recordItem.day(),
   //   hour: dayjs(hm, 'HH:ss').hour(),
   //   minute: dayjs(hm, 'HH:ss').minute(),
   //   second: dayjs(hm, 'HH:ss').second()
   // })
}

function changeRecord() {
  console.log(recordItem)
  // emit('update:record', formatterRecord(recordItem))
}
</script>

<style scoped lang="stylus">
.time-box
  display flex
  justify-content center
  align-items center
</style>
