function renderArchiveHeader({ title, description = '', footerHtml = '' }) {
  return `
<header class="archive-header u-floral-heart-gradient">
  <div class="l-stack l-stack--vertical" style="--stack-space: var(--space-s); align-items: center">
    <h1 class="main-headline">${title}</h1>
    <p class="t-content-2">${description}</p>
    <section class="archive-header__footer">
      ${footerHtml}
    </section>
  </div>
</header>
  `.trim()
}

module.exports = { renderArchiveHeader }
