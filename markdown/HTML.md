# HTML (Hypertext Marked Language)

## 简介

HTML 称为超文本标记语言，是一种标识性的语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的 Internet 资源连接为一个逻辑整体。HTML 文本是由 HTML 命令组成的描述性文本，HTML 命令可以说明文字，图形、动画、声音、表格、链接等

## link/meta

**link:**

link 的主要作用就是建立文档和外部资源的链接

链接外部 css 文件

`<link rel="stylesheet" type="text/css" href="style.css">`

标题栏小图标

`<link rel="icon" href="ico小图标路径" type="image/x-icon">`

**meta:**

meta 主要是提供一些关于网站的元信息,例如网站的关键字描述等

然 IE 浏览器使用以最新的引擎渲染网页

`<meta http-equiv="X-UA-Compatible" content="ie=edge">`

`<meta name="description" content="网页的描述">`

`<meta name="keywords" content="网页的关键词">`

`<meta name="viewport"content="width=device-width, initial-scale=1.0">`

> 此 META 标签就是在设置 VP(视口)的规则

- width=device-width：让 HTML 页面的宽度等于设备的宽度
- height=：设置 HTML 页面的高度（一般不用）
- initial-scale=1.0：初始缩放比例是 1:1（也就是既不放大也不多小）
- user-scalable=no：禁止用户手动缩放
- maximum-scale=1.0
- minimum-scale=1.0：设置最大最小的缩放比例 1:1(既不放大也不缩小 =>部分安卓机中只设置 user-scalable 是不起作用的，需要同这两个一起使用) ...

1. layout viewport：布局（页面）视口（和开发 CSS 等相关）
2. visual viewport：手机视口
3. ideal viewport：理想视口

## 常用标签

页面头部

```html
<!DOCTYPE html>
<!--文档声明!告知浏览器是一个html文件 -->
<html lang="en"></html>
<!-- 根标签!lang="en"表示是一个英文网站!lang="zh-CN"表示是一个中文 -->
<head>
  <!-- 存放一些元信息,用于描述往回走哪 -->
  <meta charset="UTF-8" />
  <!-- 网页使用的国际编码 -->
  <title>Document</title>
  <!-- 网页的标题信息 -->
</head>
<body>
<!-- 网页的内容书写区域 -->
</body>
</html>
```

### 标题与段落

```html
<h1>标题</h1>
<h2>标题</h2>
<h3>标题</h3>
<h4>标题</h4>
<h5>标题</h5>
<h6>标题</h6>

<p>春眠不觉晓</p>
<p>处处闻啼鸟</p>
<p>夜来风雨声</p>
<p>花落知多少</p>
```

> `h1`标签同一个页面中只允许出现一次,多用于表示网页中比较重要的部分,例如网页的 logo
>
> `p`标签内的文字会换行展示

### 文本修饰

```html
<strong>强调加粗</strong>
<b>加粗</b>
<em>强调斜体</em>
<i>斜体</i>
<sub>文字上标</sub>
<sup>文字下表</sup>
<del>删除线</del>
<ins>插入线</ins>
```

### 图片标签

```html
<img src="" alt="" title="" width="" height="" />
```

> src ==>图片的引用地址(URl 绝对路径 相对路径)
>
> alt ==>图片的提示信息(图片加载失败显示)
>
> title ==>图片提示信息(鼠标悬停显示)
>
> width ==>图片宽度(加载时保留的宽度)
>
> 指定图像的高度和宽度是一个很好的习惯。如果图像指定了高度宽度，页面加载时就会保留指定的尺寸。如果没有指定图片的大小，加载页面时有可能会破坏 HTML 页面的整体布局。(默认单位为像素,不需要书写)
>
> height ==>图片高度(加载时保留的高度)

### 链接

```html
<!-- 新建标签页打开当前的链接 -->
<a href="http://www.baidu.com" target="_blank/_self">跳转到百度</a>

<!-- 在当前的标签页打开链接 -->
<a href="http://www.baidu.com" target="_self">跳转到百度</a>

<a href="http://www.baidu.com" target="_self">
  <img src="URL" alt="" title="" />
  <!-- 可以使用嵌套在a标签内的图片或者是其他的html标签作为跳转链接 -->
</a>

<!-- 规定页面中所有的a标签的链接地址和打开方式 -->
<base href="http://www.baidu.com" target="_blank  _self" />
```

> href ==>需要跳转的 URL 链接地址
>
> target ==>页面的打开方法
>
> \_blank ==>新建标签页打开
>
> \_self ==>当前页面打开(默认)
>
> base ==>必须书写在 head 中,规定所有的 a 标签的链接地址和打开方式,如果后续的 a 标签单独设置了 href 和 target 属性,则会被覆盖

