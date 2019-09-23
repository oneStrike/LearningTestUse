#

## JS 语言概述

### JS 语言简史

1. JS 语言的起源

网景（Netscape Communications Corporation），1994 年，推出第一款商用浏览器，网景浏览器（Netscape Navigator）

1995 年，网景公司决定在浏览器中加入一门语言，可以作交互效果，提高用户体验。

最终决定独立开发一门新的语言，聘请 Brendan Eich，10 天后，新的语言诞生

LiveScript -> JavaScript (JS)

[ **JS 语言之父：Brendan Eich** ]

2. 第一次浏览器大战

网景公司打算在浏览器中加入网络操作系统，影响到微软的利益，引起了微软的注意

1995 年，微软发布 IE 浏览器。

JS 语言推出之后，网景获得极大的竞争优势。

微软对 JS 语言反编译，借鉴 JS 语言，退出了 JScript、VBScript

第一次浏览器大战是标准之争

1997，网景公司将 javascript1.1 版本提交给 ECMA（欧洲计算机制造协会）

IE3 发布，并绑定 windows 操作系统。

1998 年，网景公司，被收购。

- **ECMA 收录了 JavaScript，并提交给 ISO，经过修改，成为了第一个 JS 的标准版本，成为 ECMAScript，简称 ES**

3. 第二次浏览器大战

IE4、IE5、IE6（windows xp）

微软决定解散浏览器团队。

Brendan Eich，带领团队成立 Mozilla 基金会，并决定，将网景浏览器开源。

长时间内，世界的技术爱好者，对网景浏览器，进行维护和打补丁

2002，Mozilla 推出 firefox 浏览器。

2008，谷歌推出 chrome 浏览器，苹果推出 safari，ASA 公司推出 opera

chrome 浏览器搭载 JS 执行引擎 V8（V8 引擎，可以将 JS 代码直接转换为字节码，理论上，JS 代码的执行速度已经接近汇编语言）

于是，JS 具备了编写大型应用程序的能力，甚至服务器应用

> Ryan Dahl 准备写一个服务器端的框架，直接利用 V8 引擎完成了该框架，该框架，称为 nodejs

【 **V8，将 JS 的执行推向了一个新的台阶** 】

4. ES 标准的发展

ES1，1997 年 ES2，1998 年 ES3，1999 年 ES5，2009 年，习惯上，不再区分 javascript （JS） 和 ECMAScript （ES） ES6，
2015 年，ECMA 宣布，从 ES6 开始，使用年号作为版本号，ES6 的真正称呼为：ES2015 ES7，2016 年，ES2016

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

为啥会出现浏览器兼容： 1.部分浏览器会提前开发一些更好的功能，后期这些功能会被收录到 W3C 规范中，
但是在收录之前，会存在一定的兼容性 2.各个浏览器厂商，为了突出自己的独特性，用其它方法实现了 W3C 规范中的功能 ...

---

## 数据类型

数据值是一门编程语言进行生产的材料，JS 中包含的值有以下这些类型

- 基本数据类型（值类型）

  - 数字 number
  - 字符串 string
  - 布尔 boolean
  - null
  - undefined、

- 引用数据类型
  - 对象 object
    - 普通对象
    - 数组对象
    - 正则对象
    - 日期对象
    - ...
  - 函数 function
- ES6 中新增加的一个特殊的类型：Symbol，唯一的值

-**基本数据类型**-

```javascript
var n = 13;
//=>所有的正负数和小数都属于number类型

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

[ **引用数据类型** ]

```javascript

var o = {name:'珠峰培训',age:9};
//=>普通的对象：由大括号包裹起来，里面包含多组属性名和属性值（包含多组键值对）

var o ={};
//=>书写一个对象，但是没有任何属性和属性值，空对象

var ary = [12,23,34,45];
//=>中括号包裹起来，包含零到多项内容，这种是数组对象
var ary=[];
//=>书写了一个数组，但是没有任何内容，空数组

var reg = /-?(\d|([1-9]\d+))(\.\d+)?/g;
 //=>由元字符组成一个完整的正则  //不是空正则是单行注释

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

[ **所有的输出语句都是 `宿主环境` 提供的** ]

1. alert：在浏览器中通过弹框的方式输出(浏览器提示框)

```javascript
var num=12;
alert(num);
//=> '12'

var str='绫';
alert(str);
//=>字符串 '绫'


alert(1+1); =>'2'
alert(true); =>'true'
alert([12,23]); =>'12,23'
//=>基于alert输出的结果都会转换为字符串：把值(如果是表达式先计算出结果)
//=>通过toString这个方法转换为字符串，然后再输出

alert({name:'xxx'});
//=>'[object Object]'
//=>alert会先使用toString()把数据转换成字符串再输出
//=>当我们自定义一个对象的时候如果不重写toString()
//=>就会直接调用Object上的toString()方法
//=>Object.toString默认输出的格式就是[Object 对象数据类型]
//=>之所以其他的数据可以正常输出是因为
//=>他们所属的类已经重写了toString()方法
```

2. confirm：和 alert 的用法一致，只不过提示的框中有确定和取消两个按钮，所以它是确认提示框

```javascript
var flag = confirm("确定要退出吗?");
if (flag) {
  //=>flag:true 用户点击的是确定按钮
} else {
  //=>flag:false 用户点击的是取消按钮
}
```

3. prompt：在 confirm 的基础上增加输入框

4. console.log：在浏览器控制台输出日志（按 F12(FN+F12)打开浏览器的控制台）

- Elements：当前页面中的元素和样式在这里都可以看到，还可以调节样式修改结构等
- Console：控制台，可以在 JS 代码中通过.log 输出到这里，也可以在这里直接的编写 JS 代码
- Sources：当前网站的源文件都在这里
- ...

