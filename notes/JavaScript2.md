# JavaScript

js 是一门单线程的解释型语言，并不需要进行预编译，而是在运行过程中进行解释，由于是单线程语言，所以一次只能执行一个任务，当前任务没完成时剩余的所有任务都需要等待。

js 的标准由`ECMA`制定，但是`ECMA`只指定语言标准，并不涉及语言的运行环境，因此 js 可以在各种环境中执行，js 的运行环境称为宿主环境，在`node`运行环境中可以编写服务器代码

`V8引擎`可以将 js 的代码直接转换为字节码来运行，理论上 js 代码的执行速度已经接近了汇编语言，同时由于`V8引擎`的出现，让 js 迈向了一个新的台阶

## 变量

变量(variable)并不是一个确切的值，而是一个用来存储确切值的容器

变量的命名规范：

1. 严格区分大小写
2. 遵循小驼峰命名法，构造函数使用大驼峰明名
3. 数字，字母，`$`,`_`都可以使用，数字不能作为开头
4. 不能使用关键字或者保留字
5. 需要具有语义化

### var

`var`关键字声明一个普通的变量，具有变量提升的机制

```javascript
var a = 10,
    b = 20,
    c = 30;
//=>同时声明多个变量的语法糖
```

使用`var`声明的变量会声明提前，赋值并不会，因此在变量的声明之前访问只能获得`undefined`,

```javascript
console.log(a);
//=>undefined;并不会报错
var a = 1;
```

使用`var`声明的变量会和全局对象`window`产生映射机制，变量会作为`window`的一个属性存在，同时之要修改了一个，另一个也会改变

```javascript
var a = 10;
window.a;
//=>10

window.a = 20;

a;
//=>20;存在映射机制
```

如果在全局作用域中不使用任何关键字直接赋值一个变量，那么这个变量就会成为全局对象`window`的一个属性

```javascript
a = 10;
console.log(a);
//=>10

console.log(window.a);
//=>10
```

使用`var`关键字重复申请相同的变量名并不会报错，而是由后申请的覆盖前申请的

```javascript
var a = 10;
var a = 20;
console.loga(a)
//=>后面的覆盖前面的
```

### let

ES6中新增加的一种变量申请方式

使用`let`声明的变量不存在提升机制，在申明之前访问会直接报错，

```javascript
console.log(a);
//=>报错
let a = 10
```

相同的作用域之间不允许声明重复的变量名，会在语法解析阶段直接报错,不同的作用域之间可以使用相同的变量名

```javascript
let a = 10;
let b = 20;
//=>同一个作用域内存在相同的变量名会直接报错

let a = 10;
var a =20;
//=>var和变量名和let的变量重复也会报错
```

不同的作用域之间可以使用相同的变量名

```javascript
let a = 10;
{
  let a = 20;
  console.log(a);
  //=>20;{}会形成一个块级作用域
}
console.log(a);
//=>10;访问到的全局作用域中的a
```

全局作用域中的变量可以被局部作用域访问到，但是在全局作用域中无法访问到局部作用域中的变量

```javascript
let a = 10;
{
  console.log(a);
  //=>10
}
//=>局部作用域不存在时会查找全局作用域中是否存在

console.log(a);
{
  let a = 10;
}
//=>报错：a is not defined

{
  console.log(a)
  //=>报错：全局作用域中和局部作用域中都不存在
}
```

隐式的变量命名重复

```javascript
let a = 10;
{
  var a = 20;
}
//=>报错：使用var申明的变量存在变量提升机制，会和let声明的变量冲突
```

`let`声明的变量会切断和`window`的映射机制，无法使用`window`访问`let`声明的变量

```javascript
let a = 10;
var b = 20;
widnow.a;
//=>undefined；
window.b;
//=>20;var 声明的变量存在映射机制
```

基于`let`声明的变量会存储在当前页面最顶部至初始化变量之间形成的一个`暂存死区`中，在暂存死去中访问这个变量都会报错,包括使用`typeof`

```javascript
typeof a
var a = 10;
//=>undefined 即使a不存在也会返回 undefined

typeof b;
let b = 10;
//=>报错：只要是在暂存死区中访问都会报错
```

### const

ES6中新增加的一种声明方式,可以声明一个常量

1. 不存在变量提升机制
2. 切断和`window`的映射机制
3. 不允许声明相同的常量名
4. 会产生一个块级作用域，不同的块级作用域可以使用相同的常量名
5. 页面最顶部至常量初始化会形成暂存死区，在暂存死区中访问会报错

`const`声明的常量不允许修改值，

```javascript
const a = 10;
a = 20;
//=>报错：TypeError: invalid assignment to const `a'
```

`const`声明的常量必须在声明的时候就直接赋值，无法先声明后赋值，否则会报错

```javascript
const a;
//=>报错:SyntaxError: missing = in const declaration
```

`const`的本质并不是不允许修改值，而是不允许修改对应的内存地址，基本数据类型都是将值直接存储在堆内存当中的，所以直接修改会报错，二对于引用数据类型，堆内存中存储的只是栈内存的空间地址，只要栈内存的空间地址没有修改，修改引用数据类型的值并不会报错

```javascript
consto obj = {name:'平野绫'};
obj.name = '钉宫';
//=>只要不修改内存的指向就不会报错

obj = {name:'钉宫'};
//=>报错：修向
```

### 变量提升

在作用域形成之后，JS代码执行之前，基于`var`声明的变量会声明提前，赋值操作会等到代码执行到赋值语句的是偶才会赋值，之前变量的值都是`undefined`

```javascript
console.log(a);
var a = 10;
//=>undefined;声明提前，赋值不会提前
```

在全局作用域中使用`var`关键字进行变量的声明则会和全局对象`window`产生映射机制，不使用`var`关键字也会和全局对象产生映射，但是不使用`var`创建的变量，无法在创建之前使用，会直接报错

```javascript
a = 10;
console.log(a);
console.log(window.a)
//=>10

console.log(a);
a = 10;
//=>报错 a is not defined
```

变量提升只会在当前的作用域生效，如果变量实在函数的私有作用域中使用`var`关键字申请的，那么这个变量只会提升到函数作用域的最顶部，同时无法在全局作用域中使用

```javascript
function test(){
  var a = 10;
  console.log(a);
  //=>10
}
console.log(a)
//=>报错 a is not defined
```

函数的私有作用域中不使用关键字`var`创建变量，也是在和全局对象`window`添加属性

```javascript
function test(){
  a = 10;
}
console.log(a);
console.log(window.a);
//=>10
```

## 数据类型

| 类型      | 含义   |
| :-------- | :----- |
| String    | 字符串 |
| Number    | 数字   |
| Boolean   | 布尔   |
| Null      | 空     |
| Undefined | 未定义 |
| Object    | 对象   |
| Symbol    | 唯一值 |

数据类型分为**基本数据类型**和**引用数据类型**，在 ES6 中又新增了一种特殊的类型`Symbol`类型，表示唯一的值

### 基本数据类型

#### string

使用`""`，`''`，` `` `包裹起来的都是字符串类型，无论字符串的内容是什么，即使没有内容，也被称为空字符串

- 实际的开发中除了` `` `以外我们需要统一使用字符串符号，因为单引号和双引号只是书写方式的不同，并没有实质性的不同
- ` `` `是 ES6 中新增的一种字符串，在进行字符串拼接的时候比前两者效率更高。

```javascript
var st = "";
var st2 = "";
var st3 = ``;
/**
 * 都是字符串类型，内容为空，字符串的内容并不会影响变量的数据类型
 * 字符串是由零到多个字符组成
 */
```

和`代码`形成强力耦合或者是多次出现的字符串称为`魔术字符串`，解决方案就是使用一个变量来存储`魔术字符串`,这样更加的有利于后期的维护

#### Number

数字数据类型，所有的正负数和小数都是数字类型。

- `NaN`（not is a number）是一个特殊的数字。
- `Infinity`表示无穷大，比任何数字都大。
- `-Infinity`表示无穷小，比任何数字都小。

```javascript
var num = 10;
var num2 = 10.2;
//=>都是数组类型
var num3 = "10";
//=>字符串类型，即使内容是数字
```

> `number`中的`NaN`虽然不是一个合法的有效数字,但是它的数据类型仍然是`number`类型,当一个值无法成功的转换为有效的合法数字或者两个值做数学运算无法获取正确的结果的结果的时候都会产生`NaN`;

```javascript
var st = "3";
Number(st);
//=>无法成功的转换为有效数字,直接返回NaN
```

> `NaN`是一个特殊的数字,和任何值都不相等,即使是`NaN`

```javascript
NaN === NaN;
//=>false;NaN和任何值都不相等
```

> 检测一个值是不是`NaN`的时候只有使用`isNaN`才能正确的检测

- `isNaN`会返回一个布尔值用于判断该值是不是`NaN`
- 是`NaN`返回`true`
- 不是`NaN`返回`false;`

```javascript
var nan = NaN;
if (nan === NaN) {
  //=>永远无法进入判断语句,因为NaN和NaN作比较永远都是false
}

if (isNaN(nan)) {
  //=>如果是NaN则可以进入判读体
  //=>如果是一个有效的数组则不会进入
}
```

#### Boolean

布尔类型，只有两个值

- `true`>真
- `false`> 假

```javascript
var boo = true;
var boo = false;
//=>手动赋值只有这两种书写方式
```

#### null

表示为空，只有一种书写方式，且只能手动指定这个类型，

- 存在一个历史遗留问题，检测数据类型时为`object`，需要细查

```javascript
var test = null;
//=>只有手动赋值为null时该变量才为null
```

#### undefined

只有这一中书写方式，申请一个变量不进行赋值，该变量的值就是`undefined`；

#### Symbol

ES6中新增加的一种数据结构，用于表示独一无二的值，`Symbol`并不是一个构造函数，所以不能使用`new`关键字进行创建

`let mySymbol = Symbol()`

`Symbol`值在创建的时候可以传递一个参数，作为当前参数的描述，参数值接收字符串类型，如果传递一个非字符串类型，会默认调用`toString()`方法进行转换

```javascript
let mySymbol = Symbol('1');
//=>参数只作为描述，无法使用

let mySymbol = Symbol({});
//=>Symbol('[object Object]')

let mySymbol = Symbol(undefined);
//=>如果传递undefined，则不会添加任何描述信息
```

每一个`Symbol`值都是独一无二的，之间并不会相等，即使传递的描述信息是一致的

```javascript
let mySymbol = Symbol('1');
let mySymbol2 = Symbol('1');
mySymbol === mySymbol2;
//=>false 每一个Symbol值都是不相等的
```

`SYmbol`值只能转换为字符串或者是布尔值，字符串拼接，数学运算，或者转换为其他的数据类型都会直接报错

```javascript
let mySymbol = Symbol('1');
mySymbol.toString();
//=>'Symbol('1')'

Boolean(mySymbol);
//=>true; 只能转换为 true

mySymbol + '1';
//=>TypeError: can't convert symbol to string

mySymbol + 1;
//=>TypeError: can't convert symbol to number
```

通常使用`Symbol`值作为一个对象的属性使用，因为所有的`Symbol`值都是独一无二的`，当`Symbol`值作为对象的属性名的时候，无法使用普通的`.`结构，只能使用`[]`方括号结构操作

```javascript
let s = Symbol('1');
let obj = {};
obj.s = '2';
/**并不是将 Symbol 值作为对象的属性名，
 * 而是直接添加一个属性名为 s 的属性，
 **/

obj[s] = '2';
//=>使用 Symbol 作为对象的属性名

let obj = {
  [s]:'2'
}
//=>在创建对象的时候添加 Symbol 值为属性名的时候也需要使用 []
```

当`Symbol`值作为对象的属性名的时候并不能直接遍历，只能使用`getOwnPropertySymbols()`方法获取,该方法返回一个数组，数组中包含该对象所有的`Symbol`属性名

```javascript
let s = Symbol('2');
let obj = {
  [s] : '3',
  a : '1'
}
for(let key in obj){
  if(obj.hasOwProperty(key)){
    console.log(obj[key])
  }
}
//=>无法遍历 Symbol 值。控制台只会输出属性名 a 的值

Object.getOwnPropertySymbols(obj);
//=>[Symbol('2')] 返回一个数组
```

### 引用数据类型

#### 普通对象

对象数据类型，不同的对象拥有不同的数据结构，

- 普通对象都是由`{}`包裹起来的，有零到多组属性名和属性值组成，
- 属性名用来描述当前对象的特征，属性值是当前对象所具备的特性
- 一组属性名和属性值也称作是键值对，属性名=键(key)，属性值=值(value)
- 属性值可以是任意数据类型，属性名则只能是字符串类型，非字符串类型会被转换

```javascript
var obj = {};
//=>普通的空对象，没有任何属性

var obj2 = { name: "平野绫", age: 20 };
//=>拥有属性的对象
```

对象的属性名不仅仅可以是字符串格式的,还可以是数字格式的,当指定的对象属性名不是字符串或者是数字格式的时候,浏览器会默认的将只当的属性名通过`toString()`方法转换为字符串格式,如果设置的是数字格式的则无法使用`.`语法进行访问操作,只能使用对象表达式的方式

```JavaScript
var obj = {name:'平野绫',0:20};
obj.0;
//=>报错:Uncaught SyntaxError: missing ) after argument list

obj[0];
obj['0'];
//=>这两种访问方式都可以正确的操作对象
```

**增删改查**

**查**

普通对象拥有两种查询方法,

1. 字面量,使用`.`
2. 表达式,使用`[]`

- 访问一个不存在的属性时并不会报错,而是会返回`undefined`
- 在对象创建之前访问对象的属性会直接报错

```javascript
var obj = { name: "平野绫", 阿哥: 20 };
//=>字面量方法的查询直接使用 对象.属性名 即可
obj.name;
//=>平野绫
obj.sex;
//=>undefined,不存在sex属性]
```

> 直接使用对象表达式访问一个对象的属性的时候,属性名需要使用字符串的格式,如果使用的是一个变量,那么会将变量中存储的值取出进行访问,当对象中不存在这个属性时则会返回`undefined`,只有当变量中存储的值和对象的属性名相匹配才能正确的访问

```javascript
var obj = { name: "平野绫", age: 20 };
obj["name"];
//=>使用字符串格式才可以正确的访问

obj[name];
//=>无法获取正确的数据,返回undefined
//=>name变量并不存在,也没有值,实际的访问表达式是obj[undefined]

var name = "name";
obj[name];
/**
 * 可以获取正确的数据,实际访问的实际obj['name']
 * 如果name变量中存储的值与对象的属性名不匹配,
 * 那么也无法获取到正确的数据
 */
```

**增**

给对象添加新的属性,如果需要添加的属性已经存在,那么就是修改

