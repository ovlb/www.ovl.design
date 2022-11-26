---
title: An async function walks into a loop.
subtitle: Avoiding blank pages when using eleventy-image in template loops.
intro: A solution for async functionality in template loops, using `eleventy-image` as an example, some basics about JavaScript loops, and debugging advice. All in what should be a short note.
date: '2021-01-29'
image:
  og: 'ovl-og-image-eleventy-loop.png'
  title: 'image-eleventy-loop.jpg'
  alt: 'Parts of a circuit board of a computer'
tags:
  - cat:web-development
  - cat:eleventy
---

Recently I tried to render an async Eleventy shortcode inside a template `for` loop. Spoiler: It didn’t work. Which lead me to learn about async functionality in loops. Here’s what I tried, what failed, and what worked in the end.

## Foundations

For a client project, I needes to create a team site, with tiles for all members. Here’s the initial template code:

```html
{%- for member in teamGroup.members %}
  <li>
    <article class="team-member">
      <div class="team-member__image l-border-radius" style="--aspect-ratio: 3/4">
        <img src="{{ member.image.src }}" alt="Placeholder alt text, in reality this will describe the image."
      </div>
      <section class="team-member__info">
        <h4 class="team-member__name">{{ member.name }}</h4>
        <p class="t-aside">{{ member.occupation }}, {{ member.workplace }}</p>
      </section>
    </article>
  </li>
{% endfor -%}
```

