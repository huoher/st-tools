import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { ipcRenderer } from 'electron'

export const useRecordsStore = defineStore('records', () => {
  const records = reactive({})

  function saveRecord(record) {
    ipcRenderer.send('save-record', JSON.stringify(record))
    console.log(JSON.stringify(record))
  }

  /**
   * @param date     // YYYY-MM-DD
   */
  function getRecord(date) {
    console.log(date)
    ipcRenderer.send('get-record', date)
  }

  return { records, saveRecord, getRecord }
})