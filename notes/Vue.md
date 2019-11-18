# VUE

> 是`JS`中的一套用于构建用户界面的渐进式框架,`VUE`是基于`MVVM`设计思想设计的,主要是

## MVVM

## 生命周期

## options

> 在初始化`VUE`实例时可以做的一些配置项,是一个对象

### el

> 用于将页面中的 DOM 元素挂在到`VUE`实例中,可以是一个类名,也可以是一个选择器或者是 DOM 对象实例

```javascript
//=>初始化一个VUE实例
let test = document.getElementById("test");
const app = new Vue({
  el: "#test",
  el: document.querySelector("#test"),
  el: test
});

//=>后期也可以使用VUE实例进行访问
app["$el"];
app.$el;
```

### data

> `VUE`实例的数据对象,可以将`data`中的数据动态的响应到页面中的`DOM`元素

```html
<div class="test">{{content}}</div>
<!--
data中的数据会被动态的响应在DOM元素中,data中的数据改变时
DOM元素中的内容也会改变
-->
<script>
  const app = new Vue({
    data: {
      content: "测试1",
      $content: "测试2",
      _content: "测试3"
    }
  });
  //==>也可以使用实例调用data中的数据
  console.log(app.$data.content);
  //=>测试1
  //==>VUE实例也代理了data中的所有属性,可以直接调用
  console.log(app.content);
  //=>测试1

  //=>VUE为了防止和内部属性的冲突,以$和_命名的属性无法使用简写
  console.log(app.$data.$content);
  //=>测试2
  console.log(app.$data._content);
  //=>测试3
</script>
```

### methods

> `methods`可以书写一些事件绑定的方法,方法中的`this`会被自动绑定为`VUE`实例,在`methods`中的方法不应该使用箭头函数,因为箭头函数中的`this`绑定的是父级作用域中的`this`,并不会指向`VUE`的实例

```html
<div class="test" @click="test">{{content}}</div>
<script>
  const app = new Vue({
    el: ".test",
    data: {
      content: "测试"
    },
    methods: {
      test(e) {
        console.log(e.target.innerHTML);
        //==>元素触发点击事件时打印出自身的html内容
        console.log(this === app);
        //=>true  普通函数中的this就是VUE实例
      }
    }
  });
  //=>也可以使用实例直接调用methods中的方法
  app.test();
  //=>true
</script>
```

###　 computed

> `mustache`中的语法应该尽量的简介,而不是书写一些复杂的表达式,这并不利于维护,对于复杂的逻辑就应该使用计算属性,在`computed`中定义一些方法,复杂的逻辑可以在`computed`的方法中实现,而`mustache`中只需要调用这个方法就可以了,

```html
<div class="test">{{fullName}}</div>

<div class="test">{{firstName +　lastName}}</div>
<!--如果不是用计算属性,那么mustache中的表达式就会变得复杂-->
<script>
  const app = new Vue({
    el: ".test",
    data: {
      firstName: "pingye",
      lastName: "ling"
    },
    computed: {
      fullName: function() {
        return this.firstName + " " + this.lastName;
        //=>将data中的firstName和lastName拼接在一起,只需要在
        //=>mustache中调用这个属性即可
      }
    }
  });
</script>
```

> `methods`可以完成大部分的`computed`中的任务,不过`methods`和`computed`仍然具有差别性,`methods`只要页面更新就会执行一次这个方法,而`computed`则会将计算出的结果进行缓存,只要源数据不发生改变,那么`computed`会使用缓存的数据,并不会重新计算属性,这更加的利于性能的优化

```html
<div class="test">
  <!--只要方法被掉用,那么就会被执行一次-->
  <div class="test">{{fullName()}}</div>
  <div class="test">{{fullName()}}</div>
  <div class="test">{{fullName()}}</div>
  <div class="test">{{fullName()}}</div>

  <!--只要源数据中的数据不变,就只会使用缓存的内容,只会调用一次-->
  <div class="test">{{fullName2}}</div>
  <div class="test">{{fullName2}}</div>
  <div class="test">{{fullName2}}</div>
  <div class="test">{{fullName2}}</div>
</div>
<script>
  const app = new Vue({
    el: ".test",
    data: {
      firstName: "pingye",
      lastName: "ling"
    },
    methods: {
      fullName: function() {
        console.log(1);
        //=>会被执行四次
        return this.firstName + this.lastName;
      }
    },
    computed: {
      fullName2: function() {
        console.log(2);
        //=>只会执行一次
        return this.firstName + this.lastName;
      }
    }
  });
</script>
```

> `computed`中默认只有`getter`属性,不过也可以设置`setter`,不过这并不太常用

```html
<div class="test">{{fullName}}</div>
<script>
  const app = new Vue({
    el: ".test",
    data: {
      firstName: "pingye",
      lastName: "ling"
    },
    computed: {
      fullName: {
        set: function(newValue) {
          let names = newValue.split(" ");
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
          //=>当设置属性的时候会触发这个方法
        },
        get: function() {
          return this.firstName + this.lastName;
          //=>读取属性的时候会触发这个方法
        }
      }
    }
  });
</script>
```

