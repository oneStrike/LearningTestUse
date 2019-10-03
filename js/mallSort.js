$(function () {
    let productRender = (function () {
        let productData = null,
            listBox = document.getElementById('list'),
            headerBox = document.getElementById('header'),
            linkList = headerBox.getElementsByTagName('a'),
            liList = listBox.getElementsByTagName('li');
        let getData = function () {
            $.ajax({
                url: '../json/mallSort.json',
                method: 'GET',
                async: false,
                dataType: 'json',
                success: function (result) {
                    productData = result;
                }
            })
        };

        let setELe = function () {
            let str = ``;
            for (var i = 0; i < productData.length; i++) {
                let {
                    time,
                    price,
                    hot,
                    img,
                    title
                } = productData[i];
                str += `<li data-time="${time}" data-price="${price}" data-hot="${hot}">
                    <a href="javascript:;">
                    <img src="${img}" alt="">
                    <p>${title}</p>
                    <span>￥${price}</span><br>
                    <span>上架日期:${time}</span><br>
                    <span>热度：${hot}</span>
                </a></li>`;
            };
            listBox.innerHTML = str;
        };

        let clickEve = function () {
            liList = Array.from(liList);
            let arr = ['data-time', 'data-price', 'data-hot'];
            for (let i = 0; i < linkList.length; i++) {
                linkList[i].flag = -1;
                linkList[i].onclick = function () {
                    for (var k = 0; k < linkList.length; k++) {
                        linkList[k].flag = -1;
                    }
                    linkList[i].flag *= -1;
                    liList.sort(function (a, b) {
                        a = a.getAttribute(arr[i]);
                        b = b.getAttribute(arr[i]);
                        if (i === 0) {
                            a = a.replace(/-/g, '');
                            b = b.replace(/-/g, '');
                        };
                        return (a - b) * linkList[i].flag;
                    });
                    let frag = document.createDocumentFragment();
                    for (var j = 0; j < liList.length; j++) {
                        frag.appendChild(liList[j])
                    };
                    listBox.appendChild(frag);
                    frag = null;
                }
            };

        };

        return {
            init: function () {
                getData();
                setELe();
                clickEve();
            }
        }
    }());
    productRender.init();
})