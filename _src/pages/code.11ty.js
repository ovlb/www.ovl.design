const { renderCodeCard } = require(
  `${process.cwd()}/_helper/components/code-card`,
)

module.exports = class CodeIndexPage {
  data() {
    return {
      permalink: '/code/',
      title: 'Code',
      pageTitle: 'Code',
      templateClass: 'tmpl-code',
      pageCSS: ['code'],
      hideBreadcrumb: true,
      eleventyComputed: {
        meta: ({ meta, site }) => ({
          ...meta,
          description:
            '01000011 01101111 01100100 01100101 00100000 01001001 00100000 01101000 01100001 01110110 01100101 00100000 01110111 01110010 01101001 01110100 01110100 01100101 01101110',
          image: {
            src: `${site.baseURL}/img/open-graph/ovl-og-image-code-v2.jpg`,
            alt: 'ASCII art of an owl holding a square. In the sqaure the letter o v l are written in a monospaced font.',
          },
        }),
      },
    }
  }

  render({ code, build }) {
    const intro = `
<p>${this.terminalLogin(build.buildTime)}</p>
<div class="terminal-row content-code__intro">
  ${
    // echo the intro line and show an animated style component
    `<div aria-hidden="true" class="terminal-row__path">~/dev/</div>
  <div aria-hidden="true" class="terminal-row__input">show-projects --verbose --directories</div>`
  }
</div>
    `.trim()

    const list = (code.projects || [])
      .map(
        (project) => `
      <li>
        ${renderCodeCard({ project })}
      </li>`,
      )
      .join('')

    return `
<main id="main" class="content-code" tabindex="-1">
  <h1 class="sr-only">Code</h1>
  ${intro}
  <ol class="code-list" role="list">
    ${list}
  </ol>
</main>
    `.trim()
  }
}
