# CSS ( Cascading Style Sheets )

层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现 HTML（标准通用标记语言的一个应用）或 XML（标准通用标记语言的一个子集）等文件样式的计算机语言。CSS 不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

CSS 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力

**渐进增强:**

> 一开始以低版本浏览器为基础进行开发,先开发出最基本的页面和功能,然后在向上兼容,根据高版本

**优雅降级:**

> 一开始就以高版本浏览器为基础开发出一整完整的页面,然后在向下兼容,处理低版本浏览器的页面和功能,只会修复较大的错误,对于一些样式上的差异不再做处理,保证基本的页面展示和功能就可以了

## 浏览器的内核

| 浏览器          | 内核    | 前缀     |
| --------------- | ------- | -------- |
| IE              | Trident | -ms-     |
| firefox         | Gecko   | -moz-    |
| Chrome          | Webkit  | -webkit- |
| safari          | Webkit  | -webkit- |
| opera           | Presto  | -o-      |
| Chrome \| opera | Blink   |          |

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

> 根据页面中标签的 ID 进行选择,css 中以#开头(#ID 名{}) 一个页面中不允许出现相同的 ID 名,具有唯一性 ID 可以使用字母,数字,下划线,中划线,命名(不能以数字开头) 可以使用小驼峰命名

**CLASS 选择器:**

> 根据页面标签的 class 类名进行选择,css 中以.开头(.class 类名) class 类名同一个页面中可以出现对此,不具有唯一性一个标签可以拥有多个 class 类名可以使用标签名筛选 class 类名(标签.class{}),标签与类名之间不存在空格

**标签选择器:**

> 根据页面中的标签名进行选择,css 中直接书写标签名(标签名) 通常是给所有相同的标签添加或删除一些样式是使用

**群组选择器:**

> 混合使用选择器,多个选择器之间使用,分割通常给多个不同的标签添加相同的样式时使用

**通配符:**

> \* 表示通配符,可以选择页面中所有的标签不建议使用

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

> 后代:N M { }; 选择 N 下面所有匹配的 M 标签无论嵌套多少层,只要匹配 M 都会被选择
>
> 子代:N > M { };选择 N 下一个层级的 M 标签不会选择 M 标签的下一个层级内符合的标签
>
> 兄弟:N ~ M { }; 选择 N 标签兄弟中(同级)所有匹配的 M 标签只会选择 N 标签下面的兄弟标签,并不会选择上面的
>
> 相邻:N + M { }; 选择 N 同一级中第一个匹配 M 标签只会选择一个第一个匹配的标签

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

