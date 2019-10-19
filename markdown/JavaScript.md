# JavaScript

## JS 语言简史

**一.** JS 语言的起源

网景（Netscape Communications Corporation），1994 年，推出第一款商用浏览器，网景浏览器（Netscape Navigator）

1995 年，网景公司决定在浏览器中加入一门语言，可以作交互效果，提高用户体验。

最终决定独立开发一门新的语言，聘请 Brendan Eich，10 天后，新的语言诞生

LiveScript -> JavaScript (JS)

[ **JS 语言之父：Brendan Eich** ]

**二.** 第一次浏览器大战

网景公司打算在浏览器中加入网络操作系统，影响到微软的利益，引起了微软的注意

1995 年，微软发布 IE 浏览器。

JS 语言推出之后，网景获得极大的竞争优势。

微软对 JS 语言反编译，借鉴 JS 语言，推出了 JScript、VBScript

第一次浏览器大战是标准之争

1997，网景公司将 javascript1.1 版本提交给 ECMA（欧洲计算机制造协会）

IE3 发布，并绑定 windows 操作系统。

1998 年，网景公司，被收购。

- **ECMA 收录了 JavaScript，并提交给 ISO，经过修改，成为了第一个 JS 的标准版本，成为 ECMAScript，简称 ES**

**三.** 第二次浏览器大战

IE4、IE5、IE6（windows xp）

微软决定解散浏览器团队。

Brendan Eich，带领团队成立 Mozilla 基金会，并决定，将网景浏览器开源。

长时间内，世界的技术爱好者，对网景浏览器，进行维护和打补丁

2002，Mozilla 推出 firefox 浏览器。

2008，谷歌推出 chrome 浏览器，苹果推出 safari，ASA 公司推出 opera

chrome 浏览器搭载 JS 执行引擎 V8（V8 引擎，可以将 JS 代码直接转换为字节码，理论上，JS 代码的执行速度已经接近汇编语言）

于是，JS 具备了编写大型应用程序的能力，甚至服务器应用

> Ryan Dahl 准备写一个服务器端的框架，直接利用 V8 引擎完成了该框架，该框架，称为 nodejs

**V8 引擎将 `JavaScript` 的执行推向了一个新的台阶**

**四.** ES 标准的发展

ES1，1997 年 ES2，1998 年 ES3，1999 年 ES5，2009 年，习惯上，不再区分 javascript （JS） 和 ECMAScript （ES） ES6， 2015 年，ECMA 宣布，从 ES6 开始，使用年号作为版本号，ES6 的真正称呼为：ES2015 ES7，2016 年，ES2016

【 **非常重要：ES 制定语言标准，不涉及语言的运行环境。正是因为 ES 避免了运行环境，就让 ES 有机会在各种环境中执行。ES 称为了通用编程语言** 】

【 **通常，把 ES 运行的环境称之为，宿主环境** 】

### JS 语言特性

- 解释型语言

编译型语言：C 语言、C++、java 语言、C#语言

编译型语言会经过一个翻译的过程，负责翻译的叫做编译器，翻译的结果，叫做编译结果。

优点：执行速度快缺点：某个编译结果，难以适用于各种环境（跨平台障碍）；部署繁琐；

解释型语言：js、php

解释型语言没有编译结果

优点：跨平台；部署简单；缺点：执行速度稍慢

- 弱类型语言

弱类型：存放的数据类型可变。优点：灵活、易上手； 缺点：不严谨

强类型：存放的数据类型不可变。优点：严谨；缺点：不灵活、不易上手

> 通常，将弱类型的解释型语言，称为脚本语言

- 单线程

同步现象：上一件事情没有做完，下一件事情必须等待。

- 异步

提高单线程的执行效率。

### 内核和引擎

webkit（v8 引擎）：大部分浏览器 gecko：火狐 trident：IE ...

W3C：万维网联盟，制定编程语言的规范与标准开发者按照规范编写代码，浏览器开发商也会开发一套按照规范把代码渲染成页面的东西（这个东西就是内核或者引擎）

浏览器内核作用：按照一定的规范，把代码基于 GPU(显卡)绘制出对应的图形和页面等

浏览器兼容： 1.部分浏览器会提前开发一些更好的功能，后期这些功能会被收录到 W3C 规范中，但是在收录之前，会存在一定的兼容性 2.各个浏览器厂商，为了突出自己的独特性，用其它方法实现了 W3C 规范中的功能 ...

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

### 基本数据类型

```javascript
var n = 13;
//=>所有的正负数和小数都属于Number类型

var s = "";
//=>"" '13' "{}" JS中所有用单引号或者双引号包裹起来的都是字符串，
//=>里面的内容是当前字符串中的字符（一个字符串由零到多个字符组成）
var s = ``;
//=>模板字符串：ES6新增的一种写法，也是字符串类型

var b = true;
//=>布尔类型只有两个值 true真 false假

var a = null;
//=>只有一中书写方式
//=>表示空，让一个变量为null，只能手动书写

var f = undefined;
//=>只有这一种书写方法
//=>表示一个属性未定义，申请变量没有赋值就是undefined
```

### 引用数据类型

```javascript

var o = {name:'珠峰培训',age:9};
//=>普通的对象：由大括号包裹起来，里面包含多组属性名和属性值
//=>也叫做键值对

var o ={};
//=>书写一个对象，但是没有任何属性和属性值，空对象

var ary = [12,23,34,45];
//=>中括号包裹起来，包含零到多项内容，这种是数组对象
var ary=[];
//=>书写了一个数组，但是没有任何内容，空数组

var reg = /-?(\d|([1-9]\d+))(\.\d+)?/g;
 //=>由元字符组成一个完整的正则

function fn(){

}
//=>一个普通函数的字面量书写方式



var a = Symbol('珠峰');
var b = Symbol('珠峰');
a==b =>false
//=>[Symbol]：创建出来的是一个唯一的值
```

### 运行扩展

扩展：JS 代码如何被运行以及运行后如何输出结果 [如何被运行]

- 把代码运行在浏览器中(浏览器内核来渲染解析)
- 基于 NODE 来运行(NODE 也是一个基于 V8 引擎渲染和解析 JS 的工具)

【 **所有的输出语句都是宿主环境提供的** 】

**一.** alert：在浏览器中通过弹框的方式输出(浏览器提示框)

```javascript
var num = 12;
alert(num);
//=> '12'

var str = "绫";
alert(str);
//=>字符串 '绫'

alert(1 + 1); //=>'2'
alert(true); //=>'true'
alert([12, 23]); //=>'12,23'
//=>基于alert输出的结果都会转换为字符串：把值(如果是表达式先计算出结果)
//=>通过toString这个方法转换为字符串，然后再输出

alert({ name: "xxx" });
//=>'[object Object]'
//=>alert会先使用toString()把数据转换成字符串再输出
//=>当自定义一个对象的时候如果不重写它的toString()
//=>就会直接调用Object上的toString()方法
//=>Object.toString默认输出的格式就是[Object 对象数据类型]
//=>其他的数据可以正常输出是因为
//=>他们所属的类已经重写了toString()方法
```

**二.** confirm：和 alert 的用法一致，只不过提示的框中有确定和取消两个按钮，所以它是确认提示框

```javascript
let flag = confirm("确定要退出吗?");
if (flag) {
  //=>flag:true 用户点击的是确定按钮
} else {
  //=>flag:false 用户点击的是取消按钮
}
```

**三.** prompt：在 confirm 的基础上增加输入框

**四.** console.log：在浏览器控制台输出日志（按 F12(FN+F12)打开浏览器的控制台）

- Elements：当前页面中的元素和样式在这里都可以看到，还可以调节样式修改结构等
- Console：控制台，可以在 JS 代码中通过.log 输出到这里，也可以在这里直接的编写 JS 代码
- Sources：当前网站的源文件都在这里
- ...

- console.dir：比 log 输出的更加详细一些（尤其是输出对象数据值的时候）
- console.table：把一个 JSON 数据按照表格的方式输出
- ... （自己回去扩展更多 console 输出方法）

---

### Number 数据类型

数组也是对象数据类型的，也是由键值对组成的

```javascript
var ary = [12, 23, 34];
/*
 * 结构:
 *  0:12
 *  1:23
 *  2:34
 *  length:3
 */
//=>1. 以数组作为索引（属性名），索引从零开始递增
//=>2. 有一个LENGTH属性存储的是数组长度

ary[0];
//=>获取第一项
ary[ary.length - 1];
//=>获取最后一项
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

当一个数组中的值仍然是一个数组，这种叫作**多维数组**

```javascript
var arr = [[10, 20], [30, 40], [50, 60]];

/**
 * 数组之间的相互嵌套叫作多维数组，根据嵌套的层级分为
 * 一维数组
 * 二维数组
 * 三位数组
 * ...
 */
```

number 中有一个特殊的"数字"`NaN`(not a number),不是一个合法的有效数字，但它属于 number 类型

### NaN 的比较

【 **NaN 和谁都不相等，包括自己** 】

```javascript
NaN == NaN;
//=>false
```

思考题：有一个变量 num，存储的值不知道，我想检测它是否为一个有效数字，下面方案是否可以

```javascript
if (Number(num) == NaN) {
  alert("num不是有效数字!");
}

//=>NaN和谁都不相等，条件永远不成立
//=>即使num确实不是有效数字，转换的结果确实是NaN，但是NaN永远不等于NaN

if (isNaN(num)) {
  //=>检测是否为有效数字，只有这一种方案
  alert("num不是有效数字!");
}
```

### 布尔类型

只有两个值：true / false

如何把其它数据类型转换为布尔类型?

- Boolean
- ! 取反
- !!

```javascript
Boolean(1);
//=>true

!"珠峰培训";
//=>false
//=>先把其它数据类型转换为布尔类型，然后取反

!!null;
//=>去两次反，等价于没取反，可以用作转换成Boolean类型
```

**在 JS 中只有`0/NaN/空字符串/null/undefined`这五个值转换为布尔类型的`false`，其余都转换为`true`**

---

### null && undefined

> 都代表空或者没有
>
> - null：空对象指针
> - undefined：未定义

null 一般都是意料之中的没有（通俗理解：一般都是人为手动的先赋值为 null，后面的程序中我们会再次给他赋值）

```javascript
var num = null;
//=>null是手动赋值，预示着后面我会把num变量的值进行修改
```

undefined 代表的没有一般都不是人为手动控制的，大部分都是浏览器自主为空（后面可以赋值也可以不赋值）

```javascript
var num;
//=>此时变量的值浏览器给分配的就是undefined
//=>后面可以赋值也可以不赋值
```

---

### Object 对象数据类型

> 普通对象
>
> - 由大括号包裹起来的
> - 由零到多组属性名和属性值（键值对）组成

属性是用来描述当前对象特征的，属性名是当前具备这个特征，属性值是对这个特征的描述（专业语法，属性名称为键[ key ]，属性值称为值[ value ]，一组属性名和属性值称为一组键值对)

```javascript
var obj = {
  name: "珠峰培训",
  age: 9
};
//=>对象的操作：对键值对的增删改查
//=>语法：对象.属性 / 对象[属性]
```

[ **对象的增/删/改/查** ]

```javascript
var obj = {
  name: "绫",
  age: 9
};
//=>[ 查 ]
obj.name;
//=>直接使用 对象.属性 名即可
//=>一般来说，对象的属性名都是字符串格式的（属性值不固定，任何格式都可以）
obj["name"];
//=>属性表达式。同样具有读取属性值的功能，某些时候比 . 使用起来更加的灵活

//=>[ 增 ]
obj.sex = "女";
//=>[对象.属性名=属性值]可以直接给对象添加属性
obj["sex"] = "女";
//=>和上面具有相同的效果

//=>[ 改 ]

//=>如果已经拥有这个属性名，再次赋值只会修改值
obj.age = 18;

//=>[删] 彻底删除：对象中不存在这个属性了
delete obj["age"];
```

- 读取一个不存在的属性名时浏览器并不会报错，而是会返回`undefined`。
- 读取的属性名的值为`null`,也会返回`null`

```javascript
var obj = {};

/**
 * obj并不算是真正意义上的空对象，它会包含从Object.prototype中继承的属性和方法。
 * 我们一般成为的空对象指的是这个对象没有属性，不考虑它是否有继承而来的属性，
 * 而使用`Object.create(null)`创建的对象是一个真正意义上的空对象，
 * 因为它不包含任何属性，包没有从原型中继承任何属性和方法
 */
```

![n6W8dH.png](https://s2.ax1x.com/2019/09/14/n6W8dH.png)

思考题：

```javascript
var obj = {
  name: "珠峰培训",
  age: 9
};
var name = "zhufeng";

obj.name;
//=>'珠峰培训'  获取的是NAME属性的值
obj["name"];
//=>'珠峰培训' 获取的是NAME属性的值

obj[name];
//=>如果 name 变量中存储的值和对象的属性名一直就可以成功读取
//=>如果对象的属性名中并没有变量存储的值，就会返回undefined

/**
 * 使用属性表达式读取一个值的时候，如果 [] 内放的是一个变量
 * 那么我们读取的是变量内存放的值，并不是存放变量本身
 * 如果变量存放的值和对象的属性名不匹配
 * 会返回 undefined
 */

var obj = { name: "绫", age: 19 };
var result = "name";
console.log(obj[result]);
//=>'绫'
//=>obj[result]其实是取出result这个变量中存储的值，然后进行输出
//=>输出的时候其实是：obj['name']
```

一个对象中的属性名不仅仅是字符串格式的，还有可能是数字格式的

```javascript
var obj = {
    name:'珠峰培训',
    0:100
};
obj[0]
//=>100
obj['0']
//=>100
obj.0
//=>报错:Uncaught SyntaxError: Unexpected number
```

当我们存储的属性名不是字符串也不是数字的时候，浏览器会把这个值转换为字符串（toString），然后再进行存储

```javascript
obj[{}] = 300;
//=>  先把({}).toString()后的结果作为对象的属性名存储进来
//=>  obj['[object Object]']=300

obj[{}];
//=>获取的时候也是先把对象转换为字符串'[object Object]',然后获取之前存储的 300
```

数组对象（对象由键值对组成的）

```javascript
var oo = { a:12 };
var ary = [12,23];
//=>12 和 23 都是属性值，属性名呢？

ary[0]
//=> 12
ary['1']
//=> 23
ary.0
//=>报错:SyntaxError: unexpected token: numeric literal
//=>通过观察结果，我们发现数组对象的属性名是数字
//=>（我们把数字属性名称为当前对象的索引或者是下标）
```

---

## 运算符

### 表达式(expressions)

表达式是由操作符，操作数，变量等一些列的组合。表达式会返回一个值，叫做**返回值**。表达式可以放在任何需要数据的地方

### 语句（statements）

语句则是由“;（分号）”分隔的句子或命令。如果在表达式后面加上一个“；”分隔符，这就被称为“表达式语句”。它表明“只有表达式，而没有其他语法元素的语句。

一般的 javascript 中的语句分为下面几种：

1. 声明语句：变量声明和函数声明
2. 赋值语句：把值或者表达式计算的值赋值给变量
3. 控制语句：能改变语句的执行顺序，包括条件语句和循环语句，当然有比较特殊的标签语句。
4. 表达式语句：这些语句去掉最后分号，都也可当表达式用的。常见的有：对象操作（new、delete）、函数调用（函数执行，必有返回值）等。

### 操作符和操作数

操作符（Operator）：运算符，参与运算的符号

操作数（Operand）：参与运算的数据，也称之为“元”

操作符不一定只有一个符号

操作符出现在不同的位置，可能具有不同的含义

```javascript
(1 + 2) * 3;
//=>优先级问题：先计算()内的1+2；然后再*3

function test() {
  //...代码
}
test();
//=>():调用函数
```

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

### 数学运算符

数学运算符

1. `+ - * /`算数运算
2. `+ -`正负数
3. `%`求余
4. `++ --`自增自减
5. `**` 幂

### 细节

js 中的数学计算是不准确的，我们在开发中应该着重注意

```javascript
0.1+0.2=0.30000000000000004

0.14*100=14.000000000000002

```

**`%`（求余）**

`%`指的是一个数除以另一个数，不够除的部分就是余数

```javascript
9 % 4 = 1;
8 % 3 = 2;
2 % 2 = 0;
//=>如果可以除尽，那么余数就为0
2 % 3 = 2;
//=>除数大于被除数的话，结果是被除数
```

**`++`(自增)/`--`(自减)**

- `++`和`--`的语法规范基本上是一样的，因此我们只拿`++`进行讲解

++代表的是在自身的基础上自增 1，分为前自增和后自增，我们在实际中应该着重注意前自增和后自增的区别

- 前自增是指++在前，他会使原有的值立即自增加 1。

```javascript
var b = 21;
console.log(++b);
//=>22;
//=>前自增表达式的值是自增之后的值
```

- 后自增是指++在后，他会在运算结束之后自增 1

```javascript
var a = 12;
console.log(a++);
//=>12
//=>后自增表达式的值是自增之前的值，在表达式运算完毕之后才会自增1
```

【 **以下规范不适用于（ + ）运算符** 】

在算数运算过程中会调用`Number()`方法将非数字类型转换为数字类型,然后在进行运算。

> NaN 虽然是数字，但它和任何数字作任何运算，得到的结果都是 NaN

- null：null -> 0

- undefined: undefined -> NaN

将对象类型先转换为字符串类型，然后再将该字符串转换为数字类型

对象类型 -> "[object Object]" -> NaN

【 **加号运算符** 】

当我们进行加法运算的时候只要有一边是字符串类型的时候，就不再是简单的数学运算了，而是会变成字符串拼接

```javascript
10 + true;
//=>11 正常的数学运算

10 + "10";
//=>'1010' 只要有一边是字符串类型的，就会变成字符串拼接
//=>字符串存储的值跟运算结果并没有什么关系

[12] + 10;
// =>'1210'
//=>虽然现在没看见字符串，但是引用类型转换为数字，首先会转换为字符串，
//=>所以变为了字符串拼接

({})+10
//=>"[object Object]10"

[]+10
//=>"10"

{}+10
//=>10
//=>这个和以上说的没有半毛钱关系，因为它根本就不是数学运算，也不是字符串拼接，它是两部分代码
//=>{} 代表一个代码块（块级作用域+10 才是我们的操作
//=>严格写法：{}; +10;

