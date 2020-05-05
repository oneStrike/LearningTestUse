# 文档对象模型

Document Object Model

## DOM树

当浏览器加载`HTML`页面的时候，首先就是计算`DOM`结构，计算后的`DOM`结构就是`DOM树`，把页面中的`HTML`标签分析出层级关系

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <div class="box" id="box">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <div>a</div>
      <div>b</div>
      <div>c</div>
    </div>
  </body>
</html>
```

[![u8Q52n.png](https://s2.ax1x.com/2019/09/29/u8Q52n.png)](https://imgchr.com/i/u8Q52n)

`DOM树`描述了标签于标签之间的关系，只要知道其中一个标签，就可以根据`DOM`中提供的属性或者方法获取到页面中的任意一个标签

## DOM操作

浏览器在载入`HTML`文档的时候都会生成`Document`对象，而`Document`对象是`window`全局对象的一个属性，可以使用`window.document`访问

### 获取

**document.getElementById**

通过标签的`ID`获取对应的标签，如果存在重复的`ID`，也只会获取到第一个标签

在`IE6-7`中，会把表单元素`input`的`name`属性当作`ID`获取，尽量不要让`input`的`name`属性和`id`重复

**[context].getElementsByTagName**

在指定的上下文中根据标签名获取到一组元素集合

1. 获取的元素集合是一个类数组
2. 会将上下文中所有的同名标签获取
3. 无论有没有获取到值，返回的都是一个集合

**[context].getElementsByClassName**

在指定的上下文中根据标签的`calss`类名获取到一组元素集合

不兼容`IE6-8`

**document.getElementsByName**

在`Document`上下文中根据表单元素的`name`属性获取一组元素集合

**[context].querySelector**

在指定的上下文中基于`css`选择器获取特定的一个标签，即使选择器匹配到多个符合规则的元素，也只会返回第一个

**document.querySelectorAll**

根据`css`选择器获取到一组元素集合

**document.head**

获取`head`标签

**document.body**

获取`body`标签

**document.documentElement**

获取`html`标签

```javascript
//=>需求：获取浏览器一屏幕的宽度和高度（兼容所有的浏览器）
document.documentElement.clientWidth || document.body.clientWidth;

document.documentElement.clientHeight || document.body.clientHeight;
```

面试题：获取当前页面中所有 ID 为 HAHA 的和元素（兼容所有的浏览器）

```javascript
//=>不能使用querySelectorAll

/*
 * 1.首先获取当前文档中所有的HTML标签
 * 2.依次遍历这些元素标签对象，谁的ID等于HAHA，我们就把谁存储起来即可
 */
function queryAllById(id) {
  //->基于通配符*获取到整个文档中所有的HTML标签
  var nodeList = document.getElementsByTagName("*");

  //->遍历集合中的每一项，把元素ID和传递ID相同的这一项存储起来
  var ary = [];
  for (var i = 0; i < nodeList.length; i++) {
    var item = nodeList[i];
    item.id === id ? ary.push(item) : null;
  }
  return ary;
}
console.log(queryAllById("HAHA"));
```

### 增删改

**createElement**

创建一个元素标签,标签名须大写，`document.createElement('DIV')`

**appendChild**

将元素节点插入到指定容器的末尾，如果当前容器已经存在此节点，并不是添加，而是将已存在的节点移动至容器的末尾，`[container].appendChild([newElement])`

**insertBefore**

将元素节点插入到指定的元素标签之前，`[contaienr].insertBefore([newElement],[oldElement])`

**cloneNode**

克隆元素节点
`[curEle].cloneNode()`浅克隆，只克隆当前的元素节点
`[curEle].cloneNode(true)`深度克隆，当前的元素节点以及子节点都会克隆

**removeChild**

删除元素节点,`[container].removeChild(delEle)`

**Attribute**

1. `setAttribute`，给元素节点添加自定义属性
2. `getAttribute`,获取元素节点的自定义属性
3. `removeAttribute`,删除元素节点的自定义属性

`Attribute`操作的自定义属性名会显示在`DOM`结构中

```javascript
let box = document.getElementById('box');
box.setAttribute('name','a');
//=>添加一个自定的属性，属性名为 name ，属性值为 a
box.getAttribute('name');
//=>获取一个自定的属性 name
box.removeAttribute('name');
//=>删除一个自定义的属性 name
```

## 节点

凡是出现在`HTML`文档中的都可以称作是一个节点

1. 元素节点（HTML标签）
2. 文本节点（文本内容）
3. 注释节点（注释内容）
4. 文档节点（Document）

根据属性区分不同的节点

| 节点 | nodeType | nodeName  | nadeValue |
| ---- | -------- | --------- | --------- |
| 标签 | 1        | 标签名    | null      |
| 文本 | 3        | #text     | 文本内容  |
| 注释 | 8        | #comment  | 注释内容  |
| 文档 | 9        | #document | null      |

在标准浏览器中会把空格/换行等都当做文本节点处理

### 节点属性

**parentNode**

获取当前节点的上一个父节点

**childNodes**

获取当前节点的所有直属子节点，包含元素节点，文本节点等

**children**

获取当前元素所有的子节点，在`IE6-8`中会将注释节点当作元素节点获取,标准浏览器中只会获取元素节点，不会获取文本节点等

**previousSibling**

获取当前节点的上一个兄弟节点，文本节点等也会被当作兄弟节点

**previousElementSibling**

获取当前节点的上一个兄弟节点，只会获取到元素节点，不兼容`IE6-8`

**nextSibling**

获取当前元素的下一个兄弟节点，文本节点等也会被当作兄弟节点

**nextElementSibling**

获取当前节点的下一个兄弟节点，只会获取元素节点，不兼容`IE6-8`

**firstChild**

获取当前节点的第一个子节点，获取到的可能是文本节点等

**firstElementChild**

获取当前节点的第一个子节点，只会获取元素节点，不兼容`IE6-8`

**last**

获取当前元素的最后一个子节点，获取到的可能是文本节点等

**lastElementChild**

获取当前节点的最后一个子节点，只会获取到元素节点，不兼容`IE6-8`

兼容所有浏览器只获取元素节点

```javascript
let box = document.getELementById('box');
//=>获取id为box的元素下所有的元素子节点

