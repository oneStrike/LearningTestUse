let productRender = (function () {

    //获取页面中的元素

    let productData = null,
        listBox = document.getElementById('list'),
        header = document.getElementById('header'),
        linkList = header.getElementsByTagName('a'),
        liList = listBox.getElementsByTagName('li');
    let getData = function () {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../JSON/商城排序.json', false),
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    productData = window.JSON.parse(xhr.response);
                }
            }
        xhr.send(null);
    };

    let createEle = function () {
        let str = ``;
        for (var i = 0; i < productData.length; i++) {
            let {
                time,
                price,
                hot,
                title,
                img
            } = productData[i];
            str += `<li data-time="${time}" data-price="${price}" data-hot="${hot}">
                <a href="javascript:;">
                    <img src="${img}" alt="">
                    <p>${title}</p>
                    <span>￥${price}</span>
                </a></li>`;
        };
        listBox.innerHTML = str;
    };

    let clickEve = function () {
        for (let i = 0; i < linkList.length; i++) {
            linkList[i].onclick = function () {
                let arr = ['data-time', 'data-price', 'data-hot'];

            }
        }
    }

    return {
        init: function () {
            getData();
            createEle();
            clickEve();
        }
    }
}())
productRender.init()