const test = require('ava')

const {
  slugify,
  buildFrontmatter,
  createPost,
  parseTags,
} = require('../new-post')

test('slugifies a plain title', (t) => {
  t.is(slugify('Vibe Coding'), 'vibe-coding')
})

test('transliterates German umlauts like existing slugs', (t) => {
  t.is(slugify('Memoiren eines Prüflings'), 'memoiren-eines-prueflings')
})

test('strips punctuation and extra dashes', (t) => {
  t.is(slugify('  Hello, World!  '), 'hello-world')
})

test('frontmatter holds title, slug permalink and date', (t) => {
  const frontmatter = buildFrontmatter({
    title: 'Vibe Coding',
    slug: 'vibe-coding',
    tags: ['cat:ai'],
  })

  t.true(frontmatter.includes('title: Vibe Coding'))
  t.true(frontmatter.includes("permalink: '/text/vibe-coding/'"))
  t.true(frontmatter.includes('  - cat:ai'))
  t.regex(frontmatter, /date: '\d{4}-\d{2}-\d{2}'/)
})

test('createPost refuses to overwrite an existing post', (t) => {
  t.throws(() => createPost({ title: 'Vibe Coding' }), {
    message: /already exists/,
  })
})

test('parseTags accepts space- and comma-separated tags', (t) => {
  t.deepEqual(parseTags(['cat:ai', 'cat:design']), ['cat:ai', 'cat:design'])
  t.deepEqual(parseTags(['cat:ai,cat:design']), ['cat:ai', 'cat:design'])
  t.is(parseTags([]), undefined)
})
