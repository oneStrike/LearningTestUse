# 文档对象模型（Document Object Model，简称 DOM）

## DOM 树

> dom tree 当浏览器加载 HTML 页面的时候，首先就是 DOM 结构的计算，计算出来的 DOM 结构就是 DOM 树（把页面中的 HTML 标签像树桩结构一样，分析出之间的层级关系）

```HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>珠峰培训</title>
</head>
<body>
<div class="box" id="box">
    <ul>
        <li>新闻</li>
        <li>电影</li>
        <li>音乐</li>
    </ul>
    <div>最新新闻</div>
    <div>最新电影</div>
    <div>最新音乐</div>
</div>
</body>
</html>
```

[![u8Q52n.png](https://s2.ax1x.com/2019/09/29/u8Q52n.png)](https://imgchr.com/i/u8Q52n)

DOM 树描述了标签和标签之间的关系（节点间的关系）我们只要知道任何一个标签，都可以依据 DOM 中提供的属性和方法，获取到页面中任意一个标签或者节点

## 获取 DOM 元素

**`document`**

每个载入浏览器的 `HTML` 文档都会成为 `Document` 对象。`Document` 对象使我们可以从脚本中对 `HTML` 页面中的所有元素进行访问。提示：`Document` 对象是 `Window` 对象的一部分，可通过 `window.document` 属性对其进行访问。在我们页面中特定的某一个元素时，`Document`限定我们的获取范围

**`getElementById`**

语法:`document.getElementById()`

1. getElementById 的上下文只能是 document。因为严格意义上，一个页面中的 ID 是不能重复的，浏览器规定在整个文档中既可以获取这个唯一的 ID

2. 如果页面中的 ID 重复了，我们基于这个方法只能获取到第一个元素，后面相同 ID 元素无法获取

3. 在 IE6~7 浏览器中，会把表单元素(input...)的 name 属性值当做 ID 来使用（建议：以后使用表单元素的时候，不要让 name 和 id 的值有冲突）

**`getElementsByTagName`**

语法：`[context].getElementsByTagName`

在指定的上下文中，根据标签名获取到一组元素集合（HTMLCollection）

1. 获取的元素集合是一个类数组（不能直接的使数组中的方法)

2. 它会把当前上下文中，子子孙孙（后代）层级内的同名标签都获取到（获取的不仅仅是儿子级的）

3. 基于这个方法获取到的结果永远都是一个集合（不管里面是否有内容，也不管有几项，它是一个容器或者集合），如果想操作集合中具体的某一项，需要基于索引获取到才可以

**`getElementsByClassName`**

语法：`[context].getElementsByClassName()`

在指定的上下文中，基于元素的样式类名获取到一组元素集合

1. 真实项目中，我们经常是基于样式类来给元素设置样式，所以在 JS 中，我们也会经常基于样式类来获取元素，但是此方法在 IE6~8 下不兼容

兼容处理方案参考：

```javascript
Node.prototype.queryElementsByClassName = function queryElementsByClassName() {
  if (arguments.length === 0) return [];
  var strClass = arguments[0],
    nodeList = utils.toArray(this.getElementsByTagName("*"));
  strClass = strClass.replace(/^ +| +$/g, "").split(/ +/);
  for (var i = 0; i < strClass.length; i++) {
    var reg = new RegExp("(^| +)" + strClass[i] + "( +|$)");
    for (var k = 0; k < nodeList.length; k++) {
      if (!reg.test(nodeList[k].className)) {
        nodeList.splice(k, 1);
        k--;
      }
    }
  }
  return nodeList;
};
```

**`getElementsByName`**

语法：`document.getElementsByName()`

1. 它的上下文也只能是 document，在整个文档中，基于元素的 name 属性值获取一组节点集合（也是一个类数组）

2. 在 IE 浏览器中（IE9 及以下版本），只对表单元素的 name 属性起作用（正常来说：我们项目中只会给表单元素设置 name，给非表单元素设置 name，其实是一个不太符合规范的操作）

**`querySelector`**

语法：`[context].querySelector()`

在指定的上下文中基于选择器（类似于 CSS 选择器）获取到指定的元素对象（获取的是一个元素，哪怕选择器匹配了多个，我们只获取第一个）

**`querySelectorAll`**

语法：`document.querySelectorAll()`

1. 在 querySelector 的基础上，我们获取到选择器匹配到的所有元素，结果是一个节点集合（NodeList）

2. querySelector/querySelectorAll 都是不兼容 IE6~8 浏览器的（不考虑兼容的情况下，我们能用 ById 或者其它方式获取的，也尽量不要用这两个方法，这两个方法性能消耗较大）

**`document.head`**

> 获取 HEAD 元素对象

**`document.body`**

> 获取 BODY 元素对象

**`document.documentElement`**

> 获取 HTML 元素对象

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
  return ary;<!-- slide -->
<!-- slide -->

}
console.log(queryAllById("HAHA"));
```

## 节点 （node）

> 在一个 HTML 文档中出现的所有东西都是节点
>
> - 元素节点（HTML 标签）
> - 文本节点（文字内容）
> - 注释节点（注释内容）
> - 文档节点（document）
> - ...

每一种类型的节点都会有一些属性区分自己的特性和特征

- nodeType：节点类型
- nodeName：节点名称
- nodeValue：节点值

`元素节点` nodeType：1 nodeName：标签名 nodeValue：null

`文本节点` nodeType：3 nodeName：'#text' nodeValue：文本内容

在标准浏览器中会把空格/换行等都当做文本节点处理

`注释节点` nodeType：8 nodeName：'#comment' nodeValue：注释内容

`文档节点` nodeType：9 nodeName：'#document' nodeValue：null

## 描述节点之间关系的属性

**`parentNode`**

> 获取当前节点唯一的父亲节点

**`childNodes`**

> 获取当前元素的所有子节点
>
> - 子节点：只获取儿子级别的
> - 所有：包含元素节点、文本节点等

**`children`**

> 获取当前元素所有的元素子节点
>
> 在 IE6~8 中会把注释节点也当做元素节点获取到，所以兼容性不好

**`previousSibling`**

> 获取当前节点的上一个哥哥节点（获取的哥哥可能是元素也可能是文本等）
>
> previousElementSibling：获取上一个哥哥元素节点（不兼容 IE6~8）

**`nextSibling`**

> 获取当前节点的下一个弟弟节点
>
> nextElementSibling：下一个弟弟元素节点（不兼容）

**`firstChild`**

> 获取当前元素的第一个子节点（可能是元素或者文本等）
>
> firstElementChild

**`lastChild`**

> 获取当前元素的最后一个子节点
>
> lastElementChild

---

需求一：获取当前元素的所有元素子节点

> 基于 children 不兼容 IE 低版本浏览器（会把注释当做元素节点）

```javascript
/*
 * children：get all the element nodes of the current element
 * @parameter
 *    curEle：[object] current element
 * @return
 *    [Array] all the element nodes
 * by team on 2018/04/07 12:36
 */
