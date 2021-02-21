// Vue.config.js
module.exports = {
    publicPath: '/', //基本路径
    outputDir: 'dist', //构建时的输出目录
    assetsDir: 'static', //放置静态资源的目录
    indexPath: 'index.html', //html的输出路径
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    devServer: {
        open: true,
        proxy: {
            '/dev-api': {
                target: 'http://api.yckindergarten.com.cn',//设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite:{
                    '^/dev-api':''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 
                              //比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login’即可
                }
            }
            // '/foo': {
            //     target: '<other_url>'
            // }
        }
    }
}