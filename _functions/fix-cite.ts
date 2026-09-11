export default (content: any) =>
  content
    .replaceAll('&lt;cite&gt;', '<cite>')
    .replaceAll('&lt;/cite&gt;', '</cite>')
