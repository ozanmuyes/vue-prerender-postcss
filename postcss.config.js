// https://github.com/michael-ciniawsky/postcss-load-config

const path = require('path');

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    stylelint: {
      // config: {
      //   extends: 'stylelint-config-standard',
      //   rules: {
      //     'property-no-unknown': true, // TODO Check whether is this type of writing is correct.
      //     'unit-no-unknown': true,
      //     //
      //   }
      // },
      configFile: path.join(__dirname, 'stylelint.config.js'),
      ignoreDisables: {},
      // TODO NOTE Add here 'stylelint' options
      // See https://github.com/stylelint/stylelint/blob/master/docs/user-guide/postcss-plugin.md#options
    },
    'postcss-cssnext': {},
    'postcss-nesting': {},
    // NOTE Add other PostCSS plugins here
  }
}
