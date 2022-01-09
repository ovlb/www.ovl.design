const fs = require('fs')

module.exports = {
  name: 'inlineSvg',
  shortcodeFunction: function (path) {
    const file = fs.readFileSync(path.resolve(process.cwd(), '_src', path), {
      encoding: 'utf-8',
    })

    return file.toString()
  },
}
