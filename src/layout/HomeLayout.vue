<template>
  <div class="st-layout">
    <SideMenu></SideMenu>
    <div class="st-body">
      <div class="st-head">
        <HeadMenu></HeadMenu>
      </div>
      <div class="st-main">
        <n-scrollbar style="max-height: 600px">
          <router-view></router-view>
        </n-scrollbar>
      </div>
    </div>
  </div>
  <n-modal
      @after-leave="closeModal"
      class="login-modal"
      style="width: 500px; height: 360px"
      v-model:show="showLoginModel"
      :mask-closable="false"
      title=""
      preset="card"
      content="你确认"
  >
    <UserLogin></UserLogin>
  </n-modal>
</template>

<script setup>
import { NScrollbar, NModal } from 'naive-ui'
import SideMenu from './components/SideMenu.vue'
import HeadMenu from '@/layout/components/HeadMenu.vue'
import { useModalStore } from '@/store/modal'
import { computed, ref, watch } from 'vue'
import UserLogin from '@/views/userLogin/UserLogin.vue'

const modalStore = useModalStore()

const showLoginModel = ref(null)
watch(modalStore, value => {
  console.log(value.showLogin)
  showLoginModel.value = value.showLogin
  // if (!value.showLogin) {
  //   showLoginModel.value = false
  // }
})

function closeModal() {
  modalStore.setLoginModal(false)
}
</script>

<style scoped lang="stylus">
.st-layout
  display flex
  height 100%
  flex-direction revert

  .st-body
    width 100%
    height 100%
    display flex
    flex-direction column

    .st-head
      width 100%
      height 80px
      display flex
      align-items center

    .st-main
      background-color #ffffff
      width 100%
      height 100%
      display flex

  .login-modal
    width 400px
</style>
