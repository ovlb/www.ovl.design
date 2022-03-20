const test = require('ava')

const alwaysEndWithFullStop = require('../always-end-with-fullstop')

test('returns the unchanged string, if ends with `.`', (t) => {
  t.is(alwaysEndWithFullStop('String.'), 'String.')
})