## 指令

> 指令指的是可以写在 DOM 元素中的小命令,在 VUE 中以 v-开头,指令的书写方式类似于`HTML`的属性添加,可以在`=`后面书写变量或者简单的的表达式

### v-text

> 可以更新元素的文本内容,不过会将原有的内容覆盖,也会覆盖`mustache`模板引擎中的内容

```html
<div v-text="123"></div>
<!--可以书写具体的值也可以书写js中的变量,动态的绑定数据 -->
```

### v-html

> 动态更新元素的`innerHTML`,内容是按照普通的`HTML`内容插入,不会作为`VUE`的模板编译,

```html
<p v-html="url"></p>
```

### v-for

> 通过遍历源数据动态的更新列表项,通过遍历出来的数据动态的更新元素

```html
<ul class="list_box">
  <li v-for="item in arr">{{item}}</li>
</ul>
<script>
  let app = new Vue({
    el: ".list_box",
    data: {
      arr: [10, 20, 30]
    }
  });
</script>
```

> 可以使用`of`来代替`in`

```html
<ul class="list_box">
  <li v-for="item of arr">{{item}}</li>
</ul>
```

> 只要源数据具有`iterator`接口都可以将其遍历出动态的插入,例如`NodeList`,函数的`arguments`,同时`VUE`也支持对象的遍历,遍历对象时使用的是`Object.keys()`

```html
<ul class="list_box">
  <li v-for="item in obj">{{item}}</li>
</ul>
<script>
  let app = new Vue({
    el: ".list_box",
    data: {
      obj: {
        name: "绫",
        age: 20,
        sex: "女"
      }
    }
  });
</script>
```

> 同时可以将数组的索引对象的属性名和索引遍历出来

```html
<ul class="list_box">
  <li v-for="(item,prop,index) in obj">{{index}} {{prop}} {{item}}</li>
  <!--对象遍历的顺序,value==>key==>index-->
</ul>
<script>
  let app = new Vue({
    el: ".list_box",
    data: {
      obj: {
        name: "绫",
        age: 20,
        sex: "女"
      }
    }
  });
</script>
```

> 默认情况下如果源数据发生顺序上的改变,`VUE`并不会更改元素的顺序,而是直接对元素进行内容的更新,这种机制的性能更加的高效,如果需要源数据改变时对元素进行位置上的改变需要使用一个唯一的值对`VUE`进行提示

1. 对象可以使用`key`作为唯一的值
2. 数组可以使用索引

```html
<ul class="list_box">
  <li v-for="(item,prop,index) in obj" :key="prop.id">
    {{index}} {{prop}} {{item}}
  </li>
  <!--:key是v-bind:key的缩写,可以对VUE进行提示,从而重用和重排现有的元素-->
</ul>
<script>
  let app = new Vue({
    el: ".list_box",
    data: {
      obj: {
        name: "绫",
        age: 20,
        sex: "女"
      }
    }
  });
</script>
```

### v-cloak

> 这个指令会在`VUE`编译完成之前一直存在,在`VUE`编译结束之后会自动去除,可以结合`CSS`做一些特殊的效果

```html
<style>
  [v-cloak] {
    display: none;
    /*在VUE编译结束之前持有该指令的元素会被隐藏*/
  }
</style>
<span class="test" v-cloak>{{message}}</span>
<script>
  setTimeout(function() {
    const app = new Vue({
      el: ".test",
      data: {
        message: "123321"
      }
    });
  }, 2000);
</script>
<!--当定时器结束之后才会显示span元素,可以防止VUE加载缓慢时显示mustache源代码-->
```

### v-once

> 对持有该指令的元素及其子元素只渲染一次

```html
<span class="test" v-once>{{message}}</span>
<script>
  const app = new Vue({
    el: ".test",
    message: "123"
    //=>后期message改变作用的元素并不会重新渲染
  });
</script>
```

### v-pre

> `VUE`不会编译持有该指令的元素,会将原始的`mustache`显示在页面中,对其子元素仍然有效

```html
<span class="test" v-pre>
  {{message}}
  <div>{{message}}</div>
  <div>{{message}}</div>
  <!--设置了该指令的元素的子元素也不会进行编译-->
</span>
<script>
  const app = new Vue({
    el: ".test",
    data: {
      message: "123"
      //=>页面会显示原始的mustache语法,并不会编译
    }
  });
</script>
```

### v-bind

> 可以动态的将元素属性,样式,class 类名绑定在元素中,可以使用缩写形式`:`

可以动态的绑定`a`标签或者`img`标签的链接地址

语法: ==>`v-bind:属性="变量"`

```html
<a v-bind:href="link"></a>
<!--缩写-->
<a class="link" :href="link"></a>
<!--动态绑定a的超链接地址-->
<script>
  const app = new Vue({
    el: ".link",
    data: {
      link: "https://www.baidu.com"
    }
  });
</script>
```

> 动态的绑定`class`类名,可以使用数组或者对象的形式,可以书写多个`class`属性,在编译完成后会将其会并为一个