```javascript
var obj = { name: "平野绫", age: 20 };

obj.sex = "女";
//=>对象中不不存在就是添加

obj.name = "钉宫";
//=>修改属性,因为对象总已经拥有name属性

/**
 * 通过对象表达式的方式我们可以指定任意类型的数据结构作为对象的属性名,
 * 除了字符串和数字类型之外,都会被使用toString()方法转换为字符串进行存储
 */
obj[{}] = 30;
//=>可以正确添加属性,实际添加的结构是'[object Object]':30

obj[{}];
//=>可以正确的访问属性,
obj["[object Object]"];
//=>直接使用转换后的字符串也可以获取到正确的属性值
```

**改**

修改对象已有的属性,如果修改的属性不存在就是给对象添加属性

```javascript
var obj = { name: "平野绫", age: 20 };

obj.age = 18;
//=>修改属性

obj.sex = "女";
//=>对象中并不存在sex属性,这个操作就是给对象添加新的属性
```

**删**

删除对象的属性,使用`delete`关键字,删除成功后会返回布尔值`true`,删除一个不存在的属性时也不会报错!

```javascript
var obj = { name: "平野绫", age: 20 };

delete obj.name;
//=>成功删除对象的name属性,返回true

delete obj.sex;
//=>删除不存在的属性不会报错,返回值也是true

delete obj["name"];
//=>通过对象表达式的方式删除
```

使用普通方式创建对象的时候,如果不添加任何的属性,那么这个对象就是一个空属性的对象,但是并不是完全意义上的空对象,因为这个对象拥有从原型中继承的属性和方法,但是平时所说的空对象值得就是没有添加任何属性的对象,跟他在原型中有没有继承属性或者方法没有关系

```javascript
var obj = {};
//=>拥有从原型汇总继承属性或者方法

Object.create(null);
//=>完全的空对象,没有任何属性,也没有从原型中继承任何属性或者方法
```

![n6W8dH.png](https://s2.ax1x.com/2019/09/14/n6W8dH.png)

#### 数组对象

数组也时对象数据类型的,也是由键值对组成,每一个数组中都拥有一个`length`属性,该属性存储的是数组的长度

> 数组都拥有索引(下标),索引从 0 开始递增,获取数组的某一项就是通过索引获取,
> 一个数组的最大索引值比数组的`length`小一

```javascript
var arr = [10, 20, 30];
/**
 * 数据结构
 * 0 : 10
 * 1 : 20
 * 2 : 30
 */
arr[0];
//=>获取数组的第一项
arr[arr.length - 1];
//=>获取数组的最后一项
```

数组的值可以是任意的数据类型,也可以是另一个数组

```javascript
var arr = [10, "20", null, undefined, {}, [40]];
/**
 * 当一个数组中嵌套另一个数组,这个数组就会变为多维数组
 * 根据嵌套的等级可以分为二维数组,三维数组等
 * 在实际开发中为了操作方便,通常不会对数组进行太多层级的嵌套
 */
```

#### 日期对象

## 数据类型检测

### isNaN

- `isNaN`只有一个作用就是检测一个数值是不是`NaN`这个特殊的数字类型
- `isNaN`在进行检测的时候会将非数字类型的值通过`Number()`转换为数字类型再做检测
- 引用类型先使用`toString()`转换为字符串之后在使用`Number()`转换为数字
- `Number()`方法在遇到除`.`以外的所有非法字符都会转化为`NaN`,无论非法字符存在什么位置上

```javascript
isNaN("3");
//=>false,纯数字字符串可以转换

isNaN("3px");
//=>true,存在非法字符,无法转化内

isNaN("3.12");
//=>false,Number()可以将小数转换为正常的数字

isNaN({});
//=>true,对象类型无法转换为有效数字

isNaN(undefined);
//=>true,undefined无法转换为有效数字

isNaN(null);
//=>false

isNaN(0 / 0);
//=>0 / 0 的结果是NaN,这是一个特殊情况,其他数值除以0将不会是NaN

isNaN("");
//=> 空字符串可以转换为数字0

isNaN([10]);
//=>false,只有一个数组项时可以转换为数字

isNaN([10, 20]);
//=>true;存在多个数组项是无法成功转换
```

### typeof

- 用来检测一个值的数据类型,无法细分的检测,检测的数据类型以字符串的格式返回
- `typeof variable`和`typeof(variable)`效果一样,只是书写方式有区
- 检测引用数据类型时总会返回`object`,无法检测具体的数据类型

```javascript
typeof 1;
//=>'number';

typeof "1";
//=>'string'

typeof null;
//=>'object',特殊情况

typeof undefined;
//=>'undefined'

typeof {};
//=>'object'

typeof [];
//=>'object'

typeof typeof {};
//=>'string',两个typeof检测永远会返回string,因为第一个的返回值时字符串类型
```

- 检测不存在的变量或者在变量申请之前检测都不会把报错,而是会返回`undefined`
- 基于`let`申请的变量改正了这一机制,在变量声明之前检测会报错

```javascript
typeof a;
var a = 1;
//=>undefined;申请之前检测不会报错

typeof b;
//=>undefined;变量不存在也不会报错

typeof c;
let c = 2;
//=>报错Uncaught ReferenceError: Cannot access 'b' before initialization
at;
```

### in

- `in`可以检测对象自身或者原型中是否拥有某一个属性
- 如果对象的属性值已经被删除则返回`false`
- 对象的属性值和检测没有任何关系,即使值为`undefined`,只要属性存在依旧返回`true`

```javascript
var obj = { name: "平野绫", age: 20 };
"name" in obj;
//=>true

"toString" in obj;
//=>true;原型中拥有toString方法

name in obj;
/**
 * false,in操作符的右边应该是一个字符串格式的属性名
 * 如果不添加字符串则认为是一个变量,会将变量存储的值取出在检测
 * 如果变量的值和对象的属性名一致也会返回true
 */
```

### instanceof

- 检测一个构造函数的`property`属性是否出现在某一个实例中
- 如果检测的是一个表达式,那么会先将表达式的值计算出再做检测

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  //=>创建一个构造函数
}

var son = new Person("平野绫", 20);
//=>构建一个实例

son instanceof Person;
//=>true,可以用来检测一个实例是不是某一个构造函数的实例
```

### constructor

所有的对象都会从它的原型中继承这个属性,`constructor`指向构造出这个对象的构造函数

```javascript
function Peroson(name, age) {
  this.name = name;
  this.age = age;
}
let son = new Person("平野绫", 20);
son.constructor === Person;
//=>true;
```

### hasOwnProperty

- 检测一个属性是否是自身拥有,
- 自身不存在原型中存在也会返回`false`
- 需要检测的属性书写为字符串格式,如果是变量则会取出变量的值进行检测
- js 并没有保护`hasOwnProperty`关键字,如果使用则会返回意想不到的结果

```javascript
let obj = { name: "平野绫", age: 20 };
obj.hasOwnProperty("name");
//=>true;
obj.hasOwnProperty("toString");
//=>false,原型中拥有,自身没有

let obj2 = {
  hasOwnProperty: function () {
    return fasle;
  },
  aeg: 20,
};
obj
  .hasOwnProperty("age")(
    //=>false,调用的是obj的hasOwnProperty属性,并不是真正的

    {}
  )
  .hasOwnProperty.call(obj, "sex");
//=>true,使用原型中的,并使用call将this改成obj

Object.hasOwnProperty.call(obj, "sex");
//=>效果一样
```

## 数据类型转换

### 数字

1. `Number()`
2. `parseInt()`,
3. `parseFloat()`

- `Number()`在遇到`.`以外的任意非法字符会转换为`NaN`,可以转换小数
- `parseInt()`首位遇到非法字符是转换为`NaN`,只转换整数
- `parseFloat()`首位遇到非法字符转换为`NaN`,可以转换小数

> 引用数类型在进行转换的时候会先使用`toString()`方法转换为字符串后在进行数字的转换,

| 类型      | 结果 |
| :-------- | :--- |
| ''        | 0    |
| null      | 0    |
| false     | 0    |
| true      | 1    |
| undefined | NaN  |

```javascript
Number("1");
//=> 1
Number("1.1");
//=>1.1
Number("1px");
//=>NaN
Number([10]);
//=>10,数组只有一项可以转换
Number([10, 20]);
//=>NaN,无法转换拥有多个数组项的数组
Number({});
//=>NaN;无法转换引用数据类型
```

> `parseInt`和`parseFloat`都是从左往右依次转换,在遇到第一个非法字符时将前面的直接返回,如果第一个就是非法字符,那么结果就是`NaN`,`parseInt`遇到`.`也会返回`parseFloat`则不会

```javascript
parseInt("1px");
//=>1
parseInt("1.1");
//=>1;会将小数部分过滤
parseInt([10]);
//=>10
parseInt([10, 20]);
//=>10,多项数组只会转换第一位
parseInt("x199");
//=>NaN,第一位是非法字符时无法成功转换
```

```javascript
parseFloat("1.1");
//=>1.1;可以转换小数
parseFloat([10, 20]);
//=>10;只转换第一位
```

> 在进行数学运算或者是`==`比较时,非数字类型会被默认的基于`Number()`方法进行数字转换

### 字符串

- 进行字符串拼接的时候,会默认将非字符串类型转换为字符串
- 手动调用`toString`,`join`,`toFixed`等方法的时候
- 除了对象以外都是直接将字面量转换为字符串

```javascript
[10, 20, 30] + "";
//=>'10,20,30'

({ age: 1 } + "");
//=>'[object Object]'

[] + "";
//=>''
```

### 布尔

- 使用`!`,`!!`,'Boolean()'进行转换

1. `''`
2. `null`
3. `undefined`
4. `0`
5. `NaN`

> 除上述以外转换为`false`,其余都为`true`

### 细节

两个值进行`==`比较时,都会将非数字类型的值转换为数字类型在进行比较

| 表达式       | 转换过程 | 结果  |
| :----------- | :------- | :---- |
| 1==true      | 1==1     | true  |
| 1==false     | 1==0     | false |
| 2==true      | 2==1     | false |
| \[ ]==true   | 0==1     | false |
| !\[ ]==true  | 0==1     | false |
| \[ ]==false  | 0==0     | true  |
| !\[ ]==false | 0==0     | true  |

## 输出语句

在 js 中所有的输出语句都是有宿主环境提供的

#### alert

把内容以弹框的方式在浏览器中输出，如果输出的值是一个表达式则会将表达式的值计算出之后再进行输出,被输出的值会被使用`toString()`转换为字符串

```javascript
alert(1);
//=> '1'
alert(1 + 1);
//=> ‘2’
//=>先计算值，在输出，

alert("");
//=>空字符串不会输出任何内容

alert([]);
//=>不会输出人任何内容，空数组转换后内容为空

alert({});
//=>[object Object]
/**
 * alert在对内容进行输出的时候会将内容通过toString()进行转换，
 * 无论内容的数据类型是什么，都是进行转换，
 * 引用数组类型在进行转换的时候会使用原型链中的toString()进行转换，
 * 普通对象会使用Object的toString方法，这个方法默认的结果就是输出值的类型，而不是转换后的结果
 * 数组对象，时间对象等等则可以对值正常的输出，那时因为他们原型链中的toString
 * 被重写了
 */
```

#### confirm

和`alert`的用法是一致的，只不过会增加确定和取消两个按钮,根据用户点击按钮的不同，会返回一个布尔值,同时也会对输出的值进行转换

```javascript
var flag = confirm("是否退出浏览器");
//=>点击确定返回true
//=>点击取消返回false
```

#### prompt

可以在弹框内输如内容，输出的内容为提示信息，会将用户输入的值作为返回值

```javascript
var test = prompt("提示信息");
//=>用户输入的内容就是test变量的值
```

#### console

在浏览器的控制台输出内容

- console.log()打印出需要打印的信息
- console.dir()更加详细的打印出信息

## 运算符

在 js 中拥有许多的运算符,同一个运算符拥有不同的功能,出现的位置不同,运算符的功能也会不同

### 数学运算符

| 运算符 | 含义   |
| :----- | :----- |
| +      | 加 /正 |
| -      | 减 /负 |
| \*     | 乘     |
| /      | 除     |
| %      | 取余   |
| ++     | 递增   |
| --     | 递减   |

- 在数学运算过程中会将非数字类型通过`Number()`方法转换为数字类型再做运算
- 非数字类型无法转换为有效的数字时运算的结果就是`NaN`
- `NaN`虽然是数字类型,但是任何数字和它做运算结果都是`NaN`
- 对象类型会先使用`toString()`方法转换为字符串然后再通过`Number()`方法转换为数字

**以上规则不适用于`+`运算**

```javascript
1 + 2;
//=>3
1 + true;
//=2
1 + undefined;
//NaN,undefined无法正确的转换为有效数字

1 + null;
//=>1,

//=>对象类型无法进行正常的数学运算
1 + {};
//=>'1[object Object]'
1 + [10];
//=>'110'
1 + [];
//=>'1'

1 + "1";
/**
 * '11'
 * 字符串11,只要是做+运算时,只要有一边出现字符串
 * 无论另一边是什么数据类型,都是单纯的字符串拼接
 * 不再是数学运算,出现引用数据类型也无法进行数学运算
 */
```

> 求余`%`是一个数除以另外一个数的整型余数,如果被除数大于被除数的话会直接返回除数

```javascript
3 % 2;
//=>1,整数除尽后剩余的数字
3 % 4;
//=>3小于被除数时直接返回除数
8 % 4;
//=>0,可以除尽就没有余数,结果就是0
```

> `+`和`-`除了作用与数学运算之外,还有正负数的作用,同时也会默认的将非数字类型转换为数字类型,

- `-`成功转换后的都是负数
- `+`成功转换后的都是正数
- 无法成功转换的返回`NaN`
- 转换并不会改变原有的数值,表达式会返回转换后的值

```javascript
var num = "2";
-num;
//=>-2,将字符串转换为数字-2
+num;
//=>2,将字符串转换为数字2

var st = "3.14";
+st;
//=>3.14,可以成功转换小数

var obj = {};
+obj;
//=>NaN,对象无法成功转换为数字

var arr = [10];
+arr;
//=>10,数字
//=>如果数组只有一个数组项,并且可以成功转换为数字类型时,仍然有效
```

**递增和递减拥有同样的运算规则**

- `++`分为前递增和后递增,运算符在前为前递增,运算符在后为后递增
- 前递增会使当前运算的数字立即增加 1,
- 后递增会在表达式运算结束后增加 1,
- 字符串可以成功转换为数字类型时也可以递增,无法转换为数字类型时递增为`NaN`

```javascript
var num = 1;
num++;
/**
 * num++这个表达式在运算结束之前num都不会递增1
 * 只有当表达式运行结束后才会使num+1;
 * 可以理解为num++这个表达式的返回值就是需要递增的原数字
 * console.log(num++)
 * //=>1,表达式运算没有结束,
 * console.log(num)
 * //=>2,表达式运算结束后递增
 */

++num;
/**
 * console.log(++num)
 * //=>3
 * console.log(num)
 * //=>3
 * 前递增会立即将原有的数字递增1,
 * 不需要等到表达式运算结束
 */
