## 浅聊前端发展史

第一阶段：C/S（client server） -> B/S（browser server） 网页制作技术栈：PhotoShop、HTML、CSS

第二阶段：从静态到动态，从后端到前端 前端开发工程师前后端分离后台：完成数据的分析和业务逻辑编写（包含 API 接口编写）前端：网页制作、JS 交互效果、数据的交互和绑定

技术栈：JavaScript、AJAX（跨域技巧）、jQuery...

第三阶段：从前端到全端（从 PC 端到移动端）技术栈：H5、CSS3、响应式布局开发、Zepto、Hybrid（混合 APP 开发）、微信小程序...

第四阶段：从全端到全栈全栈开发：前后端都可以开发（严格意义讲，一种语言完成前后端开发）技术栈：NODE(基于 JS 编程语言开发服务器端程序)、Express/Koa...

为了迎合日益发展的前端开发，JS 中诞生很多有助于开发、维护、提高性能的框架：Vue、React、Angular、webpack...

展望 WEB4.0 时代，VR/AR 元年，前端需要 Canvas/webGL...

---

### 关于浏览器的内核和引擎

webkit（v8 引擎）：大部分浏览器 gecko：火狐 trident：IE ...

W3C：万维网联盟，制定编程语言的规范与标准开发者按照规范编写代码，浏览器开发商也会开发一套按照规范把代码渲染成页面的东西（这个东西就是内核或者引擎）

浏览器内核作用：按照一定的规范，把代码基于 GPU(显卡)绘制出对应的图形和页面等

为啥会出现浏览器兼容： 1.部分浏览器会提前开发一些更好的功能，后期这些功能会被收录到 W3C 规范中，但是在收录之前，会存在一定的兼容性 2.各个浏览器厂商，为了突出自己的独特性，用其它方法实现了 W3C 规范中的功能 ...

---

## JavaScript

JS：轻量级的客户端脚本编程语言

1. 编程语言 HTML+CSS 是标记语言编程语言是具备一定逻辑的，拥有自己的编程思想（面向对象编程 [OOP]、面向过程编程）

- 面向对象
  - C++
  - JAVA
  - PHP
  - C#（.net）
  - JS
  - ...
- 面向过程
  - C

2. 目前的 JS 已经不仅仅是客户端语言了，基于 NODE 可以做服务器端程序，所以 JS 是全栈编程语言

3. 学习 JS，我们学习它的几部分组成

- ECMAScript（ES）：JS 的核心语法
- DOM：document object model 文档对象模型，提供各种 API（属性和方法）让 JS 可以获取或者操作页面中的 HTML 元素(DOM 和元素)
- BOM：browser object model 浏览器对象模型，提供各种 API 让 JS 可以操作浏览器

### ESMAScript

它是 JS 的语法规划，JS 中的变量、数据类型、语法规范、操作语句、设计模式等等都是 ES 规定的

---

## 变量（variable）

它不是具体的值，只是一个用来存储具体值的容器或者代名词，因为它存储的值可以改变，所以称为变量

### 创建方式

基于 ES 语法规范，在 JS 中创建变量有以下方式

- var (ES3)
- function (ES3) 创建函数(函数名也是变量，只不过存储的值是函数类型的而已)
- let (ES6)
- const (ES6) 创建的是常量
- import (ES6) 基于 ES6 的模块规范导出需要的信息
- class (ES6) 基于 ES6 创建类

```javascript
/*
 * 语法：
 *   var [变量名]=值
 *   let [变量名]=值
 *   const [变量名]=值
 *   function 函数名(){
 *
 *   }
 *   ...
 */
var n = 13;
n = 15;
alert(n + 10); //=>弹出来25 此时的N代表15

const m = 100;
m = 200; //=>Uncaught TypeError: Assignment to constant variable. 不能给一个常量重新的赋值（常量存储的值不能被修改，能够修改就是变量了）
```

创建变量，命名的时候要遵循一些规范

- 严格区分大小写
- 遵循驼峰命名法：按照数字、字母、下划线或者\$来命名（数字不能做为名字的开头），命名的时候基于英文单词拼接成一个完整的名字（第一个单词字母小写，其余每一个有意义单词的首字母都大写）
- 不能使用关键字和保留字：在 JS 中有特殊含义的叫做关键词，未来可能会成为关键字的叫做保留字

```javascript
var n=12;
var N=13; //=>两个n不是同一个变量

var studentInfo / student_info / _studentInfo（下划线在前的，都是公共变量） / $studentInfo（一般存储的是JQ元素）...

语义化强一些
  add / create / insert
  del（delete）/ update / remove（rm）
  info / detail
  log
  ...
```

---

## 数据类型

数据值是一门编程语言进行生产的材料，JS 中包含的值有以下这些类型

- 基本数据类型（值类型）
  - 数字 number
  - 字符串 string
  - 布尔 boolean
  - null
  - undefined
- 引用数据类型
  - 对象 object
    - 普通对象
    - 数组对象
    - 正则对象
    - 日期对象
    - ...
  - 函数 function
- ES6 中新增加的一个特殊的类型：Symbol，唯一的值

```javascript
[基本数据类型]
var n = 13; //=>0 -13 13.2 数字类型中有一个特殊的值NaN（not a number代表不是一个有效的数字,但是属于number类型的）

var s = '';//=>"" '13' "{}" JS中所有用单引号或者双引号包裹起来的都是字符串，里面的内容是当前字符串中的字符（一个字符串由零到多个字符组成）

var b = true;//=>布尔类型只有两个值 true真 false假

[引用数据类型]
var o = {name:'珠峰培训',age:9};//=>普通的对象：由大括号包裹起来，里面包含多组属性名和属性值（包含多组键值对） {}空对象

var ary = [12,23,34,45]; //=>中括号包裹起来，包含零到多项内容，这种是数组对象  []空数组

var reg = /-?(\d|([1-9]\d+))(\.\d+)?/g; //=>由元字符组成一个完整的正则  //不是空正则是单行注释

function fn(){

}

[Symbol]
创建出来的是一个唯一的值
var a = Symbol('珠峰');
var b = Symbol('珠峰');
a==b =>false
```

### 运行结果小扩展

扩展：JS 代码如何被运行以及运行后如何输出结果 [如何被运行]

- 把代码运行在浏览器中(浏览器内核来渲染解析)
- 基于 NODE 来运行(NODE 也是一个基于 V8 引擎渲染和解析 JS 的工具)

[如何输出结果]

- alert：在浏览器中通过弹框的方式输出(浏览器提示框)

```javascript
var num=12;
alert(num); //=>window.alert

var str='珠峰';
alert(str);

基于alert输出的结果都会转换为字符串：把值(如果是表达式先计算出结果)通过toString这个方法转换为字符串，然后再输出
alert(1+1); =>'2'
alert(true); =>'true'
alert([12,23]); =>'12,23'
alert({name:'xxx'}); =>'[object Object]' 对象toString后的结果就是object object，为啥？
```

- confirm：和 alert 的用法一致，只不过提示的框中有确定和取消两个按钮，所以它是确认提示框

```javascript
var flag = confirm("确定要退出吗?");
if (flag) {
  //=>flag:true 用户点击的是确定按钮
} else {
  //=>flag:false 用户点击的是取消按钮
}
```

- prompt：在 confirm 的基础上增加输入框

- console.log：在浏览器控制台输出日志（按 F12(FN+F12)打开浏览器的控制台）

  - Elements：当前页面中的元素和样式在这里都可以看到，还可以调节样式修改结构等
  - Console：控制台，可以在 JS 代码中通过.log 输出到这里，也可以在这里直接的编写 JS 代码
  - Sources：当前网站的源文件都在这里
  - ...

- console.dir：比 log 输出的更加详细一些（尤其是输出对象数据值的时候）
- console.table：把一个 JSON 数据按照表格的方式输出
- ... （自己回去扩展更多 console 输出方法）

---

## 数据类型的详细剖析

1. number 数字类型 NaN：not a number 但是它是数字类型的 isNaN：检测当前值是否不是有效数字，返回 true 代表不是有效数字，返回 false 是有效数字

```javascript
//=>语法：isNaN([value])
var num=12;
isNaN(num); //->检测num变量存储的值是否为非有效数字 false

isNaN('13') =>false
isNaN('珠峰') =>true
isNaN(true) =>false
isNaN(false) =>false
isNaN(null) =>false
isNaN(undefined) =>true
isNaN({age:9}) =>true
isNaN([12,23]) =>true
isNaN([12]) =>false
isNaN(/^$/) =>true
isNaN(function(){}) =>true

重要：isNaN检测的机制
1、首先验证当前要检测的值是否为数字类型的，如果不是，浏览器会默认的把值转换为数字类型

  把非数字类型的值转换为数字
  - 其它基本类型转换为数字：直接使用Number这个方法转换的

  [字符串转数字]
    Number('13') ->13
    Number('13px') ->NaN 如果当前字符串中出现任意一个非有效数字字符，结果则为NaN
    Number('13.5') ->13.5 可以识别小数

  [布尔转数字]
    Number(true) ->1
    Number(false) ->0

  [其它]
    Number(null) ->0
    Number(undefined) ->NaN

  - 把引用数据类型值转换为数字：先把引用值调取toString转换为字符串，然后再把字符串调取Number转换为数字

   [对象]
     ({}).toString() ->'[object Object]' ->NaN

   [数组]
     [12,23].toString() ->'12,23' ->NaN
     [12].toString() ->'12' ->12

   [正则]
     /^$/.toString() ->'/^$/' ->NaN

  Number('') ->0
  [].toString() ->''
  => isNaN([])：false

2、当前检测的值已经是数字类型，是有效数字返回false，不是返回true（数字类型中只有NaN不是有效数字，其余都是有效数字）

```

