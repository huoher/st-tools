<template>
  <div class="fast-quit-work">
    <n-time :time="today"/>
    <img
        class="quit-work-img"
        src="@/assets/下班.webp"
    />
    <n-button strong secondary type="info">
      一键下班
    </n-button>
  </div>
</template>

<script setup>
import {NTime, NButton, NImage} from 'naive-ui'
import {onMounted, ref} from "vue";
import dayjs from "dayjs";

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
.fast-quit-work
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center

  time
    font-size 3em

  .quit-work-img
    width 300px

  .n-button
    width 300px
    height 120px
    font-size 3em
</style>