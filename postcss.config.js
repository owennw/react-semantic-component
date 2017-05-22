var path = require('path')
var resolveId = require('resolve')

module.exports = {
  parser: 'sugarss',
  map: false,
  plugins: [
    require('postcss-smart-import')({ }),
    require('precss')({ }),
    require('autoprefixer')({ })
  ]
}
