'use strict'
const test = require('ava')
const validate = require('../index.js').validate

function catalog () {
  return {
    prefix: 'https://rdmo.example.com',
    key: 'catalog_key',
    title: 'Catalog title'
  }
}

test('valid minimal catalog', t => {
  const data = catalog()
  t.true(validate(data))
})

test('invalid minimal catalog with wrong key', t => {
  const data = catalog()
  data.key = 'No_Capitals'
  t.false(validate(data))
})

test('invalid minimal catalog with non-uri prefix', t => {
  const data = catalog()
  data.prefix = 'x.y.z'
  t.false(validate(data))
})
