export function themeSwitchControl() {
  const $switchContainer =
    document.querySelector<HTMLElement>('.js-theme-switch')

  if (!$switchContainer) return

  const $switcher =
    $switchContainer.querySelector<HTMLButtonElement>('.js-theme-switcher')
  const $clearer = $switchContainer.querySelector<HTMLButtonElement>(
    '.js-theme-switch-clear',
  )

  if (!$switcher || !$clearer) return

  const userThemeSetting = localStorage.getItem('ovlUserTheme')
  let isDarkMode = false

  if (userThemeSetting) {
    isDarkMode = userThemeSetting === 'dark'

    document.documentElement.setAttribute('data-user-theme', userThemeSetting)
    $clearer.hidden = false
  } else {
    isDarkMode = matchMedia('(prefers-color-scheme: dark)').matches
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
    $switcher.setAttribute('aria-checked', isDarkMode.toString())
    $clearer.hidden = true
  })

  $switchContainer.hidden = false
}
