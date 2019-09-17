// console.log(a);
// var a = 12;

// function fn() {
//     console.log(a);
//     var a = 13;
// }
// fn();
// console.log(a);
/**
 * A:undefined 12 13
 * B:undefined undefined 12
 * C:undefined undefined 13
 * D:程序报错
 */


// console.log(a);
// var a = 12;

// function fn() {
//     console.log(a);
//     a = 13;
// }
// fn();
// console.log(a);
/**
 * A：undefined 12 13
 * B: undefined undefined 12
 * C: undefined undefined 13
 * D: 程序报错
 */

// console.log(a);
// a = 12;

// function fn() {
//     console.log(a);
//     a = 13;
// }
// fn();
// console.log(a)

/**
 * A: undefined 12 13
 * B: undefined undefined 12
 * C: undefined undefined 13
 * D: 程序报错
 */

// var foo = 1;
// function bar() {
//     if (!foo) {
//         var foo = 10;
//     }
//     console.log(foo);
// }
// bar();

/**
 * A: 1
 * B: 10
 * C: undefined
 * D: 程序报错
 */

// var n = 10;
// function a() {
//     var n = 10;
//     function b() {
//         n++;
//         console.log(n);
//     }
//     b();
//     return b;
// }
// var c = a();
// c();
// console.log(n);

/**
 * A: 1  1  1
 * B: 11 11 0
 * C: 44 45 2
 * D: 11 12 12
 */

// var a = 10, b = 11, c = 12;
// function test(a) {
//     a = 1;
//     var b = 2;
//     c = 3;
// }
// test(10)
// console.log(a)
// console.log(b);
// console.log(c);

/**
 * A: 1  11 3
 * B: 10 11 12  
 * C: 1  2  3
 * D: 10 11 3
 * 
 */

// if (!'a' in window) {
//     var a = 1;
// }
// console.log(a);

/**
 * A: 1
 * B: undefined
 * C: 报错
 * D: 以上都不对
 */


// var a = 4;
// function b(x, y, a) {
//     console.log(a);
//     arguments[2] = 10;
//     console.log(a);
// }
// a = b(1, 2, 3);
// console.log(a);

/**
 * A:3  3  4
 * B: 3 10 4
 * C: 3 10 10
 * D: 3 10 undefined
 * 
 */


// var foo = 'hello';
// (function (foo) {
//     console.log(foo);
//     var foo = foo || 'world';
//     console.log(foo);
// }(foo));
// console.log(foo);

/**
 * A: hello hello hello
 * B: undefined world hello
 * C: hello world world
 * D: 以上都不正确
 * 
 */


// var a = 9;

// function fn() {
//     a = 0;
//     return function (b) {
//         return b + a++;
//     }
// }
// var f = fn();
// console.log(f(5));
// console.log(fn()(5));
// console.log(f(5));
// console.log(a);

/**
 * A: 6 6 7 2
 * B: 5 6 7 3
 * C: 5 5 6 3
 * D: 以上都不对
 * 
 */

// var arr = [1, 2, 3, 4];

// function fn(arr) {
//     arr[0] = 0;
//     arr = [0];
//     arr[0] = 100;
//     return arr;
// }
// var result = fn(arr);
// console.log(arr);
// console.log(result)

// function fn(i) {
//     return function (n) {
//         console.log(i++);
//     }
// }
// var f = fn(10);
// f(20);
// fn(20)(40);
// fn(30)(50);
// f(30);

// var i = 10;
// function fn() {
//     return function (n) {
//         console.log(n + (++i));
//     }
// };
// var f = fn();
// f(20);
// fn()(20);
// fn()(30);
// f(30);


// var num = 10;
// var obj = { num: 20 };
// obj.fn = (function (num) {
//     this.num = num * 3;
//     num++;
//     return function (n) {
//         this.num += n;
//         num++;
//         console.log(num);
//     }
// }(obj.num));
// var fn = obj.fn;
// fn(5);
// obj.fn(10);
// console.log(num, obj, num);