```

### 逻辑运算符

| 运算符 | 含义   |
| :----- | :----- |
| &&     | 与     |
| \|\|   | 或     |
| !      | 非     |
| !!     | 双重非 |

逻辑或和逻辑与都是短路运算符,存在多个表达式时只要有一个表达式符合他们的规则就不在运算其他的表达式,逻辑与的优先级要大于逻辑或

- 在逻辑与运算符中第一个参数或者是表达是的结果是`false`时就会直接返回
- 如果第一个为`true`,则直接返回第二个,不会进行运算
- 在判断体中逻辑与的两边的条件都必须满足才会进入判断体
- 在非判断体中可以将逻辑与理解为寻找`false`,左边为`false`直接返回

```javascript
var test = 1;
var test2 = false;
var test3 = test && test2;
/**
 * 赋值语句中的逻辑与
 * 如果test转化为布尔值时false,那么test3的值就是test的值
 * 如果test转化内为布尔值时true,那么test3的值就是test2的值
 */

if (test && test2) {
  /**
   * 只有在test和test2的值都为true的时候才可以进入判断体
   */
}

//=>有时候也可以用于判断一个函数是否传递了回调函数
function test(callback) {
  callback && callback();
  /**
   * 如果callback传递的是一个函数,那么转换为布尔值就是true
   * 为true时就会执行逻辑与右边的表达式,即是执行这个回调函数
   *
   * 并不严谨的写法,如果函数内传递的不是一个回调函数,
   * 那么程序会直接出错,Uncaught TypeError:callback is not a function
   */

  if (typeof callback === "function") {
    //=>严谨的写法,只有当callback是一个回调函数时才会执行
  }
}
```

- 在逻辑或运算符中第一个参数或者表达式转换为`false`时会直接返回第二个结果
- 如果第一个是`true`则直接返回第一个,就会停止运算
- 在判断体中只要有一个是`true`就会进入判断体
- 在非判断中可以将逻辑或理解为寻找`true`,左边为`true`直接返回,

```javascript
var test = "1" || 0;
/**
 * 左边的值或表达式转换为布尔值是true
 * 所以直接将'1'赋值给test
 * 右边的表达式将不会运算
 */

if (test || test2) {
  /**
   * 只要时test转换为布尔值时是true
   * 不管test2存不存在都可以进入判断体
   */
}

function test(x) {
  x = x || 0;
  /**
   * 如果传递了参数则直接将参数的值赋值给x
   * 没有传递参数就将x赋值为0
   * 不严谨的写法,如果传递的参数转换为布尔值为false
   * 的时候,仍然会被赋值为0
   */

  if (typeof x === "undefined") {
    x = 0;
    /**
     * 严谨的写法,x没有接收到实参或者实参是undefined
     * 的时候才会进入判断体,x才会被赋值为0
     */
  }
}
```

> 逻辑非可以将布尔值进行取反,同时也会将非布尔类型转换为布尔类型,双重非也会将数据类型进行转换,但是不会取反(取反两次就是原有值),可以使用双重非将一个数据转换为布尔类型

```javascript
!0;
//=>true

!!0;
//=>false
```

### 比较运算符

| 运算符 | 含义     |
| :----- | :------- |
| >      | 大于     |
| <      | 小于     |
| >=     | 大于等于 |
| <=     | 小于等于 |
| ==     | 相等     |
| !=     | 不相等   |
| ===    | 全等     |
| !==    | 不全等   |

- 比较运算的表达式都会返回一个布尔值用以表示比较结果
- 两边都是字符串的时候比较的时字符串的字符编码
- 只要有一个不是字符串,就会将两边的值都转换为数字类型进行比较
- 两边都是对象,比较的是对象的内存地址是否相同,
- `null`和`undefined`直接相等,但是不全等
- `NaN`与任何数字比较都会返回`false`,包括自身
- `Infinity`和`-Infinity`只和自身相等
- `0`和`-0`是相等的

**以上规则不适用于`===`和`!==`**

```javascript
1 > 2;
//=>true
1 < 1;
//=>false

1 >= "1";
//=>true,大于或等于都会返回true

1 == "1";
//=>true,自动将字符串转换为数字类型,比较转换后的值

1 != "2";
//=>false

var obj = {};
var obj2 = {};
obj == obj2;
//=>false,两个对象的内存地址并不相同

var obj = {};
var obj2 = obj;
obj == obj2;
//=>true;两个对象的内存地址相同

null == undefined;
//=>true,不严格相等
null === undefined;
//=>false
```

- `===`和`!==`在进行比较的时候并不会转换比较值的数据类型
- 而是直接以数据的原有类型直接进行比较
- 如果数据类型不同,即使转换后的值是一样的,也会返回`false`

```javascript
1 === "1";
//=>false,全等会比较数据类型,不会进行转换

1 !== "1";
//=>true,数据类型不同

var obj = {};
var obj2 = obj;
obj === obj2;
//=>true;全等比较只要是内存地址相同也会返回true
```

### 条件运算符

条件运算符也可以称作是三元运算符,是 js 中唯一一个可以使用三个操作数的运算符,可以将三元运算符看作是简单的判断语句

条件表达式 ? `true`返回值 : `false`返回值;

- 当条件表达式的值转化为布尔值是`true`的时候就会直接返回第一个
- 如果值是`false`则返回第二个
- 如果希望三元运算符中的某一不部分不做任何的处理,使用`null`或`undefined`占位即可

```javascript
var num = 10;
num >= 10 ? num++ : num--;
//=>num大于或者是等于10的时候num就递增1,否则就递减1

//=>三元运算符可以嵌套使用,但并不建议嵌套使用
num >= 10 ? (num <= 20 ? (num += 2) : num--) : num + 2;
```

### 解构赋值

结构赋值是 ES6 中新增加的一种 js 表达式,可以将对象或者是数组中的值取出赋值给表达式左边的变量

- 解构赋值也可以克隆数组,克隆的数组和原数组并不在同一内存地址,像个数组不相等
- 左边的赋值变量数量和右边的结构出值的数量不相等时会将前面的值赋值给变量,剩余的值不做处理

```javascript
var arr = [10, 20, 30, 40, 50];
var newArr = [...arr];
/**
 * var newArr = arr;
 * 两个赋值语句的结构是一样的
 * 但是通过结构赋值克隆的数组和原有数组
 * 并不处在同一内存地址中,
 *
 * 后者只是直接将原数组的内地地址克隆给新的数组
 * 原数组或者新数组只要有一个改变,另一个也会跟着改变
 */

var newArr = [...arr, 60, 70];
/**
 * 克隆数组时也可以添加新的值
 * 根据添加值的位置决定在新数组中的位置
 * 如果添加值在解构赋值之前,
 * 在新数组中添加值也会在解构赋值之前
 */

var [a, b] = arr;
/**
 * a = 10;
 * b = 20;
 * 只会将数组的前两位的值赋值给左边的变量
 * 剩余的数组项不做任何处理
 */
```

- 为防止结构出的值`undefined`,可以给赋值的变量添加默认值,
- 解构赋值可以简单将两个变量的值交换,不需要第三个临时变量
- 结构赋值也可以过滤掉不需要的部分

```javascript
var arr = [10, "", undefined, null, false];
var [a = 1, b = 2, c = 3, d = 4, e = 5, f = 6] = arr;
/**
 * 运算后的结果 :
 * a = 10;
 * b = "";
 * c = 3;
 * d = null;
 * e = false;
 * f = 6;
 *
 * 只有当值是undefined或者没有接收到值时才会使用默认值
 * 接收到undefined之外的任何值默认值都不会生效
 */

var a = 10;
var b = 20;
[a, b] = [b, a];
/**
 * 最简单的方法交换两个变量的值
 *
 * var c = a + b;
 * a = c - a;
 * b = c - b;
 * 使用第三个临时变量交换连个变量的值
 */

var arr = [10, 20, 30];
var [a, , b] = arr;
/**
 * a = 10;
 * b = 30;
 * 需要过滤的部分使用 , 隔开即可
 * 过滤几个数值书写几个 , 即可
 * 不过这并不经常使用
 */
```

- 当结构时也可以使用剩余模式,将剩余的部分都赋值给一个变量
- 使用剩余模式时,最后一个赋值变量之后不允许出现任何变量,出现`,`也会报错

```javascript
var arr = [10, 20, 30, 40, 50];
var [a, b, ...c] = arr;
/**
 * a = 10;
 * b = 20 ;
 * c = [30,40,50];
 *
 * 将数组前面的值合理分配后,将剩余的数组项赋值给一个变量
 * 使用剩余模式赋值的变量一定是一个数组,
 * 即使是只接收到一个值,
 */
```

- 结构一个对象时,左边的赋值变量需要与右边结构的对象的属性名一致,如果名称不一致,那么将不会获得人任何值,
- 对象的结构与赋值变量的书写顺序没有任何关系,对象的解构赋值匹配的规则是根据对象的属性名与赋值变量名是否一致
- 对象解构时会查找原型链,自身没有的属性获取原型中查找

```javascript
var obj = { name: "平野绫", age: 20, sex: "女" };
var { name, age, sex } = obj;
/**
 * name:'平野绫',
 * age:20,
 * sex:'女'
 * 即使将name,age,sex他们的位置调换
 * 他们接收到的值也不会有任何变化
 */
```

- 对象的结构赋值也可以设置默认值
- 同时对象的结构赋值也可以设置接收变量的别名

```javascript
var obj = { a: 1, c: 3 };
var { a = 4, b = 5, c = 6 };
/**
 * a:1,
 * b:5,
 * c:3
 * 只有当对象的属性值时undefined或者不存在时
 * 设置的默认值才会生效
 */

var obj = { a: 1, b: 2, c: 3 };
var { a: aa, b: bb, c: cc } = obj;
//=>设置别名之后只可以使用别名访问获取到的值

var obj = { a: 1, c: 3 };
var { a: aa = 4, b: bb = 5, c: cc = 6 };
/**
 * 起别名的同时设置默认值
 * aa:1,
 * bb:5,
 * cc:3
 */

var obj = { name: "平野绫", age: 20 };
var { name, age, toString } = obj;
//=>toString可以获取到原型中的值
```

> 当需要赋值的变量已经提前申请了之后,如果进行结构赋值需要使用`()`包裹起来,如果不是用`()`进行包裹,js 将不会认为这是一个表达式,而是会将左边认为是一个独立的代码块,同时你的上一个语句执行完毕之后需要使用`;`进行分割,否则他有可能会被认为是一个函数调用

```javascript
var a,b;
var obj = {a:1,b:2};

{a,b} = obj;
//=>报错:Uncaught SyntaxError: Unexpected token '='

({a,b} = obj);
//=>正确的写法
```

- 在函数中可以替代`arguments`,同时解构赋值接收到是一个真数组,并不是伪数组
- 如果传递的是一个对象或者时数组时也可以直接解构
- 在函数中如果结构的是对象需要使用`{}`包裹起来,否则只有第一个会获取到实参,其余都是`undefined`
- 如果不进行包裹就不是结构赋值,而是单纯的传递参数
- 数组需要使用`[]`进行包裹

```javascript
function test(...arr) {
  console.log(arr);
  /**
   *  获取到传递的全部实参,
   *  同时arr是一个真数组,可以使用数组的所有方法
   */
}
test(10, 20, 30);

function test({ name, aeg, sex }) {
  console.log(name, age, sex);
  /**
   * name:'平野绫',
   * age:20,
   * sex:'女'
   */
}
test({ name: "平野绫", age: 20, sex: "女" });

function test([a, b, ...c]) {
  console.log(a, b, c);
  /**
   *  a = 1,
   *  b = 2,
   *  c = [3,4,5,6]
   */
}
test([1, 2, 3, 4, 5, 6]);
```

### 细节

复合赋值运算符

| 语法 | 含义   |
| :--- | :----- |
| +=   | 加等于 |
| -=   | 减等于 |
| \*=  | 乘等于 |
| /=   | 除等于 |
| %=   | 余等于 |
| \*\* | 幂等于 |

```javascript
var a = 3;
a += 4;
/**
 * a = 7;
 * 等价于:
 * a = a + 4
 * 其余符合运算符语法相同
 */
```

- 运算符拥有优先级,即使是相同的运算符法使用的位置不同,优先级和运算规则也会不一样
- 当不清楚运算符的优先级时,可以使用`()`将其包裹起来,因为它的优先级是最高的

数字越大优先级越高

![nvOVN4.png](https://s2.ax1x.com/2019/09/21/nvOVN4.png)

![nvOkHU.png](https://s2.ax1x.com/2019/09/21/nvOkHU.png)

![nvOiuV.png](https://s2.ax1x.com/2019/09/21/nvOiuV.png)

## 控制语句

### 判断语句

> 根据判断条件来执行不同的语句,

```javascript
if (num > 100) {
  //=>条件为true执行
} else if (num < 100) {
  //=>如果上述条件为false,继续判断
  //=>如果上述条件为true,则会立即停止整个判断语句
} else {
  //=>所有判断条件都不通过时,直接执行
}
```

> 可以值书写一个`if`,而不书写其他的判断语句,这样只会在判断条件为`true`的时候执行,其余情况都不执行

```javascript
if (num >= 10) {
  //=>num大于等于10的进入判断体
}
//=>不书写其他判断语句,只在条件为true时执行
```

**不要直接将引用类型作为判断条件,因为引用类型转换为布尔值永远是`true`**

```javascript
let obj = { a: false };

if (obj) {
  //=>判断条件如果是一个引用类型的话,那么条件永远为真
}

if (obj.a) {
  //=>使用对象的属性是可取的,只有当对象的属性转换为布尔值是true时才会进入判断体
}
```

> `switch case`是 js 中的另一个判断语句,

- 每一个`case`子语句后面都要书写`break`关键字,如果没有则会从匹配项开始将后面的语句全部执行,无论条件是否匹配
- `case`子语句在匹配时是基于`===`进行比较,不会对比较的值进行类型转换

```javascript
if (num === 10) {
} else if (num === 5) {
} else {
}

//=>改写成switch语句

