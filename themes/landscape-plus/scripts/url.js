
var url = require('url');
var _ = require('lodash');

hexo.extend.helper.register('_url', function (path) {
  path = path || '/';

  if (path[0] === '#' || path.substring(0, 2) === '//') {
    return path;
  }

  var config = this.config;
  var root = config.root;


  // Prepend root path
  path = root + path;

  return path.replace(/\/{2,}/g, '/');
});