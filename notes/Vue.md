# VUE

> 是`JS`中的一套用于构建用户界面的渐进式框架

## MVVM

- M >>> model >>> 模块
- v>>> view >>> 识图
- VM >>> ViewModel >>> 识图模块

> `MVVM`使用的是数据驱动,并不是 DOM 驱动,普通的开发模式是通过操作 DOM 来改变页面中展示的效果,VUE 则是直接操作数据,通过响应式动态的改变页面,并不是直接的操作 DOM,但是并不是所有的数据都是响应式的,

在`VUE`中通过索引的方式修改数组并不会动态的更新页面，但是数据是可以修改成功的

## 响应式原理

### 对象

如果对象不在`VUE`中`data`属性中，`VUE`就无法检测对象属性的变化

```javascript
const vm = new Vue({
  data:{
    a:'1'
  }
})
vm.a;
//=>数据是响应式的

vm.b;
//=>非响应式
```

在对对象修改的时候，`VUE`会将对象的所有属性遍历出来，同时依赖`Object.defineProperty()`方法将这些属性全部转为`getter`和`setter`，`VUE`就是通过`Object.defineProperty()`方法对对象的数据进行追踪从而实现数据的响应式更新

### 数组

1. 通过索引值修改数组`VUE`无法检测到数组的变化
2. 修改数组的长度也无法检测到数组的变化

对于数组通过`splice`,`push`,'reverse'等方法修改时是可以检测到数组的变化的，那是因为`VUE`重写了原生的这些方法，在`VUE`中使用这些方法其实使用的都是`VUE`重写后的方法

## 生命周期

