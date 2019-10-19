# CSS ( Cascading Style Sheets )

层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现 HTML（标准通用标记语言的一个应用）或 XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS 不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力

## 选择器

```css
#box {
  width: 100px;
  height: 100px;
  text-decoration: line-through;
  text-indent: 2em;
  text-align: justify;
  /*       ID选择器*/
}
.box {
  letter-spacing: 30px;
  word-spacing: 20px;
  font-style: italic;
  font-weight: bold;
  /*      class类名选择器*/
}
div {
  background-attachment: fixed;
  border-width: 3px;
  border-style: dashed;
  word-break: break-all;
  /*        标签选择器*/
}

#box,
.box,
div,
span {
  text-transform: capitalize;
  text-transform: lowercase;
  text-transform: uppercase;
  /*    群组选择器*/
}

* {
  font-family: "Arial Black";
  /*   通配符选择器*/
}
```

**ID 选择器:**

> 根据页面中标签的 ID 进行选择,css 中以#开头(#ID 名{})
> 一个页面中不允许出现相同的 ID 名,具有唯一性
> ID 可以使用字母,数字,下划线,中划线,命名(不能以数字开头)
> 可以使用小驼峰命名

**CLASS 选择器:**

> 根据页面标签的 class 类名进行选择,css 中以.开头(.class 类名)
> class 类名同一个页面中可以出现对此,不具有唯一性
> 一个标签可以拥有多个 class 类名
> 可以使用标签名筛选 class 类名(标签.class{}),标签与类名之间不存在空格

**标签选择器:**

> 根据页面中的标签名进行选择,css 中直接书写标签名(标签名)
> 通常是给所有相同的标签添加或删除一些样式是使用

**群组选择器:**

> 混合使用选择器,多个选择器之间使用,分割
> 通常给多个不同的标签添加相同的样式时使用

**通配符:**

> \* 表示通配符,可以选择页面中所有的标签
> 不建议使用

**层级选择器:**

```css
div h2 {
  text-decoration: line-through;
  /* 后代选择器,选择div下所有的h2标签 */
}
div > strong {
  text-decoration: underline;
  /* 父子选择器,只选择下一个层级的strong */
}
div ~ p {
  text-transform: lowercase;
  /* 兄弟选择器,选择div下所有同级的p标签 */
}
div + span {
  text-align: justify;
  /* 相邻选择器,只会选择div同级标签中的第一个span */
}
```

> 后代:N M { }; 选择 N 下面所有匹配的 M 标签
> 无论嵌套多少层,只要匹配 M 都会被选择
>
> 子代:N > M { };选择 N 下一个层级的 M 标签
> 不会选择 M 标签的下一个层级内符合的标签
>
> 兄弟:N ~ M { }; 选择 N 标签兄弟中(同级)所有匹配的 M 标签
> 只会选择 N 标签下面的兄弟标签,并不会选择上面的
>
> 相邻:N + M { }; 选择 N 同一级中第一个匹配 M 标签
> 只会选择一个第一个匹配的标签

**属性选择器:**

```css
div[class="box"] {
  text-decoration: underline;
  /* 完全匹配,只有class=box的标签才会被选中 */
}
div[class*="box"] {
  text-transform: capitalize;
  /* 不完全匹配,只要class中出现box就会被选中 */
}
div[class$="box"] {
  letter-spacing: 3px;
  /* 结尾匹配,只有class的类名结尾是box的才会被选中 */
}
div[class^="con"] {
  word-spacing: 2px;
  /* 开始匹配,只有class的类名开始位置是con的才会被选中 */
}
div[class][id] {
  text-decoration: underline;
  /* 多重匹配,标签同时必须拥有class和id才会被选中 */
}
```

> \[class=box]:完全匹配
> 标签的 class 类名必须完全相等,并且是唯一的,不能出现多个,即使是不同的类名
>
> \[class^=box]:开头匹配
> 标签的 class 类名起始位置符合,不会验证整个类名,只要起始位置的字符匹配就会被选中
>
> \[class\$=box]:结尾匹配
> 标签的 class 类名结束的位置匹配,不会验证整个类名,只要最后结尾处的字符匹配就会被选中
>
> \[class\*=box]:不完全匹配
> 标签的 class 类名包含就会被选中,不会验证整个类名,类名中出现相同的字符就会被选中
>
> \[class][id]:混合匹配
> 标签必须同时拥有 class 和 id 名才会被选中

