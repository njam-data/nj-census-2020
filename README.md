# @njam-data/nj-census-2020

## Install

```shell
npm i @njam-data/nj-census-2020
```

## Usage

### 2020 population totals

```js
import { getPopulation } from '@njam-data/nj-census-2020'

const statePopulation = await getPopulation({ dataset: 'state' })
const countyPopulations = await getPopulation({ dataset: 'county' })
const countySubdivisionPopulations = await getPopulation({ dataset: 'county_subdivision' })
const placePopulations = await getPopulation({ dataset: 'place' })
const tractPopulations = await getPopulation({ dataset: 'tract' })
```

### Census data
```js
import { getData } from '@njam-data/nj-census-2020'

const stateData = await getData({ dataset: 'state' })
const countyData = await getData({ dataset: 'county' })
const countySubdivisionData = await getData({ dataset: 'county_subdivision' })
const placeData = await getData({ dataset: 'place' })
const tractData = await getData({ dataset: 'tract' })
```


## Data
- County subdivision 2010/2020 comparison files in [JSON](data/processed/big-local-news/03_county_sub_pl94171_standard_compare_2010_2020.json) and [CSV](data/processed/big-local-news/03_county_sub_pl94171_standard_compare_2010_2020.csv)


## Source
https://biglocalnews.org / AP, based on PL_94 redistricting files from the Census
