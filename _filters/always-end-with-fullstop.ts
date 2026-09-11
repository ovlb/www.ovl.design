export default function (str: any) {
  if (str.endsWith('.')) return str

  return `${str}<span class="sr-only">.</span>`
}
