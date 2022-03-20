export function themeSwitchControl() {
  const $switchContainer = document.querySelector('.js-theme-switch')

  if (!$switchContainer) return

  /**
   * @type HTMLButtonElement
   */
  const $switcher = $switchContainer.querySelector('.js-theme-switcher')
  /**
   * @type HTMLButtonElement
   */
  const $clearer = $switchContainer.querySelector('.js-theme-switch-clear')
  /**
   * @type String
   */
  const userThemeSetting = localStorage.getItem('ovlUserTheme')
  /**
   * @type Boolean
   */
  let isDarkMode

  if (userThemeSetting) {
    const userSettingPrefersDark = userThemeSetting === 'dark'

    isDarkMode = userSettingPrefersDark
    document.documentElement.setAttribute('data-user-theme', userThemeSetting)
    $clearer.hidden = false
  } else {
    const isDark = matchMedia('(prefers-color-scheme: dark)').matches

    isDarkMode = isDark
  }

  $switcher.setAttribute('aria-checked', isDarkMode.toString())

  $switcher.addEventListener('click', function () {
    isDarkMode = !isDarkMode

    const theme = isDarkMode ? 'dark' : 'light'

    localStorage.setItem('ovlUserTheme', theme)

    $switcher.setAttribute('aria-checked', isDarkMode.toString())
    $clearer.hidden = false

    document.documentElement.setAttribute('data-user-theme', theme)
  })

  $clearer.addEventListener('click', function () {
    isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches
    localStorage.removeItem('ovlUserTheme')
    document.documentElement.removeAttribute('data-user-theme')
    $switcher.setAttribute('aria-checked', isDarkMode)
    $clearer.hidden = true
  })

  $switchContainer.hidden = false
}
