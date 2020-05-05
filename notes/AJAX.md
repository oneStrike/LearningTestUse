# AJAX ( Asynchronous Javascript And XML )

- Ajax 即“Asynchronous Javascript And XML”（异步 JavaScript 和 XML），是指一种创建交互式网页应用的网页开发技术。

- Ajax = 异步 JavaScript 和 XML 或者是 HTML（标准通用标记语言的子集）。

- Ajax 是一种用于创建快速动态网页的技术。

- Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

- 传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面

## URL

统一资源定位符(Uniform Resource Locator)

<protocol:// hostname[:port] / path / [;parameters][?query]#fragment>
<http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name>

**protocol:**

> 传输的协议

1. http:超文本传输协议
2. https: 基于 sll 加密的 http 传输协议
3. ftp: 文件传输协议

**hostname:**

> 域名地址

**:port:**

> 端口号,如果网站采用的是默认的端口协议,那么输入域名时可以不指定端口号,浏览器会默认添加,服务器上的端口号范围是 0-65535 之间,每一个服务都会占用一个端口号

1. http:默认是 80
2. https:默认是 443
3. ftp:默认是 21

**path:**

> 路径,一般表示服务器上的一个目录,或者是文件地址,如果 URL 被重写,则路径并不是真实的,

**?query:**

> 问号传参

**#fragment:**

> 哈希值

## HTTP 事务

**HTTP 事务**指的就是客户端发送请求到服务器端响应请求的一套完整的步骤

1. DNS 解析域名获取对应的外网 IP
2. 通过 TCP 三次握手和服务器建立连接
3. 客户端发送 HTTP 请求,通过 URL 中携带的端口号找到对应的服务
4. 服务器响应请求,根据 URL 中的路径名称,问号传参或者哈希值返回相应的数据
5. 浏览器从返回的数据中解析出相应的 HTML 代码渲染页面

浏览器在执行 HTML 代码时遇到引用外部文件的链接时,也会完整的执行一次 HTTP 事务,但是如果请求的文件已经被缓存在本地时,服务器会验证本地的文件和服务器的文件是否一致,如果一致则会返回 304 响应,告知客户端不需要重新下载

### DNS 解析

根域名服务器:域名解析系统中最高级别的域名服务器,负责返回顶级域的权威域名服务器地址,并不会解析 DNS 地址

1. 浏览器首先会检查缓存当中有没有响应的域名解析过的 IP 地址,如果存在则直接访问这个 IP
2. 如果浏览器的 DNS 缓存中也不存在时,则会检查操作系统的 host 文件中是否拥有解析过的域名,如果有则直接访问
3. 如果本地的对应的缓存中都不存在时,则会向本地的 DNS 服务器发送查询请求

   - 本地 DNS 服务器首先会检查自身的缓存
   - 缓存中不存在时会向根域名服务器查询
   - 根域名服务器本身不会解析,而是会根据域名的后缀名不同指定相应的服务器去解析

### TCP 连接

> TCP 是一种信息传输控制协议,客户端向服务器请求连接时会进行三次握手,断开时会进行四次握手

1. 客户端向服务器发送连接请求
2. 服务器回应客户端的请求
3. 客户端向服务器发送确认连接

### 发送请求

http: ==> 超文本传输协议
https: ==>拥有 ssl 加密的传输协议

> 报文是用于交换和传输的数据单元,报文中包含着完整的数据信息,HTTP 报文是由纯文本组成的,并不是二进制代码

发送的 HTTP 请求报文中有请求行,请求头,空行,请求数据

###　响应请求

服务器通过 URL 中的路径/问号传参/等信息将客户端所请求的信息返回给客户端

###　渲染页面

客户端通过解析服务器返回数据中的 HTML 代码开始渲染页面

1. 加载 HTML 结构，生成 DOM tree
2. 解析 CSS 代码
3. 生成渲染树 render tree
4. 根据渲染树渲染页面