- console.dir：比 log 输出的更加详细一些（尤其是输出对象数据值的时候）
- console.table：把一个 JSON 数据按照表格的方式输出
- ... （自己回去扩展更多 console 输出方法）

---

### number 数据类型

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

number 中有一个特殊的"数字"`NaN`(not a number),不是一个合法的有效数字，但它属于 number 类型

### NaN 的比较

[**NaN 和谁都不相等，包括自己**]

```javascript
NaN==NaN：false
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
var num;
//=>此时变量的值浏览器给分配的就是undefined
//=>后面可以赋值也可以不赋值
```

---

### object 对象数据类型

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
//=>[查]
obj.name;
//=>直接使用[对象.属性]名即可
//=>一般来说，对象的属性名都是字符串格式的（属性值不固定，任何格式都可以）
obj["name"];
//=>属性表达式。同样具有读取属性值的功能，某些时候比.使用起来更加的灵活

//=>[增]
obj.sex='女
//=>[对象.属性名=属性值]可以直接给对象添加属性
obj['sex'] = '女'
//=>和上面具有相同的效果

//=>[删] 彻底删除：对象中不存在这个属性了
delete obj['age'];

---

在获取属性值的时候，如果当前对象有这个属性名，则可以正常获取到值（哪怕是 null），但是如果没有这个属性名，则获取的结果是 undefined obj['friends'] =>undefined

```

```javascript
var obj = {};
//=>obj并不算是真正意义上的空对象，它会包含从Object.prototype中继承的属性和方法。
//=>我们一般成为的空对象指的是这个对象没有属性，不考虑它是否有继承而来的属性，
//=>而使用`Object.create(null)`创建的对象是一个真正意义上的空对象，
//=>因为它不包含任何属性，包没有从原型中继承任何属性和方法
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
//=>此处的NAME是一个变量,我们要获取的属性名不叫做NAME，是NAME存储的值'zhufeng'
//=>obj['zhufeng'] =>没有这个属性,属性值是undefined
```

上面代码中'name' 和 name 的区别?

- 'name'是一个字符串值，它代表的是本身
- name 是一个变量，它代表的是本身存储的这个值

但是我们也可以通过变量的方式获取一个对象的属性

```javascript
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
3. 控制语句：能改变语句的执行顺序，包括条件语句和循环语句，当然还有比较特殊的标签语句。
4. 表达式语句：这些语句去掉最后分号，都也可当表达式用的。常见的有：对象操作（new、delete）、函数调用（函数执行，必有返回值）等。

### 操作符和操作数

操作符（Operator）：运算符，参与运算的符号

操作数（Operand）：参与运算的数据，也称之为“元”

操作符不一定只有一个符号

操作符出现在不同的位置，可能具有不同的含义

```javascript
1 - 2;
//=>数学运算

-1.2;
//=>将一个数组变成负数

(1 + 2) * 3;
//=>():先计算()内的1+2；然后再*3

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

【 **%（求余）** 】

`%`指的是一个数除以另一个数，不够除的部分就是余数

```javascript
9 % 4 = 1;
8 % 3 = 2;
2 % 2 = 0;
//=>如果可以除尽，那么余数就为0
2 % 3 = 2;
//=>被除数大于除数的话，结果是除数
```

【 **++/--** 】

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

如果是对象类型的则会有限转换成字符串然后在进行运算

数字 -> 数字字符串 boolean -> boolean 字符串 null -> "null" undefined -> "undefined" 对象 -> "[object Object]"

- 加号两边都没有字符串，但一边有对象，将对象转换为字符串，然后按照上面的规则进行
- 其他情况和上面的数学运算一致

优先级的运算细节：

1. 从左到右依次查看
2. 如果遇到操作数，将数据的值直接取出
3. 如果遇到相邻的两个运算符，并且左边的运算符优先级大于等于右边的运算符，则直接运行左边的运算符。

### 比较运算符

【 **比较运算符的返回类型：boolean** 】

【 **算术运算符的优先级高于比较运算符** 】

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

- `==`和`!=`在比较时会遵循一定的转换规则进行比较，并不会进行数据类型的比较，
- 如果准换后的结果是一样的，那么就会返回`true`，否则返回`false`。
- `!=`是两边的不相等返回`true`如果相等的话则会返回`false`。

---

- `===`和`!==`并不会自动转换数据的类型，在比较时也会比较数据的类型
- `===`数据类型和值都相等则会返回`true`，否则返回`false`
- `!==`数据类型和值有一个不相等就会返回`true`，如果都相等返回`false`

1. 两个字符串比较大小，比较的是字符串的字符编码。
2. 如果一个不是字符串，并且两个都是原始类型，将它们都转换为数字进行比较
3. 如果其中一个是对象，将对象转换为原始类型然后，按照规则 1 或规则 2 进行比较
4. 如果两端都是对象类型，比较的则是对象的内存地址，因此大部分情况下他们都是不相等的

目前，对象转换为原始类型后，是字符串 "[object Object]"

【 **NaN 与任何数字比较，得到的结果都是 false** 】

1. null 和 undefined， 它们之间相等， 和其他原始类型比较， 则不相等。
2. 其他原始类型，比较时先转换为数字，再进行比较
3. NaN 与任何数字比较，都是 false，包括自身
4. Infinity 和-Infinity，自能和自身相等
5. 对象比较时，要先转换为原始类型后，再进行比较

【 **`null`和`undefined`他们相等，但是不全等** 】

```javascript
null == undefined;
//=>true 相等并不会比较数据的类型

