import { join, dirname } from 'path'
import { Low, JSONFile, LowSync, JSONFileSync } from 'lowdb'
import fs from 'fs-extra'
import LodashId from 'lodash-id'
import { fileURLToPath } from 'url'

import { app } from 'electron'

const USER_DOCUMENT_PATH = app.getPath('documents')
const STORE_PATH = join(USER_DOCUMENT_PATH, 'StTools')

console.log(STORE_PATH)
if (process.type !== 'renderer') {
  if (!fs.pathExistsSync(STORE_PATH)) {
    fs.mkdirpSync(STORE_PATH)
  }
}

const file = join(STORE_PATH, 'db.json')
console.log(file)
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Alternatively, you can also use this syntax if you prefer
export default db
