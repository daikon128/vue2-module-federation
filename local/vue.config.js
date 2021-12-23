const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
    },
  },
  devServer: {
    port: 8080,
  },
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
    plugins: [
      new ModuleFederationPlugin({
        filename: 'remoteEntry.js',
        remotes: {
          remote: 'remote@http://localhost:8888/remoteEntry.js',
          remote2: 'remote2@http://localhost:8899/remoteEntry.js',
          remote_vue3: 'remote_vue3@http://localhost:8999/remoteEntry.js'
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