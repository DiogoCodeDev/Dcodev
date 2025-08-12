import { defineStore } from 'pinia'

export const useErrorStore = defineStore('error', {
  state: () => ({
    error: false,
    errorMsg: null,
  }),
  actions: {
    setError(msg) {
      this.errorMsg = msg
      this.error = true
    },
    clearError() {
      this.error = false
      this.errorMsg = null
    },
  },
})