### parseInt / parseFloat

> 等同于 Number，也是为了把其它类型的值转换为数字类型

> 和 Number 的区别在于字符串转换分析上
>
> Number：出现任意非有效数字字符，结果就是 NaN
>
> parseInt：把一个字符串中的整数部分解析出来，parseFloat 是把一个字符串中小数(浮点数)部分解析出来

```
parseInt('13.5px') =>13
parseFloat('13.5px') =>13.5

parseInt('width:13.5px') =>NaN 从字符串最左边字符开始查找有效数字字符，并且转换为数字，但是一但遇到一个非有效数字字符，查找结束
```

### NaN 的比较

```
NaN==NaN：false NaN和谁都不相等，包括自己
```

思考题：有一个变量 num，存储的值不知道，我想检测它是否为一个有效数字，下面方案是否可以

```javascript
if(Number(num)==NaN){
    alert('num不是有效数字!');
}

NaN和谁都不相等，条件永远不成立（即使num确实不是有效数字，转换的结果确实是NaN，但是NaN!=NaN的）

if(isNaN(num)){
    //=>检测是否为有效数字，只有这一种方案
    alert('num不是有效数字!')
}
```

### 布尔类型

> 只有两个值：true / false

如何把其它数据类型转换为布尔类型?

- Boolean
- ! 取反
- !!

```javascript
Boolean(1) =>true

!'珠峰培训' =>先把其它数据类型转换为布尔类型，然后取反

!!null =>去两次反，等价于没取反，也就剩下转换为布尔类型了
```

规律：**`在JS中只有“0/NaN/空字符串/null/undefined”这五个值转换为布尔类型的false，其余都转换为true`**

---

### null && undefined

> 都代表空或者没有
>
> - null：空对象指针
> - undefined：未定义

null 一般都是意料之中的没有（通俗理解：一般都是人为手动的先赋值为 null，后面的程序中我们会再次给他赋值）

```javascript
var num = null; //=>null是手动赋值，预示着后面我会把num变量的值进行修改
...
num = 12;
```

undefined 代表的没有一般都不是人为手动控制的，大部分都是浏览器自主为空（后面可以赋值也可以不赋值）

```javascript
var num; //=>此时变量的值浏览器给分配的就是undefined
...
后面可以赋值也可以不赋值
```

刘天瑞（BOY）的女朋友是 null，他的男朋友是 undefined

---

### object 对象数据类型

> 普通对象
>
> - 由大括号包裹起来的
> - 由零到多组属性名和属性值（键值对）组成

`属性是用来描述当前对象特征的，属性名是当前具备这个特征，属性值是对这个特征的描述（专业语法，属性名称为键[key]，属性值称为值[value]，一组属性名和属性值称为一组键值对）`

```javascript
var obj = {
	name:'珠峰培训',
	age:9
};
//=>对象的操作：对键值对的增删改查
语法：对象.属性 / 对象[属性]

[获取]
obj.name
obj['name']  一般来说，对象的属性名都是字符串格式的（属性值不固定，任何格式都可以）

[增/改]
JS对象中属性名是不允许重复的，是唯一的
obj.name='周啸天'; //=>原有对象中存在NAME属性，此处属于修改属性值
obj.sex='男'; //=>原有对象中不存在SEX，此处相当于给当前对象新增加一个属性SEX
obj['age']=28;

[删]
彻底删除：对象中不存在这个属性了
delete obj['age'];

假删除：并没有移除这个属性，只是让当前属性的值为空
obj.sex=null;

----
在获取属性值的时候，如果当前对象有这个属性名，则可以正常获取到值（哪怕是null），但是如果没有这个属性名，则获取的结果是undefined
obj['friends'] =>undefined
```

思考题：

```javascript
var obj = {
	name:'珠峰培训',
	age:9
};
var name = 'zhufeng';

obj.name  =>'珠峰培训'  获取的是NAME属性的值
obj['name'] =>'珠峰培训' 获取的是NAME属性的值
obj[name] =>此处的NAME是一个变量,我们要获取的属性名不叫做NAME，是NAME存储的值'zhufeng' =>obj['zhufeng'] =>没有这个属性,属性值是undefined

----
'name' 和 name 的区别?
  => 'name'是一个字符串值，它代表的是本身
  => name是一个变量，它代表的是本身存储的这个值
```

一个对象中的属性名不仅仅是字符串格式的，还有可能是数字格式的

```
var obj = {
	name:'珠峰培训',
	0:100
};
obj[0] =>100
obj['0'] =>100
obj.0 =>Uncaught SyntaxError: Unexpected number

----
当我们存储的属性名不是字符串也不是数字的时候，浏览器会把这个值转换为字符串（toString），然后再进行存储

obj[{}]=300;  =>先把({}).toString()后的结果作为对象的属性名存储进来 obj['[object Object]']=300

obj[{}] =>获取的时候也是先把对象转换为字符串'[object Object]',然后获取之前存储的300

----
数组对象（对象由键值对组成的）
var oo = {
	a:12
};
var ary = [12,23]; //=>12和23都是属性值，属性名呢？

通过观察结果，我们发现数组对象的属性名是数字（我们把数字属性名称为当前对象的索引）
ary[0]
ary['0']
ary.0  =>报错
```

---

### JS 中的判断操作语句

### if / else if / else

```javascript
var num = -6;
if (num > 10) {
  num++; //=>num=num+1 num+=1 在自身的基础上累加1
} else if (num >= 0 && num <= 10) {
  num--;
} else {
  num += 2;
}
console.log(num);
```

只要有一个条件成立，后面不管是否还有成立的条件，都不在判断执行了

```javascript
var num = 10;
if (num > 5) {
  num += 2;
} else if (num > 8) {
  num += 3;
} else {
  num += 4;
}
console.log(num); //=>12
```

关于条件可以怎么写？

```javascript
// >= / <= / == 常规比较
if(0){
	//=>不管你在条件判断中写什么，最后总要把其计算出TRUE/FALSE来判断条件是否成立（把其它类型的值转换为布尔类型，只有 0/NaN/''/null/undefined 是false，其余都是true）
}

if('3px'+3){
	//=>在JS中，+ - * / % 都是数学运算，除 + 以外，其余运算符在运算的时候，如果遇到了非数字类型的值，首先会转换为数字类型（Number），然后再进行运算

	//=>+ 在JS中除了数学相加，还有字符串拼接的作用（如果运算中遇到了字符串，则为字符串拼接，而不是数学相加）

	'3px'+3 =>'3px3'
}
if('3px'-3){
	'3px'-3 =>NaN
}
```

### switch case

> JS 中的一种判断方式

```javascript
var num = 12;
if (num == 10) {
  num++;
} else if (num == 5) {
  num--;
} else {
  num = 0;
}

//=>改成switch case
switch (num) {
  case 10:
    num++;
    break;
  case 5:
    num--;
    break;
  default:
    num = 0;
}

//=>switch case 应用于变量（或者表达式等）在不同值情况下的不同操作，每一种case结束后都要加break（结束整个判断）
```

switch case 中每一种 case 情况的比较都是基于"==="绝对相等来完成的

```javascript
'10'==10
=>true 相等比较,如果等号左右两边的类型不一样，首先会转换为一样的数据类型，然后再进行比较
=>当前案例中，就是把字符串'10'转换为数字了，然后再比较的

'10'===10 绝对比较，如果两边的数据类型不一样，则直接不相等，它要求类型和值都完全一样才会相等（真实项目中为了保证代码的严谨性，我们应该更多使用绝对比较）
```

function fn(){ var total=10; total+=10; total/=2; total=total.toFixed(2); console.log(total); } fn(); fn(); ... 想用多少次，我们就执行多少次函数即可

===== ES3 标准中： //=>创建函数 function 函数名([参数]){ 函数体：实现功能的 JS 代码 } //=>函数执行函数名();

===== ES6 标准中创建箭头函数： let 函数名(变量名)=([参数])=>{ 函数体 } 函数名();

let fn=()=>{ let total=10; ... }; fn();

### BAT 面试题：

```javascript
var num = parseInt("width:35.5px");
if (num == 35.5) {
  alert(0);
} else if (num == 35) {
  alert(1);
} else if (num == NaN) {
  alert(2);
} else if (typeof num == "number") {
  //=>先算typeof num
  //=>在做比较
  alert(3); //=>alert输出的都是字符串格式的 '3'
} else {
  alert(4);
}
```

### typeof

> 在 JS 中用来检测数据类型的方式之一，除了它以外，还有：
>
> - instanceof
> - constructor
> - Object.prototype.toString.call()

```javascript
语法：typeof [value] =>检测value的数据类型

返回值：使用typeof检测出来的结果是一个字符串，字符串中包含着对应的数据类型，例如："number"/"string"/"boolen"/"undefined"/"object"/"function"

typeof null =>"object" 因为null代表空对象指针（没有指向任何的内存空间）

typeof检测数组/正则/对象，最后返回的都是"object"，也就是基于这种方式无法细分对象

面试题：
console.log(typeof []);
//=>"object"

console.log(typeof typeof []);
//=>typeof "object"
//=>"string"
```

## 运算符概述

第 2 章：变量和数据类型，解决数据存放问题第 3 章：运算符，解决数据运算的问题，面试题密集

