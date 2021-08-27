import * as path from 'path'

import * as dirname from '@njam-data/tools/dirname.js'
import { readJson } from '@njam-data/tools/json.js'
import { readCsv } from '@njam-data/tools/csv.js'

const dataDirectory = dirname.join(import.meta.url, 'data')
const processedDirectory = path.join(dataDirectory, 'processed')
const bigLocalNewsDirectory = path.join(processedDirectory, 'big-local-news')
const countySubdivisionsJsonFilepath = path.join(bigLocalNewsDirectory, '03_county_sub_pl94171_standard_compare_2010_2020.json')
const countySubdivisionsCsvFilepath = path.join(bigLocalNewsDirectory, '03_county_sub_pl94171_standard_compare_2010_2020.csv')

const filepaths = {
  county_subdivisions: {
    json: countySubdivisionsJsonFilepath,
    csv: countySubdivisionsCsvFilepath
  }
}

const readers = {
  json: readJson,
  csv: readCsv
}

/**
 * get 2020 census data
 * @param object options
 * @param string options.dataset - default: 'county_subdivisions'
 * @param string options.format - default: 'json'
 */
export async function getData (options = {}) {
  const {
    dataset = 'county_subdivisions',
    format = 'json'
  } = options

  const filepath = filepaths[dataset][format]
  const reader = readers[format]

  if (!filepath) {
    throw new Error(`file not found for dataset ${dataset} with format ${format}`)
  }

  return reader(filepath)
}
