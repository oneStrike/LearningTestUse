let loadingRender = (function () {

    let $mainBox = $('#main-box'),
        $loadingBox = $mainBox.find('.loading-box'),
        $progress = $('.progress'),
        $current = $progress.find('.current');

    //预加载图片
    let imgData = ["../img/icon.png", "../img/zf_concatAddress.png", "../img/zf_concatInfo.png", "../img/zf_concatPhone.png", "../img/zf_course.png", "../img/zf_course1.png", "../img/zf_course2.png", "../img/zf_course3.png", "../img/zf_course4.png", "../img/zf_course5.png", "../img/zf_course6.png", "../img/zf_cube1.png", "../img/zf_cube2.png", "../img/zf_cube3.png", "../img/zf_cube4.png", "../img/zf_cube5.png", "../img/zf_cube6.png", "../img/zf_cubeBg.jpg", "../img/zf_cubeTip.png", "../img/zf_emploment.png", "../img/zf_messageArrow1.png", "../img/zf_messageArrow2.png", "../img/zf_messageChat.png", "../img/zf_messageKeyboard.png", "../img/zf_messageLogo.png", "../img/zf_messageStudent.png", "../img/zf_outline.png", "../img/zf_phoneBg.jpg", "../img/zf_phoneDetail.png", "../img/zf_phoneListen.png", "../img/zf_phoneLogo.png", "../img/zf_return.png", "../img/zf_style1.jpg", "../img/zf_style2.jpg", "../img/zf_style3.jpg", "../img/zf_styleTip1.png", "../img/zf_styleTip2.png", "../img/zf_teacher1.png", "../img/zf_teacher2.png", "../img/zf_teacher3.jpg", "../img/zf_teacher4.png", "../img/zf_teacher5.png", "../img/zf_teacher6.png", "../img/zf_teacherTip.png"],
        len = imgData.length,
        n = 0;

    let run = function (callback) {
        imgData.forEach(item => {
            let tempImg = new Image();
            tempImg.onload = () => {
                tempImg = null;
                $current.css('width', ++n / len * 100 + '%');
                if (n === len) {
                    clearTimeout(delayTimer);
                    callback && callback();
                }
            }
            tempImg.src = item;
        })
    };

    let delayTimer = null;

    let maxDelay = function (callback) {
        delayTimer = setTimeout(() => {
            if (n / len >= 0.8) {
                $current.css('width', '100%');
                callback && callback();
                return;
            } else {
                alert('网络不佳');
            }
        }, 10000);

    };
    let done = function () {
        let timer = setTimeout(() => {
            $loadingBox.remove();
        }, 1000)
    };

    return {
        init: function () {
            run(done);
            maxDelay(done);
        }
    }
})();
loadingRender.init();