switch (num) {
  case 10:
    //=>匹配时执行
    break;
  case 5:
    //=>匹配时执行
    break;
  default:
  //=>没有匹配项时执行
}
```

### 循环语句

> 根据设定的条件重复的执行一些语句,如果条件设置不当则会造成死循环(无限循环),造成浏览器崩溃

循环语句应该拥有`初始表达式`,`循环条件`,`更新表达式`这三个要素,每一次的循环都会对`循环条件`和`更新表达式`进行执行,只有当`循环条件`返回`true`时才会循环

执行步骤

1. 初始化表达式,表达式可以是一个变量声明,也可以是一个复杂的表达式,初始表达式只会执行一次
2. 判断循环条件,为`true`时继续执行其他步骤,为`false`时直接终止循环
3. 执行循环语句,遇到`continue`关键字会直接执行更新表达式,遇到`break`关键字终止循环
4. 执行更新表达式,
5. 重复执行步骤 2~4

```javascript
for (var i = 0; i < 10; i++) {
  /**
   * var i = 0;  初始表达式
   * i < 10;     循环条件
   * i++;        更新表达式
   */
}
```

> `while`循环语句同样需要三个条件,只要条件为`true`就会一直执行

```javascript
let num = 4;
//=>初始表达式
while (num < 4) {
  //=>判断条件
  num--;
  /**
   * 更新表达式
   * while循环语句很容易忘记书写更新表达式
   * 如果没有书写则会造成死循环
   */
}
```

> `do/while`循环语句第一次执行并不会判断循环条件,只有在第一次循环执行完毕之后,在进行判断,根据判断条件的返回值决定是否继续循环

```javascript
let num = 5;
//=>初始表达式
do {
  num++;
  //=>更新表达式
} while (num < 5);
//=>循环条件
```

`while`根据判断条件可能一次也不会执行,而`do/while`无论判断条件是否为`true`,都会执行一次

`for/in`循环只要是对对象进行遍历,虽说也可以遍历数组,但是由于其查找机制是无需查找,因此遍历出的数组元素可能会于原数组的顺序不同,可以使用普通的`for`循环或者 ES6 中新增加的`forEach`方法进行遍历

- 遍历对象时也会查找出原型中的属性或者方法
- 遍历数组时是无序遍历,有时候遍历出的元素顺序并不准确

```javascript
let obj = { name: "平野绫", age: 20 };
for (let key in obj) {
  console.log(key);
  //=>输出对象的每一个属性名
  console.log(obj[key]);
  //=>输出对象的每一个属性值
  if (obj.hasOwnProperty(key)) {
    /**
     * for in 在遍历属性的时候也会遍历出原型中的属性
     * 使用hasOwnProperty可以过滤掉原型中的属性
     */
  }
}
```

> `for/of`是 ES6 中新增加的一种遍历方式,只要是当前的数据结构上部署了`Symbol.iterator`就可以进行遍历,`for/of`的本质就是调用数据结构上的`Symbol.iterator`函数产生的遍历器进行遍历



### 关键字

1 `break`关键字会直接终止循环,无论判断条件是否满足都会终止 2
`continue`关键字会跳过当次的循环,会直接执行更新表达式,然后在根据判断条件的返回值决定是否继续进行下一次的循环

```javascript
for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
    //=>i为偶数的时候跳过档次循环
  } else if (i === 8) {
    break;
    //=>i===5的时候终止循环语句,不会在进行循环
  }
  console.log(i);
  //=>输出8以下的所有奇数
}
```

去除数组重复项

```javascript
let arr = [1,2,1,21,2,1,1,112,15,2,1];
let obj = {};
for(var i = 0; i < arr.length; i++){
  let key = arr[i];
  if(obj[key]){
    arr[i] = arr[arr.length-1];
    arr.length--;
    i--;
    continue;
  }
  obj[key] = key;
}
/**
 * 利用对象属性名不能重复的机制，循环遍历数组，
 * 遍历出重复项，就用数组的最后一项和重复项的
 * 位置替换，然后删除最后一项
 * 不会造成数组塌陷，但是会打乱数组的排序
 **/
```

```javascript
let arr = [1,2,1,21,2,1,1,112,15,2,1];
let obj = {};
for(var i = 0; i < arr.length; i++){
  let key = arr[i];
  if(obj[key]){
    arr.splice(i,1);
    i--;
    continue;
  }
  obj[key] = key;
}
/**
 * 循环遍历重复项，遍历出直接删除
 * 会造成数组塌陷，但是数组项的顺序不会改变
 **/
```

## 标准库

js 的标准库方法大部分都拥有返回值，根据返回值可以实现链式调用

```javascript
let arr = [10, 20, 30, 40];
arr
  .sort(function (a, b) {
    return a - b;
  })
  .reverse()
  .pop();
//=>数组排序 >  反转 > 删除最后一项
```

### Array

#### push

- 作用:向数组的末尾添加新的元素
- 参数:追加的内容(一个或多个任意数据类型)
- 返回值:新增后数组的长度
- 原有数组改变

```javascript
let arr = [10, 20, 30];
arr.push(10, null);
//=>追加两个不同类型的元素,返回数组的长度
```

#### pop

- 作用:删除数组的最后一项
- 参数:无
- 返回值:被删除的数组元素
- 原有数组改变

```javascript
var arr = [10, 20, 30];
arr.pop();
//=>无参数,返回30
```

#### unshift

- 作用:在数组最开始的位置添加新的数组
- 参数:要添加的内容(一到多个任意类型)
- 返回:新增后数组的长度
- 原有数组改变

```javascript
let arr = [10, 20, 30];
arr.unshift("20", undefined);
//=>返回数组长度
```

#### shift

- 作用:删除数组最开始的一项
- 参数:无
- 返回值:被删除的数组项
- 原有数组改变

```javascript
let arr = [10, 20, 30];
arr.shift();
//=>返回10,所有的数组项的索引值都会-1
```

#### splice

- 作用:删除,添加,修改指定位置的数组项
- 参数:起始位置,删除数量(可选),添加项(可选)
- 返回值:删除的数组先形成的数组,没删除返回空数组
- 原有数组改变

删除

```javascript
let arr = [10, 20, 30, 40, 50];
arr.splice(1, 3);
/**
 * 返回:[20,30,40]
 * 如果只传递起始位置或者结束位置大于数组的总长度
 * 则会从数组的起始位置删除至数组的最后一项
 */

arr.splice(arr.length - 1);
//=>删除数组的最后一项

arr.splice(4);
//=>如果其实位置和数组的length属性一直,将不会删除任何数据

arr.splice(0, "q");
//=>如果结束位置参数不合法也不会报错,但是不会对数组进行任何操作,同时返回一个空数组
```

新增

```javascript
let arr = [10, 20, 30];
arr.splice(arr.length, 0, 40);
//=>项数组的最后以为添加新的元素,第二个参数不能省略,否则添加项会被误认为是结束位置

arr.splice(0, 0, 1, 2, 3);
//=>向数组的起始位置添加新的数组项

arr.splice(2, 0, 21, 22, 23);
/**
 * 根据起始位置的不同,向数组的任意位置添加新的数组项
 * 在索引为2的数组项前面添加新的数组项
 */
```

修改

```javascript
let arr = [10, 20, 30, 40];
arr.splice(2, 3, 60, 80);
/**
 * 通过删除指定位置的数组项
 * 然后将新增的数组项进行添加
 */
```

#### reverse

- 作用:将数组的顺序进行颠倒
- 参数:无
- 返回值:颠倒后的数组
- 原有数组改变

```javascript
let arr = [10, 20, 30, 40];
arr.reverse();
//=>[40,30,20,10]

arr.reverse().reverse();
//=>可以连续调用两次,颠倒两次的数组则不会发生变化
```

#### sort

- 作用:数组排序
- 参数:无/回调函数
- 返回值:排序后的新数组
- 原有数组改变

如果不传递参数,`sort`的默认排序方式是根据`Unicode`编码进行排序,(只能处理 10 以内的数组项,不包括 10)
可以传递一个回调函数来只当排序的规则

```javascript
let arr = [5, 2, 8, 6, 4, 3, 1, 9, 7];
arr.sort();
//=>[1,2,3,4,5,6,7,8,9]可以正确的排序

let arr = [5, 2, 8, 6, 4, 3, 1, 9, 7, 10, 11, 12, 13, 14];
arr.sort();
//=>[1,10,11,12,13,14,2,3,4,5,6,7,8,9]处理结果不正确
```

1. 回调函数拥有两个参数(通常会设置为 a 和 b)
2. `a`代表当前的数组项,`b`代表下一个数组项
3. 自定的排序方式根据回调函数的返回值进行排列
4. 返回大于或等于`1`的数字则 a 会被排列在 b 之前
5. 返回`0`则 a 和 b 的位置不变
6. 返回小于`1`的数字则 b 会排列在 a 之前

```javascript
let arr = [21, 3, 25, 15, 65, 78, 85];
arr.sort(function (a, b) {
  return a - b;
  /**
   * 升序排列数组,从小到大
   * a-b如果是大于或等于1的话
   * 说明a比b大,则a排列在b之前,位置不做交换
   * 如果等于0,说明两个大小一样,则不交换位置
   * 如果小于1的话则说明a比b小,
   * 则b排列在a之前
   */

  return b - a;
  //=>降序排列,从大到小
});
```

如果回调函数返回一个固定值,则不同的浏览器处理方式都是不同的

```javascript
let arr = [2, 15, 48, 8, 5, 156, 4];
arr.sort((a, b) => {
  return Math.floor(Math.random() * 5);
  /**
   * 在火狐浏览器中可以随机排列数组,
   * 谷歌浏览器中数组位置则是不变
   * 使用`webkit`内核的浏览器都不是改变
   */
});
```

#### slice

- 作用:从规定的数据区域进行数组项的浅拷贝
- 参数:起始位置(可选),结束位置(可选),没有参数则浅拷贝全部数组项
- 返回值:浅拷贝的数据形成的数组
- 原有数组不变

```javascript
let arr = [10, 20, 30, 40, 50];
arr.slice(2, 4);
//=>[30,40],不会浅拷贝结束位置上的数组项

arr.slice();
//=>浅拷贝整个数组,新旧数组并不相等

arr.slice(2);
//=>只书写一个参数默认是起始位置,会一直浅拷贝至数组的最后一项

arr.slice(10);
//=>起始位置超过最大索引值,返回一个空数组

arr.slice(-4, -2);
//=>支持负数,数组的length + 参数 = 操作的位置
```

#### concat

- 作用:将多个数组(或值)进行拼接
- 参数:需要拼接的数组或值
- 返回值:拼接后的数组
- 原有数组不变

拼接后的数组位置根据拼接时的顺序决定

```javascript
let arr = [10, 20],
  arr2 = [30, 40];
arr.concat(arr2);
//=>返回拼接后的数组

arr.concat(arr2, 50, 60);
//=>同时拼接数组和值
```

#### toString

- 作用:将数组转换为字符串
- 参数:无
- 返回值:转换后的字符串
- 原有数组不变

```javascript
let arr = [10, 20, 30, 40, 50];
arr.toString();
//=>返回转换后的数组,每一个数组元素之间也会使用,隔开
```

#### join

- 作用:将数组转换为字符串,并且指定数组项之间的连接符
- 参数:指定的连接符
- 返回值:转换后的字符串
- 原有数组不变

```javascript
let arr = [10, 20, 30, 40];
arr.join("+");
//=>将数组转换为字符串,并且以+隔开每一个数组项

arr.join("");
//=>转换后的数组项之间不使用任何符号隔开
```

#### map

- 作用：为每一个数组项调用一次回调函数，
- 参数：回调函数
- 返回值：操作后的新数组
- 原有数组不变

回调函数的参数

1. 当前的数组项
2. 当前数组项的索引
3. 操作的数组

`map`方法主要是在回调函数中操作数组的每一项，也可以直接操作数组本身，返回的新数组的数组项时回调函数`return`的值

```javascript
let arr = [10,20,30,40,50];
let newArr = arr.map(function(item,index,array){
  return item+index;
})
//=>将数组中所有的数组项和索引值相加
```

#### indexOf

- 作用:检测当前的数组行在数组中第一次出现的索引
- 参数:需要检测的数组项,起始的查找位置(可选
- 返回值:出现位置的索引值或-1
- 原有数组不变

```javascript
let arr = [10, 20, 30, 50, 60];
arr.indexOf(30);
//=>返回第一次出现的位置,存在相同的数组项时也只会返回第一次出现的索引值

arr.indexOf(100);
//=>没有对应的数组项时返回 -1

arr.indexOf(30, 10);
/**
 * 设置起始的查找位置,
 * 查找值在起始位置之前出现,不在起始位置后出现
 * 仍然返回 -1
 * 支持使用负数
 * 负数表示从数组末尾的第几个数组项开始查找
 * 如果负数的绝对值大于数组长度则整个数组都会被查找
 */

if (arr.indexOf(30) > -1) {
  //=>判断一个数组中是否存在某一个项
}
```

#### lastIndexOf

- 作用:检测数组项最数组中最后一次出现的位置,从数组末尾优先查找
- 参数:查找的数组,起始位置(可选)
- 返回值:索引值或-1 原有数组不变
- 原有数组不变

```javascript
let arr = [10, 20, 30, 40, 50];
arr.lastIndexOf(30);
//=>返回对应的索引值

arr.lastIndexOf(100);
//=>不存在返会-1

arr.lastIndexOf(30, 2);
/**
 * 从索引值为2的位置开始向左查找
 * 设置查找的起始位置,从数组末尾向前查找,默认的起始位置时arr.length-1
 * 如果起始位置大于或者等于数组的总长度,则整个数组都会被查找
 *
 * 支持负数  > 数组的length + 负数 = 起始位置
 * 如果负数的绝对值大于数组长度则不会查找,直接返回 -1
 */
```

#### Array.from

- 作用:将类数组转换为真数组
- 参数:需要转换的类数组
- 返回值:转换后的真数组
- 原有类数组不变

`Array.from`是一个静态方法,无法使用数组实例调用,只能原型使用,

```javascript
function test() {
  Array.from(arguments);
  //=>将arguments转换为真数组
}

let el = document.getElementsByClassName("ceshi");
//=>将元素集合转换为真数组
```

#### forEach

- 作用:对数组的每一个元素都执行一次回调函数,
- 参数:回调函数
- 返回值:undefined
- 原有数组不变

```javascript
let arr = [10, 20, 30, 40, 50, 60];
arr.forEach(function (currentValue, index, arr, thisArr) {
  /**
   * currentValue  == 当前的数组项
   * index  === 数组项的索引
   * arr  === 操作的数组
   * thisArr  === 函数中的this指向
   *
   * 通常用来遍历数组
   */
});
```

`forEach`会在遍历的过程中产生闭包

```javascript
let nodeList = document.getElementsByClassName("ceshi");
//=>根据class类名获取页面中的标签
Array.from(nodelist).forEach(function (el, index) {
  //=>将获取到的类数组转换为数组
  el.onclick = function () {
    //=>为每一个标签设置点击事件
    console.log(index);
    //=>每一次点击输出对应标签的索引值
  };
});

//=>使用普通的for循环绑定会无法获取到正确的值,因为没有产生闭包
for (var i = 0; i < nodeList.length; i++) {
  nodeList[i].onclick = function () {
    console.log(i);
    /**
     * 可以正确的绑定点击时间,但是无法获取到正确的索引值
     * 因为在点击时间出发的时候for循环已经运行结束,
     * i的值就已经固定了
     *
     * 在普通for循环中使用let申请变量也会产生闭包
     * 就可以获取到正确的值
     */
  };
}
```

#### filter

- 作用:筛选数组中的每一项
- 参数:回调函数
- 返回值:符合规则的数组项形成的数组
- 原有数组不变

```javascript
let arr = [10, 20, 30, 40, 50];
arr.filter(function (currentValue, idnex, arr, thisArr) {
  /**
   * currentValue  === 当前的数组项
   * index   === 当前数组项的索引
   * arr   === 操作的数组
   * thisArr  === 回调函数中this的指向
   */

  return currentValue % 2 != 0;
  //=>获取数组中的奇数
});
```

### String

字符串的所有内置方法都不会改变原有的数据,同时字符串也拥有索引值，索引值从 0 开始，也可以通过索引值获取对应的字符

#### charAt

- 作用:根据索引获取只当位置的子 u 发
- 参数：索引值
- 返回值：索引位置对应的字符串

```javascript
let str = "123456";
str.charAt();
//=>不指定索引值返回字符串的第一个字符
str.charAt(3);
//=>4
str[4];
//=>4 同样可以获得对应的字符