null === undefined;
//=>false  全等会比较数据类型
```

【 **`Infinity` 和`-Infinity`只和自身相等** 】

### 逻辑运算符

【 **js 中的两个逻辑运算符都属于时短路运算符(存在的多个表达式时，只要有一个满足要求则不再运算其他的表达式)** 】

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
//上面的判断条件是a必须有值，而且a的值的类型还必须是number类型
//只要这两个条件都满足时才能进入判断体
```

**逻辑或`||`**

> 逻辑或：可以简单理解为寻找`true`,只要是第一个参数为`true`则直接返回，如果第一个为`false`，则直接返回第二个，不做判断

项目中我们通常用于参数的赋值

```javascript
function test(x) {
  x = x || 0;
  //如果有传递实参则直接返回x，没有的话则给x赋值为0
  //不严谨，如果我们传递的值转换为布尔值为false的话依然会赋值为0

  //严谨的写法
  if (typeof x === "undefined") {
    x = 0;
    //如果我们不传递实参，则x默认为undefined，就会进入判断
    //如果传递的是false或者是null之类的也不会进入判断。
    //但是传递undefined会进入判断
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

对一个数据进行两次取反之后就会返回当前数据原有的`boolean`属性

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

`...`在 ES6 中有三种作用，剩余运算符，展开运算符

**展开运算符**

可以获取到数组或者对象当中的所有项，可以用来克隆数组或者对象,在函数中也可以替代`arguments`的某一些功能

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
  //=>arguemnts则是一个类数组，无法使用数组中一些方法
  console.log(arguments);
}
test(10, 20, 30, 40);


//=>展开运算符的后面是不允许书写其他的变量

function test(...a,b){
  console.log(a);
  console.log(b);
}
test(10,20,30,10,)
//=>报错：SyntaxError: parameter after rest parameter
```

**剩余预算符**

可以理解将剩余的数据压缩收集进一个新的数组或对象

```javascript
let arr = [10, 20, 30];
let [a, ...b] = arr;
//=>表示的是除了a对应的以外的值全部赋值给b

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

1. `+=`加等于
2. `-=`减等于
3. `/=`除等于
4. `*=`乘等于
5. `%=`余等于
6. `**=`幂等于
7. `>=`大于或等于
8. `<=`小于或等于

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
//=>语法：isNaN([value])
var num=12;
isNaN(num);
//->检测num变量存储的值是否为非有效数字 false

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
```

【 **重要：isNaN 检测的机制** 】

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

```javascript
//=>语法：typeof [value] =>检测value的数据类型
//=>返回值：使用typeof检测出的结果是一个字符串，字符串中包含着对应的数据类型，
//=>例如"number"/"string"/"boolean"/"undefined"/"object"/"function/symbol"

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

直接使用 typeof 一个不存在的变量并不会报错。而是会返回`undefined`，但是在 ES6 中基于`LET`创建变量则改正了这一机制，在申明之前使用 typeof 检测类型是直接报错(ReferenceError: Cannot access 'c' before initialization);

### in

`in`主要用于检测一个属性自身或这原型链中是否存在，如果存在则返回`true`,否则返回`false`。`in`需要两个参数，第一个是指定的变量，可以是数组，也可以是一个对象。第二个是指迭代的对象。在检测一个实例的时候直接书写的需要检测的属性（字符串格式）。

**如果使用`for/in`语句来检测一个属性时，那么这个属性必须是`Enumerable` （可枚举）属性**

检测数组

```javascript
var arr = [10, 20, 30, 40, 50];
for (var x in arr) {
  console.log(arr[x]); //=>10,20,30,40,50
  //这样我们可以直接输出数组的每一项的值

  console.log(x); //=>0,1,2,3,4
  //直接输出x的话输出的就是数组的索引（下标）
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

console.log(person.name); //=>'平野绫'
//我们可以使用in 来检测一个实例中是否拥有这个属性
//语法 ： '属性'  in  实例   属性必须书写为字符串格式
console.log("name" in person); //=>true
//person中有name这个属性，所以返回的true
//但是 in 还有一个特点 ： 如果一个实例没有这个属性，但是实例的原型拥有这个属性的话，
//他也会返回true
console.log("toString" in person); //=>true
//我们创建的实例中并没有toString这个属性，但是实例的原形链中拥有这个属性
//in 会查找实例的原型，而且是无序查找，只有当原型中没有时才会返回false

//我们也可以使用 in 运算符来遍历我们的实例
for (var key in person) {
  //我们只希望得到自身的属性，那么我们可以使用hasOwnProperty
  if (person.hasOwnProperty("key")) {
    console.log(key);

    //console.log(person[key])

    //=>上面一行代码可以使我们获得每个属性的属性值，
    //注意此处不要加引号，否则会得到undefined
    //如果是加引号的话浏览器会认为是输出当前实例的某一个属性
    //如果不加引号，那么[]中的就是一个变量，浏览器会计算出结果后输出
  }
}
```

> - instanceof
>
> - constructor
>
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

真实项目中，根据需求，我们往往需要把数据类型之间进行转换

### 转换为 number 类型

[**Number**]

可以直接将非数字类型转换成数字类型，但是只要遇到一个非法的字符就会返回 NaN

```javascript
isNaN("3");
//=>false
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
//=>NaN 从字符串最左边字符开始查找有效数字字符，并且转换为数字，
//=>但是一但遇到一个非有效数字字符，查找结束。
//=>parseFloat也是相同的机制
```

- 基于 parseInt/parseFloat/Number 去手动转换为数字类型
- 数学运算：+ - \* / %，但是“+”不仅仅是数学运算，还可能是字符串拼接

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
//=>i++就是单纯的数学运算，已经摒弃掉字符串拼接的规则
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
- 条件判断中的条件表达式最后都会转换为布尔类型
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

循环主要功能就是重复性的做一些相同的事情，但是如果我们不规定一些条件的话就会一直循环进行下去（死循环）!这个时候浏览器就会直接卡死，所以我们应该极力避免这种情况的发生

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

【 **`while`和`do/while`的区别** 】

根据循环条件`while`可能一次也不会执行，而`do/while`则是不管条件是否成立，都会先执行一次循环

```javascript
var i = 11;

while (i < 10) {
  //条件不成立，直接退出循环
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
//=>控制台只会打印出0到2这三个数字
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
    //只有是自身拥有的属性才会进入判断语句
  }
}
```

---

## 内置方法

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

### 字符串细节知识

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

### 字符串中常用的方法

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

### 链式写法

js 默认给我们提供了各种各样的实例方法供我们使用，这些方法大都会有一个返回值，我们就可以使用这个返回值来进行链式写法，但是我们应该熟悉每种方法的返回值，以免造成不必要的错误

**我们必须要知道方法之后的返回值类型，才能继续书写链式写法**

```JavaScript
var arr=[10,50,60,40,30,20];
arr.sort(function(a,b){return b - a}).reverse().pop();
//上面使用的方法会对数组进行升序降序排序，之后进行翻转，最后删除数组中的最后一项，也就是最大项。

