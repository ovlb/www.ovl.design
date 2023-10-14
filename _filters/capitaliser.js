const { startCase, camelCase } = require('lodash')

module.exports = function (rawName) {
  const displayNames = new Map([
    ['cat:ai', 'Artificial (Un)intelligence'],
    ['cat:crypto', 'The road to hell is paved with crypto intentions'],
    ['cat:nft', 'NFT'],
    ['cat:climate', 'Climate Crisis'],
    ['cat:web', 'World Wide Web'],
    ['around-the-web', 'Around the Web'],
  ])

  return (
    displayNames.get(rawName) ||
    startCase(camelCase(rawName.replace('cat:', '').replaceAll('-', ' ')))
  )
}
