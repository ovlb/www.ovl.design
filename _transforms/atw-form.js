const { parseHTML } = require('linkedom')

module.exports = {
  transform: function (content) {
    if (/\/around-the-web\/\d+/.test(this.outputPath)) {
      const { document } = parseHTML(content)

      const headings = [
        ...document.querySelectorAll('.text__body h2:not([class])'),
      ]
      const { length } = headings

      const middle = headings[Math.ceil(length / 2)]

      const form = `<form
  action="https://buttondown.email/api/emails/embed-subscribe/around-the-web"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/around-the-web', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <h2 class="small-headline">Can I talk to you about e-mails?</h2>
  <p>Thanks for making it this far. Maybe you are interested in getting Around the Web as an e-mail whenever a new issue is published?</p>
  <p>There’s also an <a href="/around-the-web/feed.xml">RSS feed</a>. It’s like e-mail, but better (imho).</p>
  <div class="form-section">
    <label for="bd-email">E-mail</label>
    <input type="email" name="email" id="bd-email" />
    <input type="submit" value="Subscribe" />
  </div>
  <p>
    <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
  </p>
</form>`

      middle.insertAdjacentHTML('beforebegin', form)

      return `<!DOCTYPE html>${document.documentElement.outerHTML}`
    }

    return content
  },
}