//只要我们了解各方法的返回值，我们就可以使用任何类型的链式写法

var arr=[10,50,60,40,30,20];
arr.sort(function(a,b){return b - a}).reverse().pop().toString().splice(1,3);
//如果我们对返回值掌握不是特别熟悉的话，上面代码就会报错，
//报错：VM30:2 Uncaught TypeError: arr.sort(...).reverse(...).pop(...).toString(...).splice is not a function
//当我们使用toString()方法后此时返回值就已经是一个String类型的数据了
//我们无法再使用数组中的一些方法。
```

---

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

![nN3GuT.png](https://s2.ax1x.com/2019/09/10/nN3GuT.png)

DOM 树描述了标签和标签之间的关系（节点间的关系），我们只要知道任何一个标签，都可以依据 DOM 中提供的属性和方法，获取到页面中任意一个标签或者节点

### 获取 DOM 元素

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

### DOM 的增删改

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

---

## git 和 node

### NODE 安装

<https://nodejs.org/zh-cn/> 推荐大家使用 LTS 稳定版本，把安装包下载下来后，直接一路下一步安装即可（最好把它安装到 C 盘 [默认盘符] ，记号安装目录）

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

  1.npm 下载的资源都是在<https://www.npmjs.com/> 中下载的 `npm install xxx`：把资源或者第三方模块下载到当前目录下 `npm install xxx -g (--global)`：把资源或者第三方模块安装到全局环境下（目的：以后可以基于命令来操作一些事情） `npm uninstall xxx / npm uninstall xxx -g`：从本地或者全局卸载

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
> - nrm use xxx �� 用某个源
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

> <https://github.com/>
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

```TXT
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
> - 历史区：存储的是生成的每一个版本代码