![QuWfUA.png](https://s2.ax1x.com/2019/12/02/QuWfUA.png)

> 生命函数中禁止使用箭头函数,因为`this`的指向会变得不明确,并不指向 VUE 的实例,所有的组件也都用于相同的生命周期函数,同时组件之间的生命周期函数并不通用,越靠近根节点的组件相同的声明周期函数执行的越靠后

**beforeCreate:**

> 刚初始化`VUE`实例时可以调用的声明周期函数,此时实例的`data`和`methods`等数据还没有初始化,只有一些默认的事件的生命周期函数

**created:**

> 实例初始化之后挂载之前调用的生命周期函数,此时的`data`和`methods`的数据已经被初始化,

**beforeMount:**

> 挂载点进行挂载之前调用的声明周期函数,此时模板已经编译好并且调用了`render`函数进行了渲染,只是还没有把模板渲染到真正的页面中

**mounted:**

> 挂载完毕后调用的声明周期函数,此时已经将模板渲染 到了页面中,此时已经可以操作完整的 DOM 节点了

**beforeUpdate:**

> 当数据发生改变时调用的声明周期函数,此时的数据已经是最新的数据了,而页面中展示的仍然是旧的数据,页面还没有和数据保持同步,每一次数据的变化都会调用这两个函数

**updated:**

> 数据改变之后调用的生命周期函数,此时页面中展示的数据已经和最新的数据保持了同步,每一次数据的变化都会调用这两个函数

**beforeDestroy:**

> 实例销毁之前调用的声明周期函数,此时的`data`和`methods`等都处于可用状态

**destroyed:**

> 实例销毁之后调用的声明周期函数,此时的实例已经被完全销毁

## options

> 在初始化`VUE`实例时可以做的一些配置项,是一个对象

### el

> 用于将页面中的 DOM 元素挂在到`VUE`实例中,可以是一个类名,也可以是一个选择器或者是 DOM 对象实例,VUE 的所有操作只会对挂载点中的元素有作用,通常是将页面中`body`的第一个元素作为挂载点,`$mount`和`el`拥有同样的作用,都可以挂载一个实例,不过`$mount`是一个方法,可以返回实例自身,因此可以实现链式调用

```javascript
//=>初始化一个VUE实例
let test = document.getElementById("test");
const app = new Vue({
  el: "#test"
});

//=>后期也可以使用VUE实例进行访问
//=>app.$el   app['$el']

//=>$mount
const app = new Vue({}).$mount("#app");
//=>设置挂载点,返回一个实例自身
```

### data

> `VUE`实例的数据对象,可以将`data`中的数据动态的响应到页面中的`DOM`元素,如果数据是一个数组,同时修改的方式是通过索引的方式修改的则无法实现响应式

```html
<div class="test">{{content}}</div>
<!--
data中的数据会被动态的响应在DOM元素中,data中的数据改变时
DOM元素中的内容也会改变,通过索引改变的数据除外
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

### computed

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

> `methods`可以完成大部分的`computed`中的任务,不过`methods`和`computed`仍然具有差别性,`methods`只要触发就会执行一次这个方法,(页面更新,用户行为)而`computed`则会将计算出的结果进行缓存,只要源数据不发生改变,那么`computed`会使用缓存的数据,并不会重新计算属性,这更加的利于性能的优化

`computed`的缓存机制内部使用的是对象的结构，将`computed`中计算出的值以对象的形式存储

```html
<div class="test">
  <!--只要被调用就会重新拉取数据,进行计算-->
  <div class="test">{{fullName()}}</div>
  <div class="test">{{fullName()}}</div>
  <div class="test">{{fullName()}}</div>
  <div class="test">{{fullName()}}</div>

  <!--只要源数据中的数据不变,就只会使用缓存的内容,并不会重新拉取数据-->
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

### render

> 是一个渲染函数,也可以创建`html`元素,不同于`template`的是`render`函数是直接创建虚拟`DOM`,并不需要编译,
> 该函数拥有一个参数`createElement`,也是一个函数,

```javascript
new Vue({
  render: function(createElement) {
    return createElement("div", {}, []);
    /**
     * div  >>> 创建标签的模板,可以是一个String,Object,function
     * {}   >>>包含创建标签相关的数据对象
     * []  >>> 由createElement生成的子节点,可以是一个Array或者是String
     **/
  }
});
```

### filter

> VUE 中的过滤器,通常都是针对数据的格式进行操作,过滤器只能使用在`{{}}`和`v-bind`中,过滤器通过`|`进行和普通的数据进行链接,不过通常都是嫁给你过滤器书写在表达式的后面

```vue
<script>
Vue.filter("过滤器名", function(value) {
  //=>注册一个全局过滤器
  //=>value  >>>在使用过滤器时的表达式的第一个值
});

new VUe({
  el: "#app",
  filters: {
    //=>定义过滤器
  }
});
//=>使用方法
{{message | 过滤器;}}
</script>
```

注册全局过滤器时是`filter`注册局部过滤器时使用的是`filters`,要区别开最后一位的 s

```vue
<li v-for="(item, index) of obj">{{item.sex | formatSex}}</li>
<!--item.sex会被当做参数传递进过滤器中-->
<script>
const vm = new Vue({
  data: {
    obj: [
      { name: "ping", sex: 0 },
      { name: "ling", sex: 0 },
      { name: "ding", sex: 1 }
      ]
  },
  filters: {
    formatSex(value) {
      return value ? "男" : "女";
      //=>通过过滤器对相应的数据格式进行操作
    }
  }
}).$mount("#app");
</script>
```

在使用过滤器的时候可以传递零到多个值

```vue
<div id="demo">
  <p>{{persons[0].sex | formatSex('性')}}</p>
<!--  在使用过滤器时传递一个参数-->
</div>
<script>
  new Vue({
    data:{
      persons:[
        {id:1,sex:0}
      ]
    }，
    filters:{
      formatSe(value,a){
        return value ? '男' + a : '女' + a;
      }
    }
  }).$mount('#demo')
</script>
```

## 指令

> 指令指的是可以写在 DOM 元素中的小命令,在 VUE 中以 v-开头,指令的书写方式类似于`HTML`的属性添加单的表达式

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
<!--字面量数据或者是一个变量进行动态的设置 -->
```

### v-for

> 通过遍历源数据动态的更新列表项,通过遍历出来的数据动态的更新元素,遍历出的数据只可以供当前作用域中的元素访问,无法访问父作用域中遍历出的数据

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

> 这个指令会在`VUE`编译完直存在,在`VUE`编译结束之后会自动去除,可以结合`CSS`做一些特殊的效果

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
<!--将对象中的属性值取出动态的赋值给对应的样式-->
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

> 对于用于复杂逻辑的事件方法,最好的办法就是书写在`methods`中,然后事件触发时调用该方法,如果不传递参数,调用方法时可以不用书写`()`,同时`VUE`也会默认的将事件对象传递给该方法,如果需要手动的传递事件对象,需要使用`$event`,方法中的`this`指向`VUE`实例,`VUE`实例也可以直接调用该方法

```html
<button class="test" v-on:click1="test"></button>
<!--
  点击事件触发时执行一个方法,如果不使用()则会默认的将事件对象传递给方法
  对于不传递参数可以忽略括号
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
| native                 | 监听组件的根元素的原生事件        |

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
<!--多个修饰符之间可以串 修饰符之间可联使用-->
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
>
> 组件中绑定的所有时间都会别解析成是自定义的事件,因此无法触发事件原有的操作,通过给事件添加修饰符`native`可以将绑定的事件解析成原生的 DOM 事件

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
      //=>单选框中此处书写选框 框中此处书值等于默认的选中值
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

### 自定义指令

`VUE`支持自定义指令以应对不同的使用开发需求

1. `directive`注册全局指令
2. `directives`注册局部指令

```vue
<div id="demo">
  <p v-upper-text="msg"></p>
</div>
<script>
  new Vue({
    data:{
      msg:'i love you'
    },
    //=>注册局部指令
    directives:{
        /**
        * js 语法并不支持使用 - 作为函数或者变量的名称
        * 但是可以使用字符串，无论这个字符串的字符是什么
        * 在自定义指令的时候，由于指令名存在 -
        * 可以使用字符串格式的函数名
        */
      'upper-text' (el,binding){
        /**
        * el == 指令绑定的元素，可以直接操作元素
        * binding == 一个对象，包含指令的相关信息
        **/
        el.innerText = binding.value.toUpperCase();
        //=>binding.value == 指令的绑定的信息
      }
    }
  }).$mount('#demo');
  Vue.directive('upper-text',function(el,binding){});
  //=>注册全局自定义指令
</script>
```

## 组件

> 组件是一个可以复用的`VUE`实例,可以将页面中多次使用的`HTML`代码进行封装和重用,根据需求组件可以复用任意的次数,组件只有在`VUE`挂载的元素中使用才可以,

**组件标签中无法直接使用原生的事件,默认情况下绑定的事件都会被解析成自定义事件,给事件添加`native`可以保证触发的是原生的事件行为**

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
  使用组件时绑定需要传递的数据,
  绑定数据的时候VUE并不支持驼峰命名法,
  多个单词之间需要使用 - 连接
  例如:myContent  ==> my-content
  如果不使用v-bind绑定,VUE会把内容当成字符串传递
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
+
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
         * 但是并不会阻止代码的运行,null和undefined会允许任何类型
         * 的值传入,如果一个数据可以是多种数据类型时可以使用数组将其放在一起
         * title:[String,Number,Array]
         **/
        props: {
          films: {
            type: [String, Number],
            default: "123",
            required: true
            /**
             * type ==>希望传递的数据类型,可以书写多个类型
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
                //=>如果希望的值是Object或者是Array则必须使用函数才能获取默认值
              },
              required: true,
              validator(value) {
                return value > 100 && value < 1000;
              }
              /**
               * validator  >>> 对传递的数据进行自定义的验证
               * 是一个函数,参数为传递的值,如果返回一个false
               * 则验证失败,只有返回的值转换为Boolean值为true时
               * 验证才会通过,不return也会验证失败,
               **/
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
    <button @click="send">按钮</button>
    <!--
         点击button触发自定义事件
         send  ==>子组件methods中定义的方法
        -->
  </div>
</template>
<script>
  new Vue({
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
         * $refs  >>> 可以获取到所有带有ref属性的DOM对象或者组件实例
         * 返回一个对象,每一个dom对象或者组件实例都是对象的一个属性
         * DOM对象可以直接使用原生js的方法或者属性
         * 组件实例可以使用VUE的方法或者属性
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

#### 事件监听

1. 如果使用事件监听进行父子组件之间的通信,需要让自定义事件中的`this`和事件监听器中的`this`保持一致
2. 在子传父组件的时候可以在自定义事件监听的中使用`this.$parent`使其和父组件的`this`保持一致
3. 非父子之间通信可以使用`$root`绑定事件和触发事件监听器
4. 如果`this`的指向不一致则无法传递数据,但是`VUE`并不会对此操作报错,
5. 如果监听器绑定在生命周期函数中自定义事件触发时就会监听器就会立即监听到,
6. 如果绑定在属性中则需要使用函数将事件监听器包裹起来,并且只有等这个函数执行之后事件监听器才会生效

**\$on:**

> 监听当前实例上的自定义事件,事件有`$emit`触发,回调函数会接收所有事件触发函数之外的所有值

```vue
<script>
const son = {
  template: `
    <button @click="transfer">点击向父组件发送数据</button>`,
  /**
   * @click="transfer">>> 绑定点击事件
   * 按钮点击是触发transfer函数,通过$emit触发自定义事件
   * 第一各参数为事件的名称,其余的参数都会被当做参数被
   * 传递进监听器的回调函数中
   **/
  methods: {
    transfer() {
      this.$parent.$emit("receive", "传递给父组件的参数");
      //=>使用$parent让$emit触发父组件的自定义事件
      this.$root.$emit("receive", "传递给组件的数据");
      //=>通过$root可以让非父子之间进行数据传递,
      //=>将自定义事件的绑定和触发都绑定VUE的根实例上
    }
  }
};
const parent = {
  template: `
    <son></son>
  `,
  methods: {
    receive() {
      this.$on("receive", value => {
        console.log(value);
      });
      //=>接收子组件传递的数据
      this.$root.$emit("receive", data => {
        console.log(data);
      });
      //=>使用$root监听VUE根实例上的自定义事件
      //=>可以实现非父子组件之间的通信
    }
    /**
     * 创建一个事件监听器,第一各属性是自定义事件的名称
     * 第二个是一个回调函数,该回调函数的参数是触发自定义事件时传递的
     * 参数
     **/
  }
};
</script>
```

**\$once:**

> 监听当前实例上的自定义事件,使用方法和`$on`相同,唯一的区别就是`$once`在触发一次监听器之后就会立即销毁

**\$off:**

> 移除自定义事件监听器,如果没有提供参数则会将所有的事件监听器溢出,只提供事件则会将该事件所有的监听器移除,如果需要移除具体的某一个监听器则需要同时提供事件和监听器,

**\$emit:**

> 触发当前实例上自定义的实例,附加的参数都会传递给事件监听器的回调函数

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

## VUE/CLI

> `VUE`的脚手架工具,可以利用配置好的模板快速搭建一个项目工程,省去配置`webpack`配置文件的基本内容
>
> 3.0 的版本将`webpack.config.js`进行了隐藏,如果需要自己修改配置文件,需要在项目根目录下创建`vue.config.js`配置文件,通过文件内的`module.exports={}`进行配置,配置的首选项为`configureWebpack:{},`VUE 会自动和原有的配置文件进行合并

**Run-Time-Only:**

> 这个版本需要借助其他的工具将 VUE 文件编译成`javascript`文件,然后才能使用,只包含运行时的代码,所以代码体积会更轻量,在编译过程中会将组件中的`template`模板编译成`render`函数,所以运行的时候并不需要编译,因此性能也会稍好一些,通常是借助`vue-loader`进行编译

**Run-Time-Compiler:**

> 带有编译器的版本,因为 VUE 文件无法直接使用,所以需要提前将 VUE 文件编译成`render`函数才能够运行,而`Run-Time-Compiler`会在运行的时候编译文件,所以代码体积会稍大一些,性能也会稍差,

## vueRouter

> VUE 提供的一整套路由系统

```javascript
//=>  index.js
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
//=>Vue.use  >>> 激活插件,所有的插件都需要使用Vue.use激活

const routes = [{}];
//=> 创建路由配置对象,是一个数组,每一个路由都是一个单独的对象
const router = new VueRouter({
  routes
  //=>创建路由实例,注册配置信息
});
export default router;
//=>导出路由信息
```

### \$route

> 代表的是当前路由活动的信息,包含了当前 URL 解析后得到的信息,还有 URL 匹配到的历史记录,在组件中可以使用`this.$route`访问,同时对象的所有属性都是只读的,无法进行修改

**path:**

> 返回当前对应路由的路径信息,得到的只会是绝对路径

```javascript
const routes = [
  {
    path: "home/bedroom",
    component: Bedroom
  }
  //=>路由配置信息
];
const com = {
  template: ``,
  methods: {
    test() {
      this.$route.path;
      //=>打印完整的path地址  /home/bedroom
    }
  }
};
```

**params:**

> 一个包含动态路由参数的对象,如果没有参数则是一个空对象

```javascript
const routes = [{ path: "/home/:id", component: Home }];
//=>绑定动态路由
const Home = {
  template: `
    <div>
      <router-link to="/home/bedroom"></router-link>
    </div>`,
  methods: {
    params() {
      this.$route.params;
      //=>对象  {id:'bedroom'}
    }
  }
};
```

**query:**

> 一个包含查询参数的对象,如果没有则是一个空对象

```javascript
const routes = [{ path: "/home", component: Home }];
const Home = {
  template: `<div>客厅<button @click="arrivals">卧室</button></div>`,
  methods: {
    arrivals() {
      this.$router.push("/bedroom?name=person");
    }
  }
};
const Bedroom = {
  template: `<div>卧室<button @click="getQuery">获取</button></div>`,
  methods: {
    getQuery() {
      console.log(this.$route.query);
    }
  }
  //=>{name:'person'}
  //=>直接使用this.$route.query.name可以获取到具体的某一个值
};
```

**hash:**

> 获取当前路由的哈希值(带有#),如果没有则是一个空字符串

**fullPath:**

> 解析后的 URL 地址,包含完整的查询参数和 hash 的完整路径

```javaascript
this.$route.fullPath
```

**matched:**

> 是一个数组,记录的是路由配置对象中的相关信息,包括子路由中的信息,数组的每一项都是一个对象,对象中包含着路由的状态信息,父子路由会按照层级关系依次排列

```javascript
this.$route.matched;
```

**name:**

> 获取路由的名字

```javascript
this.$route.name;
```

**redirectedFrom:**

> 获取路由重定向前的 path 地址,不存在重定向为`undefined`

```javascript
let routes = [
  {
    path: "/a",
    //=>原地址 >>> /a
    redirect: "/b"
    //=>重定向后的地址 >>> /b
  }
];
this.$route.redirectedFrom;
//=>获取重定向源的path地址   /a
```

### \$router

> 路由实例,可以直接使用`router`进行访问,在模块化开发的组件中可以直接使用`this.$router`访问,这样就不需要每一个模块都引入路由文件

| 属性         | 作用                            |
| ------------ | ------------------------------- |
| app          | 配置了 router 对象的 VUE 根实例 |
| mode         | 当前路由使用的模式              |
| currentRoute | 当前激活路由的路由对象信息      |

> 在 router 引入的文件内可以直接使用`router.属性`直接访问,在组件内可以使用`this.$router.属性`访问

**beforeEach:**

> 前置导航守卫,在导航被激活时可以对其进行拦截

```javascript
router.beforeEach((to, from, next) => {
  /**
   * to  >>> 即将要离开的路由
   * from  >>> 即将进入的路由
   * next  >>> 路由跳转,是一个函数,必须调用,否则无法正常跳转路由
   **/
});
```

**afterEach:**

> 后置导航钩子,

### router-link

> 路由的跳转组件,默认情况下会渲染成`a`标签,通过属性`to`进行路由间的跳转

通过`router-link`跳转的路由会自动添加两个类名

1. router-link-exact-active >>> 绝对精准的类名,只有当路由被激活时才会添加
2. router-link-active >>> 相对精准的类名,父子路由时父路由未被激活也会拥有此类名

- exact-active-class > 修改默认添加的绝对精准类名
- active-class >>> 修改默认添加的相对精准的类名

```vue
<router-link to="person" exact-active-class="active"></router-link>
//=>修改绝对精准的类名
<router-link to="person" active-class="active"></router-link>
//=>修改相对精准的类名
```

**to:**

> 目标路由的链接,被触发时会立刻将`to`的值传递给`touter.push()`,可以是一个字符串或者是包含目标位置的对象

```vue
<router-link to="/home"></router-link>
//=>跳转到路由组件 home

<router-link :to="{ path: 'home' }"></router-link>
//=>使用对象的形式绑定,/可以不书写

<router-link :to="{ path: 'home', params: { userId: 123 } }"></router-link>
//=>绑定动态路由同时绑定params参数, ==> ro=" '/person/' + '123' "

<router-link :to="{ path: 'home', query: { name: '321' } }"></router-link>
//=>动态绑定带有查询参数的路由 ==>to="/person?name=321"
```

**replace:**

> 设置`replace`时导航被触发时会将`to`的值传递给`router.replace()`,而不是`router.push()`,因此在浏览器中也不会留下历史记录

```vue
<router-link to="/person" replace></router-link> //=>直接书写replace单属性即可
```

**append:**

> 设置了`append`属性的路由导航会对即将跳转的路由添加一个基路径,需要配合`v-bind`使用

```javascript
const patent = {
  template: `
    <div>
      父路由
      <router-link :to="{path:'/son'}" append>跳转</router-link>
      /**
       * 需要配合v-bind使用,否则无法生效
       * 导航触发时完整的路径是  /parent/son
       * 即将跳转的路由路径会自动的和当前的路径进行拼接
       **/
    </div>
  `
};
const son = {
  template: `
   <div>子路由</div>
  `
};
```

**tag:**

> 将`roputer-link`渲染成指定的 HTML 标签,同样也会监听点击,触发路由导航

```vue
<router-link tag="li"></router-link>
//=>router-link会被渲染为 li 标签

<router-link tag="li" to="person">
  <a href="">导航</a>
</router-link>
/** * 如果router-link内有嵌套a标签,同时自定义了tag属性 *
那么路由导航的地址会被自动的添加给嵌套的a标签的href属性上 **/
```

**active-class:**

> 设置导航被激活时的相对精准类名,也可以使用`linkActiveClass`进行全局配置

```vue
<router-link active-class="active"></router-link>
```

**exact-active-class:**

> 设置导航被激活时自动添加的绝对精准的类名,`linkExactActiveClass`可以进行全局配置

```vue
<router-link exact-active-class="active"></router-link>
```

**exace:**

> 默认情况下添加的类名是*包含匹配的*,如果匹配的是`/a`,如果当前的路径是以`/a`开头,那么`/a`这个路由也会被设置上默认的相对精准类名,

```vue
<router-link exact></router-link>
```

**event:**

> 设置触发当前导航的事件,默认是`click`,可以是一个字符串,也可以是一个数组,包含多个事件

```vue
<router-link event="click"></router-link>
//=>默认是点击事件

<router-link event="mouseleave"></router-link>
//=>鼠标离开时触发
```

### router-view

> 渲染路径匹配成功的组件,可以嵌套多层,可以配合`transition`和`keep-alive`使用

**name:**

> `router-view`可以设置`name`属性,用于渲染指定的插件,name 属性的值是路由配置对象中的`components`对象中的属性值,

```vue
//=>路由配置对象 const routes = [ { path:'/', components:{ default:Main,
a:Sidebar, /** * 如果渲染组件没有设置name属性,默认就会使default *
渲染组件会根据name属性的值渲染组件 **/ } } ]
<router-view></router-view>
//=>会渲染default中设置的组件
<router-view name="a"></router-view>
//=>渲染components中a中存储的组件
```

### router 构建选项

> 创建路由实例时添加的一些配置项

**mode:**

> 设置路由的模式,默认是`hash`模式,浏览器中的 ULR 中会存在 #

```javascript
const router = new VueRouter({
  routes,
  mode: "history",
  //=>设置为H5的history模式,URL地址中不会出现 #
  mode: "abstract"
  //=>abstract支持所有的javascript运行环境,没有发现浏览器的API时,会强制进入
});
```

**base:**

> 设置路由的基路径,路由的配置文件内不需要修改,只要在路由实例中添加`base`属性即可,导航被激活时会自动添加对应的基路径

```javascript
const routes = [
  {
    path: "/person",
    component: Person
    //=>路由配置对象中不需要修改
  }
];
const router = new VUeRouter({
  routes,
  base: "/app/"
  //=>会在所有的路由前面添加 /app
});
```

**linkActiveClass:**

> 设置导航组件被激活时默认添加的相对精准的类名,设置成功后所有激活的导航都会应用设置后的参数

```javascript
const router = new RouterVue({
  routes,
  linkActiveClass: "active"
  //=>将相对精准的导航类名修改为active
});
```

**linkExactActiveClass:**

> 设置导航组件被激活时默认添加的绝对精准的类名,设置成功后所有被激活的导航都会应用此类名

```javascript
const router = new VueRouter({
  routes,
  linkExactActiveClass: "active"
  //=>设置成功后所有激活装填的组件都会应用此类名
});
```

**scrollBehavior:**

> 滚动事件

### 路由配置对象

#### 路由懒加载

> > 一般情况下基于`webpack`打包时,js 代码部分会打包成三个文件,一个是用户写的代码,一个是一些第三方的类库或者框架,还有一个是一些用于底层支撑的文件,随着业务逻辑或者页面特效等等的增加,会加大代码编写文件的大小,这种情况下当用户第一次加载页面的时候就会造成加载缓慢,这个时候就可以使用路由懒加载了,将路由对应的组件打包成一个个的 js 文件,只有当该路由被访问的时候再加载这个组件,这样就可以减少首次的加载时候,优化用户的体验

```javascript
const routes = [
  {
    path: "/",
    component: () => import("组件路径")
    //=>使用箭头函数从外部导入组件
  }
];
//=>在实际开发中为了使代码更加的清晰可以将懒加载的组件统一放入组件文件顶部导入
const Foo = () => import("组件路径");
const routes = [{ path: "/", component: Foo }];
```

#### 动态路由

> 当多个路由都需要映射到一个组件的时候就可以使用动态路由,动态参数使用`:`分割,同时动态参数也会设置到`this.$params`对象中

```javascript
//=>路由配置对象
const routes=[{
  path:'/user/:id'
//=>动态参数部分需要使用 :分割
}]

//=>组件
const User={ template:``, };
<router-link :to=" '/user/' + 动态参数"></router-link>
//=>如果是动态绑定的值通常都是需要使用v-bind,
//=>否则to属性内无法书写动态的值
```

> 使用动态路由时,组件实例并不会被销毁,而是复用,因为动态路由通常都是徐然相同的组件,这也就以为这组件的生命周期函数无法被多次调用,如果需要检测数据的变化可以使用`watch`检测,或者使用`beforeRouteUpdate`导航守卫,他会在组件被复用的时候调用

- main.js >>> 入口文件,主要是初始化 VUE 实例,并且使用需要的插件
- App.vue >>> 主组件,大部分的页面都是在该组件下进行切换,
- router>index.js >>> 路由的配置文件

**main.js:**

```javascript
import Vue from "vue";
//=>引入VUE
import App from "./App.vue";
//=>引入App文件
import router from "./router";
//=>引入路由对象

new Vue({
  //=>创建一个VUE实例
  router,
  //=>挂载路由对象
  render: h => h(App)
  /**
   * render  >>> 使用render函数渲染对应的模板
   */
}).$mount("#app");
```

**App.vue:**

```vue
<template>
  //=>书写组件模板
  <router-link to="/home" tag="button" replace active-class="active">
  </router-link>
  <!--
	router-link  >>>　组件支持在具有路由功能的组件之间进行导航
	to  >>>  表示目标路由的链接,
	replace  >>> 该属性会时路由组件导航时不会留下history记录
	tag  >>>　router-link被渲染成某种标签,默认是a标签
	active-class  >>>路由组件被激活时会默认添加一个class类名,该属性可以设置默认class类名
	exact-active-class  >>> 设置绝对精准的class类名
-->
  <router-view></router-view>
  <!--
	router-view  >>> 渲染导航到的路由组件,根据书写的位置不同
					页面中渲染的位置也会不同
-->

  <router-link v-bind:to="'user' + userId"></router-link>
  <!--
	v-bind:to  >>> 动态的绑定路由路径
-->
</template>
<script>
export default {
  name: "app",
  methods: {
    click() {
      this.$router.push("/home");
      /**
       * $router  >>>路由对象的实例
       * push>>> 路由实例的方法,动态的当行到某一个URL地址
       **/
    }
  }
};
</script>
<style>
//=>书写组件的样式
</style>
```

**index.js:**

```javascript
import Vue from "Vue";
//=>引入VUE文件
import VueRouter from "vue-router";
//=>引入路由插件

const home = () => import("./components/home.vue");
//=>使用箭头函数添加路由懒加载,只有当该路由激活时才会加载该组件

Vue.use(VueRouter);
//=>激活路由插件

const routes = [
  {
    path: "/",
    redirect: "/home",
    //=>redirect  >>> 重定向,路由的默认路径
    children: [
      {
        path: "news",
        component: News
        /**
         * children >>> 路由嵌套,是一个数组
         * 子路由的导航路径不能添加 /
         * 同样也可以设置默认展示的路由
         **/
      }
    ]
  },
  {
    path: "/user/:userId",
    //=>/user:id动态的设置路径参数,以:分割
    component: User
  },
  {
    //=>在对象中配置相应的路由管理
    path: "/home",
    //=>匹配相应的哈希值或者history
    component: Home,
    //=>导航到对应的组件
    meta: {
      title: "首页"
      /**
       * meta >>> 路由元信息
       * 可以遍历$route.matched数组中的数据进行访问
       **/
    }
  },
  {
    path: "/home",
    components: () => import("./components/home.js")
    //=>路由懒加载,不推荐使用,不方便管理
  }
];

const router = new VueRouter({
  //=创建一个VUE路由实例
  routes,
  //=>挂载路由
  linkActiveClass: "active",
  /**
   * 当导航组件被激活时会自动的添加两个class类名
   * router-link-exact-active  >>> 绝对精准的类名
   * router-link-active >>> 相对精准的类名
   * 路由组件是对URL地址栏中的字符进行匹配,如果有设置
   * '/'即默认的路由导航的话则该组件则会始终拥有
   * 相对精准的类名,而绝对精准的类名只有在当前组件被
   * 真正激活时才会被添加
   **/
  linkExactActiveClass: "active",
  //=>设置全局的绝对精准类名的别名
  mode: "history"
  //=>默认使用的是哈希值,URL地址栏中会出现#,改为history则不会出现#
});
export default router;
//=>导出路由对象
```

**VUE 组件:**

```vue
<template>
  //组件模板
  <router-link to="/home/user"></router-link>
  <router-view></router-view>
  <!--
	在父组件中嵌套子组件的模板
	嵌套的子路由在书写导航路径时必须书写完整的路径
	同时也需要使用router-view
-->
  <router-link
    v-bind:to="{ path: '/home/news', query: { name: '新闻', age: 12 } }"
  ></router-link>
  <!--
	路由之间的参数传递,使用对象书写的形式,
	使用v-bind绑定router-link的to属性
	query  >>> 一个对象,书写需要传递的数据
-->

  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <!--
	keep-alive  >>> VUE内置的一个组件
	默认情况下VUE的组件并不会被缓存,而被
	keep-alive包裹的组件将会被缓存,
	include  >>>字符串或者正则,只有匹配的组件才会被缓存
	exclude  >>>字符串或者正则,不会缓存匹配到的组件
	max  >>> 最大缓存组件数量
-->
</template>
<script>
export default {
  //=>导出组件
  name: "user",
  computed: {
    userId() {
      this.$route.params.userId;
      /**
       * $route  >>> 当前活跃的路由组件
       * params  >>>　包含当前的路由路径信息
       * userId  >>> 获取当前的动态路径,必须和路由管理中设置的路径参数保持一致
       *
       **/
    },
    query() {
      this.$router.push({
        path: "/home/news",
        query: {
          name: "新闻",
          age: 20,
          gender: "北京"
        }
        /**
         * 动态跳转路由是传递参数
         * this.$route.query  >>>　或者整个参数对象
         * this.$route.query.name  >>>　获取具体的某一个值
         **/
      });
    }
  }
};
</script>
<style>
//=>组件样式
</style>
```

#### 嵌套路由和命名视图

> 实际的应用场景中一个路由页面并不会只使用一个组件,当一个页面中使用多个组件时就可以使用路由嵌套或者命名视图

```javascript
//=>路由配置对象
const routes = [
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "bedroom",
        component: Bedroom
      }
      /**
       * 子路由需要书写在父路由配置对象的children数组中
       * 子路由的path地址并不需要书写完整的地址,只需要书写
       * 对应的子地址即可,
       */
    ]
  }
];
//=>组件
let Home = {
  template: `
    <div>

      <router-view></router-view>
      //=>父组件中也需要使用router-view渲染路由插件

      <router-link to="/home/bedroom"></router-link>
      //=>router-link的to属性需要书写完整的路由地址
    </div>
  `
};
```

> 当一个路由页面需要使用多个组件时,并且这些组件并不是父子关系时就可以使用命名视图,如果需要使用命名视图,`router-view`则需要添加`name`属性,对应路由配置对象内的`components`下的组件别名

```javascript
let Room = {
  template: `
    <div>房间</div>
  `
};
let Bedroom = {
  template: `
    <div>卧室</div>
  `
};
let Kitchen = {
  template: `
    <div>厨房</div>
`
};
const routes = [
  {
    path: "/room",
    components: {
      default: Room,
      b: Bedroom,
      c: Kitched
      /**
       * 将需要渲染的组件统一引入到当前路由下的components中
       * 组件的别名需要和router-view中的name属性对应
       * default下的组件会被渲染至默认的router-view中
       **/
    }
  }
];
new Vue({
  router,
  components: {
    container: {
      template: `
      <div></div>
  <router-link to="/room"></router-link>

  <router-view></router-view>
  //=>default下的组件不需要使用name属性

  <router-view name="a"></router-view>
  <router-view name="b"></router-view>
  //=>name属性的值对应的components中的组件别名

   </div>
    `
    }
  }
}).$mount("#app");
```

#### 重定向和路由别名

- 重定向指的是当用户访问设置了重定向的路由时,会调准到重定向后的路由地址
- 别名指的是给一个路由设置别名,访问别名和访问原有的名字都是访问同一个页面

```javascript
const routes = [
  {
    path: "/",
    redirect: "/home",
    //=>首次进入页面时路由地址为空,为空时重定向至/home地址
    //=>重定向会替换当前当问的路由地址

    redirect: to => {
      /**
       * 动态的设置重定向的路由地址,
       * to >>> 需要跳转的目标路由地址
       * 会将函数中return的值作为重定向的路由地址
       **/
    }
  }
];
```

> 别名并不会将路由地址替换,而是使用别名访问同一个页面,当用户访问别名的路由地址时,路由匹配的则是原有的路由名字,

```javascript
const routes = [
  {
    path: "/room",
    component: Room,
    alias: "/bedroom"
    //=>访问/room和/bedroom都会跳转至同一个页面,
    //=>如果路由中已存在的路由地址和别名路由冲突,则按照定义的先后顺序匹配
  }
];
```

#### 路由元信息

> 在路由配置对象中可以定义`meta`字段,每一个路由配置对象又称为路由记录,路由记录之间可以嵌套,当配置到子路由时,也会匹配到父路由的路由记录,可以通过遍历`$route.matched`遍历出路由记录中的`meta`片段,在导航守卫中可以使用`to.matched`遍历

```javascript
const routes = [
  {
    path: "/",
    meta: {
      name: "word"
    }
    //=>meta是一个对象,
  }
];
$route.matched[0].mata.name;
//=>matched数组中第一个对象中存储着meta信息

router.beforeEach((to, from, next) => {
  to.matched[0].meta.name;
  //=>导航守卫中获取meta字段

  to.matched.some(route => route.meta.name);
  //=>使用some方法检测meta字段的相关数据
});
```

### 导航守卫

> 当导航被触发时,可以在不同的阶段进行不同的操作,参数或者动态路由的动态值发生改变并不会触发守卫,可以通过观察`$route`对象的变化或者使用组件内的守卫`beforeRouterUpdate`,守卫通常会在验证用户访问某一些页面是有没有相关的凭据或者权限,可以对访问的页面进行限制,

**完整的导航解析流程:**

1. 导航被触发
2. 调用即将离开组件的离开守卫
3. 调用全局前置守卫`beforeEach`
4. 在重用的组件内调用`beforeRouterUpdate`守卫
5. 调用路由配置对象中的`beforeEnter`守卫
6. 解析异步路由组件
7. 在被激活的路由组件内调用`beforeRouterEnter`守卫
8. 调用全局`beforeResolve`守卫
9. 导航被确认
10. 调用全局`afterEach`钩子
11. 触发 DOM 更新
12. 用创建好的实例调用`beforeRouterEnter`守卫传给`next`回调函数

#### beforeEach

> 前置导航守卫,路由发生跳转时触发,可以创建多个守卫,触发时会按照创建的顺序执行,同时守卫是异步执行的

**参数:**

- to >>> 即将要进入的目标路由对象
- from >>> 当前导航正要离开的路由
- next >>> 一个函数,用于执行路由的跳转,

如果在守卫中不调用`next()`回调函数,那么守卫只会拦截,拦截过后并不会进行跳转,同时,`next()`回调函数支持传递参数,如果不传递参数值,会直接跳转到触发时对应的位置

1. 传递一个地址时,守卫会将根据地址进行路由的跳转,地址的书
   写形式和`router-link`中`to`属性的方式一样
2. 传递的是一个`false`值,那么将不会停留在当前页面,不会进行跳转
3. 传递`Error`实例时,导航会被终止,同时错误信息会被传递给`router.onError`回调中

> 创建全局前置守卫导航

```vue
router.beforeEach((to, from, next) => {});
```

> 当用户访问一些需要权限或者凭据的页面时,可以在守卫中进行限制或者是提醒,

```javascript
const routes = [
  {
    path: "/parent",
    component: Parent,
    meta: {
      redirectedAuth: true
      /**
       * 对需要特殊验证的页面在其meta元信息上添加特征
       * 特征也适用于对当前路由下的子路由进行验证
       **/
    },
    children: [{ path: "/son", component: Son }]
  }
];
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.redirectedAuth)) {
    //=>判断当前跳转的路由是否具有需要验证的特征
    const ticket = localStorage.getItem("ticket");
    //=>判断用户使用已经具有权限或者凭证  (示例中的凭证存放在浏览器的本地存储中)
    if (ticket) {
      next();
      return;
      //=>如果已经拥有凭证则直接进行路由跳转,并且不再执行当前守卫下面的代码
    } else {
      next("/ticket?path=" + to.path);
      return;
      /**
       * 当用户验证不通过时跳转到指定的页面
       * 可以将用户之前访问的页面以问号传递的形式
       * 传递给指定跳转的页面中,指定跳转的页面可以通过
       * this.$route.query.问号参数   进行获取
       * 当用户获取到相关的凭据时自动跳转到之前拒绝访问的页面
       * this.$router.replace(this.$route.query.问号参数)
       **/
    }
  }
  next();
  //=>如果当前访问的页面不需要验证则直接进行跳转
});
```

#### beforeResolve

> 解析守卫,和`brforeEach`类似,区别是在导航确认之前,组件内守卫和异步路由解析之后调用

```javascript
router.beforeResolve((to, from, next) => {});
```

#### afterEach

> 后置钩子,和`beforeEach`的唯一区别就是不需要调用`next`函数,同时无法改变导航本身

```javascript
router.afterEach((to, from) => {});
```

#### 组件内守卫

**beforeRouteEnter:**

> 在渲染该组件对应的路由被确认之前调用,守卫中无法获取`this`,因为守卫被调用的时候组件还没有被创建,可以给`next`传递一个回调函数,在导航被确认的时候会执行回调函数,并且会将组件实例作为参数传递给回调函数

```javascript
let Person = {
  template: ``,
  beforeRouteEnter(to, from, next) {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm);
      //=>接收到的参数就是组件实例本身
    });
  }
};
```

**beforeRouteUpdate:**

> 当前路由被改变,并且该组件被复用的时候调用,可以访问`this`,通常是动态路由改变`parans`值,复用同一个组件时调用

```javascript
let Person = {
  template: ``,
  beforeRouteUpdate(to, from, next) {
    //=>组件被复用时调用,可以访问this
  }
};
```

**beforeRouteLeave:**

> 离开守卫,导航离开该组件对应的路由时调用,可以访问`this`,通常用户没有保存一些数据时突然离开该页面时使用,可以使用`next(false)`来取消导航

```javascript
let Person = {
  template: ``,
  beforeRouteLeave(to, from, next) {
    next(false);
    //=>传递false时会取消导航
  }
};
```

####　 beforeEnter

> 路由独享的守卫,可以直接在路由配置对象内添加,参数以及用法和`beforeEach`一致

```javascript
const routes = [
  {
    path: "/",
    component: Person,
    beforeEnter: (to, from, next) => {}
  }
];
```

### history

> H5 中新增加的一个对象,允许访问浏览器的历史记录

`window.history.back()`

**back:**

> 在浏览的历史记录中向后移动一页,如果当前页处于第一页,则没有任何效果,也不会报错

**forward:**

> 在浏览的历史记录中向前移动一页,如果没有下一页则没有任何效果,也不会报错

`window.history.forward()`

**go:**

> 根据传入的参数值访问历史记录中特定的某一个页面,负数表示向后移动,正数表示向前移动

```javaascript
window.history.go(-1);
//=>向前移动一页,等价于window.history.back()
window.history.go(1);
//=>向前移动一页,等价于window.history.forward()
window.history.go()
window.history.go(0)
//=>刷新当前的页面
```

**pushState:**

> 可以创建新的历史记录,操作的是历史记录堆栈,并且该操作并不会刷新页面

```javascript
window.history.pushState(state, title, url);
/**
 * state  >>>js对象,可以存放一些数据表示当前的状态,对象的属性值不能是引用类型,当浏览器前进后退时会触发onpopstate事件,可以使用event.state访问先前的状态
 * title >>>大多数浏览器会忽略这个参数,传入一个空字符串即可
 * url   >>> 制定新增加的历史记录的url,
 */
window.history.pushState({}, "", "home");
//=>添加一条历史记录,并且使url变更为home,history.back()会移除添加的历史记录
```

**replaceState:**

> 修改当前的 url,并且之前的 url 并不会成为历史记录,使用`replaceState`替换的 url 无法使用浏览器的前进后退进行跳转,同样也不会刷新页面

```javascript
window.history.replaceState({}, "", "home");
//=>替换当前页面的url地址,并且不会造成页面刷新,但是无法存储为历史记录
```

### 前后端渲染

**后端渲染:**

> 后端渲渲染值得就是页面由服务器端进行渲染,在 web 最初的时候大部分的网页使用的都是后端渲染,通常情况下都是由后端写好模板文件,然后由服务器将数据和 HTML 页面进行合并,再发送到浏览器中进行渲染展示

**后端路由:**

> 后端路由指的是通过用户请求的 url 地址导航到具体的页面中,每跳转到不同的 URL 地址的时候都会对重新访问服务器,当后端接收到用户访问的 url 时,会对 url 地址进行解析,解析之后通过后端路由找到对应的数据,然后将对应的数据返回交给浏览器进行渲染

**优缺点:**

- 整个页面的模块都是后端人员进行开发和维护的,同时 HTML 代码和数据以及对应的逻辑都会混合在一起,不利于维护
- 增加服务器的压力,用户每一次进行跳转都会请求服务器的数据

- 有利于 SEO 优化,因为后台有完整的 HTML 页面,有利于爬虫进行数据的爬取
- 首屏性能很好,因为服务器渲染不需要加载 js 和 css 就可以展示页面

**前端渲染:**

> 前段渲染是随着 AJAX 技术的出现形成的,页面中的效果通常是使用 js 进行渲染,通常是由前端通过 AJAX 技术接收后端传输的数据,然后在 js 中通过对数据的读取拼接等操作插入到页面中

**前端路由:**

> 前段路由指的首次加载页面的时候,将所有的数据都下来到本地,当用户进行跳转页面的时候,会解析 url 中携带的哈希值,通过解析过后的哈希后展示不同的页面

**优缺点:**

- 不利于 SEO 优化,爬虫抓取不到 AJAX 请求的数据
- 首次加载时间长,因为要加载额外的静态资源

- 便于维护,前段专注于页面,后端专注于数据
- 跨平台,适用于不同的设备
- 响应速度快,页面首次加载的时候就已经把静态资源加载完毕了

## Vuex

> 状态管理工具,`vuex`的核心就是`store`,相当于是一个容器,当需要共享到全局的状态都可以放入到`store`中,组件可以直接访问`store`的状态,虽说全局对象也可以让所有的组件都共享状态,但他们仍有区别

- `store`中的状态都是响应式的,当状态发生改变时,所有的组件都可以得到高效更新,而全局对象并不是响应式的

> 虽说`vuex`是响应式的,但是并不建议直接对`store`修改,因为这样无法追踪具体是哪一个组件进行的状态更新,因此并不建议直接对`store`进行修改,通常情况下都是建议通过`mutations`进行状态的更新

```javascript
//=>引入vue和vuex
import Vue from "vue";
import Vuex from "vuex";
//=>激活vuex
Vue.use(Vuex);
//=>创建vuex实例
const store = new Vuex.Store({
  state: {
    count: 0
    //=>定义需要共享的状态
  },
  mutations: {
    increase(state) {
      state.count++;
      //=>state会自动当做参数被传递进来
    }
    //=>状态改变时需要通过mutations进行改变
  }
});
//=>导出vuex实例
export default store;
```

```vue
<template>
  <div id="app">
    <h2>{{ $store.state.count }}</h2>
    <!--vuex管理的状态可以通过$store进行全局访问-->
  </div>
</template>
<script>
new Vue({
  el: "#app",
  methods: {
    add() {
      this.$store.commit("increase");
      /**
       * 通过commit传递mutations中定义的方法
       * increase是在vuex中的mutations中定义的
       **/
    }
  }
});
</script>
```

在项目中通常会在`src`目录下单独创建一个`store`目录,并且创建一个`index.js`文件,因为`vuex`是一个插件,因此在导入之后使用`Vue.use()`进行安装,同时需要将`vuex`的实例导出并且在`vue`的根实例中导入并且挂载才可以使用

### store

> 单一状态树,也可以叫做是单一数据源,指的是所有的组件使用的都是同一个数据源内的状态,也就是只创建一个`vuex`的实例,这样组件访问状态的时候访问的都是同一个`state`

当一个组件中需要使用多个`vuex`管理的状态时,可以借助`mapState`辅助函数进行获取

```vue
<template>
  <div id="app">
    <h2>{{ count }}</h2>
  </div>
</template>
<script>
import { mapState } from "vuex";
//=>导入mapState辅助函数
export default {
  name: "app",
  computed: mapState({
    count: state => state.count,
    //=>使用箭头函数直接获取
    count2: "count"
    //=>使用字符串是,字符串传递的值必须和state中的名字一样
  }),
  computed: mapState(["count", "content"])
  /**
   * 传递的字符串于state中管理的状态的名字一样时
   * 可以使用数组的方式获取多个,传递的字符串名字
   * 可以直接在当前组件内使用,会解析出对应的状态值
   **/
};
</script>
```

### getter

> 可以将`getter`看作是`store`的计算属性,它可以将`store`派发出的状态做一层处理,例如计算或者是过滤,同时在通过属性调用`getters`时,`getters`的结果会别缓存,但是通过函数调用的形式则不会被缓存

```vue
<script>
const store = new Vuex.Store({
  state: {
    obj: [
      { id: 1, name: "ping", age: 20 },
      { id: 2, name: "gong", age: 30 },
      { id: 3, name: "ding", age: 40 },
      { id: 4, name: "hui", age: 50 }
    ]
  },
  getters: {
    testGetter(state) {
      return state.obj.filter(ele => ele.age > 30);
      /**
       * state会自动作为参数被传递进来,
       * 使用$store.getters.testGetter获取
       * 到的状态都是处理后的状态
       **/
    },
    testGetter2(state, getters) {
      return getters.testGetter.length;
      /**
       * getters也可以被当做参数传递,
       * 同时也可以使用已经在getters中定义的
       * 一些方法用来做另外一层处理
       **/
    },
    testGetter3(state) {
      return function(id) {
        return state.obj.find(ele => ele.id === id);
        /**
         * 使用getters的方法时无法直接传递参数
         * 如果需要传递参数,需要在方法中return
         * 出一个函数,调用的时候当做函数调用
         * $store.getters.testGetter3(3);
         * 当使用函数调用getters中的方法时
         * VUE并不会缓存这些状态
         **/
      };
    }
  }
});
</script>
<h2>{{$store.getters.testGetter}}</h2>
<h2>{{$store.getters.testGetter2}}</h2>
<h2>{{$store.getters.testGetter3(2)}}</h2>
```

### mutations

> 如果需要清楚的知道具体是哪一个组件改变的`state`中的状态,则必须通过`mutations`进行修改,否则`VUE`无法追踪修改状态的组件,同时并不是所有的修改状态`mutations`都可以做到响应式,例如通过索引修改数组项,通过`delete`删除对象的属性,使用属性表达式的方法添加对象的属性都无法做到响应式,可以通过`VUE`中的`Vue.set`和`Vue.delete`中法进行添加和删除

- 必须是在`state`中声明过的状态才可以是响应式
- 对象的修改或者删除需要使用`Vue.delete()`方法和`Vue.set()`方法才可以是响应式
- `mutations`中必须是同步函数,异步函数需要放在`actions`中

```vue
<script>
const store = new Vuex.Store({
  state: {
    obj: { name: "ping", age: 20 }
  },
  mutations: {
    subtract(state) {
      delete state.obj.name;
      state.obj["sex"] = "女";
      //=>无法做到响应式
      Vue.set(state.obj, "sex", "女");
      Vue.delete(state.obj, "name");
      //=>只有通过这两个方法修改对象才可以响应式
    }
  }
});
</script>
```

> 在组件中使用`commit`进行传递时`mutations`允许传递一个参数,这被称为`payload`(载荷),可以传递字面量或者是一个对象,同时使用`commit`进行传递的时候也可以件所有的参数都包含在一个对象中,如果使用对象风格传递参数时`mutations`中定义的方法接收到的就是一个对象,只能使用对象的语法进行调用,无法直接使用参数

```vue
<script>
const store = new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    test(state, n) {
      state.count += n.num;
      //=>如果传递的是一个对象,需要使用对象的语法
      /**
       * computed:{
       *   add(){
       *     this.$store.commit('test',10)
       *   },
       * }
       */
    },
    test1(state, n) {
      state.count += n;
      //=>如果传递的是一个字面量的数值,可以直接使用
      /**
       * computed:{
       * add(){
       *   this.$store.commit('test'{num:10})
       * }
       * }
       */
    }
  },
  test3(state, payload) {
    state.count += payload.num;
    //=>如果使用的是对象的风格将传递的参数,一般是使用
    //=>payload作为形参接收参数
    /**
     * computed:{
     *   add(){
     *     this.$store.commit({
     *       type:'test',
     *       num:20,
     *       //=>type  >>> 书写mutations中定义的方法名
     *       其余可以直接书写需要传递的的参数
     *     })
     *   },
     * }
     **/
  }
});
</script>
```

### action

> `mutations`中国你这可以处理同步的请求,如果使用异步请求那么将无法检测出状态修改的状态,异步操作必须在`actions`中进行`commit`

- `actions`提交的是`mutations`中定义的方法
- 组件中时使用`dispatch`调用`actions`中定义的方法
- `actions`中并没有`store`,而是使用`content`(上下文),和`store`拥有相同的属性和方法
- 可以在`actions`中创建一个`Promise`实例来监听异步处理何时结束,
- `dispatch`可以调用多个`actions`函数,只能当所有的异步操作完成后,返回`Promise`才会执行
- 传递参数是`actions`和`mutations`是一样的,都可以使用`payload`荷载和对象的方式进行参数传递

```vue
<script>
const store = new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    test(state, payload) {
      state.count += payload;
    }
  },
  actions: {
    asyncTest(context, num) {
      setTimeout(() => {
        content.commit("test", num);
      }, 2000);
      /**
       * context >>> 具有和store相同的属性和方法
       * commit是在actions中进行提交的
       * 组件中使用dispatch出发actions中的方法
       * this.$store.dispatch('asyncTest',参数)
       **/
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("test", num);
          resolve("调用完成了");
        }, 1000);
      });
      /**
       * 可以使用Promise来监听这个异步操作何时执行完毕
       * this.$store.dispatch('asyncTest',参数).then(result=>{
       *   console.log(result)
       *   //=>在此处使用then来接收Promise操作的返回值
       * })
       **/
    }
  }
});
</script>
```

在创建`actions`方法的时候当次多需要使用`commit`的时候可以通过解构赋值的方式直接将`commit`进行解构

`asyncTest({commit},num)`

使用对象的解构语法可以直接将`commit`进行解构,可以避免多次书写`context.commit`进行提交

### modules

> 由于`Vuex`使用的是单一状态树,当需要管理的状态过多时,`store`对象就会变得过于臃肿,所以`Vuex`允许将`store`分割成不同的模块,以便于管理不同的状态,每一个模块都拥有属于自己的`getters`,`mutations`等核心方法

```vue
<script>
const moduleA = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
  //=>通常不建议嵌套多层模块
};
const store = new Vuex.Store({
  modules: {
    moduleA,
    //=>基于ES6的对象增强写法可以直接书写模块名
    a: moduleA
    //=>也可以起一个别名,使用的时候也是使用别名

    /**
     * 组件调用时需要通过模块调用
     * this.$store.state.a.name
     * 之所以优先使用this.$store.state是因为
     * 在运行时VUE会将自定义的模块自动的合并在
     * $store.state中
     **/
  }
});
</script>
```

> 在`getters`中根节点的`state`会作为第三个参数被传递进来,第二个参数的`getters`可以获取到自身的方法,也可以获取根节点`getters`中的方法,取决于调用的方法

```vue
<script>
const moduleA = {
  getters: {
    add(state, getters, rootState) {
      state.count += getters.testAdd(50);
      /**
       * state  >>>模块内部的state
       * getters  >>>可以调用模块内部的getters中的方法,也可以调用根节点中getters方法
       * rootState  >>>可以获取根节点中的state属性
       * 在组件中直接使用this.$store.getters.add调用模块中定义的getters方法
       **/
    }
  }
};
</script>
```

> 模块中的`mutations`中无法获取根节点的`state`属性,模块中的`mutations`的调用方法和根节点中的调用方法是一样的,并不需要添加额外的路径
>
> 模块中`actions`属性中的方法默认的`context`仍然是模块本身的`context`,不过可以使用`rootGetters`和`rootState`获取到根节点中的数据,调用方法仍然和根节点的`actions`一样,不需要添加额外的路径
>
> 在默认的情况下访问模块内的`getters`,`mutations`,`actions`和访问根节点中的这些属性的访问方法是一样的,这是因为创建的模块默认情况下是注册在`全局命名空间`内的,如果希望模块具有更高的封装度和复用性可以使用`namespaced:true`使其成为带命名空间的模块,这时候在访问就需要添加完成的路径进行访问

### 项目结构

> 如果开发的是一个大型的项目的话,有必要将`Vuex`中的属性分成不同的文件进行开发,然后通过 ES6 的模块化语法进行导入导出,通常情况下会将`state`以外的所有属性都创建一个文件存储,`modules`中分离的模块会在`store`文件夹下额外建立一个文件夹分别存储,通常为一个模块为一个文件
