const path = require('path')
// less文件的路径
const myTheme = path.join(__dirname, './src/assets/css/vantTheme.less')
module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/bilibili/' : '/bilibili/',
  configureWebpack: {
    devtool: 'eval-source-map'
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://localhost:9997',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${myTheme}";`
        }
      }
    }
  }
}
