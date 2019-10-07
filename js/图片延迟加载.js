$(function () {
    let $body = $('body'),
        $imgList = null;
    (function () {
        let str = ``;
        for (let i = 0; i < 100; i++) {
            let ran = Math.floor(Math.random() * (4 + 1 - 1) + 1);
            str += `<div class="box"><img src="" data-src="../images/${ran}.png" alt=""></div>`;
        }
        $body.html(str);
        $imgList = $('img');
    }());

    let showImg = function (img) {
        let $img = $(img),
            $trueSrc = $img.attr('data-src'),
            tempImg = new Image();
        tempImg.onload = function () {
            $img.attr('src', $trueSrc).stop().fadeIn(300);
            $tempImg = null;
            img.isLoad = true;
        };
        tempImg.src = $trueSrc;
    };

    let startShow = () => {
        $imgList.each((index, item) => {
            let A = $(item).parent().offset().top + $(item).parent().outerHeight(),
                B = document.documentElement.scrollTop + document.documentElement.clientHeight;
            if ((A - 100) <= B) {
                if (item.isLoad) {
                    return;
                }
                showImg(item);
            }
        })
    };
    $(window).on('load scroll', startShow);
});