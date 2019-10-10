(function () {
    window.utils = (function () {
        let getCss = function (ele, sty) {
            let val = null,
                reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/g;
            if ('getComputedStyle' in window) {
                val = window.getComputedStyle(ele)[sty];
            } else {
                val = ele['style'][sty];
            }
            reg.test(val) ? val = window.parseFloat(val) : null;
            return val;
        };
        let setCss = function (ele, sty, val) {
            let reg = /^(zIndex|opacity)$/g;
            if (!reg.test(sty) && !isNaN(val)) {
                val += 'px';
            }
            ele['style'][sty] = val;
        };
        let setGroupCss = function (ele, obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    setCss(ele, key, obj[key])
                }
            }
        };
        let css = function (...arr) {
            let fn = getCss,
                len = arr.length;
            if (len === 2 && typeof arr[1] === 'object') {
                fn = setGroupCss;
            } else if (len === 3) {
                fn = setCss;
            }
            return fn(...arr)
        }
        return {
            css
        }
    }());
    let formula = {
        linear: function (t, d, c, b) {
            return t / d * c + b;
        }
    };
    window.animate = function (ele, target = {}, duration = 1000, callback = new Function()) {
        if (typeof (duration) === 'function') {
            callback = duration;
            duration = 1000;
        }
        let time = 0,
            change = {},
            begin = {};
        for (let key in target) {
            if (target.hasOwnProperty(key)) {
                begin[key] = utils.css(ele, key);
                change[key] = target[key] - begin[key];
            }
        }
        clearInterval(ele.timer)

        let cur = {};
        ele.timer = setInterval(function () {
            time += 17;
            if (time >= duration) {
                clearInterval(ele.timer);
                utils.css(ele, target);
                callback();
                return;
            }
            for (let key in target) {
                if (target.hasOwnProperty(key)) {
                    cur[key] = formula.linear(time, duration, change[key], begin[key]);
                }
            }
            utils.css(ele, cur);
        }, 17)
    }
}());