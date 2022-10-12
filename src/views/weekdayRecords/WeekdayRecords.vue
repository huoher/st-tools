<template>
  <div class="weekday-records" v-if="working">
    <div class="time-range">
      <span>18:00:00</span>
      <span>-</span>
      <n-time :time="today" format="hh:mm:ss"/>
    </div>
    <RecordsImage></RecordsImage>
    <div class="quit-work" @click="quitWork">
      <span>一键下班</span>
    </div>
  </div>
  <div v-else>
    <n-result status="success" description="加班记录成功">
      <template #footer>
        <div class="extra-work-time">
          18:00 - 21:12
          <span class="info">
            您已点击下班，如需修改，请前往历史记录中修改
          </span>
        </div>
      </template>
    </n-result>
  </div>
  <n-modal v-model:show="inputModal">
    <div>
      <n-card
          style="width: 600px"
          title=" "
          :bordered="false"
          size="huge"
          role="dialog"
          aria-modal="true"
      >
        <n-input-group>
          <n-input clearable v-model:value="inputMark" size="large" round placeholder="在此输入加班备注"/>
          <n-button type="primary" round size="large" @click="saveRecords">
            保存
          </n-button>
        </n-input-group>
      </n-card>
    </div>
  </n-modal>
</template>

<script setup>
import { NResult, NButton, NTime, NInput, NInputGroup, NModal, NCard } from 'naive-ui'
import { onMounted, reactive, ref } from 'vue'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import RecordsImage from '@/views/weekdayRecords/RecordsImage.vue'
import { useRecordsStore } from '@/store/records'

const working = ref(true)

function quitWork() {
  inputModal.value = true
}

const inputModal = ref(false)

const inputMark = ref(null)
const record = reactive({ infoList: [{}], date: '' })

const store = useRecordsStore()
function saveRecords() {
  working.value = false
  inputModal.value = false

  record.date = dayjs().format('YYYY-MM-DD')

  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')

  // 18:00正常下班至真正下班时间
  record.infoList = [{
    start: dayjs().set('hour', 18).set('minute', 0).set('second', 0).format('YYYY-MM-DD HH:mm:ss'),
    end: now,
    mark: inputMark.value,
  }]
  store.saveRecord(record)
}

dayjs.extend(customParseFormat)
const today = ref(new Date())

onMounted(() => {
  currentDateTime()
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

.extra-work-time
  font-size 2em
  display inline-flex
  flex-direction column

  .info
    font-size .6em
</style>
