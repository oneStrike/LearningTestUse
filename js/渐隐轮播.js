$(function () {
    let bannerRender = (function () {
        let $container = $('#container'),
            $wrapper = $container.children('.wrapper'),
            $focus = $container.children('.focus'),
            $arrowLeft = $container.children('.arrowLeft'),
            $arrowRight = $container.children('.arrowRight'),
            $slideList = null,
            $focusList = null,
            autoTimer = null,
            interval = 2000,
            speed = 300,
            index = 0,
            lastIndex = 0;
            
        //获取数据
        let queryData = function () {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: '../json/banner.json',
                    method: 'get',
                    dataType: 'json',
                    async: true,
                    success: resolve,
                    error: reject
                })
            })
        };
        //绑定数据
        let bindHTML = function (data) {
            let slideStr = ``,
                focusStr = ``;
            data.forEach((item, index) => {
                let {
                    img
                } = item;
                slideStr += `<div class="slide"><img src="${img}" alt=""></div>`;
                focusStr += `<li class="${index === 0 ? "active" : ""}"></li>`;
            });
            $wrapper.html(slideStr);
            $focus.html(focusStr);
            $slideList = $wrapper.children('.slide');
            $focusList = $focus.children('li');
        };
        //轮播运动
        let motion = function () {
            let $cur = $slideList.eq(index),
                $prev = $slideList.eq(lastIndex);
            $cur.css('zIndex', 1);
            $prev.css('zIndex', 0);
            $cur.animate({
                'opacity': 1
            }, speed, () => {
                $prev.css('opacity', 0);
                lastIndex = index;
            })
        };
        //自动轮播
        let autoMove = function () {
            index++;
            if (index === $slideList.length) {
                index = 0;
            }
            motion();
            focusFollow();
        };
        //焦点跟随
        let focusFollow = function () {
            $focusList.eq(index).addClass('active');
            $focusList.eq(lastIndex).removeClass('active');
        };
        //鼠标事件
        let mouseEvent = function () {
            $container.hover(() => {
                clearInterval(autoTimer);
                $arrowRight.add($arrowLeft).css('display', 'block');
            }, () => {
                autoTimer = setInterval(autoMove, interval);
                $arrowRight.add($arrowLeft).css('display', 'none');
            })
        };
        //焦点点击
        let focusCLick = function () {
            $focusList.on('click', function () {
                if (index === $(this).index()) {
                    return;
                };
                index = $(this).index();
                focusFollow();
                motion();
            })
        };
        //侧边点击
        let sideClick = function () {
            $arrowRight.on('click', autoMove);
            $arrowLeft.on('click', () => {
                index--;
                if (index < 0) {
                    index = $slideList.length - 1;
                };
                motion();
                focusFollow();
            });
        };
        return {
            init: function () {
                let promise = queryData();
                promise.then((data) => {
                    bindHTML(data);
                }).then(() => {
                    autoTimer = setInterval(autoMove, interval);
                }).then(() => {
                    mouseEvent();
                    focusCLick();
                    sideClick();
                })
            }
        };
    }());
    bannerRender.init();
});