function children(curEle){
  var nodeList = curEle.childNodes;
  let result = [];
  for(let i = 0; i < nodeList.length; i++){
    let item = curEle[i];
    if(item.nodeType === 1){
      //=>根据节点类型判断获取的是什么节点
      result.push(item)
    }
  }
  return result
}
children(box)
```

**innerHTML**

获取或者设置元素节点的内同

```javascript
let box = document.getElementById('box');
box.innerHTML;
//=>获取元素的内同，包括所有的子节点和空白文本

box.innerHTML = 123;
//=>设置元素的内容，默认情况下会覆盖原有的内容

box.innerHTML += box.innerHTML;
//=>将元素的内容克隆一份在重新添加到元素中
```

**innerText**

获取或者设置元素的元素的文本内容，用法和`innerHTML`一致

**name**

获取元素的`name`属性的值

只能应用于下列元素：`<a>, <applet>, <button>, <form>, <frame>, <iframe>, <img>, <input>, <map>, <meta>, <object>, <param>, <select>, and <textarea>`。如果其他标签设置`name`属性也无法获取值

**id**

获取元素节点的`id`

**className**

获取元素的`class`类名

```javascript
element.className += ' red pink';
//=>为元素添加类名，需要以空格开始，否则会拼接在一起，导致类名失效
```

**tagName**

获取元素的标签名

**classList**

```javascript
element.classList.add('red');
//=>为元素添加一个新的类名

element.classList.remove('red');
//=>删除元素的class类名

element.classList.toggle('red');
//=>类名存在则删除，类名不存在就添加

element.classList.contains('red');
//=>查找类名是否存在，返回一个布尔值

element.classList.replace('old','new');
//=>将原有的类名替换为一个新的类名
```

### 映射机制

通过js提供的方法获取到页面中的元素后，会以对象的形式存入堆内存当中，当修改元素对象的时候，页面中的元素也会发生改变

```javascript
let box = document.getElementById('box');
box.innerText='132';
//=>代码执行后元素的内容就会发生改变
```

`querySelectorAll`方法是静态获取页面中的元素，获取到的元素对象都是固定的，即使修改页面中的元素，元素对象也不会发生变化，只有重新获取一次才能得到变化后的元素对象

```javascript
let liList = document.querySelectorAll('li');
//=>通过标签名获取页面中的所有 li 标签

document.body = '1';
//=>将body内的所有元素替换，li不会被替换

console.log(liList);
//=>依旧是之前的内容

liList = document.querySelectorAll('li');
//=>只有重新获取才能得到最新的元素标签
```

除了`querySelectorAll`之外，所有获取页面中元素的方法都是动态的，当页面中的元素发生改变的时候，元素对象的数据也会发生改变

### 回流重绘

浏览器的渲染流程

1. 加载`HTML`文档，解析出`DOM Tree`
2. 加载`css`样式表
3. 生成渲染树`render tree`
4. 根据`render tree`渲染页面

`render tree`是`DOM tree`和`css`样式表结合后产生的，`css`的`display：none`和`head`标签不会添加进`render tree`中，因为他们不会影响布局，使用`visibility:hidden`的标签仍会被添加进`render tree`中

**回流（reflow）**

当页面中的`HTML`文档发生改变的时候，例如`增删改`就会造成回流(reflow),每一次的回流都会使浏览器重新渲染页面，过多的造成回流会影响性能

**重绘（repaint）**

当页面上标签的`css`样式发生改变时就会造成重绘，如果样式的改变影响到了页面的布局，那么也会造成回流

**回流一定会造成重绘，但是重绘不一定会造成回流**

```css
div {
  width: 200px;
  height: 200px;
  background: orange;
  font-size: 14px;
}

