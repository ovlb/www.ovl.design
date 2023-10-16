---
title: Die Nächte sind erfüllt von Maskenfesten
subtitle: Throwing a night-owl-mode party.
intro: I recently integrated dark mode into this site. Here’s how it went, what I learned and a quick intro to CSS Custom Properties.
date: '2020-02-02'
image:
  og: 'ovl-og-image-maskenfeste.png'
  title: 'maskenfest-high.jpg'
  alt: 'Detailed photograph of a fully illuminated earth moon'
tags:
  - cat:web-development
  - cat:css
---

I’m late to the party. I can’t help it. If there is a possibility to be late, I am. But I do like a party. Sometimes I even do like parties in dark rooms. So, implementing dark mode has been out of question.

I had implemented it on two sites I built from scratch recently. It was so straight-forward that I thought it couldn’t be too hard for this site. The only different thing is that the code for this site is a bit … it is code written by someone who did not know what they were doing. Read: a younger me.

In the following I am showing you how I approached it, as well as explaining the basics of [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*), as they are an integral part of the implementation.

## Getting colourful
Luckily,  I knew that it is a good idea to keep your colours somewhere safe and only use named variants in your CSS, just in case red does not cut it as the primary colour anymore and you want to switch to something different.

Here are all colours I use:

```css
$colors: (
  main: #b00000,
  main-light: lighten(#b00000, 30),
  main-dark: darken(#b00000, 10),
  light: #f8f2e3,
  dark: #0e0e0e,
  dark-lighter: #685d5d,
  light-darker: #cdc9bd
);

```

Up until now, I’ve been using them through a SASS function named `color`.