> \[class=box]:完全匹配标签的 class 类名必须完全相等,并且是唯一的,不能出现多个,即使是不同的类名
>
> \[class^=box]:开头匹配标签的 class 类名起始位置符合,不会验证整个类名,只要起始位置的字符匹配就会被选中
>
> \[class\$=box]:结尾匹配标签的 class 类名结束的位置匹配,不会验证整个类名,只要最后结尾处的字符匹配就会被选中
>
> \[class\*=box]:不完全匹配标签的 class 类名包含就会被选中,不会验证整个类名,类名中出现相同的字符就会被选中
>
> \[class][id]:混合匹配标签必须同时拥有 class 和 id 名才会被选中

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
div:hover span {
  text-transform: lowercase;
  /* 鼠标滑过div后改变span的样式 */
  /* 当hover后面书写一个选择器时
   * 表示的是当前元素滑过后改变
   * hover后面元素的样式
   */
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
| :nth-child()        | 从头部开始筛选所有的后代标签                           |
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

| 选择器      | 权重         |
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
  /* 符合写法 */
  background: url(../img/1.png) no-repeat center center;
  background-size: 100% 100%;
  background-origin: border-box;
}
```

> background-color :设置背景颜色

1. 颜色单词,rgb,十六进制颜色码,
2. rgba(0,0,0,0.5)可以设置背景色的透明度,最后一位书写的是透明度(0-1),0.5 属于半透明,数值越小透明度越高

> background-image :设置背景图片

1. url()内书写背景图的路径,背景图不占据布局空间
2. 可以同时设置多个背景图,多个背景图之间使用`,`隔开;越靠前的背景图层级越高,会覆盖后面的背景图
3. background:url(./img/1.png) no-repeat center left,url(./img/2.png) repeat center center;

> background-attachment :图片是否跟随滚动条滚动

1. scroll 默认,根据元素进行滚动

2. fixed 根据浏览器窗口进行滚动

> background-repeat ==>设置图片是否平铺

1. no-repeat 不平铺

2. repeat-x, x 轴平铺

3. repeat-y, y 轴平铺

> background-position ==>设置背景图的位置

1. 第一个值是水平位置)(left.right,center)(第二个值是垂直位置)(top,bottom,center)如果只书写一个值,那么第二个值就是 center。

2. 使用 % (第一个值是水平位置，第二个值是垂直。左上角是 0％0％。右下角是 100％100％。如果仅指定了一个值，其他值将是 50％。 。默认值为：0％0％)。

3. 使用 px 第一个值是水平位置，第二个值是垂直。左上角是 0。单位可以是像素（0px0px）或任何其他 CSS 单位。如果仅指定了一个值，其他值将是 50％。你可以混合使用％和 positions

> background-size: ==>设置背景图的大小

1. px \| % 设置背景图的大小,设置的不合适图片将会被拉伸!同时设置 100%时,背景图将会被拉伸至整个容器的大小
2. cover 将图片等比例放大,直至将容器全部铺满位置,如果等比例放大时有益处的部分,则会自动隐藏
3. contain 将图片等比例放大,当有任何一个位置到达容器的边缘时,则会停止,有可能会出现空白区域

> background-origin ==>规定 background-position 基于什么位置来定位背景图,如果设置了 baackground-attachment:fixed;则不起作用

1. padding-box 默认,根据 padding 定位
2. content-box 根据内容进行定位
3. border-box 根据边框进行定位

> background-clip ==>规定背景图的绘制区域

1. padding-box 从内边距开始绘制
2. content-box 从内容区域开始绘制
3. border-box 默认! 从边框区域开始绘制

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

> border-style ==>设置边框的样式

1. solid 实线,

2. dashed 虚线,

3. dotted 点线

4. 可以单独设置某一边的边框`border-left-style:solid`,

> border-color ==>设置边框的颜色

> border-width ==>设置边框的大小(px)

> transparent ==>设置边框为透明色

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

> font-family ==>调用用户系统的字体库显示网页,

1. 通常书写多个,以确保网页中的字体可以正常调用用户系统中的文字,

2. 如果没有会一次向后调取使用,全都没有则会使用默认的字体,多个字体之间使用,分割

3. 带有空格的字体需要使用""包裹。

> font-size ==>设置字体的大小

> font-weight ==>设置字体是否加粗,

1. normal 默认样式
2. bold 加粗
3. 也可以使用数字,100-900;(根据数字大小决定加粗的样式)

font-style ==>设置字体是否斜体

1. normal 默认样式
2. initial 斜体
3. oblique 斜体,不推荐,会将不支持斜体的字体同样倾斜

> color ==>设置字体的颜色

> letter-spacing ==>设置字体间距(px)

> word-spacing ==>设置词间距,(只适用于英文))

> word-break ==>设置英文文本折行

1. break-all; (强制折行,会产生断词)

> word-wrap ==>设置英文文本折行

1. break-word;(不是那么强烈的折行 ，会产生一些空白区域)

**文本.**

```css
span {
  text-decoration: none;
  text-transform: lowercase;
  text-indent: 2rem;
  text-align: justify;
  line-height: 20px;
  overflow: visible;
  vertical-align: bottom;
}
```

> text-decoration ==>文本装饰线

1. underline; 删除线
2. line-through 上划线
3. overline; 中线
4. none: 不添加任何装饰
5. 加多个文本修饰：line-through underline overline;

> text-transform ==>字母小写

1. lowercase: 字母小写
2. uppercase: 字母大写
3. capitalize: 首字母大写

> text-indent ==>首行缩进,

1. 一般使用 rem 作为单位

> text-align ==>文本对齐方式

1. left: 左对齐
2. right: 右对齐
3. center: 居中
4. justify: 两端对齐

> line-height ==>文字行高

1. number(px)
2. scale(比例值,跟文字大小成正比)

> overflow ==>文本溢出隐藏

1. visible: 默认,不隐藏
2. hidden: 隐藏
3. scroll: 滚动,文本不溢出也会显示滚动条
4. auto 自动,不溢出不做任何处理,溢出则显示滚动条
5. overflow-x;overflow-y: 可以单独设置 x 和 y 轴的文本溢出

> vertical-align ==>改变文字的对其方式

1. baseline: 默认,使用基线对其
2. bottom: 使用底线对齐(可解决图片间隙)
3. middle: 使用中线对齐(可解决图片间隙)

**添加省略号:**

> 必须设置宽度

```css
box {
  /* 每一个属性都是必须设置的 */
  width: 100px;
  white-space: nowrap;
  /* 设置文本不换行 */
  overflow: hidden;
  /* 将溢出的文本隐藏 */
  text-overflow: ellipsis;
  /* 添加省略号 */
}
```

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
> padding 不可以设置为负数,margin 可以设置为负数
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
3. 使用 padding 替代 margin padding 是给父元素设置,在标准盒模型下需要修改 height 值,否则会改变高度

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
  /* 如果使用父元素的padding替代,则子元素不需要再设置margin */

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
   * 如果子元素的width设置为父元素的100%
   * 那么只要添加padding或者border
   * 子元素就会产生溢出情况
   */
}
```

**img 底部间隙:**

> inline 元素的 vertical-align 属性默认为 baseline，baseline 意味着元素的基线通父元素的基线对齐，父元素的基线为字母 I 和 v 的下边缘(线)，但是像图片或者输入框这种元素，本身没有基线，则是将其底端通父元素的基线对齐。

