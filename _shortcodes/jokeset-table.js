import defaultRows from '../_src/_data/jokeset.js'

// The same markdown-it instance Eleventy is configured with (set via
// `setLibrary('md', …)` in `_libraries/md.js`). Reuse it so the jokeset
// output renders through the project's configured Markdown pipeline instead
// of escaping the raw string.
import markdown from '../_libraries/md.js'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function formatTokens(value) {
  return Number(value).toLocaleString('en-UK')
}

export default function (
  rows = defaultRows,
  caption = 'Python one-liner jokes by model, with token usage and cost',
  captionId = 'jokeset-caption',
) {
  // Eleventy invokes arg-less shortcodes with the tag body (a string),
  // so fall back to the jokeset data unless an array was passed.
  if (!Array.isArray(rows)) {
    rows = defaultRows
  }

  if (rows.length === 0) return ''

  const body = rows
    .map((row) => {
      return `<tr><th scope="row">${escapeHtml(
        row.model,
      )}</th><td>${formatTokens(row.tokens.input)}</td><td>${formatTokens(
        row.tokens.output,
      )}</td><td>$${escapeHtml(row.cost)}</td><td>${markdown.render(
        row.output,
      )}</td></tr>`
    })
    .join('')

  return `<div role="region" aria-labelledby="${escapeHtml(
    captionId,
  )}" tabindex="0" data-is-table-wrapper><table><caption id="${escapeHtml(
    captionId,
  )}">${escapeHtml(
    caption,
  )}</caption><thead><tr><th scope="col">Model</th><th scope="col">Input tokens</th><th scope="col">Output tokens</th><th scope="col">Cost</th><th scope="col">Output</th></tr></thead><tbody>${body}</tbody></table></div>`
}
