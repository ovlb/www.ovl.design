import fs from 'node:fs'
import path from 'node:path'

const CACHE_DIR = '.mastodon'

/**
 * Migrate Mastodon cache entries written by eleventy-fetch v3 to the
 * format v5 understands, so posts deleted upstream stay available.
 * Filenames (hashes) are identical across versions and contents files
 * (`<hash>.json`, `<hash>.buffer`) are untouched — only the metadata
 * sidecar changes shape:
 *
 * v3: `[{hash},{cachedAt,type},"json"]` (flatted array)
 * v5: `{cachedAt,type,metadata}` (plain object)
 *
 * Idempotent: already-migrated entries are skipped. Safe to run on
 * every build.
 *
 * @returns {number} Count of migrated entries
 */
function migrateMastodonCache(cacheDir = CACHE_DIR) {
  const directory = path.resolve(cacheDir)

  let files

  try {
    files = fs.readdirSync(directory)
  } catch {
    return 0
  }

  let migrated = 0

  for (const file of files) {
    // metadata sidecars have no extension (`eleventy-fetch-<hash>`);
    // contents live in `<hash>.json` / `<hash>.buffer` and stay as-is.
    if (!file.startsWith('eleventy-fetch-') || path.extname(file) !== '') {
      continue
    }

    const filePath = path.join(directory, file)

    let parsed

    try {
      parsed = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    } catch {
      continue
    }

    if (
      !Array.isArray(parsed) ||
      typeof parsed?.[1]?.cachedAt !== 'number' ||
      typeof parsed?.[2] !== 'string'
    ) {
      continue
    }

    try {
      fs.writeFileSync(
        filePath,
        JSON.stringify({
          cachedAt: parsed[1].cachedAt,
          type: parsed[2],
          metadata: {},
        }),
      )
      migrated += 1
    } catch {
      // unreadable entry or permissions: leave it, fetch refetches.
    }
  }

  if (migrated > 0) {
    console.log(
      `Migrated ${migrated} legacy Mastodon cache ${
        migrated === 1 ? 'entry' : 'entries'
      } to the current format.`,
    )
  }

  return migrated
}

export { migrateMastodonCache }
