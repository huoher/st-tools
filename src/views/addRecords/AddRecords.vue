<template>
  <div class="add-records">
    <div class="head">
      <span class="today-mark">{{ route.params.date }}</span>
      <n-button strong secondary type="primary" @click="addRecords">新增</n-button>
    </div>
    <div>
      <div v-for="item in recordsList" class="records-list-item">
        <RecordsItem></RecordsItem>
        <n-button strong secondary type="error" @click="delRecords(item)">删除</n-button>
      </div>
      <div>
        <n-button type="primary">保存</n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { NButton } from 'naive-ui'
import RecordsItem from '@/views/addRecords/components/RecordsItem.vue'
import { nanoid } from 'nanoid'
import { useRoute } from 'vue-router'

const route = useRoute()
const today = ref(dayjs().format('YYYY-MM-DD'))

const recordsList = ref([])

function addRecords() {
  recordsList.value.push({
    tId: nanoid(),
  })
}

function delRecords(item) {
  console.log(item)
  const index = recordsList.value.findIndex(i => i.tId === item.tId)
  recordsList.value.splice(index, 1)
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
