const path = require('path');
//=>path  >>>   调用NODE的path模块

const HtmlWebpackPlugin = require('html-webpack-plugin');
//=>html-webpack-plugin  >>>  获取安装的html-webpack-plugin插件
//=>打包时自动在出口目录中创建一个html文件,会自动和打包的js文件进行关联


module.explorts = {
  mode: 'production',
  /**
   * mode  >>> 指定打包后文件是否压缩
   * production   >>> 压缩 默认使用,同时会弹出警告告知mode项没有被配置
   * development  >>> 不压缩
   */
  entry: "./src/js/index.js",
  //=>entry >>> 打包文件的入口,webpack会以设置的文件作为打包的起始文件
  output: {

    //=>output  >>> 设置webpack的出口目录,必须使用绝对路径
    path: path.resolve(__dirname, 'dist'),
    //=>path.resolve  >>> path中的一个方法
    //=>__dirname  >>> path中的一个变量,代表着当前webpack配置文件的所在路径,
    //=>dist  >>>  自主设置webpack的出口目录,webpack会和__dirname中的路径进行拼接
    filename: 'js/index.js'
    //=>filename   >>>   打包后的文件名  
    //=>js/index.js  >>> 打包后的文件放入js文件夹,js/是自主命名的文件夹,打包时会自动创建
  },
  plugins: [
    //=>plugins  >>>  配置插件,是一个数组
    new HtmlWebpackPlugin({
      //=>插件都是使用new
      template: './src/index.html',
      //=>template  >>> 使用一个模板中的html内容来决定创建的html文件的内容
      //=>会把模板中的内容进行合并,模板中的script引用的js文件如果不同则不会被合并,而是添加至新内容
    })
  ],
  module: {
    rules: [{
      test: /\.png$/,
      use: {
        loader: 'file-loader',
      }
    }, ]
  }
};