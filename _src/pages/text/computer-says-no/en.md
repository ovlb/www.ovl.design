---
layout: 'layouts/post.njk'
permalink: 'text/computer-says-no-en/'
pageCSS: 'textDetail'
post:
  title: Computer says no
  date: '2021-12-26'
  contentIntro: Artificial Intelligence & Power
  intro: 'Reflections on the connection between artificial intelligence and state and economic power.'
---

This translation has been created by DeepL’s AI. How fitting. It might contain errors. The [original German text](/text/computer-says-no/) is the only proofread version.

This text is an accompaniment to my talk <cite>[Computer says no](https://pretalx.c3voc.de/rc3-2021-cbase/talk/X7RE9X/)</cite>, given at the second remote Chaos Experience. Books can be written, books have been written, about the topics discussed here. I have published the [list of my sources](/text/computer-says-no/quellen/) separately. The slides can be viewed on Notist.

---

In what follows, we will see how the view of Artificial Intelligence that dominates today came about. We will look at the impact of algorithmic control on the labour market and why comparisons with the industrial revolution keep coming up. How the concept of time is central to the struggles of workers from the 20th century to Amazon warehouses. And why, in the end, robots don't take away our work, but don't let us get work in the first place.

In the second part, we will see how artificial intelligence is becoming a tool of state domination and examine the individualising tendency of surveillance. We see drones in the sky and centralising tendencies in access to the necessary means of production.

Finally, we take a look at the possibilities and conditions of resistance. An inventory beyond techno-optimism or primitivism. And in the end we will see that the discourse should not have technology as its pivot, but solidarity.

## Artificial intelligence, or what?

In the following, I will speak in general terms of artificial intelligence. To some of my readers, this will, quite rightly, appear to be a crude category.

On a purely technical level, it is primarily about _Machine Learning (ML),_ or _Deep Learning_. In other words, specific sub-fields of AI.

In technical-academic discourse, this distinction is important. In the case of a consideration such as the one at hand, this supposed blurring also has advantages, as Kate Crawford describes in the introduction to her book <cite>Atlas of AI</cite>:

> [T]he nomenclature of AI is often embraced during funding application season, when venture capitalists come bearing checkbooks, or when researchers are seeking press attention for a new scientific result. As a result, the term is both used and rejected in ways that keep its meaning in flux. For my purposes, I use AI to talk about the massive industrial formation that includes politics, labour, culture and capital. When I refer to machine learning, I'm speaking of a range of technical approaches (which are, in fact, social and infrastructural as well, although rarely spoken about as such).
> -- Kate Crawford - Atlas of AI, p. 9

In this sense, this is not a text about machine learning, even though it plays a role. It is not a technical text. It is a text about the world we live in. Crawford refers to AI as a _directory of power_. As we will see below, this almost sums up the situation aptly.

Another gap I want to address before we get started: the field I am discussing here is huge. I am therefore focusing on a few areas that allow me to draw a coherent picture. Nevertheless, a text of this length cannot suffice to discuss all the nuances of the field. Thus, it does not aim to provide conclusive truths, but rather directions, impulses for thought and discussion.

## ImageNet - How Machine Learning Changed Forever

An even halfway detailed history of the ups and downs of Artificial Intelligence and related fields would be a lecture of its own. I will therefore focus here on one incisive point in the recent history of research: ImageNet.

For those who have never heard of ImageNet, what is it?

It is probably no exaggeration to say that ImageNet is one of the most influential datasets in the history of machine learning. The aggregation of data with images cobbled together from the internet and the application of the AlexNet algorithm. to work with them have left a lasting mark on the field and continue to do so today.

Millions of images were manually assigned to thousands and thousands of terms. Researcher Fei-Fei Li came up with the idea for the dataset in 2006. The basis was created by images that were collected without much question from the internet, for example from Google's image search. The internet and increasingly powerful computers led to a perfect storm here.

Ten years earlier, it was still immensely difficult to create data sets with even a few tens of thousands of entries. ImageNet consists of about _fourteen million_ images in twenty thousand categories. [PASCAL VOC](https://paperswithcode.com/dataset/pascal-voc), one of ImageNet's predecessors, contains twenty categories and 19,737 images.

The categories to which the images in ImageNet were assigned were taken from a dataset called WordNet. WordNet was developed in the 1980s George A. Miller. Using the words in WordNet, image searches were scraped and the results stored.

Now a key problem arose: how to ensure that the images stored contained what was searched for? Before ImageNet, this work of classification was reserved for first-year students. Jia Deng, one of the co-researchers on ImageNet, calculated that it would take nineteen years to classify all the images in ImageNet in this way. Automating the work was impossible. There was (and is) no algorithm that can make these classifications without error.

This is where crowdworking comes in, to be precise Amazon's Mechanical Turk platform.

> On this new platform, anyone could construct a "Human Intelligence Task" to be completed by the workers on the platform who would be paid by each item they completed. This solution quickly solved their image annotation problem by allowing the problem to be broken down and distributed across 49 thousand workers from 167 countries.
> -- [Denton, E. et al. (2021) - On the genealogy of machine learning datasets: A critical history of ImageNet](https://journals.sagepub.com/doi/full/10.1177/20539517211035955)

There is only one problem: this work removes any context from the images and understands human vision as a purely mechanical process, reducing visual intelligence to low-level pattern recognition.

Unimpressed by such problems, because not perceived or understood as a problem, the results were saved and released to ImageNet for competitive exploration from 2010-2017 in the ImageNet Large Scale Visual Recognition Challenge.

It took until 2012 for the next revolution. That year, Alex Krizhevsky and his team at the University of Toronto won the Challenge at a pace previously unimaginable. Their secret wasn't new, but hadn't been applied to big data analysis before: Neural Networks. Under the alias Deep Learning, these networks became one of the tone-setting paradigms in Machine Learning in the following years and still today.

But ImageNet is a pioneer in yet another way.

As we will see in a moment, the points of invisible work, the lack of consent of those who show up in the dataset, and the prioritisation of large amounts of data about social contexts are patterns that will emerge over and over again.

## Labour & Algorithms

In the context of Artificial Intelligence, three forms of labour are generally relevant:

The first is entirely unpaid work. As a rule, this is not perceived as such. The users of websites who solve CAPTCHAs for Google's Recaptcha service are certainly the best-known example. [Google thus improves its own image recognition algorithms](https://www.techradar.com/news/captcha-if-you-can-how-youve-been-training-ai-for-years-without-realising-it).

### Invisible work

In the introduction to the history of AI, we talked about ImageNet as the first large image database and about crowdwork as one of the prerequisites for its realisation. Today, crowdwork is one of the mainstays of algorithm creation.

At regular intervals we can read headlines in which algorithms are understood to be completely automated. "AI did this or that". Won in Go, wrote texts, rendered proteins in their three-dimensional structure. These headlines have only one problem:

> Headlines like "AI discovered how to cure a type of cancer". Of course it's never AI that did this. It's researchers, very hardworking researchers, who use AI machine learning tools like any other tool. It's both demeaning to the researchers who did that work and creates massive confusion among the public when journalists attribute agency to AI. There's no reason to do that, especially in headlines.
> -- Arvind Narayanan in [Fake AI](https://fakeaibook.com/), p. 24

The preliminary work of cleaning and sorting data [takes about 80% of the development time](https://www.economist.com/technology-quarterly/2020/06/11/for-ai-data-are-harder-to-come-by-than-you-think) of a machine learning model.

> Training a machine-learning system requires large numbers of carefully labelled examples, and those labels usually have to be applied by humans. Big tech firms often do the work internally. Companies that lack the required resources or expertise can take advantage of a growing outsourcing industry to do it for them.

A process that Kate Crawford, in reference to [Potemkin villages](https://de.wikipedia.org/wiki/Potemkinsches_Dorf), calls _Potemkin AI_:

> We could think of this as a kind of Potemkin AI - little more than facades, designed to demonstrate to investors and a credible media what an automated system would look like while actually relying on human labour in the background.
> -- Kate Crawford - Atlas of AI, p. 65

These people provide the beautiful appearance of automatism. From the outside, it should look like everything is happening fully automatically, even though it is actually human labour.

Attempts by corporations to obtain data can also look different. In Atlanta, Georgia, Google tested its facial recognition software. [In exchange for five dollars, black homeless people were targeted](https://12ft.io/proxy?q=https://www.nydailynews.com/news/national/ny-witness-saw-homeless-people-selling-face-scans-google-five-dollars-20191004-j6z2vonllnerpiuakt6wrp6l44-story.html). The quid pro quo? Uploading a 3D scan of the face to Google. Google has come under repeated criticism before for their image recognition algorithms mistaking Black people for gorillas or a [thermometer in a Black hand for a gun](https://algorithmwatch.org/en/google-vision-racism/). Always Google is very sorry for what happened. Until the next time. Finally, in 2021, Google is making glossy ads about how good their new Android phones are at recognising Black faces.

Beyond the labelling of datasets, this ghost work - a term coined by Mary L. Gray and Siddharth Suri in their book "Ghost Work" - now takes place in all corners of digital life. Verifying new bank accounts, [moderating content on Facebook or Twitter](https://www.bpb.de/mediathek/273199/the-cleaners) or on platforms like Fiverr.

None of this, for now, is leading to machines taking our jobs away. [As Mary L. Gray says in an interview with the Standard](https://www.derstandard.at/story/2000124843896/klick-fuer-klick-zum-hungerlohn-das-digitale-prekariat-waechst):

> We should not be afraid of people being replaced by technology, but of them being devalued.

A perspective that Simon Schaupp also emphasises when he speaks of a [devaluation of labour with an accompanying migrantisation of jobs](https://futurehistories.podbean.com/e/s02e07-simon-schaupp/).

It is in this exploitation that capitalism finds itself. Squeezing the most profit out of employees is a basic condition of the capitalist economy per se. The systems around AI & Co. are no exception, but reformulate this exploitation under the guise of the future.

### Early capitalism in digital guise

On 25 March 1911 [the Triangle Shirtwaist Factory](https://en.wikipedia.org/wiki/Triangle_Shirtwaist_Factory_fire) burned down in Manhattan. 146 workers died in the flames or when they jumped out of the burning building into the streets. The factory exits were locked during working hours and the factory became a death trap. Most of the dead were migrants.

On 10 December, a tornado raged across Illinois. Amazon demanded that its employees come to work. In the evening, an Amazon warehouse was [hit by a tornado](https://www.nytimes.com/2021/12/11/us/amazon-warehouse-deaths-tornado.html). Jeff Bezos was busy thinking about life in space while the warehouse collapsed and six of the workers died. Larry Vriden [wrote to his girlfriend shortly before his death](https://twitter.com/MorePerfectUS/status/1470513075489054720): "Well I'll be home after the storm. Amazon won't let us go." He never arrived home again. [Accidents and health problems](https://www.vice.com/en/article/qjbv4q/amazon-workers-say-theyre-pressured-to-work-in-dangerous-weather) occur [all the time at Amazon](https://revealnews.org/article/how-amazon-hid-its-safety-crisis/). In the US in 2020, they were twice the industry average.

To what extent have working conditions changed in the last 140 years? What is work actually in an algorithmised world and shouldn't robots have taken our jobs away long ago?

Simon Schaupp describes these work processes monitored by algorithms as "cybernetic compression". The advancing technical possibilities lead to a systematic monitoring of the production process.

In extremely labour-intensive sectors such as delivery services or logistics, this leads to the opposite of full automation happening. More and more people are hired to maintain the processes. [Amazon has hired 670,000 workers:inside since the beginning of 2020](https://www.statista.com/chart/7581/amazons-global-workforce/) to keep up with the increased volume of orders during the pandemic.

Most of these jobs are timed to the second:

> A swing of a second or two in the average time to complete a task can make the difference between getting kudos from a manager or a warning about job performance.

In addition to monitoring, robots are also [an integral part of the infrastructure](https://www.bloomberg.com/news/features/2021-09-21/inside-amazon-amzn-flagship-fulfillment-center-where-machines-run-the-show) in logistical operations.

At the same time, it is also

> part of the task of the cybernetic proletariat [is] to make itself superfluous.
> -- [Simon Schaupp - Future Histories Podcast S02E07](https://futurehistories.podbean.com/e/s02e07-simon-schaupp/)

This happens, for example, in logistics processes that are tracked in order to be replaced by an AI, or when skilled workers have to write the systems that will eventually do away with them.

In the time of early capitalism, there were already efforts to automate and thus control workers. From the point of view of capital, workers have always been a necessary evil. You can't do without them, but with them profit is limited.

As early as 1844, Engels quoted Andrew Ure, whose hope in the productive power of the machine can easily be transferred to today's exaggeration of robotisation:

> In a few months a machine was already ready, which was apparently endowed with the thinking, feeling and tact of the experienced worker.
> -- Andrew Ure - Philosophy of Manufactures

The tendency of capital from Fordism to Taylorism to make the production process more effective and efficient was opposed by the workers' movement to strike and organise. Not without success. Reduction of weekly working hours, social security, open-ended work contracts, etc. only came about through strong trade union movements and the will to resist.

In the gig economy and Amazon's department stores today, we see that all the gains of the workers:inside movement - including the right to organise - are under constant attack and must be defended or reclaimed.

Not much has changed, it just seems new:

> But what comes across as a radically new form of labour is, in the light of historical development, often more a return of earlier labour relations. For the use of labour power by companies only when actually needed, piecework wages and the fact that workers have to provide their own work equipment are by no means new and are in fact as old as capitalism itself. In concrete terms, digitised courier work, like many other types of platform work, resembles the proto-industrial publishing system of early industrialisation, which was already characterised in the 19th century by the term "precarious labour".
> -- [Heiner Heiland - Back to the Future](https://www.rosalux.de/publikation/id/39921/zurueck-in-die-zukunft-1)

This return becomes a farce when Amazon, Apple or Google make use of notorious companies like the [Pinkertons](https://newrepublic.com/article/147619/pinkertons-still-never-sleep) to [monitor employees and environmental activist:s](https://www.vice.com/en/article/5dp3yn/amazon-leaked-reports-expose-spying-warehouse-workers-labor-union-environmental-groups-social-movements) or go through the [textbook union busting](https://www.npr.org/2020/12/03/941860802/google-illegally-fired-and-spied-on-workers-who-tried-to-organize-labor-agency-s).

You don't have to share the patheticness, but in the end it remains as Engels predicted:

> The workers must therefore strive to get out of this verticalising situation, to get themselves a better, more humane position, and this they cannot do without fighting against the interest of the bourgeoisie as such [...].
> -- Friedrich Engels - The Situation of the Working Class in England

### Gig-work and algorithmic opacity

While the physical and mental toll taken by algorithms in department stores is fairly obvious, the same is not true in all areas of supervised labour.

In delivery services, for example, the influence of algorithms is largely hidden. The workers do not know how their actions will affect future work schedules. An example of this is the recurring thesis of gig workers at Lieferando & Co. that it is bad not to accept delivery orders.

There can be no proof for or against this as long as the algorithms and collected data are not made accessible. In his lecture [The Social Construction of Algorithms](https://media.ccc.de/v/fiffkon2021-161-die-soziale-konstruktion-von-algorithmen#t=1298) Heiner Heiland quotes a manager of a delivery service who says that the algorithm used was "very stupid" and always chose the next:n driver:in. But even if the algorithm was or is stupid, there is no guarantee that it will remain so. Or that the manager did not lie from the start.

There is even more reason to doubt when other companies have implemented productivity as part of their algorithms. [Deliveroo was convicted in Italy](https://techcrunch.com/2021/01/04/italian-court-rules-against-discriminatory-deliveroo-rider-ranking-algorithm/) because their algorithm did not distinguish between "unproductive" workers and those who were sick or on strike.

You can't know because the platforms, as they call themselves, are the only ones who have the data.

> Data, as it is conceived of now, simply flows away from workers and to the platform, where it becomes proprietary, valuable, and "big. While platforms enjoy the advantages of gathering and analysing big data, current data protection laws function at a "smaller" scale and are based around individual rights.

Gig workers around the world are calling for an end to this imbalance. On the one hand [by collecting data themselves, and on the other hand by demanding that companies disclose their technologies](https://www.wired.com/story/labor-organizing-unions-worker-algorithms/).

Only through a combination of accountability and organising will the situation be able to change.

### Shooting digital clocks

Increasing surveillance and control leads to a compression of time. Capital still demands the last second of the life time that workers:in behind the gates of the production plant.

Even in analogue times, talking to each other was forbidden on individual assembly lines, the watchful gaze of the foreman always lurking. Here a paradoxical situation arises: while time is controlled more and more, the absence of humans offers space for conversations, new networks.

[Sociologist Simon Schaupp makes another point in the Future Histories Podcast](https://futurehistories.podbean.com/e/s02e07-simon-schaupp/): algorithms learn through past data. This data is created by the workers:inside. So it is possible to tame the algorithm through collective actions of slowing down.

This form of self-empowerment is not new. Workers early on came up with the idea that slowing down work is an effective means of industrial action.

In a slowdown strike, every instruction, no matter how small, is meticulously carried out, thus reducing productive power without having to call for a work stoppage.

Time has always played a role in the struggle against domination since the earliest days of industrialisation.

Walter Benjamin reports on the June Revolution in Paris:

> The consciousness of blowing up the continuum of history is peculiar to the revolutionary classes at the moment of their action. [...] As late as the July Revolution, an incident occurred in which this consciousness came into its own. When the evening of the first day of the struggle arrived, it happened that in several places in Paris, independently of each other and simultaneously, shots were fired at the clock towers.

At the end of the 1920s, Henry Ford built a city in the middle of the Brazilian jungle to mine rubber for his cars. [The project never really went well](https://www.theguardian.com/cities/2016/aug/19/lost-cities-10-fordlandia-failure-henry-ford-amazon). Rubber was never grown in Fordlandia. In December 1930, during a riot, the time clock was destroyed along with all kinds of infrastructure.

All these forms of struggle require organisation, a consciousness that, as Engels put it in <cite>The Condition of the Working Class in England</cite>,

> the rule of the bourgeoisie is based only on competition among itself, that is, on the fragmentation of the proletariat.

It is this fragmentation of the proletariat that is carried to extremes in the period of cybernetic compression. Organising is to be prevented in this way, the only purpose of the workers:in is to bring in more and more money.

So much for the changed labour processes. As we have seen, the robots do not take away our work (for the time being), but condense it for the benefit of capital.

### The robots do not give us the work

In addition to changing work itself, AI is also having an increasing impact on access to work. One of the fields in which algorithms are supposed to magically solve all problems is the search for suitable personnel. As Reuters reported in 2018, Amazon had to [shut down an algorithm that analysed job applications](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G). Because in the past it hired mostly white men in engineering positions, the algorithm concluded that women were unsuitable. When Amazon excluded the gender factor, the algorithm resorted to factors such as participation in a women's chess club or participation in women's studies.

[To this day](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3547922) this is [an unresolved issue](https://www.bbc.com/news/business-55932977). Deniz Erden has addressed the issue at length in her article <cite>AI and Employment</cite> in [If AI, then feminist](https://netzforma.org/publikation-wenn-ki-dann-feministisch-impulse-aus-wissenschaft-und-aktivismus), it has also been [the focus of several episodes of the In Machines We Trust podcast](https://www.technologyreview.com/2021/08/04/1030513/podcast-beating-the-ai-hiring-machines/) of MIT Technology Review.

## Artificial ideology

In the previous part we saw how human labour is incorporated into the capitalist processes of the digital, how it is controlled and monitored. This subordination of labour, the transfiguration of the techno-mechanistic into an essential part of _Artificial Ideology_.

The attribution of labour to a supersocial and disembodied being fits into narratives like that of the nerds who single-handedly change the world. However, as shown in the chapter Invisible Labour, it is the algorithm that single-handedly changes, no more than a Steve Jobs or Elon Musk did or do.

What follows will be about how technological progress becomes a concrete means of enforcing power, for example in war and the use of the police, and how our everyday communication exposes itself to the algorithm.

We see Teletubbies on XTC and why we should remain afraid of autonomous weapons systems. How the police are trying to harness facial recognition while playing the keyboard of Instagram algorithms as a marketing tool. And finally landing on TikTok, the most popular website of our day.

### Public data, private money

Analogous to the early capitalist tendencies in labour processes, we see a harnessing of accumulated data sets in the data centres of the big tech companies. A process very reminiscent of that of "original accumulation", in which industrial capitalism opened up new raw material and sales markets and subjected them to the dynamics of capital.

The raw material is our stories, smashed into data points. The market is control and mumbo-jumbo. Innovation is a basic mechanism of the capitalist economy striving for totality. Innovation is old and rotten.

Even when data remains freely available, value creation happens through proprietary processes. Google's translation, for example, makes use of languages, essentially a public good, but the process of translation is a trade secret. Free access is thus left to the discretion of the companies. As the çapulcu editorial collective notes:

> The translation assistant is (currently) 'free to use' for all and yet we make ourselves dependent on Google by using it. An easy step for Google to make the use of the software conditional at a later stage of development.
> -- çapulcu editorial collective - De_lete!, p. 47

A dependency dynamic that is not unknown in the history of capitalism. One only has to recall the "too big to fail" narrative of the last banking crisis, in which vast sums of taxpayers' money were spent to keep financial capitalism going. Supported by large investments in lobbying, Google, Facebook & Co. operate on a similar level of supposed systemic relevance and try to prevent their break-up.

We users and society as a whole are not the only ones who are dependent on the goodwill of the same people.

### Economic dependencies

It is also becoming increasingly impossible for researchers to conduct their research without accessing their immense resources in terms of computing power and data collection.

> Big tech's domination over the infrastructure of AI research and development extends beyond providing "neutral platforms. These companies control the tooling, development environments, languages, and software that define the AI research process-they make the water in which AI research swims.
> -- [Meredith Whittaker - The Steep Cost of Capture](https://mags.acm.org/interactions/november_december_2021/MobilePagedArticle.action?articleId=1742681#articleId1742681)

Besides computing power, most [conferences are also dependent on sponsorship](https://arxiv.org/abs/2009.13676).

The consequences of this control for independent research is illustrated by [the resignation of Timnit Gebru](https://venturebeat.com/2020/12/03/google-ai-ethics-co-lead-timnit-gebru-says-she-was-fired-over-an-email/). Gebru was co-lead of a Google team researching ethical AI until the end of 2020. As one of the most respected researchers in her field, she was officially fired for sending an email to mailing lists. Gebru says she was asked to withhold the paper <cite>[On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜](https://dl.acm.org/doi/10.1145/3442188.3445922)</cite>.

The paper examines the environmental impact of Large Language Models, AI models that mimic language, and argues that such models as GPT-3 repeatedly reproduce stereotypes and generate toxic language, even when the inputs are not toxic.

> We have identified a wide variety of costs and risks associated with the rush for ever larger LMs, including: environmental costs (borne typically by those not benefiting from the resulting technology); financial costs, which in turn erect barriers to entry, limiting who can contribute to this research area and which languages can benefit from the most advanced techniques; opportunity cost, as researchers pour effort away from directions requiring fewer resources; and the risk of substantial harms, including stereotyping, denigration, increases in extremist ideology, and wrongful arrest, should humans encounter seemingly coherent LM output and take it for the words of some person or organisation who has accountability for what is said.

That this does not suit Google is hardly surprising.

In February, [Google finally fired Margaret Mitchell](https://www.theguardian.com/technology/2021/feb/19/google-fires-margaret-mitchell-ai-ethics-team), officially for violations of the company's Code of Conduct and security policies.

That leading figures are not safe in their fields sends a clear signal to the rest of the researchers:inside: "Behave or you're out."

In <cite>The Condition of the Working Class in England</cite> Engels made an attempt to understand the "historical significance of industry". Coal mines and factories were the industry of his time. He stated:

> [Centralisation] requires large capitals, with which it erects colossal establishments and thereby ruins the small, artisan bourgeoisie - and with which it makes use of the forces of nature to knock the individual manual worker out of the market.
> -- Friedrich Engels - The Condition of the Working Class in England

Labour and production were concentrated in a few places. With the centralisation of computing power and data collection, we see a new centralisation. It is just no longer the coal barons and pepper sacks who are driving it.

In <cite>The Steep Cost of Capture</cite> Meredith Whittaker draws parallels between the current situation and the Cold War. She argues that the race between the US and the Soviet Union had a similar impact on research as today's takeover of research by Google & Co.

### Technology & Military

Part of this story is also that doing business with the military is good form for "proudly patriotic companies" like Google or Palantir. And not only in the USA. China, Israel, Russia and the EU are simultaneously competing for supremacy in the digital arms race.

The history of cooperation is not new. The </abbr>ARPANET</abbr>, the forerunner of today's internet, is a spin-off of the Cold War Advanced Research Projects Agency (</abbr>ARPA</abbr>) and the US Department of Defense. The internet is not an invention that military people make use of, it is an invention of the military.

For Google, business with American intelligence services, at the latest since the acquisition of Keyhole, [is part of its core business](https://www.theguardian.com/news/2018/dec/20/googles-earth-how-the-tech-giant-is-helping-the-state-spy-on-us).

Not without resistance. In 2018, [Google came under enormous pressure](https://www.forbes.com/sites/janetwburns/2018/04/10/google-employees-denounce-companys-military-drone-work-in-letter-to-ceo/?sh=16100402ef0d) when it teamed up with the Pentagon in the so-called [Project Maven](https://www.fastcompany.com/90342971/how-the-pentagon-is-bringing-algorithmic-spycraft-and-big-tech-to-war) to develop autonomous weapons systems. Shortly after, it was announced that [the contract with the Pentagon would not be renewed](https://www.nytimes.com/2018/06/01/technology/google-pentagon-project-maven.html). In addition, Google has set itself [constraints on dealing with artificial intelligence](https://www.wired.com/story/google-sets-limits-on-its-use-of-ai-but-allows-defense-work/). Over the past three years, Google has nevertheless [worked diligently with the US military](https://www.wired.com/story/3-years-maven-uproar-google-warms-pentagon/).

The hole Google left in Project Maven, [meanwhile, was quickly filled](https://www.forbes.com/sites/thomasbrewster/2021/09/08/project-maven-startups-backed-by-google-peter-thiel-eric-schmidt-and-james-murdoch-build-ai-and-facial-recognition-surveillance-for-the-defense-department/). Rebellion Defense, founded under the auspices of former Google chief Eric Schmidt, Palantir, Amazon and Microsoft [enthusiastically jumped into the gap](https://www.forbes.com/sites/thomasbrewster/2021/09/08/project-maven-amazon-and-microsoft-get-50-million-in-pentagon-drone-surveillance-contracts-after-google/).

[Recently, Daniel Ek, founder of Spotify, made headlines](https://ra.co/news/76439) when he invested \$100 million in German killing AI startup Helsing with his investment fund. While they claim to defend the free democratic order, the members of their board are well connected in the military-industrial complex.

Such cooperation can also happen without the explicit intention of pandering to the military. For example, when [the US military buys the location data of millions of Muslim:a](https://www.vice.com/en/article/jgqm5x/us-military-location-data-xmode-locate-x), they are thereby exposed to potential dangers [^1] .

In Germany, the [Cyber and Information Space Command](https://de.wikipedia.org/wiki/Kommando_Cyber-_und_Informationsraum) (CIR) has been taking care of the digitalisation of the troops since 2017. Almost twenty years after Web 2.o, we are now in expansion stage 2.0. The internet is new territory for all of us.

But let's be serious: the development of autonomous weapon systems is currently not subject to any effective control. Years of negotiations only failed in December 2021. In the logic of countries like the USA, Great Britain, Russia or Israel [it is "too early" for such a moratorium](https://www.theatlantic.com/technology/archive/2021/09/i-weapons-are-third-revolution-warfare/620013/). An interesting logic that only makes sense to those who think it is too early to brake before crashing a car into a tree.

Autonomous weapons systems are not a theoretical possibility, but only a software update away. Such systems are under development around the world. In June 2021, what is believed to be the first attack with such a fully autonomous system was carried out in Libya[^2].

Meanwhile, the German government under Olaf Scholz is walking on a knife edge. They want to acquire armed drones for the Bundeswehr, but they want to kill ethically with them. Those who find this reassuring should be reminded that the first [war of aggression from German soil since 1945 was waged by the Red-Green government under Gerhard Schröder](https://de.wikipedia.org/wiki/Kosovokrieg).

The appeal of the [AI Scientists for Peace](https://aiscientists4peace.org/), who oppose the arming of the Bundeswehr with drones, states:

> Already the use of human-controlled armed drones has lowered the threshold for the use of military force and further delimited war; drone attacks take place permanently and often without a declaration of war. The technological upgrade with armed drones has made it easier for militarily and technologically superior states like the US to carry out extrajudicial killings that almost exclusively target people of colour. Autonomous weapons would increase the possibility of global surveillance and killings of people defined as potential threats, removing control over their elimination not only from legal norms but also increasingly from human influence.

A fortnight ago, [the New York Times published an extensive report](https://www.nytimes.com/interactive/2021/12/18/us/airstrikes-pentagon-records-civilian-deaths.html) detailing just how lopsided drone warfare already is with humans watching. The narrative of "precision warfare" is a lie, and those waging it know it.

[The Pentagon has admitted](https://www.defenseone.com/technology/2021/12/air-force-targeting-ai-thought-it-had-90-success-rate-it-was-more-25/187437/) that one of the US Air Force's AI targeting systems detected targets at only twenty-five percent. At the same time, the system itself reported ninety percent accuracy.

Uncontrolled data collection, as in the case of Muslim Pro, leads to uncontrolled access in the logic of warfare. If the data exists and the authorities or the military want to get hold of it, they will succeed.

On the whole, however, it is not odd or individual cases that are to be criticised here. It is the logic of violence and subordination that is the condition of existence of the military.

> Domination through violence is carved into both autonomous weapons technology and the framework of thought and policy that leads to its development and potential use.
> -- Ray Acheson - Feminism and Automated Weapon Systems; in If AI, then feminist

It is therefore not enough to fight against specific weapons systems or forms of collaboration between tech companies and the military. It is war, patriarchy and surveillance itself that need to be critiqued.

### Panopticon in Digitalia

While military conflicts look outwards for now, the state is steadily looking inwards. Predictive policing and facial recognition are meant to be representative of the state's quest for obedience. The state's attack on civil society's civil liberties is not exhausted in this, however, but also manifests itself in projects such as state Trojans or data retention. Often such projects complement each other.

One example is a database of the Hamburg police. When the G20 summit came to the Hanseatic city in 2017, the police were quick to conjure up an unprecedented danger from radical left-wing chaos and justify one of the largest police operations in the history of the Federal Republic.

In order to record these chaotic people afterwards, the police created the Videmo 360 system. The Hamburg data protection commissioner Johannes Caspar suspected that in this way the biometric data of [hundreds of thousands of people were stored](https://www.golem.de/news/datenschutz-nie-da-gewesene-kontrollmacht-fuer-staatliche-stellen-1901-138760.html). Without any possibility of control.

This data was used to initiate proceedings against alleged perpetrators of violence.

According to the logic of the police, mere participation in a demonstration is now enough to be accused of serious breach of the peace. In Hamburg, the so-called Rondenbarg trial is underway, in which five youths are charged [without being accused of anything concrete](https://gemeinschaftlich.noblogs.org/hintergrund/).

During the raid on the unpleasant demonstration, massive police violence occurred within a few seconds. The Hamburg fire brigade had to provide care with 65 emergency personnel, 12 ambulances and five emergency doctors.

The then Mayor of Hamburg and now German Chancellor Olaf Scholz summed up:

> There was no police violence.

Despite manifold evidence to the contrary, not a single police officer has been convicted in connection with assaults against protesters to date.

In October 2019, the Hamburg Administrative Court [declared the use of videmo](https://www.heise.de/newsticker/meldung/Urteil-Polizei-Hamburg-darf-weiter-mit-Gesichtserkennung-G20-Randalierer-jagen-4568289.html) to be legal. How difficult it is to even know what data police forces store about a:n is shown [by the case of a Bremen football fan documented by netzpolitik.org](https://netzpolitik.org/2021/schweigen-mit-system-bremer-polizei-verheimlicht-datensammlung-ueber-fussballfan-update/).

The police finally deleted the [database in May 2020](https://www.golem.de/news/gesichtserkennung-hamburger-polizei-loescht-gesichtsdatenbank-2005-148780.html), because there was no longer any need for it under criminal law. However, the court ruling remains in force, and the precedent for a comprehensive evaluation of biometric data has been set. The SPD-led interior senate quickly planned revenge. In the amendment to the police law, the data protection commissioner [is to be completely deprived of his power to issue instructions](https://netzpolitik.org/2019/gesichtserkennung-hamburger-innenbehoerde-pfeift-auf-datenschutzbeauftragten/).

Meanwhile, the nationwide infrastructure for a "cross-procedural research and analysis platform" of the German police forces continues to be pushed forward.

The German police's plan to normalise facial recognition is happening against an international backlash.

For years, research has repeatedly shown that facial recognition [discriminates against black people](https://www.media.mit.edu/projects/gender-shades/overview/), and even [considers members of the US Congress to be criminals](https://www.aclu.org/blog/privacy-technology/surveillance-technologies/amazons-face-recognition-falsely-matched-28). Researchers warn that [racism is also part of automated processes in the EU](https://www.politico.eu/article/europe-artificial-intelligence-blindspot-race-algorithmic-harm/).

In 2020, the companies [Clearview](https://www.nytimes.com/2020/01/18/technology/clearview-privacy-facial-recognition.html) and [PimEyes](https://netzpolitik.org/2020/gesichter-suchmaschine-pimeyes-schafft-anonymitaet-ab/) made international headlines. Both operate with huge amounts of data, obtained without consent from the internet.

Both companies make faces searchable. While Clearview claims to only [work with law enforcement](https://netzpolitik.org/2021/ueberwachungstechnik-clearview-bietet-umstrittene-gesichtserkennung-polizeien-weltweit-an/), PimEyes' search engine was open to the public at the beginning. When ImageNet was new, the fourteen million images stored were a revolution. PimEyes is believed to store over a billion faces.

The practice of storing biometric data en masse has come under fire from privacy regulators worldwide.(https://netzpolitik.org/2021/gesichtserkennung-grossbritannien-droht-clearview-mit-millionenstrafe-deutschland-drueckt-sich/) Clearview, meanwhile, is seeking to patent its "search engine for faces"(https://www.politico.com/news/2021/12/04/clearview-ai-facial-recognition-523735).

Meanwhile, calls to suspend facial recognition altogether are gaining momentum. In San Francisco, [facial recognition in public spaces has been banned as early as 2019](https://netzpolitik.org/2019/san-francisco-erschwert-anschaffung-von-ueberwachungstechnologien-und-verbietet-gesichtserkennung/). Amazon, IBM and Microsoft have [decided against selling facial recognition to police authorities](https://www.vox.com/recode/2020/6/10/21287194/amazon-microsoft-ibm-facial-recognition-moratorium-police). In Europe, the [Reclaim Your Face](https://reclaimyourface.eu/) campaign is fighting for a ban on such technologies.

The Police Act is now in force and [also allows the Hamburg police to use so-called predictive policing](https://www.nd-aktuell.de/artikel/1144805.gesellschaft-fuer-freiheitsrechte-beschwerde-gegen-ueberwachungspaket.html). Besides Hamburg, Berlin, Lower Saxony, Hesse, North Rhine-Westphalia and the cities of Nuremberg and Munich also use predictive policing.

The Markup has recently shown how such means of policing [ do not lead to good results but on the contrary only perpetuate the known](https://themarkup.org/prediction-bias/2021/12/02/crime-prediction-software-promised-to-be-free-of-biases-new-data-shows-it-perpetuates-them).

> Overall, we found that the fewer White residents who lived in an area-and the more Black and Latino residents who lived there-the more likely PredPol would predict a crime there. The same disparity existed between richer and poorer communities.

No one can explain why - or rather how - this should not happen in Germany.

Inwardly and outwardly, advances by the military, intelligence services and police are trying to push forward an infrastructure of permanent state access to private and biometric data.

A UN committee warned last year:

> The panel's warnings add to deepening alarm among human rights bodies over the largely unregulated use of artificial intelligence across a widening spectrum of government, from social welfare delivery to "digital borders" controlling immigration.
> -- [U.N. Panel: Technology in Policing Can Reinforce Racial Bias](https://www.nytimes.com/2020/11/26/us/un-panel-technology-in-policing-can-reinforce-racial-bias.html)

Regardless, the EU continues to expand the powers of the "border agency" Frontex. Together with efforts to centralise the digital data collections of the member states, this is creating an ever denser network of state access and encroachment.

> Taken together, the AI and algorithmic systems used by the state, from the military to the municipal level, reveal a covert philosophy of _en masse_ infrastructural command and control via a combination of extractive data techniques, targeting logic, and surveillance.
> -- Kate Crawford - Atlas of AI, p. 208

Companies like [Palantir](https://www.bloomberg.com/features/2018-palantir-peter-thiel/), [from the NSA](https://theintercept.com/2017/02/22/how-peter-thiels-palantir-helped-the-nsa-spy-on-the-whole-world/), [via Europol](https://digit.site36.net/2020/06/11/europol-uses-palantir/) to [the Hessian police](https://netzpolitik.org/2019/big-data-bei-der-polizei-hessen-sucht-mit-palantir-software-nach-gefaehrdern/) reify the mishmash of this control infrastructure. Surveillance is no longer inward-looking or outward-looking, police or intelligence.

It doesn't have to be that way. [Palantir himself admits](https://www.vice.com/en/article/qj4abv/palantir-says-faulty-ai-and-privacy-regulation-are-a-risk-to-the-company) that a discourse in privacy and the ways in which AI systems fail to contribute to intelligence and justice can cause major problems. Let's do it.

### Data and privacy

While we are all targeted by data collection techniques, at both the economic and governmental levels it hits people differently hard. For the most part, one can defend oneself against the economic collection rage of advertising networks with technical expertise. If you have the expertise, that is, the time to acquire it.

The state's collection mania, on the other hand, does not affect everyone equally from the outset. For example, storing fingerprints has been mandatory in Germany since the summer of 2020, but this almost pales into insignificance compared to the oaths of disclosure that some Hartz IV recipients and refugees have to take.

Francesca Schmidt and Johanna Luise Mellentin conclude in the book <cite>[If AI, then feminist](https://netzforma.org/publikation-wenn-ki-dann-feministisch-impulse-aus-wissenschaft-und-aktivismus)</cite>:

> When we speak of state intrusions into privacy, we see that the intensity of these intrusions increases with the degree of dependence on the state. For example, Hartz 4 recipients, people with disabilities, refugees or asylum seekers have to reckon with much more numerous and deeper interventions than people who do not belong to any of these groups or other marginalised, stigmatised groups.

Surveillance is a problem of the individuals affected by it. But it is not an _individual_ problem, it is a societal one. Our society enforces its data without leaving them any possibility of escape.

The struggle for data and how we as humans are captured in data is a global struggle that needs alliances and solidarity. Salomé Viljoen writes in her essay [Data Relations](https://logicmag.io/distribution/data-relations/):

> Thinking of datafication as the digital terms by which we relate to one another clarifies the kind of political interventions that are required. The point is not to define the terms of our individual datafication-by demanding our share of the pie, or shoring up resistance to being rendered legible against our will-but to define the terms of our collective datafication.

As we have seen above, facial recognition is one of the practices in which this struggle for social rights is being waged. It must be possible for everyone to walk the streets without fear of the digital panopticon. Whether or not they have something to hide on an individual level - or at least think they do.

But the problem does not lie solely at the state level or with companies like Clearview. In December, AI researcher Sasha Luccioni asked [on Twitter](https://twitter.com/SashaMTL/status/1469318894208880653):

> What's a good example of an AI dataset gathered _with proper consent_?
> Does that even exist?

The answers were sobering. Only Facebook's [Casual Conversations Dataset](https://ai.facebook.com/datasets/casual-conversations-dataset/) was cited as an example where data collection was consensual.

## What to do?

The history of artificial intelligence is a history of misunderstandings. Mostly the one that mistakes computers for a form of humanity. That human perception can be reduced to purely mechanical processes.

The history of artificial intelligence is also one of setbacks and triumphs. The enthusiasm surrounding advances has repeatedly given way to so-called "AI winters".

After a few years, things started to look up again. Which AI season we are currently in is a good question. On the one hand, AI is still seen as a saviour and start-ups for this or that are sprouting from the ground. On the other hand, the effects on humans and the environment are repeatedly the subject of decisive criticism. Perhaps we have now reached the point where we will no longer experience an AI winter, but also not a real summer. That AI has become commonplace, and so must be accepted but also criticised.

It is illusory to think that further progress in development could be prevented or that the big IT companies would suddenly come to their senses and only use their possibilities for "good" purposes. AI describes and codifies the racist, capitalist world that surrounds us and gives it the appearance of mathematical neutrality.

In doing so, it lays itself like a blanket over the social contexts, picks them apart into data points and thus promotes their ideological transfiguration. This must be understood again and again and things must be grasped under the blanket.

We cannot stop technological progress, but we must adapt it to our understanding. Not everything that can be done should be done:

> Our technology is accelerating at a frightening rate, a rate faster than our reflective understanding of its impact.
> -- [Tatiana Mac - Canary in a coal mine]

We need to wrest technology from the domination of corporations and their predominantly male, white boardrooms to get to the point where it is not always the past that should determine the future, but we who can shape the future.

> Contrary to big tech executives' cold-war style rhetoric about an arms race, what truly stifles innovation is the current arrangement where a few people build harmful technology and others constantly work to prevent harm, unable to find the time, space or resources to implement their own vision of the future.
> -- [Timnit Gebru - For truly ethical AI, its research must be independent from big tech]

We cannot solve the problems without questioning the capital relation itself.

The problems we face in dealing with AI are embedded in capitalist domination, in sexism, in racism. As long as we do not focus our critique on the domination of people over people, we will only work on the symptoms of this domination again and again.

A future based on solidarity and consideration instead of unconditional competition is possible.

Only when we are good to ourselves can the machines be good to us.

[^1]: Muslim Pro cancelled contract with X-Mode [a short time later](https://www.vice.com/en/article/g5bq89/muslim-pro-location-data-military-xmode).
[^2]: [An overview](https://www.blaetter.de/ausgabe/2021/august/angriff-der-killerroboter-wenn-der-algorithmus-toetet) is provided by Blätter für deutsche und internationale Politik