### 锚点

```html
<!-- 使用ID绑定 -->
<a href="#box">所在处</a>
<p id="box">跳转处</p>
```

> 给需要跳转的区域绑定 id 属性,然后通过 a 的 href 属性进行绑定,当点击 a 标签时会自动跳转至绑定的标签处

```html
<!-- name属性跳转 -->
<a href="#box"> </a>
<a name="box"></a>
```

> 通过给另外一个 a 设置 name 属性,进行锚点跳转

### 转义字符

| 字符 | 转移   |
| ---- | ------ |
| 空格 | &nbsp; |
| <    | &lt;   |
| >    | &gt;   |
| &    | &amp;  |
| ©    | &copy; |
| ®    | &reg;  |

> 有些特殊的字符无法直接的书写使用,使用使用转义字符进行转换

### 列表标签

```html
<!-- 无序列表 -->
<ul>
  <li>无序列表1</li>
  <li>无序列表2</li>
  <li>无序列表3</li>
  <li>无序列表4</li>
</ul>

<!--有序列表-->
<ol>
  <li>有序列表1</li>
  <li>有序列表2</li>
  <li>有序列表3</li>
  <li>有序列表4</li>
</ol>

<!--自定义列表-->
<dl>
  <dt>关键词或名词</dt>
  <dd>对关键词</dd>
  <dd>或者名词</dd>
  <dd>的描述</dd>
  <dd>或解释</dd>
</dl>
```

> 现已自定义列表的显示样式,不过通常都是利用 css 进行样式修改,因此不推荐使用,也不做描述

### 表单

```html
<table>
  <caption>
    天气预报
  </caption>
  <thead>
    语义化标签
    <tr>
      <td>日期</td>
      <td>天气</td>
      <td>出行</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">10-18</td>
      <td colspan="2">晴天</td>
    </tr>
    <tr>
      <td>晴天</td>
      <td>适合</td>
    </tr>
  </tbody>
</table>
```

> cellpadding 定义文本距离表格单元格边界的距离
>
> cellspacing 定义每个表格单元格之间的距离
>
> rowspan 合并行之间的单元格(删除邻居的 td 标签)
>
> colspan 合并列之间的单元格(删除自己的 td 标签)
>
> tHead 语义化标签!表示表格的头部
>
> align 规定单元格内容的水平方向(left/right/center)
>
> valign 规定单元格内容垂直方向(tio/bottom/middle)
>
> tBody 语义化标签!表示表格的内容
>
> tFoot 语义化标签!表示表格的尾部

### 新增表单

```html
<form action="提交地址" method="提交方式">
  <input type="text" placeholder="请输入用户名" />
  <!--    文本框-->
  <input type="password" placeholder="请输入密码" />
  <!--    密码框-->
  <input type="checkbox" checked disabled />
  <!--    多选框-->
  <input type="radio" name="sex" id="man" /><label for="man">男</label>
  <input type="radio" name="sex" id="woman" /><label for="woman">女</label>
  <!--    单选框-->
  <input type="submit" />
  <!--    提交按钮-->
  <input type="reset" />
  <!--    重置按钮-->
  <input type="button" />
  <!--    空按钮-->
  <input type="file" multiple />
  <!--    提交文件-->
  <textarea></textarea>
  <!--文本域-->
  <select multiple>
    <option value="" selected disabled>香蕉</option>
    <option value="">橘子</option>
    <option value="">橙子</option>
  </select>
  <!--下拉菜单-->
</form>
```

> placeholder 输入框的提示信息
>
> checked 默认选中
>
> disabled 禁止选中
>
> selected 下拉菜单的默认选中
>
> multiple 多选,可用于邮箱(多邮箱之间 , 隔开)选择文件,下拉选项
>
> radio 相同的分组需要设置相同的 name 属性,否则无法区分
>
> label for 需要与 radio 的 id 属性捆绑

**表单美化：**

> 将需要美化的表单标签和一个`div`包裹进`label`标签中，然后将表单标签进行隐藏，通过给`div`设置背景图的方式实现美化，最后通过伪元素`:checkbox`设置点击时`div`背景图的位置

```html
<style>
  input {
    display: none;
  }

  input:checked + div {
    background-position: 0 0;
  }

  div {
    display: inline-block;
    width: 40px;
    height: 28px;
    background: url(../images/checkbox.png) no-repeat left bottom;
  }
</style>
<label>
  <input type="checkbox" />
  <div></div>
  多选框
</label>
```