/**
 * 只修改一些不影响页面整体布局的样式，只会造成回流
 * 例如将 background改变为green，这样只会造成重绘，
 * 但是我们修改  width: 300px，
 * 就会造成回流，因为div宽度的改变会影响整个页面的布局，
 * 其他的标签也会发生改变;
 */
```

**createDocumentFragment**

一个虚拟的文档节点，并不是`DOM tree`中的一部分，拥有一块独立的空间

当需要将多个元素插入到页面中时，可以先存储在文档碎片中，然后再将文档碎片插入到页面中，这样就只会造成一次回流

```javascript
let frg = document.createDocumentFragment();
for (var i = 0; i < 10; i++) {
  var div = document.createElement("DIV");
  frg.appendChild(div);
  //=>将创建的div插入文档片段中
}
document.body.appendChild(frg);
//=>将文档片段统一插入body中

/*
 *我们统一将需要创建的标签插入到文档片段中，然后在统一的插入到DOM树中
 * 这样就只会造成一次回流，性能会比直接在循环内直接插入到DOM树中好很多
 *
 *它并不支持使用innerHTML添加文档片段，使用这个方法也只是给它添加一个属性而已
 */

/*
 *创建的两种方式
 *document.createDocumentFragment() ==>兼容所有的浏览器
 *new Fragment()  ==>构造函数方法创建的IE并不支持
 */
```

**`读写分离`**

一些新版本的浏览器为了优化性能增加的一个机制

```javascript
//=>假如我们要修改一个元素的样式
let body = document.body;
body.style.backgroundColor = "red";
body.style.width = 200 + "px";
body.style.height = 300 + "px";
/*
 *当我们需要修改一个元素的多个样式是可以书写在一些
 *浏览器在就解析时会将修改的样式先暂存起来，
 *当遇到需要读取这些样式的时候才会应用到页面中
 *这样会减少DOM重绘和回流的产生，
 *
 *如果我们在修改完背景颜色之后访问body的背景颜色，就会造成一次DOM重绘
 *但是我们在修改完所有的样式之后再进行访问只会产生一次DOM回流
 */
```

## 盒子模型

### client

都是只读属性，无法修改

**clientTop**

获取元素的上边框，不包含`padding`和`margin`

**clientLeft**

获取元素的左边框宽度，不包含`padding`和`margin`

**clientWidth**

获取一个元素的可视宽度，不包含边框，元素中文本溢出的内容和`overflow:hidden`都不会影响获取到的宽度，如果元素没有设置宽度，获取到的就是内容撑开的宽度

`width + padding` = `clientWidth`

**clientHeight**

获取一个元素的可视高度，不包含边框，元素中文本溢出的内容和`overflow:hidden`都不会影响获取到的高度，如果元素没有设置高度，获取到的就是内容撑开的高度

`height + padding` = `clientHeight`

### offset

都是只读属性，无法修改

**offsetParent**

获取当前元素的定位父元素，如果所有的父元素都没有`position`属性，就返回`body`标签

在 Webkit 内核中，如果元素为隐藏的（该元素或其祖先元素的 `style.display` 为 `none`），或者该元素的 `style.position` 被设为 `fixed`，则该属性返回 `null`。

在 IE 9 中，如果该元素的 `style.position` 被设置为 `fixed`，则该属性返回 `null`。（`display:none` 无影响。）

**offsetWidth**

获取一个元素的布局宽度，`width + border + padding + scrollbar`

**offsetHeight**

获取一个元素的布局高度，`height + border + padding + scrollbar`

**offsetTop**

获取当前元素相对于`offsetParent`的上偏移量，如果`offsetParent`不存在则是`body`

**offsetLeft**

获取当前元素相对于`offsetParent`的左偏移量，如果`offsetParent`不存在则是`body`

在 Webkit 内核中，如果元素为隐藏的（该元素或其祖先元素的 `style.display` 为 `none`），或者该元素的 `style.position` 被设为 `fixed`，则该属性返回 `null`。

在 IE 9 中，如果该元素的 `style.position` 被设置为 `fixed`，则该属性返回 `null`。（`display:none` 无影响。） 

### 元素样式

**style**

通过`style`可以获取到元素书写在行内的样式，但是无法获取到样式表中的样式，使用`style`设置元素样式也会设置到行内，无论获取还是设置都无法操作样式表中的样式

```html
<div id="box" style="width:100px;height:100px;background:red"></div>
<style>
  #box{
    font-size:20px;
  }
</style>
<script>
  let box = document.getElementById('box');
  console.log(box.style.fontSize)
  //=>无法获取到任何值，只能获取到行内的样式

  console.log(box.style.width);
  //=>100px

  console.log(box.style.backgroundColor);
  //=>获取的样式是符合属性的时候需要使用小驼峰，并且去掉 -

  box.style.backgroundColor='red';
  //=>设置元素的样式

  box.style.width = 100 + 'px';
  //=>带有单位的需要使用字符串拼接
