var path = require('path');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'  //js string to style node
          },
          {
            loader: 'css-loader',   //transpile css
            options: {
              modules: true,
            }
          },
          {
            loader: "sass-loader"   //scss to css
          }
        ],
      },
    ]
  }
};