**伪类选择器:**

```css
.box {
  text-decoration: line-through;
}
.box:hover {
  text-decoration: underline;
  text-decoration: overline;
  text-transform: capitalize;
  /* 鼠标滑过的样式 */
}
.box:active {
  text-transform: capitalize;
  text-indent: justify;
  /* 鼠标点击的样式 */
}
a:link {
  color: red;
  text-decoration: none;
  /* 链接被访问前的样式 */
}
a:visited {
  text-decoration: line-through;
  /* 链接访问后的样式 */
}
a:hover {
  text-decoration: underline;
  /* 鼠标滑过的样式 */
}
a:active {
  transform: capitalize;
  /* 鼠标点击的样式 */
}
.box:after {
  content: "回火";
  color: red;
}
.box:before {
  content: "返回";
  font-size: 30px;
}
```

> :link ==>只适用于 a 链接,表示链接点击前的样式
>
> :visited ==>只适用于 a 链接,表示链接点击后的样式
>
> :hover ==>适用于所有的标签,表示鼠标划入的状态
>
> :active ==>适用于所有的标签,表示鼠标点击的状态
>
> :after ==>将一段内容插入到标签文本的后面,可以给插入的文本设置单独的属性
>
> :before ==>将一段内容插入懂啊标签文本的前面,可以给插入的文本设置单独的属性

- a 链接如果需要同时设置 4 个伪类选择器,必须按照 link,visited,hover,active 的顺序设置

**结构性伪类选择器.**

| 选择器              | 描述                                                   |
| ------------------- | ------------------------------------------------------ |
| :nth-child(n)       | 从头部开始筛选所有的后代标签                           |
| :nth-last-child()   | 从尾部开始筛选所有的后代标签                           |
| :last-child         | 选择父标签内的最后一个子元素                           |
| :first-child        | 选择父元素内第一个子元素                               |
| :only-child         | 选择没有同级内任何兄弟的标签(相同层级内只有一个标签))  |
| :nth-of-type()      | 从头部开始筛选所有的同类标签(自动忽略其他标签)         |
| :nth-last-of-type() | 从尾部开始筛选所有的同类标签(自动忽略其他类的标签)     |
| :last-of-type       | 从后代中选择唯一的后代标签(同级内不含有其他同类的标签) |

**:nth-of-type 和:nth-child 的区别:**

> nth-of-type(n)是根据同类的子元素进行选择
>
> nth-child(n)则是根据所有的子元素进行选择

**继承:**

```css
div {
  width: 100px;
  height: 200px;
  background: orangered;
  text-decoration: underline;
  border: 2px solid blue;
  font-size: 30px;
  color: green;
  font-weight: bold;
  font-style: initial;
}
p {
  border: inherit;
  /* 默认只会继承字样相关的样式
         * 使用inherit可以继承布局相关的样式
         */
}
```

> 子标签可以使用父标签的一些样式
>
> 默认只有字体相关的样式可以继承
>
> 布局相关的样式默认不能继承
>
> 使用 inherit 可以手动继承布局相关的样式

**选择器优先级:**

```css
#box {
  text-decoration: line-through;
}
div {
  text-decoration: overline !important;
  /* 一旦使用!important那么样式的优先级则是最高 */
}
```

> 选择器的优先级是根据选择器的权重换算的,权重越高,优先级越大

| 选择器      | 优先级       |
| ----------- | ------------ |
| !important  | 最大(非规范) |
| style(行间) | 1000         |
| ID          | 100          |
| class       | 10           |
| 标签        | 1            |

> 所有选择器的优先级都大于继承自父标签的样式
>
> 优先级相同的情况下根据书写的先后顺序决定,(后书写的会覆盖前面书写的)
>
> 群组选择器的优先级和选择器本身的权重相关
>
> 层级嵌套下关系下的优先级根据权重相加,相加的结果越大优先级越高
>
> !important 的优先级最高,但不属于规范,不建议使用,无法改变继承的优先级

## 样式属性

**background.**

```css
.box {
  width: 200px;
  height: 200px;
  background-color: orangered;
  background-image: url("../images/1.png");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
```