![Alt text](./1523412523484.png)

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
4. 在团队协作开发的时候，LEADER 会在自己的 gitHub 账号下创建一个远程仓库，那么团队其他成员在向这个远程仓库推送信息的时候，使用自己的账号是没有推送权限的，我们需要把当前这个远程仓库，在 github 中创建工作群组，让更多人用自己的账号也有操作权限 ![nN8Qde.png](https://s2.ax1x.com/2019/09/10/nN8Qde.png) 小组成员在自己的邮箱中收到一封邀请邮件，需要确认同意 ![nN8lIH.png](https://s2.ax1x.com/2019/09/10/nN8lIH.png) 这样就是加入成功了 ![nN8uqO.png](https://s2.ax1x.com/2019/09/10/nN8uqO.png)

---

## 严格模式

在 ES5 中使用严格模式需要在当前作用域内的第一行书写`use strict`;如果书写在全局作用域内的第一行则表示当前的整个文件使用的都是严格模式。

> 全局作用域的严格模式只会影响当前的文件，并不会影响到其他的 js 文件，

> 在实际多人开发的项目中，当我们完整开发之后会将所有人开发的代码合并压缩在一个 js 文件内，当我们想要在自己开发的 js 代码使用严格模式的话应该使用一个立即执行函数，将自己所有的代码放在一个单独的作用域内，这样就不会影响到其他人所书写的代码，因为`uer strict`只对当前的作用域有效果

### 严格模式和非严格模式的区别

- 我们应当在开发中尽可能的使用严格模式来书写代码，因为在严格模式中对语法的要求更加的严谨，更加的符合规范

### arguments

在严格模式中`arguments`的`arguments.callee`和`arguments.callee.caller`无法使用，同时`arguments`不再和形参形成映射机制，

```javascript
function test() {
  "use strict";
  console.log(argument.callee);
}
test(); //=>报错：TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
//这两个方法是无法在严格模式中使用的，使用的话浏览器会直接报错

function test(x, y) {
  console.log(arguments[0]); //=>10
  x = 100;
  console.log(arguments[0]); //=>100
}
test(10, 20);
//在非严格模式中arguments依旧和形参存在着映射关系，当一个改变时，另一个也会跟着改变

function test(x, y) {
  "use strict";
  console.log(arguments[0]); //=>10
  x = 100;
  console.log(arguments[0]); //=>100
  arguments[0] = 200;
  console.log(x);
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
  console.log(this); //=>window
}
test();
//=>在非严格模式中不指定this的指向，thsi就会自动指向window

function test() {
  "use strict";
  console.log(this); //=>undefined
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

## 变量提升

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

【 **我们在编写程序的时候操作的都是存储在变量内的数据** 】

### 命名规范

- 严格区分大小写
- 遵循驼峰命名法：按照数字、字母、下划线或者\$来命名（数字不能做为名字的开头），
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

### 变量提升

在作用域形成之后，js 代码自上而下执行之前，浏览器会把所有带`VAR`和`FUNCTION`的关键字提前，`VAR`会提前声明，但是不会赋值，`FUNCTION`会提前声明并定义。

【 **变量提升只会发生在当前作用域** 】

1. 全局变量提升:

   > 在全局作用域中申请的即为全局变量，全局变量只会提升到全局作用域(window)中，函数在提升的时候会创建一个新的堆内存用来存储自身的代码块，当执行代码的时候，声明提前过的代码浏览器不会再次执行。

```javascript
console.log(a); //=>undefined
//变量提升只会声明提升，
//只有当代码执行到赋值操作的时候才会赋值，相当于在页面顶端var a;
//因此我们在之前使用只能得到undefined
var a = 123;

test(); //=>123
//函数提升会将自身提升至页面最顶端，
//因此我们在函数声明之前也可以正常使用

function test() {
  console.log(123);
}
```

---

2. 局部变量提升:

   > 在函数内的使用`VAR`申请的变量称之为局部变量，只有在函数执行的时候才会触发提提升机制，但是只能提升到函数私有的作用域中，函数运行的时候会先给形参赋值，然后在进行变量提升，

**无法在全局中访问局部变量**

### 带 var 和不带的区别

1. 全局使用`VAR`声明

   > 在全局中使用`VAR`关键字申明一个变量时会自动和`window`形成一个映射的机制，可以直接使用`window.变量名`获取相应的值，因此当改变一个时另外一个也会改变，但是函数中使用`VAR`关键字声明的私有变量，并不会和`window`形成映射机制。

```javascript
var a = 123;
console.log(a); //=>123
console.log(window.a); //=>123
window.a = 321;
console.log(a); //=>321
console.log(window.a); //=>321
//由于映射机制的关系，改变其中一个另外一个也会改变
```

2. 全局未使用`VAR`声明

   > 如果在全局中未使用`VAR`关键字声明一个变量，则不会变量提升，不使用关键字声明而直接赋值的话就相当于给`window`添加一个属性，对象的机制是**即使没有这个属性，直接使用的话也不会报错，而是会显示 undefined**，因此在代码之前使用`window`访问的话得到的是`undefined`，但是不使用`window`而直接调用的话浏览器会报错

   ```javascript
   console.log(window.a); //=>undefined
   console.log(a); //=>报错  a is not defined
   a = 123;
   //不使用关键字var声明的变量并不会提升，因此我们在之前访问的话会直接报错，
   //但是访问window.a的话即使没有a也不会报错，只会返回undefiend
   ```

3. 函数内的`VAR`

   > 函数内使用`VAR`关键字声明的变量为私有变量，全局作用域中无法访问，同时变量提升遵循私有作用域的提升机制,如果函数内不使用`VAR`,其实就相当于给全局作用域中的变量再次赋值，使用的也是全局作用域中的变量，

```javascript
function test() {
  var a = 123;
}
console.log(a); //=>报错：a is not defined
console.log(window.a); //=>undefined
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

1. 在 js 中全局作用域中申请的变量其实可以理解成是`window`的属性，由于对象的属性名是不可以重复的，所以如果变量名相同的话在变量提升阶段后面的会直接把前面所有重名的覆盖掉，代码执行阶段也是如此，重复的变量名并不会重新定义，只会重新赋值，从而把前面的值覆盖掉

2. 在下列代码中由于函数名和变量名字重复，在变量提升阶段使用`VAR`关键字申请的只会定义，默认值是`undefined`，并不会赋值，而后面的函数则会声明和定义一起提前，所以代码未执行带赋值代码之前，`test`都是函数，当执行到赋值代码的时候，此时`test`的值重新赋值为了`100`，当`100`调用函数时会报错

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

1. 在 ES6 中基于 let/const 等方式创建变量或者函数，不存在变量提升机制。因此在申明变量之前使用，会报错！而且还会切断和全局作用域`window`的映射机制。

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
  a += typeof f; //此时的f并没有声明赋值，typeof检测时即使没有这个变量，也不会报错，
  //而是会返回undefined，此时if判断语句内的f函数运算完之后已经被销毁了
}
console.log(a); //字符串拼接:1undefined
```

### 创建函数

- 函数的创建的时候会自动开辟出一个新的堆内存，将函数的代码块以字符串形式的存储起来，栈内存与函数关联起来的是堆内存的内存地址。

- 函数创建的方式：函数字面量，函数表达式，匿名函数。

  - 函数字面量：基本格式为`function [函数名](){}`，函数字面量具有变量提升机制。
  - 函数表达式：基本格式为`var [变量名]=function(){}`,函数表达式只会声明提前，
  - 匿名函数：基本合适为`(function(){}())`,不具有变量提升，会直接执行，并且只能执行一次，除了不具有变量提升机制之外，和其他的函数都是一样的机制。

### 函数运行

- 函数字面量和函数表达式都需要使用`()`来调用， 但是匿名函数由于没有名字，所以当代码执行到当前的代码块的时候会直接执行，

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

1. 在函数中如果不使用`return`关键字函数也会自动在函数末尾添加，只不过返回的`undefined`，如果只书写`return`，后面不填写返回值的话，那么也会返回`undefined`。

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

2. 我们可以在函数中返回任何数据类型，基本数据类型会直接返回值，而引用数据类型时则会返回对应的堆内存空间地址，我们甚至还可以返回一个函数

```javascript
function test(a+b){
  return a+b;
  }
  var a =test(10,20);
  console.log(a) //=>30