> 使用一个父容器将表单标签和一个空的 `div` 包裹在一起，然后给空的 `div` 添加背景图，通过定位的方式将所有的元素重叠在一起，最后将表单元素设为`opacity:0;`透明就可以了

```html
<style>
  input {
    width: 100%;
    height: 100;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }

  .container {
    width: 100px;
    height: 40px;
    position: relative;
  }

  .container div {
    width: 100%;
    height: 100%;
    background: url(../images/upload.png) no-repeat left bottom;
  }
</style>
<div class="container">
  <input type="file" />
  <div></div>
</div>
```

### div/span

```html
<div>快标签</div>
<span>内联标签</span>
```

> div 充当一个功能或者一小块内容的容器
>
> span 对单独的几个文字进行修饰

### 不常用的标签

**iframe:**

> 可以引用其他的 HTML 文件到当前的页面中,也可以使用 url 地址

```html
<iframe src="https://www.taobao.com" frameborder="0" scrolling="no"></iframe>
```

> src ==>引入文件的地址
>
> frameborder ==>是否现在周围框架

1. "1" 显示
2. "0" 不显示

> width ==>引入文件在页面中显示的宽度
>
> height ==> 引入文件在页面中显示的高度
>
> scrolling ==>规定是否拥有滚动条

1. yes ==>显示
2. no ==>不显示

**br / wbr:**

> 换行 / 软换行

**pre / code:**

> 用来表示计算机的源代码

**map / area:**

> 图片热区

**embed / object:**

> 引入 flash 动画

**ruby / rt:**

> 显示文字的注解

```html
<ruby>
  寒<rt>hán</rt>冬
</ruby>
```

### HTML5

**语义化标签：**

**header：**

> 表示网页的头部,可以出现多次,一个完整的内容区也可以使用

**nav：**

> 表示导航栏

**main：**

> 表示网页中的主要内容,且标签内的内容时唯一的,内容不能重复出现,网页中只能出现一个 main 标签

**article：**

> 表示一个独立的文章区域,例如一篇完整的文章,用户的评论等

**aside：**

> 表示一个独立的内容,例如侧边栏,广告等

**section：**

> 表示一个完整内容区下细分的一个小内容区

**figure：**

> 表示独立的文档流内容,例如新闻中的缩略图等

**figcaption：**

> 表示 figure 的标题,例如新闻缩略图中的内容概要

**footer：**

> 表示一个网页的页脚,可以出现多次,每一个完整的内容区的尾部都可以使用

**hgroup:**

> 标题组合,一般用于嵌套拥有主副标题的区域

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        text-align: center;
      }

      header {
        width: 100%;
        height: 10%;
        background: pink;
      }

      nav {
        width: 100%;
        height: 10%;
        background: #5cb85c;
      }

      .box {
        width: 100%;
        height: 70%;
      }

      .box > header {
        width: 100%;
        height: 10%;
        background: brown;
      }

      article {
        width: 80%;
        height: 80%;
        background: palegreen;
      }

      section {
        width: 80%;
        height: 80%;
        background: rebeccapurple;
        position: relative;
        top: 40px;
        margin: 0 auto;
      }

      aside {
        display: block;
        width: 20%;
        height: 56%;
        background: lightseagreen;
        float: right;
        position: absolute;
        right: 0;
        top: 222px;
      }

      figure {
        width: 200px;
        height: 200px;
        background: orangered;
      }

      .box > footer {
        width: 100%;
        height: 10%;
        background: #db192a;
      }

      footer {
        width: 100%;
        height: 10%;
        background: khaki;
      }
    </style>
  </head>
  <body>
    <header>网页头部 header</header>
    <nav>网页导航 nav</nav>
    <div class="box">
      <header>内容头部 header</header>
      <article>
        文章区 article
        <section>
          细分的内容 section
          <figure>
            流媒体 figure
            <figcaption>流媒体标题 figcaption</figcaption>
          </figure>
        </section>
      </article>
      <aside>侧边栏 aside</aside>
      <footer>内容尾部 footer</footer>
    </div>
    <footer>网页尾部 footer</footer>
  </body>
</html>
```

> 大部分的现代浏览器都支持 HTML5 新增的语义化标签,IE9 部分支持(但是会将其转化成行内元素),IE9 以下都不支持

- IE9 可以使用 display:block;解决,IE9 以下需要使用第三方的插件或者使用 js 动态的创建同名的元素(默认创建的标签都是行内标签)

```javascript
document.createElement("ASIDE");
//=> 创建的都是行内元素,无法直接设置宽高和内外的上下边距
```

**表单：**

**元素标签：**

`datalist`

> 可以将选项与输入框关联,每个浏览器显示的样式不一样,兼容性也不好

1. datalist 必须书写一个 id
2. 需要绑定的输入框通过 list 绑定 datalist 的 id
3. potion 可以书写成单标签的形式
4. 如果输入框的类型是 url 则必须添加`http://`

