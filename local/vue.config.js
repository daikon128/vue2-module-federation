const { ModuleFederationPlugin } = require('webpack').container;

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
        filename: 'remote.js',
        remotes: {
          remote: 'remote@http://localhost:8888/remote.js'
        },
      }),
    ],
  }
}