// function Fn() {
//     this.x = 100;
//     this.y = 200;
//     this.getX = function () {
//         console.log(this.x);
//     }
// }
// Fn.prototype.getX = function () {
//     console.log(this.x);
// };
// Fn.prototype.getY = function () {
//     console.log(this.y);
// };
// var f1 = new Fn();
// var f2 = new f2();
// console.log(f1.getX === f2.getX);
// console.log(f1.getY === f2.getY);
// console.log(f1.__proto__.getY === Fn.prototype.getY);
// console.log(f1.__proto__.getX === f2.getX);
// console.log(f1.getX === Fn.prototype.getX);
// console.log(f1.constructor);
// console.log(Fn.prototype.__proto__.constructor);
// f1.getX();
// f1.__proto__.getX();
// f2.getY();
// Fn.prototype.getY();

/**
 * 一下代码的功能是要实现5个input按钮循环绑定click点击事件
 * 绑定完成后点击1,2,3,4,5五个按钮分别会alert输出0,1,2,3,4五个字符（腾讯）
 * 
 * 请问如下代码是否能实现
 * 如果不能实现那么现在的效果是什么样的
 * 应该做怎样的修改才能达到我们想要的效果。并说明原理？
 */

{
    /* <div id="btnBox">
        <input type="button" value="button_1" />
        <input type="button" value="button_2" />
        <input type="button" value="button_3" />
        <input type="button" value="button_4" />
        <input type="button" value="button_5" />
    </div>

    <script type="text/javascript">
        var btnBox=document.getElementById('btnBox'),
            inputs=btnBox.getElementsByTagName('input');
        var l=inputs.length;
        for(var i=0;i<1;i++){
            inputs[i].onclick = function () {
                alert(i);
            }
        }
    </script> */
}

// var fullName = 'language';
// var obj = {
//     fullName='javascript';
//     prop: {
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName());
// var test = obj.prop.getFullName;
// console.log(test());


// var name = 'window';
// var Tom = {
//     name: 'Tom',
//     show: function () {
//         console.log(this.name);
//     },
//     wait: function () {
//         var fun = this.show;
//         fun();
//     }
// };
// Tom.wait();


// function Foo() {
//     getName = function () {
//         console.log(1);
//     };
//     return this;
// }
// Foo.getName = function () {
//     console.log(2);
// };
// Foo.prototype.getName = function () {
//     console.log(3);
// };
// var getName = function () {
//     console.log(4);
// };

// function getName() {
//     console.log(5);
// }
// Foo.getName();
// getName();
// Foo.getName();
// getName();
// new Foo.getName();
// new Foo().getName();
// new new Foo().getName();

// function fun() {
//     this.a = 0;
//     this.b = function () {
//         alert(this.a);
//     }
// }
// fun.prototype = {
//     b: function () {
//         this.a = 20;
//         alert(this.a);
//     },
//     c: function () {
//         this.a = 30;
//         alert(this.a);
//     }
// }
// var my_fun = new fun();
// my_fun.b();
// my_fun.c();

//如何实现数组去重

//document.parentNode 和 document.parentnode 的区别

//怎么回避多人开发函数重名的问题

//JavaScript如何实现面向对象中的继承

//你理解的闭包作用是什么，缺点是？

/**
 * 有这样一个村庄，村里的每一个丈夫都背着妻子偷情，
 * 村里的每个妻子都知道除了自己的丈夫以外的男人偷情，
 * 村里有一条规定，如果妻子知道自己的丈夫偷情必须当天处决，
 * 有一天村里的女头领说村里有一个丈夫偷情，接下来会发生什么？
 */


/**
 * 一位数组中都是数字，想实现数组从大到小排序：____;
 * 删除数组中的最后一项内容，请至少写出三中办法_____;
 * 找出数组的第n到第m项的内容____;
 * 获取当前浏览器可是区域的宽度（兼容所有的浏览器）_____
 * 把元素添加到指定的容器当中，至少写出两种____
 * 获取上一个哥哥元素节点（兼容浏览器）____
 * 获取[n-m]之间的随机整数____
 * 把字符串中的某一个字符进行转换____
 * <div id="tab" class="tabCon"></div>用js获取一个元素的对象，
 * 至少写出三种方式（不需要兼容浏览器）____
 * []==false:__   ![]==false:__
 */

// console.log(num);
// if (!'num' in window) {
//     var num = 100;
// }
// console.log(num);


// var name = '中国';
// var age = 5000;
// name = (function (name, age) {
//     arguments[0] = '绫';
//     age = age || this.age;
//     console.log(name, age);
// }(name));
// console.log(name, age);