### 操作符和操作数

操作符：运算符，参与运算的符号

操作数：参与运算的数据，也称之为“元”

操作符不一定只有一个符号

操作符出现在不同的位置，可能具有不同的含义

```js
1 - 2;
-1.2;
```

目前接触的操作符：

1. `=`：赋值符号，将右边的数据赋值给左边
2. `.`: 访问符号，用于访问对象的属性
3. `[]`：访问符号，用于访问对象的属性
4. `()`：函数调用

### 分类

按操作数数量区分：

1. 一元（目）运算符：() . []
2. 二元（目）运算符: + - / \* % =
3. 三元（目）运算符: ?:

功能区分：

1. 算术运算符（数学）
2. 比较运算符
3. 逻辑运算符
4. 位运算符
5. 其他

### 表达式

表达式 = 操作符 + 操作数

每个表达式都有一个运算结果，该结果叫做**返回值**，返回值的类型叫做**返回类型**

所有的表达式都可以当作数据使用。

目前学习的运算符的返回值和类型

1. `=`：该表达式，返回赋值的结果
2. `.`：属性访问表达式，返回的是属性的值
3. `[]`：属性访问表达式，返回的是属性的值
4. `()`：函数调用表达式，返回的结果取决于函数的运行
5. 如果是一个声明+赋值的表达式，返回结果为 undefined。

console.log 函数调用的返回结果为 undefined

> chrome 浏览器控制台的环境是 REPL 环境 REPL：Read Eval Print Loop，读-执行-打印-循环当直接在控制台书写代码时，除了运行代码之外，还会输出该表达式的返回值

## 算术运算符

数学运算符

1. `+ - * /`
2. `+ -`
3. `%`
4. `++ --` (下节课讨论)
5. `**` 幂

### 细节

1. 数字运算是不精确的
2. 除数为 0

如果被除数是正数，得到结果 Infinity （正无穷）如果被除数是负数，得到结果 -Infinity （负无穷）如果被除数是 0，得到结果 NaN （Not a Number，非数字）

> typeof 函数返回类型为 string isNaN 函数，该函数用于判断一个数据是否是 NaN，返回 boolean isFinite 函数，该函数用于判断一个数据是否是有限的，返回 boolean

3. 求余

%，有的教程称之为求模

余数的符号，与被除数相同。

### 其他类型使用算术运算

1. 除加号之外的算术运算符

将原始类型转换为数字类型（自动完成转换），然后进行运算。

- boolean： true -> 1, false -> 0

- string: 如果字符串内部是一个正确的数字，直接变为数字，如果是一个非数字，则得到 NaN（能识别 Infinity，不能把字符串内部的东西当作表达式），如果字符串是一个空字符串（没有任何内容），转换为 0. 字符串转换时，会忽略前后空格。

  > NaN 虽然是数字，但它和任何数字作任何运算，得到的结果都是 NaN

- null：null -> 0

- undefined: undefined -> NaN

将对象类型先转换为字符串类型，然后再将该字符串转换为数字类型

对象类型 -> "[object Object]" -> NaN

2. 加号运算符

- 加号一边有字符串，含义变为字符串拼接

将另一边的其他类型，转换为字符串

数字 -> 数字字符串 boolean -> boolean 字符串 null -> "null" undefined -> "undefined" 对象 -> "[object Object]"

- 加号两边都没有字符串，但一边有对象，将对象转换为字符串，然后按照上面的规则进行
- 其他情况和上面的数学运算一致

### 三元运算符

> 语法：条件?成立做的事情:不成立做的事情; <=>相当于简单的 if/else 判断

```javascript
var num = 12;
if (num > 10) {
  num++;
} else {
  num--;
}
//=>改写成三元运算符
num > 10 ? num++ : num--;
```

特殊情况

```javascript
//=>如果三元运算符中的某一部分不需要做任何的处理，我们用 null/undeifned/void 0... 占位即可
var num = 12;
num > 10 ? num++ : null;

//=>如果需要执行多项操作，我们把其用小括号包裹起来，每条操作语句用逗号分隔
num = 10;
num >= 10 ? (num++, (num *= 10)) : null;
```

思考题

```javascript
var num = 12;
if(num>0){
	if(num<10){
		num++;
	}else{
		num--;
	}
}else{
	if(num==0){
		num++;
		num=num/10;
	}
}
改写成三元运算符！
```

## JS 中数据类型转换汇总

JS 中的数据类型分为【基本数据类型】数字 number 字符串 string 布尔 boolean 空 null 未定义 undefined 【引用数据类型】对象 object 普通对象数组对象 (Array) 正则对象 (RegExp) 日期对象 (Date) 数学函数 (Math) ... 函数 function

真实项目中，根据需求，我们往往需要把数据类型之间进行转换

### 转换为 number 类型

`1.发生的情况`

- isNaN 检测的时候：当检测的值不是数字类型,浏览器会自己调用 Number 方法把它先转换为数字，然后再检测是否为非有效数字

```javascript
isNaN('3') =>false
  Number('3')->3
  isNaN(3)->false

isNaN('3px') =>true
  Number('3px')->NaN
  isNaN(NaN)->true
```

- 基于 parseInt/parseFloat/Number 去手动转换为数字类型
- 数学运算：+ - \* / %，但是“+”不仅仅是数学运算，还可能是字符串拼接

```javascript
'3'-1 =>2
  Number('3')->3
  3-1->2

'3px'-1 =>NaN

'3px'+1 =>'3px1' 字符串拼接

var i='3';
i=i+1; =>'31'
i+=1; =>'31'
i++; =>4  i++就是单纯的数学运算，已经摒弃掉字符串拼接的规则
```

- 在基于“==”比较的时候，有时候也会把其它值转换为数字类型
- ...

`2.转换规律`

```javascript
//=>转换的方法：Number（浏览器自行转换都是基于这个方法完成的）

【把字符串转换为数字】
只要遇到一个非有效数字字符，结果就是NaN
'' ->0
' ' ->0 空格(Space)
'\n' ->0 换行符(Enter)
'\t' ->0 制表符(Tab)


【把布尔转换为数字】
true ->1
false ->0

【把没有转换为数字】
null ->0
undefined ->NaN

【把引用类型值转换为数字】
首先都先转换为字符串（toString），然后再转换为数字（Number）
```

### 转换为字符串

`1.发生的情况`

- 基于 alert/confirm/prompt/document.write 等方法输出内容的时候，会把输出的值转换为字符串，然后再输出

```javascript
alert(1) =>'1'
```

- 基于“+”进行字符串拼接的时候
- 把引用类型值转换为数字的时候，首先会转换为字符串，然后再转换为数字
- 给对象设置属性名，如果不是字符串，首先转换为字符串，然后再当做属性存储到对象中（对象的属性只能是数字或者字符串）
- 手动调用 toString/toFixed/join/String 等方法的时候，也是为了转换为字符串

```javascript
var n=Math.PI;//=>获取圆周率：
n.toFixed(2) =>'3.14'

var ary=[12,23,34];
ary.join('+') =>'12+23+34'
```

- ...

`2.转换规律`

```javascript
//=>调用的方法：toString

【除了对象，都是你理解的转换结果】
1 ->'1'
NaN ->'NaN'
null ->'null'
[] ->''
[13] ->'13'
[12,23] ->'12,23'
...

【对象】
{name:'xxx'} ->'[object Object]'
{} ->'[object Object]'
不管是啥样的普通对象，最后结果都一样
```

### 转换为布尔类型

`1.发生的情况`

- 基于!/!!/Boolean 等方法转换
- 条件判断中的条件最后都会转换为布尔类型
- ...

```javascript
if (n) {
  //=>把n的值转换为布尔验证条件真假
}

if ("3px" + 3) {
  //=>先计算表达式的结果'3px3'，把结果转换为布尔true，条件成立
}
```

`2.转换的规律` 只有“0/NaN/''/null/undefined”五个值转换为布尔的 false,其余都是转换为 true

### 特殊情况：数学运算和字符串拼接 “+”

```javascript
//=>当表达式中出现字符串，就是字符串拼接，否则就是数学运算

1+true =>2 数学运算
'1'+true =>'1true' 字符串拼接

[12]+10 =>'1210' 虽然现在没看见字符串，但是引用类型转换为数字，首先会转换为字符串，所以变为了字符串拼接
({})+10 =>"[object Object]10"
[]+10 =>"10"

{}+10 =>10 这个和以上说的没有半毛钱关系，因为它根本就不是数学运算，也不是字符串拼接，它是两部分代码
  {} 代表一个代码块（块级作用域）
  +10 才是我们的操作
  严格写法：{}; +10;
```

思考题：

```javascript
12+true+false+null+undefined+[]+'珠峰'+null+undefined+[]+true
=>'NaN珠峰nullundefinedtrue'

12+true ->13
13+false ->13
13+null ->13
13+undefined ->NaN
NaN+[] ->'NaN'
'NaN'+'珠峰' ->'NaN珠峰'
...
'NaN珠峰trueundefined'
'NaN珠峰trueundefined'+[] ->'NaN珠峰trueundefined'
...
=>'NaN珠峰trueundefinedtrue'

```

### 特殊情况：“==”比较

特殊情况：“==”在进行比较的时候，如果左右两边的数据类型不一样，则先转换为相同的类型，再进行比较

对象==对象：不一定相等，因为对象操作的是引用地址，地址不相同则不相等

