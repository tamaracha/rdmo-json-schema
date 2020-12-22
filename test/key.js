'use strict'
const test = require('ava')
const validate = require('../dist/validate-catalog')

function createCatalog () {
  return {
    prefix: 'https://rdmo.example.com',
    key: 'catalog_134_key',
    title: 'Catalog title'
  }
}

test.beforeEach(t => {
  t.context.data = createCatalog()
})

test('alphanumeric key', t => {
  t.context.data.key = 'abc_123'
  t.true(validate(t.context.data))
})

test('key beginning with underscore', t => {
  t.context.data.key = '_abc123'
  t.false(validate(t.context.data))
})

test('key ending with underscore', t => {
  t.context.data.key = 'abc123_'
  t.false(validate(t.context.data))
})

test('key with non-alphanumeric or underscore', t => {
  t.context.data.key = 'abc.123'
  t.false(validate(t.context.data))
})

test('key with capital letters', t => {
  t.context.data.key = 'No_Capitals'
  t.false(validate(t.context.data))
})
