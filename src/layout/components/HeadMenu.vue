<template>
  <div class="operation">
    <el-tooltip effect="light" :open-delay="200" content="最小化">
      <el-image
          :src="min"
      >
      </el-image>
    </el-tooltip>
    <el-tooltip effect="light" :open-delay="200" content="最大化">
      <el-image
          :src="max"
      >
      </el-image>
    </el-tooltip>
    <el-tooltip effect="light" :open-delay="200" content="关闭">
      <el-image
          :src="close"
      >
      </el-image>
    </el-tooltip>
  </div>
</template>

<script setup>
import close from '@/assets/icon/关闭.svg'
import max from '@/assets/icon/最大化.svg'
import min from '@/assets/icon/最小化.svg'
</script>

<style scoped lang="stylus">
.operation
  position absolute
  right 0
  display flex

  .el-image
    cursor pointer
    margin 0 4px
    width 32px
</style>
