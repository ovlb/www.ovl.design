import test from 'ava'

import alwaysEndWithFullstop from '../always-end-with-fullstop.ts'

test('returns the unchanged string, if ends with `.`', (t) => {
  t.is(alwaysEndWithFullstop('String.'), 'String.')
})
