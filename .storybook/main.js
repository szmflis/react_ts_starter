const webpack = require('webpack')

module.exports = {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true,
      })
    )
    return config
  },
}
