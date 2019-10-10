let bannerRender = (function () {

    let container = document.querySelector('#container'),
        wrapper = container.querySelector('.wrapper'),
        focus = container.querySelector('.focus'),
        arrowLeft = container.querySelector('.arrowLeft'),
        arrowRight = container.querySelector('.arrowRight'),
        focusList = null,
        slideList = null;

    let queryData = function () {
        return new Promise(function (resolve, reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('get', '../json/banner.json', true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    let data = window.JSON.parse(xhr.responseText);
                    resolve(data);
                }
            };
            xhr.send(null);
        })
    };

    let bindHTML = function (data) {
        let focusStr = ``,
            wrapperStr = ``;
        data.forEach(function (item, index) {
            let {
                img,
                desc
            } = item;
            wrapperStr += `<div class="slide"><img src="${img}" alt=""></div>`;
            focusStr += `<li class="${index === 0 ? "active" : ""}"></li>`;
        });
        wrapper.innerHTML = wrapperStr;
        focus.innerHTML = focusStr;
        slideList = wrapper.querySelectorAll('.slide');
        focusList = focus.querySelectorAll('li');
        wrapper.appendChild(slideList[0].cloneNode(true));
        slideList = wrapper.querySelectorAll('.slide');
        wrapper.style.width = slideList.length * 800 + 'px';
    };
    return {
        init: function () {
            let promise = queryData();
            promise.then(bindHTML)
        }
    }
}());
bannerRender.init();