</script>
```

**getComputedStyle**

该方法可以返回一个对象，对象中包含元素的所有样式，包括浏览器自动添加的默认样式，`getComputedStyle`是动态获取的，样式改变之后，对象属性的值也会发生改变

```html
<div id="box" style="width:100px;height:100px;background:red">
<style>
  #box{
    padding:10px;
    margin:10px;
    font-size:16px;
  }
</style>
<script>
  let box = document.querySelector('#box');
  let style = window.getComputedStyle('box');
  console.log(style.padding);
  //=>10px,可以获取到 sytle 标签中的样式

  style.backgroundColor = 'red';
  //=>复合属性的写法和 style 对象一致
</script>
```

IE9 以下的低版本浏览器并不支持这个方法，在 IE 中具有相同功能的是一个属性。 `currentStyle`，它不是方法，而是一个属性，返回的也是一个对象

## 事件

当用户和网页进行交互的时候，比如鼠标点击，键盘按下，网页刷新，浏览器给予用户的反馈，浏览中有事件监听者，当监听到用户执行操作的时候，浏览器就会自动执行我们书写的事件方法

### 事件绑定

```javascript
//=> DOM0
let body = document.body;
body.onclick = function(){};

//=> DOM2, 不需要加 on
body.addEventListener('click',function(){},false)

//=>兼容 IE 6-8 的写法，需要加上 on
body.attachEvent('onclick',function(){})
```

`DOM0`的事件绑定机制就是再给元素的私有属性赋值，相同的事件只允许绑定一个方法，绑定多个的时候也会被后面的覆盖，取消事件只需要将将事件设置为`null`就可以了

```javascript
let box = document.getElementById('box');

box.onclick = function(){
  console.log(1)
}

box.onclick = function(){
  console.log(2)
}
/**
 * 同一个事件绑定多个方法的时候
 * 只有最后绑定的才会生效
 **/

 box.onclick = null;
 //=>取消绑定的事件
```

`DOM2`的事件绑定并不会给元素自身添加一个私有的属性，而是将绑定的事件添加进事件池中，只要事件的回调函数不重复， 就可以给同一个事件添加多个回调函数

```javascript
let box = document.getElementById('box');

box.addEventListener('click',function(){
  console.log(1)
})

box.addEventListener('clkick',function(){
  console.log(2)
})
//=>以上两个方法都会触发，并不会覆盖
```

在使用`addEventListener`添加事件的时候，浏览器会将`元素本身，绑定的事件，事件的方法，方法的执行阶段`都添加进事件池当中，当给同一个事件添加多个方法的时候，浏览器会进行全等比较，`绑定事件的元素，绑定的事件，事件的方法，方法的执行阶段`只有当全部都相等的时候，才会认为重复添加，并由后面的将前面的覆盖，只要有一个不相等，就会添加新的方法

```javascript
let box = document.getElementById('box');

function t(){
  console.log(1)
}

box.addEventListener('click',t)
box.addEventListener('click',t)
//=>事件元素，绑定的事件，事件的方法，方法的执行阶段 都是一样的，
//=>此时就只会成功绑定一个，由后面的将前面的覆盖
```

`addEventListener`支持传递三个参数

1. 绑定的事件
2. 事件的方法
3. 方法的执行阶段

```javascript
box.addEventListener('click',callback,true);
//=>为true 时，表示方法在捕获阶段执行

box.addEventListener('click',claaback,false);
//=>不传递或者传递false时，表示方法在冒泡阶段执行
```

`addEventListener`中只有当绑定的方法是一个剧名函数时才可以删除，如果绑定的回调是一个匿名函数，则无法删除

```javascript
function t(){};
box.addEventListener('click',t);
box.removeEventListener('click',t);
/**
 * 如果事件的方法执行在捕获阶段，需要传递
 * true 才可以成功的删除，如果绑定的是一个
 * 匿名的函数，才没有办法删除
 **/
```

### 兼容

标准浏览器 VS IE 高版本

1. 如果同一个元素拥有多个相同事件的方法,如果需要在一个方法执行之前删除的话,标准浏览器会立即删除,一次都不会执行,而 IE 高版本浏览器中则会执行一遍,其次再删除

```javascript
let box = document.querySelector(".box");
function test1() {
  console.log(1);
}
function test2() {
  console.log(2);
  box.removeEventListener("click", test4);
}
function test3() {
  console.log(3);
}
function test4() {
  console.log(4);
}
box.addEventListener("click", test1);
box.addEventListener("click", test2);
box.addEventListener("click", test3);
box.addEventListener("click", test4);
/**
 * 在标准浏览器中会一直输出1 2 3 ,
 * 而IE高版本浏览器首次会输出1 2 3 4
 * 其次才会输出1 2 3
 * 对于删除的事件方法高版本IE会先执行一次在做删除
 * 标准浏览器则会直接删除,并不会自行
 */
