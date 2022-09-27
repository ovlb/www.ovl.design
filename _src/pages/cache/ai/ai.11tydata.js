/* const axios = require('axios')
const { AssetCache } = require('@11ty/eleventy-fetch')
const { v4: uuid } = require('uuid')

const { PCKT_KEY, PCKT_TOKEN } = process.env

async function getPocketPosts() {
  let cache = new AssetCache('pckt_cache_ai', '.api/pocket/', { duration: '*' })

  const cached = cache.isCacheValid('*') && (await cache.getCachedValue())

  const requestBody = {
    consumer_key: PCKT_KEY,
    access_token: PCKT_TOKEN,
    tag: 'ai',
  }

  if (cached) {
    const { since } = cached

    Object.defineProperty(requestBody, 'since', {
      enumerable: true,
      writable: false,
      value: since,
    })
  }

  try {
    const { data } = await axios.post(
      'https://getpocket.com/v3/get',
      requestBody,
    )

    if (cached) {
      data.list = !Array.isArray(data.list)
        ? { ...data.list, ...cached.list }
        : cached.list
    }

    await cache.save(data, 'json')

    return data
  } catch (error) {
    console.error(error)

    return false
  }
}
 */
module.exports = async function () {
  return {
    talks: {
      title: 'Talks',
      data: [
        {
          title: 'Resisting dehumanization in the age of AI',
          url: 'https://youtube.com/watch?v=wuU-5rGPbyg',
          date: '2022-09-20',
        },
        {
          title: 'Computer says no',
          url: 'https://media.ccc.de/v/rc3-2021-cbase-315-computer-says-no-kuns',
          date: '2021-12-27',
        },
      ],
    },
    podcasts: { title: 'Podcasts', data: [] },
    journalism: {
      title: 'Articles & Interviews',
      data: [
        {
          url: 'https://www.vice.com/en_us/article/3ad58k/ai-is-probably-using-your-images-and-its-not-easy-to-opt-out?utm_source=pocket_mylist',
          title:
            'AI Is Probably Using Your Images and It’s Not Easy to Opt Out',
          topics: ['datasets', 'privacy'],
        },
        {
          url: 'https://fiftytwo.in/story/human-touch/',
          title: 'Human Touch',
          topics: ['model training', 'datasets', 'labour'],
        },
        {
          url: 'https://www.washingtonpost.com/opinions/2022/06/17/google-ai-ethics-sentient-lemoine-warning/',
          title:
            'We warned Google that people might believe AI was sentient. Now it’s happening.',
          topics: ['model training'],
        },
        {
          url: 'https://www.technologyreview.com/2019/02/04/137602/this-is-how-ai-bias-really-happensand-why-its-so-hard-to-fix/',
          title:
            'This is how AI bias really happens—and why it’s so hard to fix',
          topics: ['bias', 'model training', 'datasets'],
        },
        {
          url: 'https://www.heise.de/hintergrund/Sogenannte-KI-basiert-von-Natur-aus-auf-einer-Machtbeziehung-7219321.html?seite=all',
          title:
            '„Sogenannte KI basiert von Natur aus auf einer Machtbeziehung“',
          topics: ['society'],
        },
      ],
    },
    science: {
      title: 'Publications',
      data: [
        {
          title:
            'AI recognition of patient race in medical imaging: a modelling study',
          url: 'https://www.thelancet.com/journals/landig/article/PIIS2589-7500(22)00063-2/fulltext',
          authors:
            'Judy Wawira Gichoya, MD, Imon Banerjee, PhD, Ananth Reddy Bhimireddy, MS, John L Burns, MS, Leo Anthony Celi, MD, Li-Ching Chen, BS, et al.',
          topics: ['bias', 'model training'],
        },
        {
          title:
            'Emergent linguistic structure in artificial neural networks trained by self-supervision',
          url: 'https://www.pnas.org/doi/10.1073/pnas.1907367117',
          topics: ['model training'],
          authors:
            'Christopher D. Manning, Kevin Clark, John Hewitt, Urvashi Khandelwal & Omer Levy',
          date: '2020-06-03',
        },
        {
          title: 'Manufacturing an Artificial Intelligence Revolution',
          url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3078224',
          authors: 'Yarden Katz',
          date: '2017-11-30',
        },
      ],
    },
  }
}