```javascript
{name:'xxx'}=={name:'xxx'} =>false
[]==[] =>false

var obj1={};
var obj2=obj1;
obj1==obj2 =>true

```

==========================>上面是重点强调的

对象==数字：把对象转换为数字对象==布尔：把对象转换为数字，把布尔也转换为数字对象==字符串：把对象转换为数字，把字符串也转换为数字字符串==数字：字符串转换为数字字符串==布尔：都转换为数字布尔==数字：把布尔转换为数字 ===========================>不同情况的比较，都是把其它值转换为数字，然后再进行比较的

null==undefined：true null===undefined：false null&&undefined 和其它值都不相等

NaN==NaN：false NaN 和谁都不相等包括自己 ===========================>以上需要特殊记忆

```javascript
1==true =>true
1==false =>false
2==true =>false  规律不要混淆，这里是把true变为数字1


[]==true：false  都转换为数字 0==1
![]==true：false

[]==false：true  都转换为数字 0==0
![]==false：true  先算![]，把数组转换为布尔取反=>false  =>false==false

```

### 关于 JS 数组常用方法的剖析

数组也是对象数据类型的，也是由键值对组成的

```javascript
var ary = [12,23,34];
/*
 * 结构:
 *  0:12
 *  1:23
 *  2:34
 *  length:3
 */
1. 以数组作为索引（属性名），索引从零开始递增
2. 有一个LENGTH属性存储的是数组长度

ary[0] 获取第一项
ary[ary.length-1] 获取最后一项
```

数组中每一项的值可以是任何数据类型的

```javascript
//=>多维数组
var ary = [
  {
    name: "xxx",
    age: 20
  },
  {
    name: "xxx",
    age: 20
  }
];
```

### 数组中的常用方法

> 按照四个维度记忆：
>
> - 方法的作用
> - 方法的参数
> - 方法的返回值
> - 原有数组是否改变

**`push`** 作用：向数组“末尾”追加新的内容参数：追加的内容（可以是一个，也可是多个）返回值：新增后数组的长度原有数组改变

```javascript
var ary = [12, 23, 34];
ary.push(100); //=>4  ary:[12,23,34,100]
ary.push(100, { name: "xxx" }); //=>6  ary:[12,23,34,100,100,{...}]
```

