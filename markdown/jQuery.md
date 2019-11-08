# jQuery

官方中文文档 <https://www.jquery123.com/>

**原理：**

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

## 原生 `js` 和`jQuery`的区别

在原生`js`中使用`window.onload`会在页面文档全部加载完毕(html 结构,css 样式,js 代码)之后再执行相应的`js`代码。而`jQuery`只会在`DOM`文档元素加载完成之后就会执行代码，不会等待图片的加载

```javascript
window.onload = function() {
  let img = document.getElementsByTagName("img")[0];
  let width = document.getComputedStyle(img, null).width;
  //=>可以顺利的获取到图片的宽高
};
$(document).ready(function() {
  let $img = $("img")[0];
  let width = $img.width();
  //=>在DOM页面文档加载完成之后就会执行，并不会等待图片的加载
});
```

原生`js`书写多个相同的入口函数，后面的则会覆盖前面的，而`jQuery`则不会覆盖，而是会依次执行

```javascript
window.onload = function() {
  alert(1);
};
window.onload = function() {
  alert(2);
  //=>只有2会被弹出
};
/**
 * 因为原生js的window.onload使用的是DOM1的事件绑定方法
 * 就相当于给window的onload私有属性绑定一个方法
 * 所以会面的的方法会将前面的给覆盖掉
 */

$(function() {
  alert(1);
});
$(function() {
  alert(2);
});
//=>会依次弹出
/**
 * jQuery中的函数入口使用的是DOM2中的绑定机制
 * DOM会将一个事件的方法添加进事件池中,不同的方法并不会覆盖
 * 等到方法执行的时候会根据添加进事件池的顺序依次执行
 */
```

## 细节

**`$`的冲突使用**

`$`并不是只有`jQuery`可以使用，自己书写的类库或者其他的类库也都可以使用这个符号。会根据引入的顺序决定`$`的使用权，后引入的将拥有使用权，如果前面的类库咋使用这个符号，就会报错。

```javascript
//=>jQuery提供的解决方案
jQuery.noConflict();
//=>释放$的使用权，之后无法使用$调用jQuery的方法和属性

//=>也可以自定自定义的名称来操作jQuery
let ￥=jQuery.noConflict();
//=>之后我们就可以直接使用￥调用jQuery的属性和方法


let $=123;
$(function(){
  alert(1)
  //=>报错：$ is not a function
})

jQuery(function($){
  console.log($);
  //=>jQuery本身
});

let $=123;
jQuery(function($){
$(function(){
  alert(1)
  //=>正常弹出，不会报错
})
})
/**
 * 在调用jQuery的时候如果传递一个函数，jQuery会将自己做为实参传递
 * 而函数内部的$是私有变量，无论全局怎么改变，都不会影响使用
 * 因为jQuery在函数内部将自己本身作为实参传递给了$
 */
```

## jQuery 核心函数

`jQuery`的核心函数总共可以接手三种参数

1. HTML 代码片段
2. 字符串选择器
3. 函数
4. DOM 对象

**一.** **HTML 代码片段**

直接书写字符串格式的代码片段传递给`jQuery`,`jQuery`会自动的帮我们转换成`jQuery`对象返回，对象中包含的就是 HTML 标签,我们可以基于一些方法将返回的对象假如到页面中

```javascript
let $span = $("<span>123</span>");
//=>可以创建span标签
$span.appendTo(document.body);
//=>将创建好的span标签插入到body中
```

**二.** **选择器**

---

**基础选择器.**

| 名称       | 用法             | 描述                    |
| ---------- | ---------------- | ----------------------- |
| ID 选择器  | \$('#id')        | 获取指定 ID 的元素      |
| 全选选择器 | \$('\*')         | 匹配所有元素            |
| 类选择器   | \$('.class')     | 获取 class 名相同的元素 |
| 标签选择器 | \$('div')        | 获取同一标签名的元素    |
| 并集选择器 | \$('div,li,p')   | 获取相同标签名的元素    |
| 交集选择器 | \$('li.current') | 交集元素                |

---

**筛选选择器.**

| 名称 | 用法 | 描述 |
| --- | --- | --- |
| :first | \$('li:first') | 获取第一个 li 标签 |
| :last | \$('li:last') | 索取最后一个 li 标签 |
| :qp(index) | \$('li:eq(2)') | 获取到的 li 标签中，选择索引为 2 的 li， index 从 0 开始 |
| :odd | \$('li:odd') | 获取到的 li 标签中，选择索引为奇数的 li |
| :even | \$('li:even') | 获取到的 li 标签中，选择索引为偶数的 li |

---

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

**三.** **函数**

`jQuery`会将传递的函数执行，并且将自己本身作为实参传递给函数的形参,我们通常会将`jQuery`书写在传递给`jQuery`的一个函数中

```javascript
jQuery(function($) {
  console.log($);
  //=>jQuery本身
});
```

