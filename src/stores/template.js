import { defineStore } from 'pinia'
import { mainService } from '@/services/main'

export const useTemplateStore = defineStore('template', {
  state: () => ({
    mainTemplate: null,
  }),
  actions: {
    // getMainTemplate(sysId, ownerId)
    async getMainTemplate() {
      await mainService
        // .get(`${configUrl}/sys/${sysId}/${ownerId}/template.json`)
        .get('../../template.json')
        .then(resp => {
          this.mainTemplate = resp
        })
    },
  },
})
