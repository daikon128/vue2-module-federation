const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

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
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    },
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote',
        library: {
          type: 'var',
          name: 'remote'
        },
        filename: "remoteEntry.js",
        exposes: {
          "./BigAdsense": "./src/components/BigAdsense"
        },
        shared: {
          vue: {
            requiredVersion: deps.vue
          }
        }
      }),
    ],
  }
}