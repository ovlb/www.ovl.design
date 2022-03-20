const fs = require('fs')
const path = require('path')

module.exports = function (name) {
  const content = fs.readFileSync(
    path.resolve(__dirname, '_helper', `${name}.js`),
  )

  return `<script>${content.toString()}</script>`
}
