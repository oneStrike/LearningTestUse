//格式化时间字符串
String.prototype.myFormatTime = function myFormatTime(template = '{0}年{1}月{2}日 {3}时{4}分{5}秒') {
    let ary = this.match(/\d+/g).map(item => (item < 10 ? '0' + item : item));
    return template.replace(/\{(\d)\}/g, (...[, index]) => ary[index] || '00');
};

//获取一个字符串中最多出现字符的次数和对应的字符
let myPublic = (function () {
    return {
        sortStr: function (str) {
            var obj = {};
            for (var i = 0; i < str.length; i++) {
                var element = str[i];
                obj[element] ? obj[element]++ : obj[element] = 1;
            };
            var result = {
                frequency: 0,
                str: ''
            };
            for (var i in obj) {
                if (obj[i] > result['frequency']) {
                    result['frequency'] = obj[i];
                    result['str'] = i;
                }
            }
            return result;
        },

        /**
         * 获取一个对象的元素样式
         * @param {Object} ele  需要获取样式的元素
         * @param {style} sty   需要获取的样式
         */
        getStyle: function (ele, sty) {
            if ('getComputedStyle' in window) {
                let style = window.getComputedStyle(ele, null)[sty];
                isNaN(parseFloat(style)) ? style : style = parseFloat(style)
                return style;
            };
        },

        /**
         * 将字符串的首字母大写
         * @param {String} str  需要转换的字符串
         */
        firstCapital: function (str) {
            let reg = /\b[a-z]?/g;
            str = str.replace(reg, element => element.toUpperCase());
            return str;
        },
    };
}());