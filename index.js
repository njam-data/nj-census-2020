import { readJson } from '@njam-data/tools/json.js'
import { readCsv } from '@njam-data/tools/csv.js'

import { filepaths, totalPopulationJsonFilepath } from './lib/filepaths.js'

const readers = {
  json: readJson,
  csv: readCsv
}

/**
 * get 2020 census data
 * @param object options
 * @param string options.dataset - default: 'state'. options: state, county, county_subdivision, place, tract
 * @param string options.format - default: 'json'
 */
export async function getData (options = {}) {
  const {
    dataset = 'state',
    format = 'json'
  } = options

  const filepath = filepaths[dataset][format]
  const reader = readers[format]

  if (!filepath) {
    throw new Error(`file not found for dataset ${dataset} with format ${format}`)
  }

  return reader(filepath)
}

/**
 * get 2020 population data
 * @param object [options]
 * @param string [options.dataset] - default: null, which returns all types. options: state, county, county_subdivision, place, tract
 */
export async function getPopulation (options = {}) {
  const { dataset } = options

  const data = await readJson(totalPopulationJsonFilepath)

  if (!dataset) {
    return data
  }

  return data.filter((row) => {
    return row.admin_type === dataset
  })
}
