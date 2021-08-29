import { readCsv } from '@njam-data/tools/csv.js'
import { writeJson } from '@njam-data/tools/json.js'
import { convertNumberProperties } from '@njam-data/tools/convert.js'

import { filepaths } from '../lib/filepaths.js'

async function main () {
  Object.keys(filepaths).every(async (key) => {
    const { csv, json } = filepaths[key]
    let rows = await readCsv(csv, { headers: true })

    rows = rows
    .filter((row) => {
      if (row.state_abbr) {
        if (row.state_abbr === 'NJ') {
          return true
        }
        return false
      }

      return true
    })
    .map((row) => {
      return convertNumberProperties(row)
    })

    await writeJson(json, rows)
  })
}

main()