/**
 * 使用数组的语法同样可以获取对应的字符
 * 但是如果索引值超出字符串最大长度
 * charAt会返回空字符串
 * 数组语法会返回undefined
 **/
```

#### indexOf

- 作用：获取特定字符在字符串中第一次出现的位置
- 参数：特定的字符串,查找的起始位置（可选）
- 返回值：特定字符串的索引

```javascript
let str = "123456";
str.indexOf(3);
//=>2
str.indexOf(7);
//=>-1 查找的字符不存在返回 -1
```

`indexOf`在查找的字符的时候是区分大小写的，同时也可以基于`indexOf`获取特定的字符在整个字符串中出现的次数

```javascript
let str = 'to be, or not to be, that is the question'
let count == 0;
let pos = str.indexOf('3');
while(pos !== -1){
  count++;
  pos = str.indexOf('e',pos+1)
}
console.log(count);
//=>4
```

#### lastIndexOf

- 作用：获取特定字符在字符串中最后一次出现的位置
- 参数：特定的字符，其实查找的位置（可选）
- 返回值：特定字符的索引

```javascript
let str = "1234356";
str.lastIndexOf("3");
//=>3
//=>lastIndexOf是从字符串的右边向左边开始查找
```

#### slice

- 作用：截取字符串
- 参数：起始索引，结束索引（不包含）
- 返回值：截取的字符串

字符串的`slice`和数组的`slice`方法细节都是一样的

1. 不书写参数即截取整个字符串（克隆）
2. 省略第二个参数，会从起始位置一直截取至末尾
3. 参数支持负数

```javascript
let str = "123321";
str.slice(1, 3);
//=>'2,3'

str.slice();
//=>'123321'

str.slice(-4, -1);
//=>'332'
```

#### substring

- 作用：截取字符串
- 参数：起始索引，结束索引
- 返回值：截取的字符串

和`slice`的用法一致，但是参数不支持负数

1. 起始索引和结束索引一致，则会返回要给空字符串
2. 省略结束索引，则截取至末尾
3. 参数中出现`0`或者`NaN`都会被当作`0`
4. 任一参数大于字符串的最大长度，则就是字符串的最大长度
5. 结束索引大于起始索引，则会交换两个参数的位置

```javascript
let str = "123456789";
str.substring(2);
//=>'3456789'
str.substring(3, 8);
//=>'45678'
str.substring(9, 6);
//=>'789',会交换参数的位置
```

#### toUpperCase

- 作用：将字母转换为大写
- 参数：无
- 返回值：转换后的新字符串

```javascript
let str = "abcdef";
str.toUpperCase();
//=>'ABCEDEF'
//=>非字符串调用该方法会转换为字符串
```

#### toLowerCase

- 作用：将字符串转换为小写
- 参数：无
- 返回值：转换后的字符串

```javascript
let str = "ABCDEF";
str.toLowerCase();
//=>'abcdef'
```

将单词的首字母大写或者小写

```javascript
let str = "hello word";
let reg = /\b[a-z]/g;
str.replace(reg, function (item) {
  return item.toUpperCase();
});
//=>'Hello Word'
```

#### split

- 作用：将字符串按照指定的分割符进行拆分
- 参数：指定的分割符，限制分割的数量（可选）
- 返回值：拆分后的字符串形成的数组

`split`支持使用正则表达式作为分割的条件

```javascript
let str = "abc,bcd,edf";
str.split(",");
//=>['abc','bcd','edf'] 使用 ， 作为分割符进行拆分

str.split();
//=>将整个字符串作为数组的第一项然后返回

str.split(" ");
//=>['']
/**
 * 如果指定的分割符不存在于字符串当中
 * 则会将整个字符串作为数组的
 * 第一项然会返回
 * 没有指定分隔符，也会将整个字符串
 * 作为数组的第一项然后返回
 **/
```

`split`支持第二个参数，该参数用于限制返回的数组的长度，如果数组的长度超出限制的长度，就直接返回，不再继续截取

```javascript
let str = "a,b,c,d,e";
str.split(",", 2);
//=>['a','b']
//=>超出限制后将不会再进行截取
```

如果字符串为空，并不会返回一个空的数组，而是返回一个包含空字符串的的数组，如果字符串和分隔符都为空，则返回一个空的数组

```javascript
let str = "";
str.split(",");
//=>[''];数组项为空字符串

str.split();
//=>[];都为空就会返回一个空的数组
```

#### replace

- 作用：替换字符串中的内容
- 参数：替换的字符或正则对象，替换的内容
- 返回值：替换后的新字符串

通常在`replace`中都是使用正则对象作为查询的条件，如果直接使用原有字符作为查询条件，并不能完全的将一个字符串中所有的字符都进行替换，只会将第一次查询到的字符进行替换

```javascript
let str = "abababab";
str.replace("a", 1);
//=>'1bababab';只会将第一个a进行替换
```

如果查询条件使用的是正则对象，并且正则对象使用的是全局匹配模式，那么会将字符串中所有的匹配项对进行替换，同时第二个参数可以是一个函数，该函数中`return`出的值将作为替换值

```javascript
let str = "abababab";
let reg = /\a/g;
str.replace(reg, function () {
  return 2;
});
/**
 * 查询到字符串中所有匹配到的字符
 * 并将其替换为回调函数return的值
 * 没查询到一处匹配，回调函数都会被
 * 执行一次，如果正则没有使用全局模式
 * 那么只会替换掉第一个匹配项
 **/
```

1. 回调函数的第一个参数是匹配到的字符，可以在函数中进行操作
2. `return`的是一个引用数据类型，则会调用`toString`方法将其转换为字符串然后在进行替换
3. `return`一个空串则只会删除匹配项，并不会替换，`' '`空格字符串并不是空串
4. 回调函数中没有`return`任何值的时候将会使用`undefined`作为替换值

#### match

- 作用：利用正则检测字符串中是否拥有符合规则的字符
- 参数：正则对象
- 返回值：匹配的数组串形成的数组

1. 不传递参数则会直接返回一个包含空字符串的数组
2. 参数不是正则对象时，会隐士的使用`new RegExp(参数)`将其转换为正则对象
3. 参数是`Number`类型或者是纯数字时将会直接将参数放入数组中直接返回
4. 传入`undefined`也会返回`['']`,除此之外的非法参数都会返回`null`

```javascript
let str = "abc123bcd456";
str.match();
//=>['']

str.match("123");
//=>['123']

str.match(132);
//=>[123]

str.match(undefined);
//=>['']

str.match(null);
//=>null;

str.match(true);
//=>null

str.match("c1");
//=>null
```

1. 正则对象使用全局匹配模式则会查询到所有的的匹配项
2. 不使用全局匹配模式则只返回第一个匹配项，同时数组中包含捕获组

```javascript
let str = "123abc456bcd";
str.match(/\d+/);
//=>['123'],捕获组的input属性表示匹配的完整字符串

str.match(/\d+/g);
//=>['132','465']
```

#### includes

- 作用：判断一个字符串是否包含在另一个字符串中
- 参数：需要判断的字符串,起始的查询位置（可选）
- 返回值：布尔值

```javascript
let str = "to be, or not to be, that is the question";

str.includes("to");
//=>true

str.incluedes("To");
//=>false;区分大小写

str.includes("that i");
//=>true
```

#### endsWith

- 作用：判断字符串的结尾是否是给定的字符
- 参数：给定的字符
- 返回值：布尔值

```javascript
let str = "to be, or not to be, that is the question";
str.endsWith("question");
//=>true

str.endsWith("questioN");
//=>false 大小写敏感
```

##### startsWith

- 作用：判断字符串的开始是否是给定的字符
- 参数：给定的字符
- 返回值：布尔值

```javascript
let str = "to be, or not to be, that is the question";
str.startsWith("to");
//=>true

str.startsWith("To");
//=>false 区分大小写
```

#### padEnd

- 作用：在字符串的尾部填充给定的字符，以达到指定的长度
- 参数：填充字符串的长度,给定的字符
- 返回值：填充后的字符串

```javascript
let str = "123";
str.padEnd(6, "456");
//=>'123456'

str.padEnd(7, "456");
//=>'1234564',会重复填充以满足字符串的长度
```

#### padStart

- 作用：在字符串的起始填充给定的字符，以达到指定的长度
- 参数：填充字符串的长度,给定的字符
- 返回值：填充后的字符串

```javascript
let str = "123";
str.padStart(7, "456");
//=>'4564132'
```

#### repeat

- 作用：指定重读次数连接字符串
- 参数：重复的次数
- 返回值：连接后的新字符串

1. 参数为负数时会直接报错
2. 参数必须大于 1

```javascript
let str = "abc";
str.repeat(2);
//=>'abcabc'
```

#### trim

- 作用：去除字符串的首尾空格
- 参数：无
- 返回值：去除空格后的字符串

```javascript
let str = " foo  ";
str.trim();
//=>'foo'
```

格式化时间字符串

```javascript
~(function (pro) {
  pro.formatTime = function (template) {
    template = template || "{0}年{1}月{2}日 {3}时{4}分{5}秒";
    var ary = this.match(/\d+/g);
    template = template.replace(/\{(\d+)\}/g, function () {
      var n = arguments[1],
        val = ary[n] || "0";
      console.log(arguments);
      val < 10 ? (val = "0" + val) : null;
      return val;
    });
    return template;
  };
})(String.prototype);

//-------------

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

### Math

`Math`并不是一个构造函数，所以无法构造出实例，`Math`的所有方法都是静态方法，只能`Math`自身调用

#### abs

- 作用：取绝对值
- 参数：数字
- 返回值：参数的绝对值

非纯数字的字符串，`undefined`,不传递参数都会返回`NaN`

```javascript
Math.abs(10);
//=>10
Math.abs(-10);
//=>10
Math.abs("10");
///=>10
Math.abs(null);
//=>0
Math.abs();
//=>NaN
```

#### ceil

- 作用：向上取整
- 参数：取整的数字
- 返回值：取整后的数字

会默认使用`Number`方法将非数字类型转换为数字类型，无法成功转换的返回`NaN`

```javascript
Math.ceil(0.95);
//=>1
Math.ceil(7.004);
//=>8
Math.ceil(-7.004);
//=>-7
Math.ceil("1.x");
//=>NaN
```

#### floor

- 作用：向下取整
- 参数：取整的数字
- 返回值：取整后的数字

会默认使用`Number`方法将非数字类型转换为数字类型，无法成功转换的返回`NaN`

```javascript
Math.floor(7.9);
//=>7
Math.floor(-7.9);
//=>8
Math.floor("-1.x");
//=>NaN
```

#### round

- 作用：四舍五入
- 参数：计算的值
- 返回值：计算后的值

```javascript
Math.round(-10.5);
//=>-10
//=>负数的0.5并不会入而是舍，其余都是正常计算
```

#### max

- 作用：获取一组数字中的最大值
- 参数：多个数值
- 返回值：最大的数字

如果给定的数字中有一个非法数字或者无法使用`Number`转换为数字，就是直接返回`NaN`

```javascript
Math.max(10, 20, 30, 40);
//=>40

Math.max(10, "20", "21w");
//=>NaN
```

利用`Function`上的`apply`方法可以获取到数组中的最大值

```javascript
let arr = [10, 20, 30, 40];
Math.max.apply(null, arr);

Math.max(...arr);
//=>利用解构赋值将数组结构在一次传递，同样可以判断数组的最大值
```

`apply`接受两个参数，第一个是调用者的`this`指向，第二个是传递给调用者的参数，如果参数是一个数组，`apply`则会将数组拆分逐个传递，并不是直接将整个数组传递

#### min

和`max`使用方法一致，功能是获取最小值

#### random

- 作用：获取 0 -1 之间的伪随机小数，不包含 1
- 参数：无
- 返回值：伪随机小数

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

获取特定数值之间的伪随机数

```javascript
function getRandom(max, min) {
  return Math.floor(Math.radom() * (max + 1 - min) + min);
}
```

#### Date

使用`new`可以构造出一个时间实力，如果不使用`new`获取的就是一个字符串

1. 不传递参数，返回创建时间实例的时间
2. 传递至少两个参数，会根据参数返回对应的时间，第一个参数为 年 ， 第二个为 月 ，依次排序
3. 月份从 0 开始计算，12 月 即为 11 月

```javascript
new Date();
//=>Date Mon Apr 27 2020 16:32:56 GMT+0800 (中国标准时间)

new Date(2020, 04);
//=>Date Fri May 01 2020 00:00:00 GMT+0800 (中国标准时间)
```

#### getFullYear

- 作用：根据本地时间返回对应的年份
- 参数：无
- 返回值：对应的年份

`setFullYear`设置本地年份

```javascript
new Date().getFullYear();
//=>2020
```

#### getMonth()

- 作用：根据本地时间返回对应的月份（0-11）
- 参数：无
- 返回值：对应的月份

`setMonth`设置本地月份

```javascript
new Date().getMonth();
//=> 3
/**
 * 获取月份的时间应该加 1 以匹配本地时间
 * 设置月份的时间应该减 1 以匹配js时间
 **/
```

#### getDate

- 作用：根据本地时间获取一个月份中的第几天
- 参数：无
- 返回值：对应的月份天数

`setDate`设置本地天数

```javascript
new Date().getDate();
//=>27
```

#### getDay

- 作用：根据本地时间获取星期天数（0-6) 0 表示星期天
- 参数：无
- 返回值：对应的星期天数

`setDay`设置本地星期天数

```javascript
new Date().getDay();
```

#### getHours

- 作用：根据本地时间获取小时（0-23
- 参数：无
- 返回值：对应的小时

`setHours`设置对应的小时

```javascript
new Date().getHours();
```

#### getMinutes

- 作用：根据本地时间获取对应的分钟（0-59）
- 参数：无
- 返回值：对应的分钟

`setMiuntes`设置本地分钟

```javascript
new Date().getMinutes();
```

#### getSeconds

- 作用：根据本地时间获取对应的秒数（0-59）
- 参数：无
- 返回值：对应的秒数

`setSeconds`设置本地秒数

```javascript
new Date().getSeconds();
```

## 面向对象

js 是一门面向原型的编程语言，也叫做弱类型，但是 js 的核心是支持面向队形的变成思想，面向对象变成就是尽可能的让程序模仿人类的思维方式，

### 继承

js 的继承就是让子类拥有父类的属性或者方法

#### 原型继承

让字类的原型指向父类的实力

优点

