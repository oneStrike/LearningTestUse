function offset(ele) {
    let H = ele.offsetTop;
    if (ele.parentNode.tagName !== 'BODY') {
        H += ele.parentNode.clientHeight + ele.parentNode.offsetTop;
    }
    return H;
}
let delayImg = (() => {
    "use strict";
    let img = document.getElementsByTagName('img'),
        box = document.getElementsByClassName('box');
    let setData = () => {
        let str = ``;
        for (let i = 0; i < 100; i++) {
            let ran = Math.floor(Math.random() * (4 + 1 - 1) + 1);
            str += `<div class="box"><img src="" data-src="../images/${ran}.png" alt=""></div>`;
        };
        document.body.innerHTML = str;
    };

    let setShow = () => {
        let setImg = (img) => {
            let trueSrc = img.getAttribute('data-src'),
                temp = new Image();
            temp.onload = () => {
                img.src = trueSrc;
                img.style.display = 'block';
                temp = null;
                img.load = true;
            };
            temp.src = trueSrc;
        };

        for (let i = 0, len = img.length; i < len; i++) {
            let item = img[i];
            setImg(item);
        }

    };

    let loadImg = () => {

        for (let i = 0, len = box.length; i < len; i++) {
            let item = box[i],
                A = $(item).offset().top + $(item).outerHeight(),
                B = document.documentElement.scrollTop + document.documentElement.clientHeight;
            if (A <= B) {
                if (img.load) {
                    return;
                }
                setData();
                setShow();
            };
        };
    };
    return {
        init: function () {
            loadImg();
        }
    };
})();
window.onload = window.onscroll = () => {
    delayImg.init();
}