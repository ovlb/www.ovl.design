const fs = require('fs')
const path = require('path')

const paths = require('../_helper/paths')

module.exports = function (clsName) {
  const logo = fs.readFileSync(
    path.resolve(process.cwd(), paths.img, 'logo', 'ovl-logo-bridge-main.svg'),
    { encoding: 'utf-8' },
  )

  return `<div class="${clsName}">${logo.toString()}</div>`
}
