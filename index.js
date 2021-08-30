import { readJson } from '@njam-data/tools/json.js'
import { readCsv } from '@njam-data/tools/csv.js'

import { filepaths } from './lib/filepaths.js'

const readers = {
  json: readJson,
  csv: readCsv
}

/**
 * get 2020 census data
 * @param object options
 * @param string options.dataset - default: 'county_subdivision'
 * @param string options.format - default: 'json'
 */
export async function getData (options = {}) {
  const {
    dataset = 'county_subdivision',
    format = 'json'
  } = options

  const filepath = filepaths[dataset][format]
  const reader = readers[format]

  if (!filepath) {
    throw new Error(`file not found for dataset ${dataset} with format ${format}`)
  }

  return reader(filepath)
}