**`pop`** 作用：删除数组最后一项参数：无返回：被删除的那一项内容原有数组改变 ![nNQTrF.png](https://s2.ax1x.com/2019/09/10/nNQTrF.png)

**`shift`** 作用：删除数组中的第一项参数：无返回：被删除的那一项内容原有数组改变 ![nNQv26.png](https://s2.ax1x.com/2019/09/10/nNQv26.png)

**`unshift`** 作用：向数组开始位置追加新内容参数：要新增的内容返回：新增后数组的长度原有数组改变 ![nNlprD.png](https://s2.ax1x.com/2019/09/10/nNlprD.png)

**`splice`** 基于 SPLICE 可以对数组进行很多的操作：删除指定位置的内容、向数组指定位置增加内容、还可以修改指定位置的信息

`删除：ary.splice(n,m)` 从索引 n 开始，删除 m 个内容，把删除的部分以一个新数组返回，原有数组改变 ![nNlFIA.png](https://s2.ax1x.com/2019/09/10/nNlFIA.png)

`新增：ary.splice(n,0,x,...)` 从索引 n 开始删除零项（没删除），把 X 或者更多需要插入的内容存放到数组中索引 N 的“前面” ![nNlSKO.png](https://s2.ax1x.com/2019/09/10/nNlSKO.png)

`修改：ary.splice(n,m,x,...)` 修改的原理就是把原有内容删除掉，然后用新的内容替换这部分信息即可 ![nNlPVH.png](https://s2.ax1x.com/2019/09/10/nNlPVH.png)

> 需求扩展：
>
> 1. 删除数组最后一项，你有几种办法?
> 2. 向数组末尾追加新内容，你有几种办法?

```javascript
//=>删除最后一项
ary.pop();
ary.splice(ary.length - 1);
ary.length--;

//=>向数组末尾追加新内容
ary.push(100);
ary.splice(ary.length, 0, 100);
ary[ary.length] = 100;
```

![nNlAPI.png](https://s2.ax1x.com/2019/09/10/nNlAPI.png) ![nNlZxf.png](https://s2.ax1x.com/2019/09/10/nNlZxf.png)

![nNlEGt.png](https://s2.ax1x.com/2019/09/10/nNlEGt.png)

**`slice`** 作用：在一个数组中，按照条件查找出其中的部分内容参数：两个参数（n/m），从索引 n 开始，找到索引 m 处，但是不包含 m 返回：以一个新数组存储查找的内容原有数组不会变 ![nNlnsS.png](https://s2.ax1x.com/2019/09/10/nNlnsS.png)

**`concat`** 作用：实现多个数组(或者值)的拼接参数：数组或者值返回：拼接后的新数组原有数组不变 ![nNlVRP.png](https://s2.ax1x.com/2019/09/10/nNlVRP.png)

**`toString`** 作用：把数组转换为字符串参数：无返回：数组中的每一项用逗号分隔的字符串原有数组不变

**`join`** 作用：和 toString 类似，也是把数组转换为字符串，但是我们可以设置变为字符串后，每一项之间的连接符参数：指定的链接符返回：字符串原有数组不变 ![nNlmM8.png](https://s2.ax1x.com/2019/09/10/nNlmM8.png)

**`reverse`** 作用：把数组倒过来排列参数：无返回：排列后的新数组原有数组改变 ![nNluqg.png](https://s2.ax1x.com/2019/09/10/nNluqg.png)

**`sort`** 作用：给数组排序参数：无/函数返回：排序后的新数组原有数组改变

```javascript
//=>sort在不传递参数的情况下，只能处理10以内数字排序
var ary=[1,3,2,4,5,6,7,9,8];
ary.sort(); =>[1,2,3,4,5,6,7,8,9]

var ary=[18,1,23,27,2,35,3,56];
ary.sort(); =>[1, 18, 2, 23, 27, 3, 35, 56] 没有按照我们想象中的排序

//=>真实项目中，基于sort排序，我们都需要传递参数
var ary=[18,1,23,27,2,35,3,56];
ary.sort(function (a,b){
	return a-b;//=>升序  return b-a; 降序
});
```

**`indexOf / lastIndexOf`** 这两个方法不兼容 IE 低版本浏览器(IE6~8) 作用：检测当前值在数组中第一次或者最后一次出现位置的索引参数：要检测的值返回：索引原有数组不变 ![nNlMZQ.png](https://s2.ax1x.com/2019/09/10/nNlMZQ.png)

```javascript
//=>验证数组中是否包含某一项
if (ary.indexOf(100) > -1) {
  //=>ARY中包含100这一项
}
```

除了以上方法，数组中还包含很多常用的方法（Array.prototype）

- every
- filter
- find
- forEach
- includes
- keys
- map
- reduce / reduceRight
- some
- ...

第一阶段咱们不深入研究这些方法，搞懂这些方法需要了解 OOP/作用域/回调函数等，第二阶段咱们在去研究这些

### JS 中关于字符串的一些细节知识

> 在 JS 中所有用单引号或者双引号包起来的都是字符串，每一个字符串是由零到多个字符组成

```javascript
var str = 'zhufengpeixun';
str.length ->字符串长度
str[0] ->'z'
str[str.length-1] ->'n'
str[100] ->undefined

//=>字符串中的每一个字符都有一个自己对应位置的索引，也有类似于数组一样的length代表自己的长度

//=>循环遍历字符串，输出每一项字符
for(var i=0;i<str.length;i++){
   cosole.log(str[i]);
}
```

### 关于字符串中常用的方法

字符串是基本数据类型，字符串的每一次操作都是值直接的进行操作，不像数组一样是基于空间地址来操作的，所以不存在原有字符串是否改变这一说，肯定都是不变的

**`charAt/charCodeAt`** 作用：charAt 根据索引获取指定位置的字符，charCodeAt 不仅仅获取字符，它获取的是字符对应的 Unicode 编码值(ASC II 码值) 参数：索引返回：字符或者对应的编码 ![nNlsRx.png](https://s2.ax1x.com/2019/09/10/nNlsRx.png) ![nNlrJ1.png](https://s2.ax1x.com/2019/09/10/nNlrJ1.png)

**`indexOf/lastIndexOf`** 基于这两个方法，可以获取字符在字符串中第一次或者最后一次出现位置的索引，有这个字符，返回大于等于零的索引，不包含这个字符，返回的结果是-1，所以可以基于这两个方法，验证当前字符串中是否包含某个字符

```javascript
var str = "zhufengpeixun";
if (str.indexOf("@") > -1) {
  //=>条件成立说明包含@符号
}
```

**`slice`** 作用：str.slice(n,m) 从索引 n 开始找到索引为 m 处(不包含 m)，把找到的字符当做新字符串返回 ![nNlyz6.png](https://s2.ax1x.com/2019/09/10/nNlyz6.png)

**`substring`** 和 slice 语法一模一样，唯一的区别在于：slice 支持负数索引，而 substring 不支持负数索引 ![nNl0o9.png](https://s2.ax1x.com/2019/09/10/nNl0o9.png)

**`substr`** 也是字符串截取的方法，用法是：str.substr(n,m)，从索引 n 开始截取 m 个字符 ![nNlwdJ.png](https://s2.ax1x.com/2019/09/10/nNlwdJ.png)

**`toUpperCase/toLowerCase`** 实现字母的大小写转换，toUpperCase 小写转大写，toLowerCase 大写转小写 ![nNlDiR.png](https://s2.ax1x.com/2019/09/10/nNlDiR.png)

**`split`** 和数组中的 join 相对应，数组中的 join 是把数组们一项按照指定的连接符变为字符串，而 split 是把字符串按照指定的分隔符，拆分成数组中每一项 ![nNlcQK.png](https://s2.ax1x.com/2019/09/10/nNlcQK.png)

**`replace`** 作用：替换字符串中的原有字符参数：原有字符，要替换的新字符返回：替换后的字符串

```javascript
//=>把“zhufeng”替换为“珠峰”
var str = "zhufeng2017zhufeng2018";
str = str.replace("zhufeng", "珠峰"); //=>在不使用正则的情况下，没执行一次replace只能替换一个 “珠峰2017zhufeng2018”
str = str.replace("zhufeng", "珠峰"); //=>“珠峰2017珠峰2018”

//===================
str = str.replace(/zhufeng/g, "珠峰");
```

字符串中还有很多常用方法，回去后大家可以自己扩展一下：（String.prototype）

- includes
- localeCompare
- search
- trim
- ...

### 真实项目中的需求

`1.时间字符串格式化`

> 有一个时间字符串 “2018-4-4 16:26:8” ，我们想基于这个字符串获取到 “04 月 04 日 16 时 26 分”

```javascript
/*
 * 1.基于SPLIT按照空格把字符串拆成两部分(数组中的两项)
 * 2.左边这一部分继续以SPLIT按照中杠来拆
 * 3.右边这一部分继续以SPLIT按照冒号来拆
 * 4.把需要的信息拼接在一起即可（拼接的时候不足十位的补零）
 */
function addZero(val) {
  return val < 10 ? "0" + val : val;
}

var str = "2018-4-4 16:32:8";
var ary = str.split(" "), //=>["2018-4-4", "16:32:8"]
  aryLeft = ary[0].split("-"), //=>["2018", "4", "4"]
  aryRight = ary[1].split(":"); //=>["16", "32", "8"]
var month = addZero(aryLeft[1]),
  day = addZero(aryLeft[2]),
  hour = addZero(aryRight[0]),
  minute = addZero(aryRight[1]);
var result = month + "月" + day + "日 " + hour + "时" + minute + "分";
console.log(result);
```

暂时提高眼界的：

```javascript
~(function(pro) {
  pro.formatTime = function(template) {
    template = template || "{0}年{1}月{2}日 {3}时{4}分{5}秒";
    var ary = this.match(/\d+/g);
    template = template.replace(/\{(\d+)\}/g, function() {
      var n = arguments[1],
        val = ary[n] || "0";
      val < 10 ? (val = "0" + val) : null;
      return val;
    });
    return template;
  };
})(String.prototype);
```

### URL 地址问号传参解析

> 有一个 URL 地址“http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man” 地址问号后面的内容是我们需要解析出来的参数信息 { lx:1, name:'AA', sex:'man' }

```javascript
/*
 * 1.先找到问号，把问号后面的信息截取下来即可
 *  A.首先我们需要验证是否存在#哈希值，存在我们从问号开始截取到#，不存在我们直接截取到字符串的末尾
 * 2.以&进行拆分(数组)
 * 3.遍历数组中的每一项，把每一项在按照=进行拆分，把拆分后的第一项作为对象的属性名，第二项作为属性值进行存储即可
 */
var str = "http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man#teacher"; //=>#后面的称为哈希(HASH)值,这个值可能有可能没有,我们需要处理,有的话我们截取的时候需要过滤掉

//=>获取问号和井号在字符串中索引位置
var indexASK = str.indexOf("?"),
  indexWell = str.indexOf("#");
//=>#可能有可能没有
if (indexWell > -1) {
  //=>存在井号,我们截取到井号的位置即可
  str = str.substring(indexASK + 1, indexWell);
} else {
  //=>没有井号,我们截取到末尾即可
  str = str.substr(indexASK + 1);
}

//=>str='lx=1&name=AA&sex=man'
var ary = str.split("&"), //=>["lx=1", "name=AA", "sex=man"]
  obj = {};
for (var i = 0; i < ary.length; i++) {
  var item = ary[i],
    itemAry = item.split("=");
  //console.log(itemAry);//=>["lx", "1"]  ["name", "AA"] ...
  var key = itemAry[0],
    value = itemAry[1];
  obj[key] = value;
}
console.log(obj); //=>{lx: "1", name: "AA", sex: "man"}
```

提高眼界：

```javascript
~(function(pro) {
  pro.queryURLParameter = function() {
    var obj = {},
      reg = /([^?=&#]+)(?:=([^?=&#]+)?)/g;
    this.replace(reg, function() {
      var key = arguments[1],
        value = arguments[2] || null;
      obj[key] = value;
    });
    return obj;
  };
})(String.prototype);

var str = "http://www.zhufengpeixun.cn/stu/?lx=1&name=&sex=#teacher";
console.log(str.queryURLParameter());
```

### JS 中的数学函数 Math

Math 称为数学函数，但是它属于对象类型的

```javascript
typeof Math =>"object"
```

之所以叫做数学函数，是因为 Math 这个对象中提供了很多操作数字的方法

### Math 中提供的常用方法

**`abs`**：取绝对值 ![nN1M6K.png](https://s2.ax1x.com/2019/09/10/nN1M6K.png) **`ceil/floor`**：向上或者向下取整 ![nN130e.png](https://s2.ax1x.com/2019/09/10/nN130e.png)

**`round`**：四舍五入 ![nN11mD.png](https://s2.ax1x.com/2019/09/10/nN11mD.png)

**`sqrt`**：开平方 ![nN1QOO.png](https://s2.ax1x.com/2019/09/10/nN1QOO.png)

**`pow`**：取幂（N 的 M 次方） ![nN1vnO.png](https://s2.ax1x.com/2019/09/10/nN1vnO.png)

**`max/min`**：获取最大值和最小值 ![nN1I74.png](https://s2.ax1x.com/2019/09/10/nN1I74.png)

**`PI`**：获取圆周率 ![nN1Kl6.png](https://s2.ax1x.com/2019/09/10/nN1Kl6.png)

**`random`**：获取 0~1 之间的随机小数 ![nN18TH.png](https://s2.ax1x.com/2019/09/10/nN18TH.png)

`Math.round(Math.random()*(m-n)+n)`：获取 n-m 之间的随机整数

回去后可以自己扩展 Math 中更多方法

### DOM 树

> dom tree 当浏览器加载 HTML 页面的时候，首先就是 DOM 结构的计算，计算出来的 DOM 结构就是 DOM 树（把页面中的 HTML 标签像树桩结构一样，分析出之间的层级关系）

```
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

![nN3GuT.png](https://s2.ax1x.com/2019/09/10/nN3GuT.png)

DOM 树描述了标签和标签之间的关系（节点间的关系），我们只要知道任何一个标签，都可以依据 DOM 中提供的属性和方法，获取到页面中任意一个标签或者节点

### 在 JS 中获取 DOM 元素的方法

**`getElementById`**

> 通过元素的 ID 获取指定的元素对象，使用的时候都是 `document.getElementById('')` 此处的 document 是限定了获取元素的范围，我们把它称之为“上下文(context)”

1. getElementById 的上下文只能是 document

> 因为严格意义上，一个页面中的 ID 是不能重复的，浏览器规定在整个文档中既可以获取这个唯一的 ID

2.如果页面中的 ID 重复了，我们基于这个方法只能获取到第一个元素，后面相同 ID 元素无法获取

3.在 IE6~7 浏览器中，会把表单元素(input...)的 name 属性值当做 ID 来使用（建议：以后使用表单元素的时候，不要让 name 和 id 的值有冲突）

**`getElementsByTagName`**

> `[context].getElementsByTagName`在指定的上下文中，根据标签名获取到一组元素集合（HTMLCollection）

1. 获取的元素集合是一个类数组（不能直接的使数组中的方法）

![nN3YbF.png](https://s2.ax1x.com/2019/09/10/nN3YbF.png)

2.它会把当前上下文中，子子孙孙（后代）层级内的标签都获取到（获取的不仅仅是儿子级的）

3.基于这个方法获取到的结果永远都是一个集合（不管里面是否有内容，也不管有几项，它是一个容器或者集合），如果想操作集合中具体的某一项，需要基于索引获取到才可以

**`getElementsByClassName`**

> `[context].getElementsByClassName()`在指定的上下文中，基于元素的样式类名（class='xxx'）获取到一组元素集合

1.真实项目中，我们经常是基于样式类来给元素设置样式，所以在 JS 中，我们也会经常基于样式类来获取元素，但是此方法在 IE6~8 下不兼容

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

> `document.getElementsByName()`它的上下文也只能是 document，在整个文档中，基于元素的 name 属性值获取一组节点集合（也是一个类数组）

1.在 IE 浏览器中（IE9 及以下版本），只对表单元素的 name 属性起作用（正常来说：我们项目中只会给表单元素设置 name，给非表单元素设置 name，其实是一个不太符合规范的操作）

**`querySelector`**

> `[context].querySelector()` 在指定的上下文中基于选择器（类似于 CSS 选择器）获取到指定的元素对象（获取的是一个元素，哪怕选择器匹配了多个，我们只获取第一个）

**`querySelectorAll`**

> 在 querySelector 的基础上，我们获取到选择器匹配到的所有元素，结果是一个节点集合（NodeList）

1. querySelector/querySelectorAll 都是不兼容 IE6~8 浏览器的（不考虑兼容的情况下，我们能用 ById 或者其它方式获取的，也尽量不要用这两个方法，这两个方法性能消耗较大）

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
  return ary;
}
console.log(queryAllById("HAHA"));
```

### 节点 （node）

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

`元素节点` nodeType：1 nodeName：大写标签名 nodeValue：null

`文本节点` nodeType：3 nodeName：'#text' nodeValue：文本内容

在标准浏览器中会把空格/换行等都当做文本节点处理

`注释节点` nodeType：8 nodeName：'#comment' nodeValue：注释内容

`文档节点` nodeType：9 nodeName：'#document' nodeValue：null

### 描述节点之间关系的属性

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
  //=>首先获取当前元素下所有的子节点,然后遍历这些节点,筛选出元素的(NODE-TYPE===1),把筛选出来的结果单独存储起来即可
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
  //=>先找当前元素的哥哥节点,看是否为元素节点,不是的话,基于哥哥,找哥哥的上一个哥哥节点...一直到找到元素节点或者已经没有哥哥了(说明我就是老大)则结束查找
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

### 关于 DOM 的增删改

**`createElement`**

> 创建一个元素标签(元素对象) `document.createElement([标签名])`

**`appendChild`**

> 把一个元素对象插入到指定容器的末尾 `[container].appendChild([newEle])`

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
var oBox=document.getElementById('box');

//=>把当前元素作为一个对象，在对象对应的堆内存中新增一个自定义的属性
oBox.myIndex = 10;//=>设置
console.log(oBox['myIndex']);//=>获取
delete oBox.myIndex; //=>删除

//=>基于Attribute等DOM方法完成自定义属性的设置
oBox.setAttribute('myColor','red'); //=>设置
oBox.getAttribute('myColor'); //=>获取
oBox.removeAttribute('myColor'); //=>删除

上下两种机制属于独立的运作体制，不能互相混淆使用
- 第一种是基于对象键值对操作方式，修改当前元素对象的堆内存空间来完成
- 第二种是直接修改页面中HTML标签的结构来完成（此种办法设置的自定义属性可以在结构上呈现出来）

基于setAttribute设置的自定义属性值都是字符串
```

![nN3JDU.png](https://s2.ax1x.com/2019/09/10/nN3JDU.png)

需求：解析一个 URL 字符串问号传参和 HASH 值部分

## GIT & NODE 基础知识

@(201802)

### NODE 安装

https://nodejs.org/zh-cn/ 推荐大家使用 LTS 稳定版本，把安装包下载下来后，直接一路下一步安装即可（最好把它安装到 C 盘 [默认盘符] ，记号安装目录）

1. 如果安装不了，我们可以把别人安装完成的内容拷贝过来，通过修改环境变量完成安装

> 高级系统设置 -> 环境变量 -> 系统变量 -> Path，把原有的变量值备份一份，在原有的基础上增加 node 的安装目录即可 ![nN3qaQ.png](https://s2.ax1x.com/2019/09/10/nN3qaQ.png)

2.验证安装是否成功 WIN + R => 打开运行窗口 => 输入 cmd => 打开 DOS 窗口在 DOS 窗口中，输入 node -v / node --version / npm -v 能出现版本号，则代表安装成功，不能出现版本号，提示 node 不是内部或者外部命令的，遵循第一步配置环境变量即可 ![nN37qS.png](https://s2.ax1x.com/2019/09/10/nN37qS.png)

### NODE 基础概念

1. node 并不是一门语言，它是一个工具或者环境

- 基于 V8 引擎（webkit）渲染和解析 JS 的
- 单线程
- 无阻塞 I/O 操作
- 事件驱动
- ...

之所以把 node 称之为服务器端语言，是因为 node 给予 JS 操作服务器的能力：我们在服务器端安装 node，只用 js 完成服务器端需要处理的一些事情，最后把写好的 js 代码交给 node 环境运行即可

---

2. 在 node 环境中把 JS 代码执行

- REPL 命令（Read-Evaluate-Print-Loop：输入-求值-输出-循环）
- 基于 node xxx.js 命令执行
- 基于 WB 这类编辑工具直接执行

基于 node 命令执行，我们需要先找到当前文件所在的文件夹，然后再这个目录下打开 DOS 窗口，在窗口中执行 node xxx.js，这样就相当于在 node 环境下把 JS 文件中的代码执行了

> 如何在当前文件目录中打开 DOS 窗口
>
> - 基于 DOS 命令中的“cd”一层层进入
> - 在当前目录地址栏中输入 cmd，快速在当前目录打开
> - shift+鼠标右键，在此处打开命令窗口

在 WB 中配置 node 环境 ![nN3Tr8.png](https://s2.ax1x.com/2019/09/10/nN3Tr8.png) ![nN3bVg.png](https://s2.ax1x.com/2019/09/10/nN3bVg.png)

### 扫盲：常用的 DOS 命令

`ping www.baidu.com -t`：测试网速 `Ctrl+c`：结束当前正在运行的操作 `exit`：退出当前窗口 `ipconfig -all`：查看当前电脑的 物理地址/IP 地址/子网掩码/DNS 等信息 `cls`：清屏 `cd`：进入到指定的文件目录（windows 电脑需要先进入到对应的磁盘 `E:`） `cd ../`：返回上级目录 `cd ./`：当前目录 `cd /`：根目录 `dir`：查看当前目录下所有的文件 `mkdir`：创建文件夹 `copy con xxx.xx`：创建文件并且给文件中输入内容，输入完成后，用 Ctrl+c 结束并保存 `del xxx.xx`：删除文件 `rmdir xxx`：删除文件夹 ...

### NPM 模块管理

安装完成 node 后，基本上自带 npm 模块管理器

我们需要一个第三方（别人写的）模块、插件、类库或者框架等，需要提前下载安装才可以使用

- 百度搜索，找到下载地址，然后基于浏览器下载即可（资源比较混乱，不好搜索）
- 也可以基于 npm 等第三方包管理器下载（yarn / bower ... 都是第三方模块管理器）

  1.npm 下载的资源都是在https://www.npmjs.com/ 中下载的 `npm install xxx`：把资源或者第三方模块下载到当前目录下 `npm install xxx -g (--global)`：把资源或者第三方模块安装到全局环境下（目的：以后可以基于命令来操作一些事情） `npm uninstall xxx / npm uninstall xxx -g`：从本地或者全局卸载

> 基于 npm 安装的一些细节点：
>
> - 需要连网（基于 npm 是从国外服务器上下载资源，所以下载速度较慢）
> - 下载成功后，当前目录中多增加一个 node_modules 文件夹，在这个文件夹中找到我们安装的模块
> - 一般来说，下载下来的内容包含源码和最后供开发者使用的压缩版本

2.解决下载慢的问题 **`基于nrm切换到国内下载源（一般是淘宝镜像）`** 首先安装 nrm，而且是把它安装到全局环境下（因为我们需要使用命令）

> npm install nrm -g
>
> 安装完成后，我们可以使用 nrm 命令
>
> - nrm ls 查看当前可用源
> - nrm use xxx 使用某个源
>
> 切完源，还是基于 npm 安装操作

**`可以基于yarn来安装管理`** 首先还是需要先安装 yarn，安装到全局，然后基于 yarn 安装我们需要的模块

> npm install yarn -g
>
> 基于 yarn 安装（只能安装在本地，不能安装到全局） yarn add xxx yarn remove xxx

**`基于cnpm淘宝镜像来处理`** 自己回去尝试

---

3.解决安装版本的问题

> 首先查看当前模块的历史版本信息 `npm view jquery > jquery.version.json` ：把当前模块的历史信息输出到具体的某个文件中（文件名自己随便起的）
>
> 安装指定的版本模块 `yarn add jquery@1.11.3`：npm 和 yarn 都是这样来指定安装具体版本模块的

---

课后扩展：

1. bower 是从 gitHub 下载安装，有兴趣同学回去研究一下它的使用
2. 回去后向全局环境中安装：less / babel-cli ...

---

### gitHub

> https://github.com/
>
> 一个提供代码管理（托管）的公共平台，我们以及众多开发者，会把自己的生产的 组件/类库/插件/框架 等托管到这个平台中，供别人下载使用和研究
>
> 在 gitHub 中，我们可以创建仓库来管理自己的项目文件，而 gitHub 支持开发者通过 git 操作，把本地的项目代码推送到指定的仓库中，它还提供静态 web 页面的发布等
>
> 在国内有一个和 gitHub 类似的网站：coding，和 gitHub 类似，也是提供代码管理的平台

### git 的基础知识

> git 是一个分布式代码版本管理控制系统
>
> - 记录当前产品代码的所有版本信息（历史修改信息）,而且方便快速回退到某一个具体的版本
> - 方便团队协作开发，能够检测代码冲突，能够合并代码等

`svn`：在 git 诞生前就已经存在的版本控制系统，不过它是“集中式”管理 `git`：是分布式版本管理体统

1.集中式版本控制系统

2.分布式版本控制系统

---

### git 的工作管理和基础操作

**`在本地创建git仓库管理我们的代码`**

> 初次使用 git，先在本地配置一些基础信息 \$ git config -l \$ git config --global user.name xxx \$ git config --global user.email xxx 建议大家配置的用户名和邮箱和 gitHub 保持一致（这样以后在本地向 gitHub 推送内容的时候，能够展示出是谁推荐的）

1. `git init`

> 会在当前目录中创建一个空的仓库，文件目录中生成一个 “.git” 的隐藏文件，这个文件很重要，我们本地仓库的版本信息等都存储在这里

2. `.gitignore`

> 在当前目录（git 仓库根目录）创建一个 “.gitignore” 文件，这个文件中存储了当 git 提交的时候所忽略的文件
>
> 可以基于 WB 创建（new -> file -> .gitignore）可以基于 linux 命令 `$ touch .gitignore` （mac 终端、git bash、或者集成了 linux 的 dos，可以使用 linux 命令）

```
# dependencies
node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# npm or yarn
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# webStorm
.idea
```

### GIT 工作原理及操作

@(201802)

当我们在本地创建一个 git 仓库后，我们可以基于这个仓库管理我们的代码

**`git的工作流程`**

> 每一个 git 仓库都划分为三个区域
>
> - 工作区：编辑代码的地方
> - 暂存区：临时存储要生成版本代码的地方
> - 历史区：存储的是生成的每一个版本代码 ![nN8MZD.png](https://s2.ax1x.com/2019/09/10/nN8MZD.png)

**`工作区提交到暂存区`**

> \$ git status 查看代码或者文件的状态（当前处于哪个区域）: 红色（当前处于工作区，还没有提交到暂存区）绿色（当前处于暂存区，还没有提交到历史区）如果没有文件，代表三个区域代码已经同步，历史版本也在历史区生成了

`$ git add . / $ git add -A` 把当前工作区中所有最新修改的文件，都提交到暂存区

**`暂存区到历史区`** `$ git commit`

> 这样执行后，会弹出一个提交文本输入界面，需要我们编写本次提交到历史区，给当前版本编写的备注信息
>
> 先按 i 进入编辑插入模式输入备注信息按 ESC 输入“ :wq ” 保存并退出

`$ git commit -m'自己需要编写的备注信息'`

`$ git log` 查看当前历史区提交的记录（查看版本信息）

`$ git diff` 工作区 VS 暂存区

`$ git diff master` 工作区 VS 历史区（master 分支）

`$ git diff --cached` 暂存区 VS 历史区

### git 和 gitHub 同步

1. 让本地的 git 仓库和远程仓库建立关联

`$ git remote -v` 查看所有的关联信息

`$ git remote add xxx [远程仓库git地址]` 建立关联

`$ git remote remove xxx` 移除关联

我们远程仓库关联在一起的名字默认是：origin，当然自己可以随意修改

2. 把本地的信息推送到远程仓库上，或者从远程仓库上拉取最新的信息到本地仓库

> 我们本地推送和拉取的信息，既有代码也有版本信息，所以说与其说是推送和拉取，不如说是和远程仓库保持信息的同步

在推送之前，我们都应该先拉取 `$ git pull origin（这个名字就是和远程仓库关联的这个名字，以自己设置的为主） master` 从远程仓库的 master 分支拉取最新的信息

`$ git push origin master` 把自己本地信息推送到远程仓库的 master 分支下

---

以上是操作知识点，真实项目开发流程

1. LEADER 会首先创建一个远程仓库（这个仓库可能是空的，也可能是包含了项目需要的基础的结构信息）
2. 作为开发者，我们需要在本地创建一个本地仓库，还需要让当前本地的仓库和远程仓库保持关联

> 原始做法： git init git remote add origin [GIT 仓库地址]
>
> 简单做法： git clone [远程仓库地址][克隆后的名字：可以不设置，默认是仓库名]

3. 在本地开发产品，需要同步的时候，我们首先把工作区内容在本地仓库中放到历史区，生成版本信息（git add . / git commit -m''），在把本地历史区的信息推送到远程仓库上（git pull / git push）
4. 在团队协作开发的时候，LEADER 会在自己的 gitHub 账号下创建一个远程仓库，那么团队其他成员在向这个远程仓库推送信息的时候，使用自己的账号是没有推送权限的，我们需要把当前这 ��� 远程仓库，在 github 中创建工作群组，让更多人用自己的账号也有操作权限 ![nN8Qde.png](https://s2.ax1x.com/2019/09/10/nN8Qde.png) 小组成员在自己的邮箱中收到一封邀请邮件，需要确认同意 ![nN8lIH.png](https://s2.ax1x.com/2019/09/10/nN8lIH.png) 这样就是加入成功了 ![nN8uqO.png](https://s2.ax1x.com/2019/09/10/nN8uqO.png)

## 堆栈内存

> 堆内存：即全局作用域，基本数据类型因为数据比较简单，可以直接存储在栈内存当中运行，当栈内存销毁时，其所存在的值也会销毁堆内存：由于引用类型的数据比较复杂，所以数据类型的数据都放在堆内存中，一旦开辟出一个新的堆内存，就会产生一个 16 进制内存地址指向该内存空间，当没有任何一个内存地址指向该空间，那么会触发浏览器的垃圾回收机制，会自动销毁堆内存，

### 基本数据类型

**申请基本数据类型步骤**

1. 先申请一个变量，不会赋值，默认为 undefined
2. 在栈内存中开辟一块内存空间存储相应的值
3. 把对应空间内的值赋值给变量

   > 一个变量的值直接赋值给另一个变量时其实就是讲栈内存空间的值复制一个然后复制给另一个变量，完成之后两个变量之间就没有任何关系了，因此我们改变一个变量的值并不会影响另外一个，因为这两个变量都是独立的内存空间

```javascript
var a = 10;
var b = a;
a = 20; //=>a的改变并不会影响到b
console.log(b); //=>10 b仍然是10，赋值操作完成之后a和b就没有关联了
console.log(a); //=>20
```

### 引用数据类型

**申请引用数据类型步骤**

1. 申请一个变量，不会赋值，默认是 undefined
2. 开辟出一个堆内存，把数据存储存储在其中
3. 将堆内存对应的内存地址与变量关联

> 引用数据类型会开辟出一个全新的堆内存用来存储数据，对象存储的是键值对因此引用类型间把一个值赋值给另一个时其实是在对应的内存空间赋值给另一个变量，此时这两个变量使用的都是同一个堆内存中的数据，所以当一个变量发生改时，另一个变量也会发生改变，因为他们共用一个堆内存，_引用类型之间比较时比较的是内存地址_

```javascript
var obj = { name: "平野绫", age: 18, sex: "女" };
var obj2 = obj;
obj.age = 20;
console.log(obj2.age); //=>20
obj={name:'钉宫'，age:19,sex:'女'}
console.log(obj2.name)//=>平野绫
上面obj是重新赋值，并不是修改，即会重新开辟一个新的堆内存，而obj的内存指向改为了新创建的堆内存，所以此时obj和obj2之间就没有关联了
```

### 函数

> 函数在创建的时候也会开辟出一个新的堆内存，堆内存中存储的是字符串格式的代码块

## 变量提升

> 在作用域形成之后，js 代码自上而下执行之前，浏览器会把所有带`VAR`和`FUNCTION`的关键字提前，`VAR`会提前声明，但是不会赋值，`FUNCTION`会提前声明并定义。

**变量提升只会发生在当前作用域**

1. 全局变量:

   > 在全局作用域中申请的即为全局变量，全局变量只会提升到全局作用域(window)中，函数在提升的时候会创建一个新的堆内存用来存储自身的代码块，当执行代码的时候，声明提前过的代码浏览器不会再次执行。**_在变量声明之前也可以使用，只不过对应的值是`undefined`_**

2. 局部变量:

   > 在函数内的使用`VAR`申请的变量称之为局部变量，只有在函数执行的时候才会提升，并且只能提升到函数私有的作用域中，函数运行的时候会先给形参赋值，然后在进行变量提升

### 带 var 和不带的区别

1. 全局使用`VAR`声明

   > 在全局中使用`VAR`关键字申明一个变量时会自动和`window`形成一个映射的机制，可以直接使用`window.变量名`获取相应的值，因此当改变一个时另外一个也会改变，但是函数中使用`VAR`关键字声明的私有变量，并不会和`window`形成映射机制，

2. 全局未使用`VAR`声明

   > 如果在全局中未使用`VAR`关键字声明一个变量，则不会变量提升，不使用关键字声明而直接赋值的话就相当于给`window`添加一个值，对象的机制是**即使没有这个属性，直接使用的话也不会报错，而是会显示 undefined**，因此在代码之前使用`window`访问的话得到的是`undefined`，但是不使用`window`而直接调用的话浏览器会报错

3. 函数内的`VAR`

   > 函数内使用`VAR`关键字声明的变量为私有变量，全局作用域中无法访问，同时变量提升遵循私有作用域的提升机制

   > 如果函数内不使用`VAR`,其实就相当于给全局作用域中的变量再次赋值，使用的也是全局作用域中的变量，

### if 判断的函数提升

1. 旧版本浏览器：

   > 在旧版本的浏览器中会直接进行函数提升，会忽略条件判断的结果

2. 新版本浏览器：

   > 在新版本浏览器中为了同时兼容 ES5 和 ES6 的规则作了一些处理，同样会忽略条件判断的结果，但是并不会声明定义同时提前，只会提前声明，赋值为`undefined`，只有条件成立时分数才会提前声明和定义

```javascript
f = function() {
  return true;
};
g = function() {
  return false;
};
(function() {
  //在新版本浏览器中会报错，因为立即执行函数形成的私有作用域内有
  //变量 g ，则不会去全局作用域中寻找，但是由于if判断语句的原因，只会进行声明提前，并不会赋值，使用()调用一个值为undefined的变量时系统会报错
  if (g() && [] == ![]) {
    //TypeError: g is not a function
    f = function() {
      return false;
    };

    function g() {
      return true;
    }
  }
})();
console.log(f());
console.log(g());
```

### 变量重名

- 在 js 中全局作用域中申请的变量其实可以理解成是`window`的属性，由于对象的属性名是不可以重复的，所以如果变量名相同的话在变量提升阶段后面的会直接把前面所有重名的覆盖掉，代码执行阶段也是如此，重复的变量名并不会重新定义，只会重新赋值，从而把前面的值覆盖掉

* 在下列代码中由于函数名和变量名字重复，在变量提升阶段使用`VAR`关键字申请的只会定义，默认值是`undefined`，并不会赋值，而后面的函数则会声明和定义一起提前，所以代码未执行带赋值代码之前，`test`都是函数，当执行到赋值代码的时候，此时`test`的值重新赋值为了`100`，当`100`调用函数时会报错

```javascript
test(); //4
function test() {
  console.log(1);
}
test(); //4
function test() {
  console.log(2);
}
test(); //4
var test = 100; //TypeError: test is not a function
test();
function test() {
  console.log(3);
}
test();
function test() {
  console.log(4);
}
```

### ES6 中变量提升

1. 在 ES6 中基于 LET/Const 等方式创建变量或者函数，不存在变量提升机制。因此在申明变量之前使用，会报错！而且还会切断和全局作用域`window`的映射机制。

2. 基于`LET`关键字申请的变量是不允许使用相同的变量名，即使不使用关键字申请变量，也会报错。

3. 在代码执行之前，浏览器会检测当前作用域所有申明的变量，并且记录其变量名，如果检测到基于`LET`关键字申请的变量存在重名的情况下，则会直接报错。不使用关键字申请变量时，浏览器在代码执行阶段，如果发现存在同样的命名时也会报错，

```javascript
//LET 关键字申请的变量不存在变量提升机制，所以在声明之前使用会直接报错
console.log(a); //ReferenceError: can't access lexical declaration `a' before initialization
let a = 10;

a = 20; //ReferenceError: can't access lexical declaration `a' before initialization
let a = 10;
console.log(a);

//在下面这行代码中，a和b都是基于LET关键字申请的当函数运行的时候，
//由于函数内部的a是使用LET申请的，所以不存在变量提升，所以在代码执行之前，
//浏览器就会报错ReferenceError: can't access lexical declaration `a'beforeinitialization
//假如注释掉函数内部中的第一行代码，对应的执行结果应该是20,20,10,20
let a = 10,
  b = 10;
let test = () => {
  console.log(a, b);
  let a = (b = 20);
  console.log(a, b);
};
test();
console.log(a, b);
```

### 暂时性死区

1. 在 ES6 语法规范中基于`LET`关键字关键字创建的变量在大部分的{}中都会形成一个块级作用域(类似于函数的私有作用域)，在块级作用域中基于`LET`创建的变量和全局作用域中的重名变量没有任何关系

```javascript
var a = 10;
if (true) {
  console.log(a); //会报错，但是报错的信息并不是变量命名冲突，而是语法错误，在a未申明之前无法访问，可以将使用 VAR 关键字创建的变量并不会影响当前这几行代码的错误信息
  let a = 20;
}
```

2.  直接使用 typeof 一个不存在的变量并不会报错。而是会返回`undefined`，但是在 ES6 中基于`LET`创建变量则改正了这一机制，在申明之前使用 typeof 检测类型是直接报错(ReferenceError: Cannot access 'c' before initialization);

## 函数的创建及运行

函数在 js 中属于是一等公民，函数就是将一些我们经常使用的功能或者经常重复性使用的代码封装在一起，当我们需要使用的时候直接调用即可，函数为我们的开发提供了不可或缺的遍历，同时函数中的形参和实参也让我们的开发更加的灵活多变，

**细节**

- 如果将一个函数作为表达式赋值给一个变量时，表达式运算结束后，当前的这个变量也会消失，

```javascript
var a = function f() {};
console.log(a); ////f函数本身的代码块
console.log(f); //Uncaught ReferenceError: f is not defined

var a = 1;
if (function f() {}) {
  a += typeof f; //此时的f并没有声明赋值，typeof检测时即使没有这个变量，也不会报错，
  //而是会返回undefined，此时if判断语句内的f函数运算完之后已经被销毁了
}
console.log(a); //1undefined
```

### 创建函数

- 函数的创建的时候会自动开辟出一个新的堆内存，将函数的代码块以字符串形式的存储起来，栈内存与函数关联起来的是堆内存的内存地址。

- 函数创建的方式：函数字面量，函数表达式，匿名函数。

  - 函数字面量：基本格式为`function [函数名](){}`，函数字面量具有变量提升机制。
  - 函数表达式：基本格式为`var [变量名]=function(){}`,函数表达式只会声明提前，
  - 匿名函数：基本合适为`(function(){}())`,不具有变量提升，会直接执行，并且只能执行一次，除了不具有变量提升机制之外，和其他的函数都是一样的机制。

### 函数运行

- 函数字面量和函数表达式都需要使用`()`来调用， 但是匿名函数由于没有名字，所以当代码执行到当前的代码块的时候会直接执行，

- 函数在运行的时候会产生一个私有作用域，在私有作用域当中只有使用关键字`VAR`关键字声明的变量和形参是私有变量，全局作用域当中是无法访问私有作用域中的私有变量，但是私有作用域经过**作用域链**却可以访问全局作用域中的变量。

### 形参实参

形参：形式上的参数，用于接收函数调用是传递的实参

- 在函数创建的时候可以在`()`中填写形参，形参就相当于在函数内部创建了一个变量，只不过没有赋值，函数在调用的时候，如果有传递实参，则最优先给形参赋值，形参在函数内部属于私有变量，全局作用与无法访问，形参名可以和全局作用域中的任何变量重名，

实参：函数调用时需要传递给形参的值

- 在函数调用的时候可以在`()`中填写需要传递的实参，如果传递的是表达式则会先计算出值然后在传递，如果是引用类型的则是传递其内存地址，(此时函数内部的形参会和全局作用域中的变量指向同一块内存空间)

形参和实参的数量可以不相等，在传递实参的时候，会按照顺序给形参赋值，如果实参数量少于形参数量，则多出来的形参值则是`undefined`,如果形参的数量少于实参，会先依次给形参赋值，多出来的形参并不会报错

### arguments

1. `arguments`是所有函数中都拥有的类数组对象（ES6 中的箭头函数没有），并不是真正的数组对象，但是可以转换成真正的数组，

2. 他是函数所传递的实参的集合，并且拥有索引，索引从 0 开始，每传递一个实参会自动递加其索引值，将传递的值作为值存储起来，

3. 无论有没有形参接收实参，`arguments`的值都会增加，如果有形参接收实参，那么`arguments`的值会和形参形成映射关系，他们其中一个改变的时候另外一个也会改变，

4. 只有实参传递的值才会使`arguments`和形参形成映射关系，如果实参数量少于形参数量，那么后面手动给形参赋值并不会影响`arguments`,同时也不回递加自身的索引和值；

5. 可以采用`arguments[索引]`的方式来访问其索引中存储的值

6. 使用`typeof`时返回的是`object`,说明是一个对象

- 扩展小知识

  - `arguments`有一个属性叫做`callee`，他可以以返回当前函数的代码块，还有一个是`caller`,`caller`在使用前需要加上`callee`,正确的格式是`arguments.callee.caller`,如果直接使用`caller`则会返回`undefined`。他可以返回函数的执行的区域（也就是宿主环境，如果是在 window 下执行的则返回 null。

**可以使用`Array.from(arguments)`将其转换成真正的数组**

## 作用域

在 ES5 中分为全局作用域和局部作用域。全局作用域指的是`widnow`所创建的栈内存，局部作用域指的是函数执行时所产生的局部作用域。在 ES6 中有了块级作用域，即大部分的{}都会产生一个一个块级作用域

1. 全局作用域：

   > 页面在一开始加载的时候就会产生全局作用域。只有关闭页面或者时刷新页面时才会销毁

2. 局部作用域：

   > 函数在执行的时候会产生一个新的局部作用域来执行函数内的代码，函数执行完毕之后就会销毁当前的作用域，函数的每一次执行都会产生一个全新的作用域，每次产生的作用域都是一个完全独立的

3. 块级作用域：

   > 块级作用域时 ES6 的规则，类似于函数的局部作用域，大部分的时候当代码中出现{}就会产生一个块级作用域，但是创建对象时候所使用的{}并不会产生块级作用域，因为他只是一个对象的书写形式，判断语句和循环语句中的{}则会产生块级作用域

### 作用域链

在函数执行创建时就会产生一个作用域链，作用域链是一个不可操作的类数据对象，函数创建的时候会在作用域链索引 0 的位置上和`widnow`全局作用域相关联，当函数执行的时候会自动将自身的作用域放在索引 0 的位置上，将其它的一次向下位移，如果在函数内部又创建一个新的函数，那么该函数创建的时候作用域链默认就关联着他的上一级作用域和`window`作用域，`window`作用域用于在作用域链的最下端，内部函数执行的时候在自身的作用域链索引 0 的位置上添加自身的作用域链，当函数寻找一个变量时会按照作用域链从上往下依次查找，找到之后则会停止查找，如果查找到`window`作用域仍没有查找到，则会宣告失败，停止查找
