[![CSS](https://img.shields.io/badge/--blue?logo=Javascript&logoColor=fff)](https://de.wikipedia.org/wiki/Cascading_Style_Sheets/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue.svg)](https://github.com/pt1602/cursor/graphs/commit-activity)
[![github forks](https://badgen.net/github/forks/pt1602/PT1602TwigRuleset/)](https://github.com/pt1602/cursor/network/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue.svg)](http://makeapullrequest.com)
[![github stars](https://img.shields.io/github/stars/pt1602/PT1602TwigRuleset.svg?style=social&label=Star&maxAge=2592000)](https://github.com/pt1602/cursor/stargazers/)

---

# PT1602 - Cursor

A simple custom cursor created with scss and typescript, for me to create my first npm package.

---

__[Demo](https://pt1602.github.io/cursor/)__

---

## Setup

Add the styling into your `<head>` tag of your project. Like this:

```html
<link href="./public/libs/@pt1602/cursor/dist/css/base.css" rel="stylesheet">
```

and this `<script>` tag after your closing `<body>` tag

```html
<script src="./public/libs/@pt1602/cursor/dist/js/index.js"></script>
```

Last step is to add the following div somewhere to your project.

```html
<div data-cursor></div>
```

---

## Configuration

Via the `data-cursor-delay` attribute you are able to set a custom delay for the animation (default 300).

__Example:__

```html
<div data-cursor data-cursor-delay="600"></div>
```

## Styling

To add your own styling just override the default css variables.

```css
* {
    --cursor-primary-color: #55fff5;
    --cursor-z-index: 100;
    --cursor-dot-color: var(--cursor-primary-color);
    --cursor-dot-size: 5px;
    --cursor-outline-size: 30px;
    --cursor-outline-width: 2px;
    --cursor-outline-color: var(--cursor-primary-color);
    --cursor-border-radius: 50%;
}
```


---

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
![Open Source? Yes!](https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github)
