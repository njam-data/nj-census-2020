import * as path from 'path'

import * as dirname from '@njam-data/tools/dirname.js'
import { readCsv } from '@njam-data/tools/csv.js'
import { writeJson } from '@njam-data/tools/json.js'

const dataDirectory = dirname.join(import.meta.url, '..', 'data')
const sourceDirectory = path.join(dataDirectory, 'source')
const processedDirectory = path.join(dataDirectory, 'processed')
const csvFilepath = path.join(processedDirectory, 'big-local-news', '03_county_sub_pl94171_standard_compare_2010_2020.csv')
const jsonFilepath = path.join(processedDirectory, 'big-local-news', '03_county_sub_pl94171_standard_compare_2010_2020.json')

async function main () {
  let rows = await readCsv(csvFilepath, { headers: true })
  await writeJson(jsonFilepath, rows)
}

main()
