let loadingRender = (function () {
    let $loading = $('.loading'),
        $current = $('.progress').find('span');
    let data = ["./img/icon.png", "./img/zf_concatAddress.png", "./img/zf_concatInfo.png", "./img/zf_concatPhone.png", "./img/zf_course.png", "./img/zf_course1.png", "./img/zf_course2.png", "./img/zf_course3.png", "./img/zf_course4.png", "./img/zf_course5.png", "./img/zf_course6.png", "./img/zf_cube1.png", "./img/zf_cube2.png", "./img/zf_cube3.png", "./img/zf_cube4.png", "./img/zf_cube5.png", "./img/zf_cube6.png", "./img/zf_cubeBg.jpg", "./img/zf_cubeTip.png", "./img/zf_emploment.png", "./img/zf_messageArrow1.png", "./img/zf_messageArrow2.png", "./img/zf_messageChat.png", "./img/zf_messageKeyboard.png", "./img/zf_messageLogo.png", "./img/zf_messageStudent.png", "./img/zf_outline.png", "./img/zf_phoneBg.jpg", "./img/zf_phoneDetail.png", "./img/zf_phoneListen.png", "./img/zf_phoneLogo.png", "./img/zf_return.png", "./img/zf_style1.jpg", "./img/zf_style2.jpg", "./img/zf_style3.jpg", "./img/zf_styleTip1.png", "./img/zf_styleTip2.png", "./img/zf_teacher1.png", "./img/zf_teacher2.png", "./img/zf_teacher3.jpg", "./img/zf_teacher4.png", "./img/zf_teacher5.png", "./img/zf_teacher6.png", "./img/zf_teacherTip.png"];
    let len = data.length,
        n = 0;
    let run = function (callback) {
        data.forEach(item => {
            let tempImg = new Image();
            tempImg.onload = function () {
                tempImg = null;
                $current.css('width', ++n / len * 100 + '%');
                if (n === len) {
                    clearTimeout(delayTime);
                    callback && callback();
                }
            };
            tempImg.src = item;
        })
    };
    let delayTime = null;
    let maxDelay = function (callback) {
        delayTime = setTimeout(() => {
            if (n / len > 0.8) {
                $current.css('width', '100%');
                callback && callback();
            } else {
                alert('你的网络不佳');
            }
        }, 10000);
    };

    let done = function () {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            $loading.remove();
            phoneRender.init();
        }, 1000)
    };

    return {
        init: function () {
            $loading.css('display', 'block');
            run(done);
            maxDelay(done);
        }
    }
})();
let phoneRender = (function () {
    let $phone = $('.phone'),
        $incomingCall = $phone.find('.incoming-call'),
        $circle = $incomingCall.find('.circle'),
        $time = $('time'),
        callAudio = document.querySelector('.incoming-call audio'),
        $answer = $phone.find('.answer'),
        $hang = $answer.find('.hang'),
        sayAudio = document.querySelector('.answer audio');

    // 接听事件
    let totalTime = null,
        playTime = null;
    let connect = function () {
        callAudio.pause();
        $(callAudio).remove();
        $incomingCall.hide();
        $answer.css('animation', 'move 0.3s linear both');
        $time.show();
        sayAudio.play();
        totalTime = sayAudio.duration;
        autoTimer = setInterval(callTime, 1000);
    };

    // 计算音频播放的时间
    let autoTimer = null;
    let callTime = function () {
        playTime = sayAudio.currentTime;
        let sec = Math.floor(playTime),
            minute = Math.floor(sec / 60);
        sec < 10 ? sec = '0' + sec : sec;
        minute < 10 ? minute = '0' + minute : minute;
        $time.html(minute + ':' + sec);
        if (playTime >= totalTime) {
            playEnd();
        }
    };
    // 播放结束后

    let playEnd = function () {
        sayAudio.pause();
        $(sayAudio).remove();
        clearInterval(autoTimer);
        $phone.remove();
        messageRender.init();
    }

    return {
        init: function () {
            $phone.css('display', 'block');
            callAudio.play();
            $circle.tap(connect);
            $hang.tap(playEnd);
        }
    }
})();
let messageRender = (function () {
    let $message = $('.message'),
        $messageList = $message.find('.message-list'),
        $messageBox = $messageList.find('ul'),
        $infoList = $messageList.find('li'),
        $keyBoard = $message.find('.key-board'),
        $span = $keyBoard.find('span'),
        $submit = $keyBoard.find('a'),
        music = document.querySelector('.message audio');

    // 展示消息
    let autoShow = null,
        setp = 0;
    let showMessage = function () {
        let $current = $infoList.eq(setp++);
        $current.css('animation', 'showMessage 0.3s linear both');
        verification();
        if (setp === 2) {
            clearTimeout(autoShow);
            showKey();
            $submit.tap(send);
        }
        //结束
        if (setp === $infoList.length) {
            let timer = setTimeout(() => {
                clearInterval(autoShow);
                clearTimeout(timer);
                $message.remove();
                cubeRender.init();
            }, 1000);
        }
    };
    // 展示键盘
    let showKey = function () {
        $keyBoard.css('transform', 'translateY(0rem)').one('transitionend', function () {
            let str = '是不是HTML5和移动端没学好啊',
                len = 0,
                text = '';
            let textShow = setInterval(() => {
                text = $span.html();
                $span.html(text += str[len++]);
                if (len >= str.length) {
                    clearInterval(textShow);
                    $submit.css('opacity', '1');
                }
            }, 50);
        })
    };
    // 点击发送
    let send = function () {
        $keyBoard.css('transform', 'translateY(6.7rem)');
        $submit.css('opacity', '0');
        $span.hide();
        music.play();
        $(`<li class="right">
            <img src="../img/zf_messageLogo.png" alt="">
            <i></i>
            <p>${$span.html()}</p>
            </li>`).insertAfter($messageBox.eq(1));
        autoShow = setInterval(showMessage, 1000);
    };
    // 验证ul的高度,
    let curH = 0,
        top = 0;
    let verification = function () {
        let winH = document.documentElement.clientHeight * 0.8,
            prev = $infoList.eq(setp).prev()[0];
        if (prev && prev.previousElementSibling && prev.previousElementSibling.tagName === 'LI') {
            prev = prev.previousElementSibling;
            curH += prev.offsetHeight + 40;
        }
        if (curH >= winH) {
            if (!prev) {
                return;
            }
            top += prev.offsetHeight + 40;
            $messageBox.css('top', -(top));
        }
    };
    return {
        init: function () {
            $message.show();
            autoShow = setInterval(showMessage, 1000);
            music.play();
        }
    }
})();
let cubeRender = (function () {
    let $cube = $('.cube'),
        $rotateBox = $cube.find('ul'),
        $eleList = $rotateBox.find('li');
    let rotateX = -35,
        rotateY = 35,
        rotate = null,
        starX = null,
        starY = null,
        changY = null,
        changX = null;
    let start = function (e) {
        rotate = e.changedTouches[0];
        starX = rotate.clientX;
        starY = rotate.clientY;
    };
    let move = function (e) {
        rotate = e.changedTouches[0];
        changX = rotate.clientX - starX;
        changY = rotate.clientY - starY;
    };
    let end = function (e) {
        let isMove = false;
        Math.abs(changX) > 30 || Math.abs(changY) > 30 ? isMove = true : null;
        if (isMove) {
            rotateX = rotateX - changY / 3;
            rotateY = rotateY + changX / 3;
            $rotateBox.css('transform', `scale(0.6) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
            changX = null;
            changY = null;
        }
    };
    return {
        init: function () {
            $cube.show();
            $rotateBox.on('touchstart', start);
            $rotateBox.on('touchmove', move);
            $rotateBox.on('touchend', end);
        }
    }
})();

let detailsRender = (function () {

    return {
        init: function () {}
    }
})();

let hell = window.location.href,
    index = hell.indexOf('#');
let hash = index > 0 ? hell.substr(index + 1) : null;
switch (hash) {
    case 'loading':
        loadingRender.init();
        break;
    case 'phone':
        phoneRender.init();
        break;
    case 'message':
        messageRender.init();
        break;
    case 'cube':
        cubeRender.init();
        break;
    case 'details':
        detailsRender.init();
        break;
    default:
        loadingRender.init();
}