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

test('valid minimal catalog', t => {
  t.true(validate(t.context.data))
})

test('invalid minimal catalog with non-uri prefix', t => {
  t.context.data.prefix = 'x.y.z'
  t.false(validate(t.context.data))
})

test('Translated text only validates if both translations are present', t => {
  t.context.data.title = {
    en: 'English title'
  }
  t.false(validate(t.context.data))
  t.context.data.title = {
    de: 'Deutscher Titel'
  }
  t.false(validate(t.context.data))
  t.context.data.title = {
    de: 'Deutscher Titel',
    en: 'English title'
  }
  t.true(validate(t.context.data))
})

test('valid attribute', t => {
  t.context.data.sections = [
    {
      key: 'section_key',
      title: 'Section title',
      questionsets: [
        {
          key: 'questionset_key',
          title: 'Questionset title',
          attribute: 'data_setup'
        }
      ]
    }
  ]
  t.true(validate(t.context.data), JSON.stringify(validate.errors))
})
