module.exports = function (rawName) {
  const displayNames = new Map([
    ['cat:ai', 'Artificial (Un)intelligence'],
    ['cat:surveillance-state', 'Surveillance State'],
    ['cat:nft', 'NFT'],
    ['cat:cryptocurrency', 'Cryptocurrency'],
    ['cat:postcolonialism', 'Postcolonialism'],
  ])

  return displayNames.get(rawName)
}
