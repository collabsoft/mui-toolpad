// TODO: maybe we should create/publish a @material-ui/scripts package?
const baseline = require('@material-ui/monorepo/prettier.config');

module.exports = {
  ...baseline,
  overrides: [
    ...baseline.overrides,
    {
      files: ['**/*.mdx'],
      options: {
        // otherwise code blocks overflow on the docs website
        printWidth: 80,
      },
    },
  ],
};