```

标准浏览器 VS IE 低版本

- `addEventListener`/`removeEventListener` 标准浏览器
- `attachEvent`/`detachEvent` IE 低版本

1. 语法区别

> IE 地版本使用的`attachEvent`中所绑定的事件需要在前面加`on`,而标准浏览器的`addEventListener`则不需要加`on`,直接书写事件即可

```javascript
var box = document.getElementsByTagName("div")[0];
box.attachEvent("onclick", function() {});
//=>IE低版本书写方式
box.addEventListener("click", function() {});
//=>标准浏览器书写方式
```

2.`this`

> 在标准浏览器中事件方法中的`this`会指向绑定方法的元素,而 IE 低版本则会指向`window`

```javascript
var box = document.getElementsByTagName("div")[0];

box.addEventListener("click", function() {
  console.log(this);
  //=>this  ==>box
});
box.attachEvent("onclick", function() {
  console.log(this);
  //=>this  ==>window
});
```

3.反复重复

> 在标准浏览器中浏览会在将方法添加进事件池之前进行判断,会将相同事件的相同方法过滤掉,而 IE 低版本浏览器中并不会判断,只要是添加给当前元素的方法都会执行,不会过滤掉重复绑定的方法

```javascript
var box = document.getElementsByTagName("div")[0];

function test() {
  console.log(1);
}

box.attachEvent("onclick", test);
box.attachEvent("onclick", test);
//=>会执行两次,并不会去除重读的方法

box.addEventListener("click", test);
box.addEventListener("click", test);
//=>只会执行一次,会将严格比较下的重复项过滤掉,
```

4.执行顺序

> 标准浏览器的执行顺序是根据添加进事件池的顺序决定的,先添加的先执行,而 IE 低版本浏览器则是无序执行,没有规律

**事件对象.**

通用的属性和方法

在触发事件时浏览器会传递给执行事件的函数一个实参,不同的事件类型包含着不同的属性和方法,

```javascript
let body = document.body;
body.onclick = function(e) {
  //=>e  代表用来接收浏览器传递到的参数,里面有一些通用的属性
  console.log(e.type);
  //=>当前的事件类型（鼠标事件，键盘事件等...）
  console.log(e.target);
  //=>当前的事件源,(即哪个对象触发的事件)
  e.preventDefault();
  //=>阻止浏览器的默认行为（如a标签的跳转）
  e.stopPropagation();
  //=>阻止事件的冒泡
};
```

## 鼠标事件

| 事件        | 描述         |
| ----------- | ------------ |
| click       | 鼠标点击     |
| dblclick    | 鼠标双击     |
| mousedown   | 鼠标按下     |
| mouseup     | 鼠标抬起     |
| mousemove   | 鼠标移动     |
| mousewheel  | 滚轮滚动     |
| contextmenu | 鼠标右键点击 |
| mouseover   | 鼠标经过     |
| mouseout    | 鼠标移出     |
| mouseenter  | 鼠标进入     |
| mouseleave  | 鼠标离开     |

`mouseover/mouseout`和`ouseenter/mouseleave`的大致功能是一值的，不同的时`mouseover/mouseout`拥有事件冒泡的机制，`mouseenter/mouseleave`阻止了这一机制，在嵌套层级关系的元素应该使用`mouseenter/mouseleave`，因为它们组织了事件的冒泡，不会过多的触发不必要事件

```javascript
//=>假设一个大的元素中包裹着一个小的元素,同时两个元素都拥有鼠标划入划出事件

maxBox.onmouseover = function() {
  console.log("maxBox  over");
};
maxBox.onmouseout = function() {
  console.log("maxBox  out");
};
minBox.onmouseover = function() {
  console.log("minBox  over");
};
minBox.onmouseout = function() {
  console.log("minBox  out");
};
/**
 * 从maxBox的左侧进入,右侧划出的话一共会触发8次鼠标事件
 * 1.'maxBox  over'  左侧进入maxBox,触发maxBox  over
 * 2.'maxBox  out'   离开maxBox,触发maxBox  out
 * 3.'minBox  over'  进入minBox,触发minBox  over
 * 4.'maxBox  over'  事件冒泡,触发maxBox  over
 * 5.'minBox  out'   离开minBox,触发minBox out
 * 6.'maxBox  out'   事件冒泡,触发maxBox  out
 * 7.'maxBox  over'  进入maxBox,触发maxBox over
 * 8.'maxBox  out'   右侧离开maxBox,触发maxBox out
 */

//=>如果使用mouseenter和mouseleave则不会产生冒泡,只会触发四次
/**
 * 1.'maxBox enter' 左侧进入maxBox,触发maxBox  enter
 * 2.'minBox enter' 离开maxBox,进入minBox,触发minBox enter
 * 3.'minBox leave' 离开minBox,进入maxBox,触发minBox leave
 * 4.'maxBox leave' 离开maxBox,触发maxBox leave
 */
