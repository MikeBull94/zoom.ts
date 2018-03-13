<p align="center">
  <a href="#readme"><img src="https://raw.githubusercontent.com/michaelbull/zoom.ts/master/img/logo.png" alt="zoom.ts" width="478" height="178" /></a>
</p>
<p align="center">
  A lightweight TypeScript library for image zooming, as seen on <a href="https://medium.design/image-zoom-on-medium-24d146fc0c20">Medium</a>.
</p>
<p align="center">
  <a href="https://michaelbull.github.io/zoom.ts" rel="nofollow">Demo</a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/zoom.ts"><img src="https://img.shields.io/npm/v/zoom.ts.svg?style=flat-square" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/zoom.ts"><img src="https://img.shields.io/npm/dt/zoom.ts.svg?style=flat-square" alt="npm downloads" /></a>
  <a href="https://github.com/michaelbull/zoom.ts/blob/master/LICENSE"><img src="https://img.shields.io/github/license/michaelbull/zoom.ts.svg?style=flat-square" alt="software license" /></a>
  <br />
  <a href="https://travis-ci.org/michaelbull/zoom.ts"><img src="https://img.shields.io/travis/michaelbull/zoom.ts.svg?style=flat-square" alt="build status" /></a>
  <a href="https://coveralls.io/github/michaelbull/zoom.ts?branch=master"><img src="https://img.shields.io/coveralls/michaelbull/zoom.ts.svg?style=flat-square" alt="coverage status"></img></a>
</p>
<br />
<p align="center">
  <a href="https://michaelbull.github.io/zoom.ts"><img src="https://github.com/michaelbull/zoom.ts/raw/master/img/example.gif" alt="example" width="888" height="595" /></a>
</p>
<br />
<br />

## Installation

Install the package via [npm][npm]:

```
npm install --save zoom.ts
```

## Usage

The [example directory][example] contains the code used to [demonstrate][demo]
an application with `zoom.ts` installed. 

### Static Site

To integrate `zoom.ts` into a static site, import the [UMD][umd] module and
interface with the library via the global `window.zoom`. The snippet below
demonstrates linking the bundle (`dist/zoom.js`) and the stylesheet
(`dist/zoom.css`). It then calls the [`listen`][listen] function to add an 
event listener to the `document.body` when the page is [`ready`][ready].

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="dist/zoom.css">
    <script type="text/javascript" src="dist/zoom.js"></script>
    <script>window.zoom.listen();</script>
  </head>

  <body>
    <img class="zoom__image"
         src="assets/tower-1000.jpeg"
         data-width="2048"
         data-height="1366"
         data-src="assets/tower-2000.jpeg"
    />
  </body>
</html>
```

### Application

To integrate `zoom.ts` into a web application, follow the steps outlined below:

1. Detect and store the [`Features`][features] of the `document.body.style`
2. Locate the element you wish to make zoomable
3. Register a [`ZoomListener`][zoom-listener] on the target image
4. In the listener's callback, create and store a [`ZoomInstance`][zoom-instance]
5. Call `expand` on the `ZoomInstance` to begin the zoom
6. If the user navigates to a different page in the application, call [`destroy`][destroy] on the `ZoomInstance`

The snippet below demonstrates finding the first element with the `zoom__image`
class and adding a `ZoomListener` to any `click` events it fires. When fired,
the event listener will instantiate a `ZoomInstance` and store it as a variable
named `instance`, then immediately expand the image. After 5 seconds have
passed, the `instance` will be forcefully removed via the call to `destroy`.

```javascript
import {
    Features,
    ZoomDOM,
    ZoomInstance,
    ZoomListener
} from 'zoom.ts';

let features = Features.of(document.body.style); // (1)
let image = document.querySelector('.zoom__image'); // (2)

image.addEventListener('click', new ZoomListener((dom) => { // (3)
    let instance = new ZoomInstance(dom, features); // (4)
    
    instance.expand(); // (5)
    
    setTimeout(() => {
        instance.destroy(); // (6)
    }, 5000);
}));
```

## Contributing

Bug reports and pull requests are welcome on [GitHub][github].

## License

This project is available under the terms of the ISC license. See the
[`LICENSE`](LICENSE) file for the copyright information and licensing terms.

[npm]: https://www.npmjs.com/
[example]: https://github.com/michaelbull/zoom.ts/tree/master/dist
[demo]: https://michaelbull.github.io/zoom.ts 
[umd]: https://github.com/umdjs/umd
[listen]: https://github.com/michaelbull/zoom.ts/blob/master/src/zoom.ts#L15
[ready]: https://github.com/michaelbull/zoom.ts/blob/master/src/browser/document.ts#L25
[features]: https://github.com/michaelbull/zoom.ts/blob/master/src/browser/features.ts#L5
[zoom-listener]: https://github.com/michaelbull/zoom.ts/blob/master/src/event/zoom-listener.ts#L7
[zoom-instance]: https://github.com/michaelbull/zoom.ts/blob/master/src/zoom-instance.ts#L18
[destroy]: https://github.com/michaelbull/zoom.ts/blob/master/src/zoom-instance.ts#L64
[github]: https://github.com/michaelbull/zoom.ts
