let bannerRender = (function () {
    let container = document.querySelector('#container'),
        wrapper = container.querySelector('.wrapper'),
        focus = container.querySelector('.focus'),
        arrowLeft = container.querySelector('.arrowLeft'),
        arrowRight = container.querySelector('.arrowRight'),
        slideList = null,
        focusList = null,
        autoTimer = null,
        interval = 3000,
        spedIndex = 0;
    //获取数据
    let queryData = function () {
        return new Promise((resolve, reject) => {
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
    //绑定数据
    let bindHTML = function (data) {
        let slideStr = ``,
            focusStr = ``;
        data.forEach((item, index) => {
            let {img} = item;
            slideStr += `<div class="slide"><img src="${img}" alt=""></div>`;
            focusStr += `<li class=${index === 0 ? "active" : ""} >< /li>`;
        });
        wrapper.innerHTML = slideStr;
        focus.innerHTML = focusStr;
        slideList = wrapper.querySelectorAll('.slide');
        focusList = focus.querySelectorAll('li');
        wrapper.appendChild(slideList[0].cloneNode(true));
        slideList = wrapper.querySelectorAll('.slide');
        utils.css(wrapper, 'width', slideList.length * 800)
    };
    //轮播
    let autoMove = function () {
        spedIndex++;
        if (spedIndex === slideList.length) {
            spedIndex = 1;
            utils.css(wrapper, 'left', 0)
        }
        animate(wrapper, {
            left: -spedIndex * 800
        }, 300);
        setFocus();

    };
    //鼠标划入划出
    let mouseEve = function () {
        container.onmousemove = function () {
            clearInterval(autoTimer);
            arrowLeft.style.display = arrowRight.style.display = 'block';
        };
        container.onmouseleave = function () {
            autoTimer = setInterval(autoMove, interval);
            arrowLeft.style.display = arrowRight.style.display = 'none';
        }
    };
    //焦点
    let setFocus = function () {
        Array.from(focusList).forEach((item, index) => {
            let tempIndex = spedIndex;
            tempIndex === 4 ? tempIndex = 0 : null;
            item.className = index === tempIndex ? "active" : "";
        });
    };
    //焦点点击
    let focusClick = function () {
        Array.from(focusList).forEach((item, index) => {
            item.onclick = function () {
                spedIndex = index;
                animate(wrapper, {
                    left: -spedIndex * 800
                }, 200);
                setFocus();
            }
        });
    };
    //侧边点击
    let sideClick = function () {
        arrowRight.onclick = autoMove;
        arrowLeft.onclick = function () {
            spedIndex--;
            if (spedIndex < 0) {
                spedIndex = slideList.length - 2;
                utils.css(wrapper, 'left', -((slideList.length - 1) * 800))
            }
            animate(wrapper, {
                left: -spedIndex * 800
            }, 200);
            setFocus();
        };
    };
    return {
        init: () => {
            let promise = queryData();
            promise.then(bindHTML).then(() => {
                autoTimer = setInterval(autoMove, interval);
            }).then(() => {
                mouseEve();
                setFocus();
                focusClick();
                sideClick();
            });
        }
    }
}());
bannerRender.init();




























