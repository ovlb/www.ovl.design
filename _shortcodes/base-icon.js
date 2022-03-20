const fs = require('fs')
const path = require('path')

const paths = require('../_helper/paths')

module.exports = function (name, { size = 24 } = {}) {
  const iconContent = fs.readFileSync(
    path.resolve(process.cwd(), paths.img, 'icons/', `${name}.svg`),
  )

  return `<svg xmlns="http://www.w3.org/2000/svg" class="base-icon" width="${size}" height="${size}" viewBox="0 0 24 24">${iconContent}</svg>`
}
