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

test('Translated text only validates if both translations are present', t => {
  const data = catalog()
  data.title = {
    en: 'English title'
  }
  t.false(validate(data))
  data.title = {
    de: 'Deutscher Titel'
  }
  t.false(validate(data))
  data.title = {
    de: 'Deutscher Titel',
    en: 'English title'
  }
  t.true(validate(data))
})

test('valid attribute', t => {
  const data = catalog()
  data.sections = [
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
  t.true(validate(data), JSON.stringify(validate.errors))
})
