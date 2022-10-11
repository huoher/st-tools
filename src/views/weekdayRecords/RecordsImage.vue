<template>
  <div class="records-img">
    <img
        :src="'/src/assets/records-img/' + imageUrl"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const imageUrl = ref(null)

const imgDict = [
  'AI检测.svg',
  '代码构建.svg',
  '学科辅导.svg',
  '完成进度.svg',
  '扫码.svg',
  '搜索查询.svg',
  '数据监控.svg',
  '文件目录.svg',
  '查找学习.svg',
  '模块搭建.svg',
  '线上面试.svg',
  '计费系统.svg',
  '语音对话.svg',
  '身体检测.svg',
]

function getRandomImgUrl() {
  const index = Math.floor(Math.random() * imgDict.length)
  console.log(`@/assets/records-img/${imgDict[index]}`)
  return imgDict[index]
}

onMounted(() => {
  imageUrl.value = getRandomImgUrl()
})
</script>

<style scoped lang="stylus">
.records-img
  margin 0 auto
  width 340px
  img
    width 100%
    height 100%
</style>
