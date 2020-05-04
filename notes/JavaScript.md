

### iterator

> `iterator`是一种用来处理不同数据结构的访问接口,可以为不同的数据结构提供统一的访问接口,任何数据结构只要拥有`iterator`接口就可以被遍历

**`iterator`的三个作用:**

1. 为不同的数据结构提供一种统一的访问接口
2. 可以是数据结构的成员按照一定的次序排列
3. 为 ES6 中的`for...of...`提供接口

**原生具有`iterator`接口的数据结构:**

1. Array
2. String
3. Set
4. Map
5. arguments
6. NodeList
7. TypeArray

默认的`iterator`接口都部署在数据结构的`[Symbol.iterator]`属性上,`[Symbol.iterator]`是一个遍历器生成函数,执行它就可以返回当前数据结构的遍历器

```javascript
let arr = [10, 20, 30, 40, 50];
console.log(arr[Symbol.iterator]);
//=>数组默认的遍历器是values,如果执行就会返回一个遍历器
```

> 遍历器中有一个`next()`方法,调用这个方法就会返回一个存储着当前成员信息的对象,对象拥有`[value,done]`,`value`表示当前的位置的成员,`done`是一个`boolean'`,表示遍历是否结束

```javascript
let arr = [10, 20, 30];
let iterator = arr.values();
console.log(iterator.next());
//=>Object { value: 10, done: false }
console.log(iterator.next());
//=>Object { value: 20, done: false }
console.log(iterator.next());
//=>Object { value: 30, done: false }
console.log(iterator.next());
//=>Object { value: undefiend, done: true }

/**
 * value表示的是当前位置的成员
 * done为false的时候表示遍历是否结束,即当前的数据结构仍然有成员可供遍历
 * done为true的时候表示遍历已经结束,即当前的数据结构已经没有可以遍历的成员
 */
```

> 调用`[Symbol.iterator]`的场景

- 解构赋值
- 扩展运算符
- for...of...
- forEach
- Array.from
- Peomise.all

### for...of

> ES6
> 中新增加的一种遍历方法,只要当前的数据结构上部署了`[Symbol.iterator]`就可以使用`for...of`遍历,`for...of`遍历的本质就是调用数据结构的`[Symbol.iterator]`函数产生的遍历器进行遍历

```javascript
let arr = [10, 20, 30, 40];
//=>数组默认的遍历器是values()
for (let item of arr) {
  conosle.log(item);
  //=>输出数组的每一项
}
```

> 由于`for...of`调用的是数据默认的遍历器,因此如果指定遍历器,可以产生不同的遍历结果

```javascript
let arr = [10, 20, 30, 40];
for (let item of arr.keys()) {
  console.log(item);
  //=>输出数组项的索引
}

for (let item of arr.entries()) {
  console.log(item);
  /**
   * 会把遍历出的数组项包裹进一个新的数组中
   * 新数组索引0的位置上代表的是数组项的索引
   * 索引1的位置上代表的是当前的数组项
   */
}
```

> `for...of`只能遍历具备`[Symbol.iterator]`属性的数据结构,由于对象并不具备,只是使用会报错,只能使用`Object.keys()`将对象的属性名生成一个数组进行遍历

```javascript
let obj = { name: "绫", age: 20, sex: "女" };
for (let key of Object.keys(obj)) {
  console.log(key);
  //=>输出对象的属性名

  console.log(obj[key]);
  //=>输出对象的属性值
}
```

**和其他遍历语法的对比:**

> `for...of`和其他遍历语法最直接的就是`for...of`可以根据遍历器的不同产生不同的遍历结果,而`fon...in`和`forEach`之类的都是之能根据数据结构默认的遍历器进行遍历,同时`for...of`还支持`return`,`break`,`continue`关键字

**for...of 的好处:**

1. 语法类似于`for...in`一样简洁,但是并没有`fon...in`那些缺点
2. 可以使用`return`,`break`,`continue`关键字退出遍历
3. 可以为所有拥有`[Symbol.iterator]`属性的数据结构提供统一的接口

```javascript
let arr = [11, 20, 33, 40, 55];
for (let value of arr) {
  if (value > 30) {
    //=>数组项大于30时会退出遍历
    break;
  }
  if (value % 2 !== 0) {
    continue;
    //=>数组项为奇数时跳过当次遍历
  }
  console.log(value);
  //=>条件判断后只会输出数组项:20
}

//=>return需要在函数体中使用,否则会直接报错
```

### set

> 是 ES6
> 中新增的一种数据结构,数据结构类似于数组,但是不允许出现重复的值,`Set`数据结构并不具备[key],只有[value]

`set`是一个构造函数,使用`new`来构建一个实例,初始化实例时可以传递一个数组或者具有
iterator 接口的数据结构作为参数,

```javascript
//创建一个空的Set实例
let set = new Set();

//=>传入一个数组作为参数
let set = new Set([10, 20, 30, 40, 50]);

//=>也支持DOM元素的类数组集合
let set = new Set(document.querySelectorAll("div"));
```

