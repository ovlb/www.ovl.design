module.exports = (content) =>
  content
    .replaceAll('&lt;cite&gt;', '<cite>')
    .replaceAll('&lt;/cite&gt;', '</cite>')
