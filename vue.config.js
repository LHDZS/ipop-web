const webpack = require('webpack')
module.exports = {
    publicPath:process.env.NODE_ENV=="production"?"./":"/",  //打包配置，解决页面空白的配置方案。
    lintOnSave: false,
    //配置跨域
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/web': {
                target: 'http://123.57.217.203:19800',//这里后台的地址模拟的;应该填写你们真实的后台接口
                changOrigin: true,//允许跨域
                ws: true,
                pathRewrite: {
                    '^/web': 'http://123.57.217.203:19800/web'//请求的时候使用这个api就可以
                }
            }

        }
    },
//配置别名信息
    chainWebpack: (config)=>{
        config.resolve.alias
            // .set('@', resolve('public'))
            // .set('assets',resolve('src/assets'))
            // .set('components',resolve('src/components'))
            // .set('static',resolve('src/static'))
            // .set("views",resolve("src/views"))
    },
    configureWebpack: {
        plugins: [
           new webpack.ProvidePlugin({
             $:"jquery",
             jQuery:"jquery",
             "windows.jQuery":"jquery"
           })
         ]
     }
}