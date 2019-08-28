 'use strict'
 const path = require('path')
 const resolve = dir => path.resolve(__dirname, ...dir);
 module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve('src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@comp': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@plug': path.resolve(__dirname, 'src/plugins'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': resolve(['src', 'components']),
      '@img': resolve(['src', 'assets', 'img']),
      '@js': resolve(['src', 'assets', 'JavaScript']),
      '@css': resolve(['src', 'assets', 'css']),
      '@base': resolve(['src', 'base']),
    }
  }
}