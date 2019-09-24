# AJAX ( Asynchronous Javascript And XML )

- Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。

- Ajax = 异步 JavaScript 和 XML 或者是 HTML（标准通用标记语言的子集）。

- Ajax 是一种用于创建快速动态网页的技术。

- Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

- 传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。

## 获取&绑定数据

- 真实项目中大部分数据都不是写死的，而是动态绑定的

1. 从服务器端获取数据（基于 AJAX/JSONP 等技术，通过服务器端提供的数据 API 接口地址请求数据）

```javascript
var productDate = null;
//=>创建一个变量用于接收后台传输的数据
let xhr = XMLHttpRequest();
//=>创建一个XMLHttpRequest的实例
xhr.open("GET", "../json/商城排序.json", false);
//=>向后台请求数据，第一个参数表示请求数据的方式
//=>第二个参数表示请求数据的 地址
//=>第三个参数表示是否开启默认请求，true：开启，false：不开启

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    productDate = xhr.responseText;
  }
};
shr.send(null);
```

2. 把获取的数据及进行解析(格式化)。

> 获取的绝大部分数据都是`json`格式的，我们需要将其转换解析

```javascript
//=>window提供了两种转换json格式数据的方法
//=>window.JSON.parse  ==>将json格式的数据转换成普通的对象格式
//=>window。stringify  ==>将普通对象转换成json格式

//=>我们需要将后台请求的json格式数据转换成普通的对象类型
productData = window.JSON.parse(productData);
```

3. 把数据绑定在 HTML 页面中（数据绑定)。

> 依托获取的数据，把页面中需要显示的数据和结构都显示出来，
> 然后把创建好的数据和结构放入页面指定的容器中

字符串拼接

1. 普通字符串拼接
2. ES6 的模板字符串拼接。
3. 模板引擎：原理也是字符串拼接

动态创建 DOM
1.createElement
2.appendChild
不推荐使用：操作繁琐，性能的损耗非常大（DOM 回流）

```javascript
//=>基础ES6中的模板字符串绑定数据

//=>我们从后台请求的数据绑定到页面中，转换json格式的数据后是一个数组
//=>遍历数组然后将数组中的每一项拼接在一起
let list = document.getElementById("list");
let str = ``;
for (var i = 0; i < productData.length; i++) {
  //=>结构赋值：将数组中每一项上的对象结构赋值，提取出我们需要的信息
  let { title, img, price } = productData[i];

  //=>将提出的信息拼接到字符串中
  str += `<li><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>${price}</span>
        </a></li>`;
}
//=>将拼接好的字符串插入html元素中
list.innerHTML = str;
```
