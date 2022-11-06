---
title: Boooooooring
subtitle: Simplicity in woodwork and the Web.
intro: Distilled thoughts about simplicity.
date: '2021-02-18'
tags:
  - state:draft
  - cat:essay
  - cat:web-development
---

I published a website last week. It was a very simple one. Simple as is simple-as-a-website-in-ye-olde-days. It didn’t have any complexity hidden away behind a framework. There was no build step. There were no scripts to transpile. There are ten lines of CSS and an image. It serves its purpose well. It shows that image.

I have refactored a part of another website last week. I looked at code I haven’t a looked at for months. It wasn’t simple. At times, it tried to be clever. There was nested logic, and things that probably were logic once but have since become an undocumented mess.

I also [watched a talk about GitLab’s journey to using Vue](https://www.youtube.com/watch?v=EsUS4JX0BBw "How We Do Vue At GitLab - Jacob Schatz - VueConf US 2018") and all the bits and pieces in between. Despite the name, it wasn’t a talk about Vue. It was a talk about rewriting a complex codebase without going insane.

All these experiences lead me to think about simplicity. These are my thoughts combined.

## Simply Complex
I believe that most of the stuff on the web still isn’t complex. Sure, there are the Netflix and Google Maps of the world. But, realistically, most pages are lines of text on a screen. And even most pages with a complicated element are just text on a screen with one box that is complex, maybe even _really_ complex.

And these complex elements might need complex solutions. They must be solved by applying the best we can do.

Most of our tasks need boring solutions. Still, we write controllers and abstractions to show a paragraph. We have such great tools and frameworks at our disposal that complexity seems to be naturally growing.

Rachel Andrew wrote many of the pieces that formed my way of working on the web. One of these is called [Stop solving problems you don’t yet have](https://rachelandrew.co.uk/archives/2012/03/21/stop-solving-problems-you-dont-yet-have/ "Stop solving problems you don’t yet have – Rachel Andrew"). The problems you have will be enough work. Organise them. Solve them. It will keep you busy. Promised.

## Web Scuba Diving
HTML, CSS, JavaScript.

It sometimes feels easy to forget that this is all we have. And all of these are areas so intertwined but different, that they require expertise to get them right. A lot has been written lately about the urge to overemphasise development skill. Which means JavaScript skills.

There is no way around knowing HTML semantics to understand how elements get parsed into the Document and Accessibility Object Models. They have to know CSS to understand how to translate a design into maintainable code.

## Gendering Complexity
HTML and CSS also tend to be the languages non-computer-scientists start learning. Neglecting the vital role they play is neglecting diversity. It is doing so in a platform that was built to be accessible by everyone.

It’s keeping up the walls of a fortress that was _willingly_ erected to keep women on the outside. The emphasis on software _engineering_ is a discriminating one. Oh, hi. Got your attention? Do you want to say you are not discriminating? I hope so. Unfortunately we, as an industry, are. The first computers were women. Women who solved mathematical problems.

Time went by, and computers became machines, operated by women. The first computers were used to calculate ballistic trajectories. After the war, the potential for corporations in the civilian sector became obvious. And as computing became a lucrative economic field it, also got cursed with a new name. Engineering. It stuck.

 It stuck because it was perfectly designed. Computing. What non-word. Anybody could do this. Well, at least anyone with a brain that can process equations (not me). But engineering. Oh, boy. This word has power. And power was – and still is – male. Calling the building and maintenance of these new machines engineering made it bloody obvious: You have to have a college degree. You need to be an _expert_. You need to be a man.

## Slowdown
I feel that web development is slowing down. Our frameworks seem to be quite stable. React is here to stay, so is Vue. PostCSS, Babel, Sass, TypeScript, ESLint, Webpack, Rollup. They are all part of the ecosystem.

But while becoming a stable ecosystem, they are also a _lot_ of tooling.

This _ might_ be necessary. It often is for those things we call _fully fledged web apps_ – those for which you need a degree in computer science. Or at least are told you need it.
**TODO** Argue why slowdown is good and can help to lower entrance barriers

## Familiarity
I recently built a bed. I don’t know how to work with wood. The bed is a bed, but it is over-engineered. You can probably build a house on top of it.

A part of the codebase I am working on is a number parser. It works well. It formats numbers. But it is missing localisation. Browsers have a built-in [Internationalisation API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl – MDN"). It can – among other useful things – [format numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat).

While I was learning graphic design, I put lines everywhere to separate sections from each other.  I progressed and learned about the Gestalt principles and [the law of proximity](https://lawsofux.com/law-of-proximity). My designs don’t have lines anymore, but work equally well.

The better you know the material you are working with, the better you know what you don’t have to do.

This knowledge of underlying mechanisms is what lets your work get better over time – independent of the current framework or design trend.

And it does not only apply to the material you are working with but also to the task at hand. You need to know what your goal is before solving it.

The first thing every decent designer is doing – before actually designing – is compiling knowledge of the tasks at hand. A skill that’s also pretty handy when writing software.
I wrote most of my ugly code before I understood the subject matter. I coded and asked my questions along the way. This always leads to problems. A function that is kind-of-but-not-really doing what it ought to do will quickly become tech debt. And be depended upon. As soon as it has two or more dependants refactoring it will become a burden.

It probably is human to worry about what will be. But it is also the enemy of simple. A part of focusing is also focussing on the problems at hand. Assumptive programming will not lead to solutions. It will lead to possibilities which might never be.

This becomes especially annoying when there are no tests. Another thing I forget to do when just trying to write something quickly. Or I am feeling clever.

## The Fallacy of Cleverness
I have pretty decent days – days on which my brain waves tend to function like the Atlantic on a stormy autumn day.

Then again I have pretty shitty days, too.

This averages out to being a human being somewhere on the middle of Leonardo da Vinci Scale. I am no genius, but do understand a thing or two. Most of the people reading this will probably feel similar.

And this is where the problems with clever code arise. I have exactly once written code which I thought was clever and it was an adequate solution. Every other time I annoyed my co-workers — and myself.

Clever code is hard to review, hard to argue with, and hard to build upon. If something looks clever you will necessarily feel like shit if you put something average on top of it.
As a rule of thumb: Never merge on the clever days. Never despair on the shitty ones.
Obviously there is complex code, there are bad and good solutions, there is code and architecture that is well thought out. All this is well, but is not what I would subsume under _clever_. Clever is one abstraction too much. Intelligent is knowing when to abstract. And when to just let something be.

## Bending Time
No one gets it right the first time. No one. Maybe for an easy task. But for more complex solutions a mental model is required to break the parts of the product into simple components. We need to iterate to arrive at simple solutions. Iteration needs time. Iteration also means going back to previous solutions.

I am saying this knowing that we face tight deadlines and only have five workdays a week. Of which we should spend at most eight hours working. Probably less. But organising the workforce into unions, fighting for reduction of working hours and abolishing private ownership of the means of productions is another topic.

This makes it necessary for us to find time-windows during which we are able to iterate over previous solutions. As well as time to slowly make progress and help us with of all the points above. Familiarity, inclusiveness and
To quote Frank Chimero, of his essay [Everything Easy is Hard Again](https://frankchimero.com/writing/everything-easy-is-hard-again/ "Everything Easy is Hard Again – Frank Chimero "):

> The web needs pockets of slowness and thoughtfulness as its reach and power continues to increase. What we depend upon must be properly built and intelligently formed. We need to create space for complexity’s important sibling: nuance. Spaces without nuance tend to gravitate towards stupidity.
>
## Some Things are Complex
Do you remember the times of cluttered User Interfaces? Some are still around. We designers look at them with sour faces. They are annoying to our sense of space and typographical rhythm. They are, admittedly, ugly. But they allowed you to get tasks done.
Most of them have been replaced by clean, spacious interfaces. One button and some light grey text on a white background. They are not ugly. They are marvellous.

But this one single function of the product is gone. In the best case it is hidden inside a context menu. In the worst, it’s just gone. Maybe until an outcry reaches the ears of those responsible, who shyly roll back some changes. Or forever.

Sacrificing complex possibilities and solutions is a problem. Some things _aren’t simple_. The role of the products we design and develop here is not to dismiss them as too hard. It is to enable people to solve their tasks through our interfaces.

Naturally, we can’t do this without listening to their needs. Do your research.

## Principles of Simplicity
I distilled my writing into these principles. Something I can come back to when trying to build a solution that simples. Simple is this sweet, warm feeling you got when you made something that elegantly solves a solution. And that can still be understood later.

1. Simplicity is inclusive
2. Simplicity is based on questions
3. Simplicity requires knowledge of the working material
4. Simplicity will not be without iteration
5. Simplicity requires focus
6. Simplicity is elegant, but never clever
7. Simplicity is as simple as possible – but not simpler