1. 可以使用父类原型中所有的属性和方法
2. 继承时可以传递参数

缺点

1. 无法同时继承多个父类
2. 子类和父类公用一个原型，其中一个修改原型另一个也会改变

```javascript
function Father(x, y) {
  this.x = x;
  this.y = y;
}
//=>父类

function Son() {}
//=>字类

Father.prototype.z = 30;
//=>向父类的原型中添加一个属性

Son.prototype = new Father(10, 20);
//=>让子类的原型指向父类的实例，同时可以传递参数

let instance = new Son();
//=>创建一个字类的实例

instance.z;
//=>30;可以使用父类原型的属性

Father.prototype.z = 60;
console.log(instance.z);
//=>60；缺点就是一个改变另一个也会变化
```

#### 寄生组合

使用`Function`上的`call`方法将父类中的属性和方法添加到子类的属性中，同时使用`Object.create()`创建一个空对象，并且让这个空对象的`__proto__`指向父类的原型，

优点

1. 可以继承多个父类的属性和方法，但是只能继承一个原型
2. 继承的时候可以传递参数
3. 父类的属性并不是共享，一个修改不会影响到其他的

```javascript
function Father(x,y){
  this.x = x;
  this.y = y;
}
//=>父类

Father.prototype.z = 60;
//=>向父类的原型添加一个属性

function Son(){
  Father.call(this,10,20)
  /**
   * this === 字类的实例
   * 在字类中执行父类构造函数，并且使用
   * call方法将父类中的属性或者方法
   * 添加到字类的实例中，
   **/
}
//=>子类
Son.prototype = Object.create(Father.prototype);
//=>让子类的原型执行一个空对象，空对象的原型指向父类的原型


Son.prototype.constructor = Son;
//=>重定向子类实例的constructor属性，如果不重定向,constructor指向父类并不是子类

let instance = new Son();

instance.x;
//=>10
```

#### 循环拷贝

使用`in`运算符将父类中的所有属性和方法遍历出然后在赋值给子类的原型

优点：

1. 可以继承多个父类
2. 继承时可以传递参数

缺点：

1. 消耗性能

```javascript
function Father(x,y){
  this.x=x;
  this.y=y;
}

Father.prototype.z = 60;

function Son(){
  let p = new Father(10,20)
  for(let key in p){
    Son.prototype[key] = p[key]
  }
  /**
   * 将遍历出的父类实例的属性或者方法添加到子类的原型中
   * in 运算符也可以将原型中的属性或者方法遍历出
   * 性能非常低下！！！！！！！！
   **/
}

let instance = new Son();
instance.z;
//=>60
```

#### 圣杯模式

类似于寄生组合，不过圣杯模式使用的是一个空函数作为中转,不过只能继承原型的属性或方法

```javascript
function inherit(father,son){
  function Temp(){};
  //=>创建一个空的函数
  temp.prototype = father.prototype;
  //=>让空函数的原型指向父类的原型
  son.prototype = new Temp();
  //=>让子类的原型指向空函数的实例
  son.protoytpe.constructor=son;
  //=>重定向子类的constructor属性
}
```

#### class继承

ES6中的类实际上就是一个特殊的函数，只能使用`new`关键字进行调用，直接调用会报错

```javascript
calss Father{
  constructor(x,y){
    this.x=x;
    this.y=y;
    //=>类自身的代码，带有this的会成为实例的属性或者方法
  }
  x(){};
  //=>constructor外的代码是添加在类原型中的方法
  static a(){};
  //=>带有static关键字的是静态方法，只允许类自身调用，实例无法使用
}
//=>无法直接在类中添加属性，之能在类的外部添加
```

细节：

1. 类名不能重复，否则会直接报错
2. 类的内部代码无法添加属性，之能添加方法，属性之能在类的外部添加
3. 类不具有提升机制，在声明之前使用会直接报错，表达式创建的类会返回`undefined`
4. 类都是执行在严格模式下的，`this`指向不明确时会指向`undefined`

**类的继承**

```javascript
let Father = class{
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  z(){
    console.log('Father.prototype')
  }
}
//=>父类

calss Son extends Father{
  constructor(){
    super()
    /**
     * super() === 调用父类
     * 支持传递参数，同时父类中的
     * this默认就是子类的实例
     **/
  }
}

let instance = new Son();
instance.z();
//=>'Father.prototype'
```

## 函数

一些经常使用的功能或者是重复性使用的一些代码，就可以封装在一个函数当中，当需要使用的时候只需要直接调用这个函数就可以了，

### 创建方式

1. 函数字面量
2. 函数表达式
3. 匿名函数

```javascript
function test(){};
//=>函数字面量

let test = function(){};
//=>函数表达式

(function(){})();
//=>匿名函数
```

以字面量的方式创建的函数拥有函数提升的机制，整个函数将会被提升至页面的最顶部，所以可以在创建之前使用

```javascript
test();

function test(){};
//=>先调用后创建
```

表达式方式创建的变量并不会将整个函数进行提升，只会声明提升，赋值语句执行完毕之后才可以使用，所以无法在创建前使用

```javascript
test();
//=>报错

let test = function(){};
//=>在赋值语句之前 test 都是undefined
```

匿名函数不具有任何提升的机制，同时会在代码运行到函数的时候立即执行，并且只能执行一次

```javascript
(function(){

})()
//=>在代码执行到这里的时候 匿名函数 会立即执行
```

### 参数

函数在创建的时候可以指定形参，在调用的时候可以指定实参，形参和实参是相关联的

形参就相当于在函数的内部使用关键字声明了一个变量，但是没有赋值
实参在函数调用的时候就是在给形参赋值

```javascript
function test(x,y){
  console.log(x,y)
}
test(10,20);
//=>函数在调用的时候会将实参赋值给形参，控制台输出：10 20
```

如果实参是一个表达式则会将表达式的值计算出，然后将值传递给形参，如果传递的是引用数据类型，则会将堆内存地址传递

```javascript
function test(x,y){
  console.log(x,y)
}
test(1+1,2+2);
//=>控制台输出：2，4

function test(obj2){
  console.log(obj === obj2)
  //=>true
}
let obj = {name:'平野绫'};
test(obj)
//=>此时 形参 和 obj 操作的都是同一个对象
```

形参和实参的数量可以是不相等的

1. 形参多于实参：没有接收到实参的形参值就是`undefined`
2. 实参多余形参：按照顺序一次给形参赋值，多出的不做处理，可以在`arguments`中访问到

```javascript
function test(x,y){
  console.log(x);
  //=>10
  console.log(y);
  //=>undefined
}
test(10);
//=>只传递一个实参，

function test(x){
  console.log(x);
  //=>10;
  console.log(arguments[1]);
  //=>20,arguments是函数实参的集合体
}
test(10,20)
```

函数的形参可以设置默认值，如果形参没有接收到实参，或者是接受的实参值是`undefined`，形参的值就是设置的默认值

```javascript
function test(x = 100){
  console.log(x);
  //=>10,没有接收到实参，或者实参是 undefined 形参就是默认值，其余都是传递的实参值
}
```

### 返回值

函数在执行的时候会产生一个私有作用域，在全局作用域中是无法访问到私有作用域中的数据，如果函数中的数据想在全局作用域中使用，就要使用`return`关键字，将需要使用的数据返回

**引用数据类型的值`return`出的是内存地址**

```javascript
function test(x){
  return x+1;
  //=>return 出的数据可以在外部使用变量接受
}
let result = test(1);
console.log(result);
//=>2

//=>如果不指定 return 值，函数会默认将 undefined 返回

function test(){};
let result = test();
console.log(result);
//=>undefined
```

函数在执行的过程中，只要碰到`return`关键字，就会立即结束函数的运行，不会在执行`return`后面的代码

```javascript
function test(){
  console.log(1);
  return;
  console.log(2)
}
test()
/**
 * 控制台输出：1
 * return 后的代码不会执行
 **/
```

### arguments

一个类数组对象，是函数中所有实参的集合体

非严格模式下`arguments`会和形参产生映射机制，一个改变，另一个也会改变

```javascript
function test(x){
  console.log(x);
  console.log(arguments[0]);
  //=>都是输出10

  x = 20;
  console.log(arguments[0]);
  console.log(x);
  //=>存在映射关系，一个改变另一个也会改版
}
test(10)
```

`arguments`的值是函数调用时传递的实参值，和形参的数量没有关系，即使传递的实参没有形参接收，`arguments`的值也会增加

```javascript
function test(x){
  console.log(x);
  //=>10
  console.log(arguments){
    //=>10,20
  }
}
test(10,20)
```

如果形参的值并不是接收到的实参值，而是手动赋值的，则不会和`arguments`产生映射机制

```javascript
function test(x){
  x = 10;
  console.log(x);
  //=>10
  console.log(arguments[0]);
  //=> undefined；此时的 arguemnts 和形参没有映射机制
}
test();
//=>不传递实参
```

严格模式中`arguments`并不会和形参产生映射机制，相互的改变不会影响到另一个

```javascript
function test(x){
  'use strict';
  //=>当前函数执行在严格模式中

  console.log(x);
  console.log(arguments[0]);
  //=>都是输出 10

  x = 20;
  console.log(x);
  //=>20
  console.log(arguments[0]);
  //=>10,严格模式中不存在映射机制

  arguments[0] = 30;
  console.log(x);
  //=>20
  console.log(arguments[0])
  //=>30
}
```

ES6的箭头函数中没有`arguments`对象，使用会报错

```javascript
let fn = ()=>{
  console.log(arguments)
}
fn();
//=> arguments is not defined
```

`arguments`是一个类数组对象，并不是一个真正的数组，所以无法使用数组中的方法,可以将`arguments`转换为真正的数组，以便使用数组中的方法

```javascript
function test(){
  let arguments = Array.from(arguments);
  arguments instanceof Array;
  //=>true 利用数组的静态方法进行转换

  Array.prototype.slice.apply(arguments);
  //=>利用数组的 slice 方法将 arguments 中的数据进行拷贝并返回
}
```

### 构造函数

构造函数的创建方式和普通的函数是一样的，不过为了区分，通常构造函数的命名使用的时大驼峰命名，并且构造函数可以使用`new`关键字创建一个实例，构造函数中不指定`return`值，默认`reutrn`的是`this`

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
  //=>默认 return 出 this
}
let son = new Person('平野绫',20)
//=> son = {name:'平野绫',age:20}

let son2 = new Person('钉宫',18)
//=>son2 = {name:'钉宫',age:18}
//=>根据传参的不同，返回的对象的属性也是不一样的
```

js中拥有很多的内置构造函数，都可以使用`new 构造函数(参数)`来创建，不过使用构造函数方式创建的一个对象，通过构造函数创建一个字符串，那么这个字符串的类型就是引用数据类型，不再是一个基本值

```javascript
let str = new String('123')
console.log(typeof str);
/**
 * object
 * 和字面量方式创建的只是数据类型的不同
 * 字符串中的方法依旧可以使用
 **/
```

构造函数运行时的步骤

1. 创建一个私有作用域
2. 形参赋值，变量提升
3. 创建一个新的空对象，`this`指向该空对象
4. 代码执行时将对应的属性添加到空对象中
5. 返回`this`

[![nc5GLV.png](https://s2.ax1x.com/2019/09/15/nc5GLV.png)](https://imgchr.com/i/nc5GLV)

构造函数创建的实例只能拥有和`this`相关联的属性或者方法，没有使用`this`关联的属性或者方法都是函数私有的，实例无法拥有和访问

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
  let gender = '女';
  //=>没有和 this 关联的属性都是构造函数私有的属性
}
let son = new Person('平野绫',20);
son.age;
//=>20;
son.gender;
//=>undefined 实例无法拥有函数私有的属性
```

普通函数的`return`可以返回任何类型的数据，而在构造函数中只能`return`引用数据类型，如果`return`的是一个基本数据类型，会被自动忽略，只会结束构造函数的运行，不会将基本值返回

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
  return 100;
  //=> return 一个基本值
}
let son = new Person('平野绫',20);
console.log(son);
//=>{name:'平野绫',age:20},会忽略 return 的基本值，只会结束构造函数的运行
```

如果`return`的是一个引用数据类型，会把引用数据赋值给构造函数的实例，此时构造函数中的`this`的属性或者方法和实例就没有关联了

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
  return {};
  //=>return 一个空对象
}
let son = new Person('平野绫',20);
console.log(son);
//=>{}; return 引用数据类型和切断实例和this的关联，实例不在拥有和this关联的属性或这方法
```

### 回调函数

把一个函数当作另一个函数的实参传递

```javascript
function t1(callback){
  console.log(callback()+10)
}
function t2(){
  return 10
}
t1(t2);
//=>控制台输出：20； t2就是一个回调函数
```

### 箭头函数

ES6中新增加的一种函数书写方法

语法：`let fn = (参数)=>{函数体}`

1. 只有要给形参，可以省略`()`
2. 函数体只有一条`return`语句，可以省略`{}`

```javascript
let fn = value => value + 1
console.log(fn(1))
//=>2
```

箭头函数中没有`arguments`伪数组对象，使用会报错，可以使用解构赋值替代

```javascript
let fn = ()=>{
  console.log(arguments)
  //=>报错：arguments is not defined
}
fn()

//=>使用解构赋值替代

let fn = (...arr){
  console.log(arr);
  //=>[10,20,30],  arr是一个真数组
}
fn(10,20,30)
```

箭头函数中没有`this`，在箭头函数中操作`this`都是操作的上一个作用域中的`this`

```javascript
function test(){
  console.log(this)
  //=>obj
  return ()=>{
    console.log(this)
    //=>obj  箭头函数中的 this 使用的的 test 函数的 this
  }
}
let obj = {fn:test};
obj.fn()();

//=>普通函数

function test(){
  console.log(this)
  //=>obj； this = test函数的调用者
  return function(){
    console.log(this)
    //=>window；普通函数的 this = 函数的调用者
  }
}
let obj = {fn:test}
obj.fn()();
```

## 作用域

**全局作用域**

js代码在一开始执行的时候就会产生一个全局作用域，只有当页面关闭或者刷新页面的时候，全局作用域才会销毁

**局部作用域**

函数执行期间都会产生一个私有作用域来运行代码，函数执行完毕之后会立即销毁自身的作用域，每执行一次函数就会产生一个私有作用域，并且每一次产生的作用域都是独立的，互不相干

**块级作用域**

ES6中新增加的一种作用域，除了对象的`{}`不会产生块级作用域意外，其余的`{}`都会产生，判断语句和循环语句的`{}`也会产生块级作用域

### 作用域链

函数在创建的时候就会产生一个作用域链，作用域链是一个不可操作的类数组对象，类数组也拥有索引值，并且在创建的时候将索引`0`的位置和全局作用域管关联

