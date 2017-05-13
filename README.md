# ready-state-stylesheet

[![version][version]](http://npm.im/ready-state-stylesheet)
[![MIT License][MIT License]](http://opensource.org/licenses/MIT)
[![Standard][Standard]](http://standardjs.com)
[![Standard Version][Standard Version]](https://github.com/conventional-changelog/standard-version)
[![Size][Size]](https://unpkg.com/ready-state-stylesheet)

Load a stylesheet once the document ready state is complete to prevent blocking rendering (useful for lazy loading web fonts)

## Usage

```javascript
import readyStateStylesheet from 'ready-state-stylesheet'
const stylesheetUrl = 'https://fonts.googleapis.com/css?family=Roboto'

readyStateStylesheet(stylesheetUrl)

// or provide a callback
readyStateStylesheet(stylesheetUrl, function () {
  document.documentElement.classList.add('fonts-loaded')
})
```

## License

MIT


[version]: https://img.shields.io/npm/v/ready-state-stylesheet.svg
[MIT License]: https://img.shields.io/npm/l/ready-state-stylesheet.svg
[Standard]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[Standard Version]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg
[Size]: https://badges.herokuapp.com/size/npm/ready-state-stylesheet?gzip=true&label=gzipped