function children(curEle) {
  //=>首先获取当前元素下所有的子节点,然后遍历这些节点,
  //=>筛选出元素的(NODE-TYPE===1),把筛选出来的结果单独存储起来即可
  var nodeList = curEle.childNodes,
    result = [];
  for (var i = 0; i < nodeList.length; i++) {
    var item = nodeList[i];
    if (item.nodeType === 1) {
      result.push(item);
    }
  }
  return result;
}
console.log(children(course));
```

需求二：获取当前元素的上一个哥哥元素节点

> previousSibling：上一个哥哥节点 previousElementSibling：上一个哥哥元素节点，但是不兼容

```javascript
/*
 * prev：get the last elder brother element node of the current element
 * @parameter
 *    curEle：[object] current element
 * @return
 *    [object] last elder brother element
 * by team on 2018/04/07 12:44
 */
function prev(curEle) {
  //=>先找当前元素的哥哥节点,看是否为元素节点,不是的话,基于哥哥,
  //=>找哥哥的上一个哥哥节点...一直到找到元素节点或者已经没有哥哥了
  //=>(说明我就是老大)则结束查找
  var pre = curEle.previousSibling;
  while (pre && pre.nodeType !== 1) {
    /*
     * pre && pre.nodeType !== 1
     *   pre是验证还有没有，这样写代表有，没有pre是null
     *   pre.nodeType是验证是否为元素
     */
    pre = pre.previousSibling;
  }
  return pre;
}
```

回去后扩展：next 下一个弟弟元素节点，prevAll 获取所有哥哥元素节点，nextAll 获取所有弟弟元素节点，siblings 获取所有兄弟元素节点，index 获取当前元素的索引...

## DOM 的增删改

**`createElement`**

> 创建一个元素标签(元素对象) `document.createElement([标签名])`

**`appendChild`**

> 把一个元素对象插入到指定容器的末尾 `[container].appendChild([newEle])`在追加元素对象的时候，如果这个元素之前容器中已经存在，此时不是克隆一份新的追加到末尾，而是把原有的元素移动到末尾位置

**`insertBefore`**

> 把一个元素对象插入到指定容器中某一个元素标签之前 `[container].insertBefore([newEle],[oldEle])`

**`cloneNode`**

> 把某一个节点进行克隆
>
> `[curEle].cloneNode()`：浅克隆，只克隆当前的标签 `[curEle].cloneNode(true)`：深克隆，当前标签及其里面的内容都一起克隆了

**`removeChild`**

> 在指定容器中删除某一个元素
>
> `[container].removeChild([curEle])`

**`set/get/removeAttribute`**

> 设置/获取/删除 当前元素的某一个自定义属性

```javascript
let oBox = document.getElementById("box");

