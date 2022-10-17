<template>
  <div class="navi-btn">
    <el-tooltip effect="light" :open-delay="200" content="返回">
      <el-image
          @click="btnClick('left')"
          :src="left"
      >
      </el-image>
    </el-tooltip>
    <el-tooltip effect="light" :open-delay="200" content="前进">
      <el-image
          @click="btnClick('right')"
          :src="right"
      >
      </el-image>
    </el-tooltip>
  </div>
  <div class="operation">
    <el-tooltip effect="light" :open-delay="200" content="菜单">
      <el-image
          @click="btnClick('menu')"
          :src="menu"
      >
      </el-image>
    </el-tooltip>
    <el-tooltip effect="light" :open-delay="200" content="最小化">
      <el-image
          @click="btnClick('min')"
          :src="min"
      >
      </el-image>
    </el-tooltip>
    <el-tooltip effect="light" :open-delay="200" content="最大化">
      <el-image
          @click="btnClick('max')"
          :src="max"
      >
      </el-image>
    </el-tooltip>
    <el-tooltip effect="light" :open-delay="200" content="关闭">
      <el-image
          @click="btnClick('close')"
          :src="close"
      >
      </el-image>
    </el-tooltip>
  </div>
</template>

<script setup>
import left from '@/assets/返回1.svg'
import right from '@/assets/返回2.svg'
import menu from '@/assets/菜单.svg'

import close from '@/assets/icon/关闭.svg'
import max from '@/assets/icon/最大化.svg'
import min from '@/assets/icon/最小化.svg'

function btnClick (event) {
}
</script>

<style scoped lang="stylus">
.navi-btn
  display flex

  .el-image
    cursor pointer
    margin 0 8px
    width 28px

.operation
  position absolute
  right 0
  display flex

  .el-image
    cursor pointer
    margin 0 4px
    width 32px
</style>