12+true+false+null+undefined+[]+'绫'+null+undefined+[]+true
```

如果是对象类型的则会优先转换成字符串然后在进行运算

数字 -> 数字字符串

boolean -> "boolean"

字符串 null -> "null"

undefined -> "undefined"

对象 -> "[object Object]"

- 加号两边都没有字符串，但一边有对象，将对象转换为字符串，然后按照上面的规则进行
- 其他情况和上面的数学运算一致

优先级的运算细节：

1. 从左到右依次查看
2. 如果遇到操作数，将数据的值直接取出
3. 如果遇到相邻的两个运算符，并且左边的运算符优先级大于等于右边的运算符，则直接运行左边的运算符。

### 比较运算符

**比较运算符的返回类型：`boolean`,而且它的运算等级要低于算数运算符**

大小比较：

1. `>`大于
2. `<`小于

遵循一定的准换规则对两端进行大小比较

`Infinity` 比任何数字都大

`-Infinity` 比任何数字都小

相等比较：

1. `==`相等
2. `!=`不相等
3. `===`全等
4. `!==`不全等

- `==`和`!=`在比较时会将两边的不同的数据类型转换成同一种数据类型，不会比较数据类型
- `=`是只要转换后的值是一样的，就会返回`true`，否则返回`false`。
- `!=`是两边的不相等返回`true`如果相等的话则会返回`false`。

---

- `===`和`!==`并不会自动转换数据的类型，在比较时也会比较数据的类型
- `===`数据类型和值都相等则会返回`true`，否则返回`false`
- `!==`数据类型和值有一个不相等就会返回`true`，如果都相等返回`false`

1. 两个字符串比较大小，比较的是字符串的字符编码。
2. 如果有一个不是字符串，并且两个都是原始类型，将它们都转换为数字进行比较
3. 如果其中一个是对象，将对象转换为原始类型然后，按照规则 1 或规则 2 进行比较
4. 如果两端都是对象类型，比较的则是对象的内存地址

目前，对象转换为原始类型后，是字符串 "[object Object]"

**`NaN` 与任何数字比较，得到的结果都是 `false`**

1. null 和 undefined， 它们之间相等， 和其他原始类型比较， 则不相等。
2. 其他原始类型，比较时先转换为数字，再进行比较
3. NaN 与任何数字比较，都是 false，包括自身
4. Infinity 和-Infinity，自能和自身相等
5. 对象比较时，要先转换为原始类型后，再进行比较

**`null`和`undefined`他们相等，但是不全等**

```javascript
null == undefined;
//=>true 相等并不会比较数据的类型

null === undefined;
//=>false  全等会比较数据类型
```

**`Infinity` 和`-Infinity`只和自身相等**

### 逻辑运算符

**`JavaScript` 中的两个逻辑运算符都属于时短路运算符(存在的多个表达式时，只要有一个满足要求则不再运算其他的表达式)**

**逻辑与`&&`的优先级大于逻辑或`||`**

以下数据均判定为 false：

1. null
2. undefined
3. false
4. NaN
5. ''
6. 0

**逻辑与`&&`**

> 逻辑与：可以简单理解为寻找`false`,只要是第一个参数为`false`,则直接返回，如果第一个为`true`，则直接返回第二个。不做判断

我们通常在项目中用来判断一个是否传递了一个回调函数

```javascript
function test(callback) {
  //这种写法默认时要么不传函数，要传就要是一个回调函数
  //但是这中写法并不严谨，如果传的不是一个函数则会报错
  callback && callback();
  //=>如果传递了一个参数，那么第一个表达式就不符合 && 的规则
  //=>会直接执行第二个表达式

  //严谨的写法应该是使用if判断
  if (typeof callback === "function") {
    callback(); //只有当传入的是一个函数时才会执行
  }
}
test(function() {
  console.log(123);
});
```

在判断体中使用逻辑与`&&`，则必须两边的条件都满足的话整体才满足

```javascript
var a = 12;
if (a && typeof a === "number") {
  console.log(123);
}

/**
 * 上面代码的条件是a的值不能是 NaN/null/undefined/0/''(空字
 * 符串)，并且a的值还必须是一个Number类型的才可以进入判断体
 */
```

**逻辑或`||`**

> 逻辑或：可以简单理解为寻找`true`,只要是第一个参数为`true`则直接返回，如果第一个为`false`，则直接返回第二个，不做判断

项目中我们通常用于赋值语句

```javascript
function test(x) {
  x = x || 0;
  //如果有传递实参则直接返回x，没有的话则给x赋值为0
  //不严谨，如果我们传递的值转换为布尔值为false的话依然会赋值为0

  //严谨的写法
  if (typeof x === "undefined") {
    x = 0;
    /**
     * 如果我们不传递实参，则x默认为undefined，就会进入判断
     * 如果传递的是false或者是null之类的也不会进入判断。
     * 但是传递undefined会进入判断
     */
  }
}
test();
```

在判断体中是第一个满足直接返回，否则直接返回第二个

```javascript
var a = 10;
var b = 20;
if (a || b) {
  //只要a或者b有一个转换成布尔为true就可以进入判断
  console.log(123);
}
```

### 非

`!(非)`将数据的 boolean 判定结果直接取反，非运算符一定返回 boolean 类型。

如果对一个数据进行两次取反，那么他就会保留原有`boolean`的属性

```javascript
!false;
//=>true

!!false;
//=>false
```

### 条件运算符

三目运算符是 JavaScript 仅有的使用三个操作数的运算符。一般作为作为 if 语句的简短形式来使用

语法：条件`?`成立做的事情`:`不成立做的事情, <=>相当于简单的 if/else 判断

特殊情况

```javascript
//=>如果三元运算符中的某一部分不需要做任何的处理，我们用 null/undefined/void 0... 占位即可
var num = 12;
num > 10 ? num++ : null;

//=>如果需要执行多项操作，我们把其用小括号包裹起来，每条操作语句用逗号分隔
num = 10;
num >= 10 ? (num++, (num *= 10)) : null;
```

### **`...`**

`...`在 ES6 中根据使用位置的不同可以作为剩余运算符也可以作为展开运算符，多用于**解构赋值**

**`...`展开运算符**

可以获取到数组或者对象当中的所有项，可以用来克隆数组或者对象,在函数中也可以替代`arguments`的某一些功能，尤其在 ES6 中的箭头函数取消了`arguments`属性，那么我们就可以使用**展开/剩余运算符**

```javascript
let arr = [10, 20, 30, 40];
let newArr = [...arr];
console.log(newArr);
//=>[10,20,30,40]

//=>我们也可以额外加一下新的值
let newArr = [...arr, 50, 60];
console.log(newArr);
//=>10,20,30,40,50,60

//=>对象拥有相同的操作

//=>在函数中我们可以替代一些arguments的功能
function test(...arr) {
  console.log(arr);
  //=>和arguments不同的是arr是一个数组，可以使用数组中所有的方法
  //=>arguments则是一个类数组，无法使用数组中一些方法
  console.log(arguments);
}
test(10, 20, 30, 40);


//=>展开运算符的后面是不允许书写其他的变量
//=>因为展开运算符就已经可以获取到所有的数据
//=>即使允许我们书写，也没有任何意义，也获取不到任何值
function test(...a,b){
  console.log(a);
  console.log(b);
}
test(10,20,30,10,)
//=>报错：SyntaxError: parameter after rest parameter
```

**`...`剩余预算符**

可以理解将剩余的数据压缩收集进一个新的数组或对象

```javascript
let arr = [10, 20, 30];
let [a, ...b] = arr;
/**
 * 表示的是除了对应a的值以外的所有值都赋值给b
 * 此时的b就会接收到 20,30
 * b会变成一个数组，这和它就收了多少个值无关
 * 即使只接收到一个值也会变成数组
 */

//=>函数中我们也可以使用同样的操作
function test(a, ...b) {
  console.log(a);
  //=>{}:是一个空对象
  console.log(b);
  //=>10,30,20
  //=>可以获取除了第一个实参外的所有实参
}
let obj = {};
test(obj, 10, 30, 20);
```

### 复合的赋值运算符

| 语法 | 含义       |
| ---- | ---------- |
| +=   | 加等于     |
| -=   | 减等于     |
| \*=  | 乘等于     |
| /=   | 除等于     |
| %=   | 余等于     |
| \*\* | 幂等于     |
| >=   | 大于或等于 |
| <=>  | 小于或等于 |

### 运算符优先级

数字越大优先级越高，当我们在做运算的时候不确定运算符优先级的时候

可以将我们需要运算的表达式用`()`将其圈起来，因为他的等级是最高的

![nvOVN4.png](https://s2.ax1x.com/2019/09/21/nvOVN4.png)

![nvOkHU.png](https://s2.ax1x.com/2019/09/21/nvOkHU.png)

![nvOiuV.png](https://s2.ax1x.com/2019/09/21/nvOiuV.png)

---

## 数据类型检测

### isNaN

[**isNaN**]用来检测是不是一个有效的合法数字，如果是一个有效的合法数字返回`false`，否则返回`true`。

```javascript
var num = 12;
isNaN(num);
//=>false  因为num是一个合法的有效数字
```

| 运算                | 类型           | 结果  |
| ------------------- | -------------- | ----- |
| isNaN('13')         | 纯数字字符串   | false |
| isNaN('凌')         | 非数字字符串   | true  |
| isNaN(true)         | 布尔类型 true  | false |
| isNaN(false)        | 布尔类型 false | false |
| isNaN(null)         | null           | false |
| isNaN(undefined)    | undefined      | true  |
| isNaN({age:9})      | 对象           | true  |
| isNaN([12,13])      | 数组(多项)     | true  |
| isNaN([12])         | 数组(单项)     | false |
| isNaN(/^\$/)        | 正则           | true  |
| isNaN(function(){}) | 函数           | true  |

**重要：`isNaN` 检测的机制**

```javascript
//=>首先验证当前要检测的值是否为数字类型的，如果不是，浏览器会默认的把值转换为数字类型
//=>把非数字类型的值转换为数字其它基本类型转换为数字：直接使用Number这个方法转换的

  [字符串转数字]
    Number('13')
    //=>13

    Number('13px')
    //=>NaN 如果当前字符串中出现任意一个非有效数字字符，结果则为NaN

    Number('13.5')
    //=>13.5 可以识别小数

  [布尔转数字]
    Number(true)
    //=>1
    Number(false)
    //=>0

  [其它]
    Number(null)
    //=>0
    Number(undefined)
    //=>NaN

  //=>把引用数据类型值转换为数字：先把引用值调取toString转换为字符串，
  //=>然后再把字符串调取Number转换为数字

   [对象]
     ({}).toString()
     //=>'[object Object]' ->NaN

   [数组]
     [12,23].toString()
     //=>'12,23' ->NaN
     [12].toString()
     //=>'12' ->12

   [正则]
     /^$/.toString() ->'/^$/'
     //=>NaN

  Number('')
  //=>0
  [].toString()
  //=>''
  isNaN([])：
  //=>false

//=>当前检测的值已经是数字类型，是有效数字返回false，不是返回true
//=>数字类型中只有NaN不是有效数字，其余都是有效数字

```

### typeof

`typeof`用来检测一个数据的类型（是一个一元运算符，无法细分的检测数据）

- `typeof`拥有两种写法`typeof 检测的对象`或者`typeof(检测的对象)`
- 这两种方法并没有什么区别，使用效果是一样的
- 会返回一个字符串格式的数据类型
- 例如：`"number"`/`"string"`/`"boolean"`/`"object"`/`"function"`/`"undefined"`/`"symbol"`

```javascript
typeof null =>"object"
//=>因为null代表空对象指针（没有指向任何的内存空间）

//=>typeof检测数组/正则/对象，最后返回的都是"object"，
//=>也就是基于这种方式无法细分对象

面试题：
console.log(typeof []);
//=>"object"

console.log(typeof typeof []);
//=>typeof "object"
//=>"string"
```

**直接使用 `typeof` 一个不存在的变量或者在变量声明之前都不会报错。而是会返回`undefined`**

在 ES6 中基于`LET`创建变量则改正了这一机制，在声明之前使用 `typeof` 检测类型是直接报错

```javascript
typeof a;
//=>报错：(ReferenceError: Cannot access 'c' before initialization);
let a = 10;
```

### in

`in`主要用于检测一个属性自身或这原型链中是否存在，`in`需要两个参数，第一个是指定的变量，可以是数组，也可以是一个对象。第二个是指迭代的对象。在检测一个实例的时候直接书写的需要检测的属性（字符串格式）。

**如果使用`for/in`语句来检测一个属性时，那么这个属性必须是`Enumerable` （可枚举）属性**

检测数组

```javascript
var arr = [10, 20, 30, 40, 50];
for (var x in arr) {
  console.log(arr[x]);
  //=>10,20,30,40,50
  //=>这样我们可以直接输出数组的每一项的值

  console.log(x);
  //=>0,1,2,3,4
  //=>直接输出x的话输出的就是数组的索引
}
```

**不推荐`for/in`语句遍历数组**

- 在 js 中我们有很多中遍历数组的方法，使用`for/in`遍历数组时得到的结果有时可能并不是我们所需要的，当我们使用`for/in`进行遍历数组时，如果我们在原型中添加了一些属性或者方法的话，那么他们也会被遍历出来，而且`for/in`得到的结果也是字符串形式的，有时候我们做一些运算的时候处理起来也会比较麻烦！`for/in`的查找机制是**无序查找**，所有在某些情况下我们得到的顺序可能会出现混乱，
- js 中遍历数组我们可以使用普通的`for`循环，还可以使用`forEach()`方法，在 ES6 中我们还可以使用`for of`来遍历数组

检测对象

```javascript
//创建一个构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("平野绫", 18);
console.log(person.name);
//=>'平野绫'

//我们可以使用in 来检测一个实例中是否拥有这个属性
//语法 ： '属性'  in  实例   属性名必须书写为字符串格式
console.log("name" in person);
//=>true

//=>in在查找的时候也会查找当前实例的原型链
//=>如果原型链中拥有当前查找的属性，也会返回true
console.log("toString" in person);
//=>true
//=>toString是存在在原型链中的，只有当自身和原型链中都没有当前查找的属性时才会返回false

//我们也可以使用 in 运算符来遍历我们的实例
for (var key in person) {
  //我们只希望得到自身的属性，那么我们可以使用hasOwnProperty
  if (person.hasOwnProperty("key")) {
    console.log(key);

    //console.log(person[key])

    /**
     * 上面一行代码可以使我们获得每个属性的属性值，
     * 注意此处不要加引号，否则会得到undefined
     * 如果是加引号的话浏览器会认为是输出当前实例的某一个属性
     * 如果不加引号，那么[]中的就是一个变量，浏览器会计算出结果后输出
     */
  }
}
```

> - instanceof
> - constructor

是实例继承自构造器原型中的一个属性，它存储的值是构造出当前这个实例的构造函数

```javascript
function Proson(name, age) {
  this.name = name;
  this.age = age;
}
let proson1 = new Proson("绫", 19);

proson1.constructor;
//=>Proson  构造出这个实例的构造函数

//=>如果我们没有原始构造函数的引用，通过constructor也可以构造出实例
let proson2 = new proson1.constructor("钉宫", 19);
/**
 * 因为constructor存储的是原始的构造函数，那么也可以直接使用
 * constructor构造出一个实例
 */
```

> - Object.prototype.toString.call()

---

## 数据类型转换汇总

JS 中的数据类型分为

【基本数据类型】

1. 数字 number
2. 字符串 string
3. 布尔 boolean
4. 空 null
5. 未定义 undefined

【引用数据类型】

1. 对象 (object)
2. 数组对象 (Array)
3. 正则对象 (RegExp)
4. 日期对象 (Date)
5. 数学函数 (Math)
6. 函数 function
7. ...

### 转换为 number 类型

基于`Number`方法可以直接将非数字类型转换成数字类型，但是只要遇到一个非法的字符就会返回 NaN，检测字符串的时候，只要字符串中存在一个非法字符就会转换成 NaN，不管这个字符出现在什么位置，它并不会直解析出数字部分。

```javascript
isNaN("3");
//=>false
//=>isNaN在检测的时候也会自动调用系统的Number方法来将非数字类型转换为数字类型
//=>判断的是转换后的值，

Number("3");
//=>3
isNaN(3);
//=>false
isNaN("3px");
//=>true
Number("3px");
//=>NaN
isNaN(NaN);
//=>true
```

[**parseInt / parseFloat**]

等同于 Number，可以把其它类型的值转换为数字类型

和 Number 的区别在于字符串转换分析上

Number：出现任意非有效数字字符，结果就是 NaN

parseInt：把一个字符串中的整数部分解析出来，parseFloat 是把一个字符串中小数(浮点数)部分解析出来

```javascript
parseInt("13.5px");
//=>13
parseFloat("13.5px");
// =>13.5

parseInt("width:13.5px");
//=>NaN

/**
 * parseInt()的查找机制
 * parseInt()会从左往右依次转换
 * 在遇到第一个非法字符的时候会将非法字符之前的字符返回
 * 如果第一个就是非法字符，那么就会直接返回
 *
 * parseFloat()是同样的查找原理
 */
```

除了手动转换类型外，有些时候浏览器也会自动的帮我们转换

```javascript
'3px'-1 =>NaN
//=>遵循转换规则会先把非数字类型转换成数字类型
'3'-1 =>2
//=> 3

'3px'+1 =>'3px1'
//=>字符串拼接

var i='3';
i=i+1;
//=>'31'
i+=1;
//=>'31'
i++;
//=>4
//=>自增运算符就是单纯的数学运算，已经摒弃掉字符串拼接的规则
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

**一.** 发生的情况

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

**二.** 转换规律

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

**一.** 发生的情况

- 基于!/!!/Boolean 等方法转换
- 条件判断中的条件表达式最后都会转换为布尔类型

```javascript
if (n) {
  //=>把n的值转换为布尔验证条件真假
}

if ("3px" + 3) {
  //=>先计算表达式的结果'3px3'，把结果转换为布尔true，条件成立
}
```

**二.** 转换的规律

只有“0/NaN/''/null/undefined”五个值转换为布尔的 false,其余都是转换为 true

### 数学运算和字符串拼接 “+”

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

