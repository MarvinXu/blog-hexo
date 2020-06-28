/* global hexo */

'use strict';

hexo.extend.helper.register('cdn_url', function (path) {
  // const { config } = this;
  const theme = hexo.theme.config;
  if (theme.cdn) {
    path = path.startsWith('/') ? path : '/' + path
    return theme.cdn.base + path
  } else {
    return this.url_for(path)
  }
});
