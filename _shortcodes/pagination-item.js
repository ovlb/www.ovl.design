module.exports = function (direction, paginationLink, allItems) {
  if (!paginationLink) return ''

  const infos = new Map([
    ['next', { headline: 'Next post', class: '-next' }],
    ['previous', { headline: 'Previous post', class: '-previous' }],
  ]).get(direction)

  const fullItemInformation = allItems.find(
    (article) => article.permalink === paginationLink,
  )

  if (!fullItemInformation) return ''

  return `<div class="pagination-navigation__section">
        <h3 class="pagination-navigation__sub-headline type-all-small-caps">${infos.headline}</h3>
        <a class="pagination-navigation__link ${infos.class}" href="${paginationLink}">${fullItemInformation.title}</a>
      </div>`
}
