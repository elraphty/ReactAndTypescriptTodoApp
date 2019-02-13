const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {test: /.tsx$/, use: ['awesome-typescript-loader']}
    ]
  },
  plugins: []
}