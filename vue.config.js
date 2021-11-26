const timeStamp = new Date().getTime()
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const isProduction = process.env.NODE_ENV === 'production'
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const utils = {
  // eslint-disable-next-line space-before-function-paren
  assetsPath: function (_path) {
    const assetsSubDirectory =
      process.env.NODE_ENV === 'production'
        ? 'static' // 生产环境下的 static 路径
        : 'static' // 开发环境下的 static 路径

    return path.posix.join(assetsSubDirectory, _path)
  },
  // eslint-disable-next-line space-before-function-paren
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  }
}
module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      ]
    },
    plugins: isProduction
      ? [
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerHost: 'localhost',
          analyzerPort: 5000,
          defaultSizes: 'parsed',
          openAnalyzer: true,
          generateStatsFile: true,
          statsOptions: null,
          logLevel: 'info'
        }), new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, // 指定压缩文件
          threshold: 10240, // 超过10kb的文件进行压缩
          deleteOriginalAssets: false // 是否删除原文件
        })
      ]
      : [],
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.js】
      filename: `static/js/[name].${timeStamp}.js`,
      chunkFilename: `static/js/[name].${timeStamp}.js`
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://bigdata-api-stg.fcb.com.cn/storage', // sit
        // target: 'http://10.192.107.22:8081/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/api2': {
        target: 'https://bigdata-api-stg.fcb.com.cn/storage', // sit
        // target: 'http://10.192.107.22:8081/',
        changeOrigin: true,
        pathRewrite: {
          '^/api2': '/'
        }
      }
    }
  },
  chainWebpack (config = {}) {
    config.when(isProduction,
      config => {
        // 外部引入 libs
        config.plugin('html').tap(args => {
          // args[0].cdn = cdn
          return args
        })

        // 删除commonChunk
        config.optimization.delete('splitChunks')
        // 压缩代码
        config.optimization.minimize(true)
        // config.optimization.runtimeChunk('single')
        // 分割代码
        config.optimization.splitChunks({
          chunks: 'all',
          minSize: 30000,
          maxSize: 500000, // 将大于maxSize的文件进行拆分，不设置则不拆分
          minChunks: 1,
          maxInitialRequests: 3,
          maxAsyncRequests: 5,
          cacheGroups: {
            // common: {
            //   priority: 10,
            //   test: /[\\/]node_modules[\\/]/,
            //   chunks: 'async',
            //   name(module) {
            //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            //     // npm package names are URL-safe, but some servers don't like @ symbols
            //     return `npm.${packageName.replace('@', '')}`
            //   }
            // },
            vender: {
              priority: 30,
              test: /[\\/]node_modules[\\/]/,
              // https://github.com/facebook/create-react-app/issues/5372
              // chunks: 'initial',
              name: 'vendors'
            }
          }
        })
        // 取消内联标签之间的空白
        config.module
          .rule('vue')
          .use('vue-loader')
          .loader('vue-loader')
          .tap(options => {
            options.compilerOptions.preserveWhitespace = true
            return options
          })
          .end()
      })
  }
}
