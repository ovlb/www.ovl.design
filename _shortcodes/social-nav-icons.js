module.exports = function (items) {
  return `<ul class="vertical-nav__list" role="list">
      ${items
        .map(({ url, title, rel }) => {
          return `<li>
            <a href="${url}" class="vertical-nav__link -is-${title.toLowerCase()}" ${
              rel && `rel=${rel}`
            }>${title}</a>`
        })
        .join('')}
    </ul>`
}