```html
<input type="text" list="txt" />
<datalist id="txt">
  <option value="百度" label="讲好才能"></option>
  <option value="还好" label="谷歌"></option>
  <option value="正在用" label="必应"></option>
</datalist>
```

`output`

> 用来放置输出的内容,只能显示不能修改,需要通过 js 动态的添加!语义化更强

`keygen`

> 非对称加密,大部分的浏览器不支持

- 表单属性

```html
<input type="text" placeholder="请输入用户名" />
<!--提供默认的提示信息,输入时提示信息自动消失-->
<input type="text" autofocus />
<!--自动聚焦当前设置autofocus的输入框-->
<input type="text" autocomplete="on" />
<!--
    第一次提交时会记录,并在下次提交时提供提示信息
    自动提示功能,曾经提交过相关输入框的信息和设置name属性才可以使用
    on:打开
    off:关闭
-->
<input type="tel" required pattern="^(\+86)?\d{10}$" />
<!--
    required:表示这个输入框必须输入
    pattern:正则表达式验证输入是否合法
-->

<form action="" id="my-form"></form>
<input type="text" form="my-form" />
<!--
    form: 属性,通过id将form标签之外的表达关联
    当form标签提交的时候,绑定的表单也会一起提交
-->
```

- `type`属性

```html
<input type="email" />
<!--邮箱,提交时验证邮箱的,只能做简单的验证-->
<input type="tel" />
<!--电话!对输入的字符没有要求,主要功能是在移动端调取虚拟键盘-->
<input type="url" />
<!--链接!提交时会验证链接的合法性,必须包含http://-->
<input type="color" />
<!--调取浏览器的色板-->
<input type="number" />
<!--数字! 只能输入数字字符,无法粘贴非数字字符
    max: 设置最大值
    min: 设置最小值
    value: 默认值
-->
<input type="range" />
<!--范围!拖动条
    max:设置最大值
    min:设置最小值
    step:每次滑动的步伐
-->
<input type="time" />
<!--时间:时分秒-->
<input type="datetime" />
<!--日期:年月日 (大部分浏览器都不支持)-->
<input type="datetime-local" />
<!--日期:年月日!可以调取浏览器的日历表-->
<input type="month" />
<!--月份-->
<input type="week" />
<!--星期-->
```

**音视频:**

`audio` 音频标签

`video` 视频标签

```html
<audio src="路径" loop autoplay controls preload></audio>
<video
  src="路径"
  loop
  autoplay
  controls
  preload
  width="200"
  height="200"
></video>
```

1. loop ==>表示是否循环播放
2. autoplay ==>是否在页面加载完毕后立即播放(大部分浏览器已经禁用)
3. controls ==>是否显示播放控件(各个浏览器的播放控件样式不是统一的)
4. preload ==>表示在页面加载是就开始加载音视频,并预准备播放(设置了 autoplay 会自动忽略这个属性)
5. width ==>规定视频播放控件的宽度
6. height ==>规定视频播放控件的高度

> 单一的设置宽高浏览器会自动的等比例缩放,但同时设置宽高会导致视频无法等比例缩放(除非设置的值和视频的实际尺寸一样),会造成空白,因为大多数情况下都是只会设置一个值

`source`

> 每一个浏览器所支持的多媒体格式都是不一样的,因此一般都是准备多个不同格式的音视频,让浏览器自己选择支持的格式

```html
<video loop autoplay preload controls>
  <source src="路径" type="video/MP4" />
  <source src="路径" type="video/flv" />
  <source src="路径" type="video.avi" />
  <!--可以设置多个不同格式的文件,让浏览器自主选择支持的格式
    音频标签也可以使用同样的操作
--></video>
```

1. type ==> 规定音视频的格式

**拖拽:**

> html 中的任何元素都可以进行拖拽,是一种常见的特性,`img`和设置了`href`属性的`a`标签默认可以拖放,其他的标签需要设置`draggable="true"`

```html
<div draggable="true"></div>
```

**progress：**

> 显示任务的进度条

1. max: 设置最大值
2. value： 设置当前值

**meter：**

> 显示衡量条

1. high ：范围最大值
2. low ： 范围最小值
3. max ： 最大值
4. min : 最小值
5. value ： 当前值（必填）
