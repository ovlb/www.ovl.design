---
title: Getters in a factory
subtitle: Reducing repetition when creating Vuex getter functions
intro: Exploring the benefits factory functions can bring to reduce repeating code in Vuex getter functions.
date: '2020-04-02'
image:
  og: 'ovl-og-image-getter-factory-16c.png'
  title: 'img-getter-factory-mobile.jpg'
  alt: 'Aerial view of a warehouse with trucks parked ready to be loaded'
tags:
  - cat:web-development
  - cat:javascript
---

This article shows a pattern of creating dynamic Vuex getters by leveraging functions that return the getter function. This is a pattern I came up with for use in larger projects that shared functionality and data structures between store modules. It’s not the only way to solve this problem, but one I found handy so far.

I assume familiarity with JavaScript ([arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)), Vue (nothing fancy, but you should have seen a Vue app before to make sense of some parts) and Vuex ([store modules](https://vuex.vuejs.org/guide/modules.html), [getters](https://vuex.vuejs.org/guide/getters.html)).

You can find the code of this article on [Codesandbox](https://codesandbox.io/s/github/ovlb/shared-getters-demo) and [GitHub](https://github.com/ovlb/shared-getters-demo).

## Some dots, lying around on the floor like marbles
For some projects, I’ve already used a function to restore archives I used around the site and which all followed a similar pattern.

In the last project I worked on, it looked like this:

```js
const initialArchiveState = () => ({
  results: [],
  pagination: {
    count: 0,
    pages: 0,
    page: 0,
    has_next: undefined,
    has_previous: undefined
  }
})
```

This function returns a new object with the standardised archive state. As the initial or empty state is always the same – results and pagination – it does not accept any arguments.

Another place where I use a similar pattern are unit tests. I learned about it in Ed Yerbugh’s book <cite>[Testing Vue.js Applications](https://www.manning.com/books/testing-vue-js-applications)</cite>. In it, Ed uses it to create component instances to test (if you are interested in how it works, check out the chapter [Organizing tests with factory functions](https://livebook.manning.com/book/testing-vue-js-applications/chapter-8/)), which is also where I learned their name: Factory functions.

## Building a factory
I won’t bore you with programming jargon too much. I don’t understand half of it myself, so other people might be more suited to tell you about it.

But, in short, a Factory is a function used to return a new instance of an object.

A word of caution: Factory functions are abstractions and abstractions are harder to understand than simple code.

In <cite>Testing Vue.js Applications</cite> Ed Yerbugh wrote

> Everything in life comes at a cost. The cost of using factory functions is that you increase the abstractions in your code, which can make tests more difficult for future developers to understand.
>  Many times, I’ve worked on a codebase and made a change that broke a dusty old test. When I opened the test file to read the broken test, I had to spend 20 minutes deciphering abstractions that I didn’t understand.

If you get confused by the abstraction or if you find yourself writing factory functions for one-line statements, it might be a sign of over-engineering. Keep your future you and your colleagues in mind. Maintainability is more important than cleverness.

With that being said, let’s take a look at two examples that use factory functions to create flexible getters.

## Factoring getters
In its most simple form, a factory can change one part of a getter. Let’s assume that we have articles and comments, and we would like to get only published items out of our store.

Without factory functions, we would write separate getters for both post types.

For articles it might look like this:

```js
// @/store/modules/articles.js

export const getters = {
  published: state => state.articles.filter(item => item.published)
};
```

And for comments like this:

```js
// @/store/modules/comments.js

export const getters = {
  published: state => state.comments.filter(item => item.published)
};
```

They are the same function, only that the property name in the store is different. Though this getter is very simple, we could unify the creation of it in a factory function:

```js
// @/store/getters/makePublishedPosts.js

export default function(type) {
  return state => state[type].filter(item => item.published);
}
```
[makePublishedPosts source file](https://github.com/ovlb/shared-getters-demo/blob/master/src/store/getters/makePublishedPosts.js)

`makePublishedPosts` returns the getter and replaces `state[type]` with whatever value I pass into the function.

For articles the implementation looks like this:

```js
// @/store/modules/articles.js

export const getters = {
  published: makePublishedPosts("articles")
};
```
[makePublishedPosts implementation source file](https://github.com/ovlb/shared-getters-demo/blob/master/src/store/modules/articles.js#L69)

Now, this example might be a bit too simple to get real value out of this pattern. But the more complex the getter gets the more value this pattern provides.

In the second example, we have a simplified search. Catch here: In comments, I want to check if `comment.name` includes the search string, whereas for articles I want to search `article.title`.

To allow such functionality, I pass a second parameter into my factory function. The target of the items I want to search:

```js
// @/store/getters/makePostSearch.js

export default function(type, target) {
  return state => search =>
    state[type].filter(item => item[target].includes(search));
}
```
[makePostSearch.js source file](https://github.com/ovlb/shared-getters-demo/blob/master/src/store/modules/articles.js)

The implementation in the articles module now looks like this:

```js
export const getters = {
  searchResults: makePostSearch("articles", "title")
};
```
[searchResults source file](https://github.com/ovlb/shared-getters-demo/blob/master/src/store/modules/articles.js#L70)

As I have my store set up, I can use it in a component.

## Usage
Note: I’m using [mapGetters](https://tenmilesquare.com/understanding-mapgetters-in-vuex/) to make getters available in the component. If this looks weird for you, Laurie Barth did a great job explaining the basics in the linked article.

In a nutshell, mapGetters allows you to rename getter functions and use them under the updated name, which is helpful here since my account modules are namespaced and can share the same function names.

You can use a working example of this implementation in the aforementioned [Codesandbox mentioned above](https://codesandbox.io/s/github/ovlb/shared-getters-demo).

As a first step, I add the getters I need (for the sake of this article, all of them) to the computes properties of my demo component.

```js
export default {
  computed: {
    ...mapGetters({
      publishedComments: "comments/published",
      commentSearch: "comments/searchResults",
      publishedArticles: "articles/published",
      articleSearch: "articles/searchResults"
    })
  }
};
```
[mapGetters usage source file](https://github.com/ovlb/shared-getters-demo/blob/master/src/App.vue#L52)

The published articles can be used without any more configuration, as the getter works solely with data that is always available (the published state).

{% raw %}
```html
<h2>Published articles</h2>
<ul>
  <li v-for="article in publishedArticles" :key="article.id">{{ article.title }}</li>
</ul>
```
{% endraw %}

[Published articles template source file](https://github.com/ovlb/shared-getters-demo/blob/master/src/App.vue#L21)

To search, we need some more code to pass the search term into the getter.

```js
export default {
  name: "App",
  data() {
    return {
      articleSearchString: ""
    };
  },
  computed: {
    searchedArticles() {
      return this.articleSearch(this.articleSearchString);
    },
    ...mapGetters({
      publishedComments: "comments/published",
      commentSearch: "comments/searchResults",
      publishedArticles: "articles/published",
      articleSearch: "articles/searchResults"
    })
  }
};
```

Thanks to you Vue’s reactivity, this is all the code needed.

In the template, we can update the search string through an `input` and `v-model`.

```html
 <input type="text" v-model="articleSearchString" aria-labelledby="article-search">
```

And similar to the published post list render a list that updates automatically with the search term. Nice.

{% raw %}
```html
<ul v-if="articleSearchString">
  <li v-for="article in searchedArticles" :key="article.id">{{ article.title }}</li>
</ul>
```
{% endraw %}

And that’s a wrap. By using factory functions, we have explored a pattern with which you can reduce repeating code throughout your store modules. By sticking to Vue standards, the resulting code is easily usable, and in the final templates, nothing much has changed.

But, be aware: Make sure you have a good reason to introduce abstraction into your codebase. They can be a powerful tool. And a source of confusion.
