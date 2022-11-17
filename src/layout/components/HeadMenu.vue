<template>
  <div class="head-menu">
    <div class="navi-btn">
      <el-tooltip effect="light" :open-delay="200" content="返回">
        <el-image
            class="no-drag"
            @click="btnClick('left')"
            :src="left"
        >
        </el-image>
      </el-tooltip>
      <el-tooltip effect="light" :open-delay="200" content="前进">
        <el-image
            class="no-drag"
            @click="btnClick('right')"
            :src="right"
        >
        </el-image>
      </el-tooltip>
    </div>
    <div class="avatar">
      <n-avatar
          class="no-drag"
          round
          :size="32"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <span class="username no-drag" @click="openLoginDialog">点击登录</span>
    </div>
    <div class="operation">
      <el-tooltip effect="light" :open-delay="200" content="菜单">
        <n-dropdown
            :options="options"
            placement="bottom-start"
            trigger="click"
        >
          <el-image
              class="no-drag"
              @click="btnClick('menu')"
              :src="menu"
          >
          </el-image>
        </n-dropdown>
      </el-tooltip>
      <el-tooltip effect="light" :open-delay="200" content="最小化">
        <el-image
            class="no-drag"
            @click="btnClick('min')"
            :src="min"
        >
        </el-image>
      </el-tooltip>
      <el-tooltip effect="light" :open-delay="200" content="最大化">
        <el-image
            class="no-drag"
            @click="btnClick('max')"
            :src="max"
        >
        </el-image>
      </el-tooltip>
      <el-tooltip effect="light" :open-delay="200" content="关闭">
        <el-image
            class="no-drag"
            @click="btnClick('close')"
            :src="close"
        >
        </el-image>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup>
import { NDropdown, NAvatar } from 'naive-ui'

import left from '@/assets/返回1.svg'
import right from '@/assets/返回2.svg'
import menu from '@/assets/菜单.svg'

import close from '@/assets/icon/关闭.svg'
import max from '@/assets/icon/最大化.svg'
import min from '@/assets/icon/最小化.svg'
import { ref } from 'vue'
import { useModalStore } from '@/store/modal'

function btnClick(event) {
}

const options = ref([{
  label: '退出',
  key: 'quit',
},
])

const modalStore = useModalStore()
function openLoginDialog() {
  modalStore.setLoginModal(true)
}
</script>

<style scoped lang="stylus">
.no-drag
  -webkit-app-region no-drag

.head-menu
  width 100%
  display grid
  grid-template-columns 200px auto 180px
  grid-column-gap 4px

.navi-btn
  display flex

  .el-image
    cursor pointer
    margin 0 8px
    width 28px

.avatar
  display flex
  justify-content flex-end
  align-items center

  .username
    font-size 14px
    margin 0 4px

  &:hover
    cursor pointer

.operation
  position absolute
  right 0
  display flex

  .el-image
    cursor pointer
    margin 0 4px
    width 32px
</style>
