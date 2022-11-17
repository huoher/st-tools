<template>
  <div class="add-records">
    <div class="head">
      <span class="today-mark">{{ route.params.date }}</span>
      <n-button strong secondary type="primary" @click="addRecords">新增</n-button>
    </div>
    <div>
      <div v-for="item in recordsList" class="records-list-item">
        <el-time-picker
            value-format="HH:mm:ss"
            format="HH:mm"
            v-model="item.start"
            :picker-options="{
            }"
            placeholder="任意时间点">
        </el-time-picker>
        <el-time-picker
            value-format="HH:mm:ss"
            format="HH:mm"
            v-model="item.end"
            :picker-options="{
              minTime: item.start
            }"
            placeholder="任意时间点">
        </el-time-picker>
        <el-input v-model="item.mark" clearable placeholder="请输入加班备注"></el-input>
        <n-button strong secondary type="error" @click="delRecords(item)">删除</n-button>
      </div>
      <div>
        <n-button type="primary" @click="saveTodayRecords">保存</n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { NButton } from 'naive-ui'
import { useRoute } from 'vue-router'
import { ipcRenderer } from 'electron'

import { useRecordsStore } from '@/store/records'
import { nanoid } from 'nanoid'

const route = useRoute()
const today = ref(dayjs().format('YYYY-MM-DD'))

const store = useRecordsStore()
onMounted(() => {
  // 从磁盘读取存储的数据
  store.getRecord(today.value)
})

ipcRenderer.on('date-record', async (event, args) => {
  console.log(args)
  recordsList.value = args.infoList.map(item => {
    const { ...args } = item
    return {
      tid: nanoid(),
      ...args,
    }
  })
})

const recordsList = ref([])

function addRecords() {
  recordsList.value.push({
    tId: nanoid(),
  })
}

function delRecords(item) {
  const index = recordsList.value.findIndex(i => i.tId === item.tId)
  recordsList.value.splice(index, 1)
}

function saveTodayRecords() {
}
</script>

<style scoped lang="stylus">
.add-records
  width 100%

  .head
    display flex
    justify-content center
    align-items center

  .main-img
    width 100%
    display flex
    justify-content center

    img
      width 400px

.today-mark
  text-align center
  font-size 2em
  font-weight 600
  font-family "Microsoft JhengHei"

.records-list-item
  margin 8px auto
  display flex
  align-items center
  justify-content center

  button
    margin 0 4px
</style>
