---
title: The value of old
subtitle: Here’s to legacy code.
intro: Why I don’t feel bad about bad code I’ve written.
date: '2022-09-06'
image:
  og: 'ovl-og-image-valueofold.png'
  title: 'ovl-title-image-valueofold.png'
  alt: 'View of an old, decaying building. Probably an old shopping center, you can see escalators. Above all is a glass dome'
tags:
  - cat:web-development
---

Do you know what happens with your old code once you don’t look at it any more?

In modern-day development, we seldom stay long enough at a company to see our code evolve into what, shamefully, has been dubbed as «legacy». Which basically means: Anything older than two years and mostly written by employees who aren’t at the company any more.

By chance, I was able to work with a code base I had abandoned roughly five years ago. Here’s how that went.

For context: After I learned graphic design at school, I stayed at the company I went too during school. In Germany, this is called _duale Ausbildung_, I’m not too sure if there is a one-to-one equivalent in other countries, but that’s beside the point.

One of my last tasks before I left was to rebuild the company website from the ground up. I did. And left. To never see the code again. I might have thought.

Some weeks ago, my old colleagues called and asked if I am available to add some new features to the site. «Yes», I said, «and while I’m at it, might I fix a few things?»

## Oh, deery me, this is crap

I don’t know where to start. Maybe at the point where I made an app out of a website. It’s built with Nuxt, and in total neglect of anything close of best practices, I decided to load _the whole page content_ in `nuxtServerInit`. Which, in effect, let all users on every single page load the content of all pages. Subsequent navigations were fast as hell. But that’s so far beyond good, I won’t even call it bad. Ridiculous, perhaps. Or a creative way to build a website?

### Where’s the focus?

One of the site's most neglected areas by far was accessibility. When giving talks about the topic, I always say «Old sites I built are full of errors, too». Oh, yes, they are. All the links were missing `:focus` states. Images were missing descriptions. At least the page structure was quite decent.

Accessibility was never even the slightest topic during my school, and even though I started learning about it on my own soonish in my first job, having to work with this codebase reminded me of all the things missing in my education.

Which is a gentle reminder that the amounts of errors one finds when auditing accessibility seldom is a failure of individuals. It’s a systemic issue, where we don’t learn about foundational principles of building websites during school. And once in the job, it’s rare to found companies that actually care.

### Is this 340px image really 1.4 MB?

Nowadays, when evaluating the performance of a website, one of the first things I inspect is if the loaded images are using modern image formats and appropriate image sizes. Image my surprise when I opened the network tab to see images of multiple megabytes being loaded in thumbnail size.

With full steam ahead, I loaded the original image for 340px thumbnail. Of course, after I’ve said to the editors: Please always upload the best quality that you have available. Blimey.

Luckily, the site’s content is hosted with Contentful, so fixing these images was but a few URL query parameters away.

## Maybe it’s okay

That’s a quick rundown of the most foundational errors I found.

Of course there are always further things to optimise, code that others have written better, repetitions that might be abstracted. Even now, after spending some more days with the code. And there always will be.

The point is: a project is never limited by perfection, but by time and budget. Experience only tells you which things you won’t fix. It does not let you fix all the things.

## Definitely I’ve learned a ton

Over the last year, I’ve mostly done backend work. Coming back to a frontend project and being able to fix a whole load of things – more often than not critical ones – has actually been a good feeling.

In backend, I’m basically where I left this site five years ago. I’m okay. But in five years, maybe, I’ll be decent enough to look at my code of today and make it way better.

I hope I get the chance. Here’s to legacy code. Which once was the best code I could write.