![nymQLq.png](https://s2.ax1x.com/2019/09/14/nymQLq.png)

当函数执行的时候，作用域链会将全局作用域向下移动一个索引，将索引`0`的位置和自身产生的局部作用域关联，当函数执行完毕之后，作用域链会初始化，全局作用域会重新回到索引`0`的位置上

![nym3wV.png](https://s2.ax1x.com/2019/09/14/nym3wV.png)

如果一个函数是在另一个函数的内部定义的，那么这个函数的作用域链初始就拥有两个或两个以上的索引值,根据嵌套的层级决定作用域链中的数量，全局作用域始终会处于作作用域链的最底部

> ![nyuF58.png](https://s2.ax1x.com/2019/09/14/nyuF58.png)

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
 * 但是并不会销毁原有的作用域,会作为自己的上级作用域
 * 所以第二次执行的时候会执行重定向后的A
 * a+(--b)重定向后的A并没有a这个属性
 * 通过作用域链向上一级查找,会找到自己原有
 * 作用域中的a
 */
```

## 闭包

闭包是一种函数运行时的特殊现象，有些时候函数执行的时候产生一个不会销毁的作用域，这种现象就叫做闭包

在定时器，DOM事件，AJAX请求或者其他的异步请求任务中，只要是使用了回调函数，就会产生闭包现象

当一个函数不是在自定定义的作用域中执行的，通常都会形成一个闭包

```javascript
functoin t1(){
  return function t2(){
    console.log('我就是闭包函数')
  }
}
t1()();
/**
 * t2函数的运行就会产生闭包现象
 * t2函数实在t1函数的内部定义的
 * 但是t2的执行环境确实在全局作用域中
 * 这样就会导致t1函数执行完毕之后
 * 并不会销毁私有的作用域
 * 因为它一直在被t2函数使用
 **/
```

过多的使用闭包现象会造成性能上的缺失，因为会造成过多的栈内存无法被释放，

![nyuF58.png](https://s2.ax1x.com/2019/09/14/nyuF58.png)

闭包可以将内部的值保护起来，使其不受外部的干扰

```javascript
//=>假设页面中有若干个 li 标签，给每一个 li 标签绑定点击事件，让其出发点击事件显示自己的文本内容

let liList = document.querySelectorAll('li');
for(var i = 0; i < liList.length; i++){
  liList[i].onclick=function(){
    console.log(liList[i].innerText)
  }
}
/**
 * 问题1
 * 出发点击事件时会直接报错，
 * liList.length = li标签的数量
 * liList的最后一个值的索引值是liList.length - 1
 * 当无法进入循环的时候 i 的值一定是等于 liList.length
 * liList[i] 的值就是 undefined，所以会报错
 **/

/**
 * 问题2
 * 当for循环执行结束，每一个 li 标签已经成功绑定了点击事件
 * 但是当点击事件触发的时候， i 的值已经固定了。
 * liList[i].innerText 就不会输出每一个 li 的值
 * 因为for循环是同步执行的，而 DOM事件 是异步执行
 **/
```

闭包解决方案

```javascript
let liList = document.querySelectorAll('li');
for(var i = 0;i < liList.length; i++){
  liList[i].onclick=(function(j){
    return function(){
      console.log(liList[j].innerText)
    }
  })(i)
}
/**
 * 每一个 li 标签绑定的都是立即执行函数
 * 立即执行函数每一次执行都会产生一个新的作用域
 * 通常情况下立即执行函数执行完毕之后就会销毁自身的作用域
 * 但是由于 return 一个新的函数，这样立即执行函数的作用域就不会销毁
 * 同时将每一次 for 循环的值传递给这个立即执行函数，让其保存起来
 * 等到点击事件出发的时候，所用的值就都是先前保存起来的值，并不是使用同一个
 **/
```

ES6解决方案

```javascript
for(let i = 0; i < liList.length; i++){
  liList[i].onclick=function(){
    console.log(liList[i].innerText)
  }
}
/**
 * let 关键字会产生一个 块级作用域
 * 每执行一次循环，就会产生一个块级作用域
 * 将循环时 i 的值保存起来，点击事件触发的时候
 * 使用的 i 就是每一个块级作用域中的，并不是使用
 * 同一个 i
 **/
```

this解决方案

```javascript
for(var i =0 ; i< liList.length; i++){
  liList[i].onclick=function(){
    console.log(this.innerText)
  }
}
//=>在点击事件中 this = 事件的触发者

```

## this

在函数中使用`this`，那么`this`就会指向函数的使用者，如果使用者不明确，就会指向`window`；

```javascript
function t(){
  console.log(this)
}
t();
//=>window；直接调用函数，this就会指向window

function t2(){
  console.log(this)
}
let obj = {fn:t2};
obj.fn();
//=>this 等于函数的调用者obj
```

DOM事件中`this`指向事件的绑定者

```javascript
var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  var item = li[i];
  item.onclick = function() {
    console.log(this.innerHTML);
    //=>this等于事件的触发者
  };
}
```

立即执行函数中的`this`只能指向`window`

```javascript
(function(){
  console.log(this)
  //=>window
})()
```

构造函数中的`this`指向构造函数的实例

```javascript
function Person(name,age){
  this.name = name;
  this.age = age
}
let s1 = new Person('平野绫',20);
let s2 = new Person('钉宫',19);
console.log(s1)
//=>{name:'平野绫',age:20}
console.log(s2);
//=>{name:'钉宫',age:19}
```

箭头函数中没有`this`，在箭头函数中使用`this`使用的都是上一个作用域中的

```javascript
let obj = {
  fn:(function(){
    return ()=>{
      console.log(this);
      /**
       * this = window
       * 立即执行函数中的this只能是window
       * 如果上一个作用域的函数是一个普通的函数
       * this就会使用上一个作用域的this
       * 上一个作用域中的this是obj对象
       * 因为上一个函数是obj的属性调用的
       **/
    }ths
  })()
}
obj.fn();
```

### call

调用`call`方法可以强制改变函数中`this`的指向

```javascript
let obj = {name:'平野绫'};
var name = '全局';
function t(){
  console.log(this.name)
}

t.call(obj);
//=>obj.name
```

`call`方法中第一个参数是指定`this`的指向，其余的参数都是需要传递给函数的参数

```javascript
function t(x,y){
  console.log(this,x,y)
  //=>obj,10,20
}
let obj = {};
t.call(obj,10,20)
```

在非严格模式中使用`call`方法不传递参数，或者将`this`指向`null`，`undefined`时`this`就会自动指向`window`
在严格模式中，除了不传递参数指向`undefined`以外，其余都是指向传递的参数，包括`null`

```javascript
//=>非严格模式
function t(){
  console.log(this.name)
}
t();
//=>window.name

t.call(null)
//=>window.name

t.call(undefined);
//=>window.name

t.call();
//=>window.name

//=>严格模式

t.call(undefined)
//=>undefined.name

t.call(null);
//=>null.name

t.call();
//=>undefined.name；不传递参数是就指向 undefined
```

### apply

和`call`的基本语法是一样的，区别就在于`call`在传递参数的时候是直接传递的，`apply`的参数则是包裹在一个数组或者是类数组中再传递

```javascript
function t(x,y){
  console.log(this,x,y)
  //=>obj,10,20
}
let obj = {};
t.apply(obj,[10,20])
```

`apply`传递的参数虽然需要包裹进数组或者类数组中，但是在实际传递的时候，`apply`则会将参逐个传递，并不是直接将一个可枚举的对象传递，

```javascript
let arr = [1,21654,21,8,41321,651];
Math.max.apply(null,arr);
/**
 * 41321
 * Math.max方法并不支持直接传递一个数组
 * 但是使用apply方法的传参机制，
 * 可以让数组借用这个方法
 **/

Math.max(...arr);
//=>使用解构赋值也可以实现
```

### bind

`bind`并不是立即改变`this`的指向，而是预处理 ，当一个函数使用`bind`方法时，并不会直接调用这个函数，而是会返回一个新的函数，返回的新函数中的`this`就会指向传递的参数

```javascript
function t(){
  console.log(this)
}
let obj = {};
let t2 = t.bind(obj);
t2();
//=>obj
```

同一个函数只要调用一次`bind`就会返回一个新的函数，但是每一次返回的函数都是不同的

```javascript
function t(){
  console.log(this)
}
let obj = {};
let t2 = t.bind(obj)
let t3 = t.bind(obj);
t2 == t3;
//=>false,每一次返回的都是一个全新的函数
```

`bind`返回的新函数中的`this`已经固定，新函数再次使用`call`或者`apply`甚至再次使用`bind`预处理也无法再次改变 `this`指向

```javascript
function t(){
  console.log(this)
}
let obj = {};
let t2 = t.bind(obj);
t2();
//=>obj

let obj2 = {a:1};
t2.call(obj2);
//=>obj

t2.apply(obj2);
//=>obj

let t3 = t2.bind(obj2);
t3();
```

```javascript
Function.prototype.bind=function(context,...arr){
  let self = this;
  //=>缓存 bind 方法中的 this  this == bind方法的调用者
  return function(...innerArr){
    //=> innerArr 用于接收 bind 返回的函数接收的参数值
    self.apply(contetx,arr.concat(innerArr))
    /**
     * bind 方法返回的新函数中已经使用 apply 方法将 this 的指向确定了
     * innerArr = 新函数调用时传递的参数
     * 在新函数调用的时候，将两次接收到的参数一起传递
     **/
  }
}
```

## 原型

1. 每一个函数在创建的时候都拥有`prototype`对象，它指向函数的原型
2. 函数的`prptotype`属性拥有一个`constructor`属性，它指向函数本身
3. 所有的对象都拥有`__proto__`属性，它指向当前对象所属类的原型，所属类不明确就会指向`Object`的原型

```javascript
function Person(name,age){
  this.name = name;
  this.age = age;
}
let son = new Person('平野绫',18)
son.__proto__ === Person.prototype;
//=>true 对象的 __proto__ 指向所属类的原型

Person.prototype.constructor = Person;
//=>true 函数原型上的 constructor 属性指向函数本身
```

![nhQuW9.png](https://s2.ax1x.com/2019/09/16/nhQuW9.png)

### 原型链

在访问一个对象的属性的时候，会优先查找自身有没有这个属性，如果有则直接使用，如果没有则会根据原型链的查找机制查找，圆形中存在则直接返回，原型中不存在就无法访问到

js标准库中的实例方法，就会根据原型链的查找机制查询并使用的

```javascript
let arr = [10,20];
arr.slice === Array.prototype.slice;
//=>true
```

![nhDpHe.png](https://s2.ax1x.com/2019/09/16/nhDpHe.png)

在创建构造函数的时候，如果有一些方法或者属性希望这个类的实例都可以直接使用的话，就可以将这些属性或者方法添加到构造函数的原型中，这样实例就会根据原型链的机制查找并且直接使用,这样就可以减少代码的耦合

```javascript
function Person(){}
Person.prototype.t = function(){
  console.log('Person.prototype.t')
}
let son = new Person();
let son2 = new Person();
son.t();
son2.t();
//=>都可以使用原型中的t方法输出Person.prototype.t
```

如果对象和所属类原型中的方法重复，则是直接使用对象自身的，不会使用原型中的

```javascript
function Person(){};
Person.prototype.t = function(){
  console.log('Person.prototype.t')
}
let son = new Person();
son.t = function(){
  console.log('son.t')
}
son.t();
//=>使用自身的 t 方法，不会使用原型中的
```

实例无法直接修改所属类原型中的属性或者方法，只能使用，如果修改只是给自身添加或者修改，通过`__proto__`则可以修改原型中的属性或者方法

```javascript
function Person(){};
Person.prototype.t = function(){
  console.log('Person.prototype.t')
}
let son = new Person();
son.t = 1;
//=>并不会修改原型中的 t 方法，只会给实例自身添加一个 t 属性
console.log(son.t);
//=> 1
Person.prototype.t();
//=>'Person.prototype.t';原型中的方法并不会改变

son.__proto__.t = function(){
  console.log('son.t')
};
Person.prototype.t();
//=>'son.t',通过 __proto__可以修改原型的属性或者方法，但是不建议使用， IE浏览器也屏蔽了 __proto__属性
```

所有的函数都是内置`Function`构造函数的实例，

```javascript
function t(){};
t.__proto__.constructor == Function;
//=>true
```

`Object`的原型处于原型链的最顶端，它拥有的属性和方法可以供所有的函数或者对象使用,`Object`原型也是一个对象，但是它的`__proto__`属性指向`null`

```javascript
Object.prototype.__proto__;
//=>null
```

![JHJ3wR.png](https://s1.ax1x.com/2020/04/29/JHJ3wR.png)

函数的原型是一个属性，所以可以直接修改原型的属性，内置类的原型无法修改，danshi 

```javascript
Array.prototype = {};
let arr = [10,20];
arr.reserve();
//=>内置类的原型无法被修改
```

非内置类的原型都是可以修改的，特殊情况下修改原型需要重新指定`constructor`的指向，否则`constructor`并不会正确的指向类本身

```javascript
function Person(){};
Person.prototype = {};
Person.prototype.constructor;
//=>Object; 没有重定向 constructor

Person.prototype.constructor = Person;
//=>重定向 constructor 指向
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

## 同异步

- 同步：一次只能执行一个任务，当前任务没有执行完毕，所有的任务都会等待无法执行
- 异步：可以同时执行多个任务，当前任务没有执行完毕，也会继续执行其他的任务

js是单线程的语言，而浏览器是多线程的，js中的异步任务都是由于浏览器拥有多个线程模拟出来的，并不是真正意义上的异步操作

js代码的执行流程

1. 自上而下执行主线程中的任务
2. 遇到异步任务将其放如等待任务队列
3. 继续自上而下执行主线程任务
4. 主线程任务执行完毕后查询是否有满足条件的异步任务
5. 多个异步任务满足条件时优先执行最先满足条件的
6. 将满足添加的异步任务拉回主线程执行
7. 执行完毕后继续查找是否拥有未完成的异步任务
8. 按照顺序依次执行异步任务

> 只要主线程中的任务没有执行完毕，无论异步任务是否满足条件，都不执行，而是等待主线程任务执行完毕后在执行

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
```

1. 执行主线程任务将定时器添加进等待任务队列
2. 控制台输出 `2`
3. 将定时器添加等待任务队列
4. 将定时器添加进等待任务队列
5. `for`循环执行
6. 控制台输出 `5`
7. 主线程任务执行结束，开始执行异步操作
8. 定时器为`10ms`最先满足条件优先执行，输出`3`
9. 依次为`20ms`的定时器执行，输出`1`
10. 最后执行定时器为`100ms`,输出`4`

```javascript
let n = 0;
setTimeout(function() {
  n++;
  console.log(n);
}, 100);
while (1 === 1) {}
/**
 * while是一个死循环，主线程任务
 * 永远无法执行完毕，并不会执行
 * 异步任务
 */
```

在执行异步任务的时候，只会将最优先满足条件的异步任务执行，无论这个任务添加进等待队列的事件

```javascript
setTimeout(function(){
  console.log(1)
},20)
console.log(2)
setTimeout(function(){
  console.log(3)
},10)
console.log(4)
for(let i = 0; i < 900000;i++){}
console.log(5)
setTimeout(function(){
  console.log(6)
},8)
console.log(7)
setTimeout(function(){
  console.log(8)
},15)
console.log(9)
//=>2 4 5 7 9 3 1 6 8
```

等待任务队列可以细分为`宏任务`和`微任务`

- 宏任务

1. DOM事件
2. AJAX请求
3. 定时器

- 微任务

1. Promise回调
2. mutation回调

`微任务`的优先级大于`宏任务`，没执行一次`宏任务`都会检查是否有满足条件的`微任务`，只要有满足条件的`微任务`就会执行，满足条件的`微任务`执行完毕之后才会继续执行`宏任务`

`主线程 > 微任务 > 宏任务`

```javascript
setTimeout(function(){
  console.log(1)
},0)
new Promise(function(resolve,reject){
  console.log(2);re
  resolve();
}).then(function(){
  console.log(3)
}).then(function(){
  console.log(4)
})
console.log(5)
```

```javascript
const first = () => (new Promise(function(resolve,reject){
  console.log(3);
  let p = new Promise(function(resolve,reject){
    console.log(7)
    setTimeout(function(){
      console.log(5);
      resolve(6)
    },0)
    resolve(1)
  })
  resolve(2)
  p.then(value => console.log(value))
}))
first().then(value => console.log(value))
console.log(4)
```

```javascript
setTimeout(function(){
  console.log(0)
},0)
new Promsie(function(resolve,reject){
  console.log(1)
  resovle()
}).then(function(){
  console.log(2);
  new Promise(function(resolve,reject){
    console.log(3);
    resolve();
  }).then(function(){
    console.log(4)
  }).then(function(){
    console.log(5)
  }).then(function(){
    console.log(6)
  })
})

new Promsie(Function(resolve,reject){
  console.log(7);
  resolve();
}).then(function(){
  console.log(8)
})
```

```javascript
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve, reject) {
  console.log("Promise1");
  resolve();
}).then(function () {
  console.log("Promise2");
});