> `Set`不允许添加相同的项,判断的时候采用的是全等,所以在`Set`数据结构中不会对数据进行类型转换,例如数字字符串和相同数值的数字并不相等,组在`Set`数据结构中`NaN`也是相等的

```javascript
let set = new Set([10, 20, 30, "30"]);
console.log(set);
//=> [10,20,30,'30']字符串和数字拥有相同的值不会判定为重复项

let set = new Set([20, NaN, 30, NaN, 40, "40"]);
console.log(set);
//=>[20,NaN,30,40,'40']
//=>在Set数据结构中NaN也会认为是重复项

let arr = [10, 10, 20, NaN, 30, NaN, 40, "40"],
  ary = [...new Set(arr)];
console.log(ary);
//=>[ 10, 20, NaN, 30, 40, "40" ]
/**
 * 将Set的实例通过结构赋值的方法添加进新创建的数组,
 * 由于Set数据结构是不支持重复项的
 * 所以新创建的数据也不会存在重复项
 */

let str = "aabbccdd";
str = [...new Set(str)].join("");
console.log(str);
//=>去重的规则同样适用于字符串
```

#### 　属性和方法

**size:**

> 返回`Set`实例成员的数量,从 1 开始计数,如果成员数量为空则为 0

```javascript
let set = new Set([10, 20, 30]);
console.log(set.size);
//=>3
```

**add:**

> 向实例中添加成员,如果添加项已经存在,则无法添加,一次只能添加一个值,返回添加成员后的实例

```javascript
let set = new Set([10]);
set
  .add(20)
  .add(30)
  .add(10, 40);
console.log(set);
//=>[10,20,30]
/**
 * 会自动忽略已经存在的成员
 * 同时一次只能添加一个值,
 * 添加多个会被自动忽略
 * 由于返回的仍然是Set的实例
 * 因此可以链式添加
 */
```

**delete:**

> 删除`Set`实例的成员,返回一个`boolean`,用于判断删除的结果,一次只能删除一个值

```javascript
let set = new Set([10, 20, 30]);
console.log(set.delete(20));
//=>true  删除失败后则会返回false
console.log(set);
//=>[10,30]
```

**has:**

> 判断一个成员是否被当前`Set`的实例所拥有,返回一个`boolean`

```javascript
let set = new Set([10, 20, 30]);
console.log(set.has(20));
//=>true
console.log(set.has(50));
//=>false
```

**clear:**

> 清空实例所有的成员,没有返回值

```javascript
let set = new Set([10, 20, 30]);
console.log(set.clear());
//=>undefined
console.log(set);
//=>[]
```

**keys:**

> 返回一个键名的遍历器对象,由于`Set`实例没有键名,所以遍历的行为和`values`一致

```javascript
let set = new Set([10, 20, 30]);
console.log(set.keys());
//=>返回一个iterator对象
for (let item of set.keys()) {
  console.log(item);
  //=>打印出实例的每一项
}
```

**values:**

> 返回一个键值的遍历器对象

```javascript
let set = new Set([10, 20, 30]);
console.log(set.values());
//=>返回一个iterator对象
for (let item of set.values()) {
  console.log(item);
  //=>打印出实例的每一项
}
```

**entries:**

> 返回一个包含键值对的遍历器对象,遍历时的每一项是一个数组,由于`Set`没有`key`,所有返回的是一个[value,value]形式的数组

```javascript
let set = new Set([10, 20, 30]);
console.log(set.entries());
//=>返回一个iterator对象
for (let iten of set.entries()) {
  console.log(item);
  /**
   * [10,10]
   * [20,20]
   * [30,30]
   * */
}
```

**forEach:**

> 为每一个实例的成员都执行一次回调函数

```javascript
let set = new Set([10, 20, 30]);
set.forEach((item, index, ele) => {
  console.log(item, index, ele);
  /**
   * 由于Set实例没有key,所以item和idnex
   * 的输出结果都是一样,ele表示的是实例本身
   */
});
```

`Set`实例本身就具有遍历(iterator)接口,不需要再调用方法返回一个遍历接口对象,因此可以直接遍历,同时`Set`的遍历顺序就是添加的顺序

```javascript
Set.prototype[Symbol.iterator] === Set.prototype.values;
//=>true 默认情况下使用的就是values方法

let set = new Set([10, 20, 30]);
for (let item of set) {
  console.log(item);
  //=>item代表实例的value值
}
```

### Map

> ES6
> 中新增加的一种对象的存储结构,普通对象的属性名只能是字符串格式,而`Map`的属性名可以是一个值或者说是另一个对象

`Map`是一个构造函数,使用`new`来创建一个实例,他可以接受一个数组或者是可迭代的对象

```javascript
let map = new Map([["name"], ["sex", "女"]]);
//=> { name → undefined, sex → "女" }
/**
 * 传递的是一个二维数组,数组中的第一项对应的是key
 * 第二项是value,书写多个value时也只有第一个会生效
 * 只书写key时,对应的value就是undefined
 */
```

> 对同一个`key`进行多次赋值时,后面的会将前面的覆盖,同时`Map`在对`key`的比较时采用的也是严格相等的情况,如果`key`绑定的是一个对象,则比较引用地址,如果绑定的是一个基本数据类型,则采用严格比较,例如`null`和`undefined`会分别绑定不同的`key`,但是`NaN`会被视为相同的`key`

