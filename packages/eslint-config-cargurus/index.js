module.exports = {
  extends: [
    'eslint-config-cargurus-base',
    'eslint-config-cargurus-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  rules: {}
};
