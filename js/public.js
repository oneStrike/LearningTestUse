// //格式化时间字符串
// String.prototype.myFormatTime = function myFormatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
//     let ary = this.match(/\d+/g).map(item => (item < 10 ? '0' + item : item));
//     return template.replace(/\{(\d)\}/g, (...[, index]) => ary[index] || '00');
// };

// //获取一个字符串中最多出现字符的次数和对应的字符
// let myPublic = (function () {
//     return {
//         sortStr: function (str) {
//             var obj = {};
//             for (var i = 0; i < str.length; i++) {
//                 var element = str[i];
//                 obj[element] ? obj[element]++ : obj[element] = 1;
//             };
//             var result = {
//                 frequency: 0,
//                 str: ''
//             };
//             for (var i in obj) {
//                 if (obj[i] > result['frequency']) {
//                     result['frequency'] = obj[i];
//                     result['str'] = i;
//                 }
//             }
//             return result;
//         },

//         /**
//          * 获取/设置/批量设置页面元素的属性
//          * 
//          * 批量设置实参为对象
//          * 
//          * @param  {*} 页面元素
//          * @param  {*} 获取/设置：样式属性名。批量设置： 包含样式属性名和样式的对象
//          * @param  {*} 设置：设置的样式
//          */
//         css: function (...arr) {
//             let index = arr.length;
//             if ('getComputedStyle' in window) {
//                 if (index === 2 && typeof (arr[1]) === 'string') {
//                     let style = window.getComputedStyle(arr[0], null)[arr[1]];
//                     isNaN(parseFloat(style)) ? null : style = parseFloat(style);
//                     return style;
//                 } else if (index === 2 && typeof (arr[1]) === 'object') {
//                     let ele = arr[0],
//                         sty = arr[1];
//                     for (var key in sty) {
//                         ele.style[key] = sty[key]
//                     }
//                 } else {
//                     arr[0].style[arr[1]] = arr[2];
//                 }
//             }
//             return;
//         },

//         /**
//          * 将字符串的首字母大写
//          * @param {String} str  需要转换的字符串
//          */
//         firstCapital: function (str) {
//             let reg = /\b[a-z]?/g;
//             str = str.replace(reg, element => element.toUpperCase());
//             return str;
//         },


//         /**
//          * 获取元素距离body的左/上偏移量
//          * @param {*} ele 
//          */
//         distanceFromBody: function (ele) {
//             let top = ele.offsetTop,
//                 left = ele.offsetLeft,
//                 p = ele.offsetParent;
//             while (p.tagName !== 'BODY') {
//                 top += p.offsetTop + p.clientTop;
//                 left += p.offsetLeft + p.clientLeft;
//                 p = p.offsetParent;
//             }

//             return {
//                 top,
//                 left
//             }
//         },

//         /**
//          * 检测一个元素是否拥有这个类名
//          * @param {*} ele  需要检测的元素
//          * @param {*} str   需要检测的类名
//          */
//         hasClass: function (ele, str) {
//             return ele.className.trim().split(/ +/).indexOf(str) >= 0;
//         },

//         /**
//          * 添加类名
//          * @param {*} ele 
//          * @param {*} str 
//          */
//         addClass: function (ele, str) {
//             ele.className.trim().split(/ +/).indexOf(str) >= 0 ? null : ele.className += ` ${str}`;
//         },

//         /**
//          * 删除类名
//          * @param {*} ele 
//          * @param {*} str 
//          */
//         removeClass: function (ele, str) {
//             let boo = ele.className.trim().split(/ +/).indexOf(str) >= 0;
//             if (!boo) {
//                 return;
//             };
//             ele.className = ele.className.trim().split(/ +/).filter(item => item !== str).join(' ');
//         },
//     };
// }());
(function anonymous(window) {

    function jquery(a) {
        return new init(a)
    }

    function init(a) {};

    jquery.ajax = function (a) {
        console.log(a);
    }

    jquery.prototype = {
        constructor: jquery,
    }

    init.prototype = jquery.prototype;
    window.$ = jquery;
})(window);
$.ajax(2)