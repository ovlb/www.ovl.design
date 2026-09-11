import { skipLinkControl } from './modules/skipLinkControl.js'
import { themeSwitchControl } from './modules/themeSwitch.js'

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
