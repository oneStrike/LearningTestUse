let productRender = (function () {
    let productData = null,
        listBox = document.getElementById('list'),
        headerBox = document.getElementById('header'),
        linkList = headerBox.getElementsByTagName('a'),
        productList = listBox.getElementsByTagName('li');
    //获取数据
    let getData = function () {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../json/商城排序.json', false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                productData = window.JSON.parse(xhr.responseText);
            }
        }
        xhr.send(null);
    };
    //数据绑定
    let bindHTML = function () {
        let str = ``;
        productData.forEach(element => {
            let {
                time,
                price,
                hot,
                img,
                title
            } = element;
            str += `<li data-time="${time}" data-price="${price}" data-hot="${hot}">
                    <a href="javascript:;">
                          <img src="${img}" alt="">
                         <p>${title}</p>
                         <span>￥${price}</span><br>
                         <span>日期：${time}</span><br>
                         <span>热度：${hot}</span>
                     </a>
                </li>`;
        });
        listBox.innerHTML = str;
    };

    //绑定点击事件
    let bindClick = function () {
        //转换数组
        linkList = Array.from(linkList);
        //循环绑定点击事件
        linkList.forEach(function (element, index) {
            element.flag = -1;
            element.onclick = function (e) {
                //转换数组
                productList = Array.from(productList);
                //重新排列
                linkList.forEach(function (element) {
                    if (e.target !== element) {
                        element.flag = -1;
                    }
                })
                e.target.flag *= -1;
                productList.sort(function (a, b) {
                    let arr = ['data-time', 'data-price', 'data-hot'];
                    let aInn = a.getAttribute(arr[index]),
                        bInn = b.getAttribute(arr[index]);
                    if (index === 0) {
                        aInn = aInn.replace(/-/g, '');
                        bInn = bInn.replace(/-/g, '');
                    };

                    return (aInn - bInn) * e.target.flag;
                });
                //重新添加
               let frg = document.createDocumentFragment();
                productList.forEach(function (element) {
                    frg.appendChild(element)
                });
                listBox.appendChild(frg);
            };

        });

    };

    return {
        init: function () {
            getData();
            bindHTML();
            bindClick();
        }
    }
}())
productRender.init();