## 获取&绑定数据

- 真实项目中大部分数据都不是写死的，而是动态绑定的

1. 从服务器端获取数据（基于 AJAX/JSONP 等技术，通过服务器端提供的数据 API 接口地址请求数据）

```javascript
let productDate = null;
//=>创建一个变量用于接收后台传输的数据
let xhr = new XMLHttpRequest();
//=>创建一个XMLHttpRequest的实例
xhr.open("GET", "../json/商城排序.json", false);
//=>向后台请求数据，第一个参数表示请求数据的方式
//=>第二个参数表示请求数据的 地址
//=>第三个参数表示是否开启默认请求，true：开启，false：不开启

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    productDate = xhr.responseText;
  }
};
xhr.send(null);
```

2. 把获取的数据及进行解析(格式化)。

> 获取的绝大部分数据都是`json`格式的，我们需要将其转换解析

```javascript
//=>window提供了两种转换json格式数据的方法
//=>window.JSON.parse  ==>将json格式的数据转换成普通的对象格式
//=>window。stringify  ==>将普通对象转换成json格式

//=>我们需要将后台请求的json格式数据转换成普通的对象类型
productData = window.JSON.parse(productData);
```

3. 把数据绑定在 HTML 页面中（数据绑定)。

> 依托获取的数据，把页面中需要显示的数据和结构都显示出来，
> 然后把创建好的数据和结构放入页面指定的容器中

字符串拼接

1. 普通字符串拼接
2. ES6 的模板字符串拼接。
3. 模板引擎：原理也是字符串拼接

动态创建 DOM
1.createElement
2.appendChild
不推荐使用：操作繁琐，性能的损耗非常大（DOM 回流）

```javascript
//=>基础ES6中的模板字符串绑定数据

//=>我们从后台请求的数据绑定到页面中，转换json格式的数据后是一个数组
//=>遍历数组然后将数组中的每一项拼接在一起
let list = document.getElementById("list");
let str = ``;
for (let i = 0; i < list.length; i++) {
  //=>结构赋值：将数组中每一项上的对象结构赋值，提取出我们需要的信息
  let { title, img, price } = list[i];

  //=>将提出的信息拼接到字符串中
  str += `<li><a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>${price}</span>
        </a></li>`;
}
//=>将拼接好的字符串插入html元素中
list.innerHTML = str;
```

## 四步骤

`let xhr= new XMLHttpRequest()`

- 创建一个 AJAX 的实例

`xhr.open(method,URL,async,user,password)`

- method ==>HTTP 请求的方式/GEt/POST/PUT/DELETE/HEAD/OPTIONS/TRACE/PATCH
- URL ==>HTTP 请求的地址
- async ==>同异步,默认异步,true 为异步,false 为同步
- user ==>认证请求的用于名,默认为 null,可选
- password ==.认证请求的密码,默认为 null,可选

`xhr.onreadystatechange=()=>{}`

- 为请求绑定一个事件监听器

`if(xhr.readyState===4&&xhr.status===200){}`

- 在监听器中通过判断 HTTP 请求的状态执行不同的代码

**method:**

> 表示的请求数据的方式

- GET ==>从服务器中获取数据

- HEAD ==>响应头的信息,捕获获取响应主体,和 GET 方法获取到的响应头信息是一致的

- DELETE ==>从服务器中删除制定的数据,根据执行的结果可能会返回响应的状态码

1. 200(Ok) => 操作已经执行成功,并且在响应主体中描述了相关的状态
2. 204(No Content) ==>操作已经执行,但是没有进一步的相关信息

- PUT ==>向服务器中添加文件,根据操作返回响应的状态码

1. 201(Created) ==>服务器端不存在相关的资源,并且 PUT 成功创建了一份
2. 200(Ok)/204(No Content) ==>已经对服务器原有的资源进行更新,并且成功了

- POST 向服务器中发送数据,通常用于 HTML 中的表单提交