对象语法: ==>`v-bind:class="{类名:条件,类名:条件}"`

数组语法: ==>`v-bind:class="['类名','类名']"`

```html
<style>
  .isRed {
    color: red;
  }

  .isGreen {
    color: green;
  }
</style>
<div class="test" :class="obj" @click="show">{{content}}</div>
<!--直接在:class处绑定一个对象,会根据对象属性的布尔值进行动态的绑定-->

<div class="test" :class="['isRed','isGreen']" @click="show">{{content}}</div>
<!--会将数组内的class类名统一添加到元素中-->
<script>
  const app = new Vue({
    el: ".test",
    data: {
      content: "测试",
      obj: {
        isRed: true,
        isGreen: false
      }
    },
    methods: {
      show: function() {
        let obj = this.obj;
        obj.isRed === true
          ? ((obj.isRed = false), (obj.isGreen = true))
          : ((obj.isRed = true), (obj.isGreen = false));
        //=>动态的替换元素的类名
      }
    }
  });
</script>
```

> 动态修改行内的元素样式

```html
<div class="test" :style="obj">{{content}}</div>
<!--将对象中的属性值取出动态的赋值给对应的而样式-->
<div class="test" :style="[obj]">{{content}}</div>
<!--数组语法可以将多个对象中的样式统一添加进元素中-->
<script>
  const app = new Vue({
    el: ".test",
    data: {
      content: "测试",
      obj: {
        fontSize: "100px",
        color: "red",
        background: "green"
      }
    }
  });
</script>
```

> `v-bind`也可以动态的绑定属性

```html
<button v-bind:disabled="表达式"></button>
<!--控制按钮的点击,表达式为true时才可以点击-->
<div :value="content"></div>
<!--动态的绑定文本-->
```

### v-on

> 绑定一个事件监听器,简写符号`@`

```html
<div class="test" v-on:click="content++">{{content}}</div>
<!--当元素被点击是触发content++表达式-->
<script>
  const app = new Vue({
    el: ".test",
    data: {
      content: "0"
    }
  });
</script>
```

> 对于用于复杂逻辑的事件方法,最好的办法就是书写在`methods`中,然后事件触发时调用该方法,如果不传递传输,调用方法时可以不用书写`()`,同时`VUE`也会默认的将事件对象传递给该方法,如果需要手动的传递事件对象,需要使用`$event`,方法中的`this`指向`VUE`实例,`VUE`实例也可以直接调用该方法

```html
<button class="test" v-on:click1="test"></button>
<!--
  点击事件触发时执行一个方法,如果不使用()则会默认的将事件对象传递给方法
-->

<button class="test" v-on:click="test2()"></button>
<!--
  使用()调用,VUE则不会默认传递事件对象,如有方法有定义形参接收,则是undefined
-->

<button class="test" v-on:click="test3('123',$event)"></button>
<!--
  手动传递事件对象需要使用$event传递
-->
<script>
  const app = new Vue({
    el: ".test",
    data: {
      content: "测试"
    },
    methods: {
      test1(val) {
        console.log(val);
        //=>不使用(),默认传递的是事件对象
      },
      test2(val) {
        console.log(val);
        //=>使用(),不传递实参则默认是undefined
      },
      test3(val, ev) {
        console.log(val, ev);
        //=>传递多个参数时,传递事件对象需要使用$event,
        //=>事件对象总是在形参的最后一个
      }
    }
  });
  app.test();
  //=>实例可以直接调用事件中的方法
</script>
```

> 事件方法通常是处理复杂的逻辑,而方法中的细节则可以直接使用`VUE`提供的事件修饰符进行处理

| 修饰符                 | 作用                              |
| ---------------------- | --------------------------------- |
| .stop                  | 阻止事件冒泡                      |
| .prevent               | 阻止元素默认行为                  |
| .once                  | 事件触发一次就销毁                |
| .left                  | 只点击鼠标左键触发                |
| .right                 | 只点击鼠标右键触发                |
| .middle                | 只点击鼠标中键触发                |
| .self                  | 只有元素本身才会触发              |
| .{keyCode \| keyAlias} | 触发特定的按键时触发方法          |
| .capture               | 触发事件时使用捕获模式            |
| .passive               | 不会阻止元素的默认行为,会立即触发 |