> background-color ==>设置背景颜色,(颜色单词,rgb,十六进制颜色码)
>
> background-image ==>设置背景图片
>
> background-attachment ==>图片是否跟随滚动条滚动(scroll 默认,根据元素进行滚动)(fixed 根据浏览器窗口进行滚动)
>
> background-repeat ==>设置图片是否平铺(no-repeat 不平铺)(repeat-x,x 轴平铺)(repeat-y,y 轴平铺)
>
> background-position ==>设置背景图的位置(第一个值是水平位置) ==>(left.right,center)(第二个值是垂直位置)(top,bottom,center)如果只书写一个值,那么第二个值就是 center。 使用 % (第一个值是水平位置，第二个值是垂直。左上角是 0％0％。右下角是 100％100％。如果仅指定了一个值，其他值将是 50％。 。默认值为：0％0％)。使用 px 第一个值是水平位置，第二个值是垂直。左上角是 0。单位可以是像素（0px0px）或任何其他 CSS 单位。如果仅指定了一个值，其他值将是 50％。你可以混合使用％和 positions

**border.**

```css
.box {
  width: 0px;
  height: 0px;
  border-left-style: solid;
  border-left-color: transparent;
  border-left-width: 100px;
  border-right-style: solid;
  border-right-color: transparent;
  border-right-width: 100px;
  border-top-style: solid;
  border-top-color: transparent;
  border-top-width: 100px;
  border-bottom-style: solid;
  border-bottom-color: orangered;
  border-bottom-width: 100px;
  /*页面展示一个三角形,*/

  /* 复合写法 */
  border-left: 100px solid orange;
  border-right: 100px solid blue;
  border-top: 100px solid pink;
  border-bottom: 100px solid red;
}
```

> border-style ==>设置边框的样式(solid 实线,dashed 虚线,dotted 点线)可以单独设置某一边的边框`border-left-style:solid`,
>
> border-color ==>设置边框的颜色
>
> border-width ==>设置边框的大小(px)
>
> transparent ==>透明色

## 文本属性

**font.**

```css
span {
  font-family: "Candara Light", "Adobe Arabic", serif;
  font-size: 16px;
  font-weight: bold;
  font-style: initial;
  color: #db192a;
  letter-spacing: 2px;
  word-spacing: 2px;
  word-break: break-all;
  word-wrap: break-word;
}
```

> font-family ==>调用用户系统的字体库显示网页,通常书写多个,以确保网页中的字体可以正常调用用户系统中的文字,如果没有会一次向后调取使用,全都没有则会使用默认的字体,多个字体之间使用,分割,带有空格的字体需要使用""包裹。
>
> font-size ==>设置字体的大小
>
> font-weight ==>设置字体是否加粗,(normal 默认样式)(bold 加粗),也可以使用数字,100-900;(根据数字大小决定加粗的样式)
>
> font-style ==>设置字体是否斜体(normal 默认样式)(initial 斜体)(oblique 斜体,不推荐,会将不支持斜体的字体同样倾斜)
>
> color ==>设置字体的颜色
>
> letter-spacing ==>设置字体间距(px)
>
> word-spacing ==>设置词间距,(只适用于英文))
>
> word-break ==>设置英文文本折行 break-all; (强制折行,会产生断词)
>
> word-wrap ==>设置英文文本折行 break-word;(不是那么强烈的折行 ，会产生一些空白区域)

**文本.**

```css
span {
  text-decoration: none;
  text-transform: lowercase;
  text-indent: 2rem;
  text-align: justify;
  line-height: 20px;
}
```

> text-decoration ==>下划线 : underline; 删除线 :line-through 上划线 : overline; 不添加任何装饰 : none; 注：添加多个文本修饰：line-through underline overline;
>
> text-transform ==>字母小写:lowercase; 字母大写:uppercase;首字母大写:capitalize
>
> text-indent ==>首行缩进,一般使用 rem 作为单位
>
> text-align ==>文本对齐方式:左对齐:left;右对齐:right;居中:center;两端对齐:justify;
>
> line-height ==>行高;number(px) | scale(比例值,跟文字大小成正比)

## 盒子模型

**盒子模型的组成部分:**

| 区域    | 位置   |
| ------- | ------ |
| content | 内容   |
| padding | 内填充 |
| border  | 边框   |
| margin  | 外填充 |

