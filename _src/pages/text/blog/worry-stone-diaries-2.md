---
title: The blog
subtitle: A website and a fleeting sense of safety
intro: I restarted to build my website with Eleventy. Here’s why.
date: '2020-04-25'
permalink: '/text/worry-stone-diaries-no-2/'
oldTitles:
  - 'worry-stone-diaries-no-2-the-blog'
series:
  name: 'Worry Stone Diaries'
  issue: 2
tags:
  - cat:web-development
  - cat:eleventy
  - cat:accessibility
---

In [post number one of the Worry Stone Diaries,](/text/worry-stone-diaries-no-1/) I explained why I decided to change the architecture of the site and start from a clean slate. It’s version number Eleven(ty) of this page.

In this post, I am going to focus on building the page structure for the blog part of this project. The [repository of this project](https://github.com/ovlb/home-11ty) is on GitHub. At the time of writing, the discussed updates are only available at [11ty.owlish.dev](https://11ty.owlish.dev), my _re-working in the open copy_ of the main site.

## Collecting posts

Most blogs that use Eleventy have their content hosted as Markdown files inside the Git repository. As I had this site set up already and my posts within Contentful, I didn’t want to go this route, though.

I use an [API call helper function](https://github.com/ovlb/home-11ty/blob/master/_helper/getPosts.js) which is, of course, public, if you fancy taking a look. Let me walk through some of the main parts:

In addition to the [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) Contentul provides a [Preview API](https://www.contentful.com/developers/docs/references/content-preview-api/), which I use for local development if I write an article and want to test if everything renders correctly. To switch between APIs, I use a `STAGE` environment variable:

```js
const host =
  process.env.STAGE === 'preview'
    ? 'preview.contentful.com'
    : 'https://cdn.contentful.com'
```

Based on this I create the Contentful client.

```js
const clt = contentful.createClient({
  space: process.env.CF_SPACE,
  accessToken: process.env.CF_TOKEN,
  host
})
```

The heart of the helper is an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). It takes `type` and `order` as its arguments, to make it reusable.

```js
module.exports = async function ({ type, order = '-sys.createdAt' }) {
  try {
    const { items } = await clt.getEntries({
      content_type: type,
      order,
      include: 4
    })

    return items.map((item) => {
      return { id: item.sys.id, ...item.fields }
    })
  } catch (e) {
    throw new Error(e.message)
  }
}
```

The return value is the slightly modified array of items received from Contentful. `item.sys` contains some meta information about the item, such as the space it belongs to, the publishing date if and when it has been updated and so forth. I currently don’t need all this information, since I discard everything but the ID (I explain why I need it further down in the text).

As I now have the functionality in place to get data, let me take a step back and explain Eleventy collections:

Eleventy stores content in [collections](https://www.11ty.dev/docs/collections/).  As for adding items to these collections, there are a couple of different approaches to take. The example using tags inside Front Matter didn’t work out in my case, because I have no Markdown files.

Another way of creating collections is inside the `eleventy.js` config file by using `config.addCollection`.  You can see an [example of this using Markdown files](https://github.com/tatianamac/selfdefined/blob/master/.eleventy.js#L153) in the Self-Defined config. Or an [example using data from an API](https://github.com/TryGhost/eleventy-starter-ghost/blob/master/.eleventy.js#L89) in the Ghost starter made by David Darnes.

But there’s a third way to add «arbitrary data», as the docs say, to Eleventy, which is [JavaScript data files](https://www.11ty.dev/docs/data-js/). I chose this one because the file in the special `_data` directory makes it evident for me where the data comes from.

Having this diversity of ways to achieve a goal is one of the great features of Eleventy. You can choose which one works for you. Kudos for this.

I’ve two of these files related to content. [One is for my coding projects](https://github.com/ovlb/home-11ty/blob/master/_src/_data/code.js) and [the other one for articles I wrote](https://github.com/ovlb/home-11ty/blob/master/_src/_data/articles.js). I will focus on the latter here because overall, the article implementation touches more ground.

In these I can use the `getPosts` function:

```js
const all = await getPosts({ type: 'article', order: '-fields.date' })
```

These files are also a great place to mutate data, if you need to. I need a permalink to render in my article card and to create the detail pages.

```js
const posts = all.map((article) => {
  const isInternal = article.isInternal || !article.externalPost

  article.permalink = isInternal
    ? `/text/${article.slug}/`
    : article.externalPost.fields.link

  return article
})
```

In addition, I create second array which contains only the posts published on this site:

```js
const ownPosts = posts.filter((post) => post.isInternal)
```

I need this distinction because I only render detail pages for posts published on this blog (like the one you are reading this on), but the [text overview page](/text/) also shows articles I’ve published elsewhere.

Finally I can return both arrays:

```js
return {
  posts,
  ownPosts
}
```

At this point, I can use `articles.posts` and `articles.ownPosts` anywhere in my site.

## The article archive

The [archive code](https://github.com/ovlb/home-11ty/blob/master/_src/pages/text/index.njk) itself is not very ground-breaking. It’s a loop over `articles.post` and some templating logic. What I want to focus on are some steps I’ve taken to ensure a better experience for users of assistive technology.

I am talking about these considerations in a scope of a blog here, but they most likely apply to all kind of archive pages.

### Labelling landmarks
Screen reader users have some shortcuts to navigate a page. One of them is navigating by landmark. As all list items are `<article>` elements, they are visible in the Accessibility Tree of the archive.

But by default, they are only this, article landmarks without a name.

The VoiceOver rotor will show a list which is … not very informative.

- article
- article
- article
- article
- … and so forth

For sighted users, the missing information is there, and it’s the headline of the respective article. But how can it be added to the information a screen reader receives?

The answer is `aria-labelledby`. You might be familiar with `aria-label`, an attribute that lets you add a string to overwrite the label of an element. `aria-labelledby` works a bit differently.

Instead of using a string of text, we reference another element by its `id` attribute, similar to an input label that uses `for` to link it the label to an input with the matching `id`. The _text content_ of the element with this `id` will become the _accessible name_ of the element I’ve put `aria-labelledby` on.

Now is a good time to recommend the article [What’s in a name](https://sarahmhigley.com/writing/whats-in-a-name/) by Sarah Highley. It’s a superb resource on naming and accessibility. In it, she writes:

> Landmarks need an accessible name when there are multiple instances of the same type of landmark on a page, such as a main navigation region together with a supplementary navigation region. Generic landmarks (with role="region") always need an accessible name.

That’s the case with the post archive. Through rendering a list of articles, I got loads of generic landmarks, but no names.

Let’s fix this.

Note: The approach I took here is only one go the possibilities to label elements. If you want to learn more, take a look at [My Priority of Methods for Labeling a Control](https://adrianroselli.com/2020/01/my-priority-of-methods-for-labeling-a-control.html) by Adrian Roselli.

The first thing I need to do is to make the correct text content identifiable. In the case here it’s the heading of a post:

```html
<h2
  class="article-card__headline"
  id="title-{{ post.id }}"
>
```

I can use `post.id` because my articles have an ID that’s provided by Contentful. If you are looping through local data, you can use the current index of the loop you are in to construct a unique `id` – how you can implement this in detail depends on your templating language, but all I know are capable of doing so.

The second step is to use this ID on the article element:

```html
<article class="article-card" aria-labelledby="title-{{ post.id }}">
```

After doing so, the list above shows the information I wanted:

- Worry Stone Diaries No. 1 – Start. article
- Getters in a factory. article
-  No.. article
-  Inclusive Inputs. article
- … and so forth

[As Adrian Roselli, pointed out on Twitter](https://twitter.com/aardrian/status/1259867542782455818), the information different screen readers provide when applying `aria-labelledby` differs. NVDA does not show `article` elements in the landmark overview at all. JAWS, on the other hand, does include `article`s in the overview, but adds the whole text content of their child nodes. By adding `aria-labelledby` this changes to only include the heading.

### Synthesised speech, punctuation & hierarchy
To read a text, punctuation or a visible hierarchy is important. If I didn’t use it here, you would have a pretty hard time making sense of what I write (Side note: I hope you don’t have). The same is true for [speech synthesisers](https://en.wikipedia.org/wiki/Speech_synthesis). With one notable exception: They don’t give a heck about visual hierarchy.

A screen reader saying «Getters in a factory article» sounds like a person that is way too nervous and skips a beat. We have two pieces of information, the title of the post and the landmark role, mumbled into one.

My post titles mostly contain no period at the end. It’s a matter of personal preference. You can take the simple way out and add a `.` to all titles. [It’s what Ethan Marcotte is doing](https://ethanmarcotte.com/wrote/); doing what Ethan is doing will always get you a long way.

However, I am trapped in my preferences, and took a different way to achieve proper pronunciation.

If you take a look at the [text content of the article titles,](https://github.com/ovlb/home-11ty/blob/master/_src/pages/text/index.njk#L36) you will notice the [filter](https://www.11ty.dev/docs/filters/) `alwaysEndWithFullStop`.

Its source looks like this:

```js
function (str) {
  if (str.endsWith('.')) return str

  return `${str}<span class="sr-only">.</span>`
})
```

If the string already ends with a `.` it returns the string, but if it doesn’t, it adds a [visually hidden](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html) `.` and returns the modified string. Clever, aight? The lengths we go to preserve personal preferences.

One last thing I wanted to point out is not related to speech output, but to order. But it still ties into the difference of visual and textual representation.

The article cards in use on the overview page use different font sizes and colours to convey structure. As such, a sighted user will always read the large, accentuated title first, afterwards either the date or the intro.

But when navigating into the `<article>` with a screen reader, reading the publishing date before the title seems wrong. This is one of the only [use cases for the `order` property](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#Use_cases_for_order) of CSS flex items. If you decide to use this, be aware that is has serious [accessibility considerations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items#The_order_property_and_accessibility) to take into account.

The [update is in this diff](https://github.com/ovlb/home-11ty/commit/018df753b918b30ee575e1258ed6e17bc0499c04).

Fundamentally, I changed the markup order to be

```html
<article class="article-card" aria-labelledby="title-12"
  <h2 class="article-card__headline" id="title-12">Re-ordering flex items</h2>
  <p class="article-card__date">January 2020</p>
  <p class="article-card__intro">Order! Order!</p>
</article>
```

To restore visual order, the `.article-card` needs to be a flex container that flows vertically:

```css
.article-card {
  display: flex;
  flex-flow: column;
}
```

And I need to move the `.article-card__date` up by one:

```css
.article-card__date {
  order: -1;
}
```

Screen readers can now read the elements in order.

1. Re-ordering flex items. Heading level 2
2. January 2020
3. Order! Order!

Whereas sighted users can be fooled to read the re-ordered order in order by using colours, font sizes and spacing.

One last optimisation I made is being more explicit in what the date represents.

The whole date paragraph looks like this:

```html
<p class="article-card__date">
  <span class="sr-only">Published in </span>
  <time datetime="{{ post.date }}" class="type-is-aside">{{ post.date | displayDate }}</time>
</p>
```

With this structure, a screen reader reads

1. Re-ordering flex items.
2. Published in January 2020
3. Order! Order!

That’s about it for the accessibility improvements I undertook for my text archive page. Let’s talk detail pages next.

## The article detail page
As with the archive, I won’t explain every step I took to build the article pages, but instead focus on some areas which made me stumble – or happy.

One thing that _definitely_ made me stumble is pagination, and how to render single pages out of an unknown data set, the data set is the API response I had available in `articles.ownPosts`.

### Using pagination to render single pages
Overall, I made pretty fast progress in building the Eleventy site. Most of the migration of [my current Nuxt based site](https://github.com/ovlb/root.ovl.design) was done in a matter of hours.

But one thing that made my wish to become a wine farmer somewhere remote come to life again. It’s a wish I resort to regularly when I am feeling _plain stupid_. In this instance: Rendering the damned detail pages.

We’ve reached the point where I have to give revolving hearts to the spirit of sharing prevalent in the web development community.

One thing that I only discovered after the fact is [the Learn With Jason session with Zach Leatherman](https://www.youtube.com/watch?v=j8mJrhhdHWc&feature=emb_title). Its title is «Let’s Learn Eleventy!» and if you’re just starting on your Eleventy journey, watch it. Also, watch it if you built some sites with Eleventy. As Jason Lengstorf knows how to ask the right questions and Zach, well, invented the thing, there’s something to learn for everyone.

One thing which I – luckily – discovered after only approximately two hours of my favourite development technique «trial and error and stare at the Interwebs» is the aforementioned [Eleventy Starter Ghost](https://github.com/TryGhost/eleventy-starter-ghost), which solved the riddle.

To emphasise my gratitude: _Thank you, [David Darnes](https://darn.es/)_.

Here’s the thing: Eleventy ships with [build-in pagination functionality](https://www.11ty.dev/docs/pagination/). And the docs are super helpful if you want to create a paginated archive or navigation. But I somehow didn’t grasp the step you have to take to use pagination to create detail pages.

The trick is to use a `pagination.size` of `1` to split up posts. Here’s [how Eleventy Starter Ghost implements it](https://github.com/TryGhost/eleventy-starter-ghost/blob/master/src/posts/posts.njk):

```js
pagination:
  data: collections.posts
  size: 1
  alias: post
  addAllPagesToCollections: true
layout: 'layouts/post.njk'
permalink: '{{ post.url }}'
```

Looking at it in hindsight, it’s so obvious. But hindsight is hindsight.

I use the `articles.ownPosts` data, I created earlier:

```js
---
pagination:
  data: articles.ownPosts
  size: 1
  alias: post
layout: 'layouts/post.njk'
permalink: '{{ post.permalink }}'
pageCSS: 'textDetail'
templateClass: 'tmpl-single-post'
---
```

By using pagination in such a way, Eleventy creates pages for all posts, based on the `permalink`, using a [specified post layout](https://github.com/ovlb/home-11ty/blob/master/_src/_includes/layouts/post.njk).

I will talk about my CSS infrastructure in the next post, so I won’t go over this layout in detail, here. It uses CSS grid, [Prism](https://prismjs.com/) to highlight code blocks using Eric Bailey’s  [a11y syntax highlighting theme](https://github.com/ericwbailey/a11y-syntax-highlighting). If you are interested in how it comes together to look like it looks, the best thing to do is use your dev tools.

### Pagination navigation
Maybe the more obvious use case to use the pagination functionality is to display a pagination. Who would’ve thought?

One use case is documented in the [Pagination Navigation documentation](https://www.11ty.dev/docs/pagination/nav/).

Using a similar pattern, I wanted to display previous and next posts at the end of an article. The thing here is that Eleventy’s pagination is _url based_. That’s fine if you only want to do something like the following:

```html
<a href="{{ pagination.href.previous }}">Previous post</a>
```

As I wanted to display the full page title, I needed something custom, enter the `paginationItem` shortcode.

Here’s my template code:

```html
<section role="section" class="pagination-navigation text__pagination" aria-labelledby="pgntn-hdln">
  <h2 id="pgntn-hdln" class="pagination-navigation__headline">Other things I’ve written</h2>
  {% paginationItem 'previous', pagination.href.previous, articles.ownPosts %}
  {% paginationItem 'next', pagination.href.next, articles.ownPosts %}
</section>
```

`paginationItem` is a function which accepts three arguments: the direction, the URL of the post in this direction and all posts and will return a string.

I pass in all posts, to find the correct post based on the provided URL/`href`.

This is the whole thing, I will explain it bit by bit below:

```js
config.addShortcode('paginationItem', function (
    direction,
    paginationLink,
    allItems
  ) {
  if (!paginationLink) return ''

  const infos = new Map([
      ['next', { headline: 'Next post', class: '-next' }],
      ['previous', { headline: 'Previous post', class: '-previous' }]
    ]).get(direction)

  const fullItemInformation = allItems.find(
      (article) => article.permalink === paginationLink
    )

  if (!fullItemInformation) return ''

  return `<div class="pagination-navigation__section">
        <h3 class="pagination-navigation__sub-headline type-all-small-caps">${infos.headline}</h3>
        <a class="pagination-navigation__link ${infos.class}" href="${paginationLink}">${fullItemInformation.title}</a>
      </div>`
})
```

The first thing is  short circuit. If there is no next or previous item, there’s nothing to render.

```js
if (!paginationLink) return ''
```

Next, I use a [Map](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) as a proxy to get some information, like the headline.

```js
const infos = new Map([
    ['next', { headline: 'Next post', class: '-next' }],
    ['previous', { headline: 'Previous post', class: '-previous' }]
  ]).get(direction)
```

To display information about the post, I need to find its information, this is the following part:

```js
const fullItemInformation = allItems.find(
    (article) => article.permalink === paginationLink
  )
```

As another safety measure, I return an empty string if whatever reason no post could be found:

```js
if (!fullItemInformation) return ''
```

With all information in place I can return the HTML structure as a string:

```js
return `<div class="pagination-navigation__section">
  <h3 class="pagination-navigation__sub-headline type-all-small-caps">${infos.headline}</h3>
   <a class="pagination-navigation__link ${infos.class}" href="${paginationLink}">${fullItemInformation.title}</a>
</div>`
```

Here I use the `infos` I got based on the direction and `title` present in `fullInformation` to render the pagination item container including content.

Which, again, shows that even though Eleventy might not always give all information you need, but it always provides enough information to get these details.

The current and next post might or might not be of interest to the reader of the current article. I’ve planned to enhance the _Other things I’ve written_ landmark with posts belonging to the categories the current post is in, to provide more topical information.

## It’s a blog
That’s about it. With the changes so far, I got my blog up and running. And with a far lesser degree of complexity also [my overview of coding projects](/code/).

In the next post in the Worry Stone Diaries series, I will write about the CSS build process.

Thanks for reading.