//=>把当前元素作为一个对象，在对象对应的堆内存中新增一个自定义的属性
oBox.myIndex = 10; //=>设置
console.log(oBox["myIndex"]); //=>获取
delete oBox.myIndex; //=>删除

//=>基于Attribute等DOM方法完成自定义属性的设置
oBox.setAttribute("myColor", "red"); //=>设置
oBox.getAttribute("myColor"); //=>获取
oBox.removeAttribute("myColor"); //=>删除

// 上下两种机制属于独立的运作体制，不能互相混淆使用
// - 第一种是基于对象键值对操作方式，修改当前元素对象的堆内存空间来完成
// - 第二种是直接修改页面中HTML标签的结构来完成（此种办法设置的自定义属性可以在结构上呈现出来）
//
// 基于setAttribute设置的自定义属性值都是字符串
```

![nN3JDU.png](https://s2.ax1x.com/2019/09/10/nN3JDU.png)

**`dataset`**

> 设置/获取/添加自定义属性名

1. 开头必须使用`data-`命名
2. 多个单词之间使用`-`进行连接
3. 兼容性不如`getAttribute/setAttribute`

```javascript
element.dataset.name = "name";
//==>设置或者添加自定义的属性名
element.dataset.name;
//==>获取自定义属性名的值
element.dataset["age"];
//==>使用属性表达式获取时需要使用驼峰命名法
```

## 获取元素的属性

**`innerHTML`**

可以获取或者设置一个元素内的内容，包括他的后代标签，如果基于它设置元素的内容，默认情况下会将原有的内容覆盖

```javascript
let div = document.getElementsByTagName("div")[0];
console.log(div.innerHTML);
//=>获取div内的所有内容,包括空白文本，
div.innerHTML = 123;
//=>会把div内所有内容替换成123

div.innerHTML += div.innerHTML;
//=>相当于将div原有的内容重新克隆一份重新添加到div中
```

**`innerText`**

获取或者设置一个元素的文本内容，包括后代标签内的文本内容

```javascript
let div = document.getElementsByTagName("div")[0];
console.log(div.innerText);
//=>获取div内的所有内容,包括空白文本，
div.innerText = 123;
//=>会把div内所有文本内容替换成123