![KnKBnK.png](https://s2.ax1x.com/2019/10/19/KnKBnK.png)

> padding 和 margin 分为四个部分,分别对应==top 上内/外填充== ==bottom 下内/外填充== ==left 左内/外填充== ==right 内/外填充== 每一个位置都可以单独的设置（只能书写一个值）,也可以复合书写

- 书写一个值: 同时设置 ==上下左右==
- 书写两个值: 对应 ==上下　 |　 左右==
- 书写三个值: 对应 ==上 　| 　左右　|　 下==
- 书写四个值: 对应 ==上　｜　右　｜下　｜　左==

> 文本内容只会处于 content 内容区域
>
> paddign 不可以设置为负数,margin 可以设置为负数
>
> 背景图和背景颜色只会填充至 border 位置(border 有边框颜色则会覆盖),不会涵盖 margin

**margin 重叠:**

当给两个元素同时设置 margin 时,上下的 margin 值会产生重叠问题,会区最大值作为两个元素上下的间距,左右的 margin 值不会产生这个问题

```css
#box1 {
  width: 200px;
  height: 200px;
  background: pink;
  margin-bottom: 30px;
}
#box2 {
  width: 200px;
  height: 200px;
  background: red;
  margin-top: 30px;
}
/* 两个元素的上下间距会产生重叠,最终的间距是30px */
```

解决方案

1. 使用 BFC 规范
2. 只给其中的一个元素设置 margin 值

```css
/* 只设置一个元素的margin值 */
#box1 {
  width: 200px;
  height: 200px;
  background: pink;
  margin-bottom: 0;
}
#box2 {
  width: 200px;
  height: 200px;
  background: red;
  margin-top: 60px;
}
```

**margin-top 传递问题:**

只会出现在嵌套的环境中,当子元素设置 margin-top 值时,子元素的 margin-top 值并不会改变子元素的位置,而是会将父元素的位置改变

```css
.box {
  width: 300px;
  height: 300px;
  background: red;
}

.box2 {
  width: 100px;
  height: 100px;
  background: lightpink;
  margin-top: 100px;
}
/* 子元素并不会改变自己在父元素内的位置,而是父元素会向下位移100px */
```

解决方案

1. 使用 BFC 规范
2. 给父元素添加边框
3. 使用 padding 替代 margin
   padding 是给父元素设置,在标准盒模型下需要修改 height 值,否则会改变高度

```css
.box {
  width: 300px;
  height: 300px;
  background: red;
  /* 给父元素设置边框 */
  border: 1px solid pink;

  /* 给父元素设置padding, */
  padding-top: 100px;
}

.box2 {
  width: 100px;
  height: 100px;
  background: lightpink;
  margin-top: 100px;
  /* 如果使用父元素的padding替代,则子元素不需要再设置marign */
}
```

**margin 和 width 自适应:**

margin 自适应只适用与左右 margin,width 自适应会默认占据整个父元素的宽度

```css
.box {
  width: 300px;
  height: 300px;
  background: red;
  margin: 0 auto;
  /*
 * margin的第一个值代表上下,第二个值代表左右
 * 当左右设置为auto时,盒子会自动左右居中
 * 上下margin设置auto并不会上下居中
 */
}
.box2 {
  height: 100px;
  background: pink;
  border-left: 30px solid black;
  padding-left: 100px;
  /*
   * 不书写width值时子元素会默认占据父元素的全部宽度
   * 相当于继承父元素的宽度,同时设置padding和border
   * 宽度并不会溢出,
   * 如果padding + border 的值超过了父元素的width
   * 仍然会产生溢出
   *
   * 如果子元素的widht设置为父元素的100%
   * 那么只要添加padding或者border
   * 子元素就会产生溢出情况
   */
}
```

**box-sizing:**

可以改变盒子的展示模型,默认是 W3C 标准盒模型,可以改变成 IE 盒模型(怪异盒),两者的区别在于 width 和 height 的计算方式不同

> content-box(默认)标准盒模型 ==> width / height = content 区域
>
> border-box IE 盒模型(怪异盒) ==> width / height = content + padding + border

## 标签分类

## 浮动

## 定位

## 弹性盒子

## LESS

由于 css 是标记语言，并不是编程语言，并不拥有函数，变量，判断等一系列编程语言具有的特性，由此就产生了我们在书写 css 代码的时候会产生大量的重复性的代码

less 是 css 的预编译语言，就是让 css 拥有面向对象编程的思想，不过浏览器没有办法直接执行和渲染 less 代码，需要我们把 less 代码预先编译为正常的 css 代码后再交给浏览器渲染解析。

### LESS 的编译

1. 在开发环境下编译(产品没有开发完，正在开发中，这个是开发环境)

- 导入 less.js 即可

```markdown
//=>rel="stylesheet/less" 这块有修改

<link rel="stylesheet/less" href="css/demo1.less">
将link标签内的rel属性修改为"stylesheet/less"

//=>导入 JS 文件即可，导入的 js 文件必须在 less 文件下

<script src="js/less-2.5.3.min.js"></script>
```

2. 在生产环境下编译(产品开发完成了，需要部署到服务器上)

- 项目上线，不能把 less 部署，这样用户每一次打开页面都需要重新的编译，非常耗性能，我们部署到服务器上的是编译后的 css

```markdown
1. 在当前电脑的全局环境下安装 less 模块 \$ npm install less -g

验证是否安装成功：\$ lessc -v

2. 基于命令把我们的 less 编译成 css \$ lessc xxx/xxx.less xxx/xxx.min.css -x

把指定目录中的 less 编译成为 css(并且实现了代码的压缩)，把编译后的 css 存入到具体指定路径中的文件中；上线前在 HTML 中导入的是 css 文件；
```

- 目前基于 webpack 和框架实现工程化开发的时候，我们都是在 webpack 配置文件中，配置出 less 的编译（需要安装 less/less-loader 等模块），这样不管是开发环境下的预览，还是部署到生产环境下，都是基于 webpack 中的 less 模块编译的

### LESS 语法

**变量**

- 在 less 中也可以使用变量存储一些公共的值，我们使用的时候直接调用这个变量就可以了，如果后期需要修好一些公共的值，我们直接修改这个变量内的值就可以了

```css
/* 在less中我们可以将一些经常使用到的一些样式放在变量内，比如一些共同的颜色，图片的前缀地址等等 */
/* 语法：@变量名:样式 */
@font-color: #ccc;
@bg-src= "../img";
/* 设置好之后我们以后需要使用这些样式的时候直接调用就可以了 */

a:hover {
  color: @font-color;
  /* 直接在需要设置的样式中书写变量名即可 */
}

/* less在进行拼接的时候需要使用@{变量名}进行拼接，无法直接书写 */
background: url("@{bg-src}/news_1.png") no-repeat;
```

**函数**

- 和 js 中的函数语法类似。同样也是为了将一些公共的样式封装到一个函数中，需要的时候直接调用函数即可。

```css
/* 比如我们需要创建一个是元素上下左右居中的公共样式 */

/* less函数也拥有形参和实参，如果不传递实参也可以给形参赋值默认值 */
/* less中的形参名须以 @ 开头 */
.centerPos(@w:200,@h:200) {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: unit(-(@h / 2), px);
  margin-left: unit(-(@w / w), px);
  /* less中设置单位需要使用 unit(样式,单位) 这种写法，不能直接书写单位 */
}

/* 假如我们需要让一个元素水平垂直居中，那么直接调用我们刚才创建的函数即可 */

#box {
  .centerPos();
  /* 如果不传递参数，就会还是用我们先前设置的默认值，如果传参，就会使用我们传递的实参 */
  width: 300px;
  height: 300px;
  background: red;
}
```

**层级嵌套**

- less 中的选择后代元素更加的简单，可以直接书写到父元素内

```css
#box {
  width: 200px;
  height: 200px;
  /* 如果我们要为#box下面的子元素书写方式，直接书写即可 */

  a {
    font-size: 20px;
    text-align: center;
    line-height: 30px;
  }
  /* 可以直接书写样式。这种写法等价于 #box a  */
  /* 也可以设置编译后的css选择器 */

  & > a {
    /* 等价于：==>#box > a */
  }
  &: hover {
    /* 等价于： ==>#box a:hover */
  }
  /*我们可以将这种写法理解为 &  后面书写就是我们需要选择的元素，*/
}

/*我们同样也可以书写一些公共的样式供父元素里面的子元素使用 */

#box {
  @h:200;
  @w:200;
  &.divBox {
    width: unit(@w, px);
    height: unit(@h, px);
    /* 存在两个相同的变量名值只有后面的会生效，会直接把前面的值覆盖掉 */
  }
  /* 这里面也存在着类似于变量提升的机制，相同变量名的值会直接被后面的覆盖，最终相同的变量名只有一个值会生效 */

  @h:500;
}
```

**导入外部文件**

- 对于一些公共的样式我们一般会书写在另外的一个文件内，然后在当前书写的 less 文件中引入公共的样式

```css
语法：@import "同文件夹下的文件名";

/* 引入的书写方法 */
@import (reference) "common";
/*reference:只把内容导入过来使用,但是不会编译common中的内容*/

```
