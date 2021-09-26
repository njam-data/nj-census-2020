import { readCsv, writeCsv } from '@njam-data/tools/csv.js'
import { writeJson } from '@njam-data/tools/json.js'
import { convertNumberProperties } from '@njam-data/tools/convert.js'

import {
  filepaths,
  totalPopulationCsvFilepath,
  totalPopulationJsonFilepath
} from '../lib/filepaths.js'

async function main () {
  const totalPopulation = []

  const keys = Object.keys(filepaths)
  
  for (const key of keys) {
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
      const props = convertNumberProperties(row)

      let code
      let name

      if (key === 'state') {
        code = props.state_code
        name = props.state_name
      } else if (key === 'county') {
        code = props.county_code
        name = row.county_name
      } else if (key === 'county_subdivision'){
        code = props.cousub_code
        name = props.cousub_name
      } else if (key === 'place'){
        code = props.place_code
        name = props.place_name
      } else if (key === 'tract'){
        code = props.tract_code
        name = props.tract_name
      }

      if (props.cousub_name && props.cousub_name === 'County subdivisions not defined') {
        // skip undefined county subdivisions
      } else {
        totalPopulation.push({
          name,
          code,
          admin_type: key,
          population: props['2020_pop']
        })
      }

      return props
    })

    await writeJson(json, rows)
  }

  await writeJson(totalPopulationJsonFilepath, totalPopulation)
  await writeCsv(totalPopulationCsvFilepath, totalPopulation)
}

main()
