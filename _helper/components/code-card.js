const { renderTerminalDecorator } = require('./terminal-decorator')

function renderCodeCard({ project }) {
  const terminalPath = `~/dev/${project.slug}`
  const baseCommand = 'echo'
  const id = `code-${project.slug}`

  return `
<article class="code-card l-stack" aria-labelledby="${id}" style="--stack-space: 0.5rem">
  <div class="terminal-row">
    ${renderTerminalDecorator({
      terminalPath,
      command: `${baseCommand} $NAME`,
    })}
    <h2 id="${id}">${project.title}</h2>
  </div>
  <div class="terminal-row">
    ${renderTerminalDecorator({
      terminalPath,
      command: `${baseCommand} $DESC`,
    })}
    <p class="terminal-row__output">${project.description}</p>
  </div>
  <div class="terminal-row">
    ${renderTerminalDecorator({
      terminalPath,
      command: `${baseCommand} $LINKS`,
    })}
    <ul aria-label="Detail links ${
      project.title
    }" class="icon-list code-card__icons" role="list">
      ${
        project.website
          ? `<li class="icon-list__item">
          <a href="${project.website}" class="icon-list__link icon-list__link--website" rel="noopener">
            <span class="sr-only">${project.title}</span>
            <span class="icon-list__link-text"> Website</span>
          </a>
        </li>`
          : ''
      }
      <li class="icon-list__item">
        <a href="${
          project.sourceCode
        }" class="icon-list__link icon-list__link--code" rel="noopener">
          <span class="sr-only">${project.title}</span>
          <span class="icon-list__link-text"> Source Code</span>
        </a>
      </li>
    </ul>
  </div>
</article>
  `.trim()
}

module.exports = { renderCodeCard }