```

**鼠标事件对象.**

```javascript
let body = document.body;
body.onclick = function(e) {
  e.clientX;
  //=>鼠标点击时基于浏览器窗口所处的X坐标
  e.clientY;
  //=>鼠标点击时基于浏览器窗口所处的Y坐标
  e.pageX;
  //=>鼠标点击时基于body所处的X坐标
  e.pageY;
  //=>鼠标点击时基于body所处的Y坐标

  /**
   * clientX和clientY返回的都是触发鼠标点击事件时鼠标距离当前浏览器窗口
   * 左上角的坐标,而pageX和pageY返回的是基于整个body真实大小的左上角的坐标
   * 包括body内容卷去的部分，如果body的大小和浏览器当前的窗口大小一直，
   * 那么client和page返回的偏移量也是相同的，如果body拥有卷去的部分
   * 那么page获取的偏移量回比client获得偏移量数值要大
   */
};
```

## 键盘事件

| 事件    | 描述     |
| ------- | -------- |
| keydown | 键盘按下 |
| keyup   | 键盘抬起 |

**键盘事件对象.**

```javascript
let input = document.getElementsByTagName("input")[0];
input.onkeydown = function(e) {
  e.key;
  //=>返回当前的按键字符
  e.keyCode;
  //=>返回当前按键的键盘码
};
```

## 表单事件

| 事件    | 描述           |
| ------- | -------------- |
| focus   | 文本框聚焦     |
| blur    | 文本框失去焦点 |
| change  | 文本内容改变   |
| reset   | 点击重置按钮   |
| submit  | 点击提交按钮   |
| input   | 文本内容改变   |
| invalid | 验证不通过     |

- `change`和`input`都是用于监听文本框的内容改变,但还是有区别的

1. `change`的兼容性更好,`input`只在 IE9 以上支持
2. `change`是在文本框失去焦点是才会触发,如果内容改变前和改变后的值相同则不会触发
3. `input` 是实时触发,只要文本内容发生改变就会触发

- `invalid`是在验证不通过时触发,也可以修改基于 setCustomValidity()修改默认的提示信息

```html
<input type="tel" required pattern="^$(+86)?\d{10}" />
<script>
  let tel = document.getElementsByTagName("input")[0];
  tel.oninvalid = function() {
    console.log(1);
  };
</script>
```

## 其他事件

| 事件         | 描述                     |
| ------------ | ------------------------ |
| load         | 页面文档加载完成之后     |
| unload       | 页面关闭之后             |
| scroll       | 滚动条滚动时             |
| resize       | 浏览器窗口大小发生改变时 |
| beforeunload | 浏览器窗口关闭或者刷新时 |

**事件类型参考：**

<https://developer.mozilla.org/zh-CN/docs/Web/Events>

## 移动端事件

| 事件        | 描述                   |
| ----------- | ---------------------- |
| touchstart  | 手指刚接触屏幕时触发   |
| touchmove   | 手指在屏幕上移动时触发 |
| touchend    | 手指从屏幕上离开触发   |
| touchcancel | 触摸中断时触发         |

> `click`在移动端是单击事件,但是浏览器存在 300ms 左右的延迟,会通过这 300ms 的延迟研判当前的点击是单击还是双击,如果 300ms 再次点击则判断为双击,否则才会判断为点击,因此直接使用`click`点击事件存在 300ms 左右的延迟

在移动的点击事件,滑动时间,长按事件都是通过`touchstart` `touchmove` `touchend`模拟出来的

**事件属性:**

1. `changedTouches` ==>当前事件的触发的相关信息
2. `touches` ==>事件触发时的相关信息
3. `targetTouches` ==>记录当前事件源的相关信息

当一个手指触摸屏幕,此时三个对象的值都是一样的

当第二个手指触摸时,`changedTouches`存储的是第二根手指的相关信息,如果触摸的元素是和`targetTouches`的`target`属性上存储的对象一样,那么`touches`和`targetTouches`的值是一样的,每一根手指都拥有单独的值

当手指离开时,`changeTouches`会记录最后 一次的信息,而`touches`和`targetTouches`的值则会消失

## 兼容处理

`IE6-8`和高版本浏览器之间有些事件的属性和方法，就需要进行兼容处理

将`IE`低版本浏览器中不支持的属性和方法全部重写一遍

```javascript
document.body.onclick = function (e) {
  if (!e) {
    e = window.event;
    pageX =
      e.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft);

    pageY =
      e.clientY +
      (document.documentElement.scrollTop || document.body.scrollTop);
    //=>低版本的浏览器并没有 page 属性

    e.target = e.srcElement;
    //=>低版本的浏览器的事件源只支持 srcElement

    e.preventDefault = function () {
      e.returnValue = false;
      //=>低版本浏览器使用 returnValue = false 来阻止浏览器的默认行为
    };

    e.stopPropagation = function () {
      e.cancelBubble = true;
      //=>低版本浏览器阻止事件冒泡
    };
  }
};
  /**
   * 兼容思想是将低版本浏览器所不支持的属性和方法全部重新定义
   * 将书写的兼容处理放入判断中,如果使用的是低版本浏览器就执行兼容处理
   * 如果是高版本浏览器则不做任何处理
   * 处理完之后可以直接使用高版本浏览器的属性,
   * 不需要再做额外的兼容性处理
   */