//上面这些代码则是利用了函数的返回功能，返回的结果是a+b的结果
//上面的函数只是帮我们出结果，并把结果返回给我们，
//这样可以使我们的操作更加灵活，因为我可以哪计算的结果做任何操作
//并不是单纯的做某一种操作

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

3. 在函数执行当中，一但碰到`return`关键字，就会立即终止函数的执行，继而返回`return`关键字后的数据。

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

### arguments

**`arguments`只在非严格模式中存在映射机制，在函数刚一开始运行的时候就已经决定好了。（只和当前传递的实参建立映射关系）。之后无论做什么样的操作，都没办法改变其映射关系**

1. `arguments`是所有函数中都拥有的类数组对象（ES6 中的箭头函数没有），并不是真正的数组对象，但是可以转换成真正的数组，

2. 他是函数所传递的实参的集合，并且拥有索引，索引从 0 开始，每传递一个实参会自动递加其索引值，将传递的值作为值存储起来，

3. 无论有没有形参接收实参，`arguments`的值都会增加，如果有形参接收实参，那么`arguments`的值会和形参形成映射关系，他们其中一个改变的时候另外一个也会改变，

4. 只有实参传递的值才会使`arguments`和形参形成映射关系，如果实参数量少于形参数量，那么后面手动给形参赋值并不会影`arguments`同时也不会递加自身的索引和值。

5. 可以采用`arguments[索引]`的方式来访问其索引中存储的值

6. 使用`typeof`时返回的是`object`,**说明是一个对象**

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

- 在 js 中使用`new`关键字创建的函数我们称之为构造函数，为了和普通函数区分开，我们创建构造函数时一般都是使用大驼峰命名法来命名（每个单词的首字母都大写）。
- 使用`new`关键字创建构造含数，此时的函数名称为**类名**,而接收构造函数返回的变量时当前类的**实列**
- 在我们平时的开发当中一般很少直接书写构造函数，构造函数一般用于组件,框架,插件,类库的封装。
- 构造函数也叫做**对象构造器函数**

```javascript
function Test() {
  //....
}
var obj = new Test();
//上面的代码中我们就创建了一个简单的构造函数，Test就是我们创建的自定义类，而obj就是Test这个类的实例
```

### 创建值的两中方式

> 在 js 中创建值有两种方式:
>
> 1.  字面量方式
> 2.  构造函数方式

**引用数据类型的区别**

```javascript
var obj = {}; //=>字面量的方式创建对象
var obj = new Object(); //=>构造函数创建对象
```

- 上面代码中都是创建一个对象，只是创建的方式不一样，第一种时通过字面量的方式创建，我们可以直接在{}内书写代码，示例：`var obj = {name :'平野绫',age:18}`。我们还称这种为**单例设计模式**，即每一个都是一个单独的实例，创建多个时，每个实例之间的都是相互独立，互不干扰！

- 第二种通过**构造函数**的方式创建的，但是它不能直接在()内书写代码，必须使用`.`给对像添加属性。示例：`var obj = new Object();obj.name='平野绫';obj.age=18;`。这两种创建方式除了语法上的区别，并没有什么特殊点

**基本类型的区别**

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

> 普通函数拥有`return`方法，可以返回任意我们需要的数据，在构造函数中也拥有这个方法，只是在构造函数中我们无法返回基本数据类型，如果我们返回的是一个基本数据类型的话，浏览器会自动忽略掉所返回的数据，只会结束当前的构造函数执行，如果我们返回的是一个引用数据类型的话那么我们返回的时什么，外面接受的就时什么，此时的 this 就和外面接收返回值的变量没有关系，

```javascript
function Test(a, b, c) {
  this.a = b + c;
  this.b = a + c;
  return 123;
  //当我们使用return返回一个基本数据类型时，浏览器并不会给我们返回相应的值
  //我们书写return返回一个基本数据类型时。其实就相当于只书写了一个return结束循环
  this.c = a + b;
}
var result = new Test(10, 20, 30);
console.log(result.c); //=>undefined
console.log(result); //=>{a:50,b:40}
//其实result中并没有c这个属性，由于对象机制的原因，我们访问一个不存的属性时也会返回undefined

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

## 作用域

在 ES5 中分为全局作用域和局部作用域。全局作用域指的是`widnow`所创建的栈内存，局部作用域指的是函数执行时所产生的局部作用域。在 ES6 中有了块级作用域，即大部分的{}都会产生一个一个块级作用域

1. 全局作用域：

   > 页面在一开始加载的时候就会产生全局作用域。只有关闭页面或者时刷新页面时才会销毁

2. 局部作用域：

   > 函数在执行的时候会产生一个新的局部作用域来执行函数内的代码，函数执行完毕之后就会销毁当前的作用域，函数的每一次执行都会产生一个全新的作用域，每次产生的作用域都是一个完全独立的

3. 块级作用域：

   > 块级作用域时 ES6 的规则，类似于函数的局部作用域，大部分的时候当代码中出现{}就会产生一个块级作用域，但是创建对象时候所使用的{}并不会产生块级作用域，因为他只是一个对象的书写形式，判断语句和循环语句中的{}则会产生块级作用域

### 作用域链

> 在函数执行创建时就会产生一个作用域链，作用域链是一个不可操作的类数据对象，函数创建的时候会在作用域链索引 0 的位置上和`widnow`全局作用域相关联， ![nymQLq.png](https://s2.ax1x.com/2019/09/14/nymQLq.png)

> 当函数执行的时候会自动将自身的作用域放在索引 0 的位置上，会将其他的依次向下位移一个索引，在查找一个数据时会按照作用域链优先查找索引 0 上的作用域，如果没有则依次向下查找，函数在执行完毕之后会销毁自身的作用域，作用域链会回到创建时的状态 ![nym3wV.png](https://s2.ax1x.com/2019/09/14/nym3wV.png)

> 如果在函数内部创建了一个函数，那么这个函数创建的时候作用域链就会和他的上一级函数相关链，此时索引 0 的位置上存放的是他上一级的作用域 window 全局作用域在作用域链中始终处于最底部，**函数的作用域链在创建的时候就已经决定好了。因此跟函数在哪运行没有任何关系** > ![nyuF58.png](https://s2.ax1x.com/2019/09/14/nyuF58.png)

---

## 闭包

闭包是一种现象，在代码执行的时候产生一个不销毁的私有作用域（栈内存）就叫做闭包，闭包可以保护其内部的变量不受外部污染，还可以保存内部的值，方便我们以后调用，

- 过多的使用闭包会造成性能上的缺失，因为会造成过多的栈内存无法被释放，因此我们在开发中应该尽量避免使用闭包。

- 过多的使用全局变量会造成**全局变量污染**，因此有时候我们可以将一些功能封装在闭包当中，使其变成私有变量，减少全局变量的污染。

- 其实在下面这张图中我们也使用了闭包，因为函数 B 的始终指向函数 A 的作用域，因此函数 A 的作用域无法被销毁，其中的数据也会被保存起来，
  > ![nyuF58.png](https://s2.ax1x.com/2019/09/14/nyuF58.png)

### 闭包小应用

```javascript
//假如我们的页面中有若干个li，我们需要给每一个li绑定点击事件
//点击的时候显示出每个li的文本

