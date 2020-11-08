async-wait-then
----

a package to: **wait, then do something asynchronously**.

- 📦 NPM: [npm][]
- 🌎 Browser: [jsDelivr](https://cdn.jsdelivr.net/npm/async-wait-then)
- 📂 Github: [vixalien/wait](https://www.github.com/vixalien/wait)
- ✍ Author: [@vixalien](https://www.github.com/vixalien)

wait is yet another step in making `setTimeout` more efficient.

It also allow easy use of the [promises][] while removing all the `async` and `await` and `Promise`s in your app.

## installation

To use `wait`, you must first install it, it available on [npm][].

### npm

```bash
npm install async-wait-then
```

Import as npm module:

```js
// Using ES6 syntax
import wait from 'async-wait-then';

// Using CommonJS or requireJS syntax
let wait = require('async-wait-then');
```

### browser

```xml
<script src="https://unpkg.com/wait" type="script/javascript" />
```

## example

To use it, you run `wait` with the time to wait as the only attribute

```js
// Pass on microseconds
wait(100).then(() => console.log("Just waited 😎."));
// Pass a string as parameter
wait('1 minute').then(() => console.log("One minute done"));
```

## api

```js
wait(time: (String|Number)): Promise
```

### Parameters:

- **time**: Time to wait before resolving the promise. can be a string or a number. if it's a number it's parsed as micro-seconds. If a string, it's parsed according to the [ms][] utility.

### Returns: 

A promise, which you can attach `then()` to. 

> Note: wait only resolves, it _never_ rejects. In other words: it only allows `.then()` to be called, not `.catch()`, if you listen for `catch`, no error is likely to be thrown, so it's useless.

## builds

Common builds are provided directly with the module, so if you ever wanted to require the umd build, you would do something like: `require("async-wait/index.umd.js")`, you can replace umd for:

- esm
- cjs (default)

other builds are provided (for convenience) in `/dist` folder.

## use cases

You may use this, when triggering notifications, or just to avoid using the ol' `setTimeout` API. In fact, it uses it, but with a Promise wrapper.

## todo

- Use `requestAnimationFrame` or `requestIdleCallback`, this is more efficient and works when no time was provided.
- Add tests

## thanks

To: @zeit (Vercel) for the [ms][], which is used to transform dirty strings into micro-seconds.

## donate

[donate][] on PayPal.

[donate]: https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=DTV2TLWFUNHY8&source=url
[ms]: https://github.com/zeit/ms
[npm]: https://https://www.npmjs.com/package/async-wait-then
[promises]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Creating_a_Promise_around_an_old_callback_API