- OPTIONS ==>用于获取或者检测服务器端所支持的请求方法,响应报文中的 Allow 中包含着支持的请求方式

- TRACE ==>用于检测和服务器的链接

###　 GET 划入 POST 区别

**传输方式不同:**

GET :==>GET 是基于 URL 地址问号传参的方式进行传递,URL 只支持 ASCII 编码,所以不支持 Unicode 码,同时对传递的长度也有限制,GET 方法本身对传输的数据并没有限制,HTTP 也没有限制,而是服务器端或者浏览器会对其做出限制
POST : ==>通过请求主体进行传递,并不会限制传递数据的大小,但是服务器通常也会对其做出限制,防止推送的数据过大导致请求迟迟无法完成

> 传参的方式并不是官方明确规定的,POST 也可以使用问号传参的方式,GET 也可以使用请求主体传递数据,只是因为 POST 基本上都是用来传递表单等数据,这样会造成传递的数据过长,超过浏览器对 URL 长度的限制后,浏览器会将超出的内容进行采取,并不会传递

```javascript
xhr.open("GET", "stu/index.html?name=10&age=20", true);

xhr.send("name=10&age=20");
xhr.send(JSON.stringify({ name: 10, age: 20 }));
/**
 * POST中可以使用JSON格式的,也可以使用字符串的格式
 */
```

**安全性:**

GET :==>由于 GET 是通过 URL 传递的,传递的数据会显示在 URL 地址中,同时浏览器也会将数据作为 URL 的一部分进行缓存,也会被保存在浏览器的历史记录中,同时也可以将其作为书签存储起来
POST :==>通过请求主体传递数据,不会显示在 URL 地址中,浏览器也不会进行缓存

```javascript
//=>阻止GET方法的浏览器缓存
xhr.open(`'GET','stu/index.html?name=10&age=20${Math.random()}'`);
//=>在请求的数据中产生一个随机数,让每一次请求的数据都不一样,这样获取数据的时候浏览器就不会从缓存中读取
```

**幂等:**

幂等:执行一次结果的和执行多次的结果是一样的

GET:是幂等的,连续调用多次客户端接受的结果都是一样的
POST:不是幂等的,每一次传递的结果都是不一样的,

### 执行状态

**status:**

HTTP 状态码表示这 HTTP 请求是否成功,响应类分为 5 类

- 100~199 ==>信息响应
- 200~299 ==>成功响应
- 300~399 ==>重定向
- 400~499 ==>客户端错误
- 500~599 ==>服务器错误

| 状态码                      | 注解                                     |
| --------------------------- | ---------------------------------------- |
| 200(Ok)                     | 请求成功                                 |
| 301(Moved Permanently)      | 永久转移(永久重定向)                     |
| 302 (Found)                 | 临时转移                                 |
| 304 (Not Modified)          | 设置缓存                                 |
| 307 (Temporary Redirect)    | 临时重定向                               |
| 400 (Bad Request)           | 客户端请求的参数错误                     |
| 401 (Unauthorized)          | 客户端无权限访问                         |
| 404 (Not Found)             | 客户端请求失败(找不到资源或者地址不存在) |
| 413 (Payload Too Large)     | 服务器拒绝处理当前的请求                 |
| 500 (Internal Server Error) | 服务器出现未知的错误                     |
| 503 (Service Unavailable)   | 服务器超负荷运行                         |