//获取li的集合（类数组）
var li = document.getelementsByTagName("li");
//循环li类数组获取到每一个li
for (var i = 0; i < li.length; i++) {
  //使用闭包个每个li绑定点击事件
  li[i].onclick = (function(j) {
    return function() {
      console.log(li[j].innerHTML);
    };
  })(i);
}
//执行一个立即执行函数我们都把当前的i通过传参的形式传递给立即执行函数，
//而我们又在立即执行函数内返回一个新函数的堆内存地址，由于每执行一次
//立即执行函数都会产生一个不同的作用域， 所以我们传递的i会以固定值的形式保在返回函数体的堆内存中。
//当循环结束的时候，循环了几次就创建了几个堆内存，而每个堆内存中的接收的i的值也不一样
//每个li所绑定的堆内存地址也不一样，但是这样会影响性能，不推荐使用，

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

var li = document.getelementsByTagName("li");
for (let i = 0; i < li.length; i++) {
  li[i].onclick = function() {
    console.log(li[i].innerHTML);
  };
}
//上面这种方式和第一种类似，在ES6中使用循环体的{}会产生块级作用域
//循环体执行了几次，就产生了几个块级作用域，每个块级作用域中存储的i的值也不一样
//同样也是给不同的li绑定不同的堆内存地址，

var li = document.getelementsByTagName("li");
for (var i = 0; i < li.lengthl; i++) {
  li[i].addEventListener("click", function() {
    console.log(this.innerHTML);
  });
}
//由于this在事件当中给谁绑定的this就是谁，所以我们通过this也可以完成操作
//而且this也不会创建多余的堆内存。更加的节省性能，依次推荐这种方法
```

## 设计模式

在 js 中有许许多多的设计模式，合理的运用可以是我们的代码更加的高效整洁，实现**高内聚低耦合**

### 单例设计模式(singleton pattern)

- 单例设计模式简单理解为就是一个普通的对象，它可以将一个事务的属性和特征进行**分类** **归组** 统一存储在堆内存当中，可以减少我们全局变量的污染，在单例模式中，我们成为属性名为`命名空间[NameSpace]`，不同的命名空间是相互独立的，互不干扰

```javascript
var obj = { name: "xxx", age: 18 };
//如果我们不使用单例模式，那么就需要定义两个变量来存储这些信息，
//这样会过多的污染全局变量，并不利于我们的开发，
```

### 高级到单例设计模式

- 高级单例模式并不是普通的赋值，而是先创建一个匿名函数，该函数的堆内存并不会被销毁，因为它一直被`NameSpace`所占用，我们可以在这个匿名函数中创造很多的功能，如果有需要供外面使用的功能我们直接将其暴露到返回的对象中即可（模块化实现的一种思想）

```javascript
var obj = (function() {
  var a = 12;
  var fn =function(){};
  ...
  return {
    a : a,
    fn : fn
  }
})();

