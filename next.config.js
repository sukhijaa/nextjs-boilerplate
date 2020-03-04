const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const plugins = [[withSass]];

/* CONFIGURATION */
const NextAppConfig = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    };
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2
  },
  publicRuntimeConfig: {
    localeSubpaths:
      typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none'
  }
};

/* EXPORT DECLARATION */
module.exports = withPlugins(plugins, NextAppConfig);
