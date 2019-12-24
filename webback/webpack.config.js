const path = require('path');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    after: function(app, server, compiler) {
      // do fancy stuff
      console.log('app', app)
      console.log('server', server)
      console.log('compiler', compiler)
    }
  },
  module:{
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets:['env']
        }
      }]
  }
}
