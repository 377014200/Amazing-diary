const path = require('path');

const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = dir => path.resolve(__dirname, ...dir);
// const fs = require('fs');

module.exports = {
   publicPath: '/',
   outputDir: 'dist',
   assetsDir: 'static',
   runtimeCompiler: true,
   // 生产模式下取消 eslint-loader 的警告和报错
   lintOnSave: process.env.NODE_ENV !== 'production',
   devServer:{
      //Specify a host to use. By default this is localhost. If you want your server to be accessible externally, specify it like this
      host: '0.0.0.0',
      //Specify a port number to listen for requests on:
      port: 8080,
      // 构建成功后不自动刷新页面
      hotOnly: false,

   },
   configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
         // 为生产环境修改配置...
         config.devtool =  'cheap-module-eval-source-map'
      } else {
         // 为开发环境修改配置...
         config.devtool =  'cheap-module-source-map'
      }
   },
   chainWebpack: config => {
      // 配置路径别名
      config.resolve.alias
         .set('@components', resolve(['src', 'components']))
         .set('@img', resolve(['src', 'assets', 'img']))
         .set('@js', resolve(['src', 'assets', 'JavaScript']))
         .set('@css', resolve(['src', 'assets', 'css']))
         .set('@base', resolve(['src', 'base']))


      if (process.env.NODE_ENV === 'production') {
         // 为生产环境修改配置...
         // 用来打包删除所有config以及debugger,true打开
         console.log(config
            .optimization
            .minimizer.toString(), "55")
            // .use(
            //    UglifyJsPlugin,
            //    {
            //       //test: /\.js(\?.*)?$/i,
            //       // include: /\/src/,
            //       uglifyOptions: {
            //          compress: {
            //             warnings: false,
            //             drop_console: true, // console
            //             drop_debugger: false,
            //             pure_funcs: ['console.log']// 移除console
            //          }
            //       }
            //    }
            // )
      }
      // 配置插件
      config
         .plugin('clean')
         .use(CleanWebpackPlugin)
   },
   // 传递第三方插件选项
   // pluginOptions: {
   //   'AMap': 'AMap',
   //   'QRCode': 'QRCode'
   // },
   // 全局注入通用样式
   // css: {
   //   loaderOptions: {
   //     stylus: {
   //       data: fs.readFileSync('./src/assets/stylus/mixins.styl', 'utf-8')
   //     }
   //   }
   // }
}
