# 1

## 2

### Proxy

> `Proxy`的主要作用就是用来修改一些对象的默认行为,一个对象同时都拥有 14 个内置的方法,例如,读取对象属性,对象属性的赋值,函数的调用等,`Proxy`则可以在操作这些方法之前设置一层拦截器,每当外部访问这些方法时,都必须经过拦截器,同时也可以使用`Proxy`中的内部方法覆盖对象的内置方法

使用`new`构建一个`Proxy`实例,创建的时候必须书写两个参数,一个是目标对象(需要拦截的对象),还有一个是拦截的配置(需要修改的操作行为,也是一个对象),如果不传递将会报错

```javascript
let obj = { name: "绫", age: 20 },
  pro = new Proxy(obj, {
    get(target, property) {
      return 35;
      //=>get方法可以在对象读取属性是进行拦截
    }
  });
console.log(pro.name);
//=>35
/**
 * 由于将对象内置的读取属性的方法进行了覆盖,
 * 所以当对象进行读取属性操作时,就会执行hanlder中的方法
 * 而在Proxy中设置的拦截函数只会返回35,因此当对象进行
 * 属性读取操作时只会返回拦截函数返回的数据,即使读取的是一个
 * 并不存在的属性
 */

/**
 * 必须使用Proxy的实例调用才会是拦截器生效,
 * 它会将外部对对象的操作行为转发至对象的内置方法
 * 如果拦截器中有设置相应行为的拦截函数
 * 则会执行拦截器的方法,否则就会直接执行对象内置的方法
 */
```

#### 拦截方法

**get():**

> 可以拦截某个属性的读取操作,可以接受三个参数,依次为目标对象,属性名和`Proxy`实例本身

```javascript
let obj = { name: "绫", age: 20 },
  pro = new Proxy(obj, {
    get: function(target, property) {
      if (property === "age") {
        //=>当对象读取的属性名为age时返回30
        return 30;
      } else if (!(property in target)) {
        throw new Error("读取的属性不存在");
        //=>当读取的属性名不存在时抛出一个错误
      }
      return target[property];
      //=>否则直接返回属性名对应的属性值
    }
  });
console.log(pro.age);
//=>30
console.log(pro.sex);
//=>Error:读取的属性不存在
console.log(pro.name);
//=>绫
```

**set():**

> 用来拦截属性赋值操作,可以接收四个参数,依次为目标对象,属性名,属性值,`Property`实例

```javascript
let obj = {};
let pro = new Proxy(obj, {
  set(target, prop, value) {
    target[prop] = 30;
    //=>只要对象执行赋值操作,
    //=>任何属性都会被设置为30
  }
});
pro.name = "绫";
console.log(obj.name);
//=>30
```

### module

> ES6 中新增加的模块体系,ES6 模块的设计思想是尽量的静态化,值得是在代码编译的时候就可以确定模块之间的依赖关系,以及导入和导出的变量,不同于`CommonJS`的是 ES6 的模块并不是对象,而是通过`export`命令显式制定导出的代码,然后在通过`import`导入,同时 ES6 的模块会自定采用严格模式,不管有没有书写`use strict`,同时浏览器对于模块的加载也是异步的,等价于`defer`,只有整个页面渲染完成之后才会执行,页面中的多个模块按照在页面中的出现顺序依次加载

```html
<script type="module" src="文件地址"></script>
<!--使用模块化的文件需要添加type="module"-->
```

#### export

> 一个独立的文件就是一个模块,正常情况下无法在其他的文件中获取当前文件的数据,而采用了 ES6 模块化的文件就可以使用`export`将需要导出到其他文件的数据导出,`export`只可以存在于全局作用域中,函数作用域和块级作用域中的`export`将会报错

```javascript
export let firstName='li',
export let lastName='kai',
//=>将需要的数据从当前的文件中导出
let firstName='li',
let lastName='kai',
export {firstName,lastName};
 /** 也可以使用这种方法将需要导出的数据一次导出
   *  通常在文件底部使用这中方法相对友好一些
   *  因为它更加的明确的显示出了当前文件导出的数据
   **/

//=>不仅仅是变量,我们可以导出任何需要导出的数据,函数或者类也都是允许的
function name(params) {};
class name2{
  constructor(){}
};
export {
  name as myName,
  anme2 as myName2,
  name2 as twoMyName2
  /**
   * as 可以对导出的数据进行重命名
   * 外部文件在使用的时候可以使用重命名后
   * 的名字,也可以对一个数据进行多个重命名
   * name2这个类可以使用两个不同的名字调用
   */
  }
```

> 通过`export`导出的数据都使动态绑定的,外部文件使用的时候都可以实时的获取到最新的值,而`CommonJS`则是依靠的缓存机制,并不回动态的更新

```javascript
export let name = "ling";
setTimeout(() => {
  name = "pingye";
}, 1000);
//=>定时器执行完毕后当前文件和外部文件使用name都是更新过的值
```

> 可以使用`export default`制定模块的默认导出数据,其他模块导入时可以指定具名的名字,一个模块中值允许出现一个`export default`,同时后面不允许出现变量声明语句,因为`export default`其实就是导出一个叫做`default`的属性或者方法,系统允许用户对他自定义命名

```javascript
export default let test = '132';
//=>报错,不允许出现变量声明语句

let test = '123';
export default test;
//=>正确

export default function test(){console.log(123);};
//=>可以导出一个具名函数,不会报错

//=>导入默认的导出数据可以不想使用大括号,同时可以自定义命名
import test2 from './test.js';
test2();
//=>'123'

export {test as default}
//=>等价于 export default function test(){}
import {default as foo} from './test2.js';
//=>等价于 import foo from './test2.js';

//=>可以直接导出一个具体的值
export default 123;
//=>default本质就是将default后面的数据赋值给default
//=>然后在将default导出
```

#### import

> 在引导导入模块的 js 文件中使用`import`导入`export`导出的模块,必须在全局作用域中使用,同时`import`具有提升的机制,会自动提升到当前文件的顶端,

```javascript
import { firstName, lastName } from "./test2.js";
/**
 * 大括号中的变量名必须和导出时的变量名相同
 * 导入的普通变量是不允许修改变量内存储的值
 * 如果导入的是一个对象则只能修改其属性,不能修改
 * 内存的引用地址,不过最好是将导入的数据当做是只读
 * 属性,不要轻易的修改,
 */

//=>导入时也可以使用 as 关键字进行重命名
import { firstName as first, lastName as last } from "./test2.js";

import "./test2.js";
//=>会将导入的模块执行,但是不会导入任何的数据
//=>多次执行这条语句也只会执行一次
```

> `import`是在编译阶段执行的,也就是代码执行之前`import`就已经执行完毕了,同时也是静态执行,因此`import`内书写表达式会直接报错

```javascirpt
import {firstName + '123'} from './test2.js';
//=>报错
```

> 除了逐个加载单一的数据之外,也可以使用整体加载

```javascript
import { first, last } from "./test.js";
//=>单一加载某一个数据

import * as name from "./test2.js";
//=>将所有导出的数据都加载到name对象中
//=>同样也是不允许修改name对向的数据
```
