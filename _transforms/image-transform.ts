import { parseHTML } from 'linkedom'
import { parseImages } from '../_helper/responsive-image.ts'

// async transforms work, even though the docs don’t tell you about it.
export async function transform(this: any, content: any) {
  const { outputPath } = this

  if (outputPath && outputPath.endsWith('.html')) {
    let { document } = parseHTML(content)

    const formatted = await parseImages(document)

    return `<!DOCTYPE html>${formatted}`
  }

  return content
}

export default { transform }
