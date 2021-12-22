const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  devServer: {
    port:8888
  },
  filenameHashing: true,
  publicPath: "http://localhost:8888/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote',
        library: {
          type: 'var',
          name: 'remote'
        },
        filename: 'remote.js',
        exposes: {
          "./BigAdsense": "./src/components/BigAdsense"
        },
      }),
    ],
  }
}