All of these team members have an image. Our Content Management System <abbr>(CMS)</abbr> delivers a high resolution JPG via an API. But, as JPG is not the most efficient image format for modern browsers, I wanted to transform these into [WebP](https://developers.google.com/speed/webp/) and [AVIF](https://daily.dev/posts/avif-the-next-gen-image-format) .

Luckily, there’s an official Eleventy plugin called [eleventy-image](https://www.11ty.dev/docs/plugins/image/) which uses [sharp](https://www.npmjs.com/package/sharp) under the hood. Zach Leatherman published an article recently [explaining the plugin in detail](https://www.zachleat.com/web/eleventy-image/). If you’ve never heard of it before, I’d recommend that you check it out before continuing. The rest of this article assumes general knowledge of the plugin.

For simple use cases, e.g. a page header, the usage is as straightforward as in the docs.

```html
{% raw %}
<header class="page-header">
  {% articleImage header.image.url, 'Placeholder alt text', { classes: 'page-header__image', sizes: '100vw, (min-width: 46rem) 50vw' } %}
  <div class="page-header__content">
    <h1 class="main-headline">{{ title }}</h1>
    {% if introSummary %}
      <div>{{ introSummary | safe }}</div>
    {% endif %}
  </div>
</header>
{% endraw %}
```

Which will output (simplified example):

```html
<picture class="full-width-header__image">
  <source type="image/avif" srcset="/img/e0b0927f-1024.avif 1024w" sizes="100vw">
  <source type="image/webp" srcset="/img/e0b0927f-1024.webp 1024w" sizes="100vw">
  <source type="image/jpeg" srcset="/img/e0b0927f-1024.jpeg 1024w" sizes="100vw">
  <img src="/img/e0b0927f-1024.jpeg" decoding="async" alt="Placeholder alt text" width="1024" height="1024">
</picture>
```

I’ve updated the example from the docs a bit because I not only need to set the [`sizes` attribute](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes) (if you don't speak spec babble, CSS Tricks has a [guide to the responsive image syntax](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/)) but some classes as well.

It works because you can use [async shortcodes](https://www.11ty.dev/docs/languages/nunjucks/#asynchronous-shortcodes) in Nunjucks templates and the Eleventy renderer knows what to do. Yay, so far.

## The problem

Coming back to the above example, I wanted to use the same shortcode and call it a day.

```html
{% raw %}
{%- for member in teamGroup.members %}
  <li>
    <article class="team-member">
        {% articleImage member.image.src, 'Placeholder alt text', { classes: 'team-member__image l-border-radius', sizes: '41vw, (min-width: 46rem) 20vw, (min-width: 75rem) 14rem' } %}
      <section class="team-member__info">
        <h4 class="team-member__name">{{ member.name }}</h4>
        <p class="t-aside">{{ member.occupation }}, {{ member.workplace }}</p>
      </section>
    </article>
  </li>
{% endfor -%}
{% endraw %}
```

Unfortunately, this leads to a blank page. Not what I intended.

I … «debugged» for a bit. This means: I kinda aimlessly messed around with the image shortcode, searched the error where it wasn’t. Until I remembered debugging 101: Simplify your implementation until you find the error.

Simplifying here means getting rid of all the image rendering stuff. It is _possible_ that the image rendering stuff is causing the error, but it wasn't very likely. After all, the shortcode still worked for the header image on the same page.

Which lead me to believe that the problem wasn't the shortcode itself, but rather something on a higher level.

To test this hypothesis I created the simplest possible async shortcode:

```js
config.addNunjucksAsyncShortcode('asyncTest', async function (input) {
  return Promise.resolve(String(input))
})
```

This function does: nothing. It takes an input and immediately [resolves a Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) with the string representation of it.

If my hypothesis is correct and the problem wasn't the _implementation_, but the usage of async shortcodes in a template loop _per se,_  this had to fail:

```html
{% raw %}
{%- for member in teamGroup.members %}
  <li>
    <article class="team-member">
      {% asyncTest member.image.src %}
    </article
  </li>
{% endfor -%}
```
{% endraw %}

And it did. The page stayed white, an ode to minimalism in its annoying purity.

But as annoyed as I was at this point, I at least knew what I had to do: Removing the async function call from the loop.

But why?

## A primer on asynchronous (JavaScript) loops

Let’s take a step back and talk about loops, async, and templates.

What we’ve seen in my template examples above is a basic `for` loop. Basic here does not mean simple, but as simple as a loop gets. We take an _iterable_ value (in my case an Array, `teamGroup.members`) and loop over it one by one (`member in members`). This makes the individual item available, and I can access its properties, e.g. `member.image`.

Now, `for` loops have been around JavaScript and other programming languages since forever. But, as you may know, asynchronous programming is relatively new to JavaScript, and most templating languages don't support it at all.

This is where the problem stems from. By the time the rendering engine wants to render the template, the asynchronous calls are not finished. This leads to a blank page. There’s nothing there that could be rendered, making the renderer go «Are you kidding me, this is not how any of this works.»

In JavaScript there are two variants of this «classic» `for` loop. The one you’ve probably seen in a bunch of tutorials is a block with an initial value, a condition, and something that happens after the iteration:

```js
const arr = ['a', 'b', 'c'];
for (let i=0; i<arr.length; i++) {
  console.log(arr[i]);
}

// Output:
// 'a'
// 'b'
// 'c'
```

(Example is taken from the book <cite>[JavaScript for Impatient Programmers](https://exploringjs.com/impatient-js/ch_control-flow.html#for)</cite>.)

For arrays, there’s an alternative approach using the [`forEach` method](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach). As this is a method of the _Array prototype_ we don’t need to write the implementation, it’s baked into the language. If you are new to JavaScript, you can [read up on prototypes over at MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes).

```js
const arr = ['a', 'b', 'c'];
arr.forEach((value) => {
  console.log(value)
})

// Output:
// 'a'
// 'b'
// 'c'
```

The reason I write about them is that they both are not the solution to my problem. You can not wait for something asynchronous to happen in one of those loops. Both types of loops predate [Promises](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Promise) and [async functions](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Statements/async_function). And for knowing what _might_ work, I need to know what _will not work_. `for` and `forEach` do not work.

So, what’s left?

There’s a newer addition to the language, the [`for of` loop](https://exploringjs.com/impatient-js/ch_control-flow.html#for-of). Looking at the syntax, it’s pretty similar to the loop we’ve seen in my template. But, and this is important, in a different _context_.

The example above, using a `for of` loop, looks like this:

```js
const arr = ['a', 'b', 'c'];
for (let value of arr) {
  console.log(value)
}

// Output:
// 'a'
// 'b'
// 'c'
```

Side note: This works for Arrays and  [Maps](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Map), [Sets](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Global_Objects/Set), as well as other [iterable data structures](https://exploringjs.com/impatient-js/ch_sync-iteration.html).

The vital difference here is: You can use [`await` inside a `for of` loop](https://exploringjs.com/impatient-js/ch_async-iteration.html#for-await-of).

Now that we have something to aim at let’s look at this in detail and how this solves the problem in the following part.

## The solution aka awaiting the await

We’ve explored our options and know that we need to move the image creation from the template to JavaScript. In the context of Eleventy, this means the point where you get your data. I’ve written about an [API based approach to get data](/text/worry-stones-diaries-no-2-the-blog/#collecting-posts) before, so I will not cover this here.

Let’s assume we’ve fetched our pages and in one or more of these, there’s an array of team members for which we need to create the HTML to render their images. We’ll do this by calling an async function inside a `for of` loop:

```js
for (let page of publishedPages) {
  page.content.teamGroups = await formatTeam(page.content.team)
}
```

The actual implementation is more complicated, as I need to await the result of multiple async functions. Here’s the whole thing. I’ll walk through it bit by bit.

```js
const articleImage = require('../../shortcodes/article-image')

module.exports = function (team) {
  if (!team) return null
  let { members } = team

  return Promise.all(
    members.map(async (member) => {
      const picture = await articleImage(member.image.url, member.image.description, {
        sizes: '41vw, (min-width: 46rem) 20vw, (min-width: 75rem) 14rem'
      })

      return { ...member, picture }
    })
  )
}
```

On line 1 require the `articleImage` shortcode, covered in the docs, which I will use later.

One of the nice things about `eleventy-image` is that creating the different image formats and widths also works if you use the script _somewhere_ in your workflow. The output directory is always relative to the `.eleventy.js` config file. I wasn’t sure about this before I tried it, but it does — and this is _ chef's kiss_. This means that no matter where the `formatTeam`  function is located, Eleventy will save the generated image to the correct folder, in my case `dist/img`. Magic.

A safe thing to do is short-circuiting a function.

```js
if (!team) return null
```

As I loop over all pages of the site, I need to make sure that there are team members. If none are present, I return `null`. Based on this, I can later check in my template if something to render exists.

Next, I take the members out of the team:

```js
let { members } = team
```

Upfront: When I first wrote code awaiting multiple promises, my head went thoroughly into overload mode. Promises are complicated in and of themselves. [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) is the icing on the cake:

> The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.

What?! In plain English: `Promise.all()` is a kindergarten teacher who waits patiently until all children they are watching are done playing. Once they are, they walk back to kindergarten in order.

By returning `Promise.all()` in this function, we give our initial loop one value to wait for (the group of children returning to the kindergarten) instead of something undefined (all children returning one by one).

```js
return Promise.all(
  members.map(async (member) => {
    const picture = await articleImage(
      member.image.url,
      member.image.description,
      {
        sizes: '41vw, (min-width: 46rem) 20vw, (min-width: 75rem) 14rem'
      }
    )

    return { ...member, picture }
  })
)
```

As we are not waiting for children to play, the reality is: we wait until `eleventy-image` created all image sizes for all members and returned the appropriate markup.

Once it is done we return a new object, with the team member information plus the picture:

```js
return { ...member, picture }
```

This might look weird. I am using the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to _expand_ (or: copy) the original object into a new object. Using an [object property shorthand,](https://alligator.io/js/object-property-shorthand-es6/) I add the picture.

Another way to do this is:

```js
members.map(async (member) => {
  member.picture = await articleImage(
    member.image.url,
    member.image.description,
    {
      sizes: '41vw, (min-width: 46rem) 20vw, (min-width: 75rem) 14rem'
    }
  )

  return member
})
```

In this case, this is okay — as I do not use the member array anywhere else and do not change existing properties, I would get away with it. But still, I’m manipulating the source data. If I would use `members` again, they are not what they used to be. In other contexts, this quickly leads to debugging nightmares. Hence, I always opt for the safe version and return a new object.

That’s a lot of ground covered. Inhale, exhale.

Now that I’ve stored the HTML of a `<picture>` element with `srcset` and `sizes` as a property of my member, all that’s left is to use this in my template:

```html
{%- for member in teamGroup.members %}
  <li>
    <article class="team-member">
      <div class="team-member__image l-border-radius" style="--aspect-ratio: 3/4">
        {{ member.picture | safe }}
      </div>
      <!-- the other parts of the information omitted -->
    </article>
  </li>
{% endfor -%}
```

And finally, everything renders correctly.

### Error handling

I configured the backend which delivers the data to my Eleventy page. This implies that I know for sure that the image will _always_ exist. Hence I don't have any error handling in the above loop. This most certainly will lead to trouble if you don’t control the whole stack. If you want to fail gracefully, you’ll need to, e.g. check for the existence of an image and create some placeholder markup instead. [I do this for the website you are reading this on](https://github.com/ovlb/home-11ty/blob/master/.eleventy.js#L91).

## Outro

Taking a step back, what have I done? I’ve identified the template loop problem and moved the critical logic out of the template into plain JavaScript. By doing so, I’ve expanded the capabilities of working with data. That’s a pattern I try to pursue often. If parts of templates get involved, I write them in JavaScript — instead of the template —, and return strings. This way, I can unit test my functions, ensuring that they won’t break.

Another quick note: This approach works for me, because I get my data from an <abbr>API</abbr>. If you use store all your images in your project and use Markdown to e.g. render your blog, you can use [Transforms](https://www.11ty.dev/docs/config/#transforms) to scrape images from the rendered pages. Actually, I would go this way for any kind of long form content. You can see an [example transform working with article images](https://github.com/MadeByMike/supermaya/blob/master/site/transforms/parse-transform.js) in Supermaya’s source code (hat tip to [Mike Riethmuller](https://www.madebymike.com.au/) and [Andy Bell](https://piccalil.li)). It is as it often is: There’s no wrong or right. There’s only what works in a particular situation.

I’ve another article in the making, talking about `eleventy-image` build performance. If you want to stay up-to-date, you can [follow me on Twitter](https://twitter.com/_ovlb), or subscribe to [this blog’s RSS feed](https://www.ovl.design/text/feed.xml).