=============================================>上面是重点强调的

对象 == 数字：把对象转换为数字

对象 == 布尔：把对象转换为数字，把布尔也转换为数字

对象 == 字符串：把对象先转换为字符串，然后再转换成数字，把字符串也转换为数字

字符串 == 数字：字符串转换为数字

字符串 == 布尔：都转换为数字

布尔==数字：把布尔转换为数字

==========>不同情况的比较，都是把其它值转换为数字，然后再进行比较的

null==undefined：=>true

null===undefined：=>false

null&&undefined 和其它值都不相等

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

---

## 条件控制语句

### if / else if / else

当指定条件为真，if 语句会执行一段语句。如果条件为假，并且仍有可执行的语句则执行另一段语句。

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
if (0) {
  /**
   * 如果在判断条件中书写值，则直接进行布尔值的准换
   * 如果是表达式，则先计算表达式的值，然后再进行布尔转换
   * 最终都会转换成布尔值
   * 0/''/null/undefined/NaN都会转换成false
   */
}
```

如果判断条件内书写的是一个对象，那么条件永远为真，即使对象的值是 false

```javascript
var a = new Boolean(false);
if (a) {
  /**
   * 如果条件判断中的变量时使用构造函数方式创建或者本身就是一个对象
   * 那么即使它的值是false或者没有值，条件判断依然会判断为true
   * 因为对象转换成布尔类型永远是true，和它存储的值无关
   */
}
```

### switch case

witch 语句评估一个表达式，将表达式的值与 case 子句匹配，并执行与该情况相关联的语句。

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
/**
 * 如果每一个子表达式后没有书写break
 * 那么如果一个会从匹配的字表达是开始执行下面所有的代码
 * 不会判断条件是否匹配，知道语句结束，或者遇到break
 *
 * default会在没有任何子表达式匹配的时候执行
 * 只要子表达式匹配成功，就很不会执行default后面的代码
 */
//=>switch case 应用于变量（或者表达式等）在不同值情况下的不同操作
```

switch case 中每一种 case 情况的比较都是基于"==="绝对相等来完成的

```javascript
"10" == 10;
//=>true
/**
 * 相等比较,如果等号左右两边的类型不一样，首先会转换为一样的数据类型
 * 然后再进行比较
 * 当前案例中，就是把字符串'10'转换为数字了，然后再比较的
 */

"10" === 10;
//=>false
/**
 * 绝对比较，如果两边的数据类型不一样，则直接不相等，
 * 它要求类型和值都完全一样才会相等
 * 真实项目中为了保证代码的严谨性，我们应该更多使用绝对比较）
 **/
```

### BAT 面试题

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

循环主要功能就是重复性的做一些相同的事情，但是如果我们不规定一些条件的话就会一直循环进行下去（死循环）!这个时候浏览器就会直接卡死

一般循环语句应该拥有`[初始表达式]` `[循环条件]` `[更新表达式]`这三个要素，这样才可以让我们的循环按照正常的逻辑运行，**每循环一次都会进行条件判断，条件为`true`才会继续循环**

### for

语法:for([初始表达式][循环条件][更新表达式]){代码}；

当一个 for 循环执行的时候，会发生以下过程：

1. 如果有初始化表达式 initialExpression，它将被执行。这个表达式通常会初始化一个或多个循环计数器，但语法上是允许一个任意复杂度的表达式的。这个表达式也可以声明变量。

2. 计算 condition 表达式的值。如果 condition 的值是 true，循环中的语句会被执行。如果 condition 的值是 false，for 循环终止。如果 condition 表达式整个都被省略掉了，condition 的值会被认为是 true。

3. 循环中的 statement 被执行。如果需要执行多条语句，可以使用块（{ ... }）来包裹这些语句。

4. 如果有更新表达式 incrementExpression，执行更新表达式。

5. 回到步骤 2。

简单示例：

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
}
//=>这个循环会在浏览器的控制台依次打印数字0到9
```

### while

while 语句只要指定的条件求值为真（true）就会一直执行它的语句块

语法：while(条件){代码}

```javascript
var n = 0;
var x = 0; //初始表达式
while (n < 3) {
  //循环条件
  n++; //更新表达式
  x += n;
}
//=>只要 n 小于 3，下面的 while 循环就会一直执行
```

### do/while

语法：do{代码}while(条件)

```javascript
var i = 0; //初始表达式
do {
  i += 1; //更新表达式
  console.log(i);
} while (i < 5); //循环条件
```

**`while`和`do/while`的区别**

根据循环条件`while`可能一次也不会执行，而`do/while`则是不管条件是否成立，都会先执行一次循环

```javascript
var i = 11;

while (i < 10) {
  //条件不成立，无法进入循环
  console.log(i);
}
//=>while一次都不会执行

do {
  //先执行一次代码
  console.log(i);
} while (i < 10);
//条件不成立，退出循环

//=>do/while会在循环一次之后停止循环
```

### break 关键字

`break`关键字可以终止循环，不管条件是否满足都会终止

```javascript
for (var i = 0; i < 10; i++) {
  console.log(i);
  if (i == 2) {
    break;
    //当i等于2的时候会无视循环条件立即终止循环
  }
}
```

### continue 关键字

`continue`关键字可以跳出当次循环，然后会进行循环条件的判断，如果成立则继续循环

```javascript
for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
    //当i%2等于0的时候会跳出档次循环，下面的代码不会执行
    //会直接跳到更新表达式（i++），然后进行条件判断，
  }
  console.log(i);
}
//=>只会在控制台输出奇数
```

### for/in

`for/in`可以遍历对象的属性和数组，但是他有着不可忽视的缺陷，他的查找机制是**无序查找**

- 遍历对象属性时也会查找我们给原型定义的一些属性或者方法
- 遍历数组是无序查找，所以有时遍历出的元素顺序并不准确

在遍历对象属性的时候我们可以使用`hasOwnProperty`来过滤掉原型中的一些属性和方法

```javascript
for (var item in object) {
  if (object.hasOwnProperty(item)) {
    //只有是自身拥有的属性才会进入判断语句\
  }
  //=>支持break和continue
}
```

---

## 标准库

在 js 中给我们体供了很多内置方法，我们可以直接拿来使用

### Number

> 按照四个维度记忆：
>
> - 方法的作用
> - 方法的参数
> - 方法的返回值
> - 原有数组是否改变

**`push`**

作用：向数组“末尾”追加新的内容

参数：追加的内容（一个或多个，任意数据类型）

返回值：新增后数组的长度

原有数组改变

```javascript
var ary = [12, 23, 34];
ary.push(100);
//=>4  ary:[12,23,34,100]
ary.push(100, { name: "xxx" });
//=>6  ary:[12,23,34,100,100,{...}]
```

---

**`pop`**

作用：删除数组最后一项

参数：无

返回：被删除的那一项内容

原有数组改变

```javascript
var arr = [10, 20, 30];
arr.pop();
//=>返回被删除的内容  ==>30
//=>原有数组改变  ==>[10,20]
```

---

**`shift`**

作用：删除数组中的第一项

参数：无

返回：被删除的那一项内容

原有数组改变

```javascript
var arr = [10, 20, 30, 40];
arr.shift();
/*
 * 返回被删除的内容 ==>10
 * 原有数组改变  ==>[20,30,40]
 * shift删除内容后，会使数组中后面所有项的索引向前位移一位
 */
```

---

**`unshift`**

作用：向数组开始位置追加新内容

参数：要添加的内容（一个或多个，任意数据类型）

返回：新增后数组的长度

原有数组改变

```javascript
var arr = [10, 20, 30, 40];
arr.unshift(9, 8, false, {});
//=>可以添加任意类型的数据，添加后原有数据类型不会发生改变
//=>新数组  ==>[9,8,false,{},10,20,30,40]
```

---

**`splice`**

作用:删除指定位置内容、向指定位置增加内容、修改指定位置的信息

参数：起始位置、结束位置(可选)、添加项(可选)...

返回：删除的元素形成的数组，没删除则返回空数组

原有数组改变。

splice 的操作是从一个参数的位置开始，会包含第一个参数的位置上的数组元素，并不是从后面参数位置的后面开始

删除：

```javascript
var arr = [10, 20, 30, 40, 50];
arr.splice(1, 3);
//=>返回一个新数组，内容是删除的元素  ==>[20,30,40]
//=>如果不填写第二个参数或者第二个参数大于数组最大长度，
//=>则会从起始位置一直删除到数组的最后一项
```

新增：

```javascript
var arr = [10, 20, 30, 40];
arr.splice(1, 0, 15, 16, true);
/*
 * 在数组中添加传入的元素，
 * 第一个参数表示添加的索引位置，第二个参数表示删除0项，
 * 其余的表示需要添加的内容
 * 如果不删除则会返回一个空的数组
 * arr   ==>[ 10, 15, 16, true, 20, 30, 40 ]
 */
```

修改：

```javascript
var arr = [10, 20, 30, 40, 50, 60];
arr.splice(2, 3, 1, 2, 3);
/*
 * 第一个参数表示起始位置（包含），第二个表示删除的个数，
 * 其余表示需要添加的内容
 * arr ==>[ 10, 20, 1, 2, 3, 60 ]
 * 返回被删除的数组元素   ==>[ 30, 40, 50 ]
 */
```

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

> 不建议基于`delete`删除数组中的某一项，因为它只会删除数组中的元素，并不会改变数组中`length`。

```javascript
let arr = [10, 20, 30, 50, 40, 60];
delete arr[2];
console.log(arr, arr.length);
//=>  length: 5
//=> arr [10,20,50,40,60]
```

---

**`slice`**

作用：在一个数组中，按照条件查找出其中的部分内容

参数：两个参数（n/m），从索引 n 开始，找到索引 m 处，但是不包含 m

返回：以一个新数组存储查找的内容

原有数组不会变

```javascript
let arr = [10, 20, 30, 50, 40, 60];
arr.slice(2, 4);
//=>返回一个新的数组   ==>[30,50]

//=>如果不书写第二个参数则会直接截取到数组的最后一位
arr.slice(2);
//=>[30,50,40,60]

//=>也可以利用这个机制实现数组克隆
arr.slice(0);
//=>[10,20,30,50,40,60]
//=>从索引未0的位置开始截取，一直截取到数组的最末位
//=>返回的数组和原数组不处于同一块内存空间，是独立的

//=>支持使用负数作为参数
arr.slice(-4, -1);
//=>[30,50,40]
//=>数组的length加上负数 = 操作的位置
```

---

**`concat`**

作用：实现多个数组(或者值)的拼接

参数：数组或者值

返回：拼接后的新数组

原有数组不变

```javascript
let arr=[10,20,30];
let arr2=[1,2,3];

arr.concat(arr2)
//=>[10,20,30,1,2,3]

//=>可以一次拼接多个数组，也可以直接拼接值
arr.concat(40,4,arr2,50,5)
//=>[10,20,30,40,4,1,2,3,50,5]
//=>数组的顺序是根据拼接的顺序

//=>也可以利用一个空数组进行拼接，空数组不会占据索引位置
[].concat(arr2,100,arr,200)
//=>[1,2,3,100,10,20,30,200]
```

---

**`toString`**

作用：把数组转换为字符串

参数：无

返回：数组中的每一项用逗号分隔的字符串

原有数组不变

```javascript
var arr = [10, 20, 30, 40, 50];
arr.toString();
//=>'10,20,30,40,50';
```

---

**`join`**

作用：和 toString 类似，也是把数组转换为字符串，但是我们可以设置变为字符串后，每一项之间的连接符

参数：指定的连接符

返回：转换后的字符串

原有数组不变

```javascript
//=>join可以使用任意字符作为拼接符

let arr=[10,20,30,40]
arr.join('+')
//=>'10+20+30+40'

arr.join('*');
//=>'10*20*30*40'

//=>有时可以利用 eval 来进行数组的一些操作
eval(arr.join('+'));
//=>100

/**
 * eval可以将字符串转换为js表达式
 * arr.join('+')的返回值是  ==>'10+20+30+40'
 * 转换为js代码后就是求和 10+20+30+40
 * 结果就是100
```

---

**`reverse`**

作用：把数组倒过来排列

参数：无

返回：排列后的新数组

原有数组改变

```javascript
let arr = [1, 2, 3, 4, 5, 6];
arr.reverse();
//=>arr:[6,5,4,3,2,1]

//=>翻转两次数组则不会改变
arr.reverse().reverse();
//=>arr:[1,2,3,4,5,6]
```

---

**`sort`**

作用：给数组排序

参数：无/函数

返回：排序后的新数组

原有数组改变

- sort 默认的排序排序方式是根据 UniCode 编码进行排序的，大多数情况下我们都会传一个回调函数，以达到正确的排序结果

```javascript
//=>sort在不传递参数的情况下，只能处理10以内数字排序
var ary=[1,3,2,4,5,6,7,9,8];
ary.sort(); =>[1,2,3,4,5,6,7,8,9]

var ary=[18,1,23,27,2,35,3,56];
ary.sort(); =>[1, 18, 2, 23, 27, 3, 35, 56]
//=>没有按照我们想象中的排序

//=>真实项目中，基于sort排序，我们都需要传递参数
var ary=[18,1,23,27,2,35,3,56];
ary.sort(function (a,b){
return a-b;//=>升序  return b-a; 降序
});
```

> sort 的排序结果是根据传参的结果进行排序的，a 代表数组当前项，b 代表数组当前项的下一项，如果传入一个大于 1 的数字，就会交换 a 和 b 的位置，如果是 0，则位置不边，小于 1 则 a 和 b 会反向交换位置

```javascript
var arr = [1, 13, 543, 1, 13, 1321, 3, 53, 1, 843, 1, 684, 6];
//=>如果我们传入一个字面量数字1，那么就可以实现数组的翻转，
arr.sort(() => {
  return 1;
});
//=>[ 6, 684, 1, 843, 1, 53, 3, 1321, 13, 1, 543,13,1]

//=>使用Math方法随机打乱数组
arr.sort(() => {
  return Math.floor(Math.random() * 5);
});
//=>每次执行所产生的的结果都是随机的
```

---

**`indexOf` / `lastIndexOf`**

这两个方法不兼容 IE 低版本浏览器(IE6~8)

作用：检测当前值在数组中第一次或者最后一次出现位置的索引

参数：要检测的值

返回：索引

原有数组不变

```javascript
let arr = [10, 20, 30, 40, 50, 50, 40, 30, 20, 10];

arr.indexOf(10);
//=>0
arr.lastIndexOf(10);
//=>9

//=>如果检索的值不存在是返回-1
arr.indexOf(100);
//=>  -1

//=>验证数组中是否包含某一项
if (ary.indexOf(10) > -1) {
  //=>ARY中包含10这一项
}
```

---

**`Array.from`**

作用：将一个类数组转换成数组

参数：需要转换的类数组

返回：转换后的真数组

原类数组不变

`Array.from()` 是一个静态方法，只有`Array`能调取使用，实例无法直接使用。（可以通过原型链的机制调取使用，不过其麻烦程度让我们完全没必要这样操作）。返回值是转换后的数组。不修改原有的类数组

```javascript
function test() {
  return Array.from(arguments);
}
console.log(test(1, 28, 2, 43, 42, 1));
//=>返回的arguments转换后的真数组
```

---

**`forEach`**

作用：可以对数组中每一个元素执行执行一次函数。已删除或者未初始化的项将被跳过（例如在稀疏数组上）

参数：callback 回调函数

返回：undefined

原有数组不变

除非抛出一个错误，否则`forEach`无法被提前中断

```javascript
var arr = [10, 20, 30, 50, 40, 50];
arr.forEach(function(currentValue, index, arr, thisAry) {
  //=>currentValue  ==>当前数组中的元素
  //=>index   ==>数组元素所在的索引（下标）
  //=>arr  ==>当前操作的数组本身
  //=>thisAry   ==>回调函数中this的指向

  console.log(currentValue, index, arr);
  //=>分别输出数组中的每一项和每一项的索引，arr会输出数组本身
});

//=>如果是一个稀松数组，则会直接跳过，并不会输出，因为他没有值可供输出

var arr = [10, 20, , 21, 02, 15, , , 12];
arr.forEach(function(value, index) {
  console.log(value, index);
  //=>value  ==> 10 , 20 , 21 , 2 , 15 , 12
  //=>index  ==>  0, 1 , 3 , 4 , 5 , 8
});
//=>并不会输出稀松数组的索引
```

大部分情况下`forEach`都会形成闭包

```HTML
<a>按钮1</a>
<a>按钮2</a>
<a>按钮3</a>
<script>
  //=>获取页面中的所有a标签
  let linkList=document.getElementsByTagName('a');
  //=>将获取的a标签集合（类数组）转化成真数组
  linkList=Array.from(linkList);
  //=>forEach循环绑定点击事件
linkList.forEach(function (element, index) {
element.onclick=function(){
  console.log(index);
  //=>点击不同的元素，会输出相应的索引
}
}
//=>我们之所以可以输出不同的索引，就是因为forEach运行会形成闭包
//=>会形成不同的空间来存储对应的数据，每个数组项的空间都不相同

//=>普通for循环绑定事件并不会产生闭包
for(var i=0;i<linkList.length;i++){
    linkList[i].onclick=function(){
        console.log(i);
            //=>3
        //=>只会输出3，因为当我们点击的时候for循环早已经运行结束了
    }
}
</script>
```

**`filter`**

作用：筛选数组中的每一项

参数:回调函数

返回：符合规则的数组项

原数组不变

```javascript
let arr = [10, 21, 5, 4, 21, 854, 231, 4, 1, 24, 54, 5, 45, 42, 1];
//=>筛选数组的每一项，规则是  >20 && <100
arr = arr.filter(function(item, index) {
  return item > 20 && item < 40;
  //=>arr:[21,21,24]
});

/**
 * 传递的回调函数中第一个参数代表数组中的每一项
 * 第二个参数代表的是每一项的索引  （可选）
 * 第三个参数代表数组本身，即哪一个数组再调用filter方法  （可选）
 * 第四个参数代表this的指向，如果不传递非严格模式下this指向window
 * 严格模式下指向undefined  （可选）
 *
 */
