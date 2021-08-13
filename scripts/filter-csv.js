import * as path from 'path'

import * as dirname from '@njam-data/tools/dirname.js'
import { readCsv, writeCsv } from '@njam-data/tools/csv.js'

const dataDirectory = dirname.join(import.meta.url, '..', 'data')
const sourceDirectory = path.join(dataDirectory, 'source')
const processedDirectory = path.join(dataDirectory, 'processed')
const sourceFilepath = path.join(sourceDirectory, 'big-local-news', '03_county_sub_pl94171_standard_compare_2010_2020.csv')
const processedFilepath = path.join(processedDirectory, 'big-local-news', '03_county_sub_pl94171_standard_compare_2010_2020.csv')

async function main () {
  let rows = await readCsv(sourceFilepath, { headers: true })

  rows = rows.filter((row) => {
    return row.state_abbr === 'NJ'
  })

  await writeCsv(processedFilepath, rows, { headers: true })
}

main()
