const merge = require('webpack-merge')
const baseCofig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const proConfig = require('./webpack.pro.config')

let config = process.NODE_ENV === 'development' ? devConfig : proConfig
module.exports = merge(baseCofig, config)