div.innerText += div.innerText;
//=>相当于将div原有的文本内容重新克隆一份重新添加到div中
```

**`name`**

获取元素`name`属性的值

> 它只能应用于下列元素：`<a>, <applet>, <button>, <form>, <frame>, <iframe>, <img>, <input>, <map>, <meta>, <object>, <param>, <select>, and <textarea>`。如果其他标签设置`name`属性也无法获取值，可以使用`getAttribute()`方法获取

`id`获取元素的`id`名

`className`获取设置元素的`class`名

> 可以使用`+=`来为元素添加多个类名,

```javascript
element.className += " red pink";
//如果不希望将先前的值替换,需要在第一个类名之前
//添加空格,否则新添加的类名会和原有的重合,变成一个类名
```

`classList` 添加/删除/切换/查找/获取/替换`class`类名

```javascript
element.classList.add("class");
//添加类名,一个只能添加一个,添加多个会报错,不会将原有的覆盖,
element.classList.remove("class");
//删除类名.只能删除一个
element.classList.toggle("class");
//切换类名,如有拥有则删除,如果没有则添加
element.classList.contains("class");
//查找类名,返回true或者false
element.classList.item(1);
//查找类名,使用索引查找类名,如果没有返回null,存在返回类名的字符串,
element.classList.replace("oldClass", "newClass");
//替换类名,第一参数是需要替换的老类名,第二个是替换后的新类名
```

`tagName`获取元素的标签名

## DOM 映射机制

页面中的 HTML 元素和 js 中通过相关方法获取的元素集合或者元素对象存在映射机制，一个修改另外一个也会修改

我们在获取页面中的元素之后，会以对象的形式存入堆内存当中，当我们操作堆内存当中的数据时，页面中的文档也会发生相应的改变

```javascript
var body = document.body;
body.style.backgroundColor = "red";
//=>我们在js中操作的只是获取过来的元素的属性，这些属性都存放在堆内存当中
//=>当我们改变堆内存中的值时，由于映射机制的关系，页面中的元素也会改变


//=>创建一些div标签插入body标签内
var body=document.body;
for(var i=0;i<5;i++>){
  var div=document.createElement('DIV');
  body.appendChild(div);
}
//=>当我们在js中创建一些标签添加进页面中时，只要我们不再重新创建
//=>我们之后操作的所有标签都只能是我们创建的这些
```

js 中获取元素有着许多的方法，除了`querySelectorAll`以外都是动态获取。会根据页面的实时变化来动态的获取页面中的标签，`querySelectorAll`是静态获取的，即第一次获取的是什么内容，之后无论我们如何改变文档结构，他都不会发生变化，因为它不存在 DOM 映射机制。之后再次获取才能获得修改后的内容

```javascript
var div = document.getElementsByTagName("div");
var div2 = document.querySelectorAll("div");
console.log(div);
//=>空：[]
console.log(div2);
//=>空：[]
document.body.appendChild(document.createElement("DIV"));
console.log(div);
//=>[div对象],动态获取可以根据页面实时的监控页面的变化
console.log(div2);
//=>空：[]，静态获取的并不会监控页面中的变化，
//=>只要不重新获取，就会一直是空
```

> appendChild 在追加元素对象的时候，如果这个元素之前容器中已经存在,此时不是克隆一份新的追加到末尾，而是把原有的元素移动到末尾位置

## DOM 回流（reflow）和重绘（repaint）

浏览器的渲染机制

1. 加载 html 文档（DOM 树）。浏览器会把我们所有的 HTML 解析成一个 DOM 树，每一个 HTML 标签就是 DOM 树中的一个节点。包括我们使用 JS 添加的标签。

2. 加载 CSS 样式表（主要包括浏览器自带的样式和我们自己书写的 CSS 样式，同时也会过滤掉不能解析的样式）。

3. 生成渲染树（RENDER TREE）DOM 树和样式表结合后呈现出渲染树。render tree 不包含`display：none`和`head`标签，因为他们不会呈现出效果，也不会影响其他标签的呈现，但是会包含`visibility：hidden`的标签，因为他只是被隐藏起来，但仍然会影响布局，也会占据位置。

4. 浏览器根据 render tree 渲染页面

**回流`（reflow）`**

- 当页面中的 HTML 文档结构发生变化时，（删除，增加，移动，修改...）都会造成回流，每一次的回流浏览器都是重新渲染页面

```javascript
let body = document.body;
for (var i = 0; i < 10; i++) {
  var div = document.createElement("DIV");
  body.appendChild(div);
}
/*
 * 上面的代码就会造成页面的回流,并且会对性能造成过多的消耗，
 * 我们每次创建的div都会直接添加body中，添加一次就会造成一次页面的回流
 * 如果我们添加的元素过多时，会极大的消耗性能
 */