```html
<div class="test" v-on:click="test">
  <button @click="test('123',$event)"></button>
</div>
<!--阻止是事件的冒泡传播,只会触发自身的事件 event.stopPropagation-->
<a href="https://www.baidu.com" class="test" v-on:click.prevent="test"></a>
<!--阻止浏览器的默认行为,例如a标签的超链接跳转 event.preventDefault()-->
<button v-on:click.once="test"></button>
<!--事件只会触发一次,触发之后就会销毁该事件-->
<button v-on:click.left="test"></button>
<!--鼠标点击左键时才会触发该事件-->
<button v-on:click.right="test"></button>
<!--鼠标触发右键时才会触发该事件-->
<button v-on:click.middle="test"></button>
<!--鼠标触发中键时才会触发该事件-->
<button c-on:keyup.enter="test"></button>
<!--使用键盘别名,键盘按下enter键才会触发该事件-->
<button class="test" v-on:keyup.13="test"></button>
<!--使用键盘码,当键盘码为13(enter)时触发事件-->
<div class="test" v-on:click="test('1')">
  <div v-on:click.self="test('2')"></div>
  <div v-on:click="test('3')"></div>
</div>
<!--
点击第三个div是通过冒泡机制会向上传播,一次触发div1和div2和点击事件
而添加了.self修饰符的元素则不会被冒泡阶段和捕获阶段触发,只有自身被点击
才会触发事件
-->

<button class="test" c-on:click.passive="test"></button>
<!--
  .passive不会阻止浏览器的默认行为,会立即触发,在scroll和移动端的touchmove中
  可以增加性能
-->
================================================
<!--多个修饰符之间可以串联使用-->
<div class="test" v-on:click="test('123')">
  <a href="https://www.baidu.com" v-on:click.prevent.stop="test($event)"
    >{{content}}</a
  >
</div>
<!--串联使用,阻止冒泡传播的时候也阻止标签的默认行为-->

==============================================
<!--同一个元素绑定多个事件时可以使用对象的语法,不用书写on-->
<button class="test" v-on="{mousedown:test,mouseup:test}"></button>
=================================================
<!--绑定的事件中可以直接书写简单的表达式,同时$event可以直接使用-->
<input type="text" :value="content" @input="content=$event.target.value" />
<!--实现双向数据绑定,$event.target就是触发事件的事件源-->
```

> 在滚动事件中设置`.passive`可以增加性能,在默认的情况下浏览器只有当事件触发并且在执行的时候才会知道有没有阻止默认的行为,当滚动事件触发的时候,没触发一次浏览器都会查询是否阻止了默认的行为,而浏览器并不会查询设置了`.passive`修饰符的事件,回立即触发默认行为,和`.prevent`修饰符一起使用时`.prevent`会失效

### v-if

> 根据表达式的真假判断元素是否被创建或者销毁,可以通过`v-else-if`和`v-else`做多重判断,不过通常复杂的判断还是会放在`methods`中进行处理

```html
<div class="test">
  <div v-if="test==='A'">test是A的时候显示</div>
  <div v-else-if="test==='B'">test是B时显示</div>
  <div v-else-if="test==='C'">test是C时显示</div>
  <div v-else>都不显示我显示</div>
  <!--v-if和v-else-if以及v-else必须是相连的元素,否则VUE将无法识别-->
</div>
<script>
  const app = new Vue({
    el: ".test",
    data: {
      content: "测试",
      test: "A"
    }
  });
</script>
```

> 默认情况下多个如果多个条件判断的元素时相同的,那么`VEU`将会复用它们,而不是重新的创建,如果不希望元素之间的复用,则可以指定一个每个元素唯一的`key`值,

```html
<div class="test">
  <p v-if="test">
    <label for="email">用户邮箱</label>
    <input type="email" id="email" placeholder="请输入你的邮箱名" />
  </p>

  <p v-else>
    <label for="name">用户姓名</label>
    <input type="text" id="name" placeholder="请输入你的用户名" />
  </p>
  <button @click="test=!test">切换选项</button>
</div>
<!--
  默认情况下VUE会复用两个输入框,只会替换他们的placeholder
  如果邮箱名的输入框中已经书写了内容,那么此时切换到另一个输入框时
  VUE只会替换他们的placeholder,已经输入的内容并不会消失,而是会
  继续存在,这是一种更加高效的机制,如果不需要这种机制,可以为两个输入框
  指定一个唯一的key值,来提示VUE,他们之间并不需要复用
-->
<input type="email" id="email" placeholder="请输入你的邮箱名" key="email" />
<input type="text" id="name" placeholder="请输入你的用户名" key="name" />
```

### v-show

> 根据表达式的真假来决定元素的`display`样式,并不会销毁元素

```html
<div class="test" v-show="test"></div>
<button></button>
<script>
  const app = new Vue({
    el: ".test",
    data: {
      test: true
      //=>v-show根据此条件判断元素的隐藏显示
    }
  });
  document.querySelector("button").addEventListener("click", () => {
    app.test = false;
    //=>点击按钮时切换v-show表达式的条件
  });
</script>
```

### v-model

> 实现双向数据绑定,可以随着表单数据的不同而进行实时更新,原理使用的是`v-bind`绑定数据和`v-on:input`表单事件同时进行的,绑定之后表单的`checked selected value`将会失效,默认值可以在`data`中声明数据时绑定

支持的标签

1. input
2. select
3. textarea

```html
<div class="container">
  <input type="text" v-model="content" />
  {{content}}
  <!--双向数据绑定,其中一个数据改变后,另一个数据也会改变-->
</div>
<script>
  const app = new Vue({
    el: ".container",
    data: {
      content: "测试文字"
    }
  });
</script>
```

> 双向数据绑定的原理

