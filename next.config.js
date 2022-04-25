const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      ...config.resolve,
    }
    return config
  },
  // webpack(config) {
  //   config.resolve.modules.push(__dirname) // 추가
  //   return config
  // },
}