```

> `filter`会为数组中的每一项都执行依次回调函数，会自动跳过稀松数组，`filter`的遍历范围再第一次执行回调函数就已经确定了，之后再添加到数组中的元素不会遍历，如果原有已经存在的值发生变化，那么他们的值取决于执行回调函数的那一刻。

除了以上方法，数组中还包含很多常用的方法（Array.prototype）

- every
- find
- includes
- keys
- map
- reduce / reduceRight
- some
- ...

### String

字符串是基本数据类型，字符串的每一次操作都是对值直接进行操作，不像数组一样是基于空间地址来操作的。所以**字符串中的方法都不会改变原有值**

**`charAt`/`charCodeAt`**

作用：charAt 根据索引获取指定位置的字符，charCodeAt 不仅仅获取字符，它获取的是字符对应的 Unicode 编码值(ASC II 码值)

参数：索引

返回：字符或者对应的编码

```javascript
var str = "abcdefg";
str.charAt();
//=>'a' 不指定索引位置默认返回字符串中的第一位

str.charAt(2);
//=>'c'

str.charAt(10);
//=>''
str[10];
//=>undefined

/**
 * 使用[索引]也可以直接查询相应的索引上的值
 * 如果索引超过字符串的最大长度会返回undefined
 * 而charAt()超过最大长度后返回的是一个空的字符
 */

var str = "abcdefg";
str.charCodeAt();
//=>不指定位置默认返回第一位
//=>对应的编码  a ==>97
str.charCodeAt(5);
//=>c ==>102
str.charCodeAt(10);
//=>NaN
//=>超出最大长度后会返回NaN
```

---

**`indexOf`/`lastIndexOf`**

作用：基获取字符在字符串中第一次或者最后一次出现位置的索引，

参数：需要检测的字符

返回：返回相应的索引位置，没有这个字符返回-1；

```javascript
var str = "abcdefggfednba";
str.indexOf();
//=>-1  不书写字符会返回 -1

str.indexOf("c");
//=>2

str.lastIndexOf("a");
//=>13 返回最后一次出现的位置
```

---

**`slice`**

作用：截取字符串

参数：n,m 从索引 n 开始找到索引为 m 处(不包含 m)，

返回：截取的字符串

`slice`和数组中的`slice`的操作方法是一样的

1. 不书写参数即截取真个字符串（克隆）
2. 不书写第二个参数即从起始位置截取到末尾
3. 参数支持负数

```javascript
var str = "abcdefg";
str.slice();
//=>'abcdefg';
str.slice(2, 5);
//=>'cde';
str.slice(2);
//=>'cedfg'
str.slice(-4, -1);
//=>'def'
```

---

**`substring`**

作用：截取字符串

参数：n,m 从索引 n 开始找到索引为 m 处(不包含 m)，

返回：截取的字符串

和`slice`的用法基本一致，区别是不支持负数

```javascript
var str = "abcdefg";
str.substring(2, 5);
//=>'cde';
str.substring(2);
//=>'cedfg'
str.substring(-4, -2);
//=>''  不支持负数，只会返回空的字符串  ''
```

---

**`substr`**

作用：截取的字符串

参数：n,m，从索引 n 开始截取 m 个字符

返回：截取的字符串

```javascript
var str = "abcdefg";
str.substr(2, 5);
//=>'cdefg';
str.substr(2);
//=>'cedfg'
str.substr(-4, 2);
//=>'de'  支持第一个参数为负数，第二个不允许
```

---

**`toUpperCase`/`toLowerCase`**

作用：toUpperCase 小写转大写 toLowerCase 大写转小写

参数：需要转换的字符串

返回：转换后的字符串

```javascript
var str = "hello word";
str.toUpperCase();
//=>'HELLO WORD'

var str = "HELLO WORD";
str.toLowerCase();
//=>'hello word';
```

将单词首字母大写或者小写

```javascript
let str = "hello word";
let reg = /\b[a-z]/g;
//=>\b匹配单词���界，通过正则获取到每个单词的首字母

str.replace(reg, item => item.toUpperCase());
/**
 * replace()可以将正则获取到的字符替换成任意字符，参数可以是一个函数
 * 如果参数是函数的话会将获取到的字符通过传参的形式传递给这个函数
 * 我们在函数内return 的数据就我replace替换的数据
 */
```

---

**`split`**

作用 �� 将字符串按照指定的连接符进行拆分

参数：指定的连接符

返回：拆分后的数组

```javascript
var str = "abc,bcd,cdb,dbc";
str.split(",");
//=>['abc','bcd','cdb','dbc']
```

---

**`replace`**

作用：使用字符串或者对象对象判断并替换字符串中的原有字符

参数：原有字符或正则对象，要替换的新字符

返回：一个部分或全部匹配由替代模式所取代的新的字符串

原有字符串不变

> 当使用一个固定的字符串检索并替换时并不会那么的完美。因为它每次只能替换一处，如果有多出需要替换，那么就会比较麻烦。而且有些时候不使用正则也无法完成我们的需求因为`replace`基本上都时结合正则使用的

```javascript
let str = "dogmonkycatandcatandpig";
//=>将所有的cat替换成cats
str.replace("cat", "cats");
//=>'dogmonkycatsandcatandpig';
//=>每执行一次只会替换一处，无法同时替换多出
str.replace("cat", "cats");
//=>'dogmonkycatssandcatandpig';

/**
 * 当执行第二次时也只会增加一个s，后面我们执行几次就只会增加几个s
 * 因为我们的检索值是一个字面量，并不能做任何的判断
 * 替换值和检索值存在相似处就无法完成我们所需的操作
 * 第一处替换成功时，再次进行替换时就会检索到我们的替换值
 * 会把第一次替换的值再一次进行替换
 */
```

> 一个目标字符串中有多个需要替换的字符串时，`replace`每检索到一个需要替换的字符串时就会直接替换，如果替换值时函数就会执行依次函数目标字符串中有几处匹配项就会替换几次，函数也会执行用样的次数

```javascript
let str = "dogmonkycatandcatandpig";
let reg = /cat+/g;
str.replace(reg, "cats");
//=>dogmonkycatsandcatsandpig
//=>使用正则对象可以直接替换所有匹配规则的字符串

str.replace(reg, "@");
//=>"dogmonky@and@andpig"

//=>替换掉a或者b
reg = /[ab]/g;
str.replace(reg, "@");
//=>"dogmonkyc@t@ndc@t@ndpig"
```

也可以使用函数作为第二个参数，`replace`会将函数`return`的值作为替换值

```javascript
let str = "abcbcdasdxyz";
let reg = /[ac]/g;
//=>匹配a,c中的任意一项
str.replace(reg, (...arr) => {
  //替换值是一个函数，replace会将函数的返回值作为替换值
  return "A";
});
//=>'AbAbAdAsdxyz'

str.replace(reg, function(...arr) {
  console.log(arr);
  //=>会输出类似于exec格式的一个数组
  return "A";
});

/**
 * 每一处匹配项都会使函数一次，并且将函数的返回值替换匹配项
 * 同时replace也会基于exec将一些数据通过传参的形式传递给函数
 *
 * 如果我们return一个引用类型的数据时浏览器会自动调用toString()
 * 方法，将其转换成字符串之后再进行替换，转换后如果是空字符串
 * 那么就只会删除匹配，不会替换，空格字符串并不是空串
 * 因此也会替换匹配项
 */
str.replace(reg, function() {
  let arr = [12, 21];
  return arr;
});
//=>"12,21b12,21b12,21d12,21sdxyz"

str.replace(reg, function() {
  let obj = { name: "绫" };
  return obj;
});
//=>[object Object]b[object Object]b[object Object]d[object Object]sdxyz

str.replace(reg, function() {
  let arr = [];
  //=>转换成字符串之后是空串，用空串替换相当于删除当前的匹配项
  return arr;
});
//=>"bbdsdxyz"
```

特殊的替换值

`$$` 插入一个 "\$"。

`$&` 插入匹配的子串。

`\$`` 插入当前匹配的子串左边的内容。

`$'` 插入当前匹配的子串右边的内容。

`$n` 假如第一个参数是 RegExp 对象，并且 n 是个小于 100 的非负整数，那么插入第 n 个括号匹配的字符串。提示：索引是从 1 开始

---

**`match`**

作用：利用正则表达式检测一个字符串是否拥有符合规则的字符

返回：根据正则的规则返回不同的数组

参数：正则表达式

原有数组不变

- `match`接收的是一个正则表达式参数，如果没有传参直接调用会返回一个包含空字符串的数组`['']`。
- 如果传递的不是一个正则对象，会隐式的使用`new RegExp(对象)`将其转换成正则对象。
- 也可以直接在调用方法的时候书写规则，但请注意不需要加`""`，否则只会返回`null`。
- 传入的是`Number`类型的数字或者是值是纯数字的字符串都会被直接放入数组中返回。
- 传入`undefined`也会返回`[""]`，除此之外都是`null`

```javascript
let str = "看看123匹配到了456几个";
str.match(123); //=>["123"]
str.match("123"); //=>["123"]
str.match(null); //=>null
str.match(undefined); //=>[""]
str.match(true); //=>null
str.match(false); //=>null
str.match("12sf"); //=>null
str.match("/d+/g"); //=>null
str.match(/\d+/g); //=>["123","456"]
```

如果使用 g 标志，则将返回与完整正则表达式匹配的所有结果（Array），但不会返回捕获组

如果未使用 g 标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性，或者未匹配 null。

> 返回的数组中会包含捕获组，同时还拥有一些额外的属性`input`,`index`。

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

URL 地址问号传参解析

> 有一个 URL 地址“<http://www.zhufengpeixun.cn/stu/?lx=1&name=AA&sex=man”> 地址问号后面的内容是我们需要解析出来的参数信息 { lx:1, name:'AA', sex:'man' }

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

### Math

Math 称为数学函数，但是它属于对象类型的

之所以叫做数学函数，是因为 Math 这个对象中提供了很多操作数字的方法

> `Math`不是构造器，无法`new`出来一个实例，所以它的方法都是静态方法。只能通过`Math.方法`来调用。`Math`的方法会基于`Number`来转换那些不是数字的传参

**`abs`**：

作用：获取一个数字的取绝对值

参数：需要取值的数字

返回：参数的绝对值

```javascript
Math.abs(10);
//=>10
Math.abs(-10);
//=>10
Math.abs("10");
//=>10 数字10
Math.abs(null);
//=>0
Math.abs();
//=>NaN
Math.abs(0.2);
//=>0.2
Math.abs("10px");
//=>NaN
Math.abs(undefined);
//=>NaN
```

---

**`ceil/floor`**：

作用：向上或者向下取整

参数：需要取整的值

返回：大于或等于给定数字的最小整数。

```javascript
//=>ceil向上取整
Math.ceil(0.95);
//=>1
Math.ceil(4);
//=>4
Math.ceil(7.004);
//=>7
Math.ceil(-0.95);
//=>0
Math.ceil(-4);
//=>-4
Math.ceil(-7.004);
//=>-7

//=>floor向下取整
Math.floor(45.95);
//=> 45
Math.floor(45.05);
//=> 45
Math.floor(4);
//=> 4
Math.floor(-45.05);
//=> -46
Math.floor(-45.95);
//=> -46
```

---

**`round`**：

作用：四舍五入

参数：计算的值

返回：四舍五入到最接近的整数

```javascript
Math.round(10.49);
//=>10
Math.round(10.51);
//=>51
Math.round(-10.5);
//=>10 小数点后面为0.5的负数并不会入而是会舍
Math.round(-10.51);
//=>11
```

---

**`sqrt`**：

作用：开平方

参数：需要计算的值

返回：计算后的平方根

```javascript
Math.sqrt(9);
//=> 3
Math.sqrt(2);
//=> 1.414213562373095

Math.sqrt(1);
//=> 1
Math.sqrt(0);
//=> 0
Math.sqrt(-1);
//=> NaN
```

---

**`pow`**：

作用：取幂（N 的 M 次方）

参数：需要计算的值

返回：计算后的值

```javascript
Math.pow(x, y);
//=>如果 x 是 2 ，且 y 是 7，则计算后的结果是128
//=>x 是基数  y 是指数
```

---

**`max/min`**：

作用：获取最大值和最小值

参数：多个数值

返回：最大或者最小的数字

`Math.max()`和`Math.min()`语法完全一样，唯一的区别就是一个获取最大值，一个是获取最小值

如果给定的参数中至少有一个参数无法被转换成数字，则会返回 NaN。

```javascript
Math.max(10, 20, 45, 54);
//=>54
Math.max("10", "54", "45", "85", "97");
//=>97
Math.max("10", "54px", "45", "85", "97");
//=>NaN
```

可以通过借用`Function`上的`apply`方法来实现获取数组的最大值

```javascript
let arr = [10, 54, 21, 421, 541, 54];
Math.max.apply(null, arr);
//=>541
/**
 * apply原有的功能是可以方便一个方法中this的指向
 * 第一个参数是需要让this指向的对象，
 * 其余参数都是传递给方法的实参
 * 但是传入多个参数会自动拆分成单个的值出入
 * 并不是将整个数据传入，如果传递的实参是一个数组，
 * 则会把数组中的每一项解析出来一次传入
 * 利用这种机制我们就可以实现用Math.max()方法寻找数组最大值
 * Math.max()，不支持传入一个数组，而apply则可以将数组拆分
 * 将拆分的单个数据传入Math.max()方法中
 */
```

利用展开运算符会更加的方便

```javascript
let arr = [10, 54, 21, 421, 541, 54];
Math.max(...arr);
/**
 * 展开运算符可以将一个数组中所有的元素进行解构
 * 和apply都是将数组中的每一项拆分开
 * 然后将拆分的单个数据一次传递给Math.ma()
 */
```

---

**`PI`**：

作用:获取圆周率

参数：无

返回：3.141592653589793

`Math.PI`是一个属性，并不是方法，不能使用`()`调用

```javascript
Math.PI;
//=>3.141592653589793
```

---

**`random`**：

作用：获取 0~1(不包括 1) 之间的伪随机小数

参数：无

返回：伪随机数

```javascript
Math.random();
//=>0.13578557492877397;
Math.random();
//=>0.8035755754005868;
Math.random();
//=>0.5826750677529821;
Math.random();
//=>0.2731206584424406;
```

我们也可以通过一些操作得到两个数之间的随机数

```javascript
function getRandomIntInclusive(max, min) {
  max = Math.ceil(max);
  min = Math.floor(min);
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}
//=>这个方法获取随机数时也可以获取我们传入的最大数和最小数
//=>但是通过Math.round()会导致获取到的随机数分布不均匀
```

### 链式写法

js 默认给我们提供了各种各样的实例方法供我们使用，这些方法大都会有一个返回值，我们就可以使用这个返回值来进行链式写法，但是我们应该熟悉每种方法的返回值，以免造成不必要的错误

> 我们必须清楚的了解每一个方法的返回值后才能熟练的使用链式写法，因为在链式写法中当前方法操作的一直都是上一个方法的返回值。

```JavaScript
var arr=[10,50,60,40,30,20];
arr.sort(function(a,b){return b - a}).reverse().pop();
//上面使用的方法会对数组进行升序降序排序，之后进行翻转，
//=>最后删除数组中的最后一项，也就是最大项。

//只要我们了解各方法的返回值，我们就可以使用任何类型的链式写法

var arr=[10,50,60,40,30,20];
arr.sort(function(a,b){return b - a}).reverse().pop().toString().splice(1,3);
//如果我们对返回值掌握不是特别熟悉的话，上面代码就会报错，
//报错：VM30:2 Uncaught TypeError: arr.sort(...).reverse(...).pop(...).toString(...).splice is not a function
//当我们使用toString()方法后此时返回值就已经是一个String类型的数据了
//我们无法再使用数组中的一些方法。
```

---

## 面向对象(Object Oriented Programming)

js 是一门面向原型的编程语言，也叫作弱类化。但是 js 的核心支持面向对象编程思想，而面相对象编程思想是尽可能的模拟人类的思维方式，我们的程序就是一系列的对象组成的，类就相当于现实世界的一个抽象，而对象就是类的实例化，表示具体的某一个实物，在 js 中我们可以把页面中的标签，文本，注释都看做是一个对象，我们在编写程序，实际上就是在操作一系列的对象。而在 js 中没有真正意义上的类，`ES6`中的`class`关键字只是在模拟类，这其实是一种语法糖。

### 封装(Encapsulation )

> 我们可以将一些功能性的 js 代码进行封装，这样可以实现`高内聚，低耦合`，减少重复的代码。

### 继承(Inheritance )

js 中的继承是指父类下的所有子类都可以使用父类原型中的方法和属性，好处是可以减少代码的重用性

**原型继承.**

将父类的实例作为子类的原型`prototype`

**优点：**

- 子类的实例可以使用父类私有和公有（原型）属性和方法

**缺点：**

- 子类和父类公用同一个原型，子类修改原型中的属性父类的原型也会改变
- 不能同时继承多个父类

```javascript
function A(x, y) {
  this.x = x;
  this.y = function() {
    console.log(this);
    //=>b
  };
}
function B(z) {
  this.z = z;
}
B.prototype = new A();
//=>将A的实例作为B的原型

B.prototype = A.prototype;
/**
 * 这是最简单的继承方式之一，
 * 直接让子类的原型指向父类的原型
 * 只可以继承父类原型中的属性和方法
 * 无法继承父类私有的属性和方法
 *
 * 此时使用instanceof无法检测一个实例
 * 到底是父类的实例还是子类的实例
 * 但是使用constructor可以检测出来
 */

let b = new B(10);
b.y();
//=>this  b
```

**`call`**

使用`call`将父类中的私有属性和方法添加到子类实例的私有属性中，无法继承原型中的属性和方法

**优点.**

- 继承的属性和方法都是私有的，即使改变也不会影响其他的
- 继承的时候可以向父类传递参数
- 可以继承多个父类

**缺点.**

- 无法继承父类原型中的属性和方法
- 无法实现代码复用，每一个子类创建的实例都是将父类私有的属性和方法复制一份
- 实例只是子类的实例而不是父类的实例

