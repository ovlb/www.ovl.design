---
title: 'The Cost of AI Licensing'
date: '2023-10-10'
state: evolving
tags:
  - 'cat:ai'
  - 'cat:datasets'
---

Some thoughts about the data in Generative AI models and how we can make companies pay, based on [a question Rose Eveleth asked over on Bluesky](https://bsky.app/profile/roseveleth.com/post/3kbdw7xxtkm27):

> has anybody seen any good thinking/writing about how much money generative AI companies should be investing in licensing the content they're using for their models? How much would/should it cost to pay for the corpus?

Disclaimer: I’m not saying the following is good thinking. It’s fragments at most. But this question remains remarkably underresearched, at least from what I’ve found venturing around in the AI mines over the last years. If you know otherwise, please answer Rose or (or and) send me a ping on [Mastodon](https://chaos.social/@o) or [per mail](https://www.ovl.design/imprint/).

## What to license

The fact that, at least for the commercial models we don’t really know which data is actually in them and which amount of the total training data a given dataset amounts to, makes it hard(er) to make any argument about compensation in the first place. I don’t think that’s an accident.

 We can look at Open Access models to get a bit of an understanding. [BLOOM](https://arxiv.org/abs/2211.05100) was trained on almost 500 different datasets, but those needed to be pre-processed and cleaned. For Falcon LLM there’s a [dedicated paper on the work](https://arxiv.org/abs/2306.01116).

 So, if we say OpenAI et al have to commit 20% of their profits to give back to license stuff in their datasets: OAI will not disclose what’s in their data (it’s a secret because they ~~need to make more money~~, sorry, build safe systems).

So either it’s all completely intransparent or we force commercial AI vendors to be transparent.

For a general feeling of how a system could look like, we should keep an eye on [Adobe’s Firefly payouts](https://techcrunch.com/2023/09/13/adobe-starts-paying-bonuses-to-stock-contributors-whose-content-is-being-used-to-train-firefly/) compared to their revenue. Afaik they are the only company that pays out the artists that are in their datasets. That they only trained Firefly on Adobe Stock and public domain images, not _everything_, certainly makes this easier.

But, honestly, I don’t know if that’s feasible for LLMs, as they require absurd amounts of data.

Sure, 90% of the products currently adding a LLM to their products might not need one, but it’s the Valley Party Train and such arguments won’t stop it.

## How to license

So we don’t know _what_ to license, as we don’t know what’s the dataset of the commercial models.

But even if we would now, how would you ensure payouts? Sure, it’s (kinda) easy for copyrighted works of art (music, books, paintings …) but a large part of CommonCrawl is just websites. Should only those in the dataset who are some kind of business get payouts?

And, which license do you use? Do you pay per dataset entry or per training epoch? (Thanks to [Sarah Moir](https://thisisimportant.net/) for making this point.) Per model created or per output which might contain licensed data? To do this, we need way better understanding on the way a model generates text and what the sources for a specific answer are, a notoriously difficult problem.

Would we end up in such a situation as with music streaming rights, were the payout per stream is so miniscule, that it’s only useful for a small percentage of huge artists? tbf I see this happening in basically all licensing models I can think of? Are there protections against this?

### The Academic Veil of Commercial AI

Another thing to note here: If you think on the data layer only, AI vendors might argue that the datasets have been collected for _scientific purposes_. It’s a great excuse, as scientific usage grants generous copyright excemptions.

But in the end, this might be more of an excuse. Take for example LAION – a non-profit that maintains the LAION-5B image dataset used to train Stable Diffusion. LAION is a non-profit, [Stable Diffusion is open source](https://github.com/CompVis/stable-diffusion) and published by researchers at the Ludwig Maximilian University in Munich. Stability AI, essentially the marketing wrapper and funding machine for these non-profit initiatives has raised over $120 million in funding.

If you are interested in diving deep into some of those challenges, Sarah Moir [wrote about the legal challenges in the context of music generating models](https://thisisimportant.net/posts/prompt-based-music-generation/#legal-challenges).

## Creating licensed data

To note here, too, is that you can by now [opt-out of crawling for some AI training](https://neil-clarke.com/block-the-bots-that-feed-ai-models-by-scraping-your-website/) (e.g. Google, OpenAI, CommonCrawl). This doesn’t solve the problem, as for any kind of informed consent the systems need to be opt-in. And, as more models spam more outputs on more sites, [internet crawls will become a much worse base to train a model on](https://arxiv.org/abs/2305.17493v2).

Another thing that we are currently seeing – which will not replace training on huge crawls, but probably augment them or take a more prominent role in the finetuning steps – is that data companies like Scale AI are hiring not only gig-workers but e.g. poets to [create high quality, licensed training data](https://restofworld.org/2023/ai-developers-fiction-poetry-scale-ai-appen/).

## Making models forget

There’s ongoing [research in «model unlearning»](https://browse.arxiv.org/abs/2310.02238).

If this becomes a feasible technique, I think that’s a probable way for AI companies to cop out of paying licensing fees. «Oh, sorry. Thanks for bringing this to our attention. We didn’t mean to include your stuff, look we removed it.»

Mind, the if in the previous sentence is doing a lot heavy lifting!

If I want my model to be able to answer questions, it’s not helpful to remove relevant pop culture completely. Also, a model might not perform significantly worse after removing Harry Potter. But what if you remove 500+ other books because their authors demand it?

As the authors of the study conclude:

> Extending our approach to other types of content, particularly non-fiction or textbooks, presents its own set of challenges. Unlike the fictional universe of Harry Potter, non-fiction content will not possess the same density of unique terms or phrases. Furthermore, non-fictional texts often embed higher-level constructs such as ideas, concepts, or cultural perspectives. It remains uncertain to what extent our technique can effectively address and unlearn these more abstract elements. This would clearly necessitate adaptations of our technique.

---

That’s that for now. I’ll append this piece as I find new reporting and worthwhile things to add.
