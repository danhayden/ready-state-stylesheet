module.exports = function readyStateStylesheet (href, callback) {
  return (function IIFE () {
    var readyStateCheckInterval = setInterval(function () {
      if (document.readyState === 'complete') {
        clearInterval(readyStateCheckInterval);

        var stylesheet = document.createElement('link');
        stylesheet.setAttribute('rel', 'stylesheet');
        stylesheet.setAttribute('type', 'text/css');
        stylesheet.setAttribute('href', encodeURI(href));
        document.head.appendChild(stylesheet);

        if (typeof callback === 'function') {
          callback();
        }
      }
    }, 10);
  })();
};
