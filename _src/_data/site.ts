const { BASE_URL } = process.env

/* function getBaseURL() {
  if (DEPLOY_PRIME_URL && !DEPLOY_PRIME_URL.includes('main--')) {
    return DEPLOY_PRIME_URL
  }

  return BASE_URL || 'https://www.ovl.design'
} */

type SiteData = {
  locale: string
  title: string
  description: string
  author: {
    name: string
    email: string
  }
  baseURL: string | undefined
  strings: {
    skip_to_content: string
  }
}

const site: SiteData = {
  locale: 'en',
  title: 'ovl',
  description: 'code & design',
  author: {
    name: 'Oscar',
    email: 'o@ovl.design',
  },
  baseURL: BASE_URL,
  strings: {
    skip_to_content: 'Skip to main content',
  },
}

export default site