> 200 具体表示请求已经成功,但是返回的数据则是根据请求方法的不同而返回不同的数据,在 GET 方法中,返回的是与请求的资源相匹配的实体,而 POST 方法中返回的是描述或者操作结果的实体
>
> 302 一般用于服务器的负载均衡,当一台服务器的并发数达到最大时,会把后续访问的用户临时转移到其他的服务器上进行处理,例如某些项目会将图片专门放置在"图片服务器中",当用户访问图片时,主服务器会把用户转移至"图片服务器"中处理,虽然规范中重复请求时不允许更改请求方法,但是大部分浏览器会自动将请求方法更改为 GET
>
> 307 一般用于域名的临时重定向,并且重复请求时不允许更改请求方法,应该使用原有的请求方法重复请求
> 400 通常是客户端请求的语法或者参数错误,或者传递的数据超过限制的大小
>
> 401 通常是服务器需要验证当前请求的客户端,并且验证失败就会返回 401
>
> 404 只客户端请求的地址不存在,或者是无法找到当前的资源,并且没有任何可以跳转的网址
>
> 413 由于请求时提交的数据超过服务器限制的大小
>
> 500 指服务器遇到了一个未知的错误信息,导致了无法对请求作出处理
>
> 503 通常是请求的次数超出可服务器处理的能力,这个状态时暂时的,通常过一段时间以后会自动恢复访问

**全部的 HTTP 状态码:**

<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status>

## 同异步执行

尽量在 HTTP 请求中使用异步请求,而不是同步,默认情况下使用的也是异步

由于 JS 是单线程的,而浏览器是多线程的,所以在运行 JS 的时候模拟出了异步执行的操作,浏览器在自上而下执行代码的时候,会直接执行主任务队列的代码,如果碰到异步执行的任务时,例如事件绑定,定时器,AJAX 请求,会将任务放至等待任务队列,并不知道立即执行,而是继续执行主任务队列,这样就不会造成代码执行的阻塞,如果是同步的话,浏览器会将每一条任务执行完毕之后在继续执行其他的任务,如果遇到 AJAX 请求,则会等 AJAX 请求全部执行完毕之后再去执行其他的代码,这样就会造成代码执行的阻塞,如果 AJAX 请求迟迟无法完成,那么其他的代码之能继续等待 AJAX 请求完成,如果 AJAX 请求一致不完成,那么其他的代码永远不可能执行,所以在进行 AJAX 请求时应该使用异步进行

```javascript
let xhr = new XMLHttpRequest();
xhr.open("GEt", "stu/index.html", false);
//设置为false时表示同步请求
xhr.send(null);
//发送AJAX请求
xhr.onreadystatechange = () => {
  //绑定一个时间监听器,绑定之前的readyState的状态为1
  if (xhr.readyState === 3) {
    console.log(3);
    //当readyState的状态等于3的时候执行
  }
  if (xhr.readyState === 4) {
    console.log(4);
    //当readyState的状态等于4的时候执行
  }
};
/**
 * 结果是上面不会输出任何的结果,因为使用的是同步的请求
 * 即使绑定了事件监听器,浏览器也不会执行,因为
 * 绑定的事件监听器是在AJAX请求之后绑定的,
 * 当请求完成之后,AJAX的readyState就已经是4了
 * 所以根本不会触发绑定的事件监听器,diamante也不会执行
 */
```

```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "stu/index.html", false);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 3) {
    console.log(3);
  }
  if (xhr.readyState === 4) {
    console.log(4);
  }
};
xhr.send(null);
/**
 * 只会执行一次4,
 * 因为当AJAX成功请求之后,xhr的readyState的状态时4
 * 所以之后触发一个,因为同步请求下即使xhr的readyState的状态发生改变
 * 事件监听器也不会执行,因为当时正在进行着AJAX请求,同步的情况下
 * 请求不完成,浏览器不会执行任何其他的操作
 */
```

```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "stu/index.html", true);
// 发送的请求时异步的
xhr.onreadystatechange = function() {
  if (xhr.readyState === 2) {
    console.log(2);
  }
  if (xhr.readyState === 4) {
    console.log(4);
  }
};
xhr.send(null);
/**
 * 上面的代码会执行2和4
 * 因为请求是异步的,当AJAX发送请求的时候
 * 并不会阻塞浏览器执行其他的代码,
 * 当请求的时候浏览浏览器首先执行其他的任务
 * 而将AJAX请求放到任务执行完毕之后再请求
 * 而在请求之前就已经绑定好了事件监听器
 * 所有当xhr的readyState状态改变时就会触发
 */
```