```html
<div class="container">
  <input type="text" :value="content" @input="change" />
  <h2>{{content}}</h2>
  <!--也可以使用双向数据的绑定-->
</div>

<div class="container">
  <input type="text" :value="content" @input="content=$event.target.value" />
  <!--更加简便的写法,绑定的事件中的表达式可以直接使用$event事件源-->
</div>
<script>
  const app = new Vue({
    el: ".container",
    data: {
      content: "测试文字"
    },
    methods: {
      change(e) {
        this.content = e.target.value;
        return this.content;
      }
    }
  });
</script>
```

修饰符

- lazy =>将`input`事件替换为`change`事件,替换后并非实时更新,而是数据停止改变后才会更新
- number =>将用户输入的值转换为数字,使用的是`parseFloat`,如果无法转换则返回原数据
- trim =>自动去除用户输入的首位空格

```html
<div class="container">
  <input type="text" v-model.lazy="content" />
  <!--默认使用的是input事件,lazy可以将事件类型修改为为change,失去焦点后才会触发数据的更新-->

  <input type="number" v-model.number="content" />
  <!--将输入的内容转换为数字,非数字时不会进行数据的更新-->

  <input type="text" v-model.trim="content" />
  <!--只会去除首尾的空格,内容中的不会去除-->
</div>
```

> 单选框 多选框 下拉选框

```html
<!--单选框-->
<div class="container">
  <label for="man"></label>
  <input type="radio" id="man" value="男" v-model="picked" />
  <label for="woman"></label>
  <input type="radio" id="woman" value="女" v-model="picked" />
  <h2>当前的选择是:{{picked}}</h2>
</div>
<!--多选框-->
<div class="container">
  <input type="checkbox" value="篮球" v-model="hobbys" id="bask" />
  <label for="bask">篮球</label>
  <input type="checkbox" value="足球" v-model="hobbys" id="football" />
  <label for="football">足球</label>
  <input type="checkbox" value="排球" v-model="hobbys" id="volleyball" />
  <label for="volleyball">排球</label>
  <h2>{{hobbys}}</h2>
</div>
<!--下拉框-->
<div class="container">
  <select v-model="fruit">
    <option>椰子</option>
    <option>橘子</option>
    <option>桃子</option>
  </select>
</div>
<script>
  const app = new Vue({
    el: ".container",
    data: {
      picked: "男",
      //=>单选框中此处书写选框值等于默认的选中值
      hobbys: [],
      //=>多选框,数组中书写的值等于默认选中的值
      fruit: "",
      fruits: []
      //=>下拉框的单选使用字符串,多选使用数组,
    }
  });
</script>
```

> 值绑定,动态的设置多选框和下拉框中的数据

```html
<div class="container">
  <label v-bind:for="item" v-for="item of inputData"
    >{{item}}
    <input
      type="checkbox"
      v-bind:value="item"
      v-bind:id="item"
      v-model="hobbys"
    />
  </label>
  <!--绑定时需注意v-bind的的绑定问题-->
  <h2>{{hobbys}}</h2>
</div>
<script>
  const app = new Vue({
    el: ".container",
    data: {
      inputData: ["足球", "羽毛球", "乒乓球", "排球"],
      //=>动态的将数组中的内容添加到表单元素中
      hobbys: []
    }
  });
</script>
```

## 组件

> 组件是一个可以复用的`VUE`实例,可以将页面中多次使用的`HTML`代码进行封装和重用,根据需求组件可以复用任意的次数,组件只有在`VUE`挂载的元素中使用才有效

**原始写法:**

```html
<div class="container">
  <!--3. 组件的使用 -->
  <my_cpn></my_cpn>
</div>
<script>
  //==>1. 创建一个组件构造器
  const cpn = Vue.extend({
    template: `<div>
    <h2></h2>
    <p></p>
  </div>`
    //=>创建一个组件模板,模板中包含多个HTMl元素时需要使用一个标签包裹起来
  });
  //==> 2.  注册组件
  Vue.component("my_cpn", cpn);
  //==>第一个参数是自定义组件的标签名,
  //==>第二个参数是创建的组件模板

  //=>创建一个VUE实例
  const app = new Vue({
    el: ".container"
  });
</script>
```

**语法糖写法:**

```javascript
Vue.component("my_cpn", {
  template: `
<div>
  <h2>标题</h2>
  <p>内容</p>
</div>`
});
/**
 * 可以直接在注册组件的时候书写模板
 * VUE内部也会调用extend进行解析
 */
```

**模板抽离:**

> 将创建的组件模板进行抽离,单独书写

```html
<script type="text/x-template" id="cpn">
  <!--script标签的type属性需要更改-->
  <!--同时需要制定一个id用于注册组件是进行绑定-->
  <div>
    <h1>抽离出来的组件</h1>
  </div>
</script>
<template id="cpn">
  <!--也需要使用id-->
  <div>
    <h2>抽离出的组件模板</h2>
  </div>
</template>

<script>
  const app = new Vue({
    el: ".container",
    components: {
      my_cpn: {
        template: "#cpn"
        //=>绑定对应的模板ID
      }
    }
  });
</script>
```

