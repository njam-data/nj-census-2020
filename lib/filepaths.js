import * as path from 'path'
import * as dirname from '@njam-data/tools/dirname.js'

export const dataDirectory = dirname.join(import.meta.url, '..', 'data')
export const processedDirectory = path.join(dataDirectory, 'processed')
export const bigLocalNewsDirectory = path.join(processedDirectory, 'big-local-news')

export function createFilepath (filename) {
  return path.join(bigLocalNewsDirectory, filename)
}

export const filepaths = {
  state: {
    csv: createFilepath('01_state_pl94171_standard_compare_2010_2020.csv'),
    json: createFilepath('01_state_pl94171_standard_compare_2010_2020.json')
  },
  county: {
    csv: createFilepath('02_county_pl94171_standard_compare_2010_2020.csv'),
    json: createFilepath('02_county_pl94171_standard_compare_2010_2020.json')
  },
  county_subdivision: {
    csv: createFilepath('03_county_sub_pl94171_standard_compare_2010_2020.csv'),
    json: createFilepath('03_county_sub_pl94171_standard_compare_2010_2020.json')
  },
  place: {
    csv: createFilepath('04_place_pl94171_standard_compare_2010_2020.csv'),
    json: createFilepath('04_place_pl94171_standard_compare_2010_2020.json')
  },
  tract: {
    csv: createFilepath('05_tract_pl94171_standard_compare_2010_2020.csv'),
    json: createFilepath('05_tract_pl94171_standard_compare_2010_2020.json')
  }
}

export const totalPopulationCsvFilepath = createFilepath('total-2020-population.csv')
export const totalPopulationJsonFilepath = createFilepath('total-2020-population.json')
