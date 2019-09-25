const {InjectManifest} = require('workbox-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new InjectManifest({swSrc: './src/sw.js'}),
  ],
}