```css
@function color($key) {
  @if map-has-key($colors, $key) {
    @return map-get($colors, $key);
  }

  @warn "Unknown `#{$key}` in $colors.";
  @return null;
}
```

If I want to make something red (my main colour), I have used it as such:

```css
.main-headline {
  color: color('main');
  font-family: $fonts-secondary;
  font-size: var(--type-xlarge);
  margin: space(double, relative) 0 space(half, relative);

  &:first-child {
    margin-top: 0;
  }
}
```

This has been alright since the site never needed to change these values once they were parsed into my stylesheet. Now, with the ominous dark mode, I need to do this. If a media query matches, all the colours need to change.

Putting a media query everywhere I need a colour change is tedious. Work I would probably don’t do properly. Luckily, there’s another way.

### Enter custom properties

Custom properties, often called CSS variables, are a kind-of-new addition to a web designer’s toolbox. The name variables gives it away: They make value definitions _variable_. [Browser support](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility) is solid since a while, with every browser except IE 11 supporting them. If you care about providing a fallback for not supporting browser – [which you should](/text/a-non-business-case-for-supporting-old-browsers/) – there is a [PostCSS plugin](https://github.com/postcss/postcss-custom-properties) which adds a static fallback to your definitions.

Before I talk about switching colours, let me give you a brief introduction to how these custom properties aka variables work.

Let’s create a utility class for a square box.

```css
.is-square {
  height: 2rem;
  width: 2rem;
}
```

If you need a different size, you would need to create a modifier and redeclare all values.

```css
.is-square {
  height: 2rem;
  width: 2rem;

  &--large {
    height: 8rem;
    width: 8rem;
  }
}
```

Things will get verbose quite quickly, as more complex code bases tend to need boxes in many different sizes.

The cool thing about custom properties is that they allow you to overwrite them as needed, allowing for much more flexibility. Let’s refactor the box to use custom properties:

```css
.is-square {
  --box-size: 2rem;

  height: var(--box-size);
  width: var(--box-size);
}
```

On line 2, we have declared the property, or variable, and used it for both `width` and `height` by calling the `var` function.

Tip: Always namespace such properties. Just naming it `--size` invites a whole lot of trouble, since it’s very like that at one point another declaration will define `--size`.

Defining other sizes becomes much easier:

```css
.is-square {
  --box-size: 2rem;

  height: var(--box-size);
  width: var(--box-size);

  &--large {
    --box-size: 8rem;
  }
}
```

As the value of `width` and `height` is variable, we can change both by redeclaring the variable.

And if there is a use case where you need a slightly different box, you can do so from everywhere in your CSS.

Say we have an avatar in a user profile.

```html
<img class="user-avatar is-square" src="..." srcset="..." alt="Profile picture of Jane Doe">
```

After adding the `is-square` utility class, we can redefine the size by updating the `--box-size` property:

```css
.user-avatar {
  --box-size: 3.5rem;

  border-radius: 50%;
}
```

The `--box-size` variable is scoped into the class we first defined it in. There is a way to declare «global» variables.

Coming back to colours, let’s take a look at an example:

```css
:root {
  --clr-main: #b00000;
}
```

Once declared, we can use the property `--clr-main` everywhere:

```css
.main-headline {
  color: var(--clr-main);
}
```

One last thing that’s good to know about using custom properties is that you can specify a fallback value, by adding a second parameter to the function call.

```css
.main-headline {
  color: var(--clr-main, #b00000);
}
```

Stefan Judis recently [tweeted about a little trick](https://twitter.com/stefanjudis/status/1222987075018010631), with which «you can use undefined properties with a fallback value to then define them later».

### Making colours variable

The first step is to declare all the colours. I could do this by hand, but as I’ve stored them in a SASS map already, a loop saves a bit of time here:

```css
:root {
  @each $color,
  $value in $colors {
    --clr-#{$color}: #{$value};
  }
}
```

I use the `--clr` namespace for colours, to avoid name-clashing and be clear what kind of value to expect.

And while the map saves me typing, I also find it easier to scan and maintain, than a list of property definition, but that’s a personal preference.

In the parsed CSS it will look like this:

```css
 :root {
  --clr-main: #b00000;
  --clr-main-light: #ff4a4a;
  --clr-main-dark: #7d0000;
  --clr-light: #f8f2e3;
  --clr-dark: #0e0e0e;
  --clr-dark-lighter: #685d5d;
  --clr-light-darker: #cdc9bd;
}
```

### Naming can be confusing

One step I took before actually implementing dark mode, was to add a layer of naming. Why’s that? Because, in dark mode,  light becomes dark and I always find it confusing to see a declaration like `color: var(--clr-dark)` and see light text in the browser.

Aliasing the colours makes my design decisions more evident:

```css
:root {
  @each $color,
  $value in $colors {
    --clr-#{$color}: #{$value};
  }

  --clr-bg: var(--clr-light);
  --clr-fg: var(--clr-dark);
  --clr-accent: var(--clr-main);
  --clr-accent-dark: var(--clr-main-dark);
  --clr-accent-light: var(--clr-main-light);
  --clr-decent: var(--clr-dark-lighter);
}
```

These declarations make it very clear which _purpose_ the colour fulfils, and abstracts from the actual value, which is not as important anymore.

Using these classes looks something like this, nice, clean and declarative.

```css
body {
  background-color: var(--clr-bg);
  color: var(--clr-fg);
}

```

The last thing left to do was to do a search and replace for all places where I’ve used the `color` SASS function and replace these declarations with my new variables.

```css
.main-headline {
  color: var(--clr-accent);
}
```

### Getting dark

Now, finally to updating colours for dark mode. I target a dark mode user preference using the [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media feature. It’s supported by all browsers that also support custom properties.

After setting up the project, the change is straight forward:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --clr-fg: var(--clr-light);
    --clr-bg: var(--clr-dark);
    --clr-accent: var(--clr-main-light);
    --clr-accent-dark: var(--clr-main-light);
    --clr-accent-light: var(--clr-main-dark);
    --clr-decent: var(--clr-light-dark);
  }
}
```

If the media query matches, I invert my color scheme, and since I use `var()` everywhere, these changes will cascade down from the root element.

The cascade is a beautiful feature. If you are starting out learning CSS and it feels a bit daunting, Amelia Wattenberger has recently published [a fantastic primer on how it works](https://wattenberger.com/blog/css-cascade).

Two names I’m not happy with are `accent-dark` and `accent-light`. Currently, I do what I didn’t want to do: applying a light colour to a dark name and vice versa. Naming _is_ hard. I tend to change this to `accent-to` and `accent-from` as I use them mostly for gradients. Let’s see what I come up with.

### Colour is complicated
Inverting the colour setting was a valuable first draft, but not the end of the story. My standard dark colour is very close to true black, which feels quite harsh when applied as a page background. I brightened my dark grey a bit to reduce this.

The second value I tweaked was `--clr-accent`. In the swap out version I used the light shade of the main colour. I did so to maintain the contrast between it and the background. But now my design was missing a colour, and the light shade felt very bright when used for large type. To mitigate this I used a slightly darker red as the accent colour.

This is the colour scheme in use now:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --clr-fg: var(--clr-light);
    --clr-bg: var(--clr-dark-lighter);
    --clr-accent: var(--clr-main-darker);
    --clr-accent-dark: var(--clr-main-light);
    --clr-accent-light: var(--clr-main-dark);
    --clr-decent: var(--clr-light-dark);
  }
}
```

Even with a fairly simple colour scheme like mine, simply swapping out colours wasn’t a satisfactory solution. Things get even more complicated when the colour scheme gets more nuanced.

In another project I ended up creating not one but two maps. Instead of looping over all colours once and assigning them afterwards, I looped over each separately.

```css
:root {
  @each $color, $value in $colors {
    --clr-#{$color}: #{$value};
  }

}

