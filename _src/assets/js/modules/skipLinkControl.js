export function skipLinkControl() {
  var $main = document.getElementById('main')
  var $skipLink = document.querySelector('.js-skip-link')

  // reset tabindex if script is running
  $main.removeAttribute('tabindex')

  $skipLink.addEventListener('click', function (evt) {
    evt.preventDefault()

    $main.setAttribute('tabindex', '0')
    $main.focus()
    $main.removeAttribute('tabindex')
  })
}
