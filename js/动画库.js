(function () {
    let utils = (function () {
        let getCss = function (ele, sty) {
            let val = null,
                reg = /^-?\d+(\.\d+)?(px|rem|em|pt)?$/g;
            if ('getComputedStyle' in window) {
                val = window.getComputedStyle(ele)[sty];
            } else {
                val = ele['style'][sty];
            }
            reg.test(val) ? val = parseFloat(val) : null;
            return val;
        };
        let setCss = function (ele, sty, val) {
                let reg = /^(opacity|zIndex)$/g;
                if (!reg.test(sty) && !isNaN(val)) {
                    val += 'px';
                };
                ele['style'][sty] = val;
        }
        let setGroupCss = function (ele, obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    setCss((ele, key, obj[key]))
                }
            }
        }
        let css = function (...arr) {
            let len = arr.length,
                fn = getCss;
            if (len === 3) {
                fn = setCss;
            } else if (len == 2 && typeof (arr[1]) === 'object') {
                fn = setGroupCss;
            }
            return fn(...arr);
        }
        return {
            css
        }
    }());

    let formula = {
        linear: function (t, b, c, d) {
            return t / d * c + b;
        }
    };
    window.animate = function (ele, target = {}, duration = 1000) {
        let time = 0,
            change = {},
            begin = {};
        for (let key in target) {
            begin = utils.css(ele, key);
            change = target[key] - begin[key];
        };

        clearInterval(ele.timer);
        ele.timer = setInterval(() => {
            time += 17;

            if (time >= duration) {
                utils.css(ele, target);
                clearInterval(ele.timer);
            };
            let cur = {};
            for (let key in target) {
                cur[key] = formula.linear(time, begin[key], change[key], duration);
            };
            utils.css(ele, cur);
        }, 17)
    }
    let div = document.getElementsByClassName('box')[0];
    animate(div, {
        width: '200px',
        height: '200px'
    })
}());