```

**重绘`（repaint）`**

- 当页面中的某一个标签发生样式上的改变，就会造成重绘，如果发生的变化会造成页面布局的改变，那么就会造成回流**回流一定会造成重绘，但是重绘不一定会造成回流**

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

**`createDocumentFragment`**

- **文档碎片**。一个虚拟的文档节点，并不是主 DOM 树的一部分，它拥有一块独立的空间
- 插入的元素会存储在内存空间中，所以它不会造成回流。
- 只会在我们将其插入到 DOM 树中会造成一次回流，对性能更加的友好

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

- 如果我们需要对一个元素进行多个样式的修改，我们最好在 css 文件中创建一个 class 类名，然后将这些样式添加在 class 类名中，然后通过 js 代码将这个 class 名添加到我们需要操作的元素中

---

## 盒子模型

**`client`**

都是只读属性，不可修改

1.`clientTop` / `clientLeft`

> 可以获取一个元素的上边框/下边框，不包括`padding`和`margin`

3.`clientWidth` / `clientHeight`

> 获取一个元素的可视宽高(width/height+padding),不包含边框，元素中的文本溢出和`overflow:hidden`不会影响获取到的数据。如果没有设置宽高，获取到的就是有内容撑开的宽度

**`offset`**

1.`offsetWidth` / `offsetHeight`

都是只读属性，不可修改

> 获取一个元素的布局宽高值。包含元素的边框`border`、内边距`padding`、滚动条`scrollbar`（如果存在的话）、以及 CSS 设置的宽高的值。不包含`::before` 或`::after` 等伪类元素的宽度。

2.`offsetParent`

获取当前元素的定位父元素，如果所有的父级元素都没有设置`position`属性，则是`body`。

> 在 Webkit 内核中，如果元素为隐藏的（该元素或其祖先元素的 `style.display` 为 `none`），或者该元素的 `style.position` 被设为 `fixed`，则该属性返回 `null`。
>
> 在 IE 9 中，如果该元素的 `style.position` 被设置为 `fixed`，则该属性返回 `null`。（`display:none` 无影响。）

3.`offsetTop` / `offsetLeft`

返回当前元素相对于第一个定位元素的上/左偏移量

> 计算方式是当前元素的外边框到定位父元素的内边框之间的距离，如果没有定位的父元素，则返回到 `body` 的偏移量
>
> 在 Webkit 内核中，如果元素为隐藏的（该元素或其祖先元素的 `style.display` 为 `none`），或者该元素的 `style.position` 被设为 `fixed`，则该属性返回 `null`。
>
> 在 IE 9 中，如果该元素的 `style.position` 被设置为 `fixed`，则该属性返回 `null`。（`display:none` 无影响。） **`scroll`**

`scrollWidth` / `scrollHeight`

都是只读属性，不可修改

> 可以获取一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。 没有垂直滚动条的情况下，获取的宽高值与元素视图填充所有内容所需要的最小值 `clientHeight` / `clientHeight` 相同。包括元素的 `padding`，但不包括元素的 `border` 和 `margin`。获取的宽高值也包括 `::before` 和 `::after` 这样的伪元素。

1. 获取到的值都是只读的，无法修改，
2. 获取到的值都是以像素单位获取的，但是获取到的值并不带像素单位`px`
3. 获取的值都是符合的值，(经过对应的元素样式的值相加)，无法获取单一属性
4. 获取的值都是整数（四舍五入），无法获得小数。

`scrollLeft` / `scrollTop`

是一个`可读写`属性，可以获取和设置滚动条卷去的宽高度

卷去的值 = 页面真实宽高 - 当前屏幕中页面显示的宽高

- 当前元素没有滚动条，则为 0
- 设置的值小于最小 0，则会被设为 0
- 设置的值超过最大滚动值，则会被设为最大滚动值

## 获取元素单一属性值

在标准浏览器中有两种方法可以获取到页面中元素样式的属性值

**一.** `style`

通过`style`可取获取页面中书写在行内样式的属性值，获取不到样式表内的属性,`style`也可以设置页面中元素的属性，设置的样式也是会添加到内联样式表中，基于`style`所作的操作无法修改样式表内的属性样式。只能操作内联样式。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box {
        padding: 20px;
        margin: 20px;
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <div id="box" style="width:100px;height:100px;background:orange;"></div>
    <script>
      let box = document.getElementById("box");
      console.log(box.style.width);
      //=>'100px';
      /**
       * 基于style获取一个元素的样式时
       * 如果获取的属性名是一个带有-的属性时
       * 书写时需要把-去掉，同时-后面的第一个首字母大写
       */
      console.log(box.style.backgroundColor);
      //=>'orange'

      //=>无法获取到样式表内的属性
      console.log(box.style.padding);
      //=>''  ==>返回的是一个空的字符串

      //=>设置元素样式

      box.style.backgroundColor = "blue";
      //=>设置的属性书写格式为字符串形式

      box.style.width = 200 + "px";
      //=>如果设置的属性是带有单位的
      //=>需要在后面拼接上所需要的单位
    </script>
  </body>
</html>
```

