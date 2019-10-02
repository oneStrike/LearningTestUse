# jQuery

## 书写规范

1. 将`jQuery`的代码放在一个函数中执行

> 之所以这样使用是为了防止在`DOM`加载完成之前就执行`jQuery`代码,如果在页面文档加载完成之前执行`jQuery`有可能会操作失败。

```javascript
$(document).ready(function() {
  //=>代码
});

$(function() {
  //=>代码
  //=>简写的形式，效果相同
});
```

## jQuery 选择器

`jQuery`可以使用绝大部分`css`中的选择器来获取页面中的元素，返回的是一个类数组，返回的类数组是`jQuery`的一个实例

使用`$(selector,context)`来用获取页面中的元素

1. `selector`：选择器的类型（字符串，函数，元素对像）
2. `context` : 指定获取元素的上下文，默认是`document`，(可选)

> 返回的是一个类数组，索引的位置上存放着获取到的元素，返回的类数组本身是`jQuery`的一个实例。索引位置上的元素是原生 `js` 对象。返回的实例无法使用原生`js`的方法，原生`js`也无法使用`jQuery`中的方法。因为他们无法相互访问其对应的原型链。

```javascript
$(document.body);
//=>获取body元素

$("div");
//=> 返回的是一个类数组集合，获取到的元素依次存在类数组的索引中
```

由于原型链的机制，`jQuery`和原生的`js`中方法无法互用，如果要使用对方的方法，就需要转换成对方的一员

**原生转`jQuery`**

直接使用`$()`将原生的`js`对象包裹起来就可以，因为`$()`就是创建一个`jQuery`的一个实例

```javascript
let body = document.body;
//=>原生js获取页面中元素的方法

$(body);
//=>返回的就是jQuery的一个实例，可以直接使用jQuery中的方法

body.tagName;
//=>'BODY'

$(body);
//=>undefined

//=>方法无法互用
```

**`jQuery`转原生**

`jQuery`获取到的类数组中存储的就是原生`js`对象，哦我们只需要将索引位置上的原生对象取出即可。

```javascript
let $div = $("div");
//=>获取到页面中所有的div标签，获取到的元素会存放在类数组的索引中

/**
 * 一般我们在基于jQuery获取页面中的元素时。
 * 接收的变量一般会在开头加上 $ ,这是一个不成文的规矩
 * 也可以方便我们辨认当前对象的类
 */

//=>我们直接将类数组中的元素对象取出就可以转换成原生js对象
let nativeDiv = $div[0];
//=>取出其中的某一项转成原生js对象

//=>jQuery中也提供了一种方法可以获取类数组中的原生js对象
let nativeDiv = $div.get[0];
//=>等价于  ==>$div[0]

//=>另一种获取方法
let div = $div.eq[0];
//=>基于这种方法获取到的对象会转成jQuery实例对象
```

如果在选择器中书写`HTML`标签，则可以基于`appendTo`插入到文档页面中

```javascript
let $div = $('<div id="AA">123</div>');
$div.appendTo(document.body);
//=>创建一个div标签然后插入到body中
```

如果判断一个对象是不是原生`js`的对象的话可以使用`nodeType`，只有原生`js`对象才拥有这个属性，`jQuery`的实例使用这个属性会返回`undefined`。

```javascript
let body = document.body;
body.nodeType;
//=>1:节点类型

body = $("body");
body.nodeType;
//=>undefined jQuery的实例没有这个属性
```

## 常用方法

**`each`**

`jQuery`中的`each`方法有三种书写方式，都可以遍历数组、类数组、json、对象。类似于数组的`dorEach`方法

1. `$.each()`

直接调用`jQuery`中的私有`each`属性，和`for/in`循环作用一样

```javascript
let obj = { name: "绫", age: 18, sex: "女" };
$.each(obj,funciton(key,value){
    console.log(key,value);
});
/**
 * key输出的对象的属性名  value输出的是对应的值
 * 和for/in循环一样，会遍历出我们设置在原型中的一些方法和属性
 */

//=>遍历数组
$.each([10,20,30,40,50],funciton(index,item){
    console.log(index,item);
});
/**
 * index会输出索引，item会输出数组对应的值
 * 和forEach不同的是each第一个参数代表的是索引
 * 第二个参数代表的才是数组中的每一项
 */
```

2. `$().each()`

使用`jQuery`原型中的`each()`方法,通常遍历`DOM`的节点时使用这种方法

```html
<!-- 给所有的li绑定点击事件 -->
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
<script>
  $("ul li").each(function(index, item) {
    //=>获取ul下所有的li标签，并遍历获取到的元素集合
    $(this).click(function() {
      $(this).css({
        fontSize: "30px"
      });
    });
  });
  /**
   * $(this).click(function(){});
   * 其中的this指向的是类数组中的每一个li标签
   * this等同于 ==>item
   * $(this)表示将每一个遍历出来的li标签转换成jQuery的实例
   * 如果不转换则没办法调用jQuery上的 click方法
   * 将this换成item也可以达到同样的效果
   * 遍历时传递的参数也不会影响效果的显示
   * 因为点击事件的this就是当前点击的li标签
   */

  //=>可以不经遍历直接给li添加事件
  $("ul li").click(function() {
    $(this).css({
      fontSize: "30px"
    });
  });

  /**
   * 可以达到相同的效果
   * 在绑定click事件的时候jQuery会默认的把获取的元素集合each
   * 就相当于给每一个li标签都绑定了click点击事件
   * 大部分情况下jQuery都会把我们的元素集合进行each遍历
   */
</script>
```
