---
title: Inclusive Inputs
subtitle: How to make inputs more accessible.
intro: An exploration into how to make inputs more accessible.
date: '2020-02-20'
lastUpdated: '2020-05-12'
image:
  og: 'ovl-og-image-inputs-001.png'
  title: 'ovl-title-image-inputs-mobile.jpg'
  alt: 'Downward view from the top of an escalator'
tags:
  - isFeatured
  - cat:web-development
  - cat:accessibility
---

This is a companion article to a talk I give sometimes. In its latest version it is called <cite>[edit text blank – Accessibility, Inputs & JavaScript](https://talks.ovl.design/BnbW3d/edit-text-blank-inputs-accessibility)</cite>.

And a thank you: The discussed implementation is based on the article <cite>[Creating accessible input errors and help text](https://medium.com/pulsar/creating-accessible-input-errors-and-help-text-74c7e00e757a)</cite> by James Jacobs.

I’m involved in a project called tournant, which aims to provide [Vue UI components  that follow accessibility best practices](https://ui.tournant.dev/).

_Updated on 12.05.2020_
- Used numbers from the 2020 WebAIM report
- Updated recommendation to always use explicit association
- Added section on Identifying Input Purpose
- Added section about the `required` attribute
- Fixed a bunch of typos and rephrased some sentences for clarity

----

I’ll be honest with you: The title of the talk is a lie. At least partially. Neither the talk nor this article are really about JavaScript. I barely even mention it.  But stay with me: Even though I don’t mention it, doesn’t mean it isn’t important or useless. But JavaScript is the second step.

This article aims to guide you through the first step. It talks about semantic <abbr>HTML</abbr> and a bit of <abbr>ARIA</abbr>. But it starts with explaining my reasoning for doing so.

## Why I talked
In 1997, in the [press release announcing the Web Accessibility Initiative](https://www.w3.org/Press/IPO-announce), Tim Berners-Less wrote:

> The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.

Fast-forward twenty years.

At the end of February, 2019 WebAIM published an [accessibility analysis of the top one million websites](https://webaim.org/projects/million/). The results were depressing. The average homepage had almost sixty errors on it. Sixty detectable errors, that is.

[Things are even worse in 2020](https://webaim.org/projects/million/#errors):

>  Across the one million home pages, 60,909,278 distinct accessibility errors were detected—an average of 60.9 errors per page. The number of errors increased 2.1% between February 2019 and February 2020.

Given that you can’t automate testing of the majority of accessibility implementations, the actual number might be way higher. WebAIM concluded that the percentage of error free pages is probably under one percent.

Ethan Marcotte, in <cite>[The web we broke](https://ethanmarcotte.com/wrote/the-web-we-broke/)</cite>, and Eric Bailey, in <cite>[Fighting Uphill](https://ericwbailey.design/writing/2019-03-05-fighting-uphill.html)</cite>, have said wiser words then I can mutter on why this has happened and what we have to change to do better.

Currently it seems like we, as an industry, don’t even get the basics of semantic <abbr>HTML</abbr> right.

The WebAIM Million report found that

> 56% of the 3.4 million form inputs identified were unlabeled (either via `<label>`, `aria-label`, or `aria-labelledby`), down from 59% in 2019. Pages with at least one unlabeled form control averaged 43 more detectable errors than pages without any label errors.

On the surface this looks fine. The number of errors decreased! Unfortunately, pages that include at least one unlabelled form control did average 30 errors in 2019, whereas now it’s 43. And 56% is still depressing in and of itself.

We can do better. We have to do better.

I deeply share Ethan’s believe that «the only way this work gets done is if we start small, and if we work together».

This article tries to do its part. Starting small, sharing, working together. All the approaches shown can be implemented without changing the user interface. If in doubt, just do it. Nobody will notice. Except some of your users. And they will thank you for it.

## Babelfish
There are some terms that one should be familiar with, when reading about accessibility on the web.

The three first is a bunch of abbreviations: <abbr>WAI</abbr>, <abbr>ARIA</abbr>, <abbr>WCAG</abbr>. But what do they mean? <abbr>WAI</abbr> stands for [Web Accessibility Initiative](https://www.w3.org/WAI/). It is a body inside of the Word Wide Web Consortium (<abbr>W3C</abbr>) working on accessibility. They maintain two documents. A standard and a set of guidelines and success criteria. The standard is <abbr>ARIA</abbr>, spelled out: [Accessible Rich Internet Applications](https://www.w3.org/WAI/standards-guidelines/aria/). <abbr>ARIA</abbr> seeks to fill the gap application authors face, when developing dynamic sites, since <abbr>HTML</abbr> is static. And the guidelines are <abbr>WCAG</abbr>, or [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/).

The second set of terms you should at least have heard before are Assistive Technology (<abbr>AT</abbr>) and the Accessibility Tree. Assistive Technology is a whole range of devices helping users to navigate websites, its most popular variant is probably the screen reader. These are enabled by the accessibility tree. A bit simplified, it’s an enhanced version of the Document Object Model. If you want to dive deeper into this topic I recommend to read <cite>[Semantics to Screen Readers](https://alistapart.com/article/semantics-to-screen-readers/)</cite> by Melanie Richards and <cite>[Web Accessibility In Context](https://www.smashingmagazine.com/2019/06/web-accessibility-context/)</cite> by Be Birchall.

## The basics
This and the following examples are all available to test for yourself on the [Inclusive Inputs Demo Page](https://playground.owlish.dev/inclusive-inputs/).

Let’s start with a part of a standard <abbr>HTML</abbr> form.

On first look, this structure looks good. Semantic elements have been used. There is a `label`, which says that the user should enter her name. We have an `input` element. There is even an action on the form element. Did you know that you can submit forms without JavaScript? Old-school is calling.

```html
<form action="/contact" method="POST">
  <div class="form-group">
    <label>Name <span class="required">*</span></label>
    <input type="text" />
  </div>
</form>
```

But if we focus the input with a screenreader, the information given is sparse:

> edit text blank

Edit text blank. 59% of all input elements sound like this if you haven’t been blessed with eyesight.

Edit text blank.

The reason for this output is that there is no link between the `label` and the `input`. The `div` it is wrapped in has no semantic meaning, neither does the CSS class.

How can we fix this? There are two ways to link a label with an element.

### Association of labels and inputs
The first solution is to explicitly link the `label` and the `input` through an ID.

The input is – in spec terms – a [labelable element](https://www.w3.org/TR/html52/sec-forms.html#labelable-element). As long as it has an ID, it can be referenced by a label using the `for` attribute. As we explicitly say which input belongs to which label, this combination is called _explicit association_.

```html
<div class="form-group">
  <label for="name">Name <span class="required">*</span></label>
  <input type="text" id="name" name="name" />
</div>
```

Alternatively we can put the `input` element inside of the `label`. This combination creates an _implicit association_.

```html
<label for="name">
  Name <span class="required">*</span>
  <input type="text" id="name" name="name" />
</label>
```

Note: Modern screen readers have robust support for the implicit pattern, but some voice control programs do not support it. Because of that, it is good practice to always be explicit. You can see updated [support data for the computation of accessible names](https://a11ysupport.io/tech/html/label_element#support-table-0) on a11ysupport.

Both solutions produce the same output:

> name \*, edit text with autofill menu

By associating `label`and `input` we gave the latter an _accessible name_. Rather confusingly, though, `name` does not give an input its name. That’s the label’s job.

### Identifying Input Purpose
By adding the `name` attribute something different happened. The browser is able to provide a autofill menu, which includes all names this user has previously entered in form fields with the same `name`.

It identified the input purpose and provides a shortcut to fill out the form.  But we should go one step further. Actually, we have to go one step further because for our inputs to meet level AA of <abbr>WCAG</abbr> 2.1 compliance, we [need to identify the purpose of each input](https://www.w3.org/TR/WCAG21/#identify-input-purpose). Thanks to Aron Janecki for [emphasising this](https://twitter.com/AronJanecki/status/1254841950462717953).

There is a good explanation why we have to do so in <cite>[Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)</cite>.

> The intent of this Success Criterion is to ensure that the purpose of a form input collecting information about the user can be programmatically determined, so that user agents can extract and present this purpose to users using different modalities. The ability to programmatically declare the specific kind of data expected in a particular field makes filling out forms easier, especially for people with cognitive disabilities.

To accomplish this, we can leverage the [`autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete). In case of the full name, that’s `name`:

```html
<input
  type="text"
  id="name"
  name="name"
  autocomplete="name"
/>
```

But, we can ask for more fine grained information, e.g. by asking for the given name (aka first name) only:

```html
<input
  type="text"
  id="name"
  name="name"
  autocomplete="given-name"
/>
```

<abbr>WCAG</abbr> provides [a list of possible values](https://www.w3.org/TR/WCAG21/#input-purposes).

So far, so good. Another you might have noticed the `*` inside the output. It often acts as a visual indicator that an input is required. The jury is out if should mark required fields or if the opposite approach – marking optional fields – might be more useful.

Either way, for screen readers the `*` is no useful information. Let’s fix this.

### Marking required
The most obvious solution is to add the word required (or optional, if you want to go the opposite way) to the label text. This will also help sighted users who are not familiar with the pattern to mark required field with an asterisk.

```html
<div>
  <label for="name">
    Name
    <span class="required">required</span>
  </label>
  <input type="text" id="name" name="name" autocomplete="name">
</div>
```

But, if the design can’t be changed, there are still ways to achieve add the necessary information.

To do so, we welcome <abbr>ARIA</abbr> in the mix and use an attribute called `aria-hidden`. It’s effect is in the name: Adding `aria-hidden` will hide the element and its children in the accessibility tree and thus from assistive technology.

Let’s start with the markup:

```html
<div class="form-group">
  <label for="name">
    Name
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input type="text" id="name" name="name" autocomplete="name">
</div>
```

We have added an additional `span` which contains the word required as well as the asterisk. By adding `aria-hidden` on the containing element it will not be announced by any assistive technology reading our page.

Scott O’Hara wrote an article about [hiding content inclusively](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html) I refer time and time again too, if I hide things. If you want to take a deeper dive into this subject matter, it is recommended to head over there.

For sighted users it might look a bit weird to see «\* required». This is solved by adding the `sr-only` class. Scott O’Hara proposed this implementation in the article linked above:

```css
.sr-only {
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

This renders the element as invisible as possible and take it out of the element flow.

These were two ways to add additional text describing in an input to a `label`. Both result in the same outcome:

> name required, edit text

At this point we have solved for some of the basic problems in marking up inputs. By associating a label element we made sure that the input has an accessible name. By adding textual alternatives for content we made sure that our users don’t have to be able to see an icon to recognise a required field.

Most websites already have the pieces lying around. These adjustments are a good leverage to drastically reduce the number of errors on your page. It will take some time to go through the forms on a website, but it is worth it.

#### The required attribute

[In response to this article Šime Vidas asked](https://twitter.com/simevidas/status/1246911353295683587), if you could use the [`required` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required) on the `input` element. The short answer is: Yes. The longer answer has been written down by Scott O’Hara and is called <cite>[Required Attribute Requirements](https://developer.paciellogroup.com/blog/2019/02/required-attribute-requirements/)</cite>.

Mirroring the implementation above the markup structure looks like this:

```html
<div class="form-group">
  <label for="name">
    Name
    <span class="required" aria-hidden="true">*</span>
  </label>
  <input type="text" id="name" name="name" autocomplete="name" required>
</div>
```

When using `required`, we have to remove the hidden word from the label, leaving it in leads to duplicate output. The visual indicator stays hidden from assistive technology.

By adding required the browser will use its built in validation. Peter-Paul Koch has [written an extensive investigation](https://www.quirksmode.org/blog/archives/2017/12/native_form_val.html) of it, touching on UI issues, JS enhancements, and error messages. The bottom line is: the native validation leaves much to be desired. You are likely able to provide more meaningful validation yourself.

One example, directly tied to the `required` attribute, is that all empty fields are invalid by default. Which is … kind of correct, but also very annoying. If a user hasn’t even started to fill out a form, we shouldn’t yell at her that she is failing.

To disable native validation, we need to add the `novalidate` attribute to the form containing our inputs:

```html
<form action="/contact" method="POST" novalidate>
```

It’s a good practice to do so only once your scripts load and you actually are in charge of handling validation. Or, of course, if you handle form submissions on your server.

Once added, we can use our own methods to verify that our users fill out the forms correctly. And if they don’t, the next part will show you how to describe inputs, so that the feedback is perceivable by all users.

## Descriptions & Error Messages
The implementation so far is a fine baseline for more inclusive inputs. But some form elements will need to be described. And at one point there will be errors. Let’s take a look at how to solve this next.

### Descriptions
Given an input in which a user should add their name there probably is no explanation needed. But sometimes there is. Let’s take a password input as an example because almost every site has at least one requirement regarding this.

Informing users upfront is will prevent frustration and errors.

Let’s take a look at a standard way to do this, starting with what was discussed in the first part.

```html
<div class="form-group">
  <label for="password">
    Password
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input
    type="password"
    id="password"
    name="password"
    autocomplete="new-password"
  >
  <p class="aside">Your password needs to have at least eight characters.</p>
</div>
```

A brief intervention: By using `autocomplete="new-password"` a browser will suggest a new password for the user. If you are e.g. in a login form, you should use `current-password`.

Back to the program: I’ve added another element: the `<p>` containing a description, informing users about the format the password needs to have.

This is what VoiceOver has to say about this input:

> Password required, secure edit text

The description is lost. But we can recover it. To do so, we’ll need another way to link two elements. Unfortunately the `for` attribute only works between `label` and `input` elements and there is no native HTML for descriptions.

On the lucky side, though, ARIA has our back, again. This time the attribute to help out is `aria-describedby`. Simply put, it uses the _text content_ of an element to describe another. As with all things accessibility there’s a lot more nuance than a single sentence to be taken into account. Scott O’Hara has written [the definitive guide describing aria-describedby](https://developer.paciellogroup.com/blog/2018/09/describing-aria-describedby/).

To solve the problem at hand the description needs to have an ID, which will in turn be referenced by the input. To update the example from above:

```html
<div class="form-group">
  <label for="password">
    Password
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input
    type="password"
    id="password"
    name="password"
    autocomplete="new-password"
    aria-describedby="desc_pw"
  >
  <p class="aside" id="desc_pw">Your password needs to have at least eight characters.</p>
</div>
```

Adding these attributes, again, does not require any visual changes. Another error that can be fixed without anyone noticing.

And this is what VoiceOver makes of it:

> Password required, secure edit text

«Wait, what?» I hear you saying, «Didn’t he just elaborated that this will _fix_
 the problem? _Nothing_ happened.»

Almost nothing! After announcing the basic information, there is a second set of output, containing complimentary information.

> Your password needs to have at least eight characters. You are currently on a text field, inside web content. To enter text in this field, type. This is a secure text field. Text in this field will not be displayed and it will not be spoken by VoiceOver

And there is the description we added. Along with usage instructions and a reminder that the user has focussed a secure text field.

### Validation
With this we are at the last piece of the puzzle. Validation. Error messages are pretty much the same as the description we gave immediately. They will also be linked using `aria-describedby`. With one difference: Error messages are – mostly – not existing when the page is loading but a reaction to user input.

The trick here is that `aria-describedby` accepts a list of IDs which are concatenated to one spoken output.

To stay with the password example,  I added an error message and added the ID of the description as well as the ID of the error message in `aria-describedby`:

```html
<div class="form-group">
  <label for="password">
    Password
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input
    type="password"
    id="password"
    name="password"
    autocomplete="new-password"
    aria-describedby="error_pw desc_pw"
  >
  <p class="aside" id="desc_pw">Your password needs to have at least eight characters.</p>
  <p class="error" id="error_pw">Please check your input.</p>
</div>
```

If a user now focusses this input VoiceOver says the following:

> Password required, secure edit text. Please check your input. Your password need to have at least eight characters. You are currently on a text field, inside web content. To enter text in this field, type. This is a secure text field. Text in this field will not be displayed and it will not be spoken by VoiceOver

In this case the error message and the description complement each other. If an error message contains the text of the description this will lead to redundant output. In this case it might make sense to only describe the input with the error message.

Another thing to note is that there is no clear indication that the is invalid. Let’s fix this by adding `aria-invalid="true"`:

```html
<div class="form-group">
  <label for="password">
    Password
    <span class="required" aria-hidden="true">*</span>
    <span class="sr-only">required</span>
  </label>
  <input
    type="password"
    id="password"
    name="password"
    autocomplete="new-password"
    aria-invalid="true"
    aria-describedby="error_pw desc_pw"
  >
  <p class="aside" id="desc_pw">Your password needs to have at least eight characters.</p>
  <p class="error" id="error_pw">Please check your input.</p>
</div>
```

Now VoiceOver will announce:

> Password required, invalid data, secure edit text.

At this point I will end my little excursion and leave you, dear reader, with some final remarks.

## Staying accessible
Labelling and describing inputs is a low-hanging fruit. In most interfaces the elements are there, they just need to be structured properly. Still, it is virtually impossible to _just_ make a website accessible. There is no just. Never. But you can work towards making it more accessible by the day (or sprint).

If you made it so far, you are probably interested in fixing the web. And that’s amazing! Here are a few words of caution:

I often mentioned how many of these errors can be fixed without anyone noticing or the need to change the user interface. While that’s certainly true, it can only solve so much.

Accessibility is a team-sport. If you want to make lasting change in your company, your dev team – basically anywhere – you need to get the team onboard. There’s a limit on flying undercover and there is also a risk, because individual change makes it very hard to have a lasting impact.

Try to get the buy in of stakeholders, team members and leads. If your team has regular sessions in which you talk about tech, talk about accessibility. If not, why not start one?

Besides of educating your colleagues or community you’ll also need to somehow solidify the progress you make. If you work on a project with a Definition of Done, try to add accessibility testing to it. If you write tests, assert against <abbr>ARIA</abbr> states and properties.

But, please, don’t throw throw <abbr>ARIA</abbr> at everything. It’s a last resort, mostly for more complex widgets, no silver bullet. In fact, [pages that use <abbr>ARIA</abbr> are more likely to include errors](https://webaim.org/projects/million/#aria) than those who don’t.

And, most importantly, talk to your users and listen to those who do. Especially when working with assistive technology they are the experts and we as developers should be very humble and throw assumptions we might have wide away.

Building user interfaces is a problem that is never finally solved. Staying accessible isn’t neither. It takes continuous work and iteration.

Let’s unbreak the web.
