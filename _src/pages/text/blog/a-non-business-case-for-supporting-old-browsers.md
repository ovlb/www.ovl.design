---
title: 'A Non-Business Case for Supporting Old Browsers'
subtitle: The Web is build as a continuum. An excercise in keeping it that way.
intro: Some notes on building websites, serving a diverse set of users and why we should never stop building this way.
date: '2019-11-20'
image:
  og: 'ovl-og-image-building-web-001.png'
  title: 'building-web-high.jpg'
  alt: 'Parts of a dimly lit server rack'
tags:
  - 'cat:web-development'
  - 'cat:accessibility'
  - 'cat:technology'
---

CSS Tricks has published yet another [take on why we all need to abandon support for IE 11](https://css-tricks.com/a-business-case-for-dropping-internet-explorer/) as soon as possible.

I think that’s wrong. Let me explain why.

Often, when talking about «abandoning» support for a browser we forget that this simply isn’t possible. Users will visit your site with whatever browser they have at hand. Under whatever network conditions. And that’s okay. That’s great even. Resilience is one of the foundational principles of the Web.

And it’s not just the Web. The internet itself around is build upon resilient layers. TCP/IP is dumb. And, [as Jeremy Keith puts it](https://resilientwebdesign.com/chapter1/#The%20open%20architecture%20), that is «its secret sauce».  Browsers were, from the beginning, instructed to ignore HTML (and later CSS) they do not understand; without breaking the whole document.

In her article <cite>[Teaching CSS](https://css-tricks.com/teaching-css/)</cite> Rachel Andrew remarks

> Yet, a website built back then that is still online, or one accessed via the Wayback Machine will still work in a modern browser. Such is the care that has been taken to **not break the web** by the CSS Working Group, and the other groups working to add features to the web platform.
To call for abandonment runs afoul of this work and as such against the web itself.

In his talk <cite>[The Layers of the Web](https://vimeo.com/373128517)</cite> Jeremy Keith challenges this mindset by illustrating how languages on the web were build _upon another_.

Websites aren’t just broken or working. At least they don’t have to be. This requires thinking in steps. And not to put everything in your JavaScript stack.

The web, and I am going to lean on Jeremy Keith again, is not like other platforms. In fact, the word platform might not be apt to describe it at all. Maybe it’s more like a [continuum](https://adactio.com/journal/6692).

Which requires a different mindset, then one which just knows on or off. Building for the web offers the unique possibility of building experiences that are gradually enhanced.

## Building Layers
If we use HTML for Markup, CSS for styling and JS for behaviour sprinkled on top, we can go a long way towards supporting a multitude of User Agents.
And while it certainly is true that including _all_ the polyfills will bloat the scripts to send, it is also true that this is a solved problem.

Chris Coyier explained this in his article [Differential Serving](https://css-tricks.com/differential-serving/). We can use a clever combination of [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and the `nomodule` attribute to load one version of our scripts to modern browsers, and the other to old ones that do not support `script type="module"`.

Phil Walton has [described this approach in more depth](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/). We are using this technique at Kitchen Stories in production since January. By using [dynamic imports](https://v8.dev/features/dynamic-import) we can debundle our bundles even further.

What goes for JS is also true for CSS. Even though the gains might be smaller here.

All we need is a little bit of trickery with Media Queries. By adding the `media` attribute to the `link` tag that references a stylesheet it is only loaded if this Media Query evaluates to true.

And here the layers strike again. If a browser does not understand a media query it will not load the styles, regardless if it encounters the query in a style block or a link.

The tricky thing is knowing which queries to use.

_PSA_: I am pretty sure I did not come up with the following solution by myself. But: I do not find the original source anymore. If you can point me somewhere please [ping me on Twitter](https://twitter.com/_ovlb) and I will happily include a link in this article.

We need the following to happen: One query that targets old versions of IE and one that targets modern browsers.

For IE we can use `-ms-high-contrast` ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-ms-high-contrast)). This could also make Edge load the styles. Luckily Microsoft deprecated the value `none` in Edge.

By including the following `link` tag in a page, we can load styles only in old versions of IE. It works back to Windows 8.

```html
<link rel="stylesheet" media="(-ms-high-contrast: none)" href="css/ie.css">
```

Now, for modern browsers. Media Queries, as CSS as a whole are constantly evolving. As such there are [Media Queries Level 4](https://drafts.csswg.org/mediaqueries-4/). None of them are supported in IE. Some of them are not supported at all. In our case the [pointer media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) serves us well.

As we don’t really care which pointer is used, we can query for every possible value: `(pointer: fine), (pointer: coarse), (pointer: none) `.
The whole link tag will look like this:

```html
<link rel="stylesheet" media="(pointer: fine), (pointer: coarse), (pointer: none)" href="css/modern.css">
```

With this combination of two output bundles and media queries we have achieved what we need: Modern features in modern browsers and old features in old ones.

You can see this in action on the [Conditionally Load Styles demo site](https://playground.owlish.dev/conditional-styles/).

## Being Pragmatic
Making sure (some of) your code works in older browsers, does not mean _all functionality_ has to work everywhere. But, mind you, ninety percent of web development means putting text and images in boxes.

And to be honest, there is no reason to not enable this everywhere. Same for form submissions.

Make it boring. Make it solid. And sprinkle delight on it.

Putting the blame on the users, saying «they can complete the transaction on another device», is a lazy mindset. And one that _will_ hurt your bottom line. They will not complete the task on another device. They will leave for good.

In the same vein that the Web is a continuum, User Experience can be that too. If all the latest shiny technology is available, you are free to build the most amazing experience. If not, serve something that at least enabled core functionality.

If we embrace these layers, we will be able to build interfaces that work in the future. As well as the [first web browser](https://worldwideweb.cern.ch/).

And, as we talk about the first browser:

## We Say Old Like It’s a Bad Thing
We often talk about «old browser», as something to be discarded, because they are old. Seldom do we remember that these old browsers paved the way for everything we use today. This includes IE 5, the first browser to ship `XMLHttpRequest` and complete support for CSS 1. Or Mosaic, which shipped the now ubiquitous `img` tag ([which has a remarkable story to tell](https://thehistoryoftheweb.com/the-origin-of-the-img-tag/)).

I am not saying that we should all be using these browsers – or not be glad that some of the weirdness they forced upon is long gone. Still, all of these browsers managed to do one thing: keeping the continuum alive. We as people who build for the web should never forget this.

And, then there are people who are sticking with one older browser. The reasons are manifold. Some don’t know how to update, some maybe don’t _want_ to upgrade.

## An Accessible Elephant Enters the Room
The case against IE 11 is often justified by the fairly low percentage of people using it. And that might be true. In the grand scheme of things, anyways. And this is also where this line of reasoning gets problematic.
What it misses is a group of users that is [all too often dismissed while developing sites](https://ethanmarcotte.com/wrote/the-web-we-broke/); users of Assisitive Technology.

WebAIM regularly conducts a survey of screen readers. They published the 2019 edition in September. While the number of participants is fairly low and as as such not representative, they paint a picture that is remarkably different than «it’s only one percent and dwindling».

IE 11 is the third most popular browser in the survey ([see the browser section of the results](https://webaim.org/projects/screenreadersurvey8/#browsers)), used by 10 % of the respondents. The majority of the participants (85 %) are living in North America or Europe and almost half of them are 21–40 years old. This might sound like your target audience.

Now, taking a look at your analytics and making an informed decision is not the worst way forward. Keep in mind, though, that your analytics are skewed towards the people already using your site. The numbers don’t tell you about the people who could never use it.

## Never Stop Building this Way
By broadening of definition of «support» and keeping in mind that [support does not mean optimisation](https://bradfrost.com/blog/post/support-vs-optimization/), by being thoughtful and resilient, the sites we build now will have a bright future, as well as being portable to the past.

And as [my website works in the first ever browser](https://worldwideweb.cern.ch/browser/#https://www.ovl.design/), the [first ever website](http://info.cern.ch/hypertext/WWW/TheProject.html) works in modern browsers.

If that’s not amazing, I don’t know what is.

## Acknowledgements

Thanks to [Jeremy Keith](https://adactio.com/), [Rachel Andrew](https://rachelandrew.co.uk/), [Ethan Marcotte](https://ethanmarcotte.com/), [Brad Frost](https://bradfrost.com/) and all people I’ve not linked in the text, but who wrote or spoke about building for the web and whose thoughts formed this post.

Now is probably a good moment to re-read [A Dao of Web Design](https://alistapart.com/article/dao/). Nineteen years old now and as relevant as ever.

[Title image courtesy of NeONBRAND on Unsplash](https://unsplash.com/photos/uq5RMAZdZG4).