**`getComputedStyle`**

`window`下的一个方法，可以返回一个对象，里面包含着所需元素的所有样式包括浏览器默认的样式，所有样式都是浏览器计算渲染后的样式 `getComputedStyle()`返回的是一个实时的对象，样式改变后，对象属性也会改变

语法：`var style = window.getComputedStyle('element',pseudoElt )`

> `element`代表的是需要获取样式属性的元素 `pseudoElt` 代表的是匹配的伪元素的字符串。必须对普通元素省略（或 null）。

`getComputedStyle()`是`window`的方法，不过书写的时候`window`可加可不加，也可以直接在后面书写需要获取的样式属性名 `var style = window.getComputedStyle('element',null).样式属性名`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      #box {
        width: 100px;
        height: 100px;
        background: blue;
      }
    </style>
  </head>

  <body>
    <div id="box" style="border:2px solid pink;font-size:16px;"></div>

    <script>
      let box = document.getElementById("box");
      let style = window.getComputedStyle("box", null);

      console.log(style.width);
      //=>'100px'  返回的是一个字符串格式的值

      //=> 同样在获取的样式属性名不允许出现-
      //=> 如果出现直接忽略，并将-后面的第一个首字母大写
      console.log(style.backgroundColor);
      //=>'orange';

      //=>也可以直接获取内联样式的样式
      console.log(style.border);
      //=>'2px solid pink'

      //=>getComputedStyle()是动态获取的，当样式改变后，无须重新获取
      console.log(style.backgroundColor);
      //=>'red'  修改后的样式
    </script>
  </body>
</html>
```

IE9 以下的低版本浏览器并不支持这个方法，在 IE 中具有相同功能的是一个属性。 `currentStyle`，它不是方法，而是一个属性，返回的也是一个对象

## 事件

当用户和网页进行交互的时候,比如鼠标点击,键盘按下,网页刷新,浏览器给予用户的反馈,浏览器会有事件监听者,当监听到用户执行的操作时,浏览器就会执行我们书写的事件方法.

### 事件绑定及事件对象

**事件绑定.**

事件绑定有两种写法,还有一种是兼容 IE6-8 的写法

事件绑定的两种方法

```javascript
let body = document.body;
//=>第一种  DOM0
body.onclick = function() {};

//=>第二种  DOM2  不需要加on
body.addEventListener("click", function() {}, false);

//=>IE6-8兼容写法,需要加上on
body.attachEvent("onclick", function() {});
```

---

**绑定方式的区别:**

DOM0 是根据给元素私有属性赋值的机制绑定,相同的事件只允许绑定一个方法,即使绑定多个也会有后面绑定的将前面的覆盖,那是因为绑定的事件都是的当前元素的私有属性,删除元素绑定的事件只需要将事件设为`null`即可

```javascript
let box = document.querySelector(".box");
box.onclick = function() {
  console.log(1);
};
box.onclick = function() {
  console.log(2);
  //=>相同的事件存在多个方法时只有第二个会生效,
  //=>其余的会被覆盖掉,跟绑定的方法无关,
  //=>即使是不同的方法也会被覆盖
};

