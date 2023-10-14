---
title: Permalink-Driven Breadcrumbs in Eleventy
subtitle: Navigational help using permalinks
intro: An approach to add a breadcrumb navigation to your Eleventy site, utilising the permalink structure
date: 2023-10-14
series:
  name: 'Worry Stone Diaries'
  issue: 4
tags:
  - cat:web-development
  - cat:eleventy
  - cat:accessibility
image:
  og: 'ovl-og-image-breadcrumbs.jpg'
  title: 'title-image-breadcrumb.jpg'
  alt: 'A slice of white bread, a bread knife and some breadcrumbs on a table'
---

I’m [renovating my blog](https://github.com/ovlb/www.ovl.design/pull/5) with all kinds of features, CSS refreshments, and little feature nuggets that might or might not be useful. One of those is a breadcrumb navigation.

I decided on an approach that is based on the permalink of the pages, as this currently holds all information I need.

For more nuanced implementations, you might want to take a look at the official [Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/), as this allows for a high degree of customisation and more complex data structures.

## Setup

[Most of the code is in this commit](https://github.com/ovlb/www.ovl.design/pull/5/commits/9462166f4f97994eb4886e0bbd5c19a84561504a), if you want to explore on your own.

The basic setup this relies on is a breadcrumb function in the root of my pages folder (`pages.11tydata.js`).

This way, I can add computed data to all pages, regardless how far nested inside the folders they are. The data cascade proves super powerful time and time again.

The approach I’m are going to take is the following: Split the permalink into path segments, use the resulting array to create a new array, and augment the path data that I get with a human-readable title.

Before I do anything, let’s get rid of pages that don’t have a permalink (e.g., external blog posts):

```js
if (!permalink) {
	return
}
```

For those that have one, I split the path and get its segments:

```js
const segments = permalink.replace(/^\/|\/$/g, '').split('/')
```

First, I replace the slashes at the beginning and end of the permalink. If I wouldn’t do this, the array would hold one empty string at the beginning and one at the end. Alternatively, you might split and then filter:

```js
const segments = permalink.split('/').filter(path => !!path)
```

I guess using the reg ex is slightly more efficient for _really_ large pages and/or deeply nested permalinks.

Next, setup some data used for the actual loop:

```js
const breadcrumb = [{ url: '/', name: '🏡' }]

let index = 1
let accumulatedPath = ''
```

We start with an array that contains our homepage, already. This is the page that’s not in the segments, so we need to add it manually. The other variables will become obvious in a second.

Next, the actual loop:

```js
for (const segment of segments) {
	accumulatedPath += '/' + segment

	breadcrumb.push({
		url: `${accumulatedPath}/`,
		name: segment,
	})

	index++
}
```

Let’s walk through this line by line. We use a `for … of` loop (`forEach` or even `map` are possible, too. Choose your flavour.

Now, we use the previously introduced `accumulatedPath` variable and append the current segment. In my first iteration, I used a pretty complex setup where I re-split and joined the permalink based on the `index`. It was messy. This is much more efficient.

The way it works: Every part of a breadcrumb is essentially the sum of the parts before it. As my permalinks are pretty hierarchical, I can add them up segment by segment until I reach the end.

All that's left to do is to add the calculated data to the breadcrumbs array. Note that I’m adding a trailing slash to avoid redirects.

### The name

Currently, the name of the segment is the segment itself. That’s not very handy. I want something that’s readable. Luckily, I can profit from work that I’ve done when [setting up my newsletter infrastructure](https://www.ovl.design/text/how-i-built-around-the-web/#parsing-titles).

I wrote a parser for my category data that turns `cat:category-name` into something readable, such as «Category Name». I named it `displayCategory` back then, but renamed it `capitaliser` to have a more generic name.

Let’s [take a look at the function](https://github.com/ovlb/www.ovl.design/blob/0cba3d22d0d442896e66fcb3cf96dbfbfef4ab42/_filters/capitaliser.js):

```js
const { startCase, camelCase } = require('lodash')

module.exports = function (rawName) {
  const displayNames = new Map([
    ['cat:ai', 'Artificial (Un)intelligence'],
    ['cat:crypto', 'The road to hell is paved with crypto intentions'],
    ['cat:nft', 'NFT'],
    ['cat:climate', 'Climate Crisis'],
    ['cat:web', 'World Wide Web'],
    ['around-the-web', 'Around the Web'],
  ])

  return (
    displayNames.get(rawName) ||
    startCase(camelCase(rawName.replace('cat:', '').replaceAll('-', ' ')))
  )
}
```

I’ve explained it and the design decisions behind it in more detail in the post linked above.

The gist is this: It takes a string, checks if a special display name exists, and if not, replaces all hyphens with spaces and runs lodash’s start and camel case functions to get something formatted back.

Using this, we can make the output a bit nicer:

```js
breadcrumb.push({
	url: `${accumulatedPath}/`,
	name:
		index === segments.length && title
		? title
		: this.capitaliser(segment),
})
```

If we are at the end of the array and the page has a title (sometimes I forget to add one), we take the `title` from the page data as the breadcrumb name. If we are in the middle, we use the `capitaliser` function.

I didn’t need to import it, as my breadcrumb function is a standard `function()` definition and no arrow function (`() => void`).

If you use the standard function syntax in your `eleventyComputed` or other shortcordes/functions, the `this` value inside it will be your Eleventy config, including all the filters and JS functions you added.

## Rendering the navigation

Now that all my pages contain the data, I can use it:

```html
<nav aria-label="Breadcrumb" class>
	<ul class="inline-list breadcrumb-list" style="--list-separator: ' » '">
		{% for crumb in breadcrumb %}
		<li>
			<a
				href="{{crumb.url}}"
				{% if loop.first %} aria-label="Home" {% endif %}
				{% if loop.last %} aria-current="page" {% endif %}
			>
				{{crumb.name}}
			</a>
		</li>
		{% endfor %}
	</ul>
</nav>
```

Nothing too special here, I guess. I add a `nav` with an `aria-label`. This is important, as screen reader users can navigate to landmarks. If you have multiple navigations on your pages, adding a label helps them make sense of those.

I’ll get t0 the CSS of the classes I added in a bit. First, I finish the templates by looping over the crumps in our breadcrumbs.

Noticed that I added an emoji as the visible text for the homepage? I overwrite this with a useful textual label for readers of assistive technology. Further, at the end of the loop I can use `loop.last` in Nunjucks, to add another ARIA attribute. `aria-current` says «this is where you are currently».

### CSS

The first class, changes the list rendering to be inline.

```scss
.inline-list {
  li {
    display: inline;

    &:not(:last-child)::after {
      content: var(--list-separator, ' • ');
    }
  }
}
```

Using the `--list-separator` custom property, I can change the appearance, which is nice, as breadcrumbs are hierarchical, and the dot doesn't really represent this.

Secondly, the actual breadcrumb styles:

```scss
.breadcrumb-list {
  a {
    font-size: var(--step--1);
    text-decoration: none;

    :is(&:hover) {
      text-decoration: underline;
    }

    &[aria-current='page'] {
      font-weight: bold;
      font-style: italic;
    }
  }
}
```

Again, nothing fancy. I make the text slightly smaller than my body text, remove the `text-decoration`. And I some special styles based on the existence of the `aria-current` attribute. Tying your visual representation to the accessibility implementation is super helpful, as I immediately notice if I accidentally break something.

### Hiding the Breadcrumb

Once I added the nav to my base layout and browsed a bit through my site, I noticed that the nav sometimes feels too much.

To counter this, I added the option to hide it via the page data using `hideBreadcrumb: true `. I use this e.g. on my homepage or first-level archive pages.

Further, this allows me to not do the work to calculate a breadcrumb if I don’t show it. As my data function is placed in `eleventyComputed`, I have access to all data that’s defined before.

Adapting the function, I can check for `hideBreadcrumb`:

```js
breadcrumb: function ({ permalink, title = '', hideBreadcrumb }) {
	if (!permalink || hideBreadcrumb) {
		return
	}

	// rest of implementation
}
```

Please keep in mind that navigation must be consistent. That’s [Success Criterium 3.2.3 Consistent Navigation](https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html) in the Web Content Accessibility Guidelines. So if you decide to hide elements, make sure that users can make sense of it by testing with them.