![KKSvJU.png](https://s2.ax1x.com/2019/10/20/KKSvJU.png)

解决方案:

1. 转换为块级元素
1. vertical-align:bottom

```css
img {
  display: block;
  /* 块级元素不受基线的影响 */

  vertical-align: bottom;
  /* 底线对齐 */

  vertical-align: middle;
  /* 使用中线对齐也可以解决 */
}
```

### 盒子属性

**cursor:**

> 改变鼠标的默认样式

```css
box {
  cursor: pointer;
  /* 当鼠标移动至box盒子上
   * 光标会变成指示链接的指针(一只小手)
   */
  cursor: url(./img/1.ico), auto;
  /* 采用自定义的光标,auto表示引用失败做的处理
   * 如果引用失败,自动采用系统默认的样式
   */
}
```

1. pointer: 指示链接的指针(一只小手)
2. move: 移动
3. help: 帮助
4. url: 自定义,只能使用 ico 或 cur 格式的图片

**opacity:**

> 改变元素的透明度,0 =>完全透明, 1 =>不透明

```css
box {
  opacity: 0.5;
  /* 半透明 */
}
```

**min-height/max-height:**

> min-height 设置盒子的最小高度,当内容超出最小高度时盒子会被内容撑开,而不会造成内容溢出,一般不确定一个盒子的内容时使用

> max-height 设置盒子的最大高度,不会被内容撑开,内容超出会溢出,使用 overflow:hidden 可以将溢出的内容隐藏,极少使用

**min-width/max-width:**

> min-width 设置盒子的最小宽度,一般用于设置图片,不知道图片尺寸的时候用来规定图片的最小尺寸,如果图片的最小尺寸超过设置的值则会被压缩

> max-width 设置盒子的最大宽度,当图片的尺寸小于设置的最大宽度时,图片会被拉伸

**box-sizing:**

可以改变盒子的展示模型,默认是 W3C 标准盒模型,可以改变成 IE 盒模型(怪异盒),两者的区别在于 width 和 height 的计算方式不同

> content-box(默认)标准盒模型 ==> width / height = content 区域
>
> border-box IE 盒模型(怪异盒) ==> width / height = content + padding + border

## BFC

> 块级格式化上下文（Block formatting context），他是一块独立的渲染区域，BFC 区域中的所有元素产生的布局与外界的元素没有任何关系，同样，外部的布局也不会对内部产生影响

**BFC 的产生：**

1. 根元素
2. float 不为 none 的元素
3. overflow 不为 visible
4. position 为 absolute，fixed
5. display 为 inline-block,table-cell,flex,inline-flex

**BFC 的布局规则：**

1. 内部的盒子会按照垂直方向依次排列
2. 处于同一个 BFC 内的元素上下 margin 也会重叠
3. BFC 的区域不会与 float 元素重叠
4. 计算高度时，浮动的元素也参与计算

**BFC 的作用：**

1. margin 重叠问题
2. margin 传递问题
3. 高度塌陷
4. 自适应两栏布局

> BFC 最主要的就是产生一个独立的渲染区域，而在这个区域内的元素产生的布局与外界没有任何的关系，只要了解了这个机制，就可以解决很多的问题，就像是一个二层的小楼房，格式化上下文就是这个楼房，BFC 就是处于二楼，普通的元素处在一楼

## 标签分类

### 类型分类

**块元素(block):**

特点:

1. 独占一行,每一个块级元素都会默认上下排列,
2. 可以使用所有的 css 样式属性,如 padding,margin,border....
3. 如果不设置宽高,宽度会根据父元素自适应,和父元素同宽,高度有内容决定

| 标签                | 注释                  |
| ------------------- | --------------------- |
| div                 | 分区                  |
| h1~h6               | 标题                  |
| ol                  | 有序列表              |
| ul                  | 无序列表              |
| li                  | 列表内容              |
| dl                  | 自定义列表            |
| dd                  | dl 中的 dt 描述       |
| from                | 表单                  |
| hr                  | 水平分割线            |
| p                   | 段落                  |
| table               | 表格                  |
| thead               | 表格头部              |
| tbody               | 表格内容              |
| tfoot               | 表格末尾              |
| article ==(H5)==    | 独立或可复用的区域    |
| aside ==(H5)==      | 侧边栏或标注框        |
| canvas ==(H5)==     | 绘制图形              |
| figure ==(H5)==     | 图片,插图等信息组     |
| figcaption ==(H5)== | 图片,插图等信息组标题 |
| section ==(H5)==    | 独立意义的分区        |
| audio ==(H5)==      | 音频                  |
| video ==(H5)==      | 视频                  |
| header ==(H5)==     | 头部                  |
| footer ==(H5)==     | 头部                  |

**行元素(inline):**

特点:

1. 共处一行,不会自动换行
2. 无法设置宽高,无法设置设置上下 padding 和 margin(左右 padding 和 margin 可以设置)
3. 宽高自适应,由内容决定

| 标签                | 注释       |
| ------------------- | ---------- |
| i                   | 斜体       |
| b                   | 加粗       |
| em                  | 强调斜体   |
| strong              | 强调加粗   |
| span                | 文本修饰   |
| sub                 | 文字上标   |
| sup                 | 文字下标   |
| code                | 计算机代码 |
| a                   | 超链接     |
| button              | 空按钮     |
| input ==(特殊)==    | 表单       |
| img ==(特殊)==      | 图片       |
| select ==(特殊)==   | 下拉选项   |
| textarea ==(特殊)== | 文本域     |
| label               | 表单       |

**行内快元素(inline-block):**

特点:

1. 可以设置宽高,padding 和 margin
2. 不会独占一行,共处一行

| 标签             | 注释 |
| ---------------- | ---- |
| input ==(特殊)== | 表单 |
| img ==(特殊)==   | 图片 |

**使用 display 可以标签的三种特点:**

- display:block ==>将标签转换为块级元素
- display:inline ==>将标签转换为内联元素
- display:inline-block ==>将标签转换成内联块元素
- display:none ==>将标签隐藏(不占据布局空间)

### 显示分类

**可替换元素:**

> 显示的内容根据标签的属性来决定显示的内容

| 标签                | 注释     |
| ------------------- | -------- |
| input ==(特殊)==    | 表单     |
| img ==(特殊)==      | 图片     |
| select ==(特殊)==   | 下拉选项 |
| textarea ==(特殊)== | 文本域   |

> 可替换元素拥有浏览器内置的宽高,例如 img 标签可以直接设置宽高,以为 img 拥有内置的 width 和 height,如果不设置宽高,就会按照图片的默认尺寸展示,表单元素也有默认的宽高

**不可替换元素:**

> 浏览器根据标签的内容直接显示,如 div,p,span,大部分的标签都是不可替换元素

### 内容分类

![Kusqs0.png](https://s2.ax1x.com/2019/10/20/Kusqs0.png)

<https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories>

## 布局属性

**display:**

> 可以改变一个元素的显示类型

1. block: 将内联元素修改为块级元素,
2. inline: 将块级元素修改为内联元素
3. inline-block: 将一个元素修改为内联块级元素

### 浮动

**float:**

> 可以使元素脱离正常的文本流进行显示

1. left: 让元素浮动至所在块级容器的左侧
2. right: 让元素浮动至所在块级容器的右侧

> 浮动会让一个元素脱离正常的文本流,并且不再占据布局空间,浮动元素后面的元素会默认位移至该浮动元素浮动之前的位置,浮动元素会遮盖住位移上去未浮动的元素,但是并不会遮盖住文字内容

```css
.box1,
.box2 {
  width: 318px;
  height: auto;
  border: 2px solid orangered;
  list-style: none;
  padding: 0;
  margin: 0;
  float: left;
}
.box1 li:nth-child(1) {
  width: 100px;
  height: 100px;
  background: brown;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
  float: left;
}

.box1 li:nth-child(2) {
  width: 200px;
  height: 200px;
  background: lightgreen;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
}

.box2 {
  margin-left: 50px;
}

.box2 li:nth-child(1) {
  width: 100px;
  height: 100px;
  background: brown;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
}

.box2 li:nth-child(2) {
  width: 200px;
  height: 200px;
  background: lightgreen;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
}
```

![KKhoCV.png](https://s2.ax1x.com/2019/10/20/KKhoCV.png)

> 一个父容器内多个子元素存在浮动时,会依次从浮动的位置排列,如果超出了父容器的宽度时则会向下排列,如果高度超过则会溢出

```css
ul {
  width: 318px;
  height: 300px;
  border: 2px solid orangered;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  width: 100px;
  height: 100px;
  background: brown;
  float: left;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
}
```

> 设置了浮动的子元素不再具有宽高自适应,会以实际的内容大小展示

```css
ul {
  width: 318px;
  height: 300px;
  border: 2px solid orangered;
  list-style: none;
  padding: 0;
  margin: 0;
}

li:nth-child(1),
li:nth-child(2),
li:nth-child(3) {
  width: 100px;
  height: 100px;
  background: brown;
  float: left;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
}

li:nth-child(4) {
  background: brown;
  float: left;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
}
```

![KKRDhT.png](https://s2.ax1x.com/2019/10/20/KKRDhT.png)

> 如果父容器没有设置宽高,由于浮动的子元素会脱离正常的文档流,所以并不会撑起父容器的高度

```css
ul {
  width: 318px;
  border: 2px solid orangered;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  width: 100px;
  height: 100px;
  background: brown;
  float: left;
  box-sizing: border-box;
  border: 2px solid black;
  margin: 3px;
}
```

![KKggGF.png](https://s2.ax1x.com/2019/10/20/KKggGF.png)

**清除浮动:**

**clear:**

> 可以规定一个元素那一侧不允许出现浮动元素

1. left: 规定左侧不允许出现浮动元素
2. right: 规定右侧不允许出现浮动元素
3. both: 规定左右两侧都不允许出现浮动元素

> 在一些自适应的布局当中,浮动的特性很难做到让父容器的高度自适应,因为浮动的子元素会脱离文档里,因此无法使用子元素来撑起父容器的高度,所以需要将子元素的浮动清除

- 给父容器也设置浮动,可以解决高度自适应的问题,但是会影响到父容器后其他元素的布局

```css
#parent {
  float: left;
}
```

- 设置父元素 display:inline-block 来触发 BFC 规范;但是会影响到后续元素的布局

```css
#parent {
  display: inline-block;
}
```

- 给父元素设置固定的宽高,虽然可以让父容器拥有高度,但是无法做到高度自适应

```css
#parent {
  width: 100px;
  height: 100px;
}
```

- 给父元素设置 overflow:hidden 来触发 BFC 规范;较为完美的解决方案,唯一的缺点是父容器溢出的内容会被隐藏

```css
#parent {
  overflow: hidden;
}
```

- 给父容器增加一个空的块级标签,由空的标签撑起父容器的高度,较为完美的做法,缺点就是需要书写一个空的标签

```css
empty-label {
  clear: both;
}
```

- 使用伪类:after 清除浮动,最为完美的做法,实际中也推荐这种

```css
#parent:after {
  content: "";
  display: block;
  clear: both;
  visibility: hidden;
}
```

### 定位

**position:**

> 让元素按照 top,bottom,left,right 四个属性的值来改变其在页面中的展示位置,有四种不同的定位方式

1. absolute: 绝对定位
2. relative: 相对定位
3. fixed: 固定定位
4. sticky: 粘性定位

**absolute:**

> 根据其定位的祖先元素进行位移,如果所有的祖先元素都没有设置定位,则默认是根据文档(浏览器窗口)进行位移!祖先元素只要设置了 absolute,relative,fixed 其中一项就会按照祖先元素进行位移

1. 会是元素完全脱离文档流
2. 内联元素使用定位后可以直接设置宽高(拥有块级元素的特点)
3. 不书写宽高的情况下不会再默认根据父容器自适应,而是由内容撑开
4. 不会独占一行(具备内联元素的特点)

**relative:**

> 根据自身所处的位置进行偏移位移,祖先元素有没有设置定位并不会影响位移的位置

1. 不会脱离文档流
2. 不会影响其他元素的布局

**fixed:**

> 根据文档(浏览器窗口)进行偏移定位,祖先元素有没有设置宽高并不会影响位移的位置

1. 根据当前的可视窗口进行定义,不受浏览器滚动条影响,会始终处于当前定位在可视窗口的位置
2. 完全脱离文档流
3. 内联可以设置宽高,并且拥有块级元素的特点
4. 块级元素的宽高有内容撑开,具备内联元素的特点

**sticky:**

> 根据浏览器的滚动条进行的特殊定位,根据浏览器的可视窗口进行定位,需要设置一个阀值,当窗口出现滚动条并且滑动时,元素设置的阀值达到浏览器和元素的偏移量时会始终定位在当前的位置

1. 必须设置 top,bottom,left,right 中的一个才会生效
2. 父元素不能设置 overflow:hidden;
3. 脱离文档流
4. 父元素不能设置固定的宽高,否则当浏览器滚动条滚动的距离大于父元素的宽高时,sticky 会失效
5. 兼容性不够良好

**z-index:**

> 可以改变定位元素的显示层级,当多个定位元素重叠在一起时,z-index 的值将会改变显示的优先级,默认是 0,数值越大优先级越高,

```css
.box1,
.box2,
.box3 {
  width: 100px;
  height: 100px;
  position: absolute;
}
.box1 {
  background: red;
  z-index: 10;
}
.box2 {
  background: blue;
  z-index: 20;
}
.box3 {
  background: green;
  z-index: 30;
}
/* 根据z-index的值
 * 显示的顺序是.box3  .box2  .box1
 */
```

**border-radius:**

> 可以设置盒子的四个圆角,也可以单独设置每一个

| 属性                              | 位置                                            |
| --------------------------------- | ----------------------------------------------- |
| border-radius:10px                | 四个角都设置 10px                               |
| border-radius:10px 20px           | 左上右下 10px ==右上左下 20px==                 |
| border-radius:10px 20px 30px      | 左上 10px==右上左下 20px== 右下 30px            |
| border-radius:10px 20px 30px 40px | 左上 10px ==右上 20px== 右下 30px ==左下 40px== |
| border-radius:10px/20px           | 水平半径 10px ==垂直半径 20px==                 |

**元素水平垂直居中:**

> 使用定位让元素水平和垂直位置分别偏移 50%;然后再设置水平和垂直位置的 margin 值为负的元素宽高值的一半,(absolute 和 fixed 都可以实现)

```css
box {
  width: 200px;
  height: 200px;
  background: orangered;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
```

## 过渡 / 变形 / 动画

### transtion

1.transition-property ==>需要产生过渡的样式

> 可以单独设置某一个样式,也可以设置多个或者全部设置

- 如果只设置一个直接书写这个样式即可
- 如果设置多个需要使用`,`分割
- 如果书写为 all 或者复合写法中不书写则默认全部样式都产生过渡效果

---

2.transition-duration ==>过渡的持续时间

> 可以设置为秒也可以设置为毫秒

- s 代表秒
- ms 代表毫秒

---

3.transition-delay ==>过渡的开始时间

> 可以设置为负数,会省略掉过渡开始之前的效果,如果负的时间等于过渡的时间则不会产生过渡效果

---

4.transition-timing-function ==>过渡效果的运动曲线

> 默认是 ease,可以使用贝塞尔曲线

- linear ==>匀速运动
- ease ==>先慢速后加速,以慢速结束效果
- ease-in ==>以慢速开始
- ease-out ==>以慢速结果效果
- ease-in-out ==>以慢速开始和结束
- cubic-bezier(n,n,n,n) =>使用贝塞尔曲线设置效果

**贝塞尔曲线网站:**

<http://yisibl.github.io/cubic-bezier/>

**运动曲线:**

![KwHzZT.png](https://s2.ax1x.com/2019/10/25/KwHzZT.png)

```css
.box {
  width: 200px;
  height: 200px;
  background: pink;
  transition-property: all;
  /* 整个元素所有的样式都产生过度效果 */
  transition-duration: 3s;
  /* 过度效果持续3秒 */
  transition-delay: 1s;
  /* 延迟1秒之后再开始执行过渡效果 */
  transition-timing-function: linear;
  /* 过渡效果的运动曲线是匀速 */
}
.box:hover {
  width: 400px;
  height: 400px;
  background: green;
}

/* 复合写法 */
.box {
  transition: all 2s 0s linear;
  /* 第一个代表过渡的样式,可以省略,省略默认是全部样式产生过渡效果
   * 第二个代表过渡效果的持续时间
   * 第三个代表开始的事时间,可以省略,省略默认立即开始
   * 第四个代表运动的曲线,可以省略,省略默认是ease
   */
}
```

### transform

> 只有块级元素才可以应用此样式属性,内联元素如果要使用需要先转换为块级元素,转换的元素不会影响到其他的元素,如果书写的是复合样式,则执行顺序是从后向前,**translate 会受到 scale,rotate,skew 的影响,有时无法位移值正确的位置**

**3D 空间:**

transform-style:preserve-3D; ==>设置 3D 空间

**景深:**

perspective ==>设置景深效果,也就是元素被查看的位置,值越大元素的展示越小,值越小元素展示的就越大,使用 origin 可以改变观察的角度,只适用于 3D 效果,当元素添加景深效果时,子元素会获得透明效果,而不是元素本身

**位移:**

translate ==>根据给定的坐标,元素匀速向其位移

| 属性                 | 样式                        |
| -------------------- | --------------------------- |
| translateX( )        | 设置位移的 X 轴坐标         |
| translateY( )        | 设置位移的 Y 轴坐标         |
| translate( x , y )   | 根据 x,y 轴进行 2D 位移     |
| translate3D( x,y,z ) | 根据 x,y,z 轴进行 3D 位移   |
| translateZ()         | 根据 z 轴的坐标进行 3D 位移 |

**缩放:**

scale ==>根据给定的 x(宽度)轴和 y 轴(高度)的数值进行缩放

| 属性             | 样式               |
| ---------------- | ------------------ |
| scale( x,y )     | 2D 样式的缩放      |
| scaleX()         | 2D 样式 X 轴的缩放 |
| scaleY()         | 2D 样式 Y 轴的缩放 |
| scaleZ()         | 3D 样式 Z 轴的缩放 |
| scale3D( x,y,z ) | 3D 样式的缩放      |

> 缩放的原始值大小是 1,即样式不做改变,0-1 之间为缩小,1-n 之间为放大,如果 x 轴和 y 轴的缩放是一样的则可以指书写一个值,设置的值都是原有大小的倍数,3D 效果下可以改变元素的厚度,如果 scale 的值设置为-1,则元素会翻转倒立

**旋转:**

rotate ==>根据给定的 x 和 y 轴的坐标进行旋转,默认为顺时针旋转,如果书写负值,则为逆时针旋转,使用的是角度单位 deg

| 属性       | 样式           |
| ---------- | -------------- |
| rotate()   | 2D 旋转        |
| rotate3D() | 3D 旋转        |
| rotateX()  | X 轴的 3D 旋转 |
| rotateY()  | Y 轴的 3D 旋转 |
| rotateZ()  | Z 轴的 3D 旋转 |

> rotate3D()并不能直接书写三个位置的值,只能三个轴都是用一个值,如果不希望当前的轴使用,书写 0 即可,使用则书写 1, `rotate3D(0,0,1,30deg)`,顺序是 X,Y,Z

**倾斜:**

skew ==>倾斜使用的也是角度单位 deg,且都为 2D 倾斜,没有 3D 倾斜,默认是向左倾斜,如果书写的是负值,则是向右

| 属性  | 样式     |
| ----- | -------- |
| skewX | X 轴倾斜 |
| skewY | Y 轴倾斜 |

**基点:**

origin ==>可以设置元素进行变化的基点,可以使用坐标单词,也可以使用百分比,默认是以元素的中心为基点

| X 轴   | Y 轴   | Z 轴   |
| ------ | ------ | ------ |
| left   | top    | length |
| right  | bottom |        |
| center | center |        |
| %      | %      |        |

> Z 轴设置基点只能书写数值,perspection 也可以设置基点

### animation

通过@keyframes 关键字将动画效果与元素进行绑定,@keyframes 用于创建动画效果,通过自定义的名称将动画效果和元素绑定在一起

> @keyframes 需要创建一个自定义的动画名称才能和元素进行绑定,动画使用 from 和 to 来规定动画的效果,也可以使用 % 进行设置,使用 % 可以将动画的效果设置的更加美观

- from <==> 0%
- to <==> 100%

```css
@keyframes my_name {
  /* 使用from和to等价于0%和100% */
  from {
    background: red;
  }
  to {
    background: pink;
  }

  /* 使用百分比可以更加细致的设置动画 */
  0% {
    background: red;
  }
  25% {
    background: pink;
  }
  50% {
    background: blue;
  }
  100% {
    background: green;
  }

  /* 多个阶段如果使用的动画效果一样,可以书写在一起 */

  0%,
  30%,
  60% {
    background: red;
  }
  10%,
  40%,
  70% {
    background: pink;
  }
  20%,
  50%,
  80% {
    background: blue;
  }
  90%,
  100% {
    background: green;
  }
}
```

animation-name ==>动画的名称,和@keyframes 自定义的名称一致才可以执行动画效果

animation-duration ==>动画的执行一个周期所需的时间,秒或者毫秒

animation-delay ==>动画开始的时间,可以设置负数,负数时会跳过负数的执行阶段

animation-timing-function ==>动画的运动曲线

1. ease ==>默认,慢速开始,缓慢加速,在结束之前变慢
2. linear ==>匀速,动画一直以相同的速度执行
3. ease-in ==>慢速开始,匀速结束
4. ease-out ==>匀速开始,慢速结束
5. ease-in-out ==>慢速开始和结束,中间匀速运行
6. cubic-bezier(n,n,n,n) ==>使用贝塞尔曲线

animation-iteration-count ==>动画的播放次数,默认是 1,

- infinite ==>无限次播放

animation-direction ==>规定动画是否在播放完毕后进行反向播放

- normal ==>默认,不进行反向播放
- alternate ==>轮流反向播放

animation-fill-mode ==>规定动画效果结束之后动画效果是否可见

- none (默认值) : ==>在运动结束之后回到初始位置，在延迟的情况下，让 0%在延迟后生效
- backwards : ==>在延迟的情况下，让 0%在延迟前生效
- forwards : ==>在运动结束的之后，停到结束位置
- both : ==>backwards 和 forwards 同时生效

animation ==>复合写法,必须包含 animation-name 和 animation-duration 两个属性,其余不书写则是默认值

> `animation:name duration timing-function delay iteration-count direction`

```css
.box {
  animation: my_name 2s linear 1s infinite alternate both;
  /*
   * animation-name:my_name
   * animation-duration:2s
   * animation-timing-function:linear
   * animation-delay:1s
   * animation-iteration:infinite
   * animation-direction:alternate
   * animation-fill-mode:both
   */
}
@keyframes my_name {
  from {
    background: red;
  }
  to {
    background: pink;
  }
}
```

**动画库:**

<https://daneden.github.io/animate.css/>

> 将 animate.css 文件引入到当前的 HTML 文件中,然后给需要产生动画效果的元素添加类名 animated,其次添加类名,如动画的效果,持续的事件,延迟的事件等,都是通过添加类名的方式来给元素添加动画

### 渐变

**线性渐变:**

> linear-dradient ==>线性渐变 需要配合 background-image 使用,

1. 可以使用角度单位进行设置渐变的角度
2. 使用 to 制定渐变终止的位置
3. 使用 % 规定每个颜色渐变的范围,如果两个颜色渐变的范围一样,则不会产生渐变效果

```css
.box {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(to top, red, pink);
  /* to是指从另外一边到当前的位置,to top是指从底部开始渐变,一直渐变到顶部*/

  background-image: linear-gradient(
    lightblue 25%,
    lightgreen 25%,
    lightgreen 50%,
    lightblue 50%,
    lightblue 75%,
    lightgreen 75%
  );
  /* 实现无渐变效果的颜色交替,可以模仿进度条,如果需要倾斜可以使用to top right或者deg角度进行设置 */
}
```

**径向渐变:**

radial-gradient ==>以中心开始向外进行渐变

## 阴影

**文本阴影:**

text-shadow ==>可以向文本添加一个或者多个阴影效果,多个阴影效果之间使用 `,`分割,默认的阴影颜色和文本颜色相同

1. 第一个值是水平位置的偏移量!必须是书写,支持负数
2. 第二个值是垂直位置的偏移量!必须书写,支持负数
3. 第三个值是阴影的距离!必须书写,0 或负数则没有效果
4. 第四个值是阴影的颜色

```css
.font {
  text-shadow: 10px 20px 10px pink;
  /* 水平位置偏移10px
   * 垂直位置偏移20px
   * 阴影距离是10px
   * 阴影颜色是pink
   */
}
```

**box-shadow:**

box-shadow ==>设置一个或者多个阴影效果,多个阴影效果之间使用`,`隔开,默认的阴影颜色是黑色

1. 第一个值为阴影的水平位置,必须书写,支持负数
2. 第二个值为阴影的垂直位置,必须书写,支持负数
3. 第三个值为阴影的模糊距离
4. 第四个值为阴影的大小
5. 第五个值为阴影的颜色,默认黑色
6. 设置因为的内外层,默认为外层,设置为 inset 为内层

```css
.box {
  width:200px
  height:200px;
  background:lightblue;
  box-shadow:0 0 10px 5px blue;
  /*  第一个值为阴影的水平位置
   *  第二个值为阴影的垂直位置
   *  第三个值是阴影的模糊度
   *  第四个值是阴影的大小
   *  第五个值是阴影的颜色
   *  没有改变阴影的内外层
   */
}
```

## 布局

### column

> 该布局可以做出类似于报纸排版的内容

1. clout 需要分割的列数
2. width 规定每列的宽度
3. gap 规定每列之间的间距
4. rule 设置列之间的边框,不会占据布局空间
5. span 设置跨列,all 表示跨越所有列,通常用于设置板块的标题

> clout 和 width 不能同时设置,通常使用 columns 设置,

```css
.box {
  columns: auto 3;
  /* 分成三列,每列的宽度自适应 */
}
```

### 等高布局

> 使用这个方法无法添加下边框,可以使用 div 替代

```html
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .parent {
      width: 600px;
      border: 3px solid pink;
      margin: 50px auto;
      overflow: hidden;
    }

    .son1 {
      width: 200px;
      margin-bottom: -1000rem;
      padding-bottom: 1000rem;
      background: orangered;
      float: left;
    }

    .son2 {
      width: 200px;
      margin-bottom: -1000rem;
      padding-bottom: 1000rem;
      background: green;
      float: right;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="parent">
      <div class="son1"></div>
      <div class="son2"></div>
    </div>
  </div>
</body>
```

### 圣杯布局

> 当中间的内容区域小于两侧的内容区域时,会产生布局错乱,给父容器设置最小宽度

```html
<head>
  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .container {
      height: 600px;
      padding: 0 100px;
    }

    .content {
      width: 100%;
      height: 100%;
      background: pink;
      float: left;
    }

    .left {
      width: 100px;
      height: 300px;
      background: orange;
      float: left;
      margin-left: -100%;
      position: relative;
      left: -100px;
    }

    .right {
      width: 100px;
      height: 300px;
      background: blue;
      float: left;
      margin-left: -100px;
      position: relative;
      right: -100px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="content">内容</div>
    <div class="left">左边</div>
    <div class="right">右边</div>
  </div>
</body>
```

### 双飞翼布局

> 会多创建一个标签

```html
<head>
  <style>
    .container {
      height: 600px;
    }

    .content {
      width: 100%;
      height: 100%;
      float: left;
    }

    .text {
      height: 100%;
      background: pink;
      margin: 0 100px;
    }

    .left {
      width: 100px;
      height: 300px;
      background: lightcyan;
      float: left;
      margin-left: -100%;
    }

    .right {
      width: 100px;
      height: 300px;
      background: lightcoral;
      float: left;
      margin-left: -100px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="content">
      <div class="text">中间</div>
    </div>
    <div class="left">左边</div>
    <div class="right">右边</div>
  </div>
</body>
```

## flex 弹性盒子

> 弹性盒模型是一种 css3 新增加的布局模型,它可以使内部的元素在不同的尺寸或者不同的设备上都可以显示出很好的效果,

- 弹性盒子内的子元素无法使用一下的属性

1. flaot 属性无法使用,因为 float 会将子元素的 display 转换为 block
2. column 属性无法使用
3. clear 属性无效
4. vertical-align 属性无效

### 弹性容器属性

**轴:**

> 成为弹性盒子的容器会拥有主轴和测轴,元素依次排列于主轴上,垂直于主轴的叫做侧轴

![Ky1Y2q.png](https://s2.ax1x.com/2019/10/27/Ky1Y2q.png)

**direction:**

> 可以改变主轴的顺序,即改变元素的默认排列方向

| 属性           | 主轴                |
| -------------- | ------------------- |
| row            | 水平方向,起点在左侧 |
| row-reverse    | 水平方向,起点在右侧 |
| column         | 垂直方向,起点在上端 |
| column-reverse | 垂直方向,起点在下端 |

![Kya0Zq.jpg](https://s2.ax1x.com/2019/10/27/Kya0Zq.jpg)

**wrap:**

> 默认情况下弹性元素都是依次排列在主轴上的,当弹性元素的宽度大于弹性容器时并不会自动的换行,而是会通过挤压弹性元素的方式继续保持一行,如果弹性元素无法再做挤压时,那么就会超出弹性容器

| 属性         | 操作              |
| ------------ | ----------------- |
| nowrap       | 默认,不换行       |
| wrap         | 换行              |
| wrap-reverse | 换行,第一行在下面 |

![KydkOs.jpg](https://s2.ax1x.com/2019/10/27/KydkOs.jpg)

**flow:**

> direction 和 wrap 的缩写,默认是`flex-flow:row nowrap;`

**just-content:**

> 定义弹性元素在主轴上的对其方式

| 属性          | 对其方式              |
| ------------- | --------------------- |
| flex-start    | 默认:主轴其实位置对齐 |
| flex-end      | 主轴结束位置对齐      |
| center        | 居中                  |
| space-between | 两端对齐,中间间隔相等 |
| space-around  | 两侧间隔相等          |

> 设置 space-around 时弹性元素之间的间隔会是两端距离弹性容器边缘的两倍

![KywbqA.jpg](https://s2.ax1x.com/2019/10/27/KywbqA.jpg)

**align-items:**

> 定义交叉轴上的对齐方式,默认情况下若干弹性元素没有设置高度或者高度设置的是 auot,将会沾满整个弹性容器,如果弹性容器没有设置高度,那么该属性将无法生效;

| 属性       | 样式                           |
| ---------- | ------------------------------ |
| stretch    | 默认                           |
| flex-start | 交叉轴的起点对齐               |
| flex-end   | 交叉轴的终点对齐               |
| center     | 交叉轴的终点对齐               |
| baseline   | 弹性元素的第一行文字的基线对齐 |

![KygpbF.jpg](https://s2.ax1x.com/2019/10/27/KygpbF.jpg)

**align-content:**

> 定义多根轴线的对齐方式,如果弹性容器中一个一条轴线,该属性将不会起作用

| 属性          | 对齐方式            |
| ------------- | ------------------- |
| stretch       | 默认,占满整个交叉轴 |
| flex-start    | 与交叉轴的起点对齐  |
| flex-end      | 与交叉轴的终点对齐  |
| center        | 与交叉轴的中点对齐  |
| space-between | 与交叉轴两端对齐    |
| space-around  | 轴线之间间隔相等    |

> align-content 和 align-items 的区别就是 align-content 是对每一行的弹性元素有作用,如果一个弹性容器内只有一行弹性元素,那么这个属性将不会起作用,而 align-items 的对每一个弹性元素产生作用,只要弹性容器内有弹性元素,那么这个属性就会起作用

![Kyf0mV.jpg](https://s2.ax1x.com/2019/10/27/Kyf0mV.jpg)

### 弹性元素属性

**order:**

> 使用整数改变元素的排列顺序,数值越小的排前面,支持负数,默认值是 0

**flex-grow:**

> 定义当前元素扩展的量,默认时候 0,设置了这个属性的弹性元素会默认将弹性容器剩余的空间沾满,

**flex-shrink:**

> 定义当前的弹性元素收缩的量,默认是 1,数值越大收缩的越多

**flex-basis:**

> 规定弹性元素的初始宽度,默认长度等于弹性元素的宽度,如果该弹性元素没有规定宽度,默认则是由内容撑开,会覆盖设置的`width`的宽度

**flex:**

> flex-grow, flex-shrink,flex-basis 的缩写形式

1. 第一个是 flex-grow 的值
2. 第二个是 flex-shrink 的值
3. 第三个是 flex-basis 的值

**align-self:**

> 设置弹性元素自身在侧轴上的对齐方式 ,弹性元素默认是继承弹性容器的`align-items`属性,如果弹性容器没有设置`align-items`属性,则默认是 stretch

| 属性       | 样式               |
| ---------- | ------------------ |
| auto       | 默认               |
| stretch    | 拉升以适应弹性容器 |
| flex-start | 位于容器的开头     |
| flex-end   | 位于容器的底部     |
| center     | 位于容器的中间     |
| baseline   | 位于父容器的基线   |

## grid 网格布局

## 兼容

兼容性处理通常都是处理 IE 浏览器 Hack 兼容处理法 **属性过滤器:** >
给单一的样式添加特定的浏览器前缀,只让该浏览器解析这个样式,以达到兼容性的处理

```css
.box {
  _animation-direction: alternate;
  /* 只有IE6可以识别 */

  +animation-fill-mode: both;
  /* IE6和IE7可以识别 */

  *animation-iteration-count: infinite; /* IE6和IE7可以识别 */

  transition-property: all\9; /*
IE6,7,8,9可以识别 */

  transform-style: preserve-3d\0;
  /* IE8,9,10,11可以识别 */
}
```

**css 选择器前缀:**

```css
*html.box {
  animation-timing-function: linear;
}
/* IE6可以识别 */

* + html.box {
  animation-leday: 2s;
}
/* IE7可以识别 */

:root.box {
  animation-duration: 2s;
}
/* IE9及现代浏览器可以识别 */
```

**条件注释法:**

```html
<!-- [if IE] -->
<style>
  /* IE浏览器执行的code */
</style>
<![endif]  -->

<!-- [if IE 6] -->
<style>
  /* IE6执行的code */
</style>
<![endif]  -->

<!-- [if gt IE 8] -->
<style>
  /* IE8以上code */
</style>
<![endif] -->

<!-- [if gte IE 8] -->
<style>
  /* IE8及以上code */
</style>
<![endif] -->

<!-- [if lt IE 8] -->
<style>
  /* IE8以下code */
</style>
<![endif] -->

<!-- [if lte IE 8] -->
<style>
  /* IE8及以下code */
</style>
<![endif] -->

<!-- [if ! IE 8] -->
<style>
  /* 非IE浏览器code */
</style>
<![endif] -->
```

## 伪元素和伪类

**伪元素:**

> 伪元素使用两个`::`隔开,伪元素可以创建一个虚拟的元素,创建的元素并不会存在于 DOM 树中,我们可以给这个虚拟的元素添加内容,也可以添加样式

**常用的伪元素:**

| 伪元素         | 作用                                     |
| -------------- | ---------------------------------------- |
| ::after        | 在元素内容的最前面添加新的内内容         |
| ::before       | 在元素内容的最后面添加新的内容           |
| ::first-line   | 将为元素的样式应用于元素文本的第一行     |
| ::first-letter | 将伪元素的样式应用于元素文本的第一个字母 |

> `::first-letter`和`::first-line`只能应用于块级元素

**伪类:**

> 伪类使用一个`:`,可以根据用户动态产生的一些行为添加一些额外的样式,例如鼠标滑过,鼠标点击等

**常用的伪类:**

| 伪类     | 作用                        |
| -------- | --------------------------- |
| :link    | 链接未访问(仅适用于 a 标签) |
| :visited | 链接访问后(仅使用后 a 标签) |
| :hover   | 鼠标滑过                    |
| :active  | 鼠标点击                    |
| :checked | 选中的元素(单选框和多选框)  |
| :focus   | 变单元素聚焦                |

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

**变量:**

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

**函数:**

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

**层级嵌套:**

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

**导入外部文件:**

- 对于一些公共的样式我们一般会书写在另外的一个文件内，然后在当前书写的 less 文件中引入公共的样式

```css
语法：@import "同文件夹下的文件名";

/* 引入的书写方法 */
@import (reference) "common";
/*reference:只把内容导入过来使用,但是不会编译common中的内容*/

```
