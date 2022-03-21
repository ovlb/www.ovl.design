const markdown = require('../_libraries/markdown.js')

module.exports = function (raw) {
  return markdown.render(raw)
}