> 组件也是一个`VUE`的实例,也拥有根实例所拥有的方法,根实例拥有的属性和方法基本上都可以使用,不过也有例外

1. `el`为根实例独有的属性,组件实例无法使用
2. `data`必须是一个函数

> 组件实例的`data`属性必须是一个函数,可以把需要的数据放在一个对象中,然后通过函数将这个对象返回供实例使用

```html
<div class="container">
  <my_cpn></my_cpn>
</div>
<template id="cpn">
  <div>
    <h2>当前的计数是:{{content}}</h2>
    <button @click="content++">+</button>
    <button @click="content--">-</button>
  </div>
</template>
<script>
  const app = new Vue({
    el: ".container",
    components: {
      my_cpn: {
        template: "#cpn",
        data() {
          return {
            content: 0
          };
        }
      }
    }
  });
</script>
```

> 组件的特点在于封装和重用以及灵活性,而每一次使用组件都会返回一个新的组件实例,而如果`data`属性仍然是一个对象的话那么所有的实例都会公用这一个对象,当所有的实例都使用这一个对象时就会造成一个实例修改`data`属性的数据时,所有的实例也都会修改,而`data`是一个函数话那么每一次创建实例返回的都是不同的对象,返回的对象并不会指向同一个内存空间,这样就可以避免一个实例发生变化所有的实例跟着变化了

### 全局 / 局部 组件

> 全局和局部组件的区分在于注册组件时的作用域,如果全局组件和局部组件命名重复,则局部组件会覆盖全局组件

```javascript
Vue.component("my_cpn", {
  template: `
<div>
  <h1>全局组件</h1>
</div>
`
  //=>在全局作用域注册的组件就是全局组件
});
const app = new Vue({
  el: ".container",
  components: {
    my_cpn: {
      template: `
<div>
  <h1>局部组件</h1>
</div>
`
      //=>在实例中注册的组件就是局部组件
    }
  }
});
```

### 父子组件

> 组件的父子级关系,在父组件注册的子组件无法直接书写在页面中,子组件也无法访问父组件和`VUE`根实例的数据

```javascript
Vue.component("my_cpn", {
  template: `
<div>
  <h1>我是父组件</h1>
  <my_cpn2></my_cpn2>
</div>
`,
  components: {
    my_cpn2: {
      template: `
<div>
  <h2>我是子组件</h2>
</div>
`
    }
  }
});
```

#### 父传子通信

> 默认情况下子组件是无法使用父组件中的数据,父组件中的数据传递至子组件需要通过`props`传递

```html
<div class="container">
  <explore v-bind:films="film"></explore>
  <!--
  绑定props中定义的数据,内容为父组件中需要绑定的数据
  绑定数据的时候VUE并不支持驼峰命名法,
  多个单词之间需要使用 - 连接
  例如:myContent  ==> my-content
  如果不使用v-bind绑定,VUE当成字符串传递
  v-bind可以告诉VUE绑定的是一个表达式而不是
  静态的字符串,使用v-bind也可以以字面量的方式
  书写对象,数组,以及任何表达式,也可以书写变量 
--></div>
<template id="cpn">
  <div>
    <ul>
      <li v-for="item of films">{{item}}</li>
      <!--需要使用的数据可以在定义模板的时候直接使用-->
    </ul>
  </div>
</template>
<script>
  const app = new Vue({
    el: ".container",
    data: {
      film: ["海王", "海尔兄弟", "加勒比海盗"]
    },
    components: {
      //=>注册一个组件
      explore: {
        //=>组件的名称
        template: "#cpn",
        //=>绑定组件模板中自定义的ID名
        props: ["films"]
        //=>定义需要接收的父组件中的数据,数组中可以接受任意个参数
      }
    }
  });
</script>
```

> `props`也可以使用对象的形式,同时对象形式也可以对接受的数据进行类型检测

```javascript
const app = new Vue({
  el: ".container",
  data: {
    film: ["海王", "加勒比海盗", "海尔兄弟"]
  },
  components: {
    explore: {
      template: "#cpn",
      props: {
        title: String,
        amount: Number,
        money: Array,
        learned: Boolean,
        girlFriend: Object,
        means: Function,
        only: Symbol,
        /**
         * 如果传递的数据类型和指定的数据类型不匹配,浏览器会发出警告
         * 但是并不会阻止代码的原型,null和undefined会允许任何类型
         * 的值传入,如果一个数据可以是多种数据类型时可以使用数组将其放在一起
         * title:[String,Number,Array]
         **/
        props: {
          films: {
            type: String,
            default: "123",
            required: true
            /**
             * type ==>希望传递的数据类型
             * default ==>没有数据传递使用默认值
             * required ==>必须传递数据,
             * 传递类型不一致和没有传递数据浏览器只会发出警告,
             * 并不会终止代码的解析,同时只要传递了数据就不会使用
             * 默认值,即使传递的值并不是所希望的值
             **/
          },
          props: {
            films: {
              type: Object,
              default() {
                return {};
                //=>如果希望的值是Object或者是Array则必须使用函数才能获取默认
              },
              required: true
            }
          }
        }
      }
    }
  }
});
```

