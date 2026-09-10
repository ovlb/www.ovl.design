import test from 'ava'

import alwaysEndWithFullstop from '../always-end-with-fullstop.js'

test('returns the unchanged string, if ends with `.`', (t) => {
  t.is(alwaysEndWithFullstop('String.'), 'String.')
})
