import { parseHTML } from 'linkedom'

export function transform(this: any, content: any) {
  if (this.outputPath && this.outputPath.endsWith('.html')) {
    const { document } = parseHTML(content)

    document.body.innerHTML = document.body.innerHTML
      .replaceAll('&lt;cite&gt;', '<cite>')
      .replaceAll('&lt;/cite&gt;', '</cite>')

    return `<!DOCTYPE html>${document.documentElement.outerHTML}`
  }

  return content
}

export default { transform }