```javascript
function A(x, y) {
  this.x = x;
  this.y = function() {
    console.log(this.x);
    //=>10 继承是传递的参数，将参数赋值给x
  };
}
A.prototype = {
  aa: function() {
    console.log(aa);
  }
};
function B(z) {
  A.call(this, 10);
  /**
   * 继承的时候可以向父类传递参数
   * 子类B每创建一个实例，都会将父类的私有属性和方法
   * 继承到实例私有的属性和方法，
   *
   * 原理就是子类构造函数中的this是子类的实例，
   * 调用父类A并且使用call改变父类中的this
   * 将其变成子类构造函数的实例，
   * 那么父类构造函数中的带有this的私有属性和方法
   * 都会成为子类构造函数构造出的实例的属性和方法
   */

  this.z = z;
}
let b = new B();
//=>创建B的实例
b.y();
b.aa();
//=>报错：b无法使用父类原型上的方法
console.log(b);
/**
 * b{
 *    x:10,
 *    y:function,
 *    z:undefined
 * }
 */
```

**寄生组合.**

将 **原型链继承** 和 **`call`继承** 结合在一起使用

**优点.**

- 可以继承多个父类的私有属性和方法
- 既可以继承父类的私有属性和方法，也可以继承父类原型中的私有属性和方法
- 父类原型中的代码可以复用
- 父类原型中的值并不会共享

**缺点.**

- 父类构造函数执行两次，会造成内存浪费

```javascript
function A(x, y) {
  this.x = x;
  this.y = function() {
    console.log(this);
  };
}
function B(z) {
  A.call(this, 10);
  //=>会执行一次父类构造函数
  this.z = z;
}
B.prototype = new A();
//=>也会执行一次父类构造函数
let b = new B(20);
/**
 * 这种继承既可以继承父类的私有属性和方法，
 * 继承的私有属性和方法会成为实例的私有属性和方法
 * 修改时并不会影响其他的实例
 * 也可以继承父类原型中的属性和方法，
 * 但是执行两次父类构造函数，
 */
```

**改良版寄生组合:**

```JavaScript
function A(x, y) {
  this.x = x;
  this.y = function() {
    console.log(this);
  };
}
function B(z) {
  A.call(this, 10);
  //=>会执行一次父类构造函数
  this.z = z;
}
B.prototype.constructor=B;
//=>最好重新定向constructor的指向
B.prototype = Object.create(A.prototype)
/**
 * 并不会执行父类的构造函数
 * 而是创建一个新的对象作为中转的原型
 * 并且让新创建的对象的__proto__指向父类的原型
 * 最后将创建好的新对象赋值给B.prototype
 * 这样B的原型就会通过中转的空对象指向父类的prototype
 * 同时并不会将父类的私有属性和方法继承到子类的原型中
 */
let b = new B(20);
```

`Object.create(__proto__)`可以创建一个对象，并且将传递的参数作为创建的对象的`__proto__`

**循环拷贝：**

使用`in`运算符循环将父类及父类原型中的属性和方法作为属性赋值给子类的原型

**优点：**

- 可以继承多个父类
- 可以继承父类及其原型中的属性和方法

**缺点：**

- 消耗性能，效率低
- 创建的实例不属于父类的实例

```javascript
function A(x, y) {
  this.x = x;
  this.y = function() {
    console.log(this);
  };
}
A.prototype.h = function() {
  console.log(this);
};
function B(z) {
  this.b = b;
  p = new A(10);
  for (var prop in p) {
    B.prototype[prop] = p[prop];
    /**
     * 创建一个父类的实例，然后循环遍历新创建的实例
     * in 运算符也可以遍历出原型中的属性和方法
     * 通过in运算符将遍历出的属性和方法通过属性表达式的方式
     * 依次添加到子类的prototype原型中
     * 消耗性能，效率低下， 不推荐！！！
     */
  }
}
let b = new B(20);
console.log(b);
//=>z:20
```

**圣杯模式继承：**

等价于寄生组合继承，不过创建的是一个空函数作为中转，书写比较复杂

**优点：**

- 圣杯模式==寄生组合

**缺点：**

- 书写复杂，无法实现多继承

```javascript
//可以将圣杯模式封装，方便以后使用
function inherit(parent, son) {
  function temp() {}
  //=>创建一个空函数
  temp.prototype = parent.prototype;
  //=>让空函数的prototype原型指向父类的prototype原型
  son.prototype = new temp();
  //=>让子类的prototype原型指向空函数的prototype原型
  son.prototype.constructor = son;
  //=>重定向子类的constructor指向
  son.prototype.uber = parent;
  //=>书写一个自定义的属性指向父类
  //=>方便以后查询继承自哪一个父类
}
/**
 * 以后可以直接调用这个函数实现继承
 * son：需要传递一个子类
 * parent：需要传递一个父类
 */
```

**`ES5`中推荐使用寄生组合继承或者圣杯模式继承，他们都不可以实现多继承，只有循环拷贝可以完美实现多继承（同时继承父类的私有属性和方法，以及父类原型中的私有属性和方法），但是循环拷贝继承损耗性能，效率低下，一般不推荐使用**

**ES6`class`**

`ES6`中的类实际上就是一个"特殊的函数",拥有类声明和类表达式,直接调用类浏览器会报错,它只能通过`new`关键字创建实例

语法:类声明

```javascript
class Fn {
  //=>Fn相当于函数名,后面没有小括号
  constructor(n, m) {
    //=>constructor代表的就是函数本身,紧跟的小括号可以书写形参
    this.x = x;
    //=>书写函数内的代码
  }
  //=>写在constructor外面的代码就相当于写在函数的原型中
  //=>等价于  ==>Fn.prototype.xxx=xxx
  getX() {
    console.log(this.x);
  }
  /**
   * 无法在class内把函数当做是一个对象添加属性
   * 只能在class外部添加属性
   * 如果要为函数添加静态属性需要使用static关键字
   */
  static AA() {
    console.log(this);
  }
}
```

语法:类表达式

```javascript
let Fn = class {
  constructor(形参) {
    //=>代码
  }
  //=>添加原型方法
  getX() {
    //=>代码
  }
  //=>添加静态方法
  static AA() {
    //=>代码
  }
};
```

**细节.**

> 1.不能重复申请相同的类,否则浏览器会抛出类型错误,之前使用的是类表达式也会报错
>
> 2.无法在`class`内部书写属性,只能书写方法,属性只能书写在外部,如果是往原型中添加则正常的使用`prototype`添加即可
>
> 3.类不具有普通函数的提升机制,如果在类声明之前使用浏览器会直接抛出`ReferenceError：`错误,类表达式会返回`undefined`,无法获取任何值
>
> 4.类声明和类表达式都是执行在严格模式下的,包括函数,方法,构造函数,`this`等,如果在类中不明确`this`的指向,那么`this`就是指向`undefined`

**类的继承.**

类的继承使用的是`extends`和`super`关键字

```javascript
//=>父类
class Parent {
  constructor(x, y) {
    this.x = x;
    this.y = function() {
      console.log(this.x);
    };
  }
  getX() {
    console.log(this.x);
  }
  //=>给父类添加静态方法
  static getY() {
    console.log("凌");
  }
}

//=>子类
let son = class son extends Parent {
  constructor(q, y) {
    //=>extends关键字后书写需要继承的父类
    super();
    /**
     * 使用super关键字调用父类
     * 支持传递参数,父类中的this
     * 默认是子类的实例
     */
    this.q = q;
    this.y = y;
  }
};
```

### 多态(Polymorphism )

**重载.**

js 并没有真正意义上的重载，牵强讲的话就是一个函数根据传递参数的不同，执行的方法也不相同

**重写.**

实例重写父类原型中的一些方法。

## 严格模式

在 ES5 中使用严格模式需要在当前作用域内的第一行书写`use strict`;如果书写在全局作用域内的第一行则表示当前的整个文件使用的都是严格模式。

> 全局作用域的严格模式只会影响当前的文件，并不会影响到其他的 js 文件，在实际多人开发的项目中，当我们完整开发之后会将所有人开发的代码合并压缩在一个 js 文件内，当我们想要在自己开发的 js 代码使用严格模式的话应该使用一个立即执行函数，将自己所有的代码放在一个单独的作用域内，这样就不会影响到其他人所书写的代码，因为`uer strict`只对当前的作用域有效果

### arguments

在严格模式中`arguments`的`arguments.callee`和`arguments.callee.caller`无法使用，同时`arguments`不再和形参形成映射机制，只是一个单纯的形参集合体。

```javascript
function test() {
  "use strict";
  console.log(argument.callee);
}
test(); //=>报错：TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

function test(x, y) {
  console.log(arguments[0]); //=>10
  x = 100;
  console.log(arguments[0]); //=>100
}
test(10, 20);
//在非严格模式中arguments依旧和形参存在着映射关系，当一个改变时，另一个也会跟着改变

function test(x, y) {
  "use strict";
  console.log(arguments[0]);
  //=>10
  x = 100;
  console.log(arguments[0]);
  //=>10
  arguments[0] = 200;
  console.log(x);
  //=>100
}
test(10, 20);
//在严格模式中arguments和形参不存在映射关系，改变这两个的属性时另一个并不会改变
//也就是说在严格模式中arguments只作为实参集合体，并不能做出改变
```

---

### this

在非严格模式中`this`不能明确它的指向，那么它就会指向`window`,但时在严格模式中如果不明确`this`的指向，那么他就会指向`undefined`

```javascript
function test() {
  console.log(this);
  //=>window
}
test();
//=>在非严格模式中不指定this的指向，this就会自动指向window

function test() {
  "use strict";
  console.log(this);
  //=>undefined
}
test();
//在严格模式中this的指向不明确的话就会指向undefined，代表没有执行主体
```

### 对象重名

在非严格模式中对象的属性名如果重复的话只会由后面的覆盖前面的，但是在严格模中后面重复属性名设置的并不会生效，只有第一个才会生效

```javascript
function test() {
  var obj = { n: 2, n: 4 };
}
test();
console.log(obj.n); //=>4
//非严格模式中重名的属性名会由后面的覆盖掉前面的

function test() {
  "use strict";
  var obj = { n: 4, n: 8 };
}
test();
console.log(obj.n); //=>4;
//在严格模式中重名的属性名只有第一个设置的会生效，其他的都不会生效
```

---

## 变量提升(HoiSting)

变量（variable）：它不是具体的值，只是一个用来存储具体值的容器或者代名词，因为它存储的值可以改变，所以称为变量

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
alert(n + 10);
//=>弹出来25 此时的n代表15

const m = 100;
m = 200;
//=>报错:Uncaught TypeError: Assignment to constant variable.
//不能给一个常量重新的赋值（常量存储的值不能被修改，能够修改就是变量了）
```

使用`var`可以同时申请多个变量,多个变量之间使用`,`隔开，结束使用`;`

```javascript
var a = 10,
  b = 20,
  c = 30,
  d = 40;
//=>虽然我们只写了一个var，但其实这是一个语法糖，
//=>我们所申请的每一个变量都是使用var申请的
```

我们在编写代码的时候看似是在操作变量，其实不是，我们所书写的代码执行的时候都是把变量内存储的值取出然后执行，变量只是一个可读写的容器。

### 命名规范

- 严格区分大小写
- 遵循驼峰命名法：按照数字、字母、下划线或者`$`来命名（数字不能做为名字的开头），
- 命名的时候基于英文单词拼接成一个完整的名字（第一个单词字母小写，其余每一个有意义单词的首字母都大写）
- 不能使用关键字和保留字：在 JS 中有特殊含义的叫做关键词，未来可能会成为关键字的叫做保留字

```javascript
var n=12;
var N=13;
//=>两个n不是同一个变量

var studentInfo / student_info / _studentInfo（下划线在前的，是公共变量） / $studentInfo（一般存储的是JQ元素）...

语义化强一些
  add / create / insert
  del（delete）/ update / remove（rm）
  info / detail
  log
  ...
```

---

### `let`

`let`是`ES6`中新增的语法，用于申请一个变量，使用`let`声明的变量会产生一个块级作用域

- 不存在变量提升机制，只会在代码执行到`let`后才可以访问。

```javascript
console.log(x);
//=>报错：ReferenceError: can't access lexical declaration `name' before initialization
let x = 10;
```

- 不允许存在相同的变量名,浏览器会在代码执行之前进行词法解析,发现基于`let`声明的变量存在重复时,会直接抛出错误,并不会执行代码

```javascript
let x = 10;
let x = 20;
console.log(x);
//=>报错：SyntaxError: redeclaration of let x

//=>使用var声明相同名字的变量也会报错
let x = 10;
var x = 20;
//=>报错：SyntaxError: redeclaration of let x
```

- 隐式的变量名重复

```javascript
let a = 10;
{
  var a = 20;
}
/**
 * 报错：SyntaxError: redeclaration of let a
 * 因为使用var声明的变量存在提升机制
 * 在初始化的时候会自动提升到最顶部
 * 这样就会和使用let声明的变量产生隐式的冲突
 */
```

- 允许在不同的作用域内声明相同的变量名

```javascript
let a = 10;
//=>全局作用域
function test() {
  //=>函数作用域
  let a = 20;
  console.log(a);
  //=>20
  {
    //=>块级作用域
    let a = 30;
    console.log(a);
    //=>30;
  }
}
console.log(a);
//=>10
```

- 会切断和`window`之间的映射机制

```javascript
let a = 10;
var b = 20;
console.log(window.a);
//=>undefined
console.log(window.b);
//=>20;
```

- 只可以访问自身作用域和全局作用域内基于`let`声明的变量

```javascript
let a = 20;
console.log(a);
//=>20
{
  let a = 30;
  console.log(a);
  //=>30
}
{
  console.log(a);
  //=>20  可以访问全局u作用域中的a
}

==========================================================
{
  let a =20;
  console.log(a)
  //=>20;
}
{
  let a =30;
  console.log(30);
  //=>30
};
console.log(a);
//=>报错：a is not defined   全局作用域内并没有a

===========================================================
{
  let a =30;
  console.log(a)
  //=>30;
};
{
  let a =40;
  console.log(a);
  //=>40;
};
{
  console.log(a)
  //=>报错：a is not defined
  //=>全局作用域和自身块级作用域都没有a
}
```

- 基于`let`声明的变量会存储在当前页面的最顶部到初始化变量之间的一个`暂存死区`中，在`暂存死区`中访问都会报错，包括`typeof`

```javascript
typeof a;
var a = 20;
//=>undefined  即使a不存在也不会报错

typeof b;
let b = 20;
//=>报错：ReferenceError: can't access lexical declaration `b' before initialization

================================================
for(let a of a.n){
  console.log(a);
}
/**
 * 报错：ReferenceError: can't access lexical declaration `a' before initialization
 * 除非声明语句执行完毕，
 * 否则基于let声明的变量依旧存在于暂存死区中
 */

==================================================
/*
 * 从视觉上看for循环后面的小括号并不属于块级作用域内
 * 但其实是已经处于块级作用域内了,
 * 所以下面的代码并不会报错
 */
function test(){
  let a =10;
  console.log(a)
  //=>10
  for(let a =20;a<21;a++){
    console.log(a);
    //=>21
  };
};
test();
```

---

### 变量提升

在作用域形成之后，js 代码自上而下执行之前，浏览器会把所有带`VAR`和`FUNCTION`的关键字提前，`VAR`会提前声明，但是不会赋值，`FUNCTION`会提前声明并定义。

**`HoiSting`变量提升只会发生在当前作用域**

**一.** 全局变量提升:

> 在全局作用域中申请的即为全局变量，全局变量只会提升到全局作用域`window`中，函数在提升的时候会创建一个新的堆内存用来存储自身的代码块，当执行代码的时候，声明提前过的代码浏览器不会再次执行。

```javascript
console.log(a); //=>undefined
//变量提升只会声明提升，
//只有当代码执行到赋值操作的时候才会赋值，相当于在页面顶端var a;
//因此我们在之前使用只能得到undefined
var a = 123;

test();
//=>123
//函数的提升是声明+定义
//因此我们在函数声明之前也可以正常使用

function test() {
  console.log(123);
}
```

---

**二.** 局部变量提升:

> 在函数内的使用`VAR`申请的变量称之为局部变量，只有在函数执行的时候才会触发提提升机制，但是只能提升到函数私有的作用域中，函数运行的时候会先给形参赋值，然后在进行变量提升，

**全局作用域`window`无法访问函数私有作用域中使用`var`关键字声明的变量**

```javascript
function test() {
  var a = 12;
}
test();
console.log(window.a);
//=>undefined
//=>对象机制的原因导致window访问不存在变量不会报错
console.log(a);
//=>报错：a is not defined
//=>直接访问不存在的变量会直接报错
```

### 带 var 和不带的区别

**一.** 全局使用`VAR`声明

> 在全局中使用`VAR`关键字申明一个变量时会自动和`window`形成一个映射的机制，可以直接使用`window.变量名`获取相应的值，因此当改变一个时另外一个也会改变，但是函数中使用`VAR`关键字声明的私有变量，并不会和`window`形成映射机制。

```javascript
var a = 123;
console.log(a);
//=>123
console.log(window.a);
//=>123
window.a = 321;
console.log(a);
//=>321
console.log(window.a);
//=>321
//由于映射机制的关系，改变其中一个另外一个也会改变
```

**二.** 全局未使用`VAR`声明

> 全局中未使用`VAR`关键字声明的变量不存在变量提升，相当于给`window`添加一个属性对象的机制是**即使没有这个属性，直接使用的话也不会报错，而是会显示 undefined** 因此在代码之前使用`window`访问的话得到的是`undefined`，但是不使用`window`而直接调用的话浏览器会报错

```javascript
console.log(window.a);
//=>undefined
console.log(a);
//=>报错  a is not defined
a = 123;
//不使用关键字var声明的变量并不会提升，因此我们在之前访问的话会直接报错，
//但是访问window.a的话即使没有a也不会报错，只会返回undefined
```

**三.** 函数内的`VAR`

> 函数内使用`VAR`关键字声明的变量为私有变量，全局作用域中无法访问，同时变量提升遵循私有作用域的提升机制。
>
> 函数内部未使用`var`关键字申请的变量都是属于全局作用域，如果全局中不存在这个变量，那么代码执行的时候会自动给`window`添加一个属性。如果全局中存在这个变量，那么就是在给全局作用域中的这个变量再次赋值。

```javascript
function test() {
  var a = 123;
}
console.log(a);
//=>报错：a is not defined
console.log(window.a);
//=>undefined
//在函数的变量是无法在全局内访问的，直接访问会直接报错，使用window是得到undefined
```

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
/**
 * 在新版本的浏览器中if中的判断条件会直接报错
 * 函数的私有作用域中存在函数名为 g 的函数
 * 但是if判断内的函数只会进行提升声明
 * 并不会像普通函数一样，声明 + 赋值
 * 此时我们调用函数，等价于 ==>undefined()
 * undefined()调用不存在的函数会直接报错
 */
```

