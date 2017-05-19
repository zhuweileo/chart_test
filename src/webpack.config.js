var webpack = require('webpack');//下面要用到webpack的插件
var path = require('path');

module.exports={
    //路径是以webpack.config.js文件所在目录为基准
    entry:path.join(__dirname,"js/index.js"),
    output:{
        path: path.join(__dirname,"../dist/js"),
        filename:"dist.js"
    },
    resolve:{
        alias:{
            // "jquery":path.join(__dirname,"js/lib/jquery-3.1.1.min.js"),
            // "less":path.join(__dirname,"less"),
            // "echart":path.join(__dirname,"js/lib/echarts/echarts.js")
        }
    },
    module:{
        // rules:[
        //     {
        //         test:/\.less$/,
        //         use:["style-loader","css-loader","less-loader"]
        //     }
        // ]
    }
    // plugins:[
    //     new webpack.ProvidePlugin({
    //         $: "jquery"
    //     })
    // ]



}