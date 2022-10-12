import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { ipcRenderer } from 'electron'

export const useRecordsStore = defineStore('records', () => {
  const records = reactive({})

  function saveRecord(record) {
    const { date, infoList } = record

    records[date] = infoList
    ipcRenderer.send('save-record', JSON.stringify(records))
  }

  return { records, saveRecord }
})
