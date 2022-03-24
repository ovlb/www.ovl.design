const { startCase, camelCase } = require('lodash')

module.exports = function (rawName) {
  const displayNames = new Map([
    ['cat:ai', 'Artificial (Un)intelligence'],
    ['cat:nft', 'NFT'],
    ['cat:climate', 'Climate Crisis'],
    ['cat:web', 'World Wide Web'],
  ])

  return (
    displayNames.get(rawName) ||
    startCase(camelCase(rawName.replace('cat:', '').replace('-', ' ')))
  )
}