### 变量重名

1. 在 js 中全局作用域中申请的变量其实可以理解成是`window`的属性，由于对象的属性名是不可以重复的，所以如果变量名相同的话在变量提升阶段后面的会直接把前面所有重名的覆盖掉，代码执行阶段也是如此，重复的变量名并不会重新定义，只会重新赋值，从而把前面的值覆盖掉

2. 在下列代码中由于函数名和变量名字重复，在变量提升阶段使用`VAR`关键字申请的只会定义，默认值是`undefined`，并不会赋值，而后面的函数则会声明和定义一起提前，所以代码未执行到重新赋值代码之前，`test`都是函数，当执行到赋值代码的时候，此时`test`的值重新赋值为了`100`，当`100`调用函数时会报错

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

---

## 函数

函数在 js 中属于是一等公民，函数就是将一些我们经常使用的功能或者经常重复性使用的代码封装在一起，当我们需要使用的时候直接调用即可，函数为我们的开发提供了不可或缺的便利，同时函数中的形参和实参也让我们的开发更加的灵活多变，

【 **细节** 】

- 如果将一个函数作为表达式赋值给一个变量时，表达式运算结束后，当前的这个变量也会消失，

```javascript
var a = function f() {}; //此处的函数名f没有什么实质性的意义
console.log(a); //f函数本身的代码块
console.log(f); //Uncaught ReferenceError: f is not defined

var a = 1;
if (function f() {}) {
  a += typeof f;
  /**
   * 哪怕是一个空的引用类型的数据，也依然是true
   * 条件判断内的引用类型会永远成立
   * 但是函数作为表达式后，运算结束后会立即销毁
   * ES5中typeof 一个不存在的变量会返回undefined
   */
}
console.log(a); //字符串拼接:1undefined
```

### 创建函数

- 函数的创建的时候会自动开辟出一个新的堆内存，将函数的代码块以字符串形式的存储起来，栈内存与函数关联起来的是堆内存的内存地址。

- 函数创建的方式：函数字面量，函数表达式，匿名函数。

  - 函数字面量：基本格式为`function [函数名](){}`，函数字面量具有变量提升机制。
  - 函数表达式：基本格式为`var [变量名]=function(){}`,函数表达式只会声明提前，
  - 匿名函数：基本格式为`(function(){}())`,不具有变量提升，会直接执行，并且只能执行一次，除了不具有变量提升机制之外，和其他的函数都是一样的机制。

### 函数运行

- 函数字面量和函数表达式都需要使用`()`来调用，匿名函数后面紧跟着的就是`()`调用符号，所以执行到匿名函数时会直接调用，

- 函数在运行的时候会产生一个私有作用域，在私有作用域当中只有形参和使用关键字`VAR`声明的变量是私有变量，全局作用域当中是无法访问私有作用域中的私有变量，但是私有作用域经过**作用域链**却可以访问全局作用域中的变量。

### 形参实参

形参：形式上的参数，用于接收函数调用是传递的实参

- 在函数创建的时候可以在`()`中填写形参，形参就相当于在函数内部创建了一个变量，只不过没有赋值，函数在调用的时候，如果有传递实参，则最优先给形参赋值，形参在函数内部属于私有变量，全局作用与无法访问，形参名可以和全局作用域中的任何变量重名，

实参：函数调用时需要传递给形参的值

- 在函数调用的时候可以在`()`中填写需要传递的实参，如果传递的是表达式则会先计算出值然后在传递，如果是引用类型的则是传递其内存地址，(此时函数内部的形参会和全局作用域中的变量指向同一块内存空间)，函数也可以作为实参传递

形参和实参的数量可以不相等，在传递实参的时候，会按照顺序给形参赋值，如果实参数量少于形参数量，则多出来的形参值则是`undefined`,如果形参的数量少于实参，会先依次给形参赋值，多出来的形参并不会报错

### ES6 中的形参

【 **在 ES6 中可以直接给形参赋值(形参初始化)** 】

```javascript
function test(x = 0) {
  //只有在没有传递值或者传递的是undefined时才会赋值为0
  console.log(X);
}
test(null); //=>null
test(false); //=>false
test(undefined); //=>0  不传递实参x的值也是undefined，
//只要有传递实参并且传递的实参不是undefined，
//那么我们传递的是什么x就是什么
```

### 返回值

当我们基于函数实现一些功能的时候。我们有时候并不需要利用函数处理，只是单纯的希望函数能够把结果计算出来，至于计算的结果则由我们自由使用，或者是我们希望在外部仍然可以使用函数内部的东西，这时我们就可以使用`return`关键字来返回我们需要的东西，

1.在函数中如果不使用`return`关键字函数也会自动在函数末尾添加，只不过返回的`undefined`，如果只书写`return`，后面不填写返回值的话，那么也会返回`undefined`。

```javascript
function test(a, b) {
  console.log(a + b); //30
}
test(10, 20);
var a = test(10, 20);
console.log(a); //=>undefined
//这个函数会在控制台输出a+b的结果，并没有返回值，
//即使我们使用一个变量接收，也只会得到undefined

//当我们需要操作相加结果的时候就可以将这个结果返回
function test(a, b) {
  console.log(a + b);
  return a + b;
  //=>返回a+b的结果到外部
}
var c = test(10, 20);
console.log(c);
//=>30，我们可以使用相加的结果做我们需要的操作
```

2.我们可以在函数中返回任何数据类型，基本数据类型会直接返回值，而引用数据类型时则会返回对应的堆内存空间地址，我们甚至还可以返回一个函数

```javascript
function test(a+b){
  return a+b;
  }
  var a =test(10,20);
  console.log(a) //=>30
//上面这些代码则是利用了函数的返回功能，返回的结果是a+b的结果
//上面的函数只是帮我们出结果，并把结果返回给我们，

function test(){
  return function(){
    //这里可以书写我们使用的功能然后然后返回
  }//=>此处返回的是这个函数的堆内存地址
}
var result =test();
result()//=>调用函数的返回值
//我们可以返回一个函数，函数内书写这我们所想要使用的功能，然后用一个变量接收，
//之后我们想要使用这个功能的时候，直接调用这个返回值就可以了。
//我们甚至可以将多个功能放在一个对象中返回出来，
//这样做的的好处是可以减少全局变量的污染，也可以让我们的代码便于维护
```

3.在函数执行当中，一但碰到`return`关键字，就会立即终止函数的执行，直接开始执行函数后面的代码

```javascript
function test(a, b) {
  var num = a + b;
  return;
  var num2 = a * b;
  return [num, num2];
}
var result = test(10, 20);
console.log(result); //=>undefined
//上面的函数只会返回undefined，因为我们函数在碰到return之后就会立即终止函数的执行，
//即使在下面再次书写一个return也得不到任何的结果，
```

### `arguments`

**`arguments`只在非严格模式中存在映射机制，`arguments`的内容取决于函数传递实参的内容，**

1. `arguments`是所有函数都拥有的类数组对象（ES6 中的箭头函数没有），并不是真正的数组对象，但是可以转换成真正的数组，

2. 他是函数所传递的实参的集合，并且拥有索引，索引从 0 开始，每传递一个实参会自动递加其索引值，将传递的值作为值存储起来，

3. 无论有没有形参接收实参，`arguments`的值都会增加，如果有形参接收实参，那么`arguments`的值会和形参形成映射关系，他们其中一个改变的时候另外一个也会改变，

4. 只有实参传递的值才会使`arguments`和形参形成映射关系，如果实参数量少于形参数量，那么后面手动给形参赋值并不会影`arguments`同时也不会递加自身的索引和值。

5. 可以采用`arguments[索引]`的方式来访问其索引中存储的值

6. 使用`typeof`时返回的是`object`,**说明是一个对象**

7. 箭头函数中没有`arguments`，如果使用会直接报错

- 扩展小知识

  - `arguments`有一个属性叫做`callee`，他可以以返回当前函数的代码块，还有一个是`caller`,`caller`在使用前需要加上`callee`,正确的格式是`arguments.callee.caller`,如果直接使用`caller`则会返回`undefined`。他可以返回函数的执行的区域（也就是宿主环境，如果是在 window 下执行的则返回 null。**慎用，已经被标准所弃用**

**可以使用`Array.from(arguments)`将其转换成真正的数组**

### 函数的三种角色身份

函数在 js 中真的是一个神奇的存在，在 js 中他是一等公民，同时他还"身兼多职"。

1. 我们书写一个函数直接调用那么这个函数就是一个普通的函数

2. 函数也是对象，当我们给直接给函数添加一些属性或者方法时，这个函数就可以当作是一个普通对象，同时对象拥有的操作也同样具有

3. 每个函数都有一个原型，并拥有一些公共的属性或者方法供它下面的实例使用，但是函数却不能直接使用这些方法，但是它下面的实例却可以直接使用，这里的函数就是类

【 **函数的这三种关系并没有必然的练习，主要取决于我们怎么去使用** 】

### 构造函数（constructor）

- 构造函数和普通函数的书写语法一模一样，为了和普通函数区分开，我们创建构造函数时一般都是使用大驼峰命名法来命名（每个单词的首字母都大写）。
- 当一个函数使用`new`关键字创建了一个实例的话，那么这个函数就可以称为构造函数，此时的函数名称为**类名**,而接收构造函数返回的变量时当前类的**实列**
- 在我们平时的开发当中一般很少直接书写构造函数，构造函数一般用于组件,框架,插件,类库的封装。
- 构造函数也叫做**对象构造器函数**

```javascript
function Test() {
  //....
}
var obj = new Test();
//上面的代码中我们就创建了一个简单的构造函数，Test就是我们创建的自定义类，而obj就是Test这个类的实例
```

### 创建值的两种方式

> 在 js 中创建值有两种方式:
>
> 1. 字面量方式
> 2. 构造函数方式

**引用数据类型的区别.**

```javascript
var obj = {}; //=>字面量的方式创建对象
var obj = new Object(); //=>构造函数创建对象
```

- 上面代码中都是创建一个对象，只是创建的方式不一样，第一种时通过字面量的方式创建，我们可以直接在{}内书写代码，示例：`var obj = {name :'平野绫',age:18}`。我们还称这种为**单例设计模式**，即每一个都是一个单独的实例，创建多个时，每个实例之间的都是相互独立，互不干扰！

- 第二种通过**构造函数**的方式创建的，但是它不能直接在()内书写代码，必须使用`.`或者`[]`给对像添加属性。示例：`var obj = new Object();obj.name='平野绫';obj.age=18;`。这两种创建方式除了语法上的区别，并没有什么特殊点

**基本类型的区别.**

js 中基本数据类型也可以通过这两种方式来创建数据，但是两种方式创建的数据是有区别的

```javascript
var num = 12; //=>字面量方式
var num2 = new Number(12); //=>构造函数方式
typeof num; //=>'number';
typeof num2; //=>'object';
```

通过上面的代码我们可以明显的看出即使值都为数字，但是数据类型却大不一样

> 通过字面量方式创建的数据类型为`number`，而通过构造函数方式创建的则是`object`，虽然这两种数据类型不一样，但是都可以使用`number`这个类的属性和方法。

### 构造函数的运行机制

> 构造函数的运行一共发生了一下几个步骤：

1. 创建私有作用域
2. 形参赋值，变量提升
3. 在代码执行之前创建一个新的堆内存，存储一个对象，this 指向该堆内存
4. 执行代码，同时遇到 this 关键字时就在新创建的堆内存内存储相应的键值对
5. 返回 this

```javascript
function Proson(name, age, sex) {
  var n = 10;
  this.name = name;
  this.age = n + age;
  this.sex = sex;
}
var obj = new Person("平野绫", 18, "20");
//我们可以通过下面的一张图详细了解构造函数的运行机制
```

