const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  devServer: {
    port:8899
  },
  filenameHashing: true,
  publicPath: "http://localhost:8899/",
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
        name: 'remote2',
        library: {
          type: 'var',
          name: 'remote2'
        },
        filename: 'remote2.js',
        exposes: {
          "./TodoList": "./src/components/TodoList",
          "./TodoSearch": "./src/components/TodoSearch"
        },
      }),
    ],
  }
}
