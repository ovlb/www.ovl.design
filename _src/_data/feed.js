const { baseURL } = require('./site')

baseURL

module.exports = {
  language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  image: `${baseURL}/img/favicon/favicon-32x32.png`,
  favicon: `${baseURL}/img/favicon/favicon-32x32.png`,
  author: {
    name: 'Oscar',
    email: 'o@ovl.design',
    link: 'https://www.ovl.design',
  },
}
