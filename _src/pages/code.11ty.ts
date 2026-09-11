import terminalLogin from '../../_filters/terminal-login.ts'
import { escapeHtml } from '../../_helper/archive-html.ts'

function terminalDecorator(path: any, command: any) {
  return `<div aria-hidden="true" class="terminal-row__path">${escapeHtml(
    path,
  )}</div><div aria-hidden="true" class="terminal-row__input">${escapeHtml(
    command,
  )}</div>`
}

function codeCard(project: any) {
  const path = `~/dev/${project.slug}`
  const links = `
    <ul aria-label="Detail links ${escapeHtml(
      project.title,
    )}" class="icon-list code-card__icons" role="list">
      ${
        project.website
          ? `<li class="icon-list__item"><a href="${escapeHtml(
              project.website,
            )}" class="icon-list__link icon-list__link--website" rel="noopener"><span class="sr-only">${escapeHtml(
              project.title,
            )}</span><span class="icon-list__link-text"> Website</span></a></li>`
          : ''
      }
      <li class="icon-list__item"><a href="${escapeHtml(
        project.sourceCode,
      )}" class="icon-list__link icon-list__link--code" rel="noopener"><span class="sr-only">${escapeHtml(
        project.title,
      )}</span><span class="icon-list__link-text"> Source Code</span></a></li>
    </ul>`
  return `<article class="code-card l-stack l-stack--vertical" aria-labelledby="code-${escapeHtml(
    project.slug,
  )}" style="--stack-space: 0.5rem">
<div class="terminal-row">${terminalDecorator(
    path,
    'echo $NAME',
  )}<h2 id="code-${escapeHtml(project.slug)}">${escapeHtml(
    project.title,
  )}</h2></div>
<div class="terminal-row">${terminalDecorator(
    path,
    'echo $DESC',
  )}<p class="terminal-row__output">${escapeHtml(project.description)}</p></div>
<div class="terminal-row">${terminalDecorator(
    path,
    'echo $LINKS',
  )}${links}</div>
</article>`
}

class CodePage {
  data() {
    return {
      permalink: '/code/',
      title: 'Code',
      pageTitle: 'Code',
      templateClass: 'tmpl-code',
      pageCSS: ['code'],
      hideBreadcrumb: true,
      eleventyComputed: {
        meta: ({ meta, site }: any) => ({
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

  render({ code, build }: any) {
    const projects = (code?.projects || [])
      .map((p: any) => `<li>${codeCard(p)}</li>`)
      .join('\n')
    return `<main id="main" class="content-code" tabindex="-1">
<h1 class="sr-only">Code</h1>
<p>${escapeHtml(terminalLogin(build.buildTime))}</p>
<div class="terminal-row content-code__intro">${terminalDecorator(
      '~/dev/',
      'show-projects --verbose --directories',
    )}</div>
<ol class="code-list" role="list">${projects}</ol>
</main>`
  }
}

export default CodePage
