export default {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  rules: {
    'block-no-empty': true,
    'color-no-invalid-hex': true,
  },
};
