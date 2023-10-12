const markdown = require('../_libraries/md.js')

module.exports = function (raw) {
  return markdown.render(raw)
}