//上面这种我们就是用了高级单例模式，如果外部需要使用内部的功能，
//我们只需要将其放在一个对象中，然后返回，
//我们就可以直接在外部调用这些功能，这样可以减少我们全局变量的污染
```

### 工厂模式（Factory Pattern）

工厂模式实际就是把相同的功能封装在一个函数内，实现批量生产，工厂模式实现了高内聚低耦合的思想

```javascript
function createPerson(name, age, sex) {
  return {
    name: name,
    age: age,
    sex: sex
  };
}
var obj = createPerson("平野绫", 18, "女");
var obj2 = createPerson("钉宫", 20, "女");
//上面的代码中我们就是用工厂模式创建了连个不一样的对象，
//每一个执行函数所传入的实参是不一样的。那么return出的值也是不一样，
//工厂模式有很多中写法，区别最大的就是this的使用
```

### 模块化开发

1.团队协作开发的时候，会把产品按照功能板块进行划分，每一个功能板块有专人负责开发

2.把各个版块之间公用的部门进行提取封装，后期在想实现这些功能，直接的调取引用即可（模块封装）

---

## this

this 是 js 中最为简单也是最为复杂的一个，它可以根据不同的使用场景变成不同的样子

1. 如果我们创建一个函数，并且函数内部使用了 this，那么 this 的归属权就取决于谁在使用这个函数

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

2. 在事件绑定中，我们把这个事件绑定给谁，那么其中的 this 就是谁

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

3. 在立即执行函数中 this 只能是 window 全局对象

```javascript
(function() {
  console.log(this); //=>window
})();
//=>在立即执行函数中this是window
```

4. 在构造函数中 this 时创建类的实例

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

### 强制改变 this 指向

改变 this 的方法都是通过原型链的查找机制，使用的是 `Function.prototype` 上面的方法,他们的功能都是相同的。只是存在一些细微的区别

- 在非严格模式中强制改变`this`指向的时候，如果将其指向为`undefined`和`null`或者不传递指定的参数，都会自动指向`window`。

- 在严格模式中`this`永远指向我们传递的参数，包括`undefined`和`null`，如果不传递会自动指向`undefined`。

【 **`call`的性能要稍好于`apply`** 】

1. 【 **call** 】

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

2. 【 **apply** 】

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

3. 【 **bind** 】

`bind`和`call`语法是一样的，不过`bind`并不会直接执行函数，而是让`this`预指向我们传递的对象，而`call`则会直接执行函数

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

---

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

1. 更改原型的指向那么原型中的`constructor`这个属性就不存在了。不单单是这个属性，先前所有的属性和方法都不能使用，原有的原型会触发浏览器的垃圾回收机制，自动清理掉，释放其内存空间，此时的`constructor`就会指向`Object`。

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

> 一般只有需要大量向原型中添加一些属性或者方法的时候，才会改变其原型的指向，**由于浏览器的保护机制！默认类的原型无法被改变**

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

- 我们自己添加的方法不应该和原型中已经存在方法重名，因为这样的话会覆盖掉原型中原有的方法，所以我们应该在方法名中添加一些我们自己的标识，以便于更好的和原有的方法区分开。

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

1. 如果我们使用双重`for`来对数组进行去重，这样的操作会更加消耗我们的性能，因为这种方法是把数组中的每一项都拿出来和其它项进行对比，当我们数组想越多时对性能的影响也就越大，我们上面的代码利用了对象属性名的机制，只要发现属性名重复我们就把当前数组的元素和最后一项进行调换，然后将最后一项删除，这样不仅节省了性能，同时也避免了数组的塌陷问题（数组元素位置会发生改变）。

2. 我们在代码最后将我们创建的一个对象所占用的堆内存空间释放掉了。虽然这个性能提升微乎其微，但我们仍不应该忽略掉，同时也可以让我们的代码形成良好的规范。

---

【 **缺点** 】

1. 代码中的 this 只有当我们直接使用数组对象调用时才会正确的指向我们希望操作的对象，`arr.__proto__.myNoRepeat()`,这样子调用时 this 的指向就会出现错误，而且在 IE 中并不支持我们使用`__proto__`,因此代码也会报错！`Array.prototype.myNoRepeat()`这样也会使 this 指向错误，虽然我们几乎不会使用这些方法调用，但是仍应注意

2. 在我们借助了数组中元素的索引来完成了我们的需求，虽然这样会帮助我们节省性能，但是也会造成数组中元素的顺序发生改变，如果要求我们不能改变数组中元素的顺序，我们就不应该使用这种方法。

如果我们不希望改变数组元素的顺序，我们可以使用这面这种写法

```javascript
var arr = [1, 2, 3, 1, 2, 1, 1, 2, 3, 2, 1, 2, 2];
Array.prototype.myNoRepeat = function myNoRepeat() {
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    var item = this[i];
    if (obj[item]) {
      this.splice(i, 1);
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

左右两边的数据结构需要是一致的，如果是数组的话需要两边都以数组的结构出现。`let [] = 数组`。对象也是同理

**数组解构赋值**

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

如果左边用于赋值的变量多余右边，那么就会赋值`undefined`,我们也可以直接将其设置一个默认值

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

//=>结构赋值
[b, a] = [a, b];
//=>将a和b两个变量放入一个数组中，
//=>然后使用结构赋值依次交换，更加的简单快捷
```

**对象解构赋值**

对象的结构赋值和数组的语法是一样的，只不过我们在左边用于赋值的变量须和右边对象的属性名一致才可以，如果需要不同的名字，可以额外设置

```javascript
let obj = { name: "绫", age: 20, sex: "女" };
let { name, age, sex } = obj;
cosnole.log(name, age, sex);
//=>'绫',18，'女'
//=>结构赋值操作完成之后，我们用于接收的变量和对象的属性就没有任何关系了

obj.name = "钉宫";
cosnole.log(name);
//=>'绫'
console.log(obj.name);
//=>'钉宫'

//=>它们连个任意一个改变都和另外一个没有任何关系
```

我们有时为了防止对象的属性名和全局的变量名冲突，我们还可以自定义用于接收的变量名

```javascript
let obj = { name: "绫", age: 20, sex: "女" };
let { name: nameAA, age: ageAA, sex: sexAA } = obj;
//=>我们可以直接使用  对象属性名:自定义变量名  来自定义用于接收的变量名

//=>同样的，为了防止接收的变量多于对象的属性时多出的变量被默认赋值为undefined，我们也可以设置默认的属性

let { name, age, sex, gender = 0 } = obj;
console.log(gender);
//=>0 因为对象内没有供gender接收的数据，所以会被设置为我们默认设置的数据
```

**小应用**

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