**四.** **DOM 对象**

`jQuery`会将传入的原生`js`的`DOM`对象包裹成一个`jQuery`对象，包裹后的原生对象无法使用原生`js`的方法。

```javascript
let body = document.body;
let $body = $(body);
//=>返回jQuery的实例，返回后的jQuery实例无法使用原生js的方法

//=>也可以直接书写表达式
let $body = $(document.body);
//=>返回jQUery的实例
```

## 对象互转

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

$(body).tagName;
//=>undefined

//=>方法无法互用
```

**`jQuery`转原生**

`jQuery`获取到的类数组中存储的就是原生`js`对象，我们只需要将索引位置上的原生对象取出即可。

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

### 筛选和获取

---

| 名称 | 用法 | 描述 |
| --- | --- | --- |
| parent() | \$('li').parent | 查找最近一级的父元素 |
| parents() | \$('li').parents | 查找所有的父元素 |
| children(selector) | \$('li').children('a') | 获取最近一级的子元素 |
| find(selector) | \$('li').find('a') | 查找层级下所有的子元素，（后代选择器） |
| siblings(selector) | \$('li').siblings('li') | 获取所有的兄弟元素，不包含自己本身 |
| prevtAll | \$('li').nextAll() | 获取 li 之前的同辈元素 |
| nextAll | \$('li').nextAll() | 获取 li 之前的同辈元素 |
| hasClass | \$('div').hasClass('box') | 检查当前元素是否含有某一个 class 名 |
| eq(index) | \$('li').eq(2) | 根据索引获取元素集合中的某一项 |

---

**`each`**

`jQuery`中的`each`方法有三种书写方式，都可以遍历数组、类数组、json、对象。类似于数组的`dorEach`方法

**一.** `$.each()`

直接调用`jQuery`中的私有`each`属性，和`for/in`循环作用一样

```javascript
let obj = { name: "绫", age: 18, sex: "女" };
$.each(obj, function(key, value) {
  console.log(key, value);
});
/**
 * key输出的对象的属性名  value输出的是对应的值
 * 和for/in循环一样，会遍历出我们设置在原型中的一些方法和属性
 */

//=>遍历数组
$.each([10, 20, 30, 40, 50], function(index, item) {
  console.log(index, item);
});
/**
 * index会输出索引，item会输出数组对应的值
 * 和forEach不同的是each第一个参数代表的是索引
 * 第二个参数代表的才是数组中的每一项
 */
```

**二.** `$().each()`

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

### 动画和样式

**`width()`/`height()`**

- 获取/设置元素的宽高(不包含 padding,margin,border)

```javascript
//=>返回的是纯数字,css获取的是带有单位的
$element.width();
$element.height();

//=>如果书写参数则是设置元素的样式属性
$element.width("100px");
$element.height("100px");
```

**`innerWidth()`/`innerHeight()`**

- 获取元素的宽高(包含 padding),不接收参数,==>`clientWidth`/`clientHeight`

```javascript
$element.innerWidth();
//=>获取元素的宽度
$element.innerHeight();
//=>获取元素的高度
```

**`outerWidth`/`outerHeight`**

- 返回元素的宽高(包含 padding,border,选择性 margin)

```javascript
$element.outerWidth();
$element.outerHeight();
//=>获取元素的宽高,默认不获取margin
//=>  不书写参数的情况下==>offsetWidth/offsetHeight

//=>可以书写参数以获取margin值(参数为boolean值)
$element.outerWidth(true);
$element.outerHeight(true);
//=>获取包含padding,border,margin值得宽高
```

**`offset()`**

- 获取元素距离`document`的坐标(偏移量),返回一个对象

```javascript
$element.offset();
//=>{top:value,left:value}

//=>也可以直接获取某个值
$element.offset().top;
```

**`css`**

`css`方法在`jQuery`中有三中不同的书写方法，都是用于操作`DOM`元素`。

```javascript
jQuery(function($) {
  $(function() {
    $(selector).css("width");
    //=>如果只书写一个参数，则会返回需要获取的样式

    $(selector).css("width", "100px");
    //=>书写两个参数是设置元素的样式，都是用引号包裹起来

    $(selector).css({
      width: "100px",
      height: "100px",
      backgroundColor: "orangered"
    });
    /**
     * 书写一个对象可以批量设置该元素的多个样式
     * 书写方式就是普通的对象语法
     * 如果修改的是一个复合的样式
     * 需要使用驼峰命名法
     * 如果样式的值是纯数字可以不使用引号
     */
  });
});
```

**`addClass`/`removeClass`/`toggleClass`**

1. `addClass`添加类名
2. `removeClass`删除类名
3. `toggleClass`切换类型(拥有则删除,没有则添加)

