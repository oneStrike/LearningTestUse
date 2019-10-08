$(function () {
    let imgData = null,
        page = 0,
        liList = document.getElementsByTagName('li');
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
    let setData = function () {
        let createHTML = function (img) {
            if (!img) {
                return;
            };
            let {
                title,
                pic,
                id,
                link,
            } = img;
            return `<a href="${link}">
            <div><img src="${pic}" alt=""></div>
            <span>${title}</span>
        </a>`
        };
        for (let i = 0, len = imgData.length; i < len; i += 3) {
            let item1 = imgData[i],
                item2 = imgData[i + 1],
                item3 = imgData[i + 2];
            liList[0].innerHTML += createHTML(item1);
            liList[1].innerHTML += createHTML(item2);
            liList[2].innerHTML += createHTML(item3);
        };
    };

    getData();
    setData();
    let maxNumberImg = function () {
        window.onscroll = function () {
            let body = document.documentElement || document.body,
                winH = body.scrollHeight + body.clientHeight,
                imgH = body.scrollTop;
        }

    };
    maxNumberImg();
})