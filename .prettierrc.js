const { prettierConfig } = require('poetic');

module.exports = {
  ...prettierConfig,
  // Add custom rules here
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  // semi: false,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  fluid: false,
};
