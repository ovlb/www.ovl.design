import { skipLinkControl } from './modules/skipLinkControl'
import { themeSwitchControl } from './modules/themeSwitch'

function init() {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      skipLinkControl()
      themeSwitchControl()
    })
  } else {
    requestAnimationFrame(() => {
      skipLinkControl()
      themeSwitchControl()
    })
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init()
  })
} else {
  init()
}