box.onclick = null;
//=>取消绑定的事件
```

DOM2 中的事件绑定是基于**事件池机制**绑定的,当基于 DOM2 给一个元素绑定事件时,浏览器会将该元素以及改元素绑定的事件,事件的方法,方法的阶段(捕获或冒泡),添加进事件池中,当为同一个元素同一个事件添加多个方法的时候,浏览器会检测新添加的方法是有和已有的重复,如果重复则不做添加,如果`元素,事件,方法,方法阶段`中有一个不相同都会再次为改元素添加一个方法,使用的是严格不叫,必须所有的都相同才会判定会重复添加,执行的顺序是按照添加的顺序执行的,删除需要使用`removeEventListener`方法

```javascript
let box = document.querySelector("box");
function test1() {
  console.log(1);
}
function test2() {
  console.log(2);
}
box.addEventListener("click", test1, true);
//=>第三个参数的true表示在捕获阶段执行
box.addEventListener("click", test1, false);
//=>false表示执行冒泡阶段,不书写默认为冒泡阶段
上面绑定的两种方法都会执行, 因为他们的执行阶段不同;

box.removeEventListener("click", test1, true);
/**
 * 删除绑定的元素,如果是捕获阶段执行的方法,必须书写true才可以删除
 * 在基于DOM2绑定事件的方法时应当尽量绑定具名函数
 * 而不是绑定匿名函数,因为匿名函数绑定的事件无法被移除
 */

box.addEventListener("click", function() {
  console.log(1);
  //=>如果绑定的是一个匿名函数,基于DOM2则没办法删除
});

box.addEventListener("click", test1, false);
box.addEventListener("click", test1, false);
//=>如果所有的条件都相等,则会有后面的覆盖前面的
```

**兼容情况.**

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

### 鼠标事件

| 事件        | 描述         |
| ----------- | ------------ |
| click       | 鼠标点击     |
| dblclick    | 鼠标双击     |
| mouseover   | 鼠标经过     |
| mouseout    | 鼠标移出     |
| mouseenter  | 鼠标进入     |
| mouseleave  | 鼠标离开     |
| mousemove   | 鼠标移动     |
| mousedown   | 鼠标按下     |
| mouseup     | 鼠标抬起     |
| mousewheel  | 鼠标滚轮滚动 |
| contextmenu | 鼠标右键点击 |

**`mouseover/mouseout`和`mouseenter/mouseleave`**

这两对事件大致的功能都是相同的,区别是`mouseenter/mouseleave`阻止了事件的冒泡,如果需要在嵌套关系的元素的中使用鼠标划入划出应该使用`mouseenter/mouseleave`,因为他们阻止了事件的冒泡,并不会过多的产生事件,如果使用`mouseover/mouseout`则会触发事件的冒泡,会过多的触发不必要的事件

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
 * 当我们从maxBox的左侧进入,右侧划出的话一共会触发8次鼠标事件
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

### 键盘事件

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
  //=>返回当前案件的键盘码
};
```

### 表单事件

| 事件    | 描述           |
| ------- | -------------- |
| focus   | 文本框聚焦     |
| blur    | 文本框失去焦点 |
| change  | 文本内容改变   |
| reset   | 点击重置按钮   |
| submit  | 点击提交按钮   |
| input   | 当内容改变时   |
| invalid | 验证不通过时   |

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

### 其他事件

| 事件         | 描述                     |
| ------------ | ------------------------ |
| load         | 页面文档加载完成之后     |
| unload       | 页面关闭之后             |
| scroll       | 滚动条滚动时             |
| resize       | 浏览器窗口大小发生改变时 |
| beforeunload | 浏览器窗口关闭或者刷新时 |

**事件类型参考：**

<https://developer.mozilla.org/zh-CN/docs/Web/Events>

### 移动端事件

