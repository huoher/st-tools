import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({
    showLogin: false
  }),
  actions: {
    setLoginModal (val) {
      this.showLogin = val
    }
  }
})

