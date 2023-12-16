module.exports = function (albumId) {
  return `<iframe loading="lazy" class="tidal-embed" src="https://embed.tidal.com/albums/${albumId}?layout=gridify" frameborder="0"></iframe>`
}
