# ready-state-stylesheet

[![version](https://img.shields.io/npm/v/ready-state-stylesheet.svg?style=flat-square)](http://npm.im/ready-state-stylesheet)
[![downloads](https://img.shields.io/npm/dm/ready-state-stylesheet.svg?style=flat-square)](http://npm-stat.com/charts.html?package=ready-state-stylesheet)
[![MIT License](https://img.shields.io/npm/l/ready-state-stylesheet.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

Load a stylesheet once the document ready state is complete to prevent blocking rendering (useful for lazy loading web fonts)

## Usage

```javascript
var readyStateStylesheet = require('ready-state-stylesheet');
var stylesheetUrl = 'https://fonts.googleapis.com/css?family=Roboto';

readyStateStylesheet(stylesheetUrl);

// or provide a callback
readyStateStylesheet(stylesheetUrl, function () {
  document.body.parentNode.classList.add('fonts-loaded');
});
```

## License

MIT
