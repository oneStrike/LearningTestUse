$(function () {
    let page = 0,
        imgData = null,
        $liList = $('.flowBox li'),
        isRun = false;
    let getData = function () {
        page++;
        $.ajax({
            url: `../json/data.json?page=${page}`,
            method: 'GET',
            async: false,
            dataType: 'json',
            success: function (result) {
                imgData = result;
            }
        });
    };
    getData();

    let setData = function () {
        for (var i = 0; i < imgData.length; i += 3) {
            $liList.sort(function (a, b) {
                return $(a).outerHeight() - $(b).outerHeight();
            }).each(function (index, item) {
                if (!(imgData[i + index])) return;
                let {
                    title,
                    pic,
                    link,
                    id
                } = imgData[i + index];
                $(`<a href="${link}">
                    <div><img src="${pic}" alt=""></div>
                    <span>${title}</span>
                </a>`).appendTo($(item));
            })
        };
        isRun = false;
    };
    setData();

    $(window).on('scroll', function () {
        let $winH = $(window).outerHeight(),
            pageH = document.documentElement.scrollHeight || document.body.scrollHeight,
            $scrollT = $(window).scrollTop();
        if (($scrollT + 100) >= (pageH - $winH)) {
            if (isRun) return;
            isRun = true;
            if (page > 5) {
                alert('没有更多数据了');
                return;
            }
            getData();
            setData();
        }
    })
})