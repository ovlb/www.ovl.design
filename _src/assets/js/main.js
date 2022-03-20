import { skipLinkControl } from './modules/skipLinkControl.js'
import { themeSwitchControl } from './modules/themeSwitch.js'

function init() {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      skipLinkControl()
      themeSwitchControl()
    })
  } else if ('requestAnimationFrame' in window) {
    requestAnimationFrame(() => {
      skipLinkControl()
      themeSwitchControl()
    })
  }
}

if (document.readyState === 'complete') {
  init()
} else {
  window.addEventListener('load', () => {
    init()
  })
}