@media (prefers-color-scheme: dark) {
  :root {
    @each $color, $value in $colors-dark {
      --clr-#{$color}: #{$value};
    }
  }
}
```

As the keys in both maps are identical, usage didn’t change after the variables were declared.
Regardless which approach you take, make sure to test for [contrast ratio](https://www.w3.org/TR/WCAG20-TECHS/G18.html), legibility and harmony.

A quick note on handling type: White text on a black background tends to appear smaller than dark text on a light background. You might need to tweak your font sizes, especially the small ones.

### For the heart

With all colours updated there was one final, but essential, step to take. You might have noticed the small little floral heart underneath the title of this article. It called [Fleuron](https://en.wikipedia.org/wiki/Fleuron_(typography)) and is a glyph with age-old origins. While it started as a punctuation mark, today it is mostly used as an ornamental mark as I do on my side. You may also find it as a divider on the [text archive page](/text/).

I load the image as an SVG file and have the gradient lines on each side of it. This needs to adapt, too.

The CSS for it is a bit more involved (and most likely deserves a clean up). Let’s take a look at what I had for a start:

```css
.u-floral-heart-gradient {
  background-image: linear-gradient(
      to right,
      color(main-light),
      color(main-dark)
    ),
    url('~assets/img/icons/floral-heart-dark-red.svg'),
    linear-gradient(to right, color(main-dark), color(main-light));
  background-position: 4vmin calc(100% - 2rem), center calc(100% - 1.66rem),
    calc(100% - 4vmin) calc(100% - 2rem);
  background-repeat: no-repeat;
  background-size: 40% 0.125rem, 1rem, 40% 0.125rem;
}
```

Breaking it down, we have three `background-images`s, which are a gradient, the fleuron, and another gradient. They are sized to always fit into the container and are positioned at the bottom of it.

First, I replaced the colours with variable calls:

```css
.u-floral-heart-gradient {
  background-image: linear-gradient(
      to right,
      var(--clr-accent-light),
      var(--clr-accent-dark)
    ),
    url('~assets/img/icons/floral-heart-dark-red.svg'),
    linear-gradient(to right, var(--clr-accent-dark), var(--clr-accent-light));
  background-position: 4vmin calc(100% - 2rem), center calc(100% - 1.66rem),
    calc(100% - 4vmin) calc(100% - 2rem);
  background-repeat: no-repeat;
  background-size: 40% 0.125rem, 1rem, 40% 0.125rem;
}
```

The beautiful thing about custom properties is that you can assign any CSS property to them and make it work; this includes `url` values:

```css
:root {
  --layout-fleuron: url('~assets/img/icons/floral-heart-dark-red.svg');
}
```

Swapping the SVG happens in the media query mentioned above:

```css
@media (prefers-color-scheme: dark) {
  :root {
    /* colours omitted for brevity */

    --layout-fleuron: url('~assets/img/icons/floral-heart-light-red.svg');
  }
}
```

I now have an adapting fleuron that I can use by calling `var(--layout-heart) `.

For the gradient, I decided to take it one step further and replaced some more repeating values with custom properties:

```css
.u-floral-heart-gradient {
  --gradient-size: 40% 0.125rem;
  --gradient-bottom-offset: calc(100% - 2rem);
  --fleuron-bottom-offset: 1.66rem;

  background-image: linear-gradient(
      to right,
      var(--clr-accent-light),
      var(--clr-accent-dark)
    ),
    var(--layout-fleuron),
    linear-gradient(to right, var(--clr-accent-dark), var(--clr-accent-light));
  background-position: 4vmin var(--gradient-bottom-offset), center calc(100% - var(--fleuron-bottom-offset)),
    calc(100% - 4vmin) var(--gradient-bottom-offset);
  background-repeat: no-repeat;
  background-size: var(--gradient-size), 1rem, var(--gradient-size);
}
```

I decided to make the bottom offset variable since this makes adapting it much more straightforward. Without these variables, I needed to update the whole `background-position` declaration, even if just two numbers changed.

The archive header uses my utility class but positions the fleuron and lines closer to the bottom. By modifying the offsets, the change is very clean:

```css
.archive-header {
  --gradient-bottom-offset: calc(100% - 1rem);
  --fleuron-bottom-offset: 0.66rem;

  margin-bottom: 5vh;
  min-height: 33vh;
  padding-bottom: 5vh;
  padding-top: 10vh;
  text-align: center;
}
```

## Wrap-up

I wanted to implement dark mode and by doing so, ended up with a cleaner codebase and property names that communicate my design _intent_ rather than the blank values.

Working with custom properties beyond colour updates opens a whole new world of piecing together CSS that I’m eager to explore.

And, as always, good design requires nuance and a fair bit of staring at the screen.

One thing I am going to add is a user toggle. If you are interested in this, Andy Bell has written an [in-depth article about his approach](https://hankchizljaw.com/wrote/create-a-user-controlled-dark-or-light-mode/).

## Acknowledgements
The [title image has been taken by Jimena Egger](https://unsplash.com/photos/odWmII7vf6M) and published on Unsplash.

The post is named after [a song by the wonderful Bersarin Quartett](https://www.youtube.com/watch?v=nuu9B4xAuPo).