console.log("script end");
```

## 定时器

所有的定时器任务都是异步任务

1. `setTimeout`在满足设置的时间之后执行一次
2. `setInterval`在满足设置的时间之后反复执行

```javascript
setTimeout(function(){
  console.log(1)
},100)
//=>在延迟 100 毫秒之后执行一次回调函数

setInterval(function(){
  console.log(1)
},100)
//=>没间隔 100 毫秒执行一次，直至定时器被清除
```

定时器拥有一个返回值，是一个正整数，可以根据返回值清除对应的定时器

```javascript
let timer = setTimeout(function(){
  console.log(1)
},1000);
clearTimeout(timer)
//=>不会有任务结果，在定时器还未执行的时候就已经清除定时器了
```

`setTimoeut`和`setInterval`这两种定时器都可以使用`clearTimeout`和`clearInterval`清除，但是为了不混淆，还是应该使用对应的进行清除

## Promise

ES6中新增加的一种用于管理异步操作的，`Promise`本身是同步执行，可以有效的解决掉回调地狱

`Promise`是一个构造函数，可以使用`new`关键字创建一个实例

```javascript
let p = new Promise(function(resolve,reject){
  //=>异步代码
})
```

`Promised`在创建的时候传递一个回调函数，回调函数内管理异步操作，同时回调函数还拥有两个参数`resolve`,`reject`这两个参数也是函数，调用不同的参数会导致实例的状态不同,同时在参数调用的时候可以传递任意值作为`Promise`实例对象的`then`方法中回调函数接收的值

**回调函数会在创建`Promise`的时候立即执行,回调函数中的两个参数会修改实例对象的状态，但是只能修改一次，只有第一个调用的参数才能成功修改状态，再次调用无法生效**

- 调用`resolve`函数，实例为 `resolved`状态
- 调用`reject`函数，实例为`rejected`状态

```javascript
let p = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve(1)
   /**
    * 调用 resolve表示异步操作成功，同时将值传递给实例对象的 then 方法
    * 中的第一个回调函数，
    * 并且将实例对象的状态修改为 resolved
    **/
    reject(1);
    /**
     * 调用 reject表示异步操作失败，同时将值传递给实例对象的 then 方法
     * 中第二个回调函数
     * 并且将实例对象的状态修改为 rejected
     * 同一个异步操作中重复修改状态并不会成功
     **/
  })
})
```

### 静态方法

只能使用`Promise`构造函数本事调用，实例对象无法使用

all

`all`方法可以同时管理多个`Promise`，并且返回一个新的`Promise`实例对象，同时会将管理的`Promise`中`resolve`的值作为返回的实例对象的`then`方法成功回调的参数

`all`方法只会在所有的`Promise`都执行完毕或者遇到失败的操作才会返回值

```javascript
let p = new Promise(function(resolve,reject){
  resolve(1)
})

let p2 = new Promise(function(resolve,reject){
  resolve(2)
})
let p3 = Promise.all([p,p1]);
p3.then(function(value){
  console.log(value);
  //=>[1,2]；成功值的集合
})
```

如果管理的`Promise`中有一个执行失败，则会立即停止执行其他的`Promise`，同时将错误信息返回

```javascript
let p = new Promise(function(reject,resolve){
  resolve(1)
})

let p2 = new Promise(function(resolve,reject){
  reject(2)
})

let p3 = Promise.all([p,p1])
p3.then(function(value){
  consoel.log(value)
},function(reason){
  console.log(reason)
})
```

如果传递的数组中有一个是非`Promise`值，则会将该值包装进返回的数组中直接返回

```javascript
let p = new Promise(function(resolve,reject){
  resolve(1)
})
let p2 = new Promise(function(resolve,reject){
  resolve(2)
})

let p3 = Promise.all([p,p2,3])

p3.then(function(value){
  console.log(value);
  //=>[1,2,3]
})
```

resolve

`resolve`方法可以直接返回一个成功的`Promise`实例对象，返回的新`Promise`实例对象的`then`方法的第一个回调参数值就是传递的值

```javascript
let p = Promise.resolve(1);
p.then(function(value){
  console.log(value)
  //=>1; 创建时传递的参数
})
```

`resolve`方法支持传递一个`Promise`作为参数,并且会将这个`Promise`执行，将执行的返回值作为`resolve`的返回值

```javascript
let p = Promise.resolve(new Promise(function(resolve,reject){
  reject(1);
  //=>作为参数的 Promise 返回一个失败的值
}))

p.then(function(value){
  console.log(value)
},function(reason){
  console.log(reason)
  //=>根据Promise的返回值决定返回的实例对象的状态
})
```

reject

`reject`方法返回一个失败的`Promise`,并且将参数作为失败信息

```javascript
let p = Promise.reject(1);
p.then(undefined,function(reason){
  console.log(reason);
  //=> 1
})
```

`reject`方法只会返回失败的实例对象，即使传递的是一个成功的`Promise`

```javascript
Promise.reject(Promise.resolve(1)).then(
  function(value){
    console.log(value)
  },
  function(reason){
    console.log(reason);
    //=>即使传递的是一个成功状态的Promise，返回的Promise状态依旧是失败的
    //=>失败的信息就是这个成功的Promise
  }
)
```

race

`rece`将所有的作为参数的`Promise`执行，并且将最优先执行完毕的`Promise`的返回值返回，无论成功或者失败

```javascript
let p = new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000));

let p2 = new Promise((resolve, reject) => setTimeout(() => reject(2), 2000));
let p3 = Promise.race([p, p2]);
p3.then(
  (value) => console.log(value),
  //=>成功状态的Promise最优先完成，所以返回Promise实例也是成功状态
  (reason) => console.log(reason)
);
```

### 实例方法

then

`then`方法返回一个新的`Promise`对象，并且可以传递两个回调函数用来执行不同状态下的`Promise`

```javascript
let p = new Promise((resolve,reject){});
p.then(
  function(value){
    /**
     * 当实例对象调用then方法时，
     * 实例对象的状态为 resolved时
     * 执行这个回调函数，同时会将 resolve
     * 的值作为实参传递给这个回调函数的形参
     **/
  },
  function(reason){
    /**
     * 实例对象的状态为 rejected 时
     * 调用这个回调函数，同时将 reject
     * 中的值作为实参传递给这个回调函数的形参
     **/
  }
  )
```

当使用`then`方法进行链式调用的时候，上一个`then`方法中回调函数执行的`return`的值作为下一个`then`回调函数的形参，

```javascript
let p = new Promise((resolve, rejcted) => {
  resolve(1);
});

p.then(
  (value) => 1
  )
  .then(
    (value) => console.log(value)
    //=>1；上一个 then 中 return 的值作为下一个 then 回调函数的实参
    );
```

链式调用的时候，只要上一个`then`的`return`的值是一个基本数据类型，则`then`方法返回的实例对象的状态就一定时`resolved`状态

```javascript
new Promise((resolve,reject)=>{
  reject(1);
  //=>返回一个失败的实例对象
}).then(
  value => console.log(value),
  reason =>{
    console.log(reason);
    return 1;
    //=>执行失败的回调函数，并且返回一个基本值 1
  }
).then(
  value => console.log(value),
  //=>上一个then的返回值是一个基本值，所以执行成功的回调函数
  reason => console.log(reason)
)
```

链式调用的时候下一个`then`执行哪一个回调函数由上一个`then`回调函数中的返回值决定，和上一个`then`执行的哪一个回调函数没有任何关系

```javascript
let p = new Promise((resolve,reject)=>reject(1));
//=>创建一个失败的实例对象，并且失败信息为 1

p.then(value=>{
  //=>p 的状态为 rejected，不会执行成功的回调
}，reason=>{
  console.log(reason);
  return 1;
  //=>执行失败的回调，并且 return 一个基本值 1
}).then(
  value =>{
    console.log(value);
    /**
     * 上一个 then 执行的时失败的回调
     * 并且 return 出了一个基本值 1
     * 下一个then 就会执行成功的回调
     * 即使上一个 then 执行的时失败的回调
     **/
  }
)
```

上一个`then`回调函数的返回值是一个`Promise`，则会将这个`Promise`执行，并且执行的结果决定`then`返回的状态

```javascript
new Promise((resolve, reject) => {
  resolve(1);
})
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      reject(2);
    });
    //=>在成功的回调中返回一个新的Promise，并且状态为 rejectedc
  })
  .then(
    (value) => console.log(value),
    (reason) => console.log(reason)
    //=>返回值的Promise状态为 rejected，执行失败的回调
  );
```

1. 不`return`则默认返回`undefined`,下一个then的执行`onResolved`
2. `return`基本值，下一个`then`执行`onResolved`
3. 抛出一个错误，下一个`then`执行`onRejected`
4. `return`一个`Promise`，下一个`then`根据`Promise`的执行后的状态决定执行哪一个回调函数``

catch

`catch`方法和`then`方法基本一直，只不过`catch`方法只接受一个回调函数，并且该回调函数只执行失败的回调，同时返回一个新的`Promise`回调，实际上`catch`方法内部使用的就是`Promise.prototype.then(undefined,onRejected)`

```javascript
new Promise((resolve, reject) => {
  resovle(1);
})
  .then((value) => {
    throw 1;
    //=>手动抛出一个错误
  })
  .catch((reason) => {
    console.log(reason);
    //=>1,捕捉错误
  });
```

`Promise`中的错误类似于`冒泡`的特性，只要没有被捕获就会一直传递直至被捕获为止，如果一直没有被捕获，就会报错

```javascript
new Promise((resolve, reject) => {
  resovle(1);
})
  .then((value) => {
    console.log(value);
    return 1;
  })
  .then((value) => {
    console.log(value);
    return 2;
  })
  .catch((reason) => console.log(reason));
/**
 * then 方法允许只传递一个回调函数，
 * 并且该函数处理成功时的操作
 * 在链式调用的最后使用
 * catch捕获并处理错误信息
 **/
```

## async

`async`用来定义一个异步执行的函数，并且异步函数之后的返回值是一个`Promise`实例对象,可以直接使用`then`方法进行链式调用

```javascript
async function t() {
  console.log("async");
  return 1;
}
t().then((value) => console.log(value));
//=>异步函数中的返回值作为then方法的参数，默认时 undefined
```

异步函数中只有抛出一个异常或者是返回一个新的`Promise`实例对象的状态为`rejected`，否则异步函数返回的`Promise`实例对象的状态都为`resolved`

```javascript
async function t(){
  throw 1;
  //=>抛出异常，异步函数返回的Promise实例对象状态为 rejected
}

async function t(){
  return new Promise((resolve,reject)=>{
    reject(1)
  })
  //=>返回一个失败的Promsie实例，异步函数返回的Promise实例状态为 rejcted
}
```

异步函数中可以使用`await`关键字，用于等待一个`Promise`的执行结果，该关键字会暂停异步函数的执行

> `await`关键字之能在异步函数中使用，在其他地方使用会直接报错
 
```javascript
function p() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1);
    }, 2300);
  });
}

async function t() {
  let result = await p();
  console.log(result);
  /**
   * 只有当 p 函数执行完毕之后 result
   * 才拥有结果,同时会阻止异步函数其他的
   * 代码执行，只有当 p 函数执行完毕
   * 之后才会继续执行异步函数内其他的代码
   **/
}
t();
```

如果`await`跟随的不是一个`Promise`对象，则会直接返回

```javascript
function p(){
  setTimeout(function(){
    return 1
  },2000)
}

async function t(){
  let result = await p();
  console.log(result);
  //=>undefined,即使是异步任务也不会暂停函数的运行
}
```

一个异步函数中可以使用多个`await`关键字，用来在一个异步函数中获取多个`Promise`的值，如果有一个`Promise`返回错误的状态，余下的`await`将不会再继续执行

```javascript
async function t(){
  let result1 = await Promise.resolve();
  //=>定义一个成功的Promise
  let result2 = await Promise.reject();
  //=>定义一个失败的Promise

  console.log(result1,result2);
  //=>输出语句不会执行，因为await语句接收了一个失败的Promise
}
```

如果某一个`await`执行出错，希望让其他的`await`继续执行，可以使用`try...catch`，也可以将多个`await`放入`try...catch`中，

```javascript
async function t() {
  try {
    let reuslt = await Promise.reject(1);
  } catch (err) {
    //=>进行错误处理
  }
  let result = await Promise.resolve(2);
  console.log(result);
  /**
   * 可以继续执行 try...catch 以外的代码
   * try...catch 会产生块级作用域
   * 不要在外部访问try...catch内部
   * 除了var关键字生以外声明的变量
   **/
}
t()
```

如果一个异步函数中存在多个`await`,但是他们之间有没有关联，则最好让它们同时运行，这样可以更加的节省代码的运行时间

```javascript
async function t() {
  try {
    let [result, result2] = await Promise.all([
      Promise.resolve(1),
      Promise.resolve(2),
    ]);
    /**
     * 存在多个不相关的Promise时
     * 可以使用Promise.all和解构赋值
     * 让他们同时运行，以节省代码运行的时间
     **/
    return [result, result2];
  } catch (err) {
    //=>捕获错误
  }
}
t().then((value) => console.log(value));
```