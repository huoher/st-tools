import { join, dirname } from 'path'
import { Low, JSONFile, LowSync, JSONFileSync } from 'lowdb'
import fs from 'fs-extra'
import { cloneDeep } from 'lodash'
import LodashId from 'lodash-id'
import { fileURLToPath } from 'url'

import { app } from 'electron'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const USER_DOCUMENT_PATH = app.getPath('documents')
const STORE_PATH = join(USER_DOCUMENT_PATH, 'StTools')

console.log(STORE_PATH)
if (process.type !== 'renderer') {
  if (!fs.pathExistsSync(STORE_PATH)) {
    fs.mkdirpSync(STORE_PATH)
  }
}


class DataSource {
  constructor({ date }) {
    this.keyDay = dayjs(date, 'YYYY-MM-DD').format('YYYY-MM')

    const file = join(STORE_PATH, `${this.keyDay}.json`)
    const adapter = new JSONFile(file)
    this.db = new Low(adapter)
  }

  async saveRecords(records) {
    if (fileNames.includes(this.keyDay)) {
      await this.db.read()
    }

    const data = cloneDeep(this.db.data) || {}
    console.log(data)
    data[this.keyDay] = records

    this.db.data = cloneDeep(data)
    await this.db.write()
  }

  async readRecord(date) {
    await this.db.read()
    console.log('data:' + JSON.stringify(this.db.data?.[this.keyDay] ?? null))
    return this.db.data?.[this.keyDay] ?? null
  }
}

const fileNames = []
fs.readdir(STORE_PATH, (err, files) => {
  if (err) {
    throw err
  }

  fileNames.splice(0, fileNames.length, ...files)
  // files object contains all files names
  // log them on console
  files.forEach(file => {
    console.log(file)
  })
})
// Alternatively, you can also use this syntax if you prefer
export default DataSource
