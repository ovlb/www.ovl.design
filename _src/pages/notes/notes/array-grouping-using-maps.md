---
title: 'Grouping a JS Array Using Maps'
date: '2023-07-06'
state: done
tags:
  - 'cat:web-development'
---

Over the last few days, I’ve been, slowly, rebuilding the Rillendisco website, using my 11ty starter No. 11.

The first version of the site uses Contentful and nested content types to split the events up by years. Which works, but is also a lot of manual labour. FOr the second version, I decided to try to automate this.

## The Data

The data, roughly (and abbreviated) looks as follows. It’s an Array with one object per party, and multiple parties per year.

```js
module.exports = [
  // 2017
  {
    date: new Date('2017-01-08'),
  },
  {
    date: new Date('2017-02-05'),
  },
  // 2018
  {
    date: new Date('2018-01-07'),
  },
  {
    date: new Date('2018-03-18'),
  },
  // 2019
  {
    date: new Date('2019-01-13'),
  },
  {
    date: new Date('2019-02-17'),
  },
]
```

## Ready, Set, Go

My first impulse was to use a `Set`, as those hold unique values which is great as I want to have one section per year.

However, while I find them super handy to store single values (like IDs or just the years), I struggle to use them if I need to values that store values.

I don’t want to just have the years in the `Set`, and then filter the event Array again.

## Mapping Out a Different Plan

For such cases I tend to feel that `Map`s are more appropriate. While they don’t necessarily hold _unique_ values, they are much easier to work with if you need to store values based on a key.

So I started by creating a new `Map`.

```js
const years = new Map()
```

The interesting part is how to ensure that the `Map` only contains one key per year, which stores all dates?

The first iteration used `map.has()` and an `if` statement.

```js
for (const event of events) {
  const year = event.date.getFullYear()

  if (years.has(year)) {
    years.get(year).push(event)
  } else {
    const value = [event]

    years.set(year, value)
  }
}
```

This works fine, but somehow I felt that it can be simplified.

If a `Map` doesn’t contain the key you are asking for, `.get()` returns `undefined`.

So, instead of iffing, it’s possible to do this:

```js
const year =
  years.get(yearOfEvent) ||
  (years.set(yearOfEvent, []) && years.get(yearOfEvent))

year.push(event)
```

In this version, I check if the year is already in the `years` Map, and if it isn’t, I `.set()` a new value with an empty Array and immediately `.get()` it.

Afterwards, I’m always able to `.push()` the current event in the appropriate place.

## Back to Camp Array

The last step needed, is to reformat the keyed data to use in my templates.

It’s possible to convert a `Map` back to an Array using `Array.from()`

```js
const newArray = Array.from(years)
```

This returns an Array, which roughly looks like this:

```js
[
  2018,
  [
    // event contents
  ]
]
```

That’s already something one could work with, but using indexed based values, as in `[0]`, in templates (or anywhere, really) always feels a bit abstract.

So, I decided to convert the data one last time:

```js
return Array.from(years)
  .sort((a, b) => b[0] - a[0])
  .map((y) => ({ year: y[0], raves: y[1] }))
```

The call to `.sort()` is only a safety measure. Maps hold their keys in the order they have been inserted in.

My `events` Array has the events in chronological order, while the site shows them reversed. I could use `.reverse()`, but maybe one I get too lazy to scroll and add new events at the top? Doesn’t matter now!

Finally, I `.map()` over the existing Array and return Objects which contain properties for `year` and `raves`, which is much easier to work with.