```javascript
let map = new Map();
map.set("1", "2");
map.set("1", "3");
console.log(map);
//=> { 1 → "3" } 后面的赋值会将前面的覆盖

map.set(1, "2");
map.set("1", "3");
console.log(map);
//=>{ 1 → "2", 1 → "3" }不同的数据类型也会绑定不同的key

map.set(+0, "2");
map.set(-0, "3");
console.log(map);
//=>{ 0 → "3" } +0和-0会被视为同一个key

map.set(null, "1");
map.set(undefined, "2");
console.log(map);
//=> { null → "1", undefined → "2" }null和undefined并不会绑定为一个key

map.set(NaN, "1");
map.set(NaN, "2");
console.log(map);
//=>{ NaN → "2" }NaN会被视为同一个key

map.set({}, "2");
map.set({}, "3");
console.log(map);
//=>{ {} → "2", {} → "3" }引用类型比较的是内存的引用地址
```

#### 属性和方法

**size:**

> 返回`Map`的成员数量

```javascript
let map = new Map([["name"], ["sex", "女"]]);
console.log(map.size);
//=>size:2
//=> { name → undefined, sex → "女" }
```

**set:**

> 设置实例的[key,value],如果`key`已经存在,则会覆盖,不存在则会添加,返回实例,可以使用链式调用,一次只能添加一个键值对

```javascript
let map = new Map();
map
  .set("1", "2")
  .set("2", "3")
  .set("3", "4");
console.log(map);
//=>使用链式调用添加键值对,书写多个value时也只有第一个会生效
```

**get:**

> 获取实例的属性,返回获取到的属性,如果获取的属性不存在,返回`undefiend`

```javascript
let map = new Map([
  ["1", "2"],
  ["2", "3"],
  ["3", "4"]
]);
console.log(map.get("2"));
//=>'3'
console.log(map.get(2));
//=>undefined
```

**has:**

> 检查是否包含某一个属性,返回一个`boolean`

```javascript
let map = new Map([
  ["1", "2"],
  ["2", "3"],
  ["3", "4"]
]);
console.log(map.has("2"));
//=>true
console.log(map.has(2));
//=>false
```

**delete:**

> 删除特定的属性,返回一个`boolean`

```javascript
let map = new Map([
  ["1", "2"],
  ["2", "3"],
  ["3", "4"]
]);
console.log(map.delete("2"));
//=>true
console.log(map.delete(2));
//=>false
```

**clear:**

> 清空所有的属性,没有返回值

```javascript
let map = new Map([
  ["1", "2"],
  ["2", "3"],
  ["3", "4"]
]);
console.log(map.clear());
```

**keys:**

> 返回一个包含`key`值的遍历器对象

**values:**

> 返回一个包含`value`值的遍历器对象

**entries:**

> 返回一个包含`key`和`value`的遍历器对象

**forEach:**

> 为每一个成员项都执行一个回调函数

```javascript
let map = new Map([
  ["name", "绫"],
  ["age", 20],
  ["sex", "女"]
]);

//=>keys()
for (let key of map.keys()) {
  console.log(key);
  //=>输出的每一个实例的key值
}

//=>values()
for (let item of map.values()) {
  console.log(item);
  //=>输出每一个value值
}

//=>entries()
for (let item of map.entries()) {
  console.log(item);
  /**
   * 输出的是一个数组对象
   * 索引0的位置上存放的是key值
   * 索引1的位置上存放的是value值
   */
}
//=>entries()可以通过解构赋值分别得到key和value
for (let [key, value] of map) {
  console.log(key, value);
  //=>key代表的就是键
  //=>value代表的就是值
}

//=>forEach()
map.forEach((value, key, map) => {
  console.log(value, key, map);
  /**
   * 第一个是代表key
   * 第二个代表value
   * 第三个代表实例本身
   * forEach()的第二个参数用于改变this
   */
});
```

`Map`的默认遍历接口就是`entries`,因此可以直接遍历

```javascript
Map.prototype[Symbol.iterator] === Map.prototype.entries;
//=>true 默认就是使用的entries遍历接口

let map = new Map([
  ["name", "绫"],
  ["age", 20],
  ["sex", "女"]
]);
for (let [key, value] of map) {
  console.log(key, value);
  //=>key代表的就是键
  //=>value代表的就是值
}
```



## 严格模式

在 ES5 中使用严格模式需要在当前作用域内的第一行书写`use
strict`;如果书写在全局作用域内的第一行则表示当前的整个文件使用的都是严格模式。

> 全局作用域的严格模式只会影响当前的文件，并不会影响到其他的 js
> 文件，在实际多人开发的项目中，当我们完整开发之后会将所有人开发的代码合并压缩在一个 js
> 文件内，当我们想要在自己开发的 js
> 代码使用严格模式的话应该使用一个立即执行函数，将自己所有的代码放在一个单独的作用域内，这样就不会影响到其他人所书写的代码，因为`uer
> strict`只对当前的作用域有效果

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