| 事件        | 描述                   |
| ----------- | ---------------------- |
| touchstart  | 手指刚接触屏幕时触发   |
| touchmove   | 手指在屏幕上移动时触发 |
| touchend    | 手指从屏幕上离开触发   |
| touchcancel | 触摸中断时触发         |

> `click`在移动端是单击事件,但是浏览器存在 300ms 左右的延迟,会通过这 300ms 的延迟研判当前的点击是单击还是双击,如果 300ms 再次点击则判断为双击,否则才会判断为点击,因此直接使用`click`点击事件存在 300ms 左右的延迟
>
> 在移动的点击事件,滑动时间,长按事件都是通过`touchstart` `touchmove` `touchend`模拟出来的

**事件属性:**

1. `changedTouches` ==>当前事件的触发的相关信息
2. `touches` ==>事件触发时的相关信息
3. `targetTouches` ==>记录当前事件源的相关信息

> 当一个手指触摸屏幕,此时三个对象的值都是一样的
>
> 当第二个手指触摸时,`changedTouches`存储的是第二根手指的相关信息,如果触摸的元素是和`targetTouches`的`target`属性上存储的对象一样,那么`touches`和`targetTouches`的值是一样的,每一根手指都拥有单独的值
>
> 当手指离开时,`changeTouches`会记录最后 一次的信息,而`touches`和`targetTouches`的值则会消失

### 兼容处理

IE6-8 浏览器和高版本浏览器之间有些属性和方法并不通用,我们需要额外的处理兼容性处理

第一种兼容处理是将 IE 低版本浏览器不支持的属性或者方法全部重写一遍,以后再使用的时候直接使用,不需要再做额外的兼容处理

```javascript
//=>常用的兼容性处理
document.body.onclick = function(e) {
  if (!e) {
    e = window.event;
    pageX =
      e.clientX +
      (document.documentElement.scrollLeft || document.body.scrollLeft);
    e.pageY =
      e.clientY +
      (document.documentElement.scrollTop + document.body.scrollTop);
    //=>低版本浏览器并不支持page
    e.target = e.srcElement;
    //=>获取事件源时低版本浏览器只支持srcElement
    e.preventDefault = function() {
      e.returnValue = false;
      //=>低版本浏览器使用returnValue=false来阻止浏览器的默认行为
    };
    e.e.stopPropagation(); = function() {
      ev.cancelBubble = true;
      //=>低版本阻止时间冒泡
    };
  }
  /**
   * 兼容思想是将低版本浏览器所不支持的属性和方法全部重新定义
   * 将书写的兼容处理放入判断中,如果使用的是低版本浏览器就执行兼容处理
   * 如果是高版本浏览器则不做任何处理
   * 处理完之后可以直接使用高版本浏览器的属性,
   * 不需要再做额外的兼容性处理
   */
};
```

第二种兼容处理的方案需要使用少数的带有兼容性的属性或者方法,我们直接在书写代码的时候做兼容处理

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

### 默认行为

有些 HTML 标签拥有自主的默认行为,比如 a 标签的跳转,submit 标签的提交,input 标签的书写,大部分可以和用户产生交互的标签都拥有默认行为,我们可以在 js 中处理来阻止这些默认行为

可以直接在 HTML 文档阻止,只需要在 a 标签的 href 属性中书写 js 代码即可,只要是书写为假的 js 代码都可以阻止,比如 `false`,`null`,`undefined`,`0` 等等...

```html
<a href="javascript:;"></a>
```

在 js 文件中也可以阻止默认的行为

```javascript
var a = document.getElementsByTagName("a")[0];
a.onclick = function(e) {
  e = e || window.event;

  return false;
  //=>通用阻止方法

  e.preventDefault();
  //=>高版本浏览器阻止默认行为方法

  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  //=>兼容性写法
};

var input = document.getElementsByTagName("input")[0];
input.onkeydown = function(e) {
  e = e || window.event;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  //=>限制后文本框将不可以书写任何东西
};
```

### 事件的传播

**事件的捕获.**

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

**冒泡阶段.**

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

### 事件的委托(event delegation)

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

## 拖放和释放

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
