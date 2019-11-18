let utils = (function () {

    let queryURLParams = function (URL = window.location.href) {
        let obj = {},
            reg = /([^?=&#]+)=([^?=&#]+)/g;
        URL.replace(reg, (...arrs) => {
            let [, key, val] = arrs;
            obj[key] = val;
        })
        return obj;
    };

    return {
        queryURLParams,
    }
})();