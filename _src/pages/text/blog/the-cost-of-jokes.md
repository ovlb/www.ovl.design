---
title: The cost of a joke
subtitle: Token go boom
permalink: '/text/the-cost-of-a-joke/'
tags:
  - cat:ai
  - cat:my-slow-descend-into-madness
intro: Visualising reasoning tokens with science
date: '2026-09-08'
image:
  og: 'ovl-og-image-joke-cost.jpg'
  title: 'title-image-joke-cost.jpg'
  alt: 'Some hot air baloons drifting through the sky. The one in the foreground is in the form of an upside down slightly uncomfortable looking cartoon character'
  credit:
    source: 'https://unsplash.com/photos/a-number-of-hot-air-balloons-flying-in-the-sky-7mRAXmLgOoE'
    name: 'Matt Busse on Unsplash'
---

Hear me out, this is science.

I prompted models from a bunch of providers with «Write a funny Python one-liner».

The idea here is to build ~~objective model evaluation~~ a simple way to show how even benign prompts explode in used tokens.

Keep in mind that, depending on the tokenizer, the prompt equals around 7–10 input tokens. The delta between these and the amount shown in the input token column is stuff the model made up as it «reasons» through the question.

Models that support reasoning had it set to high.

Costs have been calculated using OpenCode Zen or OpenRouter.

{% jokesetTable %}

Depressing. But such is science.
