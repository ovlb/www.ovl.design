const test = require('ava')

const alwaysEndWithFullstop = require('../always-end-with-fullstop')

test('returns the unchanged string, if ends with `.`', (t) => {
  t.is(alwaysEndWithFullstop('String.'), 'String.')
})
