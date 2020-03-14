[![edit-in-webcomponents.dev](https://webcomponents.dev/assets/ext/edit_in_wcd.svg)](https://webcomponents.dev/edit/0cXxnm0mhsqDoE2Y0iIb)
# Template ES Module

This is a template for creating ES Module

## Table of Contents

- [Install](#install)
- [Usage](#usage)

## Install

This project uses [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save template-module-js
```

```javascript
// using ES6 modules
import { countLetter } from '@wcd/template-module-js";
```

or

```html
<script type="module" src="https://unpkg.com/@wcd/template-module-js"></script>
```

## Usage

```js
import { countLetter } from "@wcd/template-module-js";

const hello_world_count = countLetter("Hello world");

// get count of a particular letter
hello_world_count["w"];
```

> Created with [webcomponents.dev](https://webcomponents.dev)
