# webpack

> `webpack`是一个现代的`javascript`引用程序的静态模块打包工具,

- 模块: 将一个完整的项目按照功能划分为不同的功能块

`webpack .src/index.js ./dist/bundle.js`;

## 入口

> `entry point`只是`webpack`应该使用哪一个模块做为构建其内部依赖图的开始,默认的入口是`./src/index.js`

```javascript
moudle.exports = {
  entry: "自定义入口"
};
```

## 出口

```javascript
moudle.exports = {
  output: {
    path: path.resolve(\_\_dirname, "dist"),
    filename: "hundle.js"
  }
};
```

## loader

## 插件

## 配置

## package
