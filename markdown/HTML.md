# HTML (Hypertext Marked Language)

## 简介

HTML 称为超文本标记语言，是一种标识性的语言。它包括一系列标签．通过这些标签可以将网络上的文档格式统一，使分散的 Internet 资源连接为一个逻辑整体。HTML 文本是由 HTML 命令组成的描述性文本，HTML 命令可以说明文字，图形、动画、声音、表格、链接等

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

### 表单

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
> multiple 多选
>
> radio 相同的分组需要设置相同的 name 属性,否则无法区分
>
> label for 需要与 radio 的 id 属性捆绑

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
