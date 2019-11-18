$(function () {
    let $container = $('#container'),
        $wrapper = $container.children('.wrapper'),
        $focus = $container.children('.focus'),
        $arrowLeft = $container.children('.arrowLeft'),
        $arrowRight = $container.children('.arrowRight'),
        $slideList = null,
        $focusList = null,
        $left = null,
        autoTimer = null,
        interval = 3000,
        speed = 300,
        index = 0,
        lastIndex = 0;
    //获取数据
    let queryData = function () {
        return new Promise(function (resolve, reject) {
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
        $(data).each(function (index, item) {
            let {img} = item;
            slideStr += `<div class="slide"><img src="${img}" alt=""></div>`;
            focusStr += `<li class="${index === 0 ? "active" : ""}"></li>`;
        });
        $wrapper.html(slideStr);
        $focus.html(focusStr);
        $slideList = $wrapper.children('.slide');
        $focusList = $focus.children('li');
        $wrapper.append($slideList.eq(0).clone());
        $slideList = $wrapper.children('.slide');
        $left = parseFloat($slideList.eq(0).css('width'));
        $wrapper.css('width', $slideList.length * $left)
    };
    //设置轮播
    let autoMove = function () {
        index++;
        if (index >= $slideList.length) {
            $wrapper.css('left', 0);
            index = 1;
        }
        $wrapper.animate({
            'left': -index * 800
        }, speed);
        setFocus()
    };
    //设置焦点
    let setFocus = function () {
        let tempIndex = index;
        tempIndex === $focusList.length ? tempIndex = 0 : null;
        $focusList.eq(tempIndex).addClass('active');
        $focusList.eq(lastIndex).removeClass('active');
        lastIndex = tempIndex;
    };

    //鼠标划入划出
    let mouseEvent = function () {
        $container.hover(function () {
            clearInterval(autoTimer);
            $arrowLeft.add($arrowRight).css('display', 'block');
        }, function () {
            autoTimer = setInterval(autoMove, interval);
            $arrowLeft.add($arrowRight).css('display', 'none');
        })
    };
    //焦点点击
    let focusClick = function () {
        $focusList.on('click', function () {
            index = $(this).index();
            $wrapper.animate({
                left: -index * $left
            }, speed);
            setFocus()
        })
    };
    //侧边点击
    let slidClick = function () {
        $arrowRight.on('click', autoMove);
        $arrowLeft.on('click', function () {
            index--;
            if (index < 0) {
                $wrapper.css('left', -($slideList.length - 1) * $left);
                index = $slideList.length - 2;
            }
            $wrapper.animate({
                left: -index * $left
            }, speed);
            setFocus();
        })
    };
    let promise = queryData();
    promise.then(function (data) {
        bindHTML(data)
    }).then(function () {
        autoTimer = setInterval(autoMove, interval);
    }).then(function () {
        mouseEvent();
        focusClick();
        slidClick();
    })
});