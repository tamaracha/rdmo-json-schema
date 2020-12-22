'use strict'
const { writeFile } = require('fs/promises')
const $RefParser = require('@apidevtools/json-schema-ref-parser')

$RefParser.bundle('./schema/catalog.yml')
  .then(json => writeFile('./dist/catalog.schema.json', JSON.stringify(json)))
