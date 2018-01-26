// https://github.com/michael-ciniawsky/postcss-load-config

const path = require('path');

module.exports = {
  plugins: {
    // 'postcss-import': {
    //   // addDependencyTo: webpack,
    // },
    // 'postcss-cssnext': {},
    // 'postcss-nesting': {},
    // "postcss-import": {},
    // "postcss-url": {},
    'postcss-precess': {},
    stylelint: {
      configFile: path.join(__dirname, 'stylelint.config.js'),
      ignoreDisables: false,
      // TODO NOTE Add here 'stylelint' options
      // See https://github.com/stylelint/stylelint/blob/master/docs/user-guide/postcss-plugin.md#options
    },
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    // NOTE Add other PostCSS plugins here
  }
}
