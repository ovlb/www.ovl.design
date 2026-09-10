import fs from 'fs'
import path from 'path'

const BLOG_DIR = path.join(
  import.meta.dirname,
  '..',
  '_src',
  'pages',
  'text',
  'blog',
)

const UMLAUTS = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' }

function slugify(title) {
  return title
    .trim()
    .toLowerCase()
    .replace(/[äöüß]/g, (char) => UMLAUTS[char])
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function buildFrontmatter({ title, slug, tags }) {
  const tagLines = tags.map((tag) => `  - ${tag}`).join('\n')

  return `---
title: ${title}
subtitle: TODO
permalink: '/text/${slug}/'
tags:
${tagLines}
intro: TODO
date: '${today()}'
---

`
}

function createPost({ title, tags = ['cat:TODO'] }) {
  const slug = slugify(title)

  if (!slug) {
    throw new Error('Could not derive a file name from the given title.')
  }

  const filePath = path.join(BLOG_DIR, `${slug}.md`)

  if (fs.existsSync(filePath)) {
    throw new Error(`Post already exists: ${filePath}`)
  }

  fs.writeFileSync(filePath, buildFrontmatter({ title, slug, tags }))

  return filePath
}

function parseTags(tagArgs) {
  const tags = tagArgs
    .flatMap((arg) => arg.split(','))
    .map((tag) => tag.trim())
    .filter(Boolean)

  return tags.length > 0 ? tags : undefined
}

function run(args) {
  const [title, ...tagArgs] = args

  if (!title) {
    console.error(
      'Usage: node _helper/new-post.js "Post Title" [cat:one cat:two]',
    )
    return 1
  }

  const tags = parseTags(tagArgs)

  try {
    const filePath = createPost({ title, ...(tags ? { tags } : {}) })
    console.log(`Created ${filePath}`)
    return 0
  } catch (error) {
    console.error(error.message)
    return 1
  }
}

export { slugify, buildFrontmatter, createPost, parseTags, run }
export default { slugify, buildFrontmatter, createPost, parseTags, run }

if (process.argv[1] === import.meta.filename) {
  process.exitCode = run(process.argv.slice(2))
}
