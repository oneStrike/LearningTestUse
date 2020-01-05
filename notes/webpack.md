# webpack

> `webpack`的核心就是一个模块的打包工具,当开发使用了基于`CommonJS`,`ES Moudule`,`CMD`,`AMD`规范的模块时,`webpack`都可以讲这些模块进行打包,除此之外,`CSS`文件,图片等也可以进行打包

- 模块: 将一个完整的项目按照功能划分为不同的功能块

全局安装 `npm install webpack webpack-cli -g`;
全局删除 `npm uninstall webpack webpack-cli -g`;
本地全局版本查询 `webpack -v`

项目安装 `npm isntall webpack webpack-cli --save-dev`
项目删除 `npm uninstall webpack webpack-cli`
本地项目版本查询 `npx webpack -v`

指定版本安装 `npm install webpack@version --save-dev`

查询历史版本 `npm info webpack`

指定打包配置文件 `npx webpack --config webpackconfig.js`

| 指令       | 含义       | 简写 |
| ---------- | ---------- | ---- |
| --save-dev | 开发时依赖 | -D   |

## 基本配置

```javascript
mode: 'production',
  /**
   * mode  >>> 指定打包后文件是否压缩
   * production   >>> 压缩 默认使用,同时会弹出警告告知mode项没有被配置
   * development  >>> 不压缩
   */
  entry:"./src/js/index.js",
  /**
   * entry >>> 打包文件的入口,webpack会以设置的文件作为打包的起始文件
   * 也可以设置为对象,设置为对象时可以设置多个入口文件
   * entry:{
   *  main:'./src/js/main.js',
   *  sun:'./src/js/sub.js',
   * }
   * 设置多个入口文件后需要在output设置
   */
  output:{
    //=>output  >>> 设置webpack的出口目录,必须使用绝对路径
    path: path.resolve(__dirname, 'dist'),
    //=>path.resolve  >>> path中的一个方法
    //=>__dirname  >>> path中的一个变量,代表着当前webpack配置文件的所在路径,
    //=>dist  >>>  自主设置webpack的出口目录,webpack会和__dirname中的路径进行拼接
    filename: 'js/index.js'
    /**
     * filename   >>>   打包后的文件名
     * js/index.js  >>> 打包后的文件放入js文件夹,js/是自主命名的文件夹,打包时会自动创建
     * 如果有多个入口文件时需要使用占位符
     * js/[name].js
     * [name]  >>> 占位符,根据入口文件的设置动态的设置文件名
     */
    publicPath:'www.cdn.com',
    //==> publicPath >>> 在打包后的文件名前添加一个路径,可以是本地的也可以是网络地址
  },
```

## loader

> `webpack`的加载程序,可以处理一些`webpack`无法处理的文件,`webpack`只可以处理`js`文件,除此之外的文件格式都需要使用对应的`loeader`来进行预处理

### 图片

- `url-loader`
- `file-loader`

```javascript
module: {
  rules: [
    //=>module rules  >>> loader的配置区域,执行顺序是从下到上,从右到左
    {
      test: /\.(jpe?g|png|gif)/,
      //=>test  >>> loader的正则匹配,只会处理匹配的文件
      use: [
        //=> use >>> loader的配置项
        {
          loader: "url-loader",
          //=> loader >>> 指定处理匹配文件的loader
          options: {
            //=>options  >>> loader的具体配置项
            limit: 8192,
            //=>limit  >>> ule-loader的配置项,当文件小于设置的大小使用Base64处理,超过使用file-loadre处理
            name: "[name]_[hash:5].[ext]",
            /**
             * name  >>> 配置文件处理后的文件名
             * [name]   >>> 使用源文件命名
             * [hash:5]  >>> 对文件名进行哈希值拼接,哈希值为5位
             * [ext]  >>>  使用文件原有的格式
             */
            outputPath: "img/"
            //=>outputPath  >>> 配置该loader处理后的文件的输出路径
          }
        }
      ]
    }
  ];
}
```

### 样式

- `css-loader`
- `style.loader`
- `less-loader`
- `less`

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
      /**
       * loader从下往上,从右往左执行
       * css-loader  >>> 解析引入的css文件
       * style-loader  >>> 展示css样式
       */
    },
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 2,
            /**
             * importLoaders:2  >>> less样式文件中如果也引入一个less样式文件,默认情况下会直接
             * 使用css-loader,style-loader进行处理,添加importLoaders即引入的less样式文件
             * 也从postcss-laoder开始一次向上处理
             **/
            modules: true
            /**
             * modules  >>>  开启css样式模块化
             * 开启式导入的css或者预编译css文件时不能使用
             * 全局导入的方式,需要自定义名称,在需要添加样式的
             * 的clsss类名或者id类名前加入css文件的别名
             * 不需要使用引号,添加之后只会对当前的元素进行渲染
             * 不会对其他模块的同名元素进行渲染
             **/
          }
        },
        {
          loader: "less-loader"
        },
        {
          loader: "postcss-loader"
          /**
           * postcss-loader  >>>　自动添加厂商前缀
           * 需要配合autoprefixer插件使用,并且在项目根目录下
           * 创建postcss.config.js文件作为配置文件
           * npm install autoprefixer --save-dev
           * module.exports={
           *   plugins:[
           *     require('autoprefixer')
           *   ]
           * }
           **/
        }
      ]
    }
  ];
}
```

### 字体

```javascript
module.exports = {
  rules: [
    {
      test: /\.(woff2|woff|svg|ttf|eot)$/,
      use: [
        {
          loader: "file-loader"
          /**
           * 使用file-loader处理第三方字体文件
           **/
        }
      ]
    }
  ]
};
```

## plugin

```javascript
plugins: [
  //=>plugins  >>>  配置插件,是一个数组
  new HtmlWebpackPlugin({
    //=>插件都是使用new
    template: "./src/index.html"
    //=>template  >>> 使用一个模板中的html内容来决定创建的html文件的内容
    //=>会把模板中的内容进行合并,模板中的script引用的js文件如果不同则不会被合并,而是添加至新内容
  })
];
```
