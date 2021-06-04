const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    content: './src/content.js',
    home: './src/home.js',
    menu: './src/menu.js',
    contact: './src/contact.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
