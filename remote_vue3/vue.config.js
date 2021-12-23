const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  devServer: {
    port:8999
  },
  filenameHashing: true,
  publicPath: "http://localhost:8999/",
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
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote_vue3',
        library: {
          type: 'var',
          name: 'remote_vue3'
        },
        filename: 'remoteEntry.js',
        exposes: {
          "./Vue3Button": "./src/components/Vue3Button"
        },
        shared: {
          vue: {
            requiredVersion: deps.vue,
            singleton: true,
            eager: false
          }
        }
      }),
    ],
  }
}