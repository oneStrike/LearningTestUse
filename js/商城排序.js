let listBox = document.getElementById('list'),
    headerBox = document.getElementById('header'),
    linkList = headerBox.getElementsByTagName('a'),
    productList = listBox.getElementsByTagName('li');
(function () {
    let productData = null;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../json/商城排序.json', false);
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            productData = xhr.responseText;
        }
        productData ? productData = window.JSON.parse(productData) : null;
    };

    xhr.send(null);
    let str = ``;
    for (var i = 0; i < productData.length; i++) {
        let {
            img,
            price,
            title,
            time,
            hot
        } = productData[i];
        str += `
        <li data-time="${time}" data-hot="${hot}" data-price="${price}">
            <a href="javascript:;">
            <img src="${img}" alt="">
            <p>${title}</p>
            <span>￥${price}</span>
        </a></li>`;
    };
    listBox.innerHTML = str;
}());

(function () {
    let sortList = function () {
        let {
            index: _index
        } = this;
        let _flag = this.flag;
        productList = Array.from(productList);
        productList.sort((a, b) => {
            let arr = ['data-time', 'data-price', 'data-hot'];
            let aInn = a.getAttribute(arr[_index]),
                bInn = b.getAttribute(arr[_index]);
            if (_index === 0) {
                aInn = aInn.replace(/-/g, '');
                bInn = bInn.replace(/-/g, '');
            };
            return (aInn - bInn) * _flag;
        });

        for (var i = 0; i < productList.length; i++) {
            listBox.appendChild(productList[i])
        }
    };

    for (let i = 0; i < linkList.length; i++) {
        linkList[i].index = i;
        linkList[i].flag = -1;
        linkList[i].onclick = function () {
            for (var j = 0; j < linkList.length; j++) {
                if (this !== linkList[i]) {
                    linkList[i].flag = -1;
                };
            };
            sortList.call(this);
            this.flag *= -1;

        };
    };

}())