```

处理个别的兼容性

```javascript
var body = document.body;
body.onclick = function(e) {
  //=>低版本浏览器并不会向事件函数中传递参数,而是捆绑在window全局中
  console.log(e);
  //=>undefined
  //=>兼容性处理
  e = e || window.e;
  /**
   * 低版本浏览器中并没有传递的参数,此时事件函数的形参就是undefined
   * e = e || window.e;
   * 表示如果e有值就直接使用,如果没有就代表的是低版本浏览器
   * 那么就使用window.event来代替兼容处理
   */

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  //=>preventDefault是高版本浏览器支持的,而低版本浏览器只支持returnValue=false或者直接return  false

  e = e.target || e.srcElement;
  //=>target为高版本浏览器使用,低版本浏览器使用srcElement
};
```

## 默认行为

有些`HTML`标签拥有自主的默认行为，`a`标签的跳转，`submit`的提交，有些时候不需要这些标签产生默认行为的时候，可以进行阻止

`<a href="javascript:;"></a>`

在`HTML`文档中阻止`a`标签的默认行为，只要JS的值为`false`都可以阻止

```javascript
a.onclick = function(e){
  e = e || window.event;
  //=>兼容处理

  return false；
  //=>通用的阻止方法

  e.preventDefault();
  //=>高版本浏览器阻止方法

  e.preventDefault ? e.preventDefault() : (e.returnvalue=false);
  //=>兼容所有的浏览器
}
```

## 事件传播

### 捕获

当某一个元素触发某一个事件的时候,捕获阶段会从 html 标签开始一次向下检索该目标元素的祖先元素是否拥有相同的事件,如果存在,则会依次执行,最后再执行事件对象的事件,只有基于`addEventListener`绑定事件,并且第三个参数书写`true`才会在捕获阶段执行祖先元素绑定的相同的事件,现代浏览器并不会默认执行捕获阶段

```html
<html>
  <head>
    <title>Document</title>
    <style>
      body {
        width: 1000px;
        height: 1000px;
      }

      .maxBox {
        width: 300px;
        height: 300px;
        background: orangered;
        position: absolute;
        margin: 50px auto;
      }

      .minBox {
        width: 200px;
        height: 200px;
        background: pink;
        position: relative;
        top: 50px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    </style>
  </head>

  <body>
    <div class="maxBox">
      <div class="minBox"></div>
    </div>
    <script>
      let maxBox = document.querySelector(".maxBox"),
        minBox = document.querySelector(".minBox"),
        body = document.body,
        html = document.documentElement;
      html.onclick = function(e) {
        console.log("html");
      };
      body.onclick = function(e) {
        console.log("body");
      };
      maxBox.onclick = function(e) {
        console.log("maxBox");
      };
      minBox.onclick = function(e) {
        console.log("minBox");
      };
      /*
       * 当我们点击minBox这个元素时会触发它所有的祖先元素的相同的事件
       * 捕获阶段是从最上级的祖先元素开始一次向下触发
       * 最后再触发事件的目标源,现代的浏览器默认的并不会使用这种机制
       */
    </script>
  </body>
</html>
```

### 冒泡

和捕获阶段相反,他是从目标源对象开始触发事件,然后依次查找该目标元素的祖先元素是否拥有相同的事件,如果拥有则会立即执行,直至查找到 html 标签,即使我们没有给事件对象的祖先元素设置事件,也依然会产生冒泡阶段,只是冒泡到当前的元素时并没有相应的事件可以执行,浏览器默认是执行冒泡阶段,并不会执行捕获阶段,但是我们也可以取消这种机制

```javascript
html.onclick = function(e) {
  console.log("html");
};
body.onclick = function(e) {
  console.log("body");
};
maxBox.onclick = function(e) {
  e = e || window.event;
  e.stopPropagation();
  //=>该方法可以阻止是事件冒泡,
  ev.cancelBubble = true;
  //=>低版本使用该属性阻止时间冒泡
  console.log("maxBox");
  //=>一旦阻止了冒泡阶段,那么从阻止的元素开始,当前元素所有的
  //=>祖先元素都不会再次触发相同的事件
};
minBox.onclick = function(e) {
  console.log("minBox");
};

//=>冒泡阶段是从minBox开始执,依次向上执行它祖先元素上的点击事件
```

### 事件代理

根据冒泡传播的机制产生出的一种现象,当一个父元素及其子元素都需要绑定相同的事件的时候,我们只需要单独给父元素绑定事件即可,然后通过事件源来判断当前触发事件的是哪一个元素,通常用于经常性改变一个父元素的结构,并且这些元素都需要绑定相同的事件

```javascript
//=>假如一个ul下面的li都需要绑定点击事件,但是ul的元素结构经常性的发生变化
//=>此时就可以使用事件委托(事件代理)
let ul = document.getElementsByTagName("ul")[0];
ul.onclick = function(e) {
  e = e || window.e;
  if (e.target.tagName === "LI") {
    /**
     * 通过子元素的一些特征(类名,标签名)等来判断当前点击的事件源
     * 只有当条件成立的时候我们才给点击的事件源绑定事件
     * 否则不做任何处理,这样就可以实现事件的委托
     * 当父元素的结构发生变化时,新添加的同样也会绑定相同的事件
     * 并不需要在额外的绑定
     * */
  }
};
```

## H5 新增接口

> HTML5 中新增的一种特性,所有的元素都支持拖放,`img`和设置了`href`属性的`a`标签默认就支持拖放,其他的元素需要设置`draggable="true"`才可以今天拖放

### 拖放/释放事件

**拖拽元素的事件:**

1. ondragstart ==>拖拽开始调用
2. ondrag ==>拖拽过程中调用(与鼠标移动无关,只要不释放就会一直调用)
3. ondragleave ==>鼠标离开拖拽元素时调用
4. ondragend ==>拖拽结束时调用

**拖拽目标元素的事件:**

1. ondragenter ==>拖拽的元素进入目标元素时调用
2. ondragover ==>拖拽元素停留在目标元素时调用(只要不释放会一直调用)
3. ondrop ==>在目标元素中松开鼠标(释放拖拽元素)
4. ondragleave ==>拖拽的元素离开目标元素调用

**dataTransfer.setData():**

> 可以在多个事件之间传递数据,需要传递两个参数!只允许在`ondragstart`中使用

1. format: ==>传递的数据类型

   - text/html
   - text/uri-list
   - text/xml
   - text-plain

2. data: ==>传递的数据

**dataTransfer.clearData():**

> 清空 dataTransfer 内存储的值,可以指定数据类型进行删除,不指定则清空存储的所有值!只能在`ondragstart`事件中使用

**dataTransfer.getData():**

> 通过数据类型获取`dataTransfer`内存储的值!只允许在`ondrop`中使用

**浏览器默认阻止了`ondrop`事件,因此必须在`ondragover`事件中使用`preventDefault()`阻止浏览器的默认行为,否则`ondrop`事件不会生效**

```html
<div>
  1
  <p draggable="true">我要去找div2</p>
</div>
<div>2</div>
<script>
  let div1 = document.getElementsByTagName("div")[0],
    div2 = document.getElementsByTagName("div")[1],
    p = div1.querySelector("p"),
    parent = document.documentElement,
    obj = null;

  function randomColor(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  }
  parent.ondragstart = function(e) {
    obj = e.target;
    div1.style.borderWidth = 10 + "px";
    e.target.innerText = "我要去哪?";
  };
  parent.ondrag = function(e) {
    e.target.style.backgroundColor = `rgb(${randomColor(1, 255)},${randomColor(
      1,
      255
    )},${randomColor(1, 255)})`;
  };
  parent.ondragend = function(e) {
    e.target.innerText = "我进来了";
  };
  parent.ondragover = function(e) {
    e.preventDefault();
  };
  parent.ondrop = function(e) {
    e.target.appendChild(obj);
  };
</script>
```

### FileReader

> 可以异步的读取存储在用户计算机上的文件,只能读取`<input type="file">`中上传的文件,或者拖拽中`dataTransfer`中存储的文件,再或者是`HTMLCanvasElement`中执行`mozGetAsFile()`方法返回的结果,并不能按照路径读取用户计算机上的文件

**属性:**

FileReader.error: 文件读取错误时的错误信息

`var err = instanceofFileReader.error`

FileReader.readyState: 表示 FileReader 的状态

| 常量    | 值  | 状态                 |
| ------- | --- | -------------------- |
| EMPTY   | 0   | 没有加载任何数据     |
| LOADING | 1   | 文件读取中           |
| DONE    | 2   | 以完成全部的读取请求 |

FileReader.result :读取的文件内容,仅在读取成功是有值,数据的格式取决于使用的那种方法启动读取操作

**事件:**

| 事件        | 描述                             |
| ----------- | -------------------------------- |
| onabort     | 读取中断时触发                   |
| onload      | 读取成功是触发                   |
| onerror     | 读取错误时触发                   |
| onloadend   | 读取结束时触发(不论成功或者失败) |
| onloadstart | 读取开始时触发                   |

**方法:**

1. FileReader.abort() ==>中断读取操作
2. FileReader.readAsText() ==>开始读取指定的文件,成功后`result`中包含着以字符串形式存储的内容
3. FileReader.readAsDatURL() ==>开始读取指定的文件,成功后`result`中包含着`data:`URL 格式的`Base64`字符串,
4. FileReader.readAsArrayBuffer() ==>开始读取指定的文件,成功后`result`中保存的将是被读取文件的 `ArrayBuffer`数据对象

用户选择照片后实现即时预览

```html
<input type="file" />
<img src="" alt="" title="" />
<script>
  let inp=document.querySelector('input),
      img=document.querySelector('img');
      inp.onchange=function(){
          let reader=new FileReader(),
              file=inp.files;
        reader.readAsDataURL(file[0]);
        reader.onload=function(){
            img.src=reader.result;
        };
      };
</script>
```

### 地理位置