> `props`是单向数据流,它会使父子组件之间形成单向下行绑定,父组件中的数据发生改变会直接影响子组件的数据,每次父组件发生数据变化子组件都是刷新为最新的数据,但是如果子组件改变数据,浏览器则会发出警告,那是因为子组件也可以改变父组件中的数据,如果一个父组件中的数据同时供多个子组件使用,那么所有的子组件都会发生变化,对象或者数据是传递的是对应的内存地址,

#### 子传父通信

> 需要使用自定义事件,自定义事件的名称并不会被解析成 JS 属性名或者变量名,同时也不会进行自动的大小写转换,而`v-on`的事件监听器则会在 DOM 中被转换成小写,因为 HTML
> 对大小写并不敏感,所以自定义的事件名必须和接收的事件完全匹配才可以

```html
<div class="container">
  <explore @receive="result"></explore>
  <!--
监听自定义事件,子组件触发事件时发送数据
receive  ==>发送时的自定义事件名
result  ==>父组件接收数据的自定义事件名
--></div>
<template id="cpn">
  <div>
    <input type="radio" value="男" id="man" />
    <label for="man">男</label>
    <input type="radio" value="女" id="woman" />
    <label for="woman">女</label>
    <button @click="send">按钮</button>
    <!--
              点击button发送数据,
              send  ==>子组件methods中定义的方法
        -->
  </div>
</template>
<script>
  const app = new Vue({
    el: ".container",
    methods: {
      result(item) {
        console.log(item);
        //=>父组件自定义事件接收数据
      }
    },
    components: {
      explore: {
        template: "#cpn",
        methods: {
          send() {
            let man = document.querySelector("#man"),
              woman = document.querySelector("#woman"),
              selectedItem = man.checked
                ? man.value
                : woman.checked
                ? woman.value
                : null;
            this.$emit("receive", selectedItem);
            /**
             * receive  ==>发送自定义事件的名称
             * electedItem  ==>发送时传递的数据
             *
             **/
          }
        }
      }
    }
  });
</script>
```

#### 组件访问

**子访问父:**

```html
<div class="container">
  <explore></explore>
</div>
<template id="cpn">
  <div>
    <span>{{content}}</span>
  </div>
</template>
<script>
  const app = new Vue({
    el: ".container",
    data: {
      content: "测试文字"
    },
    components: {
      explore: {
        template: "#cpn",
        data() {
          return {
            content: this.$parent.content,
            //=>使用$parent可以直接访问父组件的属性
            content2: this.$root.content
            //=>使用$root可以访问根实例的属性
          };
        }
      }
    }
  });
</script>
```

**父访问子:**

```html
<div class="container">
  <explore ref="count"></explore>
  <!--设置一个ref属性供父组件访问-->
</div>
<template id="cpn">
  <div>
    <h2>{{content}}</h2>
  </div>
</template>
<script>
  const app = new Vue({
    el: ".container",
    methods: {
      test() {
        console.log(this.$children[0].content);
        //=>只可以获取直属的子组件,返回的是一个数组,通过数组的索引获取子组件的属性
        //=>返回的顺序有时并不是固定的,同时也不是响应式的,
        console.log(this.$refs.count.content);
        /**
         * 在父元素中使用$refs访问在子组件中设置的ref属性
         * 返回一个子组件的对象,通常使用这种方法会更加的安全
         **/
      }
    },
    components: {
      explore: {
        template: "#cpn",
        data() {
          return {
            content: "测试文字"
          };
        }
      }
    }
  });
</script>
```

### 插槽

> 通常一个组件的内容并不是固定的,可以根据需求动态的更改一些组件的元素或者属性,`slot`可以在定义的组件模板中使用,当使用组件时传入的元素将会把`slot`元素覆盖,`slot`这模板中代表这预留的空位

```html
<div class="container">
  <explore>
    <span>{{message}}</span>
  </explore>
  <!--
  span ==>使用组件时传递的自定义元素,会替换slot
  插槽可以直接传递内容,HTML元素,或者是另一个组件
  -->
  ====================================================
  <explore></explore>
  <!--
  直接使用组件并且没有传递元素时,插槽自定义的内容将会被展示
-->
  ====================================================
  <explore>
    <span slot="count">替换插槽</span>
  </explore>
  <!--2.6.0中已被废弃,但仍可用
  只有插槽的name属性名和替换元素的slot的属性名相同时才会被替换
  也可以将slot绑定给一个template元素,那么template中的所有元素
  将会覆盖插槽中的内容
-->
  ====================================================
</div>
<template id="cpn">
  <div>
    <h2>{{title}}</h2>
    <span>{{content}}</span>
    =============================================================
    <slot>
      <!--使用slot预留出使用组件时传入的元素-->
    </slot>
    ==============================================================
    <slot>
      <span>插槽默认的内容</span>
    </slot>
    <!--
  插槽可以设置一个默认值,他会在组件使用时没有传入元素时被展示
-->
    ==============================================================
    <slot name="count">
      <!--2.6.0中已经废弃了此处name的一种用法(slot)
具名插槽,使用组件传递自定义的元素时必须制定具名名字的插槽
否则将不会替换插槽
-->
    </slot>
    ===============================================================
  </div>
</template>
```