[![nc5GLV.png](https://s2.ax1x.com/2019/09/15/nc5GLV.png)](https://imgchr.com/i/nc5GLV)

### 构造函数中的小细节

> 当我们创建一个当前类的实例时，实例只能拥有 this 的属性，如果构造函数内部的变量并没有个 this 关联，那么它只是一个单纯的私有变量，我们创建的实例不用于也无法访问这个变量。

```javascript
function Person(name, age) {
  var n = 10;
  this.name = name;
  this.age = age + n;
}
var person = new Person("平野绫", 18);
console.log(person.name); //=>'平野绫'
console.log(person.n); //=>undefined
//我们拥有并且可以访问和this相关联的变量，当前的n只是一个私有变量
//和我们创建的实例没有任何关系，因为他没有和this进行关联
```

> 普通函数拥有`return`方法，可以返回任意我们需要的数据，在构造函数中也拥有这个方法，只是在构造函数中我们无法返回基本数据类型，如果我们返回的是一个基本数据类型的话，浏览器会自动忽略掉所返回的数据，只会结束当前的构造函数执行，如果我们返回的是一个引用数据类型的话那么我们返回的时什么，外面接收的就是什么，此时的 this 就和外面接收返回值的变量没有关系，

```javascript
function Test(a, b, c) {
  this.a = b + c;
  this.b = a + c;
  return 123;
  //当我们使用return返回一个基本数据类型时，浏览器并不会给我们返回相应的值
  //我们书写return返回一个基本数据类型时。其实就相当于只书写了一个return结束函数
  this.c = a + b;
}
var result = new Test(10, 20, 30);
console.log(result.c); //=>undefined
console.log(result); //=>{a:50,b:40}
//在c和实例关联之前，构造函数就已经结束运行了

function Test(a, b, c) {
  this.a = b + c;
  this.b = a + c;
  return [];
  //当返回一个引用数据类型时，返回的是什么外面接收到的就是什么
  //此时的this就和外面接受的变量没有关系了
  this.c = a + b;
}
var result = new Test(10, 20, 30);
console.log(result.c); //=>undefined
console.log(result); //=>[];
```

### ES6 箭头函数

语法：let 函数名=(形参)=>{函数主体}

```javascript
//=>箭头函数的基本写法
let fn = (x, y) => {
  return x + y;
};
fn(10, 20);

//=>如果只有一个形参可以直接省略小括号的书写
let fn = x => {
  let y = 20;
  return x + y;
};
fn(10);

//=>如果函数内的代码是直接return语句，我们可以直接省略{}和return的书写
let fn = (x, y) => x + y;
fn(10, 20);

let fn = x => y => x + y;
//=>转换成普通函数的书写
let fn = function(x) {
  return function(y) {
    return x + y;
  };
};
```

### 箭头函数和普通函数的区别

**`arguments`**

在箭头函数中没有`arguments`,不过我们可以使用剩余运算符替代

```javascript
let fn = () => {
  console.log(arguments);
  //=>报错：ReferenceError: arguments is not defined
};
fn(10, 20, 30);

//=>剩余运算符替代
let fn = (...arr) => {
  console.log(arr);
  //=>10,20,30
  //=>相对于arguments，剩余运算符的结果是一个真正的数组，可以直接使用数组的方法，
};
fn(10, 20, 30);
```

**`this`**

在箭头函数中不存在`this`，箭头函数中所使用的`this`都是其执行上下文中的

```javascript
let obj = {
  fn: (function() {
    return function() {
      console.log(this);
      //=>this:obj
    };
  })()
};
obj.fn();

//=>箭头函数的基本写法
let obj = {
  fn: () => {
    console.log(this);
    //=>this:window
  }
};
obj.fn();
//=>箭头函数中的this使用的都是上下文中的this，因为箭头函数并没有执行主体
```

### 回调函数

把一个函数作为实参传递给另外一个函数,就叫做回调函数,

```javascript
function test(fn) {
  fn("123");
}
function test2(str) {
  console.log(str);
  //=>'123'
}
test(test2);
```

重写数组中`forEach`方法

```javascript
let each = function(obj, callback) {
  let flag = Array.isArray(obj);
  //=>验证传递的是不是数组
  if (flag) {
    for (let i = 0, len = obj.length; i < len; i++) {
      let item = obj[i];
      let result = callback && callback.call(item, item, i);
      /**
       * 执行回调函数，并将this修改为数组中的每一项
       * 同时将数组项以及数组索引传递给回调函数
       * 同时回调函数支持返回值，我们可以做条件判断
       * 在满足一定条件的时候就可以停止遍历
       * js默认的forEach不支持终止遍历
       */
      if (result === false) {
        break;
      }
    }
  } else {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let result = callback && callback.call(key, key, obj[key]);
        if (result === false) {
          break;
        }
      }
    }
  }
};
let arr = [10, 20, 30, 40, 50];
each(arr, function(item, index) {
  console.log(item, index);
});
```

## 算法

## 作用域

在 ES5 中分为全局作用域和局部作用域。全局作用域指的是`window`所创建的栈内存，局部作用域指的是函数执行时所产生的局部作用域。在 ES6 中有了块级作用域，即大部分的{}都会产生一个块级作用域。**对象无法产生作用域**

1. 全局作用域：

   > 页面在一开始加载的时候就会产生全局作用域。只有关闭页面或者时刷新页面时才会销毁

2. 局部作用域：

   > 函数在执行的时候会产生一个新的局部作用域来执行函数内的代码，函数执行完毕之后就会销毁当前的作用域，函数的每一次执行都会产生一个全新的作用域，每次产生的作用域都是一个完全独立的内存空间

3. 块级作用域：

   > 块级作用域时 ES6 的规则，类似于函数的局部作用域，大部分的时候当代码中出现{}就会产生一个块级作用域，但是创建对象时候所使用的{}并不会产生块级作用域，因为他只是一个对象的书写形式，判断语句和循环语句中的{}则会产生块级作用域

### 作用域链

> 在函数执行创建时就会产生一个作用域链，作用域链是一个不可操作的类数组对象，函数创建的时候会在作用域链索引 0 的位置上和`window`全局作用域相关联，
>
> ![nymQLq.png](https://s2.ax1x.com/2019/09/14/nymQLq.png)
>
> 当函数执行的时候会自动将自身的作用域放在索引 0 的位置上，会将其他的依次向下位移一个索引，在查找一个数据时会按照作用域链优先查找索引 0 上的作用域，如果没有则依次向下查找，函数在执行完毕之后会销毁自身的作用域，作用域链会回到创建时的状态
>
> ![nym3wV.png](https://s2.ax1x.com/2019/09/14/nym3wV.png)
>
> 如果在函数内部创建了一个函数，那么这个函数创建的时候作用域链就会和他的上一级函数相关链，此时索引 0 的位置上存放的是他上一级的作用域， window 全局作用域在作用域链中始终处于最底部，**函数的作用域链在创建的时候就已经决定好了。和函数的运行位置没有任何关系** >
>
> ![nyuF58.png](https://s2.ax1x.com/2019/09/14/nyuF58.png)

**特殊.**

```javascript
let a = 10,
  b = 20;
function A(a) {
  A = function(b) {
    console.log(a + --b);
    //=>第二次执行输出11
  };
  console.log(++a);
  //=>第一次执行输出 6
}
A(5);
A(6);
/**
 * 函数A第一次执行的时候重新指向了自己堆内存的空间
 * 但是并不会销毁原有的作用域,回作为自己的上级作用域
 * 所以第二次执行的时候会执行重定向后的A
 * a+(--b)重定向后的A并没有a这个属性
 * 通过作用域链向上一级查找,会找到自己原有
 * 作用域中的a
 */
```

---

## 闭包

闭包是一种现象，在代码执行的时候产生一个不销毁的私有作用域（栈内存）就叫做闭包，闭包可以保护其内部的变量不受外部污染，还可以保存内部的值，方便我们以后调用，

在定时器、事件监听器、 Ajax 请求、跨窗口通信、Web Workers 或者任何其他的异步（或者同步）任务中，只要使 用了回调函数，实际上就是在使用闭包！

当一个函数不是在自己定义的作用于中执行,通常就会形成一个闭包,比如在一个函数内部定义了另外的一个函数,并且将这个函数返回到另外的作用域中,在别的作用域中执行通常就会产生闭包

```javascript
function test() {
  let a="one";
  function test2() {
    console.log(a);
  }
  return test2;
}
let fn = test();
fn();
// ==>"one"

/**
 * 这就是一个简单的闭包,
 * test2定义在test的作用域中,
 * 但是test2所绑定的这个函数则被return
 * 到外部,并且被另外一个名称绑定并且执行
 * 所以这个函数的执行环境就是在全局作用域中
 * 但是这个函数仍然关联着test这个函数的作用域
 */
```

- 过多的使用闭包会造成性能上的缺失，因为会造成过多的栈内存无法被释放，因此我们在开发中应该尽量避免使用闭包。

- 过多的使用全局变量会造成**全局变量污染**，因此有时候我们可以将一些功能封装在闭包当中，使其变成私有变量，减少全局变量的污染。

- 其实在下面这张图中我们也使用了闭包，因为函数 B 的始终指向函数 A 的作用域，因此函数 A 的作用域无法被销毁，其中的数据也会被保存起来，
  > ![nyuF58.png](https://s2.ax1x.com/2019/09/14/nyuF58.png)

### 闭包小应用

```javascript
//假如我们的页面中有若干个li，我们需要给每一个li绑定点击事件
//点击的时候显示出每个li的文本

//获取li的集合（类数组）
var li = document.getElementsByTagName("li");
//循环li类数组获取到每一个li
for (var i = 0; i < li.length; i++) {
  //使用闭包个每个li绑定点击事件
  li[i].onclick = (function(j) {
    return function() {
      console.log(li[j].innerHTML);
    };
  })(i);
}
/**
 * 立即执行函数会在执行完毕之后立即销毁自身的作用域
 * 但是如果这个作用域被其他的函数所占用，则不会销毁
 * 没循环一次我们都将当前i的值传递给立即执行函数
 * 由于立即执行函数内返回了一个新的函数供外部调取使用
 * 因此立即函数的作用域并不会被销毁，而是会保存起来
 * 每一次立即函数的执行产生的作用域都是完全独立不相等的
 * 传递的i也会被不同的作用域保存起来，但是每个i的值并不一样
 * 立即执行函数内返回的新函数会和当前的点击事件绑定
 * 因为每一次点击都是执行不同的内存空间
 */

//利用闭包实现的另一种方法
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  (function(j) {
    li[i].onclick = function() {
      console.log(li[j].innerHTML);
    };
  })(i);
}

//上面也是使用闭包产生若干个不同的不销毁的堆内存，
var li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].onclick = function() {
    console.log(li[i].innerHTML);
  };
}
//上面这种方式和第一种类似，在ES6中使用循环体的{}会产生块级作用域
//循环体执行了几次，就产生了几个块级作用域，每个块级作用域中存储的i的值也不一样
//同样也是给不同的li绑定不同的堆内存地址，

var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    console.log(this.innerHTML);
  });
}
//由于this在事件当中给谁绑定的this就是谁，所以我们通过this也可以完成操作
//而且this也不会创建多余的堆内存。更加的节省性能，
```

---

## `this`

this 是 js 中最为简单也是最为复杂的一个，它可以根据不同的使用场景变成不同的样子

1.如果我们创建一个函数，并且函数内部使用了 this，那么 this 的归属权就取决于谁在使用这个函数

> 如果是直接调用函数那么 this 就是 window 全局对象如果把函数赋值给一个对象，使用对象调用，那么 this 就是调用它的对象

```javascript
function test() {
  console.log(this); //=>window
}
test(); //=>直接调用this就是window全局对象

function test() {
  console.log(this);
}
var obj = { a: test }; //=>将函数的内存地址赋值给obj的属性a
obj.a(); //=>Object  调用这个函数的对象本身
```

2.在事件绑定中，我们把这个事件绑定给谁，那么其中的 this 就是谁

```javascript
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  var item = li[i];
  item.onclick = function() {
    console.log(this.innerHTML);
  };
}
console.log(li);
//=>假设我们有若干个li标签，那么上面的代码可以在控制台打印出我们
//当前我们在点击哪一个li
//因此我们可以得出在事件中，给谁绑定的事件那么this就是谁
```

3.在立即执行函数中 this 只能是 window 全局对象

```javascript
(function() {
  console.log(this); //=>window
})();
//=>在立即执行函数中this是window
```

4.在构造函数中 this 时创建类的实例

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person = new Person("平野绫", 18);
var person1 = new Person("钉宫", 20);
//我们通过上面的代码分别创建了两个不同的实例，
//当我们每一次创建的时候this就指向当前类的一个实例
```

5.箭头函数中没有`this`，使用`this`其实使用的是执行上下文中的`this`

```javascript
let obj = {
  fn: (function() {
    return () => {
      console.log(this);
    };
    //=>this:window
  })()
};
obj.fn();
//=>如果是普通的函数，那么我们打印的就是obj
//=>但是箭头函数中没有this，this取决于箭头函数的执行上下文
```

6.实例方法中的回调函数也指向 window

```javascript
var arr = [10, 20, 30];
arr.forEach(function() {
  console.log(this);
  //=>this ==>window
});
//=>回调函数的this也会指向window
```

7.小括号表达式会改变`this`的指向

```javascript
function fn() {
  console.log(this);
}
let obj = {
  fn: fn
};
obj.fn();
//=>this  =>obj
12, obj.fn();
//=>this ==>obj
(12, obj.fn)();
//=>不会报错，而且this也会指向window
```

8.定时器中的`this`

### 强制改变 this 指向

改变 this 的方法都是通过原型链的查找机制，使用的是 `Function.prototype` 上面的方法,他们的功能都是相同的。只是存在一些细微的区别

- 在非严格模式中强制改变`this`指向的时候，如果将其指向为`undefined`和`null`或者不传递指定的参数，都会自动指向`window`。

- 在严格模式中`this`永远指向我们传递的参数，包括`undefined`和`null`，如果不传递会自动指向`undefined`。

#### `call`

语法：函数.call(param,arg1,arg2,...)

- 第一个参数是绑定`this`的对象，其余是传递函数所需要的实参

```javascript
function test() {
  console.log(this.name);
}
var obj = { name: "绫" };
test();
//=>window.name

test.call(obj);
//=>obj.name

test.call();
//=>window.name

test.call(undefined);
//=>window.name

test.call(null);
//=>window.name

test.call();

//严格模式
("use strict");

function test() {
  console.log(this.name);
}
var obj = { name: "绫" };
test();
//=>undefined.name  报错

test.call(obj);
//=>obj.name

test.call();
//=>undefined.name  报错

test.call(undefined);
//=>undefined.name 报错
test.call(null);
//=>null.name 报错

test.call();
//=>undefined.name 报错
```

#### `apply`

语法:函数.apply(param,[arg1,arg2,...])

`apply`和`call`语法区别在于`call`是逐一传递参数，`apply`是将需要传递的参数放入一个数组或类数组中。

**`apply`小应用**

```javascript
//=>基于apply我们可以快速获取一个数组中的最大值
var arr = [10, 20, 30, 5412, 2, 12, 46, 31];
var max = Math.max.apply(null, arr);
//=>根据apply传参的机制，我们可以直接使用Math.max获取数组中的最大值，
//=>获取最小值也是同理

//=>ES6中有着更加简单的方法获取

var max = Math.max(...arr);
//=>展开运算符:...
//=>将arr数组解析后依次传入
```

#### `bind`

`bind`是预处理`this`的指向,并不会执行执行当前的函数,而是会改变下一次函数执行时`this`的指向,每一次预处理都会返回一个全新的函数,执行的时候执行的也是预处理后返回的新函数,同一个函数多次预处理`this`返回的都是独立的新函数,`bind`预处理`this`返回的函数都不相同

```javascript
let box = document.querySelector(".box");
function test() {
  console.log(1);
}
test.bind(box);
//=>预处理完成之后并不会执行这个函数

test.bind(box) == test.bind(box);
//=>false  每次返回的都是不同的函数
```

**`bind`机制**

```javascript
function test() {
  console.log(this);
}
Function.prototype.bind = function(context, ...arr) {
  //=>bind本身的this指向它的调用者   this ==>调用者
  let _this = this;

  //=>返回的这个匿名函数会赋值给外面的接收者,接收者可以传递参数
  return function(...innerArr) {
    //=>innerArr的值取决于bind返回的这个匿名函数是否有接收到值
    _this.apply(context, ...arr.concat(innerArr));
    /**
     * 在bind内部返回的这个匿名函数中,会基于apple()这个方法
     * 将函数中的this指向传递的第一个参数,同时将其他的参数依次传递
     * 在传递的时候通过concat()这个方法将匿名函数接收到的值拼接到
     * 参数中的最后一位,如果匿名函数没有接收到任何值,那么也只会拼接空的字符串
     * 并不会对参数有任何影响
     */
  };
};
```

### 练习题

```javascript
function fn1() {
  console.log(1);
}
function fn2() {
  console.log(2);
}
fn1.call(fn2);
fn1.call.call(fn2);
Function.prototype.call(fn1);
Function.prototype.call.call(fn1);
```

> **`call`的性能要稍好于`apply`,如果不书写第一个参数，则默认是`window`，传递的是`undefined`和`null`也会指向`window`**

强制改变`this`的指向，有时可以让类数组借用数组中的一些方法

```javascript
function test() {
  var arr = [].slice.call(arguments);
  //=>类数组是无法直接使用数组中的方法，因为他不是一个数组，而是一个对象
  //=>根据原型链的机制，类数组无法找到数组中的方法，
  //=>因为类数组是一个对象，它的__proto__指向的是Object的原型，
  //=>我们上面的代码表示的是通过一个空数组首先找到slice方法
  //=>然后通过强制改变方法中this的指向，以达到我们借用其方法的目的。
  console.log(arr);
  //=>(10, 20, 30, 40, 50, 60)

  console.log(arr.__proto__);
  //=>slice拥有浅克隆数组的功能，返回的是一个真正的数组，因为他的__proto__指向的是Array
}
test(10, 20, 30, 40, 50, 60);
//=>我们可以通过类似的做法，借用许多数组中的方法

function test() {
  //=>我们也可以直接改变Array原型中数组方法的this指向
  var arr = Array.prototype.sort.call(arguments, function(a, b) {
    return a - b;
  });
  console.log(arr);
}
test(12, 2, 5, 238, 2, 4821);
```

## 原型（prototype）

1. 每一个函数在出生时都有一个属性`prototype`,它是一个对象，浏览器会自动为它创建一个堆内存，

2. 函数的`prototype`属性天生就拥有一个属性`constructor`,它存储的值就是当前函数本身

3. 所有的对象都拥有一个属性`__proto__`,他指向当前这个对象的所属类，如果它的所属类不明确，那么它就是指向`Object.prototype`。

我们应该着重注意`__proto__`的使用，因为 IE 屏蔽了它，禁止我们操作和使用。

```javascript
function Person(name) {
  this.name = name;
}

var person = new Person("绫"); //person是Person这个类的实例

//既然person是Person的实例，那么person的隐式原型就应该指向
//person的原型，那么下面的代码就应该返回true
console.log(person.__proto__ === Person.prototype); //=>true

//我们可以根据下面的一张图更加清晰的了解执行的步骤
```

![nhQuW9.png](https://s2.ax1x.com/2019/09/16/nhQuW9.png)

当我们访问一个实例的属性是会优先寻找自身有没有这个属性，如果有则直接返回，没有的话则是去原型中寻找，找到则直接返回，我们拿数组对象举一个例子，我们自己创建的数组中并没有`pop`,`splice`,`sort`等等这一系列的方法，但是我们却可以直接使用，因为我们使用的都是原型中的一些方法，如果是原型中的属性或者方法，我们只能使用，并不能修改或者删除，我们又是也可以创建一个同名的属性来遮蔽原型中的属性，这样的话就只能访问自身拥有的这个属性，并不会去原型中查找

![nhDpHe.png](https://s2.ax1x.com/2019/09/16/nhDpHe.png)

我们可以根据这个机制将一些实例共有的属性或者方法添加到构造他们的类的原型中，这样可以减少代码的耦合。使用起来也很方便。

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sex = "女";
var person = new Person("绫");
var person2 = new Person("钉");
console.log(person.name, person.sex); //=>'绫' '女'
console.log(person2.name, person2.sex); //=>'钉' '女'
//当我们给Person的原型中添加一个属性时，他的实例便都拥有这个属性，
//如果实例中的属性和原型中的属性重名时，只会使用自身的，
//实例无法修改原型中的所有属性，person.sex='男';只是给自身添加一个属性，
//或者是自身属性的再赋值，和原型中的属性没有任何关系
```

构造函数的原型也是一个对象，只要是对象就会拥有`__proto__`属性，但是原型不清楚自己的所属类是谁，那么它的`__proto__`就会指向`Object`的原型，`Object`也拥有原型，但是`Object`原型的`__proto__`指向的是`null`;

![nOKH6f.png](https://s2.ax1x.com/2019/09/19/nOKH6f.png)

原型链全貌

所有的函数永远都是内置`Function`的一个实例，而`Object`的原型则是原型链的最顶端，他所拥有的方法和属性可以供所有的函数或者对象使用

![nxO40K.png](https://s2.ax1x.com/2019/09/21/nxO40K.png)

### 原型重定向

> 在实际的开发（构造原型设计模式）当中允许我们修改一些类的原型指向！但是更改原型指向的一系列问题应该在开发中着重注意

1. 原型指向被更改后，原有的`constructor`会指向`Object`，因为他是存储在原型中的，原型指向改变，原有的原型中的一系列方法和属性都无法再使用，会触发浏览器的垃圾回收机制，自动被浏览器销毁其堆内存，释放空间，

```javascript
function Fn() {
  var n = 10;
  this.m = 20;
  this.aa = function() {
    console.log(this.m);
  };
}
//new实例的时候Fn的原型并没有改变
//当前实例的__proto__仍然指向Fn先前的原型
//在后面的代码中仍然可以使用先前原型中的所有属性和方法
//因为当前的实例指向先前的原型，那么就不会触发浏览器的垃圾回收机制
//重定向原型之前创建的实例无法访问重定之后的属性和方法
var f1 = new Fn();
Fn.prototype = {
  aa: function() {
    console.log(this.m + 10);
  }
};
//此时Fn的原型已经被手动重定向了
//重定向原型之后再次new实例的话，这个实例就只能使用之后新指向的原型
//无法使用先前原型中所有的属性和方法，
//如果不设置constructor，默认会访问到Object的原型
var f2 = new Fn();
```

**手动设计`constructor`的指向**

当我们重定向原型之后，也可以重新设置`constructor`的属性

```javascript
function Test(){
  this.a = 100;
};
Test.prototype={
  constructor:Test;//设置constructor的指向，让其指向当前的构造函数
  this.b=200;
}

```

> 一般只有需要大量向原型中添加一些属性或者方法的时候，才会改变其原型的指向

**由于浏览器的保护机制！默认类的原型无法被改变.**

```javascript

Array.prototype={};
//即使我们改变默认类的原型，但是依然不会生效


function Test() {
  //...
}
//需要大量添加一些属性和方法的时候可以直接重定向原型，
Test.prototype = function() {
  //...大量的属性和方法
};

//如果只是添加个别属性或者方法的话，可以直接添加到原型中，没必要重定向原型
Test.prototype.a = function() {
  //...   只是简单的添加一些属性或者方法的时候可以使用这个方法
};

//也可以把一些属性和方法放进一个对象中，一起添加进原型中，但是使用的时候会比较麻烦
var aa = {
  bb:function(){};
  //...  属性或者方法
};

Test.prototype.bb = aa;
//按照上面设置之后我们只能[实例].[对象].[属性名]这样访问
var f = new Test();
f.aa.bb()
```

### hasOwnProperty

`hasOwnProperty`可以验证一个属性或者方法是否是为自身拥有，他不会去原型链中寻找

```javascript
function Person(name) {
  this.name = name;
}
Person.prototype.sex = "女";
var person = new Person("绫");
var person2 = new Person("钉");
console.log(person.name, person.sex); //=>'绫' '女'
console.log(person2.name, person2.sex); //=>'钉' '女'
console.log(person.hasOwnProperty("sex")); //=>false
console.log(person.hasOwnProperty("name")); //=>true
//当可以使用一个自身不拥有的属性或者是方法时，
//那么这些属性或者方法就一定存在有原型找中
```

### 归总练习题

```javascript
function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function() {
    console.log(this.x);
  };
}
Fn.prototype.getX = function() {
  console.log(this.x);
};
Fn.prototype.getY = function() {
  console.log(this.y);
};
var f1 = new Fn();
var f2 = new Fn();
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();
```

---

```javascript
function Foo() {
  getName = function() {
    console.log(1);
  };
  return this;
}
Foo.getName = function() {
  console.log(2);
};
Foo.prototype.getName = function() {
  console.log(3);
};
var getName = function() {
  console.log(4);
};

function getName() {
  console.log(5);
}
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

---

```javascript
function Fn() {
  var n = 10;
  this.m = 20;
  this.aa = function() {
    console.log(this.m);
  };
}
Fn.prototype.bb = function() {
  console.log(this.n);
};
var f1 = new Fn();
Fn.prototype = {
  aa: function() {
    console.log(this.m + 10);
  }
};
var f2 = new Fn();
console.log(f1.constructor);
console.log(f2.constructor);
f1.bb();
f1.aa();
f2.bb();
f2.aa();
f2.__proto__.aa();
```

### 内置类原型扩展

- 我们可以在基本类的原型中添加一些公共的方法，这样的话我们基于基本类所创造的所有实例都可以直接使用这些方法。

- 我们自己添加的方法不应该和原型中已经存在方法重名，因为这样的话会覆盖掉原型中原有的方法,所以我们应该在方法名中添加一些我们自己的标识，以便于更好的和原有的方法区分开。

```javascript
//我们就拿数组去重来做一个简单的示例
var arr = [1, 2, 3, 1, 2, 1, 1, 2, 3, 2, 1, 2, 2];
//直接将数组去重的方法添加进原型中。因为数组是基于Array所创造的实例,所以我们需要在Array的原型中添加
Array.prototype.myNoRepeat = function myNoRepeat() {
  //此处函数的名字并没有实际的意义，他只是为了让我门创造的
  //方法看起来和内置的更加接近而已
  var obj = {};
  //this代表当前调用这个方法的数组
  for (var i = 0; i < this.length; i++) {
    var item = this[i];

    obj.hasOwnProperty(item)
      ? ((this[i] = this[this.length - 1]), this.length--, i--)
      : (obj[item] = item);
    //并不建议使用三元表达式来计算结果，
    //因为这样看起来有点过于复杂了
    //并不利于我们阅读代码
  }
  obj = null;
  //可以提前将我们创建的对象所占用的堆内存释放，
  //稍微有利于性能，虽然并不明显

  return this;
  //为了我们以后能够衔接使用链式方法
  //此处应该将操作的对象返回。
};
```

> 这里讲一下上面代码中的一些优缺点吧

【 **优点** 】

1. 如果我们使用双重`for`来对数组进行去重，这样的操作会更加消耗我们的性能，因为这种方法是把数组中的每一项都拿出来和其它项进行对比，当我们数组元素越多时对性能的影响也就越大，我们上面的代码利用了对象属性名的机制，只要发现属性名重复我们就把当前数组的元素和最后一项进行调换，然后将最后一项删除，这样不仅节省了性能，同时也避免了数组的塌陷问题（数组元素位置会发生改变）。

2. 我们在代码最后将我们创建的一个对象所占用的堆内存空间释放掉了。虽然这个性能提升微乎其微，但我们仍不应该忽略掉，同时也可以让我们的代码形成良好的规范。

---

【 **缺点** 】

1. 代码中的 this 只有当我们直接使用数组对象调用时才会正确的指向我们希望操作的对象，`arr.__proto__.myNoRepeat()`,这样子调用时 this 的指向就会出现错误，而且在 IE 中并不支持我们使用`__proto__`,因此代码也会报错！`Array.prototype.myNoRepeat()`这样也会使 this 指向错误，虽然我们几乎不会使用这些方法调用，但是仍应注意

2. 在我们借助了数组中元素的索引来完成了我们的需求，虽然这样会帮助我们节省性能，但是也会造成数组中元素的顺序发生改变。

如果我们不希望改变数组元素的顺序，我们可以使用这面这种写法

```javascript
var arr = [1, 2, 3, 1, 2, 1, 1, 2, 3, 2, 1, 2, 2];
Array.prototype.myNoRepeat = function myNoRepeat() {
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (obj[item]) {
      .splice(i, 1);
      i--;
      continue;
    }
    obj[item] = item;
  }
  obj = null;
  return arr;
};
//这样虽然不会对数组中元素的顺序造成影响
//但是会造成数组塌陷的问题，对性能会有影响，
```

数组塌陷：当我们删除数组中的某一项时，这个数组元素所有所有的元素都会向前进一步，如果数组中的元素比较多时，会对性能造成影响

---

## ES6 新语法

### 解构赋值

按照一个数据值的结构，快速获取解析其中的内容

语法:let 赋值 = 结构

左右两边的数据结构需要是一致的，如果是数组的话需要两边都以数组的结构出现。`let [] = 数组`。对象也是同理,如果使用剩余运算符，返回和右边同样的数据结构

**数组解构赋值.**

```javascript
let arr = [10, 20, 50];

let [a, b, c] = arr;
//=>这中写法等价于
let a = arr[0],
  b = arr[1],
  c = arr[2];

let [a, ...b] = arr;
console.log(a);
//=>10
console.log(b);
//=>[20,30]
//=>...b表示的是除了前面接收的以外，其他的剩余项全部赋值给b

let [a, , b] = arr;
//=>中间使用空格表示不接收赋值
```

如果左边用于赋值的变量多余右边，那么就会赋值`undefined`,再不确定是否有值的情况下可以设置一个默认值

```javascript
let arr = [10, 20, 30];
let [a, b, c, d = 0] = arr;
//=>如果d没有接收到来自右边的赋值。那么就将其赋值为0
//=>如有值供其接收，就会赋值为接收到的值，
//=>我们手动设置的只会在没有值接收的情况下才会生效
```

解构赋值可以使我们更加方便快捷的操作数据，如使 a 和 b 两个变量的值交换位置

```javascript
var a = 10;
var b = 20;

//=>非解构赋值可以使用第三个变量作为交换容器使用
var c = a;
a = b;
b = c;

//=>如果使数字的话我们还可以使用相加交换
a = a + b;
b = a - b;
a = a - b;

//=>解构赋值
[b, a] = [a, b];
//=>将a和b两个变量放入一个数组中，
//=>然后使用解构赋值依次交换，更加的简单快捷
```

可以快速将一个类数组转换成真数组

```javascript
let div = document.getElementsByTagName("div");
//=>获取到页面中所有的div标签
div = [...div];
//=>会转换成一个真数组，prototype指向Array
```

**对象解构赋值.**

对象的解构赋值和数组的语法是一样的，只不过我们在左边用于赋值的变量须和右边对象的属性名一致才可以，如果需要不同的名字，可以额外设置

```javascript
let obj = { name: "绫", age: 20, sex: "女" };
let { name, age, sex } = obj;
console.log(name, age, sex);
//=>'绫',18，'女'
//=>解构赋值操作完成之后，我们用于接收的变量和对象的属性就没有任何关系了

obj.name = "钉宫";
console.log(name);
//=>'绫'
console.log(obj.name);
//=>'钉宫'

//=>它们两个任意一个改变都和另外一个没有任何关系
```

我们有时为了防止对象的属性名和全局的变量名冲突，我们还可以自定义用于接收的变量名

```javascript
let obj = { name: "绫", age: 20, sex: "女" };
let { name: nameAA, age: ageAA, sex: sexAA } = obj;
//=>我们可以直接使用  对象属性名:自定义变量名  来自定义用于接收的变量名

//=>结构不出对象内相应的属性名时会被自动赋值为undefined，
//=>我们也可以设置默认的属性

//=>为了预防赋值为undefined，可以先设置默认值
let { name, age, sex, gender = 0 } = obj;
console.log(gender);
//=>0 默认值只会在接收不到解构的值才会生效
```

**`forEach` 解构赋值**

在给`forEach`传递的函数中，可以直接书写解构赋值语法，只是方便些，功能和在函数种解构赋值是一样的

```javascript
let arr = [
  { name: "绫", age: 17 },
  { name: "钉", age: 18 },
  { name: "宫", age: 19 },
  { name: "野", age: 20 }
];

forEach(element => {
  let { name, age } = element;
  //=>可以直接在forEach内遍历解构赋值
  //=>箭头函数中只有一个形参的话可以省略小括号
});

//=>另外一种写法
let str = arr.forEach(({ name, age }) => {
  //=>直接在形参位置解构赋值的话需要使用小括号包裹起来
  //=>之所以能够直接在形参位置解构赋值是因为forEach的机制
  //=>forEach方法的回调函数中第一个参数代表的是数组中的每一项
});
```

**解构赋值小应用.**

```javascript
let value = { name: "xxx", age: 25, score: [12, 23, 34, 45] };
//=>我们需要的形式 a=name,b=score[0],c=score[0]以外的所有的值

let {
  name: a,
  score: [b, ...c]
} = value;
//=>因为obj是对象类型。所以我们左边用于接收的也应该是一个对象数据类型
//=>name:a，表示的是将value内的name属性值重新赋值给我们的自定义变量a
//=>score:[a,...b]:表示将value内的score中的数据重新赋值给我们的一个自定义变量
//=>而我们的自定义变量同样也是解构赋值形式的，
//=>b：表示将第获取score中的第一个值
//=>...c:表示获取b以外的所有值
```

### 模板字符串` ``` `

ES6 中的模板字符串比普通的字符串使用起来要高效许多，尤其是在拼接字符串的时候

```javascript
var str = `102${代码}123`;
//=>模板字符串字符串拼接使用${}，不需要再使用+拼接
```

## 定时器

**定时器都是异步.**

**定时器中的`this`指向有另一个规则.**

### `setTimeout` / `setInterval`

- `setTimeout`根据设置的时长执行一次
- `setInterval`根据设置的时间间隔执行多次

**时间都是按照毫秒.**

```javascript
setTimeout(funciton(){
 console.log(123);
 //=>在1秒钟之后执行
},1000);

setInterval(function(){
 consoel.log(123)
 //=>每间隔1秒钟执行一次
},1000)

```

### 返回值

定时器的返回值是一个正整数,返回值从数字 1 开始一次累加,无论是`setTimerout`还是`setInterval`共用一个编号池,因此增加任意一种的定时器都会使返回值自动累加 1

```javascript
 let timer=setTimerout(function(){
  consoel.log(timer)
  //=>序号  1
 },1000);

 let timer2=setInterval(funciton(){
  console.log(timer2)
  //=>序号  2
 },1000);

 let timer3=setInterval(function(){
  console.log(timer3)
  //=>序号  3
 },1000)

 //=>每设置一个定时器都会累加1,不论是那种定时器
```

**定时器中的`this`**

> 直接书写在定时器中的代码会让代码中的`this`指向`window`,如果是在严格模式下则会指向`undefined`,如果传递的是一个回调函数,即使是在严格模式下,`this`也会指向`window`

```javascript
let myArray = ["zero", "one", "two"];

myArray.myMethod = function(str) {
  console.log(arguments.length > 0 ? this[str] : this);
};
//==> 直接调用
myArray.myMethod();
// ==>["zero","one","two"];
myArray.myMethod(1);
//==>"one"

// ==>定时器调用
setTimeout(myArray.myMethod, 1000);
// ==>window
setTimeout(myArray.myMethod, 1000, 1);
//==>undefined
```

**改变定时器中的`this`**

- 使用包装函数,

```javascript
let myArray = ["zero", "one", "two"];

myArray.myMethod = function(str) {
  console.log(arguments.length > 0 ? this[str] : this);
};

setTimeout(function() {
  myArray.myMethod();
}, 1000);
//=>["zero","one","two"]

// ==>使用箭头函数也可以

setTimeout(() => {
  myArray.myMethod(2);
}, 1000);
//==>"two"
```

- 使用 `bind` 预处理`this`

```javascript
let myArray = ["zero", "one", "two"];

myArray.myMethod = function(str) {
  console.log(arguments.length > 0 ? this[str] : this);
}.bind(myArray);

setTimeout(myArray.myMethod, 1000);
```

### `clearTimeout` / `clearInterval`

根据定时器的返回值清除定时器的两种方法,`clearTimeout`和`clearInterval`都可以清除`setTimerout`和`setInterval`这两个定时器,并没有区别,但是为了避免混淆,还是应该正确的使用

```javascript
let timer = setTimerout(function() {
  clearTimerout(timer);
  clearInterval(timer);
  //=>这两中方法都可以清除定时器
}, 1000);
```

## 同步异步

- 同步:一次只能执行一个任务,当前任务结束之后才会执行下一个任务
- 异步:可以同时执行多个任务,当前任务没有完成也会执行下一个任务

浏览器是多进程的,而 js 是单线程的,每次只能执行一个任务,并且当前任务不完成则无法执行下一个任务, js 中之所以存在异步编程,则是通过一些机制伪装的,并不是真正意义上的异步编程.

在浏览器执行 js 代码时分为主任务队列和等待任务队列,当主任务队列完成后,才会执行等待任务队列.

**浏览器执行流程.**

1. 自上而下执行主任务队列中的代码,
2. 碰到异步的任务时将其放入等待任务队列
3. 继续执行其他主任务队列中的任务
4. 主任务队列执行完毕后,去等待任务队列查找满足条件的任务
5. 如果存在多个满足条件的会优先将最先满足的执行
6. 将满足条件的任务拉回到主任务队列执行
7. 执行完毕后继续在等待任务队列查找,将满足条件的任务依次拉入主任务队列执行
8. 只要主任务队列的任务没有完成,无论等待任务中的条件是否满足,都不会执行,

```javascript
setTimeout(() => {
  console.log(1);
}, 20);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 10);
setTimeout(() => {
  console.log(4);
}, 100);
for (let i = 0; i < 90000000; i++) {}
console.log(5);

/**
 * 执行流程
 * 1.自上而下执行代码
 * 2.碰到异步任务,将其放入等待任务队列
 * 3.输出语句:2
 * 4.碰到异步任务,将其放入等待任务队列
 * 5.碰到异步任务,将其放入等待任务队列
 * 6.执行for循环,执行耗时约100ms
 * 7.输出语句:5
 * 主任务队列执行完毕,去等待任务队列查找满足条件的异步任务,
 * 此时所有的异步任务都已满足执行条件,则将最优先满足的执行
 * 8.将执行等待时间为10ms的定时器拉入主任务队列执行,输出:3
 * 9.执行完当前的定时器后,继续查找满足条件的等待任务
 * 10.将执行等待时间为20ms的定时器拉入主任务队列执行,输出:1
 * 11.重复第9步
 * 12.将等待时间为100ms的定时器拉入主任务队列执行,输出:4
 *
 * 最终的输出结果2 5 3 1 4
 */
```

```javascript
let n = 0;
setTimeout(function() {
  n++;
  console.log(n);
}, 100);
while (1 === 1) {}
/**
 * 定时器中的输出语句永远不会执行
 * 因为whiel是一个死循环,并不会结束运行
 * 主任务不结束,等待任务永远不会执行
 */
```

浏览器只会将最优先满足条件的等待任务执行,等待任务的等待时间并不会完全会影响执行顺序

```javascript
setTimeout(() => {
  console.log(1);
}, 20);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 10);
console.log(4);
for (let i = 0; i < 90000000; i++) {}
console.log(5);
setTimeout(() => {
  console.log(6);
}, 8);
console.log(7);
setTimeout(() => {
  console.log(8);
}, 15);
console.log(9);

/**
 * 如果按照定时器的等耐时间应该是 2 4 5 7 9 6 8 3 1
 * 而结果是:2 4 5 7 9 3 1 6 8,
 * 主任务队列并没有变化,依旧是2 4 5 7 9
 * 之所以定时器会产生变化最主要的原因就是for循环
 * for循环执行完毕后损耗了大量的时间
 * 所以就改变了定时器满足条件的先后顺序
 * 当for循环执行完毕后定时器10ms优先满足条件,其次是20ms
 * 浏览器继续执行主任务队列的任务,碰到定时器后将其放入等待任务队列
 * 在将8ms和15ms的定时器添加进等待任务的时候,10ms和20ms的定时器就已经满足执行条件了
 * 当所有的主任务执行完毕后,开始讲满足条件的等待任务拉入主线程执行
 * 最优先满足的是10ms和20ms分别输出:3  1
 * 执行完毕后才可以执行8ms和15ms,分别输出:6 8
 */
```

## `Promise`

`Promise`是一个对象,主要是管理异步编程,它代表的是一个异步操作的成功或者失败,`Promise`本身是同步的,

语法:

```javascript
let p = new Promise(function(resolve, reject) {
  //=>异步操作
});
```

`Peomise`拥有三个状态

`pending`初始状态,既不代表成功,也不代表失败,会根据异步操作的执行来修改为`fulfilled`或者`rejected`,

`fulfilled`代表操作成功完成

`rejected`代表操作失败

### 参数

在创建`Promise`对象的时候,同时也会创建一个函数,`Promise`在执行的时候回立即执行这个函数,同时将`resolve`和`reject`两个函数作为参数传递给这个函数

**`resolve`**

代表异步操作执行完毕,并且操作成功,就会调用执行`resolve`这个参数,并且会将`Peomise`的状态修改为`fulfilled`,`

**`reject`**

代表的是操作执行完毕,但是操作失败,此时就会调用`reject`这个参数,同时将`Promise`的状态修改为`rejected`,

### 方法

**`then()`**

`then()`会返回一个`Promise`对象,它最多拥有两个参数,分别代表`Promise`状态所执行的回调函数,`fulfilled`状态会执行第一个回调函数,`rejected`状态会执行第二个回调函数,

```javascript
new Promise(function(resolve, rejected) {
  setTimerout(function() {
    resolve(100);
  }, 1000);
}).then(
  function(value) {
    console.log(value);
    //=>100
    /**
     * value接收的就是Peomise执行成功,resolve传递的参数
     *Promise为fulfilled状态时作为回调函数被调用
     *接收的是Promise执行成功resolve函数的返回值
     */
  },
  function(value) {
    /**
     * Promise对为rejected状态时作为回调函数被调用
     * 就收的是Promise执行失败rejected函数的返回值
     * 该返回值返回的是失败的原因
     */
  }
);
```