## 属性和方法

### 属性

**onreadystatechange:**

当`readyState`的状态发生改变时就会调用响应的处理函数,当请求被`abort()`方法取消时,则不会触发相应的事件

```javascript
let xhr = new XMLHttpRequest(),
  data = null;
//创建一个AJAX对象和一个请求结束后用于结果数据的变量
xhr.open("GET", "stu/index.html?id=10&lx=20", true);
//使用GET方法发送请求,并且使用问号传参的方式传递数据,使用异步请求
xhr.onreadystatechange = () => {
  //当readystate的状态发生变化时执行这个函数
  if (xhr.readyState === 4 && xhr.status === 200) {
    //当readystate的状态===4(请求已经完成)并且status===200(请求的数据成功返回)
    data = window.JSON.parse(xhr.responseText);
    //将返回的数据转换成js中的数组,赋值给先前的创建的变量
  }
  xhr.send(null);
  //请求主体中不传递任何参数
};
```

**readyState 只读:**

当前请求的状态

- 0 unsent ==>对象已经建立,但是尚未初始化
- 1 opened ==>open 方法已经被调用
- 2 headers_received ==>send 方法已经调用完成,并且响应头已经可以被客户端接收了(包含服务器的事件,HTTP 的状态码等等)
- 3 loading ==> 响应的数据正在返回中
- 4 done ==>响应的数据返回完成,

在 IE 浏览器中返回状态的名称并不相同

- 0 ==>READYSTATE_UNINITIALIZED
- 1 ==>READYSTATE_LOADING
- 2 ==>READYSTATE_LOADED
- 3 ==>READYSTATE_INTERACTIVE
- 4 ==>READYSTATE_COMPLETE

```javascript
//可以通过if判断在指定的状态执行相应的事件
let xhr = new XMLHttpRequest(),
  time = null;
xhr.open("GET", "stu/index.html?id=20&lx=20", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 2) {
    //readystate===2表示响应头已经可以被客户端接收
    time = xhr.getResponseHeader("data");
    //获取响应头中的服务器时间,但是获取到的格林尼治时间,比北京时间晚8小时
    time = new Date(time);
    //new Date()可以获取客户端的事件,如果传一个非本地时间的字符串,那么会将其转换为本地的事件
    //但同时变量也会变成Date的实例
  }
};
```

**response 只读:**

响应的主体内容

**responseText 只读:**

字符串格式的响应主体(JSON 或者 XML 格式)

**responseType:**

返回或设置响应主体的数据类型,如果书写空字符串,将会返回默认的"text"类型,如果设置的类型和服务器端返回的类型不兼容,那么将会返回`null`,同步请求中会抛出错误

**responseXML 只读:**

响应的主体是 XML 或者是 HTML 类型,如果请求失败或者是数据无法被解析为 XML 后者 HTML 时会返回 NULL

**responseURL 只读:**

返回序列化的 URL,如果 URL 为空则返回空字符串,如果 URL 有锚点(哈希值)则会自动删除

**status 只读:**

返回请求的响应状态码,请求完成前或者 XMLHttpRequest 初始化出错都会返回 0

- 100~199 ==>信息响应
- 200~299 ==>成功响应
- 300~399 ==>重定向
- 400~499 ==>客户端错误
- 500~599 ==>服务器错误

**statusText 只读:**

返回对 HTTP 状态的描述,例如 HTTP 状态码为 200,则值是"Ok",`readyState`状态为`unsent`或者`opened`时,属性值则是一个空字符串,如果服务器没有明确 HTTP 的状态码,则会默认赋值为"OK"

**timeout:**

可以设置的请求超时时间,为了防止客户端和服务器传递数据的事件太长就可以是用这个属性,同步请求使用超时会报错,并且只能在 open 方法之后 send 方法之前设置

