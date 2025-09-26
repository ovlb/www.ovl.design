const baseIcon = require(`${process.cwd()}/_shortcodes/base-icon`)

function renderIconLink({ href, label, icon, size = 18 }) {
  return `
<a class="icon-link" href="${href}" aria-label="${label}">${
    icon ? baseIcon(icon, { size }) : ''
  }<span>${label}</span></a>
  `.trim()
}

module.exports = { renderIconLink }