```html
<style>
  .current {
    width: 200px;
    height: 200px;
    background: #7e00ff;
    font-size: 18px;
    text-align: center;
    position: absolute;
  }
</style>
<body>
  <div>凌</div>
  <script>
    jQuery(function($) {
      $(function() {
        $("div").addClass("current");
        //=>将一个类名添加到页面文档元素中

        $("div").removeClass("current");
        //=>将页面文档元素中的类名删除

        $("div").toggleClass("current");
        //=>如果元素中有这个类名，则删除，没有则添加
      });
    });
  </script>
</body>
```

**`show`/`hide`/`toggle`**

1. `show`显示元素
2. `hide`隐藏元素
3. `toggle`切换(显示则隐藏,隐藏则显示)

```javascript
jQuery(function($) {
  $(function() {
    $(selector).show();
    //=>可以将一个隐藏的元素显示
    /**
     * 可以传递三种参数，表示动画效果和回调函数
     * 如果省略掉所有的参数就是直接显示，没有任何动画效果
     * 1.速度：slow normal fast ，也可以使用字符串自定义
     * 2.动画样式：默认是swing 可以修改为linear
     * 3.回调函数：在动画完成之后执行
     */

    $(selector).hide();
    //=>将显示的元素隐藏
    //=>参数和show()一样

    $(selector).toggle();
    //=>元素处于隐藏状态就显示，处于显示状态就隐藏
    //=>三种方法传递的传递都是一样的
  });
});
```

**`slideUp`/`slideDown`/`slideToggle`**

1. `slideDown`下拉滑动效果
2. `slideUp`上拉滑动效果
3. `slideToggle`滑动效果切换

- 速度：slow normal fast ，也可以使用字符串自定义
- 动画样式：默认是 swing 可以修改为 linear
- 回调函数：在动画完成之后执行

```javascript
jQuery(function($) {
  $(function() {
    $(selector).slideUp(‘100’，linear,function(){
      alert(1);
    });
    //=>上拉动画
    //=>第一个参数表示100毫秒执行完毕
    //=>第二个参数表示动画的效果
    //=>第三个表示动画结束之后执行函数，浏览器弹出1
    $(selector).slideDown();
    //=>下拉动画

    $(selector).slideToggle();
    //=>切换动画
  });
});
```

**`stop` / `finish`**

- 停止当前正在运行的动画效果，有时候鼠标滑动或点击效果高频率触发的时候，会造成鼠标离开后依然会运行动画，直至触发的时间执行完毕，`stop`可以立即停止当前正在运行的动画
- `finish`和`stop`大致相同，区别是`stop`是立即停止当前的动画，而`finish`则会直接跳到目标位置后，然后再结束动画

```javascript
jQuery(function($) {
  $(function() {
    $(selector)
      .stop()
      .slideToggle();
    //=>必须书写在动画函数之前，否则动画只会执行一次
  });
});
```

### 事件

**`on`/`off`/`bind`/`unbind`/`one`**

1. `on`/`bind`绑定事件
2. `off`/`unbind`删除事件
3. `click`/`mousemove`...快捷写法
4. `one`绑定的事件执行一次之后就会被移除

```javascript
$(function() {
  //=>通过元素的类名获取jQuery对象
  $box = $(".box");

  //=>绑定点击事件的方法
  $box.on("click", function() {
    console.log(1);
    //=>jQuery中所有的事件绑定都是以 on 为基础
  });
  $box.on("click mousemove", function() {
    console.log(2);
    //=>on可以同时为两个事件绑定同一个方法
  });

  $box.bind("click", function() {
    console.log(1);
    //=>使用bind绑定
  });

  $box.click(function() {
    console.log(1);
    //=>以on绑定方法衍生的快捷书写方法
  });

  //=>删除事件的方法,(事件绑定的方法必须是具名函数,无法移除匿名函数)
  $box.off("click", test1);
  $box.unbind("click", test1);
});

$box.one("click", function() {
  console.log(1);
  //=>只会执行一次,执行完毕之后会立即删除这个事件
});
```

**`delegate`**

事件委托,1.7 版本之前使用`live`方法

语法: `$(委托对象).delegate(事件源,事件,事件方法)`

```javascript
$body = $("body");
$body.delegate(".box", "click", function() {
  console.log(1);
  //=>body所有子元素的标签中带有类名.box的标签都可以执行点击事件
});
```

**`hover`**

相当于给一个元素同时绑定`mouseenter`和`mouseleave`两个事件,需要传递两个函数,如果只传递一个函数,则代表鼠标进入和离开都执行同一个函数

```javascript
jQuery(function($) {
  $(function() {
    ${selector}.hover(function(){alert(0)},function(){alert(1)});
    //=>鼠标进入弹出0，鼠标离开弹出1

    //=>如果值书写一个函数，则鼠标进入和离开都会执行
    $(selector).hover(function(){
      alert(2)=
      //=>一共会弹出两个2
    })
  });
});
```