```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "stu/index.html?id=20&lx=40");
xhr.timeout = 2000;
//设置超时时间2000ms
xhr.ontimeout = function() {
  xhr.abort();
  //HTTP请求超时之后执行的函数
};
xhr.send(null);
```

**withCredentials:**

属性值是一个布尔值,可以设置是否跨域,FALSE 为不同意,true 为同意

### 方法

**open():**

初始化一个 AJAX 请求

**send():**

发送 HTTP 请求

**abort():**

强制中断当前的 AJAX 请求,中断后的 readyState 状态会变成"0(unsent)"

```javascript
let xhr = new XMLHttpRequest();
xhr.open("GET", "stu/index.html", true);
xhr.onreadystatechange = () => {};
xhr.send(null);
xhr.abort();
//立即终止当前的请求
```

**getAllResponseHeaders():**

获取所有的响应头信息

**getResponseHeader():**

获取特定的响应头信息

**overrideMimeType():**

重写从服务器端返回的 MIME 类型

**setResponseHeader():**

设置请求头,必须在 open()方法之后 send()方法之前使用

### 事件

**onabort:**

请求被终止时触发

**onerror:**

请求出现错误是触发

**load:**

请求成功时触发

**loadend:**

请求结束时触发,无论成功还是失败都会触发

**loadstart:**

接收到响应数据时开始触发

**ontimeout:**

请求超时时触发

## Axios

> 在项目中封装一个请求模块,以减少对第三方类库的依赖,直接将所有需要请求的操作封装在一个函数中,维护的时候只需要操作这一个就可以了

```javascript
export function request(config) {
  const instance = axios.create({
    baseURL: "", //=>当前实例公共的URL请求地址
    timeout: 5000//=>请求超时时间
  });

  instance.interceptors.request.use(config=>{
  	config.params.a=1;
  	config.data.b=2;
  	config.headers.c=3;
  	return config;
    /**
    * 设置请求拦截,获取到的是请求的配置信息
    * 需要将配置信息return才可以成功发送请求
    * 通常是将一些请求时公共的配置设置在请求拦截中
    * get请求时params可以设置请求时携带的参数
    * post请求时data可以设置请求时携带的参数
    * heads可以设置请求头中携带的参数
    **/
  },err=>{
  	console.log(err);
  	//=>请求失败的操作
  });

  instance.interceptors.use.response(res=>{
  	return rse.data;
  	/**
  	* 设置响应拦截,可以获取的响应的数据,由于axios将获取的数据
  	* 重新封装在一个对象中,响应的主体是在对象的data属性中,因此
  	* 可以直接return出data属性,如果不进行return
  	* then中将无法获取到响应的数据
  	**/
  },err=>{
  	console.log(err);
  	//=>响应失败处理的操作
  });

  return instance(config);
  /**
  * 执行封装的函数就可以直接发发送AJAX请求,axios返回的是一个Promise实例
  * 一次可以直接在调用函数之后直接进行then操作
  **/
}
```

> 可以将一个大功能区的请求操作再一次封装在一个单独的文件中,将封装后的文件直接导入操作中的文件中执行对应的函数即可,以便于以后的维护,只需要修改一个文件中的请求配置就可以了,不需要修改每一个文件中的请求操作,如果操作的数据适合后端进行关联的需要等后端处理完毕后前段才可以进行相应的操作,可以通过判断响应的状态码进行判断后端的操作是否成功,

```javascript
import request from '公共的请求函数文件'
//=>导入公共的请求函数文件
export function getHomeData(){
	return request({
	url:'请求的具体地址',
	method:'请求的方法,get或者post等',
	data:{
		key:'value',
		//=>post请求发送请求时需要传递的数据放入data对象中
	},
	params:{
		key:'value',
		//=>get请求发送请求时需要传递的数据方法放入params中
	}
	})
}

```