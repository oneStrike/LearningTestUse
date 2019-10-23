let loadingRender = (function () {

    let $loadBox = $('.loading-box'),
        $current = $loadBox.find('.current');

    let imgData = ["../img/icon.png", "../img/zf_concatAddress.png", "../img/zf_concatInfo.png", "../img/zf_concatPhone.png", "../img/zf_course.png", "../img/zf_course1.png", "../img/zf_course2.png", "../img/zf_course3.png", "../img/zf_course4.png", "../img/zf_course5.png", "../img/zf_course6.png", "../img/zf_cube1.png", "../img/zf_cube2.png", "../img/zf_cube3.png", "../img/zf_cube4.png", "../img/zf_cube5.png", "../img/zf_cube6.png", "../img/zf_cubeBg.jpg", "../img/zf_cubeTip.png", "../img/zf_emploment.png", "../img/zf_messageArrow1.png", "../img/zf_messageArrow2.png", "../img/zf_messageChat.png", "../img/zf_messageKeyboard.png", "../img/zf_messageLogo.png", "../img/zf_messageStudent.png", "../img/zf_outline.png", "../img/zf_phoneBg.jpg", "../img/zf_phoneDetail.png", "../img/zf_phoneListen.png", "../img/zf_phoneLogo.png", "../img/zf_return.png", "../img/zf_style1.jpg", "../img/zf_style2.jpg", "../img/zf_style3.jpg", "../img/zf_styleTip1.png", "../img/zf_styleTip2.png", "../img/zf_teacher1.png", "../img/zf_teacher2.png", "../img/zf_teacher3.jpg", "../img/zf_teacher4.png", "../img/zf_teacher5.png", "../img/zf_teacher6.png", "../img/zf_teacherTip.png"];

    let n = 0,
        len = imgData.length;
    let run = function (callback) {
        imgData.forEach(item => {
            let tempImg = new Image();
            tempImg.onload = function () {
                tempImg = null;
                n++;
                $current.css('width', ++n / len * 100 + '%');
                if (n === len) {
                    clearInterval(delayTime);
                    callback && callback();
                }
            };
            tempImg.src = item;
        })
    };

    let delayTime = null;
    let maxDelay = function (callback) {
        delayTime = setTimeout(() => {
            if ((n / len) >= 0.8) {
                $current.css('width', '100%');
                callback && callback();
            } else {
                alert('网络不佳');
            }
        }, 10000);
    };

    let done = function () {
        let timer = setTimeout(() => {
            $loadBox.remove();
            clearTimeout(timer);
        }, 1000)
    };

    return {
        init: function () {
            run(done);
            maxDelay(done);
        }
    }
})();

let phoneRender = function () {

    let $phone = $('.phone'),
        $time = $phone.find('time'),
        $answer = $phone.find('.answer'),
        $agree = $answer.find('.agree'),
        ring = $phone.find('audio')[0],
        $calling = $phone.find('.calling'),
        callContent = $phone.find('audio')[1],
        $hang = $phone.find('.hang');


    let autoTime = null,
        second = 0,
        minute = 0;
    let confirmAnswer = function () {
        ring.pause();
        callContent.play();
        $answer.css('display', 'none');
        $calling.css('transform', 'translateY(0rem)');
        $time.css('display', 'block')
        autoTime = setInterval(function () {
            second++;
            if (second >= callContent.duration) {
                clearTimeout(autoTime);
                closePhone();
            }
            second === 60 ? (second = 0, minute++) : null;
            minute < 10 ? minute = '0' + minute : minute;
            minute = minute.substr(minute.length - 2);
            second = second < 10 ? '0' + second : second;
            $time.html(`${minute} : ${second}`);

        }, 1000);
    };

    let closePhone = function () {
        callContent.pause();
        $calling.css('transform', 'translateY(6.89rem)');
        $phone.remove();
    };


    return {
        init: function () {
            ring.play();
            $agree.tap(confirmAnswer);
            $hang.tap(closePhone)
        }
    }

}();
let massageRender = (function () {

    return {
        init: function () {}
    }
})();
let url = window.location.href;
let well = url.indexOf('#');
let hash = well === -1 ? null : url.substr(well + 1);
switch (hash) {
    case "loading":
        loadingRender.init();
        break;
    case "phone":
        phoneRender.init();
        break;
    case "massageRender":
        massageRender.init();
        break;
}