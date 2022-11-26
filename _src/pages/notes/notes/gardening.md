---
title: 'Gardening a website'
date: '2022-11-04'
determination: high
state: evolving
tags:
  - 'cat:web-development'
---

I deeply love the metaphor of the [digital garden](https://maggieappleton.com/garden-history).

So this website shall become one. This is a loose collection of development notes.

## Taxonomy

Text starts as a note. From there it is free to move around the site. Or stay as a note, that’s finished – for now. 11ty’s data deep merge makes this very simple. The posts are Markdown file. While in the notes folder, they automatically get the `notes` tag and and up in `collections.notes`.

Once I think a note isn’t a note anymore, I might add it to the text folder. It can be a draft, or immediately published. As everything is Markdown, I only need to add a bit more frontmatter data, to accomodate for the slightly more refined design of fully fledged articles.

All posts on this website use a common theme for categories, they are tags (so that they get picked up by 11ty’s collection feature), prefixed by `cat:`. This global taxonomy allows me to link newsletter issues, notes, and articles which share a common theme.

### Adding a bit of everything

While that’s certainly useful, how about building something really useless with this? «Oh», I hear you say, «you are speaking about chaos?» Yes, I am. So I built [Everything](/everything/). It’s a randomly sorted page of, well, all pages. At its end it contains every category I use in this website, which is page of all posts in this category – random, of course.

### Better read more

- Use tags for further reading underneaths posts instead of (or in addition to?) previous/next

## Content

When starting this note I wrote: «Migrate away from Contentful, this should be the fast part». Well. It wasn’t. Copying everything went well. But then my build was inventing HTML tags in the output path of completely unrelated pages. It was mayhem.

- How to keep Ulysses and the git repo in sync?

## Dev & Design

- Automatically generate redirect file to move files/states freely
- Unify `og:image`s during build with 11ty img
- Can I use DeepL’s API for auto-generating localised content?

## Reading

- [A Brief History & Ethos of the Digital Garden](https://maggieappleton.com/garden-history)
- [🌱 My blog is a digital garden, not a blog](https://joelhooks.com/digital-garden)

