function readyStateStylesheet (href, callback) {
  return (() => {
    const readyStateCheckInterval = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(readyStateCheckInterval)

        const stylesheet = document.createElement('link')
        stylesheet.setAttribute('rel', 'stylesheet')
        stylesheet.setAttribute('type', 'text/css')
        stylesheet.setAttribute('href', encodeURI(href))
        document.head.appendChild(stylesheet)

        if (typeof callback === 'function') {
          callback()
        }
      }
    }, 10)
  })()
}

export default readyStateStylesheet