#### 插槽作用域

> 父模板的内容都是在父级作用域中编译的,子模板的内容都是在字模板中编译的,不同的作用域之间无法直接访问数据

```html
<div class="container">
  ===============================================================
  <h2>{{sonContent}}</h2>
  <!--报错!无法访问子组件中的属性-->
  <h2>{{parentContent}}</h2>
  <!--正常访问自身作用域中的属性-->
  ===============================================================
  <explore>
    <h2>{{parentContent}}</h2>
    <!--正常访问父组件中的属性-->
  </explore>
  ===============================================================
</div>
<template id="cpn">
  <div>
    ===============================================================
    <slot>
      <h2>{{parentContent}}</h2>
      <!--报错!无法访问父组间中属性-->
    </slot>
    ===============================================================
    <slot>
      <h2>{{sonContent}}</h2>
      <!--  正常访问自身作用中的属性-->
    </slot>
    ===============================================================
  </div>
</template>
<script>
  const app = new Vue({
    el: ".container",
    data: {
      parentContent: "我是父"
    },
    components: {
      explore: {
        template: "#cpn",
        data() {
          return {
            sonContent: "我是子"
          };
        }
      }
    }
  });
</script>
```

#### 具名插槽

> 当一个组件中拥有多个插槽时,提供一个名称可以很好的辨别每一个插槽,这对替换指定的插槽很有用处,`v-slot`是`VUE`2.6.0
> 中新增的一种具名插槽的语法,`slot`语法已经被废除,但是仍然可用,`slot`语法可以作用于元素,也可以作用于自定义的组件,而`v-slot`只能作用于`template`中,`template`中的内容会将插槽内的所有元素都替换,即使元素数量并不匹配

```html
<div class="container">
  <explore>
    <template v-slot:header>
      <h2>替换header的插槽</h2>
    </template>
    ===============================================================
    <template v-slot:default>
      <h2>替换content的插槽</h2>
    </template>
    <!--
  不存在name的插槽默认的name是default
  对于不存在name属性的插槽时可以不使用v-slot筛选
  template也可以省略,
-->
    ===============================================================
    <template v-slot:footer>
      <h2>替换footer的内容</h2>
    </template>
  </explore>
</div>
<template id="cpn">
  <div>
    <slot name="header">
      <h2>默认header的插槽</h2>
    </slot>
    ===============================================================
    <slot>
      <h2>默认content的插槽</h2>
    </slot>
    ===============================================================
    <slot name="footer">
      <h2>默认footer的插槽</h2>
    </slot>
  </div>
</template>
```

#### v-slot

> 使用 v-slot 可以让父组件访问子组件中的数据,并且`v-slot`统一了`slot`和`slot-scope`采用的单一语法,可以潜在的统一普通插槽和做鱼用插槽的用法

```html
<div class="container">
  <explore>
    <template v-slot:default="user">
      <!--
        当组件中只有匿名插槽时可以直接省略default,组件的标签也可以作为插槽的模板
        <explore v-slot="user">

        v-slot也支持语法糖的写法: #
        如果一个组件中具有匿名插槽的同时还具有具名插槽必须对于匿名插槽的替换必须书写default,
        否则会导致插槽的作用域不明确
        <template #default="user">
        <template #fullName="user">
      -->
      <h2>{{user.fullName.firstName}}</h2>
    </template>
  </explore>
</div>
<template id="cpn">
  <div>
    <slot v-bind:full-name="{firstName}">
      <!--
        full-name使用 - 连接的格式在使用时才支持驼峰命名
        如果此处直接书写驼峰在使用是则只能全部使用小写
      -->
      <h2>{{lastName}}</h2>
    </slot>
  </div>
</template>
```

> `v-slot`也可以使用解构赋值的语法对传递的`props`进行解析,同时也可以使用表达式进行动态的解析

```html
<div class="container">
  <explore>
    <template v-slot:username="{first,last}"></template>
    <!--对传递的props进行解构,解构出的数据可以直接使用-->

    <template v-slot:username="{first:'别名',last:'别名'}"></template>
    <!--对于解构的数据和JS一样,可以使用别名的方式替代原有数据名的使用-->

    <template v-slot:username="{first={赋值默认值}}"></template>
    <!--对于没有具体数据的书名也可以赋值默认值-->

    <template v-slot:username="{...user}"></template>
    <!--一次性将所有的数据进行解构-->
  </explore>
</div>
<template id="cpn">
  <slot name="username" v-bind="{first,last}"></slot>
  <!--
    v-bind绑定的特性并不能替代 name
    v-bind使用语法糖时必须书写参数
    如果v-bind有绑定参数,v-slot使用
    也需要添加参数
  -->
</template>
```