// var arr = [100, 200];
// ~ function (arr) {
//     arr.length--;
//     arr = [];
//     arr[arr.length] = 300;
//     alert(arr);
// }(arr);
// alert(arr);


// function fn(i) {
//     return function (n) {
//         console.log(n * (++i));
//     }
// };
// var f = fn(2);
// f(3);
// f(4);
// fn(5)(6);
// fn(7)(8);


// var num = 1;
// var obj = {
//     num: 2
// };
// obj.fn = (function (num) {
//     this.num = num * 2;
//     num++;
//     console.log(num);
// }(obj.num));
// var fn = obj.fn;
// fn(10);
// obj.fn(20);
// console.log(num)
// console.log(obj.num);



// function Fn(num) {
//     this.x = this.y = num;
// }
// Fn.prototype = {
//     x: 20,
//     sum: function () {
//         console.log(this.x + this.y);
//     }
// };
// var f = new Fn(10);
// console.log(f.sum === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);


/**
 *有如下的HTML结构，需求是想要点击实现每一个按钮，
 *让body的背景显示不同的颜色，
 *下面的代码是否可以实现，原理是什么
 *如果不能实现实现又是什么原理
 *请写出你的思路（至少两种不同的解决方案）
 */

{
    /* <input type="button" />
    <input type="button" />
    <input type="button" />
    <script type="text/javascript">
        var inpList=document.getElementsByTagName('input');
        var arr=['red','green','orange'];
        for(var i=0;i<inpList.length;i++){
            var cur=inpList[i];
        cur.onmouseover=function(){
            document.body.styel.backgroundColor=arr[i];
        }
    }
    </script> */
}

// console.log(num);
// if (!('num' in window)) {
//     var num = 100;
// }
// console.log(num);


// var name = '中国';
// var age = 5000;
// age = (function (name, age) {
//     name = '绫';
//     age = age || this.age;
//     this.name = arguments[0];
//     console.log(name, age);
// }(name, age));
// console.log(name, age);


// var obj = {
//     name: '绫',
//     age: 7
// };
// ~ function (obj) {
//     obj.name = '中国';
//     obj = {};
//     obj.age = 5000;
//     console.log(obj);
// }(obj);
// console.log(obj);


// var i = 2;

// function fn() {
//     i *= 2;
//     return function (n) {
//         console.log(n * (++i));
//     }
// }
// var f = fn();
// fn()(3);
// f(4);
// fn()(4);

// var num = 1;
// var obj = {
//     name: 2
// };
// obj.fu = (function (num) {
//     this.num += num;
//     num++;
//     console.log(num);
// }(obj.num));
// var fn = obj.fn;
// fn(10);
// obj.fn(20);
// console.log(num.obj.num);


// function Fn(num) {
//     this.x = this.y = num;
// }
// Fn.prototype = {
//     x: 20,
//     sum: function () {
//         console.log(this.x + this.y);
//     }
// };
// var f = new Fn(10);
// console.log(f.sum === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);


// console.log(num);
// if ('num' in window) {
//     var num = 100;
// }
// console.log(num)


// var name = '中国';
// var age = 5000;
// age = (function (name, age) {
//     name = '绫';
//     arguments[1] = 7;
//     console.log(name, age);
// }(name, age));
// console.log(name, age);


// var arr = [100, 200];
// ~ function (arr) {
//     arr[arr.length] = 300;
//     arr = arr.slice(0);
//     arr[arr.length] = 500;
//     alert(arr);
// }(arr);
// alert(arr);


// function fn() {
//     var i = 5;
//     return function (n) {
//         console.log(n * (--i));
//     }
// };
// var f = fn();
// f(10);
// fn()(10);
// fn()(20);
// f(20);


// var num = 10;
// var obj = {
//     num: 20
// };
// obj.fn = (function (num) {
//     this.num += n;
//     num--;
//     console.log(num);
// }(obj.num));
// var fn = obj.fn;
// fn(10);
// obj.fn(20);
// console.log(num, obj.num);


// Object.prototype.x = 100;

// function Fn() {
//     this.x = 10;
//     this.y = 20;
// }
// Fn.prototype.y = 200;
// Fn.prototype.sum = function () {
//     console.log(this.x + this.y);
// };
// var f = new Fn;
